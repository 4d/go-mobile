---
id: use-data-formatter
title: Use formatters
---

> **OBJECTIVES**
> 
> Use built-in formatters.


In this tutorial, we'll show you how to apply built-in [formatters](../../project-definition/labels-and-icons.md#formatters) to your fields.

## スタータープロジェクトをダウンロード

Let's get started by downloading the Starter project:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip">ダウンロード</a>
</div>

## モバイルプロジェクトを開く

Go to **Labels & Icons** in Sections, you'll see that a Formats column is available in the Field Properties area:

![データフォーマッターラベルアイコン](img/data-formatter-labels-icons.png)

From here, you can select specific formats depending on your needs. You can choose between [multiple built-in formats](../../project-definition/labels-and-icons.md#selecting-a-formatter).

Available Credit フィールドを、通貨として定義してみましょう:

![利用可能なクレジットの通貨](img/available-credit-currency.png)

他のフィールドに対しても、同じように処理してみましょう:

* Set Current Balance as a **Currency $**
* Set Percent Used as a **Percentage**
* Set Credit Limit as a **No or Yes**
* Set Credit Date as a **Short Date**

![フィールドフォーマッターを選択](img/select-field-formatters.png)

## プロジェクトをビルドして実行

こちらが、選択したNumbers詳細フォームとTasksリストフォームの、iOSアプリ内での最終的な結果です。

![でータフォーマッターの結果/iPhone](img/result-data-formatter-iphone.png)

以上です！ Your fields are well formatted according to its defined type in **Labels & Icons**.