---
id: testing-on-your-device
title: Installation sur votre appareil iOS
---

Vous pouvez installer et tester votre application mobile sur un appareil connecté.


## Pré-requis

Vous devez vous inscrire à un Apple Developer Program. En fonction de vos objectifs et de vos préférences, vous pouvez choisir de vous inscrire dans l’un des programmes suivants :

* Free Apple Developer Program: For testing only
* [Apple Developer Program for organization or individual](https://developer.apple.com/programs/enroll/): For an App Store Deployment
* [Apple Enterprise Developer Program](https://developer.apple.com/programs/enterprise/): To deploy your app in-house


:::note

Vous aurez besoin d' [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac pour installer votre application automatiquement (facultatif).

:::


## ÉTAPE 1. Créer un compte

* **Identifiant Apple** : Créez votre identifiant Apple. Si vous n'en possédez pas un, cliquez [ici](https://appleid.apple.com/account#!&page=create).

* **Developer Account** : Choisissez un Apple Developer Program (pour les entreprises ou les particuliers) si vous souhaitez déployer votre application sur l'App Store ou bien depuis l'Apple Developer Enterprise Program (pour un déploiement interne).

## ÉTAPE 2. Configurer Xcode

* **Developer Account** : Dans Xcode > Preferences > Accounts, ajoutez votre Apple ID. ![Developer Account](img/Developer-Account-4D-for-iOS.png)

## ÉTAPE 3. Obtenez votre Team ID

* If your are using a Free Apple Developer Program, go to [step 4](#step-4-team-id-for-free-account).
* Si vous utilisez un [Apple Developer Program pour les entreprises](../tutorials/developer-program/register-apple-developer-program-organization), [pour les particuliers](../tutorials/developer-program/register-apple-developer-program-individual) ou un [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program) passez à [l'étape 5](#step-5-team-id-for-paid-subscription-account).

## ÉTAPE 4. Team ID pour un compte gratuit

### Profil et certificat fournis par Xcode

* Ouvrez votre projet actuel depuis l’onglet GÉNÉRATION.

![Build tab](img/Open-your-project-Xcode-4D-for-iOS.png)

* Verify that the **Automatically manage signing** option is checked and select the account you added, from the Team dropdown list.

![Account-Selection](img/account-Selection-Free-Account.png)

* Connectez votre appareil à votre ordinateur et sélectionnez-le dans le menu supérieur de Xcode.

![Select your device](img/select-device-Free-Account.png)

* Xcode génère automatiquement les profils et les certificats de provisioning nécessaires à la création de votre application.

### Création du projet avec Xcode

* Cliquez sur le bouton Build and Run dans Xcode !

![Build and Run](img/Build-Run-Free-Account.png)

## STEP 5. Team ID pour un compte payant

* **Team ID** : Cliquez sur Developer Account > Membership et obtenez votre Team ID. ![Developer Account membership](img/Team-ID-4D-for-iOS.png)

* **4D for iOS** : Lancez 4D for iOS depuis Sections > Général et entrez votre Team ID. ![General section](img/Team-ID-General-Section-4D-for-iOS.png)

* Passez à l’étape 6 pour exécuter votre projet sur votre appareil.

## ÉTAPE 6. Installation

### Installation automatique avec Apple Configurator 2

* Lorsque votre application est prête, cliquez sur l’onglet GÉNÉRATION.
* Connectez votre appareil à votre ordinateur avec un câble USB.
* Dans l’onglet GÉNÉRATION, cliquez sur **Installer**.

![Install button](img/Install-button-build-tab-4D-for-iOS.png)

* L’application est installée sur votre appareil !

### Installation manuelle avec Xcode

* Lorsque votre application est prête, cliquez sur l’onglet GÉNÉRATION.
* Connectez votre appareil à votre ordinateur avec un câble USB.
* Dans l’onglet GÉNÉRATION, cliquez sur **Installer**.

![Manual installation](img/Manual-installation-4D-for-iOS.png)

* Une archive de votre projet est créée.

![Archive creation](img/Archive-creation.png)

* Indiquez l'archive générée dans Finder.

![Reveal archive in Finder](img/Reveal-archive-in-Finder.png)

* Ouvez Xcode et accédez à Menu > Window > Devices and Simulator et glissez-déposez le fichier ipa généré dans la section Installed Apps.

![Devices and Simulators](img/Devices-and-Simulators-4D-for-iOS.png)

* L’application est désormais installée sur votre appareil.





