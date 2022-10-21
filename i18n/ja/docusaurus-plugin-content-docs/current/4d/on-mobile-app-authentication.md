---
id: on-mobile-app-authentication
title: On Mobile App Authentication
---

**On Mobile App Authentication**( *mobileInfo* : Object ) -> *result* : Object

| 引数         | タイプ    |    | 詳細              |
| ---------- | ------ | -- | --------------- |
| mobileInfo | Object | -> | モバイルアプリから渡された情報 |
| result     | Object | <- | 認証ステータス         |

## 詳細

`On Mobile App Authentication` データベースメソッド は、4D Server あるいは 4D へのモバイルアプリの認証を管理するためのものです。 これは、ユーザーエージェントが 4D Server あるいは 4D に対してログインリクエストを最初に送ったときに、4D によって自動的に呼び出されます。

:::note

ユーザーエージェントとはアプリケーションID、デバイスID、そしてチームID によって定義されます。 ID は `On Mobile App Authentication` データベースメソッド に渡されます (後述参照)。 :::

`On Mobile App Authentication` データベースメソッドは、初回の接続の際には必ず呼び出されます。モバイルアプリがゲストモードでビルドされていた場合でも呼び出されます。

このデータベースメソッドは、モバイルアプリから必要な情報を *mobileinfo* 引数 (オブジェクト型) として受け取り、認証ステータスを *result* 引数 (オブジェクト型) に返す必要があります。 これらの引数は、以下のように宣言・初期化しなければなりません:

```4d

  //On Mobile App Authentication データベースメソッド
#DECLARE ($mobileInfo : Object) -> $result : Object

  // ...メソッドのコード
$result:=New object() // 戻り値となるオブジェクトの作成を忘れないこと

```

*mobileInfo* オブジェクト引数が受け取るプロパティは以下の通りです:

