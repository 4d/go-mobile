---
id: publishing
title: 公開
---

このページでは、アプリの公開設定および特殊なモバイル機能にアクセスできます:


![公開セクション](img/publishing.png)


## プロダクションURL

本番環境においてモバイルアプリが接続し、データの読み書きをおこなう Webサーバーの URL です。 任意の有効なアドレスが入力できます。例:

```
https://my.wesbsite.com
http://my.website.com:9200
www.website.com/mobile
```

開発フェーズではこのエリアを空にし、[データソース](data.md) を **カレントデータファイル** に設定することができます。

:::tip

ユーザーは、モバイルデバイスから [サーバーの URL を変更する](#リモートURLを変更する) ことが可能です。

:::



## Webサーバー設定

**編集...** ボタンをクリックすると 4Dストラクチャー設定の **Web** ページが開きます。 このページでは、モバイルアプリに埋め込む以下の設定を定義します:

- **HTTPを有効化** オプションおよび **HTTPポート**
- **HTTPSを有効化** オプションおよび **HTTPSポート**

:::note

HTTP と HTTPS の両方が有効化されていた場合、HTTP が使用されます。

:::

Activating the HTTPS port requires that you installed a valid [TLS certificate](https://developer.4d.com/docs/Admin/tls.html). 4D でテスト用証明書を作成することもできます。

これらの設定は、[プロダクションURL](#プロダクションURL) が定義されている場合にのみ使用されます。 それ以外の場合には、ローカルIDアドレスが使用されます。

:::note

シミュレーターは必ずローカルに動作します (127.0.0.1 または localhost)。

:::

## デバイスでの見た目

### 設定画面

設定画面はタブバーから利用可能です。 また、アプリ内にテーブルが 5つ以上ある場合には、"..." からアクセスできます。

設定画面では、次のことができます:

* リモートURL とその状態を確認する
* ログアウトする (認証ユーザーとしてログインしていた場合)

![ログイン & 設定画面](img/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


### リモートURLを変更する

リモートURL は iPhone の設定から簡単に更新できます:

* iPhone の設定を開きます
* リモートURL を更新したいアプリを選択します
* "サーバーアドレスをリセット" オプションをタッチします

![リモートURLをリセットする](img/Reset-remote-url.png)

* その後、アプリを再起動してサーバーアドレスをリセットします
* 最後に新しいリモートURL 定義します

![リモートURLを更新する](img/Update-remote-url.png)


## 機能

このエリアでは、モバイルアプリの特殊な機能を選択し設定することができます。 これらの機能は、それぞれ専用の章に詳細な説明があります:

- [認証](../special-features/authentication.md)
- [プッシュ通知](../special-features/push-notification.md)
- [ディープリンク](../special-features/deep-linking)


