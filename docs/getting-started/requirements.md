---
id: requirements
title: Requirements
---

4D for iOS and 4D for Android require a specific minimum configuration.


## Hardware requirements

* 8GB of RAM (Minimum recommended)


## Software requirements

* Development: 4D v18 (4D Developer Pro licence)
* Deployment: 4D Server v18
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional). Apple configurator 2 requires **macOS 10.14** or later. Install this software if you want to automate app installation on your physical device.

Xcode 10.2 requires **macOS 10.14** or later.

### Current version table

4D for iOS:

| Xcode | Swift | iOS | 4D | macOS |
|---|---|---|---|---|
| 12.4 | 5.3.2| 14.4 | 18R6 beta | 10.15.4 |
| 12.2 | 5.3 | 14.2 | 18R5 & 18.3 | 10.15.4 |


4D for Android:

| Android | 4D | Windows |
|---|---|---|
| 12.4 | 19R2 beta | Windows 10 64-bit |


<details><summary>Version history</summary>

| Xcode | Swift | iOS | 4D | macOS |
|---|---|---|---|---|
| 12.0 | 5.3 | 14.0|18R4|10.15.4|
| 11.5 | 5.2.4 | 13.5|18R3|10.15.2|
| 11.4 | 5.2 | 13.4|18.2|10.15.2|
| 11.3.1 | 5.1.3 | 13.3| 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3| 18R2 | 10.14.4 |
| 11.2 | 5.1 | 13.2| 18 | 10.14.4 |
| 10.2.1 | 5.0 | 12.2 | 17R6 | 10.14.4 |
| 10.2 | 4.2.1 | 12.2 | 17R5 | 10.14.3 |
| 10.1 | 4.2.1 | 12 | 17R4 | 10.13.6 |
| 10.0 | 4.2 | 12 | 17R3 | 10.13.6 |
| 9.4| 4.1.2| 11.4 | 17R2 | 10.13.2 |
| 9.3.1| 4.1| 11.3 | 17R2 | 10.13.2 |
</details>



## 4D Configuration

* The 4D Web Server must be started.

* HTTP and HTTPS ports must be enabled and correctly configured. HTTPS is mandatory for 4D for iOS and 4D for Android deployment.