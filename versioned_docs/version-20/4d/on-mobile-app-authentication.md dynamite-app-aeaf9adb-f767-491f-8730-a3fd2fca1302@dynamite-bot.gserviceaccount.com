---
id: on-mobile-app-authentication
title: On Mobile App Authentication
---

**On Mobile App Authentication**( *mobileInfo* : Object ) -> *result* : Object 

|Parameter|Type||Description|
|---|---|----|---|
|mobileInfo|Object|->|Information passed by the mobile application|
|result|Object|<-|Authentication status|

## Description

The `On Mobile App Authentication` 4D database method is in charge of managing mobile app authentication to 4D Server or 4D. It is automatically called by 4D when a user agent sends a login request to 4D Server or 4D for the first time.

:::note

A user agent is defined by an application ID, a device ID, and a team ID. These ids are passed to the `On Mobile App Authentication` database method (see below).
:::

The `On Mobile App Authentication` database method is always called for a first connection, even if the mobile application was built in Guest mode.

The method receives all necessary information from the mobile application in the *mobileInfo* parameter (object), and must return an authentication status in the *result* parameter (object). You must declare and initialize these parameters as follows:

```4d

  //On Mobile App Authentication database method
#DECLARE ($mobileInfo : Object) -> $result : Object

  // ...Code for the method
$result:=New object() //do not forget to create the object to return

```

The following properties are received in the *mobileInfo* object parameter:

