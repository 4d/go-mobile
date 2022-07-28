---
id: requirements
title: 要件
---

4D for iOS および 4D for Android を使用するには以下の最小動作環境が必要になります。

![ウェルカムページ](img/welcome-page.png)


## システム要件

システム要件は、[4D の最小動作環境](https://jp.4d.com/product-download/Feature-Release) と同じです。

メモリは 8GB以上推奨です。


## ソフトウェア要件

### 4D

- **開発**: 4D と 4D Developer Pro ライセンス

- **配布**: 4D Server - 4D Webサーバーが起動している必要があります。
    - HTTP および HTTPS ポートが有効化されており、かつ正しく設定されている必要があります。 4D for iOS および 4D for Android の配布においては、HTTPS は必須となります。


### iOS

[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) が Mac にインストールされていること (必須ではありません)。

バージョン早見表:

| 4D           | Swift | iOS  | Xcode                                                                                                           | macOS   |
| ------------ | ----- | ---- | --------------------------------------------------------------------------------------------------------------- | ------- |
| 19 R4        | 5.5.2 | 15.2 | [13.2.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.2.1.xip) | 11.3    |
| 19 R3        | 5.5.2 | 15.2 | [13.2.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.2.1.xip) | 11.3    |
| 19 R2        | 5.5   | 15.0 | [13.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.1.xip)     | 12.1    |
| 19           | 5.5   | 15.0 | [13.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13/Xcode_13.1.xip)     | 12.1    |
| 18 R6        | 5.3.2 | 14.4 | [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip)   | 10.15.4 |
| 18 R5 & 18.3 | 5.3   | 14.2 | [12.2](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.2/Xcode_12.2.xip)   | 10.15.4 |

<details><summary>バージョン履歴</summary>

| 4D    | Swift | iOS  | Xcode  | macOS   |
| ----- | ----- | ---- | ------ | ------- |
| 18 R4 | 5.3   | 14.0 | 12.0   | 10.15.4 |
| 18 R3 | 5.2.4 | 13.5 | 11.5   | 10.15.2 |
| 18.2  | 5.2   | 13.4 | 11.4   | 10.15.2 |
| 18.1  | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18 R2 | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18    | 5.1   | 13.2 | 11.2   | 10.14.4 |
| 17 R6 | 5.0   | 12.2 | 10.2.1 | 10.14.4 |
| 17 R5 | 4.2.1 | 12.2 | 10.2   | 10.14.3 |
| 17 R4 | 4.2.1 | 12   | 10.1   | 10.13.6 |
| 17 R3 | 4.2   | 12   | 10.0   | 10.13.6 |
| 17 R2 | 4.1.2 | 11.4 | 9.4    | 10.13.2 |
| 17 R2 | 4.1   | 11.3 | 9.3.1  | 10.13.2 |
</details>

:::互換性に関する注記

4D v19 R3/4D v19.2以降用にアップデートされたフォーマッターは、以前の 4Dリリースと互換性がありません。

:::

### Android

バージョン早見表:

| 4D    | Android Studio                                                      | Windows           |
| ----- | ------------------------------------------------------------------- | ----------------- |
| 19 R4 | [Arctic fox 2020.3.1](https://developer.android.com/studio/archive) | Windows 10 64-bit |
| 19 R3 | [Arctic fox 2020.3.1](https://developer.android.com/studio/archive) | Windows 10 64-bit |
| 19 R2 | [4.1.2](https://developer.android.com/studio/archive)               | Windows 10 64-bit |

:::note notes

- Android アプリは Mac と Windows のどちらでもビルド可能です。

- VM駆動のエミュレーターを別のバーチャルマシン (VM) 内で実行することは推奨されません (たとえば VirtualBox にホストされた VM)。 詳細については [こちら](https://developer.android.com/studio/run/emulator-acceleration) をクリックしてください。

:::

4D for Android は、Android Studio を含む Android SDK を必要とします。 Windows にインストールされていない場合は、4D mobile エディターの起動時に自動的にダウンロードされます。

![sdk](img/install-android.png)








