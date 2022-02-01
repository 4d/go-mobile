---
id: labels-and-icons
title: ラベル & アイコン
---

このページではモバイルアプリ内でのテーブル、フィールドおよびリレーションの表示プロパティを定義することができます。

![Labels & Icons section](img/Labels-&-icons-section-4D-for-iOS.png)

初期状態ではデフォルトのプロパティが設定されています。 プロパティを変更するためには、変更する要素を選択し、適切なカラム内に新しい値を入力してください。

テーブル、フィールド、リレーションに対して同じプロパティを設定することができます。 また、それに加えて、フィールド/リレーションに対してフォーマットを定義することもできます。

これらの要素は生成されたアプリ内のテンプレートによって、詳細フォームおよびリストフォーム内で表示されます。


## アイコン

テンプレートにアイコンが必要になった時にモバイルアプリでフィールド/要素に対して適用されるアイコンを設定します。

:::info

リレーションフィールドに対しては、アイコンは**リレーション** ボタンの左に表示され、このボタンを押すとリレートされたテーブルを開くことができます。

:::

4Dモバイルエディターでは、あらゆる用途に応えるため、大量のアイコンのライブラリーを提供しています。 このライブラリーには、ビジネス、金融、教育、健康、産業、不動産、サービスなどの用途のアイコンが用意されています。 アイコンを選択するためには、**icon** ボタンをクリックし、表示されたリストからアイコンを選んでください:

![Icons select](img/icon-library.png)

:::info

統一性を持たせるため、フィールドに対して少なくとも1つのアイコンが定義されている場合、空のフィールドに対して**デフォルトアイコン** が生成されます。

:::

アプリケーション内でアイコンを表示したくない場合には、アイコンエリアを空にしたままにして下さい。


### カスタムのアイコンを追加する

独自のアイコンをライブラリーに追加し、プロジェクト内で選択できるようにすることができます。 使用するアイコンフォーマットおよびサイズに制約はありません(ただしフォーマットは透明部を保持するためにSVGまたはPNGが推奨されます)。 プロジェクトエディターでの見栄えのために、カスタムのアイコンは色付きのバージョンを用意しておくことが強く推奨されます。

例えば、カスタムのアイコンとして使用できるものは以下のようなものがあります:

<div className="center-button">
<a
  className="button button--primary"
  href="https://github.com/4d-go-mobile/tutorial-CustomIcons/releases/latest/download/tutorial-CustomIcons.zip">
  カスタムアイコンをダウンロードする
</a>
</div>

プロジェクトにカスタムのアイコンを含めるためには、以下のようにします:

1. 以下の場所に`icons` フォルダを作成します。

```
<my4DProjetFolder>/Resources/Mobile/medias
```

:::note

`medias` フォルダを作成する必要もあるかもしれません。

:::

2. `icons` フォルダ内にカスタマイズしたアイコンをドラッグドロップします。

![Icons select2](img/mobile-folder-custom-icons.png)

これで追加したアイコンがプロジェクトにおいて選択できるようになりました。標準のアイコンのあとに表示されます。




## 短いラベル/長いラベル

公開されているテーブル、フィールド、リレーションに対しては、カスタムのラベルの定義することができます。 これらのラベルは、テンプレート内の利用可能な場所に応じて、場所を最適化してタブバーが混雑するのを避けるために自動的に使用されます。

:::info

リレーションフィールドに対しては、ラベルは**リレーション** ボタンの左に表示され、このボタンを押すとリレートされたテーブルを開くことができます。

:::

- 短いラベルには10文字以下のラベルをつけることができます。
- 長いラベルには25文字までのラベルをつけることができます。
- ここでは、ストラクチャー名では使用できない、"/" や "@"、半角スペースなどの特殊文字も使用することができます。

デフォルトでは、モバイルエディターはストラクチャー内で定義されているテーブルメイトフィールド名をアプリ内で使用し、短いラベルと長いラベルの両方において同じ文字列が使用されます。


## フォーマット

このプロパティではアプリ内でのデータ表示のフォーマットを設定することができます。 フィールドの行をクリックすると、フォーマットメニューが表示されます。

![formats](img/formats-menu.png)

選択可能なビルトインフォーマットは、フィールドタイプによって決まります:

| フィールドの型            | フォーマット                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **テキスト**           | テキスト                                                                                                                   |
| **日付**             | Date, Short date, Long date, Full date                                                                                 |
| **時間**             | Time, Short time, Duration, Integer number                                                                             |
| **Image**          | Image                                                                                                                  |
| **ブール**            | "No" or "Yes", "False" or "True"                                                                                       |
| **Integer number** | Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency €, Currency ¥, Spell Out |


### Adding custom formats

The mobile editor allows you to add customized formats (called "formatters") in your projects. For example, you can define custom formats for emails, invoice numbers, etc.

To add custom formats to your mobile project, you can:

- Download and install customized formats from the [**go-mobile formatters github repository**](https://4d-for-ios.github.io/gallery/#/type/formatter/picker/0).

- Create your own formats.

:::tip tutorial

Visit [**this tutorial**](../tutorials/data-formatter/create-data-formatter) to know how to define a custom format

:::

To install a custom formatter, you just need to drop the formatter folder into the `/Resources/Mobile/formatters` of the 4D project folder. Once installed, a custom format can be selected from the Formats menu, just like a built-in formats.


## Title

This property is only available for Relation fields. The defined title will be displayed on top of the destination view when using a relation.

Use a pair of `%` characters to include the value of the related field in the title. For example, if you want that the title of the `Employee.employer` related field displays the name of the related `employee` field, you can write:

```
%Name%'s employer
```

:::tip tutorial

A [**tutorial**](../tutorials/relations/one-to-many-title-definition) is available to guide you through the Title definition process.

:::
