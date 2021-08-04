---
id: push-notification
title: Push notifications
---


## What is a push notification?

En un teléfono móvil, una notificación Push es un mensaje de alerta, recibido a través de una aplicación, que puede abrir, eliminar, autorizar o bloquear. Puede ser muy útil por ejemplo para notificar a los usuarios de la aplicación que hay una nueva versión disponible.

Pero, ¿qué pasa con la arquitectura a implementar, para integrar esta funcionalidad en una aplicación móvil? Y ¿Cuál es el proceso de una notificación push, desde la creación hasta la visualización en el teléfono del usuario?

## Technical architecture

Estos son los diferentes elementos necesarios para crear, enviar y recibir una notificación push móvil:

![Proceso de notificaciones Push](img/4D-for-ios-push-notification.png)

## Prerrequisitos

In order to send push notifications, an `AuthKey_XXXYYY.p8` authentication file from Apple is required.

1. Generate and download a .p8 key file as described in [this documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md).

2. In the [Publishing](../project-definition/publishing) page, check the **Push notifications** option and select your certificate in the mobile project.

![Publishing section](img/push-notification-publishing-section.png)


## Basic example to manage push notifications

The [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master) component provides methods to push notifications to one or multiple recipients. For detailed information, please refer to the [PushNotification component documentation](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md).

Here is a simple example of push notification sent to `test@4d.com`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new() 
$notification:=New object 
$notification.title:="Este es el título" 
$notification.body:="Este es el contenido de esta notificación" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

It's as simple as that!

:::tip

Use the [**4D Mobile App Server** component](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) to easily adapt the push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports and even better: pull requests.

:::

## Notificación push con sincronización de datos

With a push notification, you can also launch a synchronization to update your data.

For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone.

To do so using the `4D Mobile App Server` component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the `dataSynchro` boolean value in the `userInfo` object.

### Sincronización de datos con una notificación que abre un registro

By default, a notification opening a record automatically triggers a data synchronization.

For example, in a Contact app, if a contact’s specific information (*i.e.* a contact’s record, such as the address or the phone number) has been modified, the user receives a notification that automatically opens the relevant record and synchronizes the data contained in the record. When the user opens the notification, the contact’s information is fully updated.

Here's an example of the default behaviour, a `dataSynchro` request with the `open()` method:

:::nota

For `open()` method exclusively, this is the default behaviour. As a result, if you don't specify the `dataSynchro` boolean value, it is `true` by default.

:::

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

However, you can also choose not to force a data synchronization, by preventing `dataSynchro`:

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

### Sincronización de datos con una simple notificación

You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part.

Here is a code example that you can also use with other methods, as long as you fill the `userInfo` object with `dataSynchro` value.

```4d

$pushNotification:=MobileAppServer.PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```
![Data synchronization animation](img/pushandSynchro.gif)

## Configuración Windows

Windows users need to download the [last CURL version](https://curl.se/download.html) to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database.

## MobileApps folder

Whether you're working on Windows or on macOS, you need to copy the following files from your development project to your production project:

- `4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8`
- `4DBASE/MobileApps/ID.BundleID/manifest.json`


