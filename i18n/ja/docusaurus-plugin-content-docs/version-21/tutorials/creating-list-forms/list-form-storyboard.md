---
id: list-form-storyboard
title: iOS ストーリーボード
---

iOSアプリのカスタムリストフォームのインターフェースを Xcode で作成しましょう！

完成イメージ

![カスタムリスト画面のストーリーボード](img/storyboard-custom-listform.png)

テンプレートに表示する次のフィールドのレイアウトをデザインします:

* アイコン
* タイトル
* サブタイトル

## ストーリーボードを Xcode で開く

.storyboardファイル (拡張子は非表示かもしれません) を Xcode で開きます。

![ストーリーボード（空の状態）](img/empty-storyboard-custom-template.png)

ほとんど白紙の状態です。早速、中身を追加しましょう！

## Image View を追加する

エディターを右にスクロールして第2画面 (シーン) に移動し、**オブジェクトライブラリ** から **Image View** を探してセルにドラッグ＆ドロップします。 オブジェクトライブラリは、View メニューから Show Library を選択して表示できるほか、command+shift+L で直接表示することもできます。

![Image Viewをストーリーボードに追加](img/add-imageview-storyboard.png)

**Size inspector** (ウィンドウ右側パネルの三角定規アイコンをクリック) で Image View の Width (幅) と Height (高さ) の両方を 110 に設定します。 また、X座標を 8、Y座標を 3 に設定します。

![Image Viewの位置とサイズ](img/imageview-position-height-width.png)

**Add New Constraints** ボタンをクリックします。 Height のチェックボックスもクリックして、高さ固定の制約を追加したら、確定します:

![Image View前の余白](img/imageview-leading-space-width-height.png)

**Align** (ウィンドウ下部の四角が左揃えになっているアイコン) ボタンをクリックして、Vertically in Container (縦中央揃え) のチェックボックスを有効にして、これも確定します。

![Image View垂直揃え](img/imageview-align-vertically.png)

これで、Image View のレイアウトが決まりました。

![Image View（完成）](img/imageview-final.png)

セル内に表示されるラベルのほうに目を向けましょう。

## タイトルおよびサブタイトルのラベル

まず **View** を追加しましょう。 **オブジェクトライブラリ** で View (View Controllerではありません) を探し、セルにドラッグ＆ドロップします。

![Viewをストーリーボードに追加](img/add-view-storyboard.png)

**Size inspector** (ウィンドウ右側パネルの三角定規アイコンをクリック) で View の Width (幅) を 277 に、Height (高さ) を 94 に設定します。 また、X座標を 126、Y座標を 10 に設定します。

![Viewの位置とサイズ](img/view-position-height-width.png)

**Add New Constraints** (ウィンドウ右下にある T に囲まれた四角のアイコン) ボタンをクリックします。

![Viewの制約](img/view-constraints-storyboard.png)

今度は、**オブジェクトライブラリ** で Label を探し、View の上にドラッグ＆ドロップします。

![ラベルをストーリーボードに追加](img/add-label-storyboard.png)

**Size inspector** で Label の Width (幅) を 269 に、Height (高さ) を 32 に設定します。 また、X座標と Y座標の両方を 8 に設定します。

ラベルを **複製** (command+D) し、**Size inspector** で X座標を 8、Y座標を 48 に設定します。

![ラベルのコピー](img/duplicated-label-storyboard.png)

**Add New Constraints** ボタンをクリックします。左右上下 (Leading・Trailing・Top・Bottom) の余白をそれぞれ 8・0・8・Multiple に設定し、余白がすべて有効なのを確認します (赤い実線)。Height のチェックボックスもクリックして、高さ固定の制約を追加したら、確定します:

![ラベル位置の制約](img/labels-contraints-storyboard.png)

一方のラベルだけを選択し、制約を編集するためにウィンドウ右側パネルに表示されている **Height equals: 32** をダブルクリックします。

![ラベル高さの制約](img/label-height-constraint-edition.png)

Relation を Equal から **Greater Than or Equal** に変更します。 垂直方向に拡張可能にすることで、複数行のラベルにも対応することが狙いです。