| プロパティ       |             | タイプ    | 詳細                                                                               |
| ----------- | ----------- | ------ | -------------------------------------------------------------------------------- |
| email       |             | テキスト   | ユーザーのメールアドレス。 必須ではなく、ゲストアクセスでは空でも構いません                                           |
| application |             | Object | モバイルアプリに関する情報                                                                    |
|             | id          | テキスト   | モバイルアプリの ID                                                                      |
|             | name        | テキスト   | モバイルアプリの名前                                                                       |
|             | version     | テキスト   | モバイルアプリのバージョン                                                                    |
| device      |             | Object | モバイルデバイスについての情報 (通常は携帯電話)                                                        |
|             | id          | テキスト   | 生成されたデバイス固有の ID                                                                  |
|             | version     | テキスト   | デバイスのシステムバージョン                                                                   |
|             | description | テキスト   | デバイスについての詳細                                                                      |
|             | simulator   | ブール    | デバイスがシミュレーターの場合に true                                                            |
| team        |             | Object | Apple Developer Team の情報                                                         |
|             | id          | テキスト   | チームID (これによってデベロッパーは Xcode プロジェクトの "ビルドと実行" 機能を使用できるようになります)                     |
| language    |             | Object | ユーザーデバイスの言語設定                                                                    |
|             | id          | テキスト   | ユーザーデバイスのカレント言語の ID (例: en_US)                                                   |
|             | region      | テキスト   | ユーザーデバイスのカレントのリージョン設定 (例: US)                                                    |
|             | code        | テキスト   | ユーザーデバイスのカレント言語 (例: en)                                                          |
| parameters  |             | Object | カスタム使用のため、モバイルアプリで追加可能なその他の情報                                                    |
| session     |             | Object | セッション情報                                                                          |
|             | id          | テキスト   | 4Dサーバー上の [Session](https://developer.4d.com/docs/API/SessionClass/) オブジェクトの UUID |
|             | ip          | テキスト   | クライアントの IPアドレス                                                                   |


:::note

このデータベースメソッドから、4Dサーバー上に自動で作成される [Session オブジェクト](https://developer.4d.com/docs/ja/API/SessionClass/) にアクセスすることができます。 このオブジェクトを使用して、モバイルセッションを制御することができます。 サーバーを再起動した場合、既存のモバイルセッションの ID と権限は自動的に復元されます。 `Storage`、`expirationDate` および `idleTimeout` など、他のセッションプロパティはリセットされます。

:::

データベースメソッドは情報を処理した後、以下のプロパティを持つオブジェクトを *result* に返す必要があります:

| プロパティ      | タイプ    | 詳細                                                                                                                         |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| userInfo   | Object | フィルタークエリに使用できるユーザー値。                                                                                                       |
| success    | ブール    | 認証に成功した場合には true、それ以外は false。 success=false の場合、接続は拒否されます。                                                                 |
| statusText | テキスト   | (任意) モバイルアプリに表示するメッセージ。 success=true であればようこそメッセージを表示し、success=false であればメッセージを使ってユーザーに説明を提供できます。                          |
| verify     | ブール    | (任意) [ユーザーセッション](../special-features/session-management.md) の最初のログインを検証したい場合は true、そうでない場合は false を指定します。 デフォルトは false です。 |


以下の場合には、接続が自動的に拒否されます:

- *result* に値が設定されていない、あるいは *result* が定義されていない
- *result* に無効な値が設定されている
- `On Mobile App Authentication` データベースメソッドがアプリケーション内にて定義されていない

:::info

接続が "localhost" から来る場合には、デベロッパーが接続テストをしているとみなされるため、接続は自動的に受け入れられます。

:::

## モバイルリクエストを認証する

モバイルアプリの接続リクエストの認証というのは、基本的には提供されたメールアドレスに基づいています。 たとえば、4d.com ドメインのメールアドレスからの接続のみ認証をしたい場合には、`On Mobile App Authentication` データベースメソッドに以下のように書くことができます:

```4d
 #DECLARE ($mobileInfo : Object) -> $result : Object  

 If($mobileInfo.email="@"+Char(At sign)+"4d.com")
    $result.success:=True
 End if
```

`$mobileInfo` オブジェクトの `application.id`、`device.id`、あるいは `team.id` といった情報を用いてユーザーエージェントを識別し、アクセスを許可 / 拒否するかを決定することもできます。

その後、メールの検証をおこなう場合は、`$result.verify` に `true` を返します。

### ゲストアクセス

接続にメールを必要とする "認証" オプションを **有効化せずに** モバイルアプリがビルドされていた場合、そのアプリは "ゲストモード" アプリとなります。 この場合、`$mobileInfo.email` の文字列は空で提供されます。 この場合、以下のいずれかを選択できます:

- `$result.success` に `true` を返してゲストのアクセスを許可する。 アクセスの検証を後でおこなう場合は、`$result.verify` に `true` を返します。
- ユーザーエージェント情報を使用してゲストアクセスを識別/評価し、アクセスを許可 / 拒否するかを決定する
- `$result.success` に `false` を返してゲストのアクセスを拒否する。 これは、たとえばサーバーがメンテナンスモードの場合に使用することができます。 この場合、ユーザーが **再読み込み** ボタンをクリックすると、モバイルアプリにエラーが表示されます。

## 例題

以下は `On Mobile App Authentication` データベースメソッドのテンプレート例です:

```4d

  //On Mobile App Authentication データベースメソッド
 #DECLARE ($mobileInfo : Object) -> $status : Object


 var $Boo_simulator : Boolean
 var $Txt_appID;$Txt_appName;$Txt_appVersion;$Txt_device;$Txt_deviceID;$Txt_email : Text
 var $Txt_IP;$Txt_languageCode;$Txt_languageId;$Txt_languageRegion;$Txt_osVersion;$Txt_sessionId : Text
 var $Txt_teamID : Text

  // ユーザーのメールアドレスを取得します
 $Txt_email:=String($mobileInfo.email)

 If(Length($Txt_email)=0) // メールアドレスが提供されなかった場合
  // ゲストモード - 接続を認証または拒否します
    $status.success:=True
  // ゲストアクセスを拒否するには: $status.success:=False

  //  モバイルアプリに表示されるようこそメッセージ (任意)
    $status.statusText:="アプリへようこそ"

 Else
  // 認証モード -  接続を認証または拒否します
    If(Is compiled mode) // 運用版の場合

  // たとえば、4d.com ドメインからのメールであれば認証します
       $status.success:=($mobileInfo.email=("@"+Char(At sign)+"4d.com"))

    Else // 開発版の場合

  // テスト目的のため、すべてのアドレスを許可します
       $status.success:=True

    End if

    If($status.success)


  // モバイルアプリに表示されるようこそメッセージ(任意)
       $status.statusText:="認証に成功しました"

    Else

       $status.statusText:=$mobileInfo.email+" は許可されたメールアドレスではありません。"

    End if
 End if

  // 識別が必要であればアプリ情報を取得します (任意)
 If($mobileInfo.application#Null)
    $Txt_appID:=$mobileInfo.application.id // アプリID
    $Txt_appName:=$mobileInfo.application.name // アプリ名
    $Txt_appVersion:=$mobileInfo.application.version // アプリバージョン
 End if

  // 識別が必要であればデバイス情報を取得します (任意)
 If($mobileInfo.device#Null)
    $Txt_device:=$mobileInfo.device.description // デバイス詳細
    $Txt_deviceID:=$mobileInfo.device.id // デバイスID
    $Txt_osVersion:=$mobileInfo.device.version // システムバージョン
    $Boo_simulator:=$mobileInfo.device.simulator // デバイスがシミュレーターであれば true
 End if

  //  必要であればチーム情報を取得します (任意)
 If($mobileInfo.team#Null)
    $Txt_teamID:=$mobileInfo.team.id //チームID
 End if

  // 必要であればユーザー言語情報を取得します (任意)
 If($mobileInfo.language#Null)
    $Txt_languageCode:=$mobileInfo.language.Code
    $Txt_languageId:=$mobileInfo.language.id
    $Txt_languageRegion:=$mobileInfo.language.region
 End if

  // セッション情報を取得します
 If($mobileInfo.session#Null)
  // 将来の使用のために保存も可能です
    $Txt_sessionId:=$mobileInfo.session.id // この認証のために作成された UUID
    $Txt_IP:=$mobileInfo.session.ip // IPアドレス
 End if

  // アプリの引数を取得します
 If($mobileInfo.parameters#Null)
  // モバイルアプリから追加されるその他の追加情報 (オブジェクト型)
 End if


```