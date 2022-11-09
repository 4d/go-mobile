---
id: on-mobile-app-action
title: On Mobile App Action
---

**On Mobile App Action**( *mobileInfo* : Object ) -> *status* : Object

| Paramètres | Type   |    | Description                                      |
| ---------- | ------ | -- | ------------------------------------------------ |
| mobileInfo | Object | -> | Information passée par l'application mobile      |
| status     | Object | <- | Statut de l'action & synchronisation des données |


## Description

The `On Mobile App Action` 4D database method is in charge of managing actions requested by the mobile application for a specific session.

:::note

The mobile application must have been authenticated by the [On Mobile App Authentication](https://doc4d.github.io/go-mobile/docs/next/4d/on-mobile-app-authentication) database method.

:::

This database method is called by 4D when a mobile application sends an action request.

The database method receives required information from the mobile application in the $mobileInfo parameter (object), and must return the action status in the $status parameter (object). You must declare and initialize these parameters as follows:

 ```4d

 //On Mobile App Action database method
#DECLARE ($mobileInfo : Object) -> $status : Object
  // ...Code de la méthode
$status:=New object() //n'oubliez pas de créer l'objet à retourner
 ```

The following properties are received in the **mobileInfo** object parameter:


| Nom de propriété |                     | Type          | Description                                                                                         |
| ---------------- | ------------------- | ------------- | --------------------------------------------------------------------------------------------------- |
| action           |                     | Text          | Action name                                                                                         |
|                  | id                  | Text          | Session identifier                                                                                  |
|                  | ip                  | Text          | Session IP                                                                                          |
|                  | id                  | Text          | Application id                                                                                      |
| parameters       |                     | Object        | Action parameters sent from the mobile application                                                  |
| context          |                     | Object        | Context parameters for the requested action                                                         |
|                  | dataClass           | Text          | 4D dataclass name                                                                                   |
|                  | entity.primaryKey   | Text, Longint | (optional, returned if the action is related to a selected entity). Primary key of the entity.      |
|                  | entity.relationName | Text          | (optional, returned if the action is related to a linked entity). Many-to-one relation name         |
|                  | parent.primaryKey   | Text, Longint | (optional, returned if the action is related to a linked entity). Primary key of the parent entity. |
|                  | parent.relationName | Text          | (optional, returned if the action is related to a linked entity). One-to-many relation name         |
|                  | parent.dataClass    | Text          | (optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.  |


After processing information, the database method must return an object with the following properties in *status*:

| Nom de propriété | Type                | Description                                                                                                                                                     |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success          | Boolean             | True if action has been successfully processed, False otherwise.                                                                                                |
| statusText       | Text                | (Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.   |
| errors           | Collection d'objets | (Optional) Each object contains a pair of 'parameter'/'message' keys to display in the mobile application for rejected entries (see Go mobile documentation).   |
| dataSynchro      | Boolean             | True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization |

## Example

```4d
  // On Mobile App Action
  // 2 actions sont définies : "done" et "postponeAll"

#DECLARE ($request : Object) -> $result : Object

var $o;$context : Object

 $context:=$request.context

 Case of

    :($request.action="done")
       $o:=New object(\
       "dataClass";$context.dataClass;\
       "ID";$context.entity.primaryKey;\
       "CompletePercentage";100)

       $result:=modifyStatus($o) //appel de votre méthode projet pour modifier le statut de l'entité

    :($request.action="postponeAll")
       $o:=New object("dataClass";$context.dataClass)

       $result:=postponeAll($o) //appel de votre méthode projet pour reporter toutes les entités de la dataClass

    Else //Requête inconnue
       $result:=New object("success";False)

 End case

 ```