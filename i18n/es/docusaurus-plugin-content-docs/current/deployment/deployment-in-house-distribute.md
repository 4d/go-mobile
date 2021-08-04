---
id: deploy-in-house-distribution
title: Distribuir una aplicación interna
---

> **OBJETIVOS**
> 
> Subir su aplicación a un servidor seguro.


## PASO 1. Suba su aplicación

Suba su aplicación a un servidor seguro:

* recursos (imagen de visualización e imagen de tamaño completo)
* archivo `manifest.plist`
* archivo `.ipa`

Puede utilizar cualquier servicio de almacenamiento en la nube para distribuir su aplicación siempre que esté protegida (Dropbox, Google Drive, etc.).

:::nota

Su recurso y sus URL ipa deben coincidir con las URL definidas en su archivo `manifest.plist`.

:::

## PASO 2. Cree el enlace de instalación

Cree un **enlace de servicios ITMS**(iTUnes Music Store) con la dirección web completa de su archivo manifiesto como parámetro:

```html
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

Este enlace se puede utilizar al enviar correos electrónicos, anidados en una página html o incluso dentro de un código QR.

Aquí un ejemplo simple:

![Contact demo app install](img/Contact-demo-app-install.png)

*El código QR utilizado para esta documentación no está activo.*

## PASO 3. Instale su aplicación en iOS

* Instale la aplicación haciendo clic en el enlace o escaneando un código QR

![Scan and install](img/Scan-and-install.png)

* Cuando abre por primera vez una aplicación empresarial que instaló manualmente, se mostrará una notificación que indica que el desarrollador de la aplicación no es de confianza en su dispositivo.

* Ignore este mensaje y haga clic en **Cancel**.

* En Reglas > General > Gestión de perfiles & Gestión de dispositivo, en el encabezado "Enterprise App", se lista el perfil del desarrollador.

![Untrust developer](img/Untrust-developer.png)

* Introduzca el nombre del perfil del desarrollador para que sea reconocido como confiable.

![Trust-confirmation](img/Trust-confirmation.png)

* Luego puede ir a su aplicación y abrirla.

Felicitaciones... ahora puede distribuir su primera aplicación interna.
