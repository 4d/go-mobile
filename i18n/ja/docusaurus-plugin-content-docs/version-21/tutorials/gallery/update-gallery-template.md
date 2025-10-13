---
id: update-gallery-template
title: テンプレートの編集
---

> **目標**
> 
> ダウンロードしたテンプレートを開いて、改善します。

## テンプレートを開く

ギャラリーからダウンロードしたテンプレートを修正するには:

* まず、*YourDatabase.4dbase/Resources/Mobile/form/list* フォルダーに移動します。

![テンプレートの Resources フォルダー](img/template-resources-folder.png)

* ここで、先ほどダウンロードしたテンプレートが利用可能であることが確認できます。
* zipファイルを解凍して開きます。
* 次に、package.swift ファイルをダブルクリックします。

![package.swiftを開く](img/open-package-swift.png)

* すると、すべてのソースとともにテンプレートが Xcode で開かれ、テンプレートを修正することができます。

![Xcodeで開く](img/open-with-xcode.png)

## テンプレートの編集

パッケージが読み込まれたら、左のツリー表示を展開して、.storyboard ファイルを選択します。さっそく、ストーリーボードを編集してみましょう。

操作は難しくありません！

たとえば、Attributes inspector を使って、FIELD_1_LABEL のフォントとカラーを変更しましょう。

![Xcodeで編集する](img/update-template.png)

テンプレートの改良が完了したら、プロジェクトエディターのフォームテンプレートピッカーからテンプレートを選択して使用することができます。

![編集されたテンプレートを選択](img/selelect-update-template.png)

## テンプレートをシェアしましょう

テンプレートに大幅な改良を加えて完成させた場合、おそらくそれをシェアしたくなることでしょう。

テンプレートギャラリーの最後に、シェアするためのボタンがあります。

![テンプレートをシェアしましょう](img/share-template.png)

シェアするための条件と手順は Github の投稿ページで説明されています。

## これからどうする？

[投稿ガイド](https://github.com/4d-go-mobile/gallery/blob/master/.github/CONTRIBUTING.md#how-do-you-add-a-package) に従って Github でテンプレートをシェアすれば、プロジェクトエディターに表示されるようにすることができます。