|Property||Type|Description|
|---|---|----|---|
|email||Text|User email. Not mandatory, can be empty for guest access|
|application||Object|Information about the mobile application|
||id|Text|Mobile application id|
||name|Text|Mobile application name|
||version|Text|Mobile application version|
|device||Object|Information about the mobile device (usually, a mobile phone)|
||id|Text|Generated unique device id|
||version|Text|System version of the device|
||description|Text|Description of the device|
||simulator|Boolean|True if the device is a simulator|
|team||Object|Apple Developer Team information|
||id|Text|Team id (allows developers to use the Xcode project Build and Run functionality)|
|language||Object|Language settings of the user device|
||id|Text|User device current language id, ex: en_US|
||region|Text|User device current region, ex: US|
||code|Text|User device current language, ex: en|
|parameters||Object|Any additional information that could be added by the mobile app for custom use|
|session||Object|Session information|
||id|Text|UUID of the [Session](https://developer.4d.com/docs/API/SessionClass.html) object on the 4D server |
||ip|Text|Client IP address|


:::note

You can access the [Session object](https://developer.4d.com/docs/API/SessionClass.html) automatically created on the 4D server from this database method. You can use this object to control the mobile session. If the server is restarted, the id and privileges of existing mobile sessions are automatically restored. Other session properties such as `Storage`, `expirationDate` and `idleTimeout` are reset.

:::

After processing information, the database method should return a *result* object with the following properties:

|Property|Type|Description|
|---|---|----|
|userInfo|Object|User values to filter queries.|
|success|Boolean|True if authentication is successful, False otherwise. If success=False, the connection is denied.|
|statusText|Text|(Optional) Message to display on the mobile application. If success=true, welcome message; if success=false, can be used to provide user with an explanation.|
|verify|Boolean|(Optional) True if you want to validate the first login of the [user session](../special-features/session-management.md), False otherwise. Default is False|


The connection is automatically rejected if:

- no value is set to *result* or *result* is not defined,
- an invalid value is set to *result*,
- the `On Mobile App Authentication` database method is not defined in the application.

:::info

The connection is automatically accepted if it comes from "localhost" since it is considered a developer testing connection.

:::

## Authenticating a mobile request

Basically, authenticating a mobile application connection request is based upon the provided email. For example, if you want to grant access only to connections from emails at 4d.com domain, you can write in the `On Mobile App Authentication` database method:

```4d
 #DECLARE ($mobileInfo : Object) -> $result : Object  
   
 If($mobileInfo.email="@"+Char(At sign)+"4d.com")
    $result.success:=True
 End if
```

You can also identify the user agent using the `application.id`, `device.id`, and `team.id` from the `$mobileInfo` object, and decide to allow or deny access. 

If you want to validate emails afterwards, return `True` in `$result.verify`.

### Guest access

If the mobile application has been built with the "Requires an email to connect" option **unchecked**, it is a "guest mode" application. Then, the `$mobileInfo.email` string will be provided empty. In this case, you can:

- allow access to guests by returning `True` in `$result.success`. If you want to validate access afterwards, return `True` in `$result.verify`.
- identify and evaluate guest access using the user agent information, the decide to allow or deny access.
- deny access to guests by returning `False` in `$result.success`. This can be done for example if the server is in maintenance mode. In this case, an error will be displayed on the mobile app if the user clicks on the **Reload** button.

## Example  

Here is a template example for a `On Mobile App Authentication` database method:

```4d
 
  //On Mobile App Authentication database method
 #DECLARE ($mobileInfo : Object) -> $status : Object

 
 var $Boo_simulator : Boolean
 var $Txt_appID;$Txt_appName;$Txt_appVersion;$Txt_device;$Txt_deviceID;$Txt_email : Text
 var $Txt_IP;$Txt_languageCode;$Txt_languageId;$Txt_languageRegion;$Txt_osVersion;$Txt_sessionId : Text
 var $Txt_teamID : Text
 
  //Get user email
 $Txt_email:=String($mobileInfo.email)
 
 If(Length($Txt_email)=0) //no email was provided
  // Guest mode - allow or deny connection
    $status.success:=True
  // $status.success:=False if you want to deny guest access
 
  // Optional welcome message to display on mobile App.
    $status.statusText:="Welcome to my application"
 
 Else
  // Authenticated mode -  Allow or not the connection
    If(Is compiled mode) // Deployment version
 
  //Allow, for example, emails from the 4D.com domain
       $status.success:=($mobileInfo.email=("@"+Char(At sign)+"4d.com"))
 
    Else //Development version
 
  //Allow all adress for testing purposes
       $status.success:=True
 
    End if
 
    If($status.success)

 
  //Optional welcome message to display on mobile App.
       $status.statusText:="Authentication successful"
 
    Else
 
       $status.statusText:=$mobileInfo.email+" is not an authorized email address."
 
    End if
 End if
 
  // Get App information if identification is needed (optional)
 If($mobileInfo.application#Null)
    $Txt_appID:=$mobileInfo.application.id // App Id
    $Txt_appName:=$mobileInfo.application.name //App Name
    $Txt_appVersion:=$mobileInfo.application.version // App Version
 End if
 
  //Get Device information if identification is needed (optional)
 If($mobileInfo.device#Null)
    $Txt_device:=$mobileInfo.device.description //Device Description
    $Txt_deviceID:=$mobileInfo.device.id //Device Id
    $Txt_osVersion:=$mobileInfo.device.version //System Version
    $Boo_simulator:=$mobileInfo.device.simulator //True if device is a Simulator
 End if
 
  //Get the Team information if needed (optional)
 If($mobileInfo.team#Null)
    $Txt_teamID:=$mobileInfo.team.id //Team Id
 End if
 
  //Get the User Language information (optional)
 If($mobileInfo.language#Null)
    $Txt_languageCode:=$mobileInfo.language.Code
    $Txt_languageId:=$mobileInfo.language.id
    $Txt_languageRegion:=$mobileInfo.language.region
 End if
 
  //Get the session information
 If($mobileInfo.session#Null)
  //Could be stored for future use.
    $Txt_sessionId:=$mobileInfo.session.id //UUID created for this authentication
    $Txt_IP:=$mobileInfo.session.ip //IP address
 End if
 
  //Get the App parameters
 If($mobileInfo.parameters#Null)
  //Any additional information that could be added by mobile app for custom use (object)
 End if


```
