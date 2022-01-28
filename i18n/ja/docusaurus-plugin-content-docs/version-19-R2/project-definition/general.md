---
id: general
title: 一般
---

このページではアプリの主な情報を定義することができます。

![General画面](img/main-page.png)

## ターゲットOS

アプリをビルドしたい対象のモバイルOSを選択して下さい。 この設定はモバイルエディター内で利用可能なオプションを定義します。

- macOS では、**Android** 、 **iOS** 、または **両方のOS** を選択することができます。
- Windows では、**Android** ターゲットのみを選択することができます。

## 組織

**名前:** あなたの会社の名前か、あなたの名前を入力します。

**識別子:** あなたの組織のバンドルの識別子を入力して下さい。 これはあなたのアプリケーションを識別するのに使用されます。 入力された製品名は逆ドメインサービス表記を使用して連結され、"バンドルID"となります(以下の**ID** を参照して下さい)。 バンドルIDはアプリ固有のものでなければなりません。

例えば、あなたの会社の名前が"MyCompany"で、あなたのアプリの名前が"MyApp"だった場合、"com.MyCompany"を組織のバンドル識別子として選択することができ、その場合あなたのパル位のバンドルIDは"com.MyCompany.MyApp"となります。

:::note

バンドルID名には、スペースや"*,%,/" などの特殊文字を含めてはいけません。 これらは自動的に除去され - で置き換えられます。

:::


## プロダクト


**名前:** あなたのアプリの名前です。 上記にあるように、プロダクト名が"バンドルID"を作成するのに使用されます。 バンドルIDは、Apple 開発アカウントで作成したバンドルIDを同じものでなければなりません。

:::note

バンドルID名には、スペースや"*,%,/" などの特殊文字を含めてはいけません。 これらは自動的に除去され - で置き換えられます。

:::

**バージョン:** あなたのアプリのバージョンです。 バージョン番号は1.0から増やしていき、シーケンシャルな順番で追加して下さい。

**ID:** (バンドルID): このエリアは、組織識別子とプロダクト名が組み合わされて自動的に生成されます。 これは直接編集することはできません。

**Copyright:** あなたのアプリの著作権表記です。 モバイルエディターには著作権表記フォーマットが記入されていますが、独自の表記を作成することも可能です。

**アイコン:** アプリ内の様々な場所で使用されるマスターアイコンです。 必要なのはアイコンを指定することだけです。あとはモバイルエディターが標準のモバイルガイダンスに従って必要なフォーマットを全て生成してくれます。

アイコンを選択するには以下の方法があります:

- アイコンエリアにピクチャーを直接ドラッグドロップする
- 画像メニューを使用してピクチャーを選択またはコピーする

![icon](img/iconselect.png)

またエリアをダブルクリックすることでもピクチャー選択ダイアログボックスを表示することができます。

:::note

Windows では、"画像ファイル" (*.public.image) を使用する必要があります。

:::

Once the icon is selected, the mobile editor automatically creates all required icons for the app. You can access the generated icon formats by selecting **Show the icons folder** in the image menu.

### Main color

This menu allows you to select how to define the main color of your app. The main color is used to generate a custom color scheme for your app.

![icon](img/main-color.png)

- **Use the system color selector**: displays the system color picker in which you can designate the main color
- **Use the main color of the icon**: let the mobile editor determine automatically the main color from your app's icon.

At any time, you can reset the main color and get back to the icon's preset main color, by clicking on "Use the main color of the icon".

## Developer

**Name:** This field is automatically prefilled with your user account name. You can enter any name.

**Team:** Your Developer Account Team ID, that will be used during the deployment phase. This ID can be get from your Developer Account. 
