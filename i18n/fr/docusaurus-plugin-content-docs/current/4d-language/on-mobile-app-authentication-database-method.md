---
id: on-mobile-app-authentication-database-method
title: On Mobile App Authentication database method
---

<!-- REF #4D.OnMobileAppAuthentication.Syntax --> $1 -> On Mobile App Authentication database method -> $0<!-- END REF -->

<!-- REF #4D.OnMobileAppAuthentication.Params -->
| Parameter | Type   |    | Description                                      |
| --------- | ------ | -- | ------------------------------------------------ |
| $1        | Object | -> | Information passed by the mobile application     |
| $0        | Object | <- | Authentication status|<!-- END REF -->

|

## Description

The On Mobile App Authentication database method is in charge of managing mobile app authentication to 4D Server or 4D Developer. It is automatically called by 4D when a user agent sends a login request to 4D Server or 4D Developer for the first time.

Note: A user agent is defined by an application ID, a device ID, and a team ID. These ids are passed to the On Mobile App Authentication database method (see below).

The On Mobile App Authentication database method is always called for a first connection, even if the mobile application was built in Guest mode.

The method receives all necessary information from the mobile application in the $1 parameter (object), and must return an authentication status in the $0 parameter (object). You must declare and initialize these parameters as follows:

```4d

  //On Mobile App Authentication database method
 C_OBJECT($0;$1)
  // ...Code for the method
 $0:=New object //do not forget to create the object to return
```

The following properties are received in the $1 object parameter:

| Parameter   |             | Type    | Description                                                                      |
| ----------- | ----------- | ------- | -------------------------------------------------------------------------------- |
| email       |             | Texte   | User email. Not mandatory, can be empty for guest access                         |
| application |             | Object  | Information about the mobile application                                         |
|             | id          | Texte   | Mobile application id                                                            |
|             | name        | Texte   | Mobile application name                                                          |
|             | version     | Texte   | Mobile application version                                                       |
| device      |             | Object  | Information about the mobile device (usually, a mobile phone)                    |
|             | id          | Texte   | Generated unique device id                                                       |
|             | version     | Texte   | System version of the device                                                     |
|             | description | Texte   | Description of the device                                                        |
|             | simulator   | Booléen | True if the device is a simulator                                                |
| team        |             | Object  | Apple Developer Team information                                                 |
|             | id          | Texte   | Team id (allows developers to use the Xcode project Build and Run functionality) |
| language    |             | Object  | Language settings of the user device                                             |
|             | id          | Texte   | User device current language id, ex: en_US                                       |
|             | region      | Texte   | User device current region, ex: US                                               |
|             | code        | Texte   | User device current language, ex: en                                             |
| parameters  |             | Object  | Any additional information that could be added by the mobile app for custom use  |
| session     |             | Object  | Session information                                                              |
|             | id          | Texte   | Session UUID created for this authentication. Could be stored for future use     |
|             | ip          | Texte   | Client IP address                                                                |

After processing information, the database method should return an object with the following properties in $0:

| Parameter  | Type    | Description                                                                                                                                                   |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userInfo   | Object  | User values to filter queries.                                                                                                                                |
| success    | Booléen | True if authentication is successful, False otherwise. If success=False, the connection is denied.                                                            |
| statusText | Texte   | (Optional) Message to display on the mobile application. If success=true, welcome message; if success=false, can be used to provide user with an explanation. |

The connection is automatically rejected if:

- no value is set to $0 or $0 is not defined,
- an invalid value is set to $0,
- the **On Mobile App Authentication database method** is not defined in the application.

The connection is automatically accepted if it comes from "localhost" since it is considered a developer testing connection.

## Authenticating a mobile request


Basically, authenticating a mobile application connection request is based upon the provided email. For example, if you want to grant access only to connections from emails at 4d.com domain, you can write in the **On Mobile App Authentication database method**:

