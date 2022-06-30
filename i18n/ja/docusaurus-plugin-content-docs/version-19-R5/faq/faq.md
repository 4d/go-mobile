---
id: faq
title: FAQ
---

## システム要件



<details><summary style= {{ fontWeight: "bold", marginBottom: "20px" }}>4D for iOS と 4D for Android を使用するためには特殊なスキルが必要になりますか?</summary>

いいえ。 4D for iOS と 4D for Android を使用すれば、ネイティブなiOS/Androidアプリを作成したことがなくても4D から直接モバイルプロジェクトを簡単に作成できます。

モバイルプロジェクトエディターはモバイルアプリ開発の経験が全くなくても開発できるようにデザインされています。

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS を使用するために事前に必要な要件はありますか?</summary>

[こちら](../getting-started/requirements.md) のシステム要件一覧を参照してください。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>macOS からはどちらのモバイルプラットフォーム用の開発ができますか?</summary>

macOS からはiOS および Android 両方のモバイルプラットフォーム用の開発が可能です。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Windows からはどちらのモバイルプラットフォーム用の開発ができますか?</summary>

Windows からはAndroid プラットフォーム用の開発のみが可能です。

iOS プラットフォーム用の開発のためには、最終アプリケーションのコンパイルとシミュレーターの実行のためにXCode が必要となるからです。

</details>




## ライセンス

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS を使用するためには、4D Web サーバーが必要ですか?</summary>

いいえ。4D for iOS はv17 R2 以降の4D Server に含まれています。

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>テスト用/体験用ライセンスというのはありますか?</summary>

4D v17 R2 またはそれ以降のバージョン用の、4D Developer Pro または4D Server ライセンスがあれば、4D for iOS がお使いいただけます。

R バージョンが利用できる 4D のパートナープログラムに未加入，あるいはv17のライセンスに「メンテナンス」プログラムが付帯していない場合，4D v18 のライセンスで利用することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS でアプリを開発するために必要なライセンスはどれですか?</summary>

4D for iOS アプリを開発するためには、macOS 用のv17 R2 以降のバージョン用の 4D Developer Pro ライセンスが必要です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS で作成したアプリを配付するために必要なライセンスはどれですか?</summary>

4D for iOS アプリの配布のためには、macOS またはWindows 用のv17 R2 以降の4D Server ライセンスが必要になります。

その他に必要なライセンスはありません。 4D for iOS アプリは 4D Remote(クライアント) の余剰同時接続ライセンスを消費します。

4D Server のライセンスが許す限り，Mac・Windows・iPhone デバイスから同時に接続することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D Server に加えて、クライアント 2 接続ライセンスがインストールされている場合(合計 4 接続)、何台のデバイスから接続できますか?</summary>

最大で 4 台のデバイスから接続できます。

</details>


## その他

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>iOS アプリからデータを編集/更新することはできますか?</summary>

はい。 もちろんです！

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>実際のデータはどこに保存されているのでしょうか?</summary>

データはiOS デバイスにローカルに保存されています。 これによって、オフラインモードでもデータにアクセスすることができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS でリレーショナルテーブルを使用できますか</summary>

皆さまのビジネスアプリケーションにおいてたくさんのリレーションテーブルが使用されていることは承知しています。将来の4D for iOS リリースにおいてリレーションテーブルにアクセスできるように現在開発中です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS で計算フィールドを使用することができますか?</summary>

4D 内で計算済みのフィールドを作成し、4Dfor iOS プロジェクトエディターの [Structure section]`(project-definition-structure.html)` から公開することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>データベース内に画像を持っている必要がありますか?</summary>

画像の使用は必須ではありませんが、最高のユーザーエクスペリエンスを実現するためには、画像を使用することが強く推奨されます。

4D for iOS では多種多様な [list form]`(list-form-templates.html)` および [detail form]`(detail-form-templates.html)` のテンプレートが用意されています。 画像の有るものや無いもの、チャートがついているものなど、たくさん種類があります。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>iOS アプリのためにアイコンを作成する必要がありますか?</summary>

4D for iOS アプリ用のアイコンを用意することは、強く推奨されています。 アイコンがない場合、デフォルトの(4D ロゴの) アイコンが表示されます。

デスクトップ版アプリのアイコンがある場合、プロジェクトエディターの[General]`(general.html)` セクションのアイコンエリアにドラッグ＆ドロップするだけで、モバイル版アプリのアイコンが自動的に作成されます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>作成したアプリはどのようにテストするのですか?</summary>

4D for iOS で作成したアプリは、[Simulator]`(simulator.html)`で手早くテストすることができます。 実機の iOS デバイス(iPhone または iPad)でテストするためには、**有料のApple developer アカウント**が必要です。 (install-device.html)

**注記**: 出力した iOS プロジェクトを Xcode で開けば，**無料のApple Developer アカウント**でもアプリをインストールすることができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>iPhone と iPad 用に別々の iOS テンプレートを作成する必要がありますか?</summary>

4D for iOS に用意されているテンプレートは，すべて iPhone 用に最適化されています。 しかし、iPad でも使用することができます。

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Apple Developer のアカウントが必要ですか?</summary>

アプリをテストするためには、最低でも [無料の Apple Developer アカウント]`(free-developer-account.html)`が必要になります。

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program]`(register-apple-developer-enterprise-program.html)` (for an in-house deployment) or in the [Apple Developer Program]`(register-apple-developer-program-organization.html)` (for an App Store deployment).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I customize my 4D for iOS app?</summary>

4D for iOS generates a real Xcode project that you can [open and modify]`(open-xcode.html)` according to your needs.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Is there a specific size limit for my apps?</summary>

On iOS, make sure your app total uncompressed size doesn't exceed 4GB. For more information, click [here](https://help.apple.com/app-store-connect/#/dev611e0a21f).

On Android, with [Android App Bundles](https://developer.android.com/guide/app-bundle), the total size of the compressed APKs required to install your app should not exceed 150 MB. For more details about the Android size restrictions, click [here](https://developer.android.com/topic/performance/reduce-apk-size) or [here](https://developer.android.com/guide/playcore/asset-delivery).

</details>




