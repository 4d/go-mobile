---
id: detail-form-template-storyboard
title: iOS ストーリーボード
---

iOSアプリのカスタム詳細フォームのインターフェースを Xcode で作成しましょう！

完成イメージ

![カスタム詳細画面のストーリーボード](img/storyboard-custom-detailform.png)

テンプレートに表示する次のフィールドのレイアウトをデザインします:

* プロフィールのヘッダー画像
* 繰り返されるフィールド

## ストーリーボードを Xcode で開く

.storyboardファイル (拡張子は非表示かもしれません) を Xcode で開きます。

![ストーリーボード（空の状態）](img/empty-storyboard-custom-detailform-template.png)

ほとんど白紙の状態です。早速、中身を追加しましょう！

## Scroll View を追加する

詳細フォームをスクロールできるようにするため、はじめに **オブジェクトライブラリ** から Scroll View をドラッグ＆ドロップします。

![Scroll Viewをストーリーボードに追加](img/add-scrollview-storyboard.png)


**Size inspector** (ウィンドウ右側パネルの三角定規アイコンをクリック) で Scroll View の Width (幅) を 359 に、Height (高さ) を 667 に設定します。 X座標を 8、Y座標を 0 に設定します。

![Scroll Viewの位置とサイズ](img/scrollview-position-height-width.png)


**Add New Constraints** ボタンをクリックします。左右上下 (Leading・Trailing・Top・Bottom) の余白をそれぞれ 8・8・0・0 に設定し、余白がすべて有効なのを確認して (赤い実線)、確定します:

![Scroll Viewの制約](img/scrollview-constraints.png)

## Vertical Stack View を追加する

**オブジェクトライブラリ** から Vertical Stack View をドラッグし、Scroll View の上にドロップします。 **Size inspector** (ウィンドウ右側パネルの三角定規アイコンをクリック) で、Width (幅) を 359 に、Height (高さ) を 202 に設定します。 X座標を 0、Y座標を 8 に設定します。

![Stack Viewをストーリーボードに追加](img/add-vertical-stackview-storyboard.png)

Stack View の幅と高さは、内包しているオブジェクトによって決まるため、サイズの制約はもう少し後に設定します。

## Stack View に他の View を追加する

**オブジェクトライブラリ** から View をドラッグし、ストーリーボードに追加したばかりの Stack View の上にドロップします。 左側のツリー表示にて、View の名前を **Field View 1** に変更します。名前は、Identity inspector の Document セクションの Label 欄でも変更できます。

![Field View 1を追加](img/add-view1-storyboard.png)

**オブジェクトライブラリ** からもう一つ View をドラッグし、今度は画面の左側にツリー表示されているドキュメントのアウトラインに直接ドロップしましょう。Stack View の内部に収まるよう、Field View 1 と同じレベルに挿入してください。その後、ビューの名前を **Field View 2** に変更します。

![Field View 2の追加](img/add-view2-storyboard.png)


View 同士の間隔を空けるため、Stack View の Attributes inspector で Spacing の値を 8 に変更します。

![Stack Viewの余白](img/stackview-spacing.png)

**Field View 1** と **Field View 2** の両方を選択して、インタフェースビルダー画面の右側で **Size inspector** を開き、幅を 359、高さを 97 に設定します。

![Viewの位置とサイズ](img/views-position-height-width-storyboard.png)

**Field View 1** を選択し、**Add New Constraints** ボタンをクリックして 左 (Leading) 0・右 (Trailing) 0・上 (Top) 0 となるように 3つの制約を設定します。

![Viewの制約](img/fieldView-1-Field-View-2-constraints.png)

Stack View の幅が Scroll View と同じになるよう、制約をもう 1つ追加します:

**Ctrl**キーを押しながら Stack View をクリックし、Scroll View へとマウスをドラッグします。 マウスボタンを離すと同時に、このコンテキストで設定可能な制約の選択肢が表示されます。 Equal Width を選択してください。

![等幅のStack View](img/stackview-equal-width-scrollview.png)

次に、Stack View が選択された状態で、**Add New Constraints** ボタンをクリックし、下図のように左右上下 (Leading・Trailing・Top・Bottom) の余白をそれぞれ 0・0・8・0 に設定します:

![Stack Viewの制約](img/stackview-constraints.png)

制約が設定されると、下図のように表示が変化するはずです:

![Stack Viewの最終的な制約](img/stackview-constraints-final.png)

Stack View にビューを 2つ追加し、制約も設定できました。次は、Field View 1 の作業に移りましょう。

## Field View 1 に Image View を追加する

**オブジェクトライブラリ** から **Image View** をドラッグし、Field View 1 の上にドロップします。

![Image Viewをストーリーボードに追加](img/add-imageview-storyboard.png)

インタフェースビルダー画面の右側エリアに **Size inspector** を開き、Image View の幅を 359 、高さを 97 に設定します。 X 座標、Y 座標の両方を 0 に設定します。

![Image Viewの位置とサイズ](img/imageview-position-height-width.png)

**Add New Constraints** ボタンをクリックします。左右上下 (Leading・Trailing・Top・Bottom) の余白をそれぞれ 0・0・0・0 に設定し、余白がすべて有効なのを確認して (赤い実線)、確定します:

![Image Viewの制約](img/imageview-constraints.png)

**Size inspector**で Intrinsic Size を **Default** から **Placeholder** に変更します。

![自動サイズのImage View](img/intrinsic-size-imageview.png)

## Field View 2 にラベルを追加する

### Title ラベル

**オブジェクトライブラリ** から **Label** をドラッグし、Field View 2 の上にドロップします。幅を 343、高さを 22 に設定します。 また、X座標と Y座標の両方を 8 に設定します。

![ラベル追加](img/add-label1-storyboard.png)

ラベルをダブルクリックし、`___FIELD_LABEL___` に名称変更します。 **Attribute inspector** でフォントを **Helvetica Neue Light 18.0** に、カラーを **BackgroundColor** に設定します。

![タイトルのラベルフォントと文字カラー](img/title-label-font-and-color.png)

### Content ラベル

Title ラベルを複製し、幅を 339、高さを 44 に変更します。 X座標を 12、Y座標を 37 に設定します。

![ラベル追加](img/add-label2-storyboard.png)

ラベルをダブルクリックし、`<___FIELD_LABEL___>` に名称変更します。 **Attribute inspector** でフォントを **Helvetica Neue Light 20.0** に、カラーを **Black Color** に設定します:

![内容のラベルフォントと文字カラー](img/content-label-font-and-color.png)

Content とTitle のラベルを両方選択し、**Add New Constraints** ボタンをクリックします。左右上下 (Leading・Trailing・Top・Bottom) の余白をそれぞれ Multiple・8・Multiple・Multiple に設定し、余白がすべて有効なのを確認し (赤い実線)、確定します:

![タイトルラベルと内容ラベルの制約 ](img/titlelabel-contentlabel-contraints.png)

外観に関する設定が一段落しました！ 制約の設定はこれで完了です。

## セルとフィールドを関連付ける

### Image View
Image View を選択し、**Identity inspector** (ウィンドウ右側パネルの身分証明書アイコンをクリック) の User Defined Runtime Attributes にアクセスします。 行を追加するために **＋** ボタンをクリックします。

![ユーザー定義のランタイム属性](img/user-defined-runtime-attributes.png)

* **Key Path**: bindTo から始まるコードでコンポーネントの結合を有効にします: `bindTo.record.___FIELD_1___` と入力します。

* **Type**: `String`

* **Value**: 属性名です。 `___FIELD_1_BINDING_TYPE___` と入力します。

![Identity inspector](img/identity-inspector-storyboard.png)

### ラベル

**最初のラベル** については、主にアイコンを表示するため図のように数行追加します:

![Label 1 のユーザー定義ランタイム属性 ](img/label1-user-defined-runtime-attributes.png)

また、Class を `IconLabel` に設定し、**Inherit Module From Target**のチェックボックスは有効にしておきます:

![Label 1 カスタムクラス](img/label1-custom-class.png)

**2つ目ラベル** を選択し、こちらにも User Defined Runtime Attributes に下記の 1行を追加します:

* **Key Path**: `bindTo.record.___FIELD___`

* **Type**: `String`

