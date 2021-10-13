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
* 並べ替え

### Add action

4D mobile projects makes the **Add actions** creation process very simple.

The only thing you need to do is select the **Add action for** option, accessible from the **+ button** at the bottom of the Actions table.

![Add actions](img/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action.

This will **automatically create** all the parameters for you in the Project Editor. In the generated app, this will allow you to edit each field value.

For those kind of action, you will see that all **properties** are already filled in for your convenience at the right side of the parameter's list.


### Edit action

**Edit actions** creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section.



### Delete action

**Delete action** creation follows the same process as the Edit action. The only difference is that this action allows you to remove an entity.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

This type of action should be used with caution.

![Delete actions](img/Actions-Delete-action-4D-for-iOS.png)

### Share action

Selecting the **Share action** will allow your mobile users to share content with other users. You just need to select the scope:

- **entity**: to share content from a detail form
- **table**: to share a list form

See the [Deep Linking](../special-features/deep-linking.md) page for more details.

### Sort action

**Sort actions** are useful to:

- define a default sort order for the table list forms
- allow your mobile users to choose a list sort order

When you create a sort action for a table, you need to select the first field on which the sort will be done:

![Docusaurus](img/sort-select.png)

The field is added to the Sort Criteria list. An ascending sort order is set by default, but you can change it using the **Sort order** menu.

You can sort entities in more than one field. Each field you sort is referred to as a sort level. For example, the results of a two-level ascending sort of the `lastName` and `firstName` fields would produce a list such as this:

```4d
Aardvark, Anthony
Aardvark, Artemis
Aardvark, Arthur
...
Zygote, Elena
Zymosian, Elmer
```

To add one or more sort level(s) in the Sort Criteria list, select the **+** button under the list and configure each level:

![sort](img/ascending.png)


#### Sort order menu on the mobile app

When you define more than one sort action for a table, mobile users automatically benefit from a **sort** menu. It contains all the predefined sort actions:

![sort](img/sort-go-mobile.gif)


> When only one sort action is defined for a table, the **sort** menu is not displayed on the mobile app side.

### On Mobile App Action

The [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) database method is available to call all of your 4D methods.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.

:::note notes

- You can refresh the selection after executing an action using `$out.dataSynchro:=True`.
- You can notify the app user when action has been executed using `$out.statusText:="Message you want to display"`.
- You can also decide to force close the Edition form using `$out.close:=True`.

:::

## Action input controls

### How to use a custom input from the gallery

You can easily interact with native apps by using custom input controls, which follow the same logic as [Labels & Icons custom formatters](labels-and-icons.md) with native code.

To do so, you can create your own input controls with native code, or you can download a few input controls from our [gallery](https://4d-go-mobile.github.io/gallery/#/type/input-control), depending on what you need for your app. Drop them into a specific “inputControls” folder (`mybase/Resources/mobile/inputControls`), unzip them and drag them into this newly created folder. They will then be available and selectable from the project editor input controls menu, in the parameter properties of the action.

For example, if you want to get a client's phone number from your mobile contact list, the *phoneContact* input control template enables you to automatically fill your client's phone number field.

![Architecture](img/inputWithSwift.png) ![編集](img/phoneContactIcon2.png)![Edit screen](img/phoneContactIcon.png)![Edit screen](img/phoneContactIcon4.png)

Bear in mind that all input controls from the gallery are open source and available on Github. So feel free to share your own input controls or your feedback on the [4D Forum](https://discuss.4d.com/).

### Input control selection

Action input controls display formatted elements (values, pictures) in your mobile apps. These elements are automatically included in your action form, more specifically in a choice list, in order to select one of the values and to use it as a parameter. These choice lists can be either static or dynamic:
- **Static** choice lists (predefined choices hard coded in json) that are located in an 'inputControls' folder (`mybase/Resources/mobile/inputControls`) in a manifest.json file. They are defined by several elements, as follows:

| Property               | Type               | 詳細                                                                                                      |
| ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| **"name"**             | text               | action input control name                                                                               |
| Optional **"binding"** | text               | "imageNamed" to bind on images (Images must be in a subfolder "images" in the action formatter folder)  |
| **"choiceList"**       | object             | an object or collection to define a list of key(data sent to server)/value(displayed value to the user) |
| **"type"**             | text or collection | one text or a collection of text to define a type (text, integer, boolean) of input control             |
| Optional **"format"**  | text               | to select interface: push(default if not defined)/segmented/popover/sheet/picker                        |

Here is an example of a manifest.json file containing the contact information of a company's subsidiaries, that can be used as a static choice list:
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

- **Dynamic** choice lists based on datasource (choices depending on the database content). This method enables you to get data very fast by filling a form field using helper modules. Not only will your lists be directly accessible from your mobile app, they will also be constantly updated. The manifest.json file is composed of the following elements:

| Property              | Type               | 詳細                                                                                             |
| --------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| **"name"**            | text               | input control name                                                                             |
| **"choiceList"**      | object             | an object that contain "dataSource" (see table below)                                          |
| **"type"**            | text or collection | one text or a collection of text to define a type (text, integer, boolean) of input control    |
| Optional **"format"** | text               | to select interface: "push"(default if not defined), "segmented", "popover", "sheet", "picker" |

| Property         |                             | Type                       | 詳細                                                                                                                              |
| ---------------- | --------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **"dataSource"** |                             | object                     | an object that contain "dataClass", "field" and optional "entityFormat"                                                         |
|                  | **"dataClass"**             | text                       | table name                                                                                                                      |
|                  | **"field"**                 | text                       | used to extract data to send to server                                                                                          |
|                  | Optional **"sort"**         | object / collection / text | can be an object that contains **"field"**(sort criteria/fieldName), and optional **"order"** (sort order ascending by default) |
|                  | Optional **"search"**       | boolean / array            | can be an array that contain field to use for search                                                                            |
|                  | Optional **"entityFormat"** | text                       | for the display value (if no format we use the extracted data from field)                                                       |

**Note:** When the choice list is extensive, the optional "search" element becomes available.

Here is an example of a dynamic choice list:

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

On the Project editor side, once you select your **Input control** format, the **dataSource** will be selectable from a filtered list based on the format you have selected. Your app will then be updated and ready-to-use!

Here is an example with the *push* format:

![customInput](img/customInput1.png) ![customInput2](img/customInput2.png)

Here are the different formats available on the generated application:

 - Push format:

![customInput2](img/push.png)

- Segmented & picker formats:

![customInput2](img/Sans-titre.png)

 - Popover format:

![customInput2](img/popover.png)

 - Sheet format:

![customInput2](img/sheet.png)

**Note:** You can access your input control using the arrow icon next to the "Input Control" field.

## Offline mode actions

The user of an app can draft, store and queue action requests, even if he’s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list.

Pending tasks can be visualized and opened from:

•   *The Settings screen*

It displays a summary and a history of all pending and completed tasks.

![Action section](img/screen1.png)

•   *The List & Detail forms*

They display all the tasks related to the table or to the entity that you are currently viewing.

![Action section](img/screen2.png)

:::note notes

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

:::tip

Actions will be displayed in the same order as defined in the Action section.

:::

### Collection List forms

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](img/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](img/ListForm-table-action-collectionview.png)

### Detail forms

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

* A [tutorial](getting-started.md) is available to guide you through the **action definition process**.

* Another [tutorial](adding-actions-template.md) will guide you through the **action TAG integration** for custom templates.

* A final [tutorial](using-action-parameters.md) will guide you through the **action parameters definition**.
