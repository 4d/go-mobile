---
id: structure
title: ストラクチャー
---

4Dデータベース内で RESTリソースとして公開されているすべてのテーブルとフィールドがこのページに表示されます。これには (N対1 および 1対N リレーションに基づいた) リレーション属性も含まれます。 実際の表示は、[ORDA のデータストア](https://developer.4d.com/docs/ja/ORDA/overview.html) にとても近いものが表示されます。

![ストラクチャセクション](img/Structure-section-4D-for-iOS.png)


このページでは、公開するテーブルおよびフィールドを選択することにより、モバイルデバイス用に複製するストラクチャーのサブセットを定義することができます。

- 公開テーブルはアプリのタブとして自動的に追加されます。
- 公開されたスカラーフィールドは[リストフォームおよび詳細フォーム](https://developer.4d.com/go-mobile/docs/project-definition/forms/) を定義する際に利用できます。
- 公開されたリレーションフィールド (N対1 および 1対N リレーション) も、[リストフォームおよび詳細フォーム](https://developer.4d.com/go-mobile/docs/project-definition/forms/) を定義する際に利用でき、リレーションボタンといった追加のナビゲーション機能もついてきます。


:::note

以下のテーブルとフィールドはこのページには表示されません:

- [ORDA ルール](https://developer.4d.com/docs/ja/ORDA/dsmapping.html#%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0) に則っていないテーブルやフィールド。
- "`__`" (ダブルアンダースコア) で始まる名前を持つテーブルやフィールド。

:::

:::note

時間によって値が変化していく計算属性(同じデータクラスの他の属性にのみ依存している計算属性) のみがモバイルアプリ側で更新されます。

:::

## 公開するテーブルとフィールドを選択する

テーブルに属するフィールドが 1つ以上公開されると、そのテーブルも公開されます。 公開されたテーブルは **太字** で表示されます。

公開するフィールドを選択するには、テーブル名をクリックし、右のリストでフィールドをクリックします。 または:

- **スペースバー** を押すと、フィールドを選択/選択解除できます。
- **Ctrl+クリック** でフィールドを全選択できます。
- フィールドリストの **公開** および **全て公開** ローカルメニューを使用できます。


### リストのフィルタリング

リストにフォーカスがある場合、検索エリアとローカルメニューを使用して、内容を絞り込むことができます。

![Filter](img/filter.png)

- **検索** エリア: テーブル名またはフィールド名を検索する文字列を入力します。
- **テーブル名でソート**/**フィールド名でソート**: 名前順でリストをソートします。 デフォルトでは、リストは作成日順にソートされています。
- **公開テーブルのみ**/**公開フィールドのみ**: 選択されている (公開された) テーブルまたはフィールドのみを表示します。


## サポートされるフィールド型

モバイルエディターは、モバイルアプリに使用できるフィールドの一覧を、その種類に応じて自動的に表示します:

![Fields](img/fields.png)

- 全ての[スカラー型の4D フィールド](https://developer.4d.com/docs/ja/Concepts/data-types.html) がサポートされます(ただし [BLOB](https://developer.4d.com/docs/en/Concepts/blob.html) 型を除く)
- [オブジェクトフィールド](https://doc4d.github.io/go-mobile/docs/next/project-definition/structure/#object-attributes)
- [計算属性](#computed-attributes)
- **スカラー値** を返す [エイリアス属性](#エイリアス属性) (*イタリック* で表示されます)。
- リレーション属性 (N対1 および 1対N) はサポートされており、フィールドと同様に選択することができます。 リレーション属性は専用のアイコンを持ちます:
    - Ｎ対１リレーションアイコン:  ![relation1](img/manyto1.png)
    - １対Ｎリレーションアイコン: ![relationN](img/1tomany.png)

:::info

リレーション属性の名前は 4Dストラクチャーエディターにおけるリレーション名に基づいています。[ORDA ストラクチャーマッピング](http://developer.4d.com/docs/ja/ORDA/dsmapping.html#%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0) のページを参照ください。

:::


## リレーションの使用

### 1対Nリレーション

**1対Nリレーション** をプロジェクトに含めると、アプリの新しいページにリレートフィールドのリストを表示できます。

そのためには:

* ターゲットテーブル (N側のテーブル) のフィールドを 1つ以上公開します
* ソーステーブル (1側のテーブル) のリレーション属性を公開します

![Drop relation in detail form](img/Structure-1-to-N-relations-4D-for-iOS.png)

公開されたリレートフィールドは、他のフィールドと同様に使用できます。 つまり、次のことが可能です:

* [ラベル＆アイコン](labels-and-icons.md) ページにおいてリレーションプロパティを定義できます。
* [フォーム](forms.md) ページで、詳細フォームに 1対Nリレーションをドロップし、詳細フォームとリレートテーブル間にリンクを作成できます。 すると、リレートビューに直接行くためのリレーションボタンが、詳細フォームに自動的に作成されます。

:::tip Tutorial

モバイルプロジェクトに 1対Nリレーションを統合する詳細な例については、[**1対Nリレーションのチュートリアル**](../tutorials/relations/one-to-many-relations) を参照ください。

:::


### N対1リレーション

**N対1リレーション** は、アプリ作成プロセスにおいて他のフィールドと同様に使用することができます。 フィールドリストで N対1リレーションを選択すると、アプリで公開するフィールドをリレートテーブルから選択できます:

![Publish related tables](img/manyto1-tip.png)

リレーション名をクリックし、フィールドを選択するだけです:

![Publish related tables](img/manyto1-select.png)

デフォルトで、リレートテーブルのすべての利用可能フィールドが公開されます。

:::tip Tutorial

モバイルプロジェクトに N対1リレーションを統合する詳細な例については、[**N対1リレーションのチュートリアル**](../tutorials/relations/many-to-one-relations) を参照ください。

:::


### N対Nリレーション

ストラクチャーページを使用して、親の N対1リレーションを介して、子の N対1リレーションおよび 1対Nリレーションを公開することができます。 つまり、アプリ内で N対Nリレーションを表示したり、リストフォームから別のリストフォームに直接移動したりすることができます。


:::tip Tutorial

モバイルプロジェクトに N対Nリレーションを統合する詳細な例については、[**リレーション操作**](../tutorials/relations/relation-interactions) を参照ください。

:::

## 計算属性

Android でも iOS でも、プロジェクトエディターから設定をすれば、生成されたアプリ内で [**計算属性**](http://developer.4d.com/docs/ja/ORDA/ordaClasses.html#%E8%A8%88%E7%AE%97%E5%B1%9E%E6%80%A7-1) を表示できます。 計算属性とは、複数のフィールドを一つに複合した結果です。 この計算属性は、モバイルアプリ作成時に他のフィールドと同様に使用できます。つまり、ストラクチャーセクションで確認し、公開できるということです。

たとえば、住所における通りの番号と通りの名称、あるいは氏名における名字と名前のように 2つに分かれた属性を使う代わりに、これらを 1つの属性に纏めて "fullAddress" や "fullName" などと名づけることができます。

やり方は、とても簡単です。

### 4D側の準備

[*Class extends*](https://developer.4d.com/docs/ja/Concepts/classes.html#class-extends-classname) および [exposed Function](https://developer.4d.com/docs/ja/ORDA/ordaClasses.html#%E5%85%AC%E9%96%8Bvs%E9%9D%9E%E5%85%AC%E9%96%8B%E9%96%A2%E6%95%B0) のシンタックスを使って、使用する属性と取得する計算属性を以下のようにコード内で指定します:

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

### プロジェクトエディター側の設定

4D側でコードが書かれると、プロジェクトエディターでは計算属性が利用可能になり、他のフィールドと同様に公開して使用できるようになります:


**ストラクチャー** セクションにおいて:

`exposed` の付いた計算属性は、データクラスの属性リストに表示されます。

![ストラクチャセクション](img/Structure.png)

**ラベル & アイコン** セクションにおいて (アイコン / 短いラベル / 長いラベル / フォーマット):

![Labels&icons section](img/labels-and-icons.png)

**フォーム** セクションにおいて:

The computed attributes present in the data model are, like the fields, available in the list of fields of the Forms panel (list and detail). They behave in the same way as the storage attributes of the datastore.

![Forms section](img/Forms.png)

In the **Data** panel, computed attributes are displayed in the list linked to the "Fields" button of the query filter box.

:::note 4D for iOS

- Computed attributes can be used with Sort actions.
- A computed attribute without a setter (readOnly) is not available for an Add or Edit action.
- When Add or Edit presets actions are created (if the setter is available and if 4D allows it), computed attributes parameters shall be available when linked to a field.

:::note 4D for iOS

### Mobile app side

In the generated mobile application, on iOS or Android, both single attributes and computed attributes are displayed.

![final app](img/final-app.png)


## エイリアス属性

On Android or iOS, you can use **scalar** [**alias attributes**](https://developer.4d.com/docs/en/ORDA/ordaClasses.html#alias-attributes) in your mobile app. An alias attribute is built above another attribute of the data model, named *target* attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute.

Alias attibutes must be **exposed** to be available to the editor. They are displayed in *italics*.

In mobile projects, only **scalar** alias attributes are supported, which means that the [kind](https://developer.4d.com/docs/en/API/DataClassAttributeClass.html#kind) of the last element of the target attribute path must be "storage". Other kinds are not supported.


Scalar alias attributes can be:

- [selected and published](#selecting-tables-and-fields-to-publish) like standard fields in the structure editor,
- used to [filter data](../project-definition/data#filter-queries),
- linked to fields as [parameters](../project-definition/actions#add-parameters-to-your-action) for **add** and **edit** preset actions,
- used as any other fields in the [Label & Icons section](../project-definition/labels-and-icons),
- dropped and displayed in [forms](../project-definition/forms).

:::caution

Scalar alias attributes **cannot be used** as [parameters for sort actions](../project-definition/actions#sort-action).

:::


## オブジェクト属性

**ストラクチャー** セクションでは、全ての[型](https://developer.4d.com/go-mobile/docs/project-definition/structure/#supported-field-types) の属性(テキスト、日付、時間、整数)をモバイルプロジェクト内で選択、使用、表示することができます。これには**[オブジェクト属性](https://developer.4d.com/docs/ja/Concepts/object.html)** (JSON フォーマット) も含まれます。 フィールドリストの中では、オブジェクト属性は**{}** アイコンで表示されます。

![ストラクチャセクション](img/object-attributes-structure.png)

オブジェクト属性は、プロジェクトエディターの他のセクション(データ、ラベル& アイコン、フォーム、など。ただしアクションセクションは除く) での他のフィールドと同様に使用することができます。

**ラベル&アイコン** セクションでは、オブジェクト属性を表示するのに2つのフォーマットが利用できます:

- **人間が読める形式** (YAML): デフォルトのフォーマットで、モバイルアプリ内では人間が読める形式(Human readable) の構造化されたデータとして表示されます。
- **JSON 整形フォーマット**: モバイルアプリではインデント付けされたJSON 形式として表示するフォーマットです。

![ラベル/アイコンセクション](img/object-attributes-labels-and-icons.png)

生成されたアプリ内での表示結果は以下のようになります:

![ストラクチャセクション](img/object-attributes-rendering.png)

### フィルタークエリ

オブジェクト属性の[フィルタークエリ](https://developer.4d.com/go-mobile/docs/project-definition/data#filter-queries) を使用することで、フィルターされたデータを返して表示させることができます。 これをするためには、**[データ](https://developer.4d.com/go-mobile/docs/project-definition/data)** セクションのフィルタークエリに属性とプロパティを挿入します。

例えば、顧客用のテーブル内に、以下のようなキー/値の複数のオブジェクトを格納したオブジェクト型属性のアドレスを考えます:


```4d
{
    $Obj:=New object
    $Obj.name:="4D SAS"
    $Obj.address1:="66 rue de Sartrouville"
    $Obj.address2:="Parc les Erables, bâtiment 4"
    $Obj.zipCode:="78230"
    $Obj.city:="Le Pecq"
    $Obj.country:="France"
    $Obj.phoneNumber:={
        "OfficePhone":"+33 1 30 53 92 00"
        "HomePhone":"+33 1 30 53 92 00"
    }
    $Obj.email:=[
        "john@test.com"
        "john@4d.com"
    ]
    $Obj.website:="fr.4d.com"
}
```


#### シンプルなオブジェクト値でフィルターする

オブジェクトを使用して、例えば「フランスにいるクライアントのみを表示」のように表示されるデータをフィルターしたい場合、国名でクエリをフィルターし、`France` の値を持つレコードだけを取得するようにする必要があります。 そのためには、フィルタークエリフィールドに以下のシンタックスを挿入します:

```4d

Address.country = "France"

```
#### コレクションの値でフィルターする

コレクションの要素、例えばクライアントのコレクションに格納された特定のEメールなどを使用してフィルターされたデータのみを表示したい場合、Eメールでクエリをフィルターし、`john@4d.com` の値をコレクション内に持つレコードだけを取得するようにする必要があります。 そのためには、フィルタークエリフィールドに以下のシンタックスを挿入します:

```4d

Address.email[] = "john@4d.com"

```


## Incremental reload

### Allow structure adjustments

For the best user experience, 4D for iOS and 4D for Android implement an automatic feature for the incremental reload of data. It means that only new, modified or deleted data from the database will be updated to the app. This optimization enhances drastically loading time.

To enable this optimization, 4D for iOS and 4D for Android need the following structure elements:

* A `__DeletedRecords` table to store deleted records
* and `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

You can let the 4D mobile editor do all the work for you and add the necessary structure elements: just select **Allow 4D to make necessary structure adjustments for an optimized mobile data update** option.

:::note

These optimizations are required for both local and server databases.

:::

### 下にプルすることで更新する

On the mobile app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

iPhoneの設定から、アプリのデータをリセットし、アプリに関する情報を探すことができます。

:::note

When an important maintenance operation is performed on the database side (Recover by tag / Restoration / Compacting) a Full reload is necessary on the mobile app. In this case, the admin shall notify mobile app users.

::: 







