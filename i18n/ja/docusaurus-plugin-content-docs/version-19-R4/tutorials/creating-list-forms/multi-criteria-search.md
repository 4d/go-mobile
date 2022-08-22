---
id: multi-criteria-search
title: 複数条件検索
---


このセクションでは、独自のテンプレートで [複数条件検索](../../project-definition/forms#複数条件検索) を有効にする方法を説明します。

:::info

モバイルエディターに収録されているテンプレートの検索エリアは、すでに複数フィールドのクエリをサポートしています。

:::

## テンプレートSVGファイル

自分で作成したテンプレートを複数フィールド検索に対応させるためには、template.svg ファイルを下記のように書き換えます。

```xml
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

上の行を以下のように書き換えます:

```xml
<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

これだけです！ 検索エリアにクラス名を追加すれば、複数フィールド検索がサポートされます。

## プロジェクトエディター

プロジェクトエディターを開き、リストフォームの検索エリアに複数のフィールドをドロップして追加します。

![プロジェクトエディター内の複数条件検索](img/multi-criteria-search-forms-section.png)

設定した検索フィールドを変更するには、検索エリアの削除ボタンをクリックします。

必要に応じて **特定のフィールド** または **すべてのフィールド** を検索エリアから取り除くことができます。

![複数条件検索フィールドを編集する](img/multi-criteria-search-forms-section-remove-fields.png)

おつかれさまでした！ 複数フィールドで検索するモバイルアプリが作成できるようになりました！
