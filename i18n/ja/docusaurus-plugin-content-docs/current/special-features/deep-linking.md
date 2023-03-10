---
id: deep-linking
title: ディープリンク
---

Thanks to the **deep linking** feature, you can share the content that you're currently viewing with all of your colleagues. Here's an illustration demonstrating deep linking:

![Deep linking animation](img/4d-for-ios-deeplinking.gif)

There are two ways to implement deep linking in mobile apps: **URL scheme** and **Universal Links**. While URL schemes are a well-known method for deep linking, Universal links are the new way that Apple has implemented to easily connect your webpage and your app under the same link.


## ディープリンク手法の比較

Here is a comparison between the two options which are available in the project editor:

### URLスキーム

| 長所          | 短所                     |
| ----------- | ---------------------- |
| 実装が簡単       | 許可が常に必要                |
| 追加のバックエンド不要 | アプリがインストールされていないと動作しない |

### ユニバーサルリンク

| 長所                                  | 短所               |
| ----------------------------------- | ---------------- |
| 許可を必要としない                           | SSL の静的バックエンドが必要 |
| ブラウザーを開かない                          | 実装が複雑            |
| Fallback URL if app isn't installed |                  |

## カスタムの URLスキーム

At the simplest level, URL schemes allow users to open an app from other apps. But the true power of URL schemes is in the ability to perform specific actions as your app opens.



### プロジェクトエディターとカスタムURLスキーム

It's very simple to include an URL scheme to your mobile app. Let's see an example:

1. [**アクション** ページ](../project-definition/actions.md) で **共有** プリセットアクションを選択し、スコープを選択します:
    *   カレントエンティティ: 詳細フォームのコンテンツを共有します
    *   テーブル: リストフォームを共有します
2. プロジェクトエディターの **公開** セクションにある **ディープリンク** 機能にチェックを入れます。
3. URLスキームの情報には、[**一般** ページ](../project-definition/general.md) で事前に定義したアプリ名が自動入力されます。 ただし、これを編集することもできます:

![Deep linking Project editor](img/deep-linking-project-editor-publishing-section.png)

4. **On Mobile App Action** データベースメソッドに、たとえば次のように書きます:

```4d

// On Mobile App Action データベースメソッド

var $1 : Object  // モバイルアプリより提供される情報
var $0 : Object  // モバイルアプリに返される情報

var $action : Object
$action:=MobileAppServer.Action.new($1)

Case of 

    : ($1.action="shareContact")

        $0:=$action.shareContext()

    Else 

        $0:=New object("success"; False;"statusText"; "不明なアクションがサーバーに送信されました")

End case 

```

5. アプリをビルドします。


### モバイルアプリで URLスキームを使用する

1. **...** ボタンをクリックすると、現在利用可能なアクションがすべて表示されます。
2. プロジェクトエディターで定義した **共有** アクションを選択します。
3. 新しいビューが表示され、コンテンツの共有を開始することができます。
4. 共有方法を選択します。
5. リンクを送信します。

## ユニバーサルリンク

Universal links provide several key benefits that aren't available with custom URL schemes. Specifically, universal links are:

* **ユニーク**: カスタムURLスキームとは異なり、ユニバーサルリンクは自身の Webサイトへの標準的な HTTP または HTTPSリンクを使用するため、他のアプリと競合することはありません。

* **Secure**: When users install your app, iOS or Android verifies that your website allows your app to open URLs on its behalf. この権限を付与するファイルを作成し、Webサーバーにアップロードできるのはあなただけです。つまり、Webサイトとアプリの関連付けはセキュアです。

* **フレキシブル**: アプリがインストールされていない状態でも、ユニバーサルリンクは機能します。 In this case, tapping a link to your website opens the content in a browser.

* **シンプル**: 同一の URL が、Webサイトとアプリの両方で動作します。

* **プライベート**: 他のアプリはあなたのアプリと通信するにあたって、あなたのアプリがインストールされているかどうかを知る必要はありません。

### プロジェクトエディターとユニバーサルリンク

To include Universal links into your app, the process is quite similiar to the URL Schemes process:

1. [**アクション** ページ](../project-definition/actions.md) で **共有** プリセットアクションを選択し、スコープを選択します:
    *   カレントエンティティ: 詳細フォームのコンテンツを共有します
    *   テーブル: リストフォームを共有します
2. プロジェクトエディターの **公開** セクションにある **ディープリンク** 機能にチェックを入れます。
3. **ユニバーサルリンク** の欄に Webサイトの URL を入力します。
4. **On Mobile App Action** データベースメソッドに、たとえば次のように書きます:

```4d

// On Mobile App Action データベースメソッド

var $1 : Object  // モバイルアプリより提供される情報
var $0 : Object  // モバイルアプリに返される情報

var $action : Object
$action:=MobileAppServer.Action.new($1)

Case of 

    : ($1.action="shareContact")

        $0:=$action.shareContext()

    Else 

        $0:=New object("success"; False;"statusText"; "不明なアクションがサーバーに送信されました")

End case 

```

5. アプリをビルドします。
6. **On Web Connection** データベースメソッドからユニバーサルリンクをトリガーします。例:

```4d
// On Web Connection データベースメソッド

var $1; $2; $3; $4; $5; $6 : Text
var $handler : Object

$handler:=MobileAppServer.WebHandler.new()
Case of
    : ($handler.handle($1; $2; $3; $4; $5; $6))
        // デフォルトのモバイルコード
    Else
        // Web コード
End case

```

:::note

ユニバーサルリンクを作成するには、標準的なポート (80 または 443) を使用している必要があります。

:::

## ディープリンクとプッシュ通知

ディープリンクの素晴らしい点は、[プッシュ通知](push-notification.md) と互換性があることです。 つまり、ユーザーに通知でディープリンクを送り、適切なページに直接誘導することができます。

このように、この機能によって可能性は大きく広がります。 特に、ユーザーがコンテンツをより速く消費するようになった現在、ディープリンクはアプリに欠かせない機能となっています。 この機能により、ユーザーは直接目的へと移動することができます。 そのため、モバイルアプリでの利用を強く推奨します。

:::tip

Refer to the [**4D Mobile App Server** component documentation](https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Classes/PushNotification.md) for more information on how to combine push notifications and deep linking.

:::