![ラベル高さの制約をカスタマイズ](img/change-relation-label-height-constraint.png)

他方のラベルに対しても同じことをします。

## ラベルのカスタマイズ

ラベルのフォントカラーは、Attribute inspector (ウィンドウ右側パネルの横スライダーのアイコンをクリック) でカスタマイズできます。 低い位置のラベルのフォントカラーを **Dark Gray Color** に設定しましょう。

![ラベルカラーのカスタマイズ](img/label-color-dark-grey.png)

表示される色見本の中から BackgroundColor を選択すれば、アプリの支配的なカラーに設定することができます。

![ラベル背景カラーのカスタマイズ](img/label-color-background-color.png)

同じ要領でフォントもカスタマイズすることができます。 両方のラベルを選択し、Font を クリックして Custom を選択します。 そうすれば、**Helvetica Neue** のようなフォント名が設定できるようになります。

![ラベルフォントのカスタマイズ](img/label-font-custom.png)

仕上げに、両方のラベルが選択された状態で Attribute inspector で **Lines** を 1 から 0 に変更します。 これでラベルに表示できる行数が無制限となります。

![ラベル行数](img/label-lines-number.png)

:::note

このストーリーボードは、セルの内容に応じて **高さが可変** になるよう、Animatable Table View の Row Height と Estimate が Automatic に設定されています。

:::

![セルの高さ](img/row-height-tableview-cell.png)

## セルとフィールドを関連付ける

### Image View

Image View を選択し、**Identity inspector** (ウィンドウ右側パネルの身分証明書アイコンをクリック) の User Defined Runtime Attributes にアクセスします。 行を追加するために **＋** ボタンをクリックします。

![ユーザー定義のランタイム属性](img/user-defined-runtime-attributes.png)

* **Value**: 属性名です。 `___FIELD_1_BINDING_TYPE___` と入力します。

* **Type**: `String`

* **Value**: 属性名です。 `___FIELD_1_BINDING_TYPE___` と入力します。

![Identity inspector](img/identity-inspector-storyboard.png)

### ラベル

高い位置のラベルを選択し、さきほどと同様に User Defined Runtime Attributes に行を追加します:

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Type**: `String`

* **Value**: `___FIELD_2_BINDING_TYPE___`

![Field 2のバインディング](img/field-2-binding.png)

低い位置のラベルを選択し、こちらにも User Defined Runtime Attributes に下記の 1行を追加します:

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Type**: `String`

* **Value**: `___FIELD_3_BINDING_TYPE___`

![Field 3のバインディング](img/field-3-binding.png)

直感的に理解できるように **ストーリーボードに表示されるラベル** を変更することができます:

* 高い位置のラベルを選択し、`___FIELD_2_LABEL___` と入力します。
* 低い位置のラベルを選択し、`___FIELD_3_LABEL___` と入力します。

![ラベル表示名](img/storyboard-label-display-name.png)

モバイルプロジェクトエディターを開き、フォームセクションでリストフォームのカスタムテンプレートを選択した上で、"ビルドして実行" を選択します。

シミュレーターでうまく動けば、成功です:

![シミュレーターの結果](img/simulator-result.png)

## アプリをカスタマイズする

Image View の角の丸みをカスタマイズして、デザインに個性を持たせましょう。

Image View を選択し、User Defined Runtime Attributes に次の 2行を追加します:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

および

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![Image View角の丸み](img/imageview-corner-radius.png)

カスタマイズしたプロジェクトを実際にビルドしてみましょう！

![カスタムテンプレート（完成）](img/custom-template-final-result.png)

## これからどうする？

このチュートリアルでは、iOS のリストフォーム用カスタムテンプレートを作成する方法を紹介しました。 スタータープロジェクトを参考に、シンプルなカスタムテンプレートが簡単に自作できる、という手応えが得られたのではないでしょうか。 もちろん、リストフォームだけでなく、[詳細フォームのテンプレート](../creating-detail-forms/detail-form-template.md) も独自に作成することができます。

完成したリストフォームのテンプレート入りプロジェクト:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip">ダウンロード</a>
</div>




