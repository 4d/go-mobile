---
id: define-filter-query
title: フィルタークエリの定義
---

はじめに、スタータープロジェクトをそのままビルドして実行してみましょう。ログイン画面には営業担当者のメールアドレス "michelle.simpson@mail.com" を入力します。**営業担当者全員の商談がステータスに関係なく** (*済 (Closed)* と *進行中 (In Progress)* の両方が) 表示されることに注目してください。

![クエリフィルターが設定されていないアプリ](img/ios-app-without-queries.png)

前述のように、モバイルアプリにメールアドレスでログインすれば、自分が担当している商談でステータスが *進行中* のものだけを表示するよう、データをフィルターしたいと考えています。 下記の要領で実現することができます。

* **データ** セクションに移動します。
* **フィルタークエリ** 欄をクリックすると、**フィールド・比較演算子・演算子ボタン** が表示されます。
* **フィールド** ボタンをクリックし、**Status** フィールドを選択します。
* **比較演算子** ボタンをクリックし、**等しい** を選択します。
* *進行中* の商談を表示したいので、**&apos;In progress&apos;**と入力します。
* **検証** ボタンをクリックし、フィルターを確定します。これを忘れてしまうと、アプリがビルドできません。

下図のようになっていることを確認してください。

![CRM（顧客管理）データベース](img/filterquery.png)

> **注記**
> 
> * A **filter** icon is displayed at the right of each table when a basic filter is applied to it.
> * For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the **Embed data into the built application** checkbox.
> * Size will be calculated at the first build for you to visualize the **size of your data**.

If you build your app and enter "michelle.simpson@mail.com" as the login email, you'll see that all contracts *In Progress* are displayed in the Simulator!

![単純なクエリフィルターが設定されているアプリ](img/restrited-queries-basic-query.png)

残念！ What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query!


