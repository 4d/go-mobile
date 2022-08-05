---
id: one-to-many-actions
title: １対Ｎとアクション
---


We are now going to go a little bit further and **create a task for a specific employee**.

**親エンティティ**さえきちんと特定できていれば，子エンティティを作成するのは少しも難しいことはではありません！

Let's get started by downloading the Starter project:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip">スタータープロジェクト</a>
</div>

## addProject アクションを作成する

* プロジェクトエディターを開いて「アクション」セクションに移動します。

* Add a `addProject` Action

![addProject メソッドの作成](img/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## On Mobile App Action データベースメソッド

あとは下記のように**On Mobile App Action**データベースメソッド内で**addProject** アクションの動作を定義するだけです。

```4d
: ($request.action="addProjects")

$o:=New object(\
"dataClass";$context.dataClass;\
"parent";$context.parent;\
"entity";$context.entity;\
"parameters";$parameters)

$result:=addProject ($o)


```

## addProject プロジェクトメソッド


**addProject**メソッドには，下記のコードを入力します。

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //エンティティを作成

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //親エンティティのプライマリーキー

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //親エンティティのリレーション名

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //エンティティを保存

    $out.success:=True  //モバイルアプリにアクションの成功を通知

    $out.dataSynchro:=True  //モバイルアプリにセレクションのリフレッシュを要求

    $out.statusText:="Task added"

    $out.close:=True

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out

```

親エンティティを使用することにより，幾つでも担当者にタスクを追加することができるようになりました！

完成したプロジェクトをダウンロード

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip">Download</a>
</div>