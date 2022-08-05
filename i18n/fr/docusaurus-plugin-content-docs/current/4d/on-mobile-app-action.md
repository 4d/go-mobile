---
id: on-mobile-app-action
title: On Mobile App Action
---

**On Mobile App Action**( *mobileInfo* : Object ) -> *result* : Object

| Parameter  | Type   |    | Description                                  |
| ---------- | ------ | -- | -------------------------------------------- |
| mobileInfo | Object | -> | Information passed by the mobile application |
| result     | Object | <- | Action status & data synchro                 |


## Description

The `On Mobile App Action` 4D database method is in charge of managing actions requested by the mobile application for a specific session.

:::note

The mobile application must have been authenticated by the [On Mobile App Authentication](on-mobile-app-authentication.md) database method.

:::

This database method is called by 4D when a mobile application sends an action request.

The database method receives required information from the mobile application in the *mobileInfo* parameter (object), and must return the action status in the *result* parameter (object). You must declare and initialize these parameters as follows:

```4d
 //On Mobile App Action database method
#DECLARE ($mobileInfo : Object) -> $result : Object
  // ...Code for the method
$result:=New object() //do not forget to create the object to return
```

The following properties are received in the *mobileInfo* object parameter:


| Property name |                     | Type          | Description                                                                                           |
| ------------- | ------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| action        |                     | Texte         | Action name                                                                                           |
|               | id                  | Texte         | UUID of the [Session](https://developer.4d.com/docs/en/API/SessionClass.html) object on the 4D server |
|               | ip                  | Texte         | Session IP                                                                                            |
| parameters    |                     | Object        | Action parameters sent from the mobile application                                                    |
| context       |                     | Object        | Context parameters for the requested action                                                           |
|               | dataClass           | Texte         | 4D dataclass name                                                                                     |
|               | entity.primaryKey   | Text, Longint | (optional, returned if the action is related to a selected entity). Primary key of the entity.        |
|               | entity.relationName | Texte         | (optional, returned if the action is related to a linked entity). Many-to-one relation name           |
|               | parent.primaryKey   | Text, Longint | (optional, returned if the action is related to a linked entity). Primary key of the parent entity.   |
|               | parent.relationName | Texte         | (optional, returned if the action is related to a linked entity). One-to-many relation name           |
|               | parent.dataClass    | Texte         | (optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.    |

:::note

You can access the [Session object](https://developer.4d.com/docs/en/API/SessionClass.html) automatically created on the 4D server from this database method. You can use this object to control the mobile session.

:::

After processing information, the database method must return an object with the following properties in *result*:

| Property name | Type                  | Description                                                                                                                                                                                       |
| ------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success       | Booléen               | True if action has been successfully processed, False otherwise.                                                                                                                                  |
| statusText    | Texte                 | (Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.                                     |
| errors        | Collection of objects | (Optional) Each object contains a [pair of 'parameter'/'message' keys](../project-definition/actions#update-pending-tasks-that-failed) to display in the mobile application for rejected entries. |
| dataSynchro   | Booléen               | True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization                                   |

## Example

```4d
  // On Mobile App Action
  // 2 actions are defined: "done" and "postponeAll"

#DECLARE ($request : Object) -> $result : Object

var $o;$context : Object

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

 ```