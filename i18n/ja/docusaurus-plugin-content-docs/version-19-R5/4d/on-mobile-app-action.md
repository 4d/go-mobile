---
id: on-mobile-app-action
title: On Mobile App Action
---

**On Mobile App Action**( *mobileInfo* : Object ) -> *status* : Object

| 引数         | Type   |    | 詳細                           |
| ---------- | ------ | -- | ---------------------------- |
| mobileInfo | Object | -> | モバイルアプリから渡された情報              |
| status     | Object | <- | Action status & data synchro |


## 詳細

The `On Mobile App Action` 4D database method is in charge of managing actions requested by the mobile application for a specific session.

:::note

The mobile application must have been authenticated by the [On Mobile App Authentication](https://doc4d.github.io/go-mobile/docs/next/4d/on-mobile-app-authentication) database method.

:::

This database method is called by 4D when a mobile application sends an action request.

The database method receives required information from the mobile application in the $mobileInfo parameter (object), and must return the action status in the $status parameter (object). You must declare and initialize these parameters as follows:

 ```4d

 //On Mobile App Action database method
#DECLARE ($mobileInfo : Object) -> $status : Object
  // ...Code for the method
$status:=New object() //do not forget to create the object to return
 ```

The following properties are received in the **mobileInfo** object parameter:


| Property name |                     | Type          | 詳細                                                                                                  |
| ------------- | ------------------- | ------------- | --------------------------------------------------------------------------------------------------- |
| action        |                     | テキスト          | Action name                                                                                         |
|               | id                  | テキスト          | Session identifier                                                                                  |
|               | ip                  | テキスト          | Session IP                                                                                          |
|               | id                  | テキスト          | Application id                                                                                      |
| parameters    |                     | Object        | Action parameters sent from the mobile application                                                  |
| context       |                     | Object        | Context parameters for the requested action                                                         |
|               | dataClass           | テキスト          | 4D dataclass name                                                                                   |
|               | entity.primaryKey   | Text, Longint | (optional, returned if the action is related to a selected entity). Primary key of the entity.      |
|               | entity.relationName | テキスト          | (optional, returned if the action is related to a linked entity). Many-to-one relation name         |
|               | parent.primaryKey   | Text, Longint | (optional, returned if the action is related to a linked entity). Primary key of the parent entity. |
|               | parent.relationName | テキスト          | (optional, returned if the action is related to a linked entity). One-to-many relation name         |
|               | parent.dataClass    | テキスト          | (optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.  |


After processing information, the database method must return an object with the following properties in *status*:

| Property name | Type                  | 詳細                                                                                                                                                              |
| ------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success       | ブール                   | True if action has been successfully processed, False otherwise.                                                                                                |
| statusText    | テキスト                  | (Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.   |
| errors        | Collection of objects | (Optional) Each object contains a pair of 'parameter'/'message' keys to display in the mobile application for rejected entries (see Go mobile documentation).   |
| dataSynchro   | ブール                   | True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization |

## 例題

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