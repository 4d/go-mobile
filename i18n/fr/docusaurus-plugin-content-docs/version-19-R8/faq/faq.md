---
id: faq
title: FAQ
---

## Conditions préalables



<details><summary style= {{ fontWeight: "bold", marginBottom: "20px" }}>Dois-je avoir des connaissances spécialisées pour utiliser 4D for iOS et 4D for Android ?</summary>

Non. Avec 4D for iOS et 4D for Android, vous pouvez facilement créer de nouveaux projets mobiles directement depuis 4D, sans aucune connaissance préalable en matière de création d’applications iOS natives !

L'éditeur de projet mobile a été conçu de façon à être utilisé sans aucune connaissance spécifique en développement d’applications mobiles.

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Are there any prerequisites for 4D for iOS and 4D for Android?</summary>

See the requirements list [here](../getting-started/requirements.md).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Pour quelle(s) plateforme(s) mobile(s) puis-je développer sur macOS?</summary>

Vous pouvez développer à la fois pour les plateformes mobiles iOS et Android.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Pour quelle(s) plateforme(s) mobile(s) puis-je développer sur Windows ?</summary>

Vous pouvez développer uniquement pour la plateforme Android.

For the iOS platform, we need XCode to compile the final application and to run the Simulator.

</details>




## Licence


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Existe-t-il une licence de test ou d’évaluation ?</summary>

If you already have a 4D Developer Pro or 4D Server license, 4D for Mobile is included.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What 4D license do I need to develop with 4D for Mobile?</summary>

You need a 4D Developer Pro license to develop 4D for iOS or 4D for Android apps.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What 4D license do I need to deploy apps created with 4D for Mobile?</summary>

You need a 4D Server (macOS or Windows) license to deploy 4D for iOS and 4D for Android apps.

Aucune autre licence n'est nécessaire. Your mobile apps will share the same licenses as those for 4D remote (client).

Clients can connect from Macs, Windows PCs, or mobile apps, as long as the total amount of concurrent users are covered by the 4D Server license.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>J’ai un 4D Server et une extension pour deux clients (quatre clients au total). Combien d'appareils mobiles puis-je utiliser ?</summary>

Vous pouvez utiliser jusqu'à quatre appareils mobiles.

</details>


## Questions diverses

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I modify and update data from my mobile app?</summary>

Oui, bien entendu.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Où sont stockées mes données ?</summary>

Your data is stored locally on your mobile device. Cela vous permettra d'accéder à vos données en mode hors ligne.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use related tables in 4D for Mobile?</summary>

Yes, you can use relations when defining your mobile project.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use calculated fields in 4D for Mobile?</summary>

You can create computed attributes in 4D and publish them from the [Structure page](../project-definition/structure.md) of the mobile project editor.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'images dans ma base de données ?</summary>

Les images ne sont pas obligatoires, mais nous vous recommandons d'en utiliser pour garantir la meilleure expérience utilisateur.

4D for Mobile offers a variety of list form and detail form templates, with or without images, with charts, etc.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to create an icon for my mobile app?</summary>

It's highly recommended to have an icon for your mobile app. Si vous n'en avez pas, l'icône par défaut (le logo 4D) sera affichée.

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General page](../project-definition/general.md) of the project editor.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Comment puis-je tester mon application ?</summary>

4D for Mobile allows you to test your apps using [simulators](../project-definition/build-panel.md).

To test your app on your device you need to have a **paying developer account**.

**Note:** To intall your iOS app with a **free Apple developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to create special templates to build my apps on an phone or a tablet?</summary>

All of templates available in 4D for Mobile are optimized for the phones. They also work well on tablets.

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'un compte Apple Developer ?</summary>

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




