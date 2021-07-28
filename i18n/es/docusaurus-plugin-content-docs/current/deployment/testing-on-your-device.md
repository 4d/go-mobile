---
id: testing-on-your-device
title: Instalar en su dispositivo iOS
---

You can install and test your mobile application on a connected device.


## Requisitos

You need to subscribe to an Apple Developer Program. Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [Free Apple Developer Program]`(free-developer-account.html)-- to add`: For testing only
* [Apple Developer Program for organization](../tutorials/developer-program/register-apple-developer-program-organization) or [individual](../tutorials/developer-program/register-apple-developer-program-individual): For an App Store Deployment
* [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program): To deploy your app in-house


:::note

You need [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate app installation (optional).

:::


## PASO 1. Account creation

* **Identificador Apple**: cree su identificador Apple. Si no tienen uno, haga clic [aquí](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: elija un Apple Developer Program (para empresas o individuos) para desplegar en la App Store o el Apple Developer Enterprise Program (para despliegue interno).

## PASO 2. Configuración Xcode

* **Developer Account**: En Xcode > Preferences > Accounts, añada su Apple ID. ![Developer Account](img/Developer-Account-4D-for-iOS.png)

## PASO 3. Obtenga su Team ID

* If your are using a [Free Apple Developer Program]`(free-developer-account.html--to addd)` go to [step 4](#step-4-team-id-for-free-account).
* If your are using an [Apple Developer Program for organization](../tutorials/developer-program/register-apple-developer-program-organization), [individual](../tutorials/developer-program/register-apple-developer-program-individual) or an [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program) go to [step 5](#step-5-team-id-for-paid-subscription-account).

## PASO 4. Team ID for Free account

### Deje que Xcode genere su perfil y certificado

* Abra su proyecto actual desde la pestaña BUILD.

![Build tab](img/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here]`(free-developer-account.html)` from the Team dropdown list.

![Account-Selection](img/account-Selection-Free-Account.png)

* Conecte su dispositivo a su ordenador y selecciónelo en el menú superior de Xcode.

![Select your device](img/select-device-Free-Account.png)

* Xcode genera automáticamente los perfiles y certificados de aprovisionamiento necesarios para crear su aplicación.

### Creación del proyecto con Xcode

* ¡Presione el botón Build and run Button en Xcode!

![Build and Run](img/Build-Run-Free-Account.png)

## PASO 5. Team ID for paid subscription account

* **Team ID**: Haga clic en Developer Account > Membership y obtenga su Team ID. ![Developer Account membership](img/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Lance 4D for iOS en Sections > General e introduzca su Team ID. ![General section](img/Team-ID-General-Section-4D-for-iOS.png)

* Vaya al PASO 6 para ejecutar su proyecto en su dispositivo.

## PASO 6. Installation

### Instalación automática con Apple Configurator 2

* Cuando su aplicación esté lista, abra la pestaña CREAR.
* Conecte su dispositivo a su ordenador con un cable USB.
* Desde la pestaña CREAR, haga clic en **Instalador**.

![Install button](img/Install-button-build-tab-4D-for-iOS.png)

* ¡La aplicación se está instalando en su dispositivo!

### Instalación manual con Xcode

* Cuando su aplicación esté lista, abra la pestaña CREAR.
* Conecte su dispositivo a su ordenador con un cable USB.
* Desde la pestaña CREAR, haga clic en **Instalador**.

![Manual installation](img/Manual-installation-4D-for-iOS.png)

* Se crea un archivo de su proyecto

![Archive creation](img/Archive-creation.png)

* Indique el archivo generado en Finder

![Reveal archive in Finder](img/Reveal-archive-in-Finder.png)

* Abra Xcode y vaya a Menu > Window > Devices and Simulator y arrastre y suelte el archivo ipa generado en la sección Installed Apps.

![Devices and Simulators](img/Devices-and-Simulators-4D-for-iOS.png)

* The app is now being installed on your device.





