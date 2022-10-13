---
id: use-data-formatter
title: データフォーマッターを使用する
---

> **目標**
> 
> ビルトインのデータフォーマッターを使用します。


このチュートリアルでは、ビルトインの [フォーマッター](../../project-definition/labels-and-icons.md#フォーマット) をフィールドに適用する方法について説明します。

## スタータープロジェクトをダウンロード

スタータープロジェクトをダウンロードしてください:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip">ダウンロード</a>
</div>

## モバイルプロジェクトを開く

**ラベル & アイコン** セクションでは、フィールドプロパティエリアにおいて、フォーマッターカラムが提供されています:

![データフォーマッターラベルアイコン](img/data-formatter-labels-icons.png)

ここから、必要に応じて適切なフォーマットを選択することができます。 [複数のビルトインフォーマット](../../project-definition/labels-and-icons.md#フォーマッターを選択する) から選択することができます。

Available Credit フィールドを、通貨として定義してみましょう:

![利用可能なクレジットの通貨](img/available-credit-currency.png)

他のフィールドに対しても、同じように処理してみましょう:

* Current Balance を **通貨 $** に設定します
* Percent Used を **パーセント** に設定します
* Credit Limit を **"いいえ" または "はい"** に設定します
* Credit Date を **短い日付** に設定します

![フィールドフォーマッターを選択](img/select-field-formatters.png)

## プロジェクトをビルドして実行

こちらが、Numbersテーブルについて選択されたリストフォームと詳細フォームの iOSアプリでの最終的な結果です。

![iPhoneでのデータフォーマッターの結果](img/result-data-formatter-iphone.png)

以上です！ **ラベル& アイコン** で定義されたとおりに、フィールドがフォーマットされているのが確認できます。