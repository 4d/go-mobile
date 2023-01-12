---
id: relation-interactions
title: リレーション操作
---

4Dモバイルプロジェクトでは、アプリに便利な操作性を追加することができます。 たとえば、1対N および N対1 リレーションを [N対1リレーション](many-to-one-relations.md) から公開できます。

# プロジェクトエディター

## ストラクチャーセクション

ストラクチャーセクションでは、N対1リレーションを簡単に公開できます。 これにより、たとえば N対Nリレーションを iOSアプリに表示することができます。

![ストラクチャーセクションでリレーションを公開](img/structure-section.gif)

## ラベル & アイコンセクション

ラベル＆アイコンセクションでは、リレーションボタンのラベルをカスタマイズできます。

### レコード数を取得する

1対Nリレーションをクリックすると表示されるレコードの数を表示するための便利な機能もあります。

これには、1対Nリレーションのラベルに、%length% を追加するだけです。

![lengthパラメーター](img/icons-labels-length-parameter-relation.png)

## フォームセクション

### 任意の場所にリレーションを追加する

リストフォームや詳細フォームに任意のリレーションを追加し、これまで以上にダイナミックなアプリを作成することができます。

![リストと詳細フォームにリレーションをドロップ](img/drop-relation-list-detail-form.gif)

### フィールドをクリックできるようにする

フォームセクションでは、リストフォームと詳細フォームのフィールドにリレーションを設定することで、フィールドをクリック可能にできます。

![クリック可能なフィールド](img/clickable-fields-relation.gif)


# 生成されるアプリ

これらの改善により、アプリに操作性が追加されます:

* 詳細フォームを間に挟むことなく、リストフォームから他のリストフォームにアクセスできます。

この例では、Customers リストフォームで 1対Nリレーションをクリックし、Orders リストにアクセスしています。

![N対Nリレーション](img/many-to-many-relations.gif)

* リストフォームにリレーションを表示し、関連する詳細フォームにアクセスできます。

この例では、Orders リストおよび、Orders 詳細フォームから Customer 詳細フォームアクセスできます。

![N対1リレーション](img/many-to-one-relations.gif)

* 1対Nリレーションを追加してフィールドをクリックできるようにし、%length% を使ってレコード数を表示できます。

この例では、Category リストフォームの 1対Nリレーションごとに商品の数が表示されます。

![1対Nのレコード数](img/length-for-one-to-many.png)


