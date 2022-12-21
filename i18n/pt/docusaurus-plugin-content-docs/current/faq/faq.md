---
id: faq
title: Perguntas Frequentes
---

## Pré-requisitos



<details><summary style= {{ fontWeight: "bold", marginBottom: "20px" }}>Preciso de experiência específica para usar o 4D for iOS ou 4D for Android?</summary>

Não. Com 4D for iOS e com 4D for Android, pode criar facilmente projetos móveis diretamente desde 4D, sem necessidade de experiência prévia na criação de aplicações iOS nativas!

O editor de projetos móveis foi criado para que não precise de nenhum conhecimento específico no desenvolvimento de aplicações móveis.

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Are there any prerequisites for 4D for iOS and 4D for Android?</summary>

See the requirements list [here](../getting-started/requirements.md).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>For which mobile platform(s) can I develop on macOS?</summary>

You can develop for both the iOS and Android mobile platforms.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>For which mobile platform(s) can I develop on Windows?</summary>

You can only develop for the Android platform.

For the iOS platform, we need XCode to compile the final application and to run the Simulator.

</details>




## Licença


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Is there a test or evaluation license available?</summary>

If you already have a 4D Developer Pro or 4D Server license, 4D for Mobile is included.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What 4D license do I need to develop with 4D for Mobile?</summary>

You need a 4D Developer Pro license to develop 4D for iOS or 4D for Android apps.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What 4D license do I need to deploy apps created with 4D for Mobile?</summary>

You need a 4D Server (macOS or Windows) license to deploy 4D for iOS and 4D for Android apps.

There's no additional license needed. Your mobile apps will share the same licenses as those for 4D remote (client).

Clients can connect from Macs, Windows PCs, or mobile apps, as long as the total amount of concurrent users are covered by the 4D Server license.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?</summary>

You can use up to four mobile devices.

</details>


## Perguntas diversas

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I modify and update data from my mobile app?</summary>

Yes, of course.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Where is my data actually stored?</summary>

Your data is stored locally on your mobile device. This allows you to access your data in offline mode.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use related tables in 4D for Mobile?</summary>

Yes, you can use relations when defining your mobile project.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use calculated fields in 4D for Mobile?</summary>

You can create computed attributes in 4D and publish them from the [Structure page](../project-definition/structure.md) of the mobile project editor.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to have images in my database?</summary>

Images are not mandatory, but we highly recommend that you use images to offer the best user experience.

4D for Mobile offers a variety of list form and detail form templates, with or without images, with charts, etc.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to create an icon for my mobile app?</summary>

It's highly recommended to have an icon for your mobile app. If you don't have one, the default icon (the 4D logo) will be displayed.

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General page](../project-definition/general.md) of the project editor.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>How can I test my app?</summary>

4D for Mobile allows you to test your apps using [simulators](../project-definition/build-panel.md).

To test your app on your device you need to have a **paying developer account**.

**Note:** To intall your iOS app with a **free Apple developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to create special templates to build my apps on an phone or a tablet?</summary>

All of templates available in 4D for Mobile are optimized for the phones. They also work well on tablets.

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need an Apple Developer Account?</summary>

To test your app, you'll need to create at least a [**free Apple Developer account**](../tutorials/developer-program/selecting-your-developer-program.md).

To deploy a 4D for iOS app, you'll need to enroll in the **Apple Developer Enterprise Program** (for an in-house deployment) or in the **Apple Developer Program** (for an App Store deployment).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I customize my 4D for Mobile app?</summary>

4D for iOS generates a real Xcode project that you can [open and modify](../tutorials/customizing-with-xcode/working-with-xcode.md) according to your needs.

4D for Android generates a real Kotlin project that you can open and modify according to your needs.


</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Is there a specific size limit for my apps?</summary>

On iOS, make sure your app total uncompressed size doesn't exceed 4GB. For more information, click [here](https://help.apple.com/app-store-connect/#/dev611e0a21f).

On Android, with [Android App Bundles](https://developer.android.com/guide/app-bundle), the total size of the compressed APKs required to install your app should not exceed 150 MB. For more details about the Android size restrictions, click [here](https://developer.android.com/topic/performance/reduce-apk-size) or [here](https://developer.android.com/guide/playcore/asset-delivery).

</details>




