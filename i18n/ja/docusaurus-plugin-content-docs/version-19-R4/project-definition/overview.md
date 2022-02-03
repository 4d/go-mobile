---
id: overview
title: 概要
---


4D Mobile プロジェクトエディターを使用すると、グラフィカルなインターフェースを使用してiOS用/Androido用のネイティブなモバイルプロジェクトをデザイン、テスト、ビルドすることができます。 ウィンドウには2つのタブがあります: **セクション** and **ビルド** です。

![General画面](img/General-section-4D-for-iOS.png)

**セクション** タブの各セクションは，モバイルアプリが出来るまでの過程に対応しています。

* 一般
* ストラクチャ
* データ
* アクション
* ラベル & アイコン
* メインメニュー
* フォーム
* Publishing

**ビルド** タブには、モバイルアプリをビルド/テストするための埋め込みツールがあります。

* Build and Run
* シミュレーター
* プロジェクト
* インストール

4D Mobile プロジェクトエディターは**4D** アプリケーション開発環境から利用可能です(4D Develope Pro ライセンスが必要です)。

4D モバイルプロジェクトは、4D データモデルと強くリンクしています。 4D Mobile プロジェクトを作成または開くためには、それに関連した4D プロジェクトデータベースを先に開く必要があります。


## Creating a mobile project

To create a new mobile project:

1. Start your 4D application and open the 4D project for which you want to create a mobile project.
2. Select **New > Mobile Project** from the **File** or the toolbar menu.

:::note

You need a 4D Developer Pro license to open the 4D mobile editor.

:::

The welcome dialog box is displayed:

![Project Name](img/new-project.png)

3. Give your project a name and click **Continue**.

The Mobile project editor is displayed and the mobile file architecture is automatically created in your 4D project.

## Opening a mobile project

To open a mobile project:

1. Start your 4D application and open the 4D project for which you want to open the mobile project.
2. Select **Open > Mobile Project** from the **File** or the toolbar menu.

The mobile project selection dialog box is displayed. It contains the list of mobile projects already defined for the current database:

![Project Name](img/select-project.png)

The icon on the left side indicates if the project was created for Android, iOS, or both.

3. Double-click on the project to open, or select the project and click **Open**.

### Open another project

The **Open another project...** link allows you to select any valid [`.4dmobileapp`](#mobile-project-architecture) file that is not listed in the dialog box.

:::warning

The selected mobile project must match the current data model, otherwise it will be updated and may not work as expected.

:::

## Deleting a mobile project

To delete a mobile project, just remove the mobile project folder from the 4D project folder.


## Mobile project architecture

Mobile projects are created inside the main 4D project folder:

- My4DProject (*main 4D project folder*)
    + Mobile Projects
        * MyMobileProject
            - project.4dmobileapp
            - *other files and folders*