```4d
 If($1.email="@"+Char(At sign)+"4d.com")
    $0.success:=True
 End if
 ```

You can also identify the user agent using the application.id, device.id, and team.id from the $1 object, and decide to allow or deny access.

### Guest access

If the mobile application has been built with the "Requires an email to connect" option **unchecked**, it is a "guest mode" application. Then, the $1.email string will be provided empty. In this case, you can:

- allow access to guests by returning True in $0.success,
- identify and evaluate guest access using the user agent information, the decide to allow or deny access.
- deny access to guests by returning False in $0.success. This can be done for example if the server is in maintenance mode. In this case, an error will be displayed on the mobile app if the user clicks on the **Reload** button.

## Example
Here is a template example for a On Mobile App Authentication database method:
```4d
  //On Mobile App Authentication database method
 C_OBJECT($0)
 C_OBJECT($1)

 C_BOOLEAN($Boo_simulator)
 C_TEXT($Txt_appID;$Txt_appName;$Txt_appVersion;$Txt_device;$Txt_deviceID;$Txt_email)
 C_TEXT($Txt_IP;$Txt_languageCode;$Txt_languageId;$Txt_languageRegion;$Txt_osVersion;$Txt_sessionId)
 C_TEXT($Txt_teamID)
 C_OBJECT($Obj_request;$Obj_response)

 $Obj_request:=$1 //Information provided by mobile application
 $Obj_response:=New object //To return in $0 after processing

  //Get user email
 $Txt_email:=String($Obj_request.email)

 If(Length($Txt_email)=0) //no email was provided
  // Guest mode - allow or deny connection
    $Obj_response.success:=True
  // $Obj_response.success:=False if you want to deny guest access

  // Optional welcome message to display on mobile App.
    $Obj_response.statusText:="Welcome to my application"

 Else
  // Authenticated mode -  Allow or not the connection
    If(Is compiled mode) // Deployment version

  //Allow, for example, emails from the 4D.com domain
       $Obj_response.success:=($Obj_request.email=("@"+Char(At sign)+"4d.com"))

    Else //Development version

  //Allow all adress for testing purposes
       $Obj_response.success:=True

    End if

    If($Obj_response.success)

  //Optional welcome message to display on mobile App.
       $Obj_response.statusText:="Authentication successful"

    Else

       $Obj_response.statusText:=$Obj_request.email+" is not an authorized email address."

    End if
 End if

  // Get App information if identification is needed (optional)
 If($Obj_request.application#Null)
    $Txt_appID:=$Obj_request.application.id // App Id
    $Txt_appName:=$Obj_request.application.name //App Name
    $Txt_appVersion:=$Obj_request.application.version // App Version
 End if

  //Get Device information if identification is needed (optional)
 If($Obj_request.device#Null)
    $Txt_device:=$Obj_request.device.description //Device Description
    $Txt_deviceID:=$Obj_request.device.id //Device Id
    $Txt_osVersion:=$Obj_request.device.version //System Version
    $Boo_simulator:=$Obj_request.device.simulator //True if device is a Simulator
 End if

  //Get the Team information if needed (optional)
 If($Obj_request.team#Null)
    $Txt_teamID:=$Obj_request.team.id //Team Id
 End if

  //Get the User Language information (optional)
 If($Obj_request.language#Null)
    $Txt_languageCode:=$Obj_request.language.Code
    $Txt_languageId:=$Obj_request.language.id
    $Txt_languageRegion:=$Obj_request.language.region
 End if

  //Get the session information
 If($Obj_request.session#Null)
  //Could be stored for future use.
    $Txt_sessionId:=$Obj_request.session.id //UUID created for this authentication
    $Txt_IP:=$Obj_request.session.ip //IP address
 End if

  //Get the App parameters
 If($Obj_request.parameters#Null)
  //Any additional information that could be added by mobile app for custom use (C_OBJECT)
 End if

 $0:=$Obj_response
 ```