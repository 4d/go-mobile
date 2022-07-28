---
id: one-to-many-relations
title: 1対Nリレーション
---

This tutorial will show you how easy it can be to include One to Many relations in your mobile project.

Let's get started by downloading the Starter project:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip">スタータープロジェクト</a>
</div>

In this tutorial, we are going to build a colorful **Task app** using 4D for iOS.

![Task App Final result](img/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

But first, let's have a look at the structure of our database:

![Select link from structure section](img/Database-1-to-N-relations-4D-for-iOS.png)

As you can see, there is a One to Many link named **tasks** that we will use in our iOS app to display the employees'(**One**) tasks(**to Many**).

Now, go straight to Open menu > Mobile project... to select *Time Keeper* and go to the **Structure section**.

## ストラクチャセクション

You can see the **tasks relation** we have seen earlier... Publish it !

This will now operate as any other field for the rest of the app creation process.

![Structure section Relations properties](img/Structure-section-relations-4D-for-iOS.png)

:::ヒント

On mouse over, a tip displays the table name originating the relation.

:::

## ラベル & アイコンセクション

The One to Many relation is now available in the **Labels and Icons** section.

It is important to know that including a One to Many relation will create a button into the genrated iOS app.

So, in the Labels & Icons section you will define:

* ボタンタイトル
* ボタンアイコン
* a title that will be displayed in the destination view (to indicate where you come from for example).

![Labels & Icons section Relations properties](img/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## Forms section

* Go to the Forms section and drop the *tasks* relation on the Employee Task Detail form.

![Related field in Forms section](img/1-to-n-relations-forms-section.png)

## ビルドして実行

1. Employeeのリスト画面で適当な従業員をクリックします。
2. This will open the employee's detail form, where you should see a new **Relation button** !
3. Relationボタンをクリックすると，選択されている従業員のタスクが表示されます。

![Related field in Forms section](img/One-to-n-relations-task-ios-app.png)

Well done! You've successfully included One to Many relations in your mobile project.

完成したプロジェクトをダウンロード

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip">Download</a>
</div>
