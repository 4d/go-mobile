---
id: list-form-storyboard
title: iOS Storyboard
---

Now it's time to create your iOS list form interface with Xcode.

完成イメージ

![カスタムリスト画面のストーリーボード](img/storyboard-custom-listform.png)

セル内に表示されるフィールドのレイアウトをデザインしましょう。

* アイコン
* タイトル
* サブタイトル

## ストーリーボードをXcodeで開く

storyboardファイル（拡張子は非表示かもしれません）をXcodeで開きます。

![ストーリーボード（空の状態）](img/empty-storyboard-custom-template.png)

It's quite empty, so let's add some content!

## Add an Image View

Let's begin by **adding a View**. Search for "View" in the **Object library** and drag it into the cell container.

![Add Image View storyboard](img/add-imageview-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. また，X座標を8に，Y座標を3に設定します。

![Image View position height and width](img/imageview-position-height-width.png)

Next, add a constraint (Leading: 8) by clicking on the **Add New Constraints button** (at the bottom of the Interface Builder window). WidthおよびHeightのチェックボックスをクリックし，幅と高さに固定値の制約を追加します。

![Image View前の余白](img/imageview-leading-space-width-height.png)

Finally, click on the **Align button** (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.

![Image View垂直揃え](img/imageview-align-vertically.png)

Your Image View is now well positioned.

![Image View（完成）](img/imageview-final.png)

セル内に表示されるラベルのほうに目を向けましょう。

## タイトルおよびサブタイトルのラベル

Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![Viewをストーリーボードに追加](img/add-view-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. また，X座標を126に，Y座標を10に設定します。

![Viewの位置とサイズ](img/view-position-height-width.png)

For the Image View, add four constraints by clicking on the **Add New Constraints button** (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:

![Viewの制約](img/view-constraints-storyboard.png)

Viewの上にObject LibraryからLabelをドラッグ＆ドロップします。

![ラベルをストーリーボードに追加](img/add-label-storyboard.png)

From the **Size inspector panel**, set the Label View Width value to 269 and the Height value to 32. Then set the X value to 8 and the Y value to 8.

**Duplicate the label** and in the **Size inspector panel**, set the X value to 8 and the Y value to 48.

![ラベルのコピー](img/duplicated-label-storyboard.png)

Select both labels add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:

![ラベル位置の制約](img/labels-contraints-storyboard.png)

With a label selected, double-click on the **Height constraint** to edit it.

![ラベル高さの制約](img/label-height-constraint-edition.png)

Change the relation from Equal to **Greater Than or Equal** so it can have a variable height (to handle multiline labels).

![ラベル高さの制約をカスタマイズ](img/change-relation-label-height-constraint.png)

他方のラベルに対しても同じことをします。

## Label customization

ラベルのフォントカラーは， Attribute inspector（ウィンドウ右側パネルのルーラーアイコンをクリック）でカスタマイズすることができます。 Let's make the second label **Dark Grey Color** :

![ラベルカラーのカスタマイズ](img/label-color-dark-grey.png)

表示される色見本の中からBackground Colorを選択すれば，アプリの支配的なカラーに設定することができます。

![ラベル背景カラーのカスタマイズ](img/label-color-background-color.png)

同じ要領で，フォントもカスタマイズすることができます。 Select both labels and select Font > Custom > **Helvetica Neue**:

![ラベルフォントのカスタマイズ](img/label-font-custom.png)

To complete the customizations, select both labels and **enter 0 for Lines** in the inspector window. これでラベルに表示できる行数が無制限となります。

![ラベル行数](img/label-lines-number.png)

:::note

The provided storyboard is optimized to have a **variable cell height** depending on the contents of each cell.

:::

![Row height tableview cell](img/row-height-tableview-cell.png)

## セルにフィールドが表示されるようにセットアップする

### Image View

Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![User defined runtime attributes](img/user-defined-runtime-attributes.png)

* **Key Path**: Begin with bindTo to activate binding on the component. Enter `bindTo.record.___FIELD_1___`

* **Type**: Always `String`

* **Value**: The attribute name. Enter `___FIELD_1_BINDING_TYPE___`

![Identity inspector](img/identity-inspector-storyboard.png)

### ラベル

Select the first label and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Type**: `String`

* **Value**: `___FIELD_2_BINDING_TYPE___`

![Field 2 Binding](img/field-2-binding.png)

Select the second label and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Type**: `String`

* **Value**: `___FIELD_3_BINDING_TYPE___`

![Field 3 Binding](img/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility:

* Double-click the first label to edit it and enter `___FIELD_2_LABEL___`
* Double-click the second label to edit it and enter `___FIELD_3_LABEL___`

![Storyboard label display names](img/storyboard-label-display-name.png)

Go to your project editor, select your list form template from the Forms section, then select Build and Run.

Here is the simulator result :

![Simulator result](img/simulator-result.png)

## アプリをカスタマイズする

The last step is adding a corner radius to the Image View to have a better design.

Image Viewを選択し，User Defined Runtime Attributesにユーザー定義属性を入力します。

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

その他

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![ImageView corner Radius](img/imageview-corner-radius.png)

これでカスタムテンプレートがプロジェクトエディターで使用できるようになりました！

![カスタムテンプレート（完成）](img/custom-template-final-result.png)

## これからどうする？

In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build [detail form templates](../creating-detail-forms/detail-form-template.md).

Download the completed template list folder:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip">Download</a>
</div>




