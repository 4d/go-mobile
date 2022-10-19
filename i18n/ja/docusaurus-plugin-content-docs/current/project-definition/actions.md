---
id: actions
title: アクション
---

The 4D Mobile Project editor allows you to create actions to include in your mobile app.

You can use [preset actions](#preset-actions) or [custom actions](../tutorials/actions/define-first-action.md) and [define their parameters](#add-parameters-to-your-actions).

On the 4D side, you can execute 4D code in the [On Mobile App Action](../4d/on-mobile-app-action.md) database method.

Actions are automatically available in the [mobile interface](#mobile-app-side).


## プロジェクトエディター側の設定

### アクションを作成する

新しいアクションを作成するには、アクションテーブルの下部にある + ボタンをクリックします。 すると、アクションテーブルに新しい行が追加されます。

次に、以下のものを定義する必要があります:

* **Names:** The action name to use in the [On Mobile App Action](../4d/on-mobile-app-action.md) database method to trigger your 4D code.
* **アイコン:** アイコンライブラリーから選択するアイコン。 You can also [add your own icon](./labels-and-icons.md#adding-custom-icons).
* **短いラベルとラベル:** アプリに表示するアクションのラベル
* **テーブル:** アクションを適用するテーブル
* **スコープ:** アクションの定期用対象: **カレントエンティティ** または **テーブル**

![アクションセクション](img/Actions-section-4D-for-iOS.png)

:::note note

**名前** をドラッグ＆ドロップして並べ替えることができます。 これにより、アプリのメニューに表示される順番が指定されます。

:::

### アクションに引数を追加

**アクション引数** を追加することで、アプリからデータを直接 **編集** することができます。

それぞれの引数について、以下のプロパティを設定することができます:

* 名前
* (長い) ラベル
* 短いラベル
* [Input control](#input-controls)
* Mandatory option
* デフォルト値

Depending on the selected input control, you can define the following additional properties:

* Input constraints (minimum or maximum values)
* プレースホルダー
* [Data Source](#dynamic-choice-lists)

![アクション引数](img/Actions-parameters-4D-for-iOS.png)

引数の順番はドラッグ＆ドロップで自由に変えられます。


## プリセットアクション

4Dモバイルプロジェクトには、アプリのコンテンツを管理するための、以下のプリセット (定義済み) アクションが含まれています:

* 追加
* 編集
* 削除
* 共有
* ソート
* Open URL

### 追加アクション

4Dモバイルプロジェクトで **追加アクション** を作成するのは簡単です。

まず、アクションテーブルの下にある **+ ボタン** をクリックすると表示される **追加アクション** オプションを選択します。

![追加アクション](img/Actions-Add-action-4D-for-iOS.png)

次に、その追加アクションをリンクする **テーブルを選択** するだけです。

これによって、プロジェクトエディター内に必要な引数がすべて **自動的に作成** されます。 生成されたアプリ内では、各フィールド値の編集ができるようになります。

この種のアクションの場合、引数リストの右側にある **プロパティ** は自動で設定済みです。


### 編集アクション

**編集アクション** の作成手順は追加アクションと同じですが、引数のデフォルト値が定義できない点が異なります。



### 削除アクション

**削除アクション** の作成手順は編集アクションと同じです。 唯一の違いは、このアクションを使用するとエンティティを削除できるという点です。

削除アクションを作成するには、アクションテーブルの下にある **+ ボタン** をクリックすると表示される **削除アクション** オプションを選択します。

この種のアクションは使用の際に注意が必要です。

![削除アクション](img/Actions-Delete-action-4D-for-iOS.png)

### 共有アクション

**共有アクション** を選択すると、モバイルアプリのユーザーが他のユーザーとコンテンツを共有できるようになります。 これには、スコープを選択する必要があります:

- **エンティティ**: 詳細フォームのコンテンツを共有する
- **テーブル**: リストフォームを共有する

詳細については [ディープリンク](../special-features/deep-linking.md) を参照ください。

### ソートアクション

**ソートアクション** は以下のような目的に使います:

- テーブルのリストフォームのデフォルトのソート順を定義する
- モバイルアプリのユーザーがリストのソート順を選択できるようにする

テーブルに対してソートアクションを作成した場合、並べ替え基準となる最初のフィールドを選択する必要があります:

![Docusaurus](img/sort-select.png)

このフィールドはソート条件リストに追加されます。 デフォルトでは昇順ソートが適用されますが、これは **ソート順** メニューで変更できます。

エンティティの並べ替えは、複数フィールドを基準におこなえます。 ソートの基準となる各フィールドはソートレベルと呼ばれます。 たとえば、`lastName` および `firstName` フィールドに対して 2レベルの昇順ソートをおこなった場合、結果は以下のようになります:

```4d
Aardvark, Anthony
Aardvark, Artemis
Aardvark, Arthur
...
Zygote, Elena
Zymosian, Elmer
```

ソート条件リストにソートレベルを追加するには、リスト下部の **+** ボタンをクリックし、各レベルを設定します:

![ソート](img/ascending.png)


#### モバイルアプリ上でのソート順メニュー

テーブルに対して 2つ以上のソートアクションを定義していた場合、モバイルアプリのユーザーは **ソート** メニューを自動的に使用できるようになります。 ここには定義済みのソートアクションがすべて格納されています:

![ソート](img/sort-go-mobile.gif)


> テーブルに対するソートアクションが 1つしか定義されていない場合、モバイルアプリ側では **ソート** メニューは表示されません。

### Open URL action

The **Open URL action** allows your mobile users to open an url from their mobile app. This action will display a web page served by 4D Server in a web area from within the mobile app.

When you select this action, you have to define the path that will be opened:

![open url](img/open-url-action.png)

You can only define a path starting with `/`, i.e. relative to the [current 4D web folder](https://developer.4d.com/docs/WebServer/webServerConfig.html#root-folder).

This action can be set for any table and any scope (Table or Current entity). Like other actions, the Open URL action will be automatically available in the [mobile app interface](#mobile-app-side) (short or long label).

:::note

To close the web page and get back to the mobile app interface, use the `$4d.mobile.dismiss()` function from within the page (see below).

:::

#### Web Server Side

The request sent to the server contains the context of the app (current entity and/or dataclass) in the `X-QMobile-Context` header. The content of this header is formatted in JSON and encoded in base64.

:::tip

You can get the context information already decoded as object using the [**4D Mobile App Server**](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server) component and its [WebHandler class](https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Classes/WebHandler.md).

:::

Context information can be processed in the web page to return through standard 4D web server features:

- [.shtml template pages](https://developer.4d.com/docs/WebServer/templates.html)
- [On Web Connection database method](https://developer.4d.com/docs/WebServer/httpRequests.html#on-web-connection).


#### Web Area Side

For your page to interact with the mobile app, some javascript code is automatically provided in the `$4d.mobile` object. This object contains the following properties and functions:

| プロパティ      |                  |                               | タイプ      | 詳細                                                                                                                                                               |
| ---------- | ---------------- | ----------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $4d.mobile | .action          | .name                         | string   | name of the action                                                                                                                                               |
|            |                  | .label                        | string   | label of the action                                                                                                                                              |
|            |                  | .shortlabel                   | string   | short label of the action                                                                                                                                        |
|            | .dismiss()       |                               | Function | closes the native web view                                                                                                                                       |
|            | .status(message) |                               | Function | shows a message in native app for the user <br/>message: string<br/>message: object with "message" (or "statusText") and "success" (or "level") keys |
|            | .logger          | .log(level, message : string) | Function | shows a message in native app for the developer                                                                                                                  |
|            |                  | .info(message : string)       | Function | shows a message in native app for the developer                                                                                                                  |
|            |                  | .info(message : string)       | Function | shows a message in native app for the developer                                                                                                                  |
|            |                  | .warning(message : string)    | Function | shows a message in native app for the developer                                                                                                                  |
|            |                  | .error(message : string)      | Function | shows a message in native app for the developer                                                                                                                  |
|            |                  | .debug(message : string)      | Function | shows a message in native app for the developer                                                                                                                  |
|            |                  | .verbose(message : string)    | Function | shows a message in native app for the developer                                                                                                                  |


:::info See also

Blog post: [4D for Mobile : Display Web Pages in your Mobile Apps](https://blog.4d.com/4d-for-mobile-di…your-mobile-apps/)

:::



### On Mobile App Action

The [`On Mobile App Action`](../4d/on-mobile-app-action.md) database method is available to call all of your 4D methods.

After creating all of your actions, just click on the **Create** button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.

:::note notes

- You can refresh the selection after executing an action using `$result.dataSynchro:=True`.
- You can notify the app user when action has been executed using `$result.statusText:="Message you want to display"`.
- You can also decide to force close the Edition form using `$result.close:=True`.

:::


## Input Controls

Input controls define how information will be entered by the user in the mobile app, and also how it will be rendered. Several types of input controls can be used:

- **basic** - standard input controls for the data types.
- **selection** - used to display a list of values to select (static or dynamic).
- **action** - contain Swift ot Kotlin code and can do any relevant action.

Basic and selection input controls are provided by default. Action input controls have to be installed in the "inputControls" folder (see below). You can add custom input controls depending on your needs, either by creating your own controls or by downloading them from the [Input control Github gallery](https://4d-go-mobile.github.io/gallery//#/type/input-control). You only have to copy input control files in the "inputControls" folder.

### Basic input controls

Here are the **basic input controls** you can select for a parameter, depending on the data type.

| Data type | Input controls | 詳細                                                                                                                             |
| --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| テキスト      | Default        | 文字列の頭文字を大文字にします。                                                                                                               |
|           | Mail Address   | Optimized keyboard for email entry                                                                                             |
|           | 電話番号           | Keypad for entering telephone numbers                                                                                          |
|           | アカウント          | Optimized keyboard for username entry                                                                                          |
|           | パスワード          | パスワードの管理に最適化されています。                                                                                                            |
|           | URL            | Optimized keyboard for URL entry                                                                                               |
|           | 郵便番号           | Optimized keyboard for zip code entry                                                                                          |
|           | テキストエリア        | 単一フィールド内に複数行のテキストを格納できます。                                                                                                      |
|           | バーコード          | バーコードに割り当てられた値を取り出します。 サポートされてるフォーマット: EAN8、EAN13、Code 39、Code 93、Code 128、QRコード、UPC、PDF417                                    |
| 数値        | Default        | 小数点付き数値                                                                                                                        |
|           | 整数             | 小数点のつかない数値                                                                                                                     |
|           | 指数             | 指数表記                                                                                                                           |
|           | パーセント          | パーセント表記                                                                                                                        |
|           | 読み方            | 数値を文字列へと変換                                                                                                                     |
| 日付        | Default        | Nov 23, 1937                                                                                                                   |
|           | 短い日付           | 11/23/37                                                                                                                       |
|           | 長い日付           | November 23, 1937                                                                                                              |
|           | 完全な日付          | Tuesday, November 23, 1937                                                                                                     |
| 時間        | Default        | 3:30 PM                                                                                                                        |
|           | 経過時間           | 2 hours 30 minutes                                                                                                             |
| ブール       | Default        | 数値を文字列へと変換                                                                                                                     |
| 時間        | Default        | 3:30 PM                                                                                                                        |
|           | 経過時間           | 2 hours 30 minutes                                                                                                             |
| 時間        | Default        | <img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true" /> |
|           | チェックマーク        | <img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true" />  |
| 画像        | Default        |                                                                                                                                |
|           | 署名             | 手書き文字での署名が可能に                                                                                                                  |


### Selection input controls

Selection input controls display formatted elements (values, pictures) in your mobile apps. これらの要素は、アクションフォーム内に自動的に含まれます。具体的には選択リストとして表示され、そこから値を選択し、引数として使用することができます。 These choice lists can be either **static** or **dynamic**.

以下が生成されたアプリ上で利用可能なフォーマットの種類です:

- **Push**:

![カスタム入力2](img/push.png)

- **Segmented & picker**:

![カスタム入力2](img/Sans-titre.png)

- **Popover**:

![カスタム入力2](img/popover.png)

- **Sheet**:

![カスタム入力2](img/sheet.png)


#### Static choice lists

**Static** choice lists (predefined choices hard coded in json) are located in an "inputControls" folder (`mybase/Resources/mobile/inputControls`) in a `manifest.json` file. この選択リストは以下のような複数の要素から定義されています:

| プロパティ              | タイプ                 | 詳細                                                                           |
| ------------------ | ------------------- | ---------------------------------------------------------------------------- |
| **"name"**         | text                | アクション入力コントロール名                                                               |
| **"binding"** (任意) | テキスト                | 画像を紐付けるための "imageNamed" (実際の画像はアクションフォーマッターフォルダー内の "images" サブフォルダーに入れる必要あり) |
| **"choiceList"**   | object              | キー (サーバーに送られるデータ) / 値 (ユーザーに表示される値) のリストを定義するためのオブジェクトまたはコレクション              |
| **"type"**         | text または collection | 入力コントロールの型 (text、integer、boolean) を定義するためのテキスト、またはテキストのコレクション                |
| **"format"** (任意)  | テキスト                | インターフェースの選択: push (未定義の場合のデフォルト) / segmented / popover / sheet / picker      |

以下は、静的な選択リストとして使用可能な、ある会社の支社の連絡先情報を格納した manifest.json ファイルの一例です:

```json
{
    "name": "choiceListSheet",
    "type": [
        "text"
     ],
    "format": "sheet",
    "choiceList": {
        "1":"Paris",
        "2":"Tokyo",
        "3":"Sydney",
        "4":"San Jose",
        "5":"Rabat",
        "6":"Eching"
     }
}
```

#### Dynamic choice lists

**Dynamic** choice lists are based on datasource (choices depending on the database content). この方式では、ヘルパーモジュールを使用してフォームフィールドに値を入力することで、データを素早く取得することができます。 モバイルアプリから直接利用可能であるだけでなく、選択リストは常に更新されます。 manifest.json ファイルには、以下のような要素が格納されています:

| プロパティ             | タイプ                 | 詳細                                                                        |
| ----------------- | ------------------- | ------------------------------------------------------------------------- |
| **"name"**        | テキスト                | 入力コントロール名                                                                 |
| **"choiceList"**  | object              | "dataSource" を格納するオブジェクト (以下の表参照)                                         |
| **"type"**        | text または collection | 入力コントロールの型 (text、integer、boolean) を定義するためのテキスト、またはテキストのコレクション             |
| **"format"** (任意) | テキスト                | インターフェースの選択: "push" (未定義の場合のデフォルト)、"segmented"、"popover"、"sheet"、"picker" |

| プロパティ            |                         | タイプ                        | 詳細                                                                         |
| ---------------- | ----------------------- | -------------------------- | -------------------------------------------------------------------------- |
| **"dataSource"** |                         | object                     | "dataClass"、"field"、そして任意の "entityFormat" を格納するオブジェクト。                     |
|                  | **"dataClass"**         | テキスト                       | テーブル名                                                                      |
|                  | **"field"**             | テキスト                       | サーバーに送るデータの抽出に使用                                                           |
|                  | **"sort"** (任意)         | object / collection / text | **"field"** (ソート基準 / フィールド名) と、任意の **"order"** (ソート順、デフォルトは昇順) を格納するオブジェクト |
|                  | **"search"** (任意)       | boolean / array            | 検索に使用するフィールドを格納した配列                                                        |
|                  | **"entityFormat"** (任意) | テキスト                       | 値の表示用フォーマット (指定されていない場合、フィールドから取得したデータを使用)                                 |

**注意:** 選択リストが長くなった場合に、任意の "search" 要素が利用可能になります。

動的な選択リストの一例です:

```json
{
    "name": "datasourcePush"
    "type": [
        "text"
    ],
    "format":"push",

    "choiceList": {
        "dataSource": {
            "dataClass": "Contact",
            "field": "LastName",
            "entityFormat": "%FirstName% %LastName% - %Job%",
            "search": "LastName",
            "order": "descending" 
        }
    }
}
```

On the Project editor side, once you select your **Input control** format, the **Data Source** will be selectable from a filtered list based on the format you have selected. これでアプリは更新され、使用できます。

以下は *push* フォーマットの一例です:

![カスタム入力](img/customInput1.png) ![カスタム入力2](img/customInput2.png)



### アクション入力コントロール

カスタムの入力コントロールを使用することで、ネイティブのアプリと容易にやりとりをすることができます。これはネイティブコードを使用した [ラベル & アイコン カスタムフォーマッター](labels-and-icons.md) と同じやり方を踏襲しています。

To do so, you can create your own input controls with native code, or you can download a few input controls from our [Github gallery](https://4d-go-mobile.github.io/gallery/#/type/input-control), depending on what you need for your app. Drop them into a specific "inputControls" folder (`mybase/Resources/mobile/inputControls`). するとプロジェクトエディターにて、アクションの引数プロパティ内にある入力コントロールメニューから追加の入力コントロールが利用・選択可能になります。

たとえば、モバイルの連絡先リストから電話番号を取得するには、*phoneContact* 入力コントロールテンプレートを使用することで、電話番号フィールドを自動的に埋めることが可能になります。

![アーキテクチャー](img/inputWithSwift.png) ![編集](img/phoneContactIcon2.png)![編集画面](img/phoneContactIcon.png)![編集画面](img/phoneContactIcon4.png)

ギャラリー内の入力コントロールはすべてオープンソースであり、Github から取得可能です。 自分の入力コントロールを共有したい、あるいは入力コントロールに対するフィードバックをしたい場合、お気軽に [4D Forum](https://discuss.4d.com/) までご投稿ください。

:::info

An example of Kotlin input control definition is provided in [this tutorial](../tutorials/actions/create-kotlin-input.md).

:::


## オフラインモードアクション

The user of an app can draft, store and queue action requests, even if they are working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.). これらのタスクはすべて、ネットワークにアクセスできるようになるまで、保留中アクションのリストに置かれます。 ユーザーがオンラインになると、保留中のアクションはすべて同期され、実行された後、完了したアクションのリストに表示されます。

保留中のタスクは以下にて確認し、開くことができます:

•   *設定画面*

保留中のタスクや完了したタスクの概要と履歴が表示されます。

![アクションセクション](img/screen1.png)

•   *リスト & 詳細フォーム*

現在閲覧しているテーブルやエンティティに関連するすべてのタスクが表示されます。

![アクションセクション](img/screen2.png)

:::note notes

- プリセットの "共有" アクションは、オンラインでのみ実行可能です。
- アクションは保留中の間は編集可能ですが、"完了" モードに切り替わると、修正できなくなります。

:::

### 失敗した保留タスクの更新

サーバーのビジネスロジックにより、一部のタスクが拒否されることがあります。 それらの保留タスクを編集後、モバイルユーザーは送信を再試行できます。 そのために、"完了" アクションの履歴にて、失敗の理由を説明するステータステキストを確認できます。 たとえば、モバイルユーザーがサーバーに送信したアクションを拒否し、操作に失敗したことを通知することができます。 その場合、以下のように `success` の値を `False` に設定し、 `statusText` にメッセージを設定することができます:

```4d
 $response:=New object("success"; False; "statusText"; "操作に失敗しました"))
```

 アクション引数ごとのエラーを追加することもできます。たとえば、`alphaField` 引数について:

```4d
$response.errors:=New collection(New object("parameter"; "alphaField"; "message"; "Alpha フィールドの値が無効です")
```


## Mobile app Side

In your mobile app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### テーブルリストフォーム

* **エンティティアクション:** セルを左にスワイプすると、利用可能なアクションがリスト形式で表示されます。 3つより多い数のアクションがエンティティに定義されている場合、"..." ボタンが表示されます。

![エンティティリストフォームテーブルビュー](img/ListForm-entity-action-tableview.png)

* **テーブルアクション:** 利用可能なテーブルアクションのリストを表示するために、ナビゲーションバーに汎用的なアクションボタンが用意されています。

![テーブルリストフォームテーブルビュー](img/ListForm-table-action-tableview.png)

:::tip

アクションは、アクションセクションで定義された順序で表示されます。

:::

### コレクションリストフォーム

* **エンティティアクション:** テンプレートによって、汎用ボタンをクリックするか、セル上で長押しすることでアクションが表示されます。

![エンティティリストフォームコレクションビュー](img/ListForm-entity-action-collectionview.png)

* **テーブルアクション:** テーブルリストフォームと同様に、利用可能なテーブルアクションのリストを表示するため、ナビゲーションバーに汎用的なアクションボタンが用意されています。

![テーブルリストフォームコレクションビュー](img/ListForm-table-action-collectionview.png)

### 詳細フォーム

リストフォームのテーブルアクションと同様に、ナビゲーションバーに汎用的なアクションボタンがあり、すべてのエンティティアクションをリスト表示することができます。

![エンティティ詳細フォーム](img/Detailform-final.png)

### 編集フォーム

編集または追加アクションを作成した場合、アクションリストからそれらを選択すると、**編集フォーム** が表示されます。

![タスクコメント送信](img/Action-parameters-sendComment.png)

ここでは:

* すべてのフィールドを選択して編集できます。
* **Done** または **Cancel** ボタン (ナビゲーションバーで利用可能) を使用して、変更内容を確定またはキャンセルします。

利便性のため、編集フォームにはいくつかの **特別な機能** が含まれています:

* キーボードのタイプは、アクションセクションで選択されたパラメーターに依存します。
* キーボード上部の矢印で、次のフィールドや前のフィールドに移動することができます。
* The keyboard can be closed by touching anywhere outside of a field.
* 値が有効でない場合、ユーザーに表示されます。
* ユーザーが Done ボタンをクリックしたときに空の必須フィールドがあれば、それに焦点が当たります。

## これからどうする？

See [this tutorial](../tutorials/actions/getting-started.md) that will guide you through the **action definition process**.

See [this tutorial](../tutorials/actions/create-kotlin-input.md) for an example of custom **Kotlin input control definition**.