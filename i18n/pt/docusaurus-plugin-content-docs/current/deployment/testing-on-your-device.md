---
id: testing-on-your-device
title: Instalar em seu dispositivo iOS
---

You can install and test your mobile application on a connected device.


## Requisitos

You need to subscribe to an Apple Developer Program. Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [Free Apple Developer Program]`(free-developer-account.html)-- to add`: For testing only
* [Apple Developer Program for organization](../tutorials/developer-program/register-apple-developer-program-organization) or [individual](../tutorials/developer-program/register-apple-developer-program-individual): For an App Store Deployment
* [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program): To deploy your app in-house


:::nota

You need [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate app installation (optional).

:::


## PASSO 1. Account creation

* **Apple ID**: Crie seu identificador Apple. Se ainda não tiver uma, clique em [here](https://appleid.apple.com/account#!&page=create).

* **Developer Account**: Escolha um programa Apple Developer (para empresas ou indivíduos) para lançamento na App Store ou no Programa Apple Developer Enterprise (para lançamentos in-house).

## PASSO 2. Configuração Xcode

* **Developer Account**: Em Xcode > Preferences > Accounts, adicione sua Apple ID. ![Developer Account](img/Developer-Account-4D-for-iOS.png)

## PASSO 3. Obtenha uma ID de Equipe

* If your are using a [Free Apple Developer Program]`(free-developer-account.html--to addd)` go to [step 4](#step-4-team-id-for-free-account).
* If your are using an [Apple Developer Program for organization](../tutorials/developer-program/register-apple-developer-program-organization), [individual](../tutorials/developer-program/register-apple-developer-program-individual) or an [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program) go to [step 5](#step-5-team-id-for-paid-subscription-account).

## PASSO 4. Team ID for Free account

### Deixe que Xcode gere seu perfil provisório e certificado

* Abra seu projeto atual da aba BUILD

![Build tab](img/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added [here]`(free-developer-account.html)` from the Team dropdown list.

![Account-Selection](img/account-Selection-Free-Account.png)

* Conecte seu aparelho para seu computador e selecione-o do menu superior em Xcode.

![Select your device](img/select-device-Free-Account.png)

* Xcode gera automaticamente os perfis e certificados que precisa para construir seu app.

### Construa seu projeto no Xcode usando sua Conta Gratuita

* Aperte o botão Build and Run de Xcode!

![Build and Run](img/Build-Run-Free-Account.png)

## PASSO 5. Team ID for paid subscription account

* **Team ID**: Clique em Developer Account > Membership e obtenha sua Team ID. ![Developer Account membership](img/Team-ID-4D-for-iOS.png)

* **4D for iOS**: Lance 4D for iOS em Sections > General e introduza sua Team ID. ![General section](img/Team-ID-General-Section-4D-for-iOS.png)

* Vá para o Passo 6 para rodar seu projeto no aparelho.

## PASSO 6. Installation

### Instale automaticamente com Apple Configurator 2

* Quando seu app estiver pronto, abra a aba BUILD.
* Conecte seu aparelho para seu computador com um cabo USB.
* Na aba BUILD, clique em **Install**.

![Install button](img/Install-button-build-tab-4D-for-iOS.png)

* O app está sendo instalado em seu aparelho!

### Instale manualmente usando Xcode

* Quando seu app estiver pronto, abra a aba BUILD.
* Conecte seu aparelho para seu computador com um cabo USB.
* Na aba BUILD, clique em **Install**.

![Manual installation](img/Manual-installation-4D-for-iOS.png)

* Um arquivo de seu projeto foi criado

![Archive creation](img/Archive-creation.png)

* Revela o arquivo gerado em Finder

![Reveal archive in Finder](img/Reveal-archive-in-Finder.png)

* Abra Xcode e vá para Menu > Window > Devices e Simulator e arraste o arquivo ipa gerado e solte na seção Installed Apps.

![Devices and Simulators](img/Devices-and-Simulators-4D-for-iOS.png)

* The app is now being installed on your device.





