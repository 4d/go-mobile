---
id: filter-query-introduction
title: フィルタークエリ
---

このチュートリアルでは、**フィルタークエリ** を作成し、モバイルアプリに特定の情報だけが表示されるようにします。

目標は、営業担当者がアプリにログインすれば、担当顧客のうち商談ステータスが *進行中* の案件だけが表示されるようにすることです。

はじめに、*進行中 (In Progress)* の商談だけが表示されるよう、データセクションで **基本的なフィルタークエリ** を設定します。 その後、営業担当者のメールアドレスも条件に含まれるよう、**ユーザー情報に基づくフィルタークエリ** を設定します。

## スタータープロジェクトをダウンロード

はじめに、**スタータープロジェクト** をダウンロードします。**4DforiOSQueries.4dbase** サンプルデータベースには、すぐに使えるモバイルアプリプロジェクトが含まれています。

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">スタータープロジェクト</a>
</div>

データベースに含まれているもの:

* **CRM** テーブル: iOSアプリに表示させたいデータが登録されています。
* **AccountManager** テーブル: 営業担当者たちの基本情報 (氏名やメールアドレス) が登録されています。

![CRM（顧客管理）データベース](img/CRMDatabase.png)


早速、最初のフィルタークエリを設定してみましょう！

ファイルメニューから 開く ＞ モバイルプロジェクト... を選択し、CRM app プロジェクトを開きます。
