---
id: requirements
title: 要件
---

4D for iOS および 4D for Android を使用するには以下の最小動作環境が必要になります。

![ウェルカムページ](img/welcome-page.png)


## システム要件

システム要件は、[4D の最小動作環境](https://jp.4d.com/product-download/Feature-Release) と同じです。

メモリは 8GB以上推奨です。



## 4D

- **開発**: 4D と 4D Developer Pro ライセンス

- **運用**: 4D Server
    - 4D Web Server が起動されている必要があります。
    - HTTP および HTTPS ポートが有効化されており、かつ正しく設定されている必要があります。 4D for iOS および 4D for Android の配布においては、HTTPS は必須となります。


## iOS

[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) が Mac にインストールされていること (必須ではありません)。

Installing **Xcode** is required. Version table:

| 4D    | Swift | iOS  | Xcode                                                                                                         | macOS   |
| ----- | ----- | ---- | ------------------------------------------------------------------------------------------------------------- | ------- |
| 19 R7 | 5.7.1 | 16.0 | [14.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_14.1/Xcode_14.1.xip) | 12.5    |
| 19 R6 | 5.7   | 16.0 | [14.0](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_14/Xcode_14.xip)     | 12.5    |
| 19 R5 | 5.6.1 | 15.5 | [13.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_13.4/Xcode_13.4.xip) | 12.2    |
| 19.x  | 5.5   | 15.0 | 13.1                                                                                                          | 11.3    |
| 18.x  | 5.2   | 13.4 | 11.4                                                                                                          | 10.15.2 |

<details><summary>バージョン履歴</summary>

| 4D           | Swift | iOS  | Xcode  | macOS   |
| ------------ | ----- | ---- | ------ | ------- |
| 19 R4        | 5.6   | 15.4 | 13.3   | 12.2    |
| 19 R3        | 5.5.2 | 15.2 | 13.2.1 | 11.3    |
| 19 R2        | 5.5   | 15.0 | 13.1   | 11.3    |
| 19           | 5.5   | 15.0 | 13.1   | 11.3    |
| 18 R6        | 5.3.2 | 14.4 | 12.4   | 10.15.4 |
| 18 R5 & 18.3 | 5.3   | 14.2 | 12.2   | 10.15.4 |
| 18 R4        | 5.3   | 14.0 | 12.0   | 10.15.4 |
| 18 R3        | 5.2.4 | 13.5 | 11.5   | 10.15.2 |
| 18.2         | 5.2   | 13.4 | 11.4   | 10.15.2 |
| 18.1         | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18 R2        | 5.1.3 | 13.3 | 11.3.1 | 10.14.4 |
| 18           | 5.1   | 13.2 | 11.2   | 10.14.4 |
| 17 R6        | 5.0   | 12.2 | 10.2.1 | 10.14.4 |
| 17 R5        | 4.2.1 | 12.2 | 10.2   | 10.14.3 |
| 17 R4        | 4.2.1 | 12   | 10.1   | 10.13.6 |
| 17 R3        | 4.2   | 12   | 10.0   | 10.13.6 |
| 17 R2        | 4.1.2 | 11.4 | 9.4    | 10.13.2 |
| 17 R2        | 4.1   | 11.3 | 9.3.1  | 10.13.2 |
</details>

:::note 互換性

4D v19 R3/4D v19.2以降用にアップデートされたフォーマッターは、以前の 4Dリリースと互換性がありません。

:::

### Apple デバイスのデベロッパモード

iOS 16 および Xcode 14 では、デバイスで開発およびデバッグができるようにするには、**Developer Mode** (デベロッパモード) を有効にする必要があります。

つまり、デバイスの "設定" アプリケーションで "デベロッパモード" スイッチを切り替える必要があります。 詳しくは、[Appleのドキュメント](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device) を参照ください。


## Android

Installing **Android Studio** (which includes **Android SDK**) is required. Version table:

| 4D    | Android Studio                                                      | Windows           |
| ----- | ------------------------------------------------------------------- | ----------------- |
| 19 R7 | [Dolphin 2021.3.1](https://developer.android.com/studio/archive)    | Windows 10 64-bit |
| 19 R6 | [Dolphin 2021.3.1](https://developer.android.com/studio/archive)    | Windows 10 64-bit |
| 19 R5 | [Arctic fox 2020.3.1](https://developer.android.com/studio/archive) | Windows 10 64-bit |


<details><summary>バージョン履歴</summary>

| 4D    | Android Studio      | Windows           |
| ----- | ------------------- | ----------------- |
| 19 R4 | Arctic fox 2020.3.1 | Windows 10 64-bit |
| 19 R3 | Arctic fox 2020.3.1 | Windows 10 64-bit |
| 19 R2 | 4.1.2               | Windows 10 64-bit |
</details>


:::note 注記

- Android アプリは Mac と Windows のどちらでもビルド可能です。

- VM駆動のエミュレーターを別のバーチャルマシン (VM) 内で実行することは推奨されません (たとえば VirtualBox にホストされた VM)。 詳細については [こちら](https://developer.android.com/studio/run/emulator-acceleration) をクリックしてください。

:::

### Android Studio の設定

You need to configure your Android Studio to build and debug your projects. Open the Android Studio **Preferences**, select the **Android SDK/SDK Tools** tab and make sure you have checked and installed the following elements:

- **Android SDK Build Tools 31**
- **Android SDK Command-line Tools (latest)**。 このチェックボックスを選択すると、4Dモバイルプロジェクトエディターから直接、すべての仮想デバイスを視覚化することができます。
- **Android Emulator**
- **Android SDK Platform Tools**
- **Google USB driver** (only on Windows, required to debug from an Android device)
- **Intel x86 Emulator Accelerator (HAXM installer)**

![Android Studio の設定](img/AndroidCaptureSetting.png)










