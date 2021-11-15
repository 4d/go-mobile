---
id: from-project-editor
title: From the Project editor
---

It may happen that you encounter issues using the 4D mobile project editor or your iOS or Android app. Reading log files can provide useful information in these cases.

To access log files, press the **Alt** key and select **Project** from the BUILD panel of the project editor:

![Debugging](img/project.png)

Additional debug menu items appear for the [currently selected simulator](../project-definition/build-panel#using-the-simulator):


* **Open Simulator logs**: where you can find the `CrashReporter MobileInstallation` folder

* **Open Simulator Diagnostic Reports**

* **Open Current Simulator Folder**

* **Open Application Simulator Folder**: opens a submenu for each application


## How to debug your app

Once your app is complete and the simulator’s result is satisfactory, you may want to test it on your smartphone, whether you're working on 4D for iOS or 4D for Android..

To do so, in the Project editor, make sure you have plugged your smartphone, then select your physical device from the list and click on the “Build and Run" button.

![AndroidDevice](img/phone-selection.png)

:::note

The **Update the list of devices...** button enables to refresh the list of available devices.

:::

4D shall then build the application and install it on the connected device.

:::note

If you're an Android developer, you need to add an extra step to the debug process. More details [here](from-your-android-device-and-android-studio.md).

:::
