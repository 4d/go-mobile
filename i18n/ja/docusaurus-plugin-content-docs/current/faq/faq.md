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
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS および 4D for Android を使用するために事前に必要な要件はありますか?</summary>

[こちら](../getting-started/requirements) のシステム要件一覧を参照してください。

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

4D Developer Pro または 4D Server ライセンスがあれば、4D for Mobile がお使いいただけます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for Mobile でアプリを開発するために必要なライセンスはどれですか?</summary>

4D for iOS および 4D for Android アプリを開発するには、4D Developer Pro ライセンスが必要です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for Mobile で作成したアプリの運用に必要なライセンスはどれですか?</summary>

4D for iOS および 4D for Android アプリと同期するサーバーアプリは 4D Server (macOS または Windows) のライセンスで運用することができます。

その他に必要なライセンスはありません。 モバイルアプリは 4D リモート (クライアント) の同時接続ライセンスを消費します。

4D Server のライセンスが許す限り、Mac・Windows・モバイルアプリから同時に接続することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D Server に加えて、クライアント 2接続ライセンスがインストールされている場合 (合計 4接続)、何台のモバイルデバイスから接続できますか?</summary>

最大で 4台のデバイスから接続できます。

</details>


## その他

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>モバイルアプリからデータを編集/更新することはできますか?</summary>

はい、もちろんです！

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>実際のデータはどこに保存されているのでしょうか?</summary>

データはモバイルデバイスにローカル保存されています。 これにより、オフラインモードでのデータアクセスが可能です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for Mobile でリレートテーブルを使用できますか?</summary>

はい、モバイルプロジェクトを定義する際にリレーションを使用できます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for Mobile で計算フィールドを使用することができますか?</summary>

数式を公開することはできませんが、計算属性を作成しておき、それらをモバイルプロジェクトエディターの [ストラクチャーページ](../project-definition/structure) で公開することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>データベース内に画像を用意する必要がありますか?</summary>

画像の使用は必須ではありませんが、最高のユーザーエクスペリエンスを実現するためには、画像を使用することが強く推奨されます。

4D for Mobile では、バラエティに富んだリスト画面および詳細画面のテンプレートが用意されています (画像有り、画像無し、チャート有り、など)。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>モバイルアプリのためにアイコンを作成する必要がありますか?</summary>

モバイルアプリ用のアイコンを用意することは、強く推奨されています。 アイコンがない場合、デフォルトの (4D ロゴの) アイコンが表示されます。

デスクトップ版アプリのアイコンがある場合，プロジェクトエディターの [一般ページ](../project-definition/general) アイコンエリアにドラッグ＆ドロップするだけで，モバイル版アプリのアイコンが自動的に作成されます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>作成したアプリはどのようにテストするのですか?</summary>

4D for Mobile で作成したアプリは、[シミュレーター](../project-definition/build-panel.md) で手早くテストすることができます。

実機でテストするには、**有料の Apple Developer アカウント** が必要です。

**注記**: 出力した iOS プロジェクトを Xcode で開けば、**無料の Apple Developer アカウント** でも iOS アプリをインストールすることができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>スマートフォンとタブレット用に別々のテンプレートを作成する必要がありますか?</summary>

4D for Mobile に用意されているテンプレートは，すべてスマートフォン用に最適化されています。 しかし、タブレットでも使用することができます。

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Apple Developer のアカウントが必要ですか?</summary>

アプリをテストするには、最低限でも無料の [**Apple Developer アカウント**](../tutorials/developer-program/selecting-your-developer-program.md) が必要です。

アプリを運用するには、**Apple Developer Enterprise Program** (インハウス運用) または **Apple Developer Program** (App Store 公開) への加入が必要です。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for Mobile で作成したアプリをカスタマイズすることができますか?</summary>

4D for iOS は、標準の Xcode プロジェクトを出力しますので、必要であれば、[ Xcode で開いて編集する](../tutorials/customizing-with-xcode/working-with-xcode.md) ことができます。

4D for Android は、標準の Kotlin プロジェクトを出力しますので、必要であれば開いて編集することができます。


</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>アプリのサイズに制限はありますか?</summary>

iOS の場合、アプリの非圧縮サイズが合計 4GBを超えないようにしてください。 詳細については [こちら](https://help.apple.com/app-store-connect/#/dev611e0a21f) を参照ください。

Android で [Android App Bundles](https://developer.android.com/guide/app-bundle) を使用する場合、アプリのインストールに必要な圧縮APK の合計サイズが 150MBを超えないようにしてください。 Android のサイズ制限についての詳細は、[こちら](https://developer.android.com/topic/performance/reduce-apk-size) または [こちら](https://developer.android.com/guide/playcore/asset-delivery) を参照ください。

</details>




