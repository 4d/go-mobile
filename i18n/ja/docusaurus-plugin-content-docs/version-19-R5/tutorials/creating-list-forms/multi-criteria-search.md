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

Next, you can go to the project editor and drop several fields into the list form search area.

![Multi-criteria search in the project editor](img/multi-criteria-search-forms-section.png)

Click on the search field's delete button to modifiy the associated field list.

A menu will appear to allow you to **remove specific fields** or **remove all fields**, depending on which criteria you want to base your search(es) on.

![Modify Multi-criteria search fields](img/multi-criteria-search-forms-section-remove-fields.png)

おつかれさまでした！ You can now base your search(es) on multiple fields in your mobile app!
