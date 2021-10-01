---
id: testing-on-your-device
title: Installing on your iOS device
---

You can install and test your mobile application on a connected device. 


## Requirements

You need to subscribe to an Apple Developer Program. Depending on your objectives and preferences, you can choose to enroll in one of the following:

* [Free Apple Developer Program]```(free-developer-account.html)-- to add```: For testing only
* [Apple Developer Program for organization](../tutorials/developer-program/register-apple-developer-program-organization) or [individual](../tutorials/developer-program/register-apple-developer-program-individual): For an App Store Deployment
* [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program): To deploy your app in-house


:::note

You need [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate app installation (optional).

:::


## STEP 1. Account creation

* **Apple ID**: Create your Apple ID. If you don’t already have one, click [here](https://appleid.apple.com/account#!&page=create).  

* **Developer Account**: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment).

## STEP 2. Xcode configuration

* **Developer Account**: In Xcode > Preferences > Accounts, add your Apple ID.
![Developer Account](img/Developer-Account-4D-for-iOS.png) 

## STEP 3. Get your Team ID

* If your are using a [Free Apple Developer Program]```(free-developer-account.html--to addd)``` go to [step 4](#step-4-team-id-for-free-account).
* If your are using an [Apple Developer Program for organization](../tutorials/developer-program/register-apple-developer-program-organization), [individual](../tutorials/developer-program/register-apple-developer-program-individual) or an [Apple Enterprise Developer Program](../tutorials/developer-program/register-apple-developer-enterprise-program) go to [step 5](#step-5-team-id-for-paid-subscription-account).

## STEP 4. Team ID for Free account

### Let Xcode generate your provisioning profile and certificate  

* Open your current project from the BUILD tab.

![Build tab](img/Open-your-project-Xcode-4D-for-iOS.png) 

* Verify that the **Automatically manage signing** option is checked and select the account you added [here]```(free-developer-account.html)``` from the Team dropdown list.

![Account-Selection](img/account-Selection-Free-Account.png) 

* Connect your device to your computer and select it from the top menu in Xcode.

![Select your device](img/select-device-Free-Account.png) 

* Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.

### Build your project from Xcode using your Free Account

* Press the Build and run Button from Xcode !

![Build and Run](img/Build-Run-Free-Account.png) 

## STEP 5. Team ID for paid subscription account

* **Team ID**: Go to Developer Account > Membership and get your Team ID.
![Developer Account membership](img/Team-ID-4D-for-iOS.png) 

* **4D for iOS**: Launch 4D for iOS in Sections > General and enter your Team ID.
![General section](img/Team-ID-General-Section-4D-for-iOS.png) 

* Go to STEP 6 to run your project on your device.

## STEP 6. Installation

### Install automatically with Apple Configurator 2

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

![Install button](img/Install-button-build-tab-4D-for-iOS.png) 

* The app is being installed on your device!

### Install manually using Xcode

* When your app is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on **Install**.

![Manual installation](img/Manual-installation-4D-for-iOS.png) 

* An archive of your project is created

![Archive creation](img/Archive-creation.png) 

* Reveal the generated archive in Finder

![Reveal archive in Finder](img/Reveal-archive-in-Finder.png) 

* Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.

![Devices and Simulators](img/Devices-and-Simulators-4D-for-iOS.png) 

* The app is now being installed on your device.





