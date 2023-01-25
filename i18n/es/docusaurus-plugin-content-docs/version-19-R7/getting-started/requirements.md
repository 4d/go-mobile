---
id: requirements
title: Requisitos
---

4D for iOS and 4D for Android require a specific minimum configuration.

![Welcome page](img/welcome-page.png)


## System requirements

System requirements are the same as [4D's minimum system requirements](https://us.4d.com/product-download/Feature-Release).

8GB of RAM is recommended.



## 4D

- **Development**: 4D with a 4D Developer Pro licence

- **Deployment**: 4D Server
    - The 4D Web Server must be started.
    - HTTP and HTTPS ports must be enabled and correctly configured. HTTPS is mandatory for 4D for iOS and 4D for Android deployment.


## iOS

[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional).

Installing **Xcode** is required. Version table:

| 4D    | Swift | iOS  | Xcode                                                                                                         | iOS 13.0 |
| ----- | ----- | ---- | ------------------------------------------------------------------------------------------------------------- | -------- |
| 19 R7 | 5.7.1 | 16.0 | [14.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_14.1/Xcode_14.1.xip) | 12.5     |
| 19 R6 | 5.7   | 16.0 | [14.0](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_14/Xcode_14.xip)     | 12.5     |
| 19 R5 | 5.6.1 | 15.5 | [13.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13.4/Xcode_13.4.xip) | 12.2     |
| 19.x  | 5.5   | 15.0 | 13.1                                                                                                          | 11.3     |
| 18.x  | 5.2   | 13.4 | 11.4                                                                                                          | 10.15.2  |

<details><summary>Version history</summary>

| 4D           | Swift | iOS  | Xcode  | iOS 13.0 |
| ------------ | ----- | ---- | ------ | -------- |
| 19 R4        | 5.6   | 15.4 | 13.3   | 12.2     |
| 19 R3        | 5.5.2 | 15.2 | 13.2.1 | 11.3     |
| 19 R2        | 5.5   | 15.0 | 13.1   | 11.3     |
| 19           | 5.5   | 15.0 | 13.1   | 11.3     |
| 18 R6        | 5.3.2 | 14.4 | 12.4   | 10.15.4  |
| 18 R5 & 18.3 | 5.3   | 14.2 | 12.2   | 10.15.4  |
| 18 R4        | 5.3   | 14.0 | 12.0   | 10.15.4  |
| 18 R3        | 5.2.4 | 13.5 | 11.5   | 10.15.2  |
| 18.2         | 5.2   | 13.4 | 11.4   | 10.15.2  |
| 18.1         | 5.1.3 | 13.3 | 11.3.1 | 10.14.4  |
| 18 R2        | 5.1.3 | 13.3 | 11.3.1 | 10.14.4  |
| 18           | 5.1   | 13.2 | 11.2   | 10.14.4  |
| 17 R6        | 5.0   | 12.2 | 10.2.1 | 10.14.4  |
| 17 R5        | 4.2.1 | 12.2 | 10.2   | 10.14.3  |
| 17 R4        | 4.2.1 | 12   | 10.1   | 10.13.6  |
| 17 R3        | 4.2   | 12   | 10.0   | 10.13.6  |
| 17 R2        | 4.1.2 | 11.4 | 9.4    | 10.13.2  |
| 17 R2        | 4.1   | 11.3 | 9.3.1  | 10.13.2  |
</details>

:::note Compatibility

Formatters updated for 4D v19 R3/4D v19.2 and higher are not compatible with previous 4D releases.

:::

### Apple Device Developer Mode

As of iOS 16 and Xcode 14, you must enable the **Developer Mode** on your device to be able to develop and debug.

You need essentially to toggle the "Developer Mode" switch in the "Settings" application of your device. More information is provided in the [Apple documentation](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device).


## Android

Installing **Android Studio** (which includes **Android SDK**) is required. Version table:

| 4D    | Android Studio                                                      | Windows           |
| ----- | ------------------------------------------------------------------- | ----------------- |
| 19 R7 | [Dolphin 2021.3.1](https://developer.android.com/studio/archive)    | Windows 10 64-bit |
| 19 R6 | [Dolphin 2021.3.1](https://developer.android.com/studio/archive)    | Windows 10 64-bit |
| 19 R5 | [Arctic fox 2020.3.1](https://developer.android.com/studio/archive) | Windows 10 64-bit |


<details><summary>Version history</summary>

| 4D    | Android Studio      | Windows           |
| ----- | ------------------- | ----------------- |
| 19 R4 | Arctic fox 2020.3.1 | Windows 10 64-bit |
| 19 R3 | Arctic fox 2020.3.1 | Windows 10 64-bit |
| 19 R2 | 4.1.2               | Windows 10 64-bit |
</details>


:::nota notas

- You can build Android apps both on Mac and PC.

- We highly recommend not to run a VM-accelerated emulator inside another virtual machine (VM), such as a VM hosted by VirtualBox. Click [here](https://developer.android.com/studio/run/emulator-acceleration) for more details.

:::

### Android Studio configuration

You need to configure your Android Studio to build and debug your projects. Open the Android Studio **Preferences**, select the **Android SDK/SDK Tools** tab and make sure you have checked and installed the following elements:

- **Android SDK Build Tools 31**
- **Android SDK Command-line Tools (latest)**. By selecting this checkbox, you will be able to visualize all your virtual devices directly from the 4D mobile Project Editor.
- **Android Emulator**
- **Android SDK Platform Tools**
- **Google USB driver** (only on Windows, required to debug from an Android device)
- **Intel x86 Emulator Accelerator (HAXM installer)**

![Android-Studio-Settings](img/AndroidCaptureSetting.png)










