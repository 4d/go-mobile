---
id: faq
title: FAQ
---

## システム要件



<details><summary style= {{ fontWeight: "bold", marginBottom: "20px" }}>4D for iOS と 4D for Android を使用するには特殊なスキルが必要ですか?</summary>

いいえ。 ネイティブな iOS/Android アプリを作成したことがなくても、4D for iOS と 4D for Android を使用すれば、4D から直接モバイルプロジェクトを簡単に作成できます。

モバイルプロジェクトエディターは、モバイルアプリ開発の経験がなくても開発できるようにデザインされています。

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Are there any prerequisites for 4D for iOS and 4D for Android?</summary>

[こちら](../getting-started/requirements.md) のシステム要件一覧を参照してください。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>macOS からはどちらのモバイルプラットフォーム用の開発ができますか?</summary>

macOS からは、iOS および Android 両方のモバイルプラットフォーム用の開発が可能です。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Windows からはどちらのモバイルプラットフォーム用の開発ができますか?</summary>

Windows では、Android プラットフォーム用の開発のみが可能です。

iOS プラットフォーム用の開発のためには、最終アプリケーションのコンパイルとシミュレーターの実行のために XCode が必要となるからです。

</details>




## ライセンス


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>テスト用/体験用ライセンスはありますか?</summary>

If you already have a 4D Developer Pro or 4D Server license, 4D for Mobile is included.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What 4D license do I need to develop with 4D for Mobile?</summary>

You need a 4D Developer Pro license to develop 4D for iOS or 4D for Android apps.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What 4D license do I need to deploy apps created with 4D for Mobile?</summary>

You need a 4D Server (macOS or Windows) license to deploy 4D for iOS and 4D for Android apps.

その他に必要なライセンスはありません。 Your mobile apps will share the same licenses as those for 4D remote (client).

Clients can connect from Macs, Windows PCs, or mobile apps, as long as the total amount of concurrent users are covered by the 4D Server license.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D Server に加えて、クライアント 2接続ライセンスがインストールされている場合 (合計 4接続)、何台のモバイルデバイスから接続できますか?</summary>

最大で 4台のデバイスから接続できます。

</details>


## その他

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I modify and update data from my mobile app?</summary>

はい、もちろんです！

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>実際のデータはどこに保存されているのでしょうか?</summary>

Your data is stored locally on your mobile device. これにより、オフラインモードでのデータアクセスが可能です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use related tables in 4D for Mobile?</summary>

Yes, you can use relations when defining your mobile project.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use calculated fields in 4D for Mobile?</summary>

You can create computed attributes in 4D and publish them from the [Structure page](../project-definition/structure.md) of the mobile project editor.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>データベース内に画像を用意する必要がありますか?</summary>

画像の使用は必須ではありませんが、最高のユーザーエクスペリエンスを実現するためには、画像を使用することが強く推奨されます。

4D for Mobile offers a variety of list form and detail form templates, with or without images, with charts, etc.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to create an icon for my mobile app?</summary>

It's highly recommended to have an icon for your mobile app. アイコンがない場合、デフォルトの (4D ロゴの) アイコンが表示されます。

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General page](../project-definition/general.md) of the project editor.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>作成したアプリはどのようにテストするのですか?</summary>

4D for Mobile allows you to test your apps using [simulators](../project-definition/build-panel.md).

To test your app on your device you need to have a **paying developer account**.

**Note:** To intall your iOS app with a **free Apple developer account**, you can open your generated iOS project and install your app using Xcode.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Do I need to create special templates to build my apps on an phone or a tablet?</summary>

All of templates available in 4D for Mobile are optimized for the phones. They also work well on tablets.

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Apple Developer のアカウントが必要ですか?</summary>

To test your app, you'll need to create at least a [**free Apple Developer account**](../tutorials/developer-program/selecting-your-developer-program.md).

To deploy a 4D for iOS app, you'll need to enroll in the **Apple Developer Enterprise Program** (for an in-house deployment) or in the **Apple Developer Program** (for an App Store deployment).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I customize my 4D for Mobile app?</summary>

4D for iOS generates a real Xcode project that you can [open and modify](../tutorials/customizing-with-xcode/working-with-xcode.md) according to your needs.

4D for Android generates a real Kotlin project that you can open and modify according to your needs.


</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>アプリのサイズに制限はありますか?</summary>

iOS の場合、アプリの非圧縮サイズが合計 4GBを超えないようにしてください。 詳細については [こちら](https://help.apple.com/app-store-connect/#/dev611e0a21f) を参照ください。

Android で [Android App Bundles](https://developer.android.com/guide/app-bundle) を使用する場合、アプリのインストールに必要な圧縮APK の合計サイズが 150MBを超えないようにしてください。 Android のサイズ制限についての詳細は、[こちら](https://developer.android.com/topic/performance/reduce-apk-size) または [こちら](https://developer.android.com/guide/playcore/asset-delivery) を参照ください。

</details>




