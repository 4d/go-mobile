---
id: on-mobile-app-action
title: On Mobile App Action
---

**On Mobile App Action**( *mobileInfo* : Object ) -> *result* : Object

| 引数         | タイプ    |    | 詳細                 |
| ---------- | ------ | -- | ------------------ |
| mobileInfo | Object | -> | モバイルアプリから渡された情報    |
| result     | Object | <- | アクションステータス & データ同期 |


## 詳細

`On Mobile App Action` データベースメソッドは、特定のセッションにおいて、モバイルアプリからリクエストされたアクションを管理するためのものです。

:::note

モバイルアプリは [On Mobile App Authentication](on-mobile-app-authentication.md) データベースメソッドによって認証されている必要があります。

:::

このデータベースメソッドは、モバイルアプリがアクションリクエストを送信したとき、4D によって呼び出されます。

このデータベースメソッドは、モバイルアプリから必要な情報を *mobileinfo* 引数 (オブジェクト) として受け取り、アクションのステータスを *result* 引数 (オブジェクト) に返す必要があります。 これらの引数は、以下のように宣言・初期化しなければなりません:

```4d
 //On Mobile App Action データベースメソッド
#DECLARE ($mobileInfo : Object) -> $result : Object
  // ...メソッドのコード
$result:=New object() // 戻り値となるオブジェクトの作成を忘れないこと
```

*mobileInfo* オブジェクト引数が受け取るプロパティは以下の通りです:


| プロパティ名     |                     | タイプ           | 詳細                                                                                      |
| ---------- | ------------------- | ------------- | --------------------------------------------------------------------------------------- |
| action     |                     | テキスト          | アクション名                                                                                  |
|            | id                  | テキスト          | 4Dサーバー上の [Session](https://developer.4d.com/docs/en/API/SessionClass.html) オブジェクトの UUID |
|            | ip                  | テキスト          | セッションIP                                                                                 |
| parameters |                     | Object        | モバイルアプリから送信されたアクション引数                                                                   |
| context    |                     | Object        | リクエストされたアクションのコンテキスト引数                                                                  |
|            | dataClass           | テキスト          | 4D のデータクラス名                                                                             |
|            | entity.primaryKey   | Text, Longint | (任意; 選択されたエンティティに関連するアクションの場合に渡されます) エンティティのプライマリーキー。                                   |
|            | entity.relationName | テキスト          | (任意; リンクされたエンティティに関連するアクションの場合に渡されます) N対1リレーション名                                        |
|            | parent.primaryKey   | Text, Longint | (任意; リンクされたエンティティに関連するアクションの場合に渡されます) 親エンティティのプライマリーキー。                                 |
|            | parent.relationName | テキスト          | (任意; リンクされたエンティティに関連するアクションの場合に渡されます) 1対Nリレーション名                                        |
|            | parent.dataClass    | テキスト          | (任意; リンクされたエンティティに関連するアクションの場合に渡されます) 親エンティティのデータクラス                                    |

:::note

このデータベースメソッドから、4Dサーバー上に自動で作成される [Session オブジェクト](https://developer.4d.com/docs/en/API/SessionClass.html) にアクセスすることができます。 このオブジェクトを使用して、モバイルセッションを制御することができます。

:::

データベースメソッドは情報を処理した後、以下のプロパティを持つオブジェクトを *result* に返す必要があります:

| プロパティ名      | タイプ                 | 詳細                                                                                                                                  |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| success     | ブール                 | アクションが正常に処理されていれば true、それ以外は false。                                                                                                 |
| statusText  | テキスト                | (任意) モバイルアプリに表示するメッセージ。 success=true であれば成功した旨のメッセージを表示し、success=false であればメッセージを使ってユーザーに説明を提供できます。                                 |
| errors      | Object の Collection | (任意) 各オブジェクトには、拒否されたエントリーについてモバイルアプリに表示するための ['parameter'/'message' キーのペア](../project-definition/actions.md#失敗した保留タスクの更新) が含まれています。 |
| dataSynchro | ブール                 | エンティティまたはテーブルのセレクションを更新する場合には true、それ以外は false。 true の場合、モバイルアプリはデータ同期を自動的に開始します。                                                   |

## 例題

```4d
  // On Mobile App Action データベースメソッド
  // 2つのアクションが定義されています: "done" と "postponeAll"

#DECLARE ($request : Object) -> $result : Object

var $o;$context : Object

 $context:=$request.context

 Case of

    :($request.action="done")
       $o:=New object(\
       "dataClass";$context.dataClass;\
       "ID";$context.entity.primaryKey;\
       "CompletePercentage";100)

       $result:=modifyStatus($o) // エンティティのステータスを変更するプロジェクトメソッドを呼び出します

    :($request.action="postponeAll")
       $o:=New object("dataClass";$context.dataClass)

       $result:=postponeAll($o) // データクラスの全エンティティを延期するプロジェクトメソッドを呼び出します

    Else // 未知のリクエスト
       $result:=New object("success";False)

 End case

 ```