---
id: requirements
title: Pré-requis
---

4D for iOS et 4D for Android nécessitent une configuration minimale spécifique.

![Welcome page](img/welcome-page.png)


## Configuration système

Les prérequis système sont identiques aux [prérequis système basiques de 4D](https://us.4d.com/product-download/Feature-Release).

8 Go de RAM sont recommandés.


## Configuration logicielle

### 4D

- **Développement**: 4D avec une licence 4D Developer Pro

- **Déploiement**: 4D Server - le Serveur web 4D doit être lancé.
    - Les ports HTTP et HTTPS doivent être activés et configurés correctement. HTTPS est nécessaire pour le déploiement de 4D for iOS et 4D for Android.


### iOS

[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installé sur votre Mac (facultatif).

Tableau de versions :

| 4D    | Swift | iOS  | Xcode                                                                                                           | macOS   |
| ----- | ----- | ---- | --------------------------------------------------------------------------------------------------------------- | ------- |
| 19 R4 | 5.6   | 15.4 | [13.3](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13.3/Xcode_13.3.xip)   | 12.2    |
| 19 R3 | 5.5.2 | 15.2 | [13.2.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.2.1.xip) | 11.3    |
| 19 R2 | 5.5   | 15.0 | [13.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.1.xip)     | 11.3    |
| 19    | 5.5.  | 15.0 | [13.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.1.xip)     | 11.3    |
| 18 R6 | 5.3.2 | 14.4 | [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip)   | 10.15.4 |

<details><summary>Historique</summary>

| 4D           | Swift | iOS  | Xcode  | macOS   |
| ------------ | ----- | ---- | ------ | ------- |
| 18 R5 & 18.3 | 5.3   | 14.2 | 12.2   | 10.15.4 |
| 18 R4        | 5.3   | 14.0 | 12.0   | 10.15.4 |
| 18 R3        | 5.2.4 | 13.5 | 11.5   | 10.15.2 |
| 18.2         | 5.2   | 13.4 | 11.4   | 10.15.2 |
| 18.1         | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18 R2        | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18           | 5.1   | 13.2 | 11.2   | 10.14.4 |
| 17 R6        | 5.0   | 12.2 | 10.2.1 | 10.14.4 |
| 17 R5        | 4.2.1 | 12.2 | 10.2   | 10.14.3 |
| 17 R4        | 4.2.1 | 12   | 10.1   | 10.13.6 |
| 17 R3        | 4.2   | 12   | 10.0   | 10.13.6 |
| 17 R2        | 4.1.2 | 11.4 | 9.4    | 10.13.2 |
| 17 R2        | 4.1   | 11.3 | 9.3.1  | 10.13.2 |
</details>

:::Compatibility note

Formatters updated for 4D v19 R3/4D v19.2 and higher are not compatible with previous 4D releases.

:::

### Android

Tableau de versions :

| 4D    | Android Studio                                                      | Windows           |
| ----- | ------------------------------------------------------------------- | ----------------- |
| 19 R4 | [Arctic fox 2020.3.1](https://developer.android.com/studio/archive) | Windows 10 64-bit |
| 19 R3 | [Arctic fox 2020.3.1](https://developer.android.com/studio/archive) | Windows 10 64-bit |
| 19 R2 | [4.1.2](https://developer.android.com/studio/archive)               | Windows 10 64-bit |

:::note notes

- You can build Android apps both on Mac and PC.

- We highly recommend not to run a VM-accelerated emulator inside another virtual machine (VM), such as a VM hosted by VirtualBox. Click [here](https://developer.android.com/studio/run/emulator-acceleration) for more details.

:::

4D for Android nécessite le SDK Android, y compris Android Studio. S'il n'est pas installé, il sera automatiquement téléchargé au lancement de l'éditeur mobile 4D sur Windows :

![sdk](img/install-android.png)








