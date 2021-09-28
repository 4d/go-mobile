---
id: from-project-editor
title: Depuis l'éditeur de projet
---

Il se peut que vous rencontriez des problèmes lors de l'utilisation de l'éditeur de projet 4D mobile ou de votre application iOS ou Android. La lecture des fichiers journaux peut fournir des informations utiles dans ce genre de cas.

Pour accéder aux fichiers journaux, appuyez sur la touche **Alt** et sélectionnez **Project** dans le panneau GENERATION de l'éditeur de projet :

![Débogage](img/debug-from-4D-for-iOS.png)

Des éléments de menu de débogage supplémentaires apparaissent pour le [simulateur sélectionné](../project-definition/build-panel#using-the-simulator) :


* **Ouvrir les journaux du simulateur** : vous pouvez y trouver le dossier `CrashReporter MobileInstallation`

* **Ouvrez les rapports Diagnostic du simulateur**

* **Ouvrir le dossier du simulateur courant**

* **Ouvrir le dossier du simulateur d'application** : ouvre un sous-menu pour chaque application


## Debug your app (Android)

Once your app is complete and the simulator’s result is satisfactory, you may want to test it on your smartphone.

To do so, only one action is needed [on the smartphone](from-your-android-device.md) and another one in the project editor.

In the Project editor, make sure you have plugged your smartphone, then select your physical device from the list and click on the “Build and Run" button.

![AndroidDevice](img/android-device.png)

4D shall then build the application and install it on the connected device.

For Windows developers, make sure you have installed [a USB driver](https://developer.android.com/studio/run/oem-usb) corresponding to your device.

