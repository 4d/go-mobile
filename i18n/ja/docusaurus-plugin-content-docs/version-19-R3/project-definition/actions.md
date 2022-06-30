---
id: actions
title: アクション
---

このセクションでは以下のような内容を取り扱います:

* 4DのコードをiOS アプリから実行するアクションを作成する
* アクションに渡す引数を定義して渡す

:::4D for Androidにおける注意

このセクションで触れている内容は4D for Android では現在ご利用いただけません。

:::

## プロジェクトエディター側での設定

### アクションを作成する

アクションテーブルの下部にある + ボタンをクリックすることで、新しいアクションを作成できます。 クリックするとアクションテーブル内に新しい行が追加されます。

次に、以下のものを定義する必要があります:

* **名前:** [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/ja/actions.html#on-mobile-app-action) データベースメソッド内で4Dコードをトリガーする際に使用するアクションの名前
* **アイコン:** アイコンライブラリーからアイコンを選択して下さい。 またこちらの[tutorial]`(using-icons.html)`に従うことで、独自のアイコンを追加することもできます。
* **短いラベルと長いラベル:** アプリ内で表示されるアクションのラベル
* **テーブル:** アクションを適用したいテーブル
* **スコープ:** アクションを使用する対象を決めます。**カレントエンティティ** または **テーブル**

![Action section](img/Actions-section-4D-for-iOS.png)

### アクションに引数を追加

**アクション引数** を追加することでアプリから直接データを**編集**することができます。

それぞれの引数について、以下のプロパティを設定することができます:

* 名前
* (長い)ラベル
* 短いラベル
* フォーマット
* 入力制限(最小値または最大値を定義可能)
* プレースホルダー
* 必須フィールド定義
* デフォルト値

![Action parameters](img/Actions-parameters-4D-for-iOS.png)

ドラッグ&ドロップを使用して引数の順番を自由に変えることもできます。

引数に対して選択できる**フォーマット**の種類は以下の通りです:

<table>

<tr>
<th colspan="2"  style={{textAlign: 'center'}}>テキスト</th>
</tr><tr style={{textAlign: 'center'}}>
<th>フォーマット</th><th>詳細</th>
</tr><tr>
<td>テキスト</td><td>文字列の頭文字を大文字にします。</td>
</tr><tr>
<td>メールアドレス</td><td>メールアドレス入力用に最適化されたiOSキーボード</td>
</tr><tr>
<td>電話番号</td><td>電話番号入力用のiOSキーパッド</td>
</tr><tr>
<td>アカウント</td><td>ユーザー名入力用に最適化されたiOSキーボード</td>
</tr><tr>
<td>パスワード</td><td>パスワードを管理するのに最適化されます。</td>
</tr><tr>
<td>URL</td><td>URL入力に最適化されたiOSキーボード</td>
</tr><tr>
<td>郵便番号</td><td>郵便番号入力に最適化されたiOSキーボード</td>
</tr><tr>
<td>テキストエリア</td><td>単一フィールド内に複数行のテキストを格納できます。</td>
</tr><tr>
<td>バーコード</td><td>バーコードに割り当てられた値を取り出します。 サポートされてるフォーマット : EAN8、EAN13、Code 39、Code 93、Code 128、QRコード、UPC、PDF417</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>数値</th>
</tr><tr style={{textAlign: 'center'}}>
<th>フォーマット</th><th>詳細</th>
</tr><tr>
<td>数値</td><td>小数点付き数値</td>
</tr><tr>
<td>整数</td><td>小数点のつかない数値</td>
</tr><tr>
<td>指数</td><td>指数表記</td>
</tr><tr>
<td>パーセント</td><td>パーセント表記</td>
</tr><tr>
<td>文字列化</td><td>数値を文字列へと変換</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>日付</th>
</tr><tr style={{textAlign: 'center'}}>
<th>フォーマット</th><th>詳細</th>
</tr><tr>
<td>日付</td><td>Nov 23, 1937</td>
</tr><tr>
<td>短い日付</td><td> 11/23/37</td>
</tr><tr>
<td>長い日付</td><td>November 23, 1937</td>
</tr><tr>
<td>完全な日付</td><td>Tuesday, November 23, 1937</td>
</tr><tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>時間</th>
</tr><tr style={{textAlign: 'center'}}>
<th>フォーマット</th><th>詳細</th>
</tr><tr>
<td>時間</td><td>3:30 PM</td>
</tr><tr>
<td>経過時間</td><td>2 hours 30 minutes</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>ブール</th>
</tr><tr style={{textAlign: 'center'}}>
<th>フォーマット</th><th>詳細</th>
</tr><tr>
<td>ブール</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"/></td>
</tr><tr>
<td>チェックマーク</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"/></td>
</tr>

<tr>
<td colspan="2"></td>
</tr>
<tr>
<th colspan="2" style={{textAlign: 'center'}}>画像</th>
</tr>
<tr>
<td>署名</td><td>手書き文字での署名が可能に</td>
</tr>

</table>

## 定義済みアクション

4D mobile プロジェクトにはアプリの中身を管理するための、以下の(定義済み)アクションが含まれています:

* 編集
* 追加
* 削除
* 共有
* ソート

### 追加アクション

4D モバイルプロジェクトでは、容易かつシンプルに**追加アクション** を作成することができます。

必要なことは、アクションテーブルの下部にある**+ ボタン** をクリックすると表示される**追加アクション** オプションを選択するだけです。

![Add actions](img/Actions-Add-action-4D-for-iOS.png)

そしてその追加アクションにリンクしたい**テーブルを選択** するだけです。

これによって、必要な引数が全てプロジェクトエディター内にて**自動的に追加されます** 。 生成されたアプリ内では、このボタンによってそれぞれのフィールドの値を編集することができます。

これらの種類のアクションにおいては、アクション引数リストの右側にある**プロパティ** が全て必要な分が既に入力されていることが分かります。


### 編集アクション

**編集アクション** の作成の手順は追加アクションのものと同じプロセスですが、アクションセクションからはデフォルト値を定義することができないという点だけが異なります。



### 削除アクション

**削除アクション** の作成の手順は編集アクションのものと同じプロセスです。 唯一の違いは、このアクションを使用するとエンティティを削除することができるという点です。

削除アクションを作成するには、アクションテーブルの下部にある**+ ボタン** をクリックすると表示される**削除アクション** オプションを選択します。

この種類のアクションは使用に際して注意が必要です。

![Delete actions](img/Actions-Delete-action-4D-for-iOS.png)

### 共有アクション

**共有アクション** を選択すると、モバイルアプリのユーザーがコンテンツを他のユーザーと共有することができるようになります。 このアクションではスコープを選択する必要があります:

- **エンティティ**: 詳細フォームのコンテンツを共有する
- **テーブル**: リストフォームを共有する

詳細については[ディープリンキング](../special-features/deep-linking.md)のページを参照してください。

### ソートアクション

**ソートアクション**は以下のような目的のために有用です:

- テーブルのリストフォームのデフォルトのソート順を定義する
- モバイルアプリのユーザーがリストのソート順を選択できるようにする

テーブルに対して並べ替えアクションを作成した場合、ソートが実行される最初のフィールドを選択する必要があります:

![Docusaurus](img/sort-select.png)

フィールドはソート条件リストに追加されます。 デフォルトでは昇順のソート順が適用されますが、**ソート順** メニューを使用することでそれを変更することができます。

エンティティのソートは複数のフィールドに対して行うことが可能です。 ソートを行うそれぞれのフィールドはソートレベルと呼ばれます。 例えば、`lastName` および `firstName` フィールドに対して2レベルの昇順ソートを行なった場合、結果は以下のような並び順になります:

```4d
Aardvark, Anthony
Aardvark, Artemis
Aardvark, Arthur
...
Zygote, Elena
Zymosian, Elmer
```

ソート条件リストに1つ以上のソートレベルを追加するには、リスト下部の**+** ボタンを選択し、それぞれのレベルに対して設定を行います:

![sort](img/ascending.png)


#### モバイルアプリ上でのソート順メニュー

あるテーブルに対して1つ以上のソートアクションを定義していた場合、モバイルアプリのユーザーは自動的に**ソート** メニューを使用できるようになります。 ここには定義済みソートアクションが全て格納されています:

![sort](img/sort-go-mobile.gif)


> テーブルに対してソートアクションが一つしか定義されていない場合、モバイルアプリ側では**ソート** メニューは表示されません。

### On Mobile App Action

[On Mobile App Action](https://doc.4d.com/4Dv18/4D/18.4/On-Mobile-App-Action-database-method.301-5233128.ja.html) データベースメソッドを利用すると、全ての4D メソッドを呼び出すことが可能です。

全てのアクションを作成し終わったあと、アクションテーブル内の編集... ボタンをクリックすると、*On Mobile App Action* メソッド内に作成した全てのアクション名を含んだ*Case of* コードブロックが自動的に生成されます。

:::note 注意

- `$out.dataSynchro:=True` というコードをアクション実行後に使用することで、セレクションを更新することができます。
- `$out.statusText:="表示したいメッセージ"` というコードを使用することで、アクション実行時にアプリユーザーに対して通知をすることができます。

:::

## アクション入力コントロール

### キャラリーからカスタム入力を使用する方法

カスタムの入力コントロールを使用することで、ネイティブのアプリと容易にやりとりをすることができます。これはネイティブコードを使用した[ラベル & アイコン カスタムフォーマッター](labels-and-icons.md) と同じやり方を踏襲しています。

これをやるためには、独自の入力コントロールをネイティブコードを使用して作成するか、または私たちの[ギャラリー](https://4d-go-mobile.github.io/gallery/#/type/input-control) から必要な入力コントロールをダウンロードすることもできます。アプリでの用途に応じて選択してください。 これらを特定の“inputControls” フォルダ(`mybase/Resources/mobile/inputControls`) へとドロップし、展開したのち新規に作成したフォルダへとドラッグします。 これによってこれらの入力コントロールはアクションの引数プロパティ内にあるプロジェクトエディターの入力コントロールメニューから利用・選択が可能になります。

例えば、モバイルの連絡先リストからクライアントの電話番号を取得したい場合、*phoneContact* 入力コントロールテンプレートを使用することでクライアントの電話番号フィールドを自動的に埋めることが可能になります。

![Architecture](img/inputWithSwift.png) ![編集](img/phoneContactIcon2.png)![Edit screen](img/phoneContactIcon.png)![Edit screen](img/phoneContactIcon4.png)

キャラリー内の全ての入力コントロールはオープンソースであり、Github から取得可能です。 自分の入力コントロールを共有したい、あるいは入力コントロールに対するフィードバックをしたい場合、お気軽に[4D Forum](https://discuss.4d.com/) までご投稿ください。

### 入力コントロールセクション

アクション入力コントロールは、モバイルアプリ内でフォーマットされた要素(値、ピクチャーなど) を表示します。 これらの要素はアクションフォーム内に自動的に含まれます。具体的には選択リスト内に含まれ、そこから値を1つ選択し、引数として使用することができます。 これらの選択リストの動作は、静的または動的(ダイナミック) のどちらかを選ぶことができます:
- **静的** な選択リスト(json 内にハードコードされている定義済み選択肢)は'inputControls' フォルダ(`mybase/Resources/mobile/inputControls`)内に配置されているmanifest.json ファイル内で定義されています。 この選択リストは以下のような複数の要素から定義されています:

| プロパティ               | Type          | 詳細                                                                             |
| ------------------- | ------------- | ------------------------------------------------------------------------------ |
| **"name"**          | text          | アクション入力コントロール名                                                                 |
| オプション **"binding"** | text          | 画像をひもづけるための"imageNamed" (実際の画像はaction formatter フォルダ内の"images" サブフォルダに入れる必要あり) |
| **"choiceList"**    | オブジェクト        | キー(サーバーに送られるデータ) /値(ユーザーに表示される値) のリストを定義するためのオブジェクトまたはコレクション                   |
| **"type"**          | テキストまたはコレクション | 入力コントロールの型(text、integer、boolean) を定義するためのテキスト、またはテキストのコレクション                   |
| オプション **"format"**  | text          | インターフェースを選択: push(未定義の場合のデフォルト)/segmented/popover/sheet/picker                 |

以下は、静的な選択リストとして使用可能な、ある会社の支社の連絡先情報を格納したmanifest.json ファイルの一例です:
```4d
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

- **動的(ダイナミック)** 選択リストはデータソースに基づいた選択リストです(選択肢はデータベースのコンテンツに応じて変化します)。 このメソッドを使用すると、ヘルパーモジュールを使用してフォームフィールドに値を入力することで、データを素早く取得することができます。 作成されたリストはモバイルアプリから直接利用可能になるだけではなく、常に更新していくことが可能になります。 manifest.json ファイルには以下のような要素が格納されています:

| プロパティ              | Type          | 詳細                                                                       |
| ------------------ | ------------- | ------------------------------------------------------------------------ |
| **"name"**         | text          | 入力コントロール名                                                                |
| **"choiceList"**   | オブジェクト        | "dataSource" を格納するオブジェクト(以下の表参照)                                         |
| **"type"**         | テキストまたはコレクション | 入力コントロールの型(text、integer、boolean) を定義するためのテキスト、またはテキストのコレクション             |
| オプション **"format"** | text          | インターフェースを選択: "push"(未定義の場合のデフォルト)、"segmented"、"popover"、"sheet"、"picker" |

| プロパティ            |                          | Type                   | 詳細                                                                            |
| ---------------- | ------------------------ | ---------------------- | ----------------------------------------------------------------------------- |
| **"dataSource"** |                          | オブジェクト                 | "dataClass"、"field"、そしてオプションの"entityFormat" を格納するオブジェクト。                      |
|                  | **"dataClass"**          | text                   | テーブル名                                                                         |
|                  | **"field"**              | text                   | サーバーに送るデータの取得に使用                                                              |
|                  | オプション **"sort"**         | オブジェクト / コレクション / テキスト | **"field"**(ソート条件/fieldName)、そしてオプションの**"order"** (デフォルトでは昇順ソート順) を格納するオブジェクト |
|                  | オプション **"search"**       | ブール / 配列               | 検索に使用するフィールドを格納した配列                                                           |
|                  | オプション **"entityFormat"** | text                   | 表示する値(フォーマットが指定されていない場合、フィールドから取得したデータを使用)                                    |

**注意:** 選択リストが長くなった場合、オプションの"search" 要素が利用可能になります。

以下が動的な選択リストの一例です:

```4d
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

プロジェクトエディター側では、**入力コントロール** フォーマットを選択すると、**dataSource** は選択されたフォーマットに基づいてフィルターされたリストから選択可能になります。 これでアプリは更新されて使用する準備が整います。

以下は*push* フォーマットの一例です:

![customInput](img/customInput1.png) ![customInput2](img/customInput2.png)

以下が生成されたアプリケーション上で利用可能なフォーマットの種類です:

 - Push フォーマット:

![customInput2](img/push.png)

- Segmented & picker フォーマット:

![customInput2](img/Sans-titre.png)

 - Popover フォーマット:

![customInput2](img/popover.png)

 - Sheet フォーマット:

![customInput2](img/sheet.png)

**注意:** 入力コントロールは"入力コントロール" フィールドの横にある矢印を使用してアクセスすることができます。

## Offline mode actions

The user of an app can draft, store and queue action requests, even if he’s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list.

Pending tasks can be visualized and opened from:

•   *The Settings screen*

It displays a summary and a history of all pending and completed tasks.

![Action section](img/screen1.png)

•   *The List & Detail forms*

They display all the tasks related to the table or to the entity that you are currently viewing.

![Action section](img/screen2.png)

:::note 注意

- The "Share" predefined action is only executable online
- Actions are editable while pending, but they can no longer be modified once they switch to the "Completed" mode.

:::

### Update pending tasks that failed

Due to your server business logic, some tasks could be rejected. For mobile users, it is then possible to edit and to retry sending the relevant pending tasks. To do so, you can display a status text describing, in the "Complete" actions history, the reason of the failure. For example, you can reject an action sent by a mobile user to the server and inform him that the operation has failed. In that case, you can set the `success` value to `False` and provide a message in `statusText`, as follows:

 ```4d
 $response:=New object("success"; False; "statusText"; "Operation failed"))
 ```
 You can even add some errors by action parameters for the `alphaField` parameter, for example:

  ```4d
$response.errors:=New collection(New object("parameter"; "alphaField"; "message"; "Alpha field must contains a valide value")
  ```


## iOS app Side

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Table List forms

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](img/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](img/ListForm-table-action-tableview.png)

:::ヒント

Actions will be displayed in the same order as defined in the Action section.

:::

### Collection List forms

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](img/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](img/ListForm-table-action-collectionview.png)

### 詳細フォーム

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](img/Detailform-final.png)

### Edition forms

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](img/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous field using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## Where to go from here?

* **アクション定義プロセス** について説明した[チュートリアル](../getting-started/introduction.md) があります。

* カスタムテンプレートを作成するための**アクション TAG 統合** について説明した[チュートリアル](../tutorials/actions/adding-actions-template.md) もあります。

* こちらの[チュートリアル](../tutorials/actions/using-action-parameters.md) では**アクション引数の定義** について説明しています。