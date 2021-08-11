---
id: requirements
title: 要件
---

4D for iOS and 4D for Android require a specific minimum configuration.


## System requirements

System requirements are the same as [4D's minimum system requirements](https://us.4d.com/product-download/Feature-Release).

8GB of RAM is recommended.


## Software requirements

### 4D

- **Development**: 4D v18 with a 4D Developer Pro licence

- **Deployment**: 4D Server v18
    - The 4D Web Server must be started.
    - HTTP and HTTPS ports must be enabled and correctly configured. HTTPS is mandatory for 4D for iOS and 4D for Android deployment.


### iOS

[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional).

Version table:

| Xcode | Swift | iOS  | 4D          | macOS   |
| ----- | ----- | ---- | ----------- | ------- |
| 12.5  | 5.4   | 14.6 | 19          | 11.0.1  |
| 12.4  | 5.3.2 | 14.4 | 18R6        | 10.15.4 |
| 12.2  | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |

<details><summary>Version history</summary>

| Xcode  | Swift | iOS  | 4D   | macOS   |
| ------ | ----- | ---- | ---- | ------- |
| 12.0   | 5.3   | 14.0 | 18R4 | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3 | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2 | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2 | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2 | 10.13.2 |
</details>

### Android

Version table:

| Android                                               | 4D | Windows                 |
| ----------------------------------------------------- | -- | ----------------------- |
| [4.1.2](https://developer.android.com/studio/archive) | 19 | Windows 10 64-bit xxxxx |

4D for Android requires the Android SDK, including Android Studio. If not installed, it will be automatically downloaded at the launch of the 4D mobile editor on Windows:

![sdk](img/install-android.png)