* **Value**: `___FIELD_BINDING_TYPE___`

![Label 2 のユーザー定義ランタイム属性 ](img/label2-user-defined-runtime-attributes.png)

## 繰り返し使用されるセルにタグを設定する

プロジェクトエディターでフィールドをフォームに複数追加した場合、それに対応して Field View 2 は何度も複製されます。

ストーリーボードの各要素は、オブジェクトID を持ちます。 試しに Field View 2 を選択し、**Identity inspector** を確認してください。オブジェクトID が表示されているはずです:

![オブジェクトID ストーリーボード](img/object-id-storyboard.png)

このビューに含まれる要素はまとめて複製されるべきグループに属していることをプロジェクトエディターに知らせるため、要素と制約にそれぞれタグを設定する必要があります。

1つずつ変更するのは少々面倒ですし、途中でミスをしてしまうかもしれません。 ここは使い慣れたコードエディターでストーリーボードファイルを開いて作業を進めることにしましょう！

### Field View 2

* **Field View 2** を選択し、Identity inspector (インターフェースビルダー画面の右側) からオブジェクトID をコピーします。 このプロジェクトの場合、Field View 2 のオブジェクトID は **SiX-3H-lNB** です。

* ストーリーボード XML ファイル内でこの ID を検索し、すべての出現箇所で **TAG-FD-001** に置換します。 オブジェクトID は何度か出現するので、見落とさないように気をつけましょう！

![ストーリーボード xml](img/storyboard-xml.png)

ストーリーボード XML ファイルを保存します。 Xcode に表示される Field View 2 のオブジェクトID が変化していることに注目してください:

![Field View 2 のオブジェクトID](img/field-view-2-object-id.png)

### 最初のラベル

* **最初のラベル** のオブジェクトID を Identity inspector からコピーし、ストーリーボード XML ファイル内で **TAG-FD-002** に一括置換します。

![Label 1 のオブジェクトID](img/label1-object-id.png)

これで最初のラベルについては一丁あがりです！

### 2つ目のラベル

* 今度は **二つ目のラベル** のオブジェクトID を Identity inspector からコピーし、ストーリーボード XML ファイル内で **TAG-FD-003** に一括置換します。

![Label 2 のオブジェクトID](img/label2-object-id.png)

うまく置換できました！

### 制約にタグを設定する

どちらのラベルも制約があるので、それらにもタグを設定する必要があります:

![タグの制約](img/duplicated-constraints.png)

View Field 2 と 2つのラベルに対して実行したのと同じ要領で、Identity inspector から 7つある **制約** のオブジェクトID をコピーし、**TAG-FD-004**、**TAG-FD-005**、**TAG-FD-006**、**TAG-FD-007**、**TAG-FD-008**、**TAG-FD-009**、**TAG-FD-010** に変更します。制約は左のツリーから選択すると楽です。

モバイルプロジェクトエディターを開き、フォームセクションで詳細フォームのカスタムテンプレートを選択した上で、"ビルドして実行" を選択します。

![カスタム詳細画面テンプレート](img/custom-detail-template-forms.png)

カスタム詳細画面が作成できました！

![iPhone画面](img/iphone-demo.png)

無事、Field View 2 を複製することができました。 しかし、アプリにもう少し彩りを添えることはできないでしょうか。

### アプリをカスタマイズする

Image View および Field View 2 に角の丸みを追加しましょう。

Image View を選択し、User Defined Runtime Attributes に次の 2行を追加します:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

および

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: Check the box

![iPhone画面](img/imageview-corner-radius.png)

Field View 2 を選択し、下記のように設定します:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

![iPhone画面](img/fieldview2-corner-radius.png)

カスタマイズしたプロジェクトを実際にビルドしてみましょう！

![カスタムテンプレート（完成）](img/custom-template-final-result.png)

## これからどうする？

このチュートリアルでは、詳細フォームのカスタムテンプレートを作成する方法を紹介しました。 スタータープロジェクトを参考に、シンプルなカスタムテンプレートが簡単に自作できる、という手応えが得られたのではないでしょうか。

完成したテンプレート入りプロジェクト:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip">ダウンロード</a>
</div>
