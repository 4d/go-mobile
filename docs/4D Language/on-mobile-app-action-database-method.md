---
id: on-mobile-app-action-database-method
title: On Mobile App Action database method
---

<!-- REF #4D.OnMobileAppAction.Syntax --> $1 -> On Mobile App Action database method -> $0<!-- END REF -->

<!-- REF #4D.OnMobileAppAction.Params -->
|Parameter|Type||Description|
|---|---|----|---|
|$1|Object|->|Information passed by the mobile application|
|$0|Object|<-|Action status & data synchro|<!-- END REF -->


## Description 

The **On Mobile App Action database method** is in charge of managing actions requested by the mobile application for a specific session.  

**Note**: The mobile application must have been authenticated by the On Mobile App Authentication database method. 

This database method is called by 4D when a mobile application sends an action request. 

The database method receives required information from the mobile application in the $1 parameter (object), and must return the action status in the $0 parameter (object). You must declare and initialize these parameters as follows:

 ```4d

 //On Mobile App Action database method
 C_OBJECT($0;$1)
  // ...Code for the method
 $0:=New object //do not forget to create the object to return
 ```
 
The following properties are received in the **$1** object parameter:


|Property name||Type|Description|
|---|---|----|---|
|action||Text|Action name|
|---|id|Text|Session identifier|
|---|ip|Text|Session IP|
|---|id|Text|Application id|
|parameters||Object|Action parameters sent from the mobile application|
|context|---|Object|Context parameters for the requested action|
|---|dataClass|Text|4D dataclass name|
|---|entity.primaryKey|Text, Longint|(optional, returned if the action is related to a selected entity). Primary key of the entity. |
|---|entity.relationName|Text|(optional, returned if the action is related to a linked entity). Many-to-one relation name|
|---|parent.primaryKey|Text, Longint |(optional, returned if the action is related to a linked entity). Primary key of the parent entity.|
|---|parent.relationName|Text|(optional, returned if the action is related to a linked entity).One-to-many relation name|
|---|parent.dataClass|Text|(optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.|

	
After processing information, the database method must return an object with the following properties in $0:

|Property name|Type|Description|
|---|----|---|
|success|Boolean|True if action has been successfully processed, False otherwise.|
|statusText|Text|(Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.|
|errors|Collection of objects|(Optional) Each object contains a pair of 'parameter'/'message' keys to display in the mobile application for rejected entries (see Go mobile documentation).|
|dataSynchro|Boolean|True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization|
		
## Example  

```4d
  // On Mobile App Action
  // 2 actions are defined: "done" and "postponeAll"
 
 C_OBJECT($0)
 C_OBJECT($1)
 
 C_OBJECT($o;$context;$request;$result)
 
 $request:=$1 //Information provided by the mobile app
 $context:=$request.context
 
 Case of
 
    :($request.action="done")
       $o:=New object(\
       "dataClass";$context.dataClass;\
       "ID";$context.entity.primaryKey;\
       "CompletePercentage";100)
 
       $result:=modifyStatus($o) //call your project method to modify the status of the entity
 
    :($request.action="postponeAll")
       $o:=New object("dataClass";$context.dataClass)
 
       $result:=postponeAll($o) //call your project method to postpone all entities of the dataClass
 
    Else //Unknown request
       $result:=New object("success";False)
 
 End case
 
 $0:=$result  //Information returned to mobile app
 
 ```