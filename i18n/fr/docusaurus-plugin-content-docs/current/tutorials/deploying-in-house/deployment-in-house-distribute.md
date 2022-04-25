---
id: deployment-in-house-distribute
title: Distribuer une application interne
---

> **OBJECTIFS**
> 
> Télécharger une application sur un serveur sécurisé.


## ÉTAPE 1. Téléchargez votre application

Téléchargez votre application sur un serveur sécurisé :

* Ressources (image d'affichage et image en taille réelle)
* Fichier `manifest.plist`
* Fichier `.ipa`

Vous pouvez utiliser n’importe quel service de stockage en nuage pour distribuer votre application à partir du moment où il est sécurisé (Dropbox, Google Drive, etc.).

:::note

Votre ressource et vos URL ipa doivent correspondre aux URL définis dans votre fichier `manifest.plist`.

:::

## ÉTAPE 2. Créez le lien d’installation

Créez un **lien de Services ITMS** (iTunes Music Store) avec, comme paramètre, l’adresse web complète de votre fichier manifest :

```html
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

Ce lien peut être utilisé pour l’envoi d’e-mails, intégré dans une page html, ou même dans un code QR.

Voici un exemple simple :

![Contact demo app install](img/Contact-demo-app-install.png)

*Le Code QR utilisé pour cette documentation n’est pas actif.*

## ÉTAPE 3. Installez votre application sur iOS

* Installez l’application en cliquant sur le lien ou en scannant un Code QR.

![Scan and install](img/Scan-and-install.png)

* Lorsque vous ouvrez une application installée manuellement, une notification s’affichera, indiquant que le développeur de l’application n’est pas fiable sur votre appareil.

* Ignorez ce message et cliquez sur **Annuler**.

* Dans Réglages > Général > Gestion de l'appareil, dans la rubrique « Application d'Entreprise », le profil du développeur est répertorié.

![Untrust developer](img/Untrust-developer.png)

* Saisissez le nom du profil développeur pour que ce dernier soit reconnu comme fiable.

![Trust-confirmation](img/Trust-confirmation.png)

* Vous pouvez ensuite accéder à votre application et l'ouvrir.

Félicitations ! Vous pouvez désormais déployer votre première application interne .
