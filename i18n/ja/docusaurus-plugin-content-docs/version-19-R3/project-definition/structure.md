---
id: structure
title: ストラクチャー
---

4Dデータベース内で RESTリソースとして公開されているすべてのテーブルとフィールドがこのページに表示されます。これには (N対1 および 1対N リレーションに基づいた) リレーション属性も含まれます。 In fact, the page displays a view similar to [ORDA's datastore](https://developer.4d.com/docs/ORDA/overview.html).

![ストラクチャーセクション](img/Structure-section-4D-for-iOS.png)


このページでは、公開するテーブルおよびフィールドを選択することにより、モバイルデバイス用に複製するストラクチャーのサブセットを定義することができます。

- 公開テーブルはアプリのタブとして自動的に追加されます。
- 公開されたスカラーフィールドは [リストフォームおよび詳細フォーム](https://developer.4d.com/go-mobile/docs/project-definition/forms/) を定義する際に利用できます。
- 公開されたリレーションフィールド (N対1 および 1対N リレーション) も、リストフォームおよび詳細フォームを定義する際に利用でき、リレーションボタンといった追加のナビゲーション機能もついてきます。


:::note

以下のテーブルとフィールドはこのページには表示されません:

- tables and fields that do not comply with [ORDA rules](https://developer.4d.com/docs/ORDA/dsmapping.html#structure-mapping).
- "`__`" (ダブルアンダースコア) で始まる名前を持つテーブルやフィールド。

:::

## 公開するテーブルとフィールドを選択する

テーブルに属するフィールドが 1つ以上公開されると、そのテーブルも公開されます。 公開されたテーブルは **太字** で表示されます。

公開するフィールドを選択するには、テーブル名をクリックし、右のリストでフィールドをクリックします。 または:

- **スペースバー** を押すと、フィールドを選択/選択解除できます。
- **Ctrl+クリック** でフィールドを全選択できます。
- フィールドリストの **公開** および **全て公開** ローカルメニューを使用できます。


### リストのフィルタリング

リストにフォーカスがある場合、検索エリアとローカルメニューを使用して、内容を絞り込むことができます。

![フィルター](img/filter.png)

- **検索** エリア: テーブル名またはフィールド名を検索する文字列を入力します。
- **テーブル名でソート**/**フィールド名でソート**: 名前順でリストをソートします。 デフォルトでは、リストは作成日順にソートされています。
- **公開テーブルのみ**/**公開フィールドのみ**: 選択されている (公開された) テーブルまたはフィールドのみを表示します。


## サポートされるフィールド型

モバイルエディターは、モバイルアプリに使用できるフィールドの一覧を、その種類に応じて自動的に表示します:

![フィールド](img/fields.png)

- All [4D scalar field types](https://developer.4d.com/docs/Concepts/data-types.html) except [BLOB](https://developer.4d.com/docs/Concepts/blob.html) and [Object](https://developer.4d.com/docs/Concepts/object.html).
- リレーション属性 (N対1 および 1対N) はサポートされており、フィールドと同様に選択することができます。 リレーション属性は専用のアイコンを持ちます:

Ｎ対１リレーションアイコン:  ![リレーション1](img/manyto1.png)

１対Ｎリレーションアイコン: ![リレーションN](img/1tomany.png)

:::info

The names are based upon the relation names in the 4D Structure editor, see the [ORDA Structure mapping page](https://developer.4d.com/docs/ORDA/dsmapping.html#structure-mapping).

:::


## リレーションの使用

:::info 4D for Android

4D for Android では、N対1リレーションのみ利用可能です。

:::

### 1対Nリレーション

**1対Nリレーション** をプロジェクトに含めると、アプリの新しいページにリレートフィールドのリストを表示できます。

そのためには:

* ターゲットテーブル (N側のテーブル) のフィールドを 1つ以上公開します
* ソーステーブル (1側のテーブル) のリレーション属性を公開します

![詳細フォームにリレーションをドロップ](img/Structure-1-to-N-relations-4D-for-iOS.png)

公開されたリレートフィールドは、他のフィールドと同様に使用できます。 つまり、次のことが可能です:

* [ラベル＆アイコン](labels-and-icons.md) ページにおいてリレーションプロパティを定義できます。
* [フォーム](forms.md) ページで、詳細フォームに 1対Nリレーションをドロップし、詳細フォームとリレートテーブル間にリンクを作成できます。 すると、リレートビューに直接行くためのリレーションボタンが、詳細フォームに自動的に作成されます。

:::tip Tutorial

モバイルプロジェクトに 1対Nリレーションを統合する詳細な例については、[**1対Nリレーションのチュートリアル**](../tutorials/relations/one-to-many-relations) を参照ください。

:::


### N対1リレーション

**N対1リレーション** は、アプリ作成プロセスにおいて他のフィールドと同様に使用することができます。 フィールドリストで N対1リレーションを選択すると、アプリで公開するフィールドをリレートテーブルから選択できます:

![リレートテーブルの公開](img/manyto1-tip.png)

リレーション名をクリックし、フィールドを選択するだけです:

![リレートテーブルの公開](img/manyto1-select.png)

デフォルトで、リレートテーブルのすべての利用可能フィールドが公開されます。

:::tip Tutorial

モバイルプロジェクトに N対1リレーションを統合する詳細な例については、[**N対1リレーションのチュートリアル**](../tutorials/relations/many-to-one-relations) を参照ください。

:::


### N対Nリレーション

ストラクチャーページを使用して、親の N対1リレーションを介して、子の N対1リレーションおよび 1対Nリレーションを公開することができます。 つまり、アプリ内で N対Nリレーションを表示したり、リストフォームから別のリストフォームに直接移動したりすることができます。


:::tip Tutorial

モバイルプロジェクトに N対Nリレーションを統合する詳細な例については、[**リレーション操作**](../tutorials/relations/relation-interactions) を参照ください。

:::

## インクリメンタルリロード (増分更新)

### ストラクチャー編集を許可する

最高のユーザーエクスペリエンスのため、4D for iOS と 4D for Androidは、データの増分更新用の自動機能を実装しています。 つまり、新規・変更・削除されたデータベースのデータのみがアプリにて更新されます。 この最適化は、読み込み時間を大幅に短縮します。

この最適化を可能にするため、4D for iOS と 4D for Android は以下の構造的な要素を必要とします:

* 削除されたレコードを保存するための `__DeletedRecords` テーブル
* モバイルアプリケーションの各公開テーブルの変更スタンプを保存する `__GlobalStamp` フィールド

これらの必要な要素の追加は、4Dモバイルエディターに任せることができます。これには、**4Dが最適化されたモバイルデータ更新のために必要なストラクチャー編集を行うことを許可する** オプションを選択します。

:::note

これらの最適化は、ローカルおよびサーバーデータベースの両方で必要です。

:::

### Pull-to-refresh

モバイルアプリ側では、アプリを起動する度、またアプリが前面に来る度にデータが更新され、常に最新のデータを取得することができます。

通常の使用では、任意のリストフォームを下にスワイプするだけでデータを更新できます。

iPhone の設定から、アプリのデータをリセットしたり、アプリに関する情報を探したりすることができます。

:::note

データベース側で重要なメンテナンス作業 (レコードヘッダーによる修復 / 復元 / 圧縮) をおこなった場合には、モバイルアプリ側でフルリロードが必要です。 この場合は、モバイルアプリの利用者に管理者が通知するものとします。

:::

## 計算属性

Android でも iOS でも、プロジェクトエディターから設定をすれば、生成されたアプリ内で計算属性を表示することができます。

[Computed attributes](https://developer.4d.com/docs/ORDA/ordaClasses.html#computed-attributes) are the result of several fields combined into one field. この計算属性は、モバイルアプリ作成時に他のフィールドと同様に使用できます。つまり、ストラクチャーセクションで確認し、公開できるということです。 たとえば、住所における通りの番号と通りの名称、あるいは氏名における名字と名前のように 2つに分かれた属性を使う代わりに、これらを 1つの属性に纏めて "fullAddress" や "fullName" などと名づけることができます。

やり方は、とても簡単です。

### 4D側の準備

In your code, specify the attributes you want to use and the computed attribute you want to get, using the [*Class extends*](https://developer.4d.com/docs/Concepts/classes.html#class-extends-classname) and [exposed Function](https://developer.4d.com/docs/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions) syntax, as follows:

```4d 
Class extends Entity

exposed Function get fullName->$fullName : Text
    $fullName:=This.FirstName+" "+This.LastName

exposed Function set fullName($fullName : Text)
$splitName:=Split string($fullName; "/")
If ($splitName.length=2)
    This.FirstName:=$splitName[0]
    This.LastName:=$splitName[1]
Else 
    // ERROR    
End if

exposed Function get fullAddress->$fullAddress : Text
    $fullAddress:=This.StreetNumber+" "+This.Street+" - "+This.Location

exposed Function set fullAddress($fullAddress : Text)
$splitAddress:=Split string($fullAddress; "/")
If ($splitAddress.length=3)
    This.StreetNumber:=$splitAddress[0]
    This.Street:=$splitAddress[1]
    This.Location:=$splitAddress[2]
Else 
    // ERROR    
End if
 ```

:::note

- 計算属性は、エンティティ属性が変更されたときのみ取得されます。
- たとえば、"StudentEntity" データクラスで、"currentTime" 計算属性が **Current Time** を返し、モバイルプロジェクトでは "Student" リストフォームまたは詳細フォームにおいて使用される場合を考えます。 生成されたモバイルアプリでは、ある "Student Entity" の "currentTime" フィールドは、同 "Student Entity" の属性のいずれかが変更されるまで更新されません。 :::

### プロジェクトエディター側の設定

4D側でコードが書かれると、プロジェクトエディターでは計算属性が利用可能になり、他のフィールドと同様に公開して使用できるようになります:


**ストラクチャー** セクションにおいて:

`exposed` の付いた計算属性は、データクラスの属性リストに表示されます。

![ストラクチャーセクション](img/Structure.png)

**ラベル & アイコン** セクションにおいて (アイコン / 短いラベル / 長いラベル / フォーマット):

![ラベル & アイコンセクション](img/labels-and-icons.png)

**フォーム** セクションにおいて:

データモデルの計算属性は、通常のフィールドと同様に、フォームセクション (リストフォームと詳細フォーム) のフィールドリストで利用可能です。 これらはデータストアのストレージ属性と同じように動作します。

![フォームセクション](img/Forms.png)

**データ** セクションでは、フィルタークエリボックスの "フィールド" ボタンにリンクされているリストに計算属性が表示されます。

:::note 4D for iOS

- 計算属性は、ソートアクションで使用することができます。
- セッターのない計算属性 (読み取り専用) は、追加または編集アクションで使用できません。
- プリセットの追加または編集アクションが作成された場合 (セッターが利用可能で、4D がそれを許可している場合)、フィールドにリンクされている計算属性のパラメーターは利用可能です。

:::note 4D for iOS

### モバイルアプリ側

生成されたモバイルアプリケーション (iOS または Android) では、単一属性と計算属性の両方が表示されます。

![最終アプリ](img/final-app.png)