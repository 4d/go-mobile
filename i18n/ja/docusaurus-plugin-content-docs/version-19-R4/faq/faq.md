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
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS を使用するために事前に必要な要件はありますか?</summary>

[こちら](../getting-started/requirements.md) のシステム要件一覧を参照してください。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>macOS からはどちらのモバイルプラットフォーム用の開発ができますか?</summary>

macOS からは、iOS および Android 両方のモバイルプラットフォーム用の開発が可能です。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Windows からはどちらのモバイルプラットフォーム用の開発ができますか?</summary>

Windows では、Android プラットフォーム用の開発のみが可能です。

iOS プラットフォーム用の開発のためには、最終アプリケーションのコンパイルとシミュレーターの実行のために XCode が必要となるからです。

</details>

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Windows でのビルドを最適化するために、Android Studio でどのような設定にすればよいですか？</summary>

アプリのビルドを十分に高速化するためには、ウイルス対策ソフトがビルド速度に与える影響を最小限に抑える必要があります。 それには、[こちら](https://developer.android.com/studio/intro/studio-config#antivirus-impact) に記載されている手順に従ってください。

</details>


## ライセンス

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS を使用するには、4D Web サーバーが必要ですか?</summary>

いいえ。4D for iOS は v17 R2 以降の 4D Server に含まれています。

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>テスト用/体験用ライセンスはありますか?</summary>

4D v17 R2 またはそれ以降のバージョン用の、4D Developer Pro または 4D Server ライセンスがあれば、4D for iOS がお使いいただけます。

Rバージョンが利用できる 4D のパートナープログラムに未加入、あるいは v17 のライセンスにメンテナンスプログラムが付帯していない場合には、4D v18 以降で利用することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS でアプリを開発するために必要なライセンスはどれですか?</summary>

4D for iOS アプリを開発するには、macOS 用の v17 R2 以降の 4D Developer Pro ライセンスが必要です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS で作成したアプリの運用に必要なライセンスはどれですか?</summary>

4D for iOS アプリの運用には、macOS または Windows 用の v17 R2 以降の 4D Server ライセンスが必要です。

その他に必要なライセンスはありません。 4D for iOS アプリは 4D リモート (クライアント) の同時接続ライセンスを消費します。

4D Server のライセンスが許す限り、Mac・Windows・iPhone デバイスから同時に接続することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D Server に加えて、クライアント 2接続ライセンスがインストールされている場合 (合計 4接続)、何台のモバイルデバイスから接続できますか?</summary>

最大で 4台のデバイスから接続できます。

</details>


## その他

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>iOS アプリからデータを編集/更新することはできますか?</summary>

はい、もちろんです！

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>実際のデータはどこに保存されているのでしょうか?</summary>

データは iOS デバイスにローカル保存されています。 これにより、オフラインモードでのデータアクセスが可能です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS でリレートテーブルを使用できますか?</summary>

皆さまのビジネスアプリケーションにおいてたくさんのリレートテーブルが使用されていることは承知しています。将来の 4D for iOS リリースにおいてリレートテーブルにアクセスできるように現在開発中です。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS で計算フィールドを使用することができますか?</summary>

4D で計算済みのフィールドを作成し、4D for iOS プロジェクトエディターの [ストラクチャーセクション]`(project-definition-structure.html)` から公開することができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>データベース内に画像を用意する必要がありますか?</summary>

画像の使用は必須ではありませんが、最高のユーザーエクスペリエンスを実現するためには、画像を使用することが強く推奨されます。

4D for iOS では多種多様な [リストフォーム]`(list-form-templates.html)` および [詳細フォーム]`(detail-form-templates.html)` のテンプレートが用意されています。 画像の有るものや無いもの、チャートがついているものなど、たくさん種類があります。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>iOS アプリのためにアイコンを作成する必要がありますか?</summary>

4D for iOS アプリ用のアイコンを用意することは、強く推奨されています。 アイコンがない場合、デフォルトの (4D ロゴの) アイコンが表示されます。

デスクトップ版アプリのアイコンがある場合、プロジェクトエディターの [一般]`(general.html)` セクションのアイコンエリアにドラッグ＆ドロップするだけで、モバイル版アプリのアイコンが自動的に作成されます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>作成したアプリはどのようにテストするのですか?</summary>

4D for iOS で作成したアプリは、[シミュレーター]`(simulator.html)` で手早くテストすることができます。 実機の iOS デバイス (iPhone または iPad) でテストするには、**有料の Apple developer アカウント** が必要です。(install-device.html)

**注記**: 出力した iOS プロジェクトを Xcode で開けば、**無料の Apple Developer アカウント** でもアプリをインストールすることができます。

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>iPhone と iPad 用に別々の iOS テンプレートを作成する必要がありますか?</summary>

4D for iOS に用意されているテンプレートは，すべて iPhone 用に最適化されています。 しかし、iPad でも使用することができます。

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Apple Developer のアカウントが必要ですか?</summary>

アプリをテストするには、最低でも [無料の Apple Developer アカウント]`(free-developer-account.html)`が必要になります。

4D for iOS で作成したアプリを運用するには、`Apple Developer Enterprise Program` (インハウス運用) または `Apple Developer Program` (App Store 公開) への加入が必要です。

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>4D for iOS で作成したアプリをカスタマイズすることができますか?</summary>

4D for iOS は標準の Xcode プロジェクトを出力しますので、必要であれば [Xcode で開いて編集]`(open-xcode.html)` することができます。

</details>




