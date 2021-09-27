---
id: requirements
title: Pré-requis
---

4D for iOS et 4D for Android nécessitent une configuration minimale spécifique.


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

| 4D          | Swift | iOS  | Xcode                                                                                                         | macOS   |
| ----------- | ----- | ---- | ------------------------------------------------------------------------------------------------------------- | ------- |
| 19R2        | 5.4   | 14.6 | [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 11.0.1  |
| 19          | 5.4   | 14.6 | [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 11.0.1  |
| 18R6        | 5.3.2 | 14.4 | [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip) | 10.15.4 |
| 18R5 & 18.3 | 5.3   | 14.2 | [12.2](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.2/Xcode_12.2.xip) | 10.15.4 |

<details><summary>Historique</summary>

| 4D   | Swift | iOS  | Xcode  | macOS   |
| ---- | ----- | ---- | ------ | ------- |
| 18R4 | 5.3   | 14.0 | 12.0   | 10.15.4 |
| 18R3 | 5.2.4 | 13.5 | 11.5   | 10.15.2 |
| 18.2 | 5.2   | 13.4 | 11.4   | 10.15.2 |
| 18.1 | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18R2 | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18   | 5.1   | 13.2 | 11.2   | 10.14.4 |
| 17R6 | 5.0   | 12.2 | 10.2.1 | 10.14.4 |
| 17R5 | 4.2.1 | 12.2 | 10.2   | 10.14.3 |
| 17R4 | 4.2.1 | 12   | 10.1   | 10.13.6 |
| 17R3 | 4.2   | 12   | 10.0   | 10.13.6 |
| 17R2 | 4.1.2 | 11.4 | 9.4    | 10.13.2 |
| 17R2 | 4.1   | 11.3 | 9.3.1  | 10.13.2 |
</details>

### Android

Tableau de versions :

| 4D   | Android                                               | Windows           |
| ---- | ----------------------------------------------------- | ----------------- |
| 19R2 | [4.1.2](https://developer.android.com/studio/archive) | Windows 10 64-bit |


4D for Android nécessite le SDK Android, y compris Android Studio. S'il n'est pas installé, il sera automatiquement téléchargé au lancement de l'éditeur mobile 4D sur Windows :

![sdk](img/install-android.png)








