---
id: push-notification
title: プッシュ通知
---


## プッシュ通知とは

モバイルデバイスにおいて、アプリ経由で受信するアラートメッセージをプッシュ通知といいます。 この通知は表示・削除・許可・ブロックすることができます。 たとえば、アプリの新しいバージョンが利用可能になったことをユーザーに通知するのに便利です。

この機能をモバイルアプリに統合するためには、どのようなアーキテクチャーが必要でしょうか。 また、プッシュ通知の作成からモバイルデバイス上の表示まで、どのような流れでおこなわれるのでしょうか。

## 技術的アーキテクチャー

ここでは、モバイルプッシュ通知の作成・送信・受信に必要な各要素について説明します (iOS の例):

![プッシュ通知の流れ](img/4D-for-ios-push-notification.png)

## 設定

プッシュ通知を送信するには、プロジェクトの認証および設定ファイルを生成して参照する必要があります。

1. 認証ファイルを生成し、ダウンロードします:

- **iOS**: [このドキュメント](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md) で説明されているように、`AuthKey_XXXYYY.p8` 認証キーファイルを生成してダウンロードします。
- **Android**: [このドキュメント](https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Conf_firebase.md) で説明されているように、Firebaseプロジェクトを設定して`google-services.json` ファイルと `server key` を取得します。

2. モバイルプロジェクトの [公開](../project-definition/publishing) ページで、**プッシュ通知** オプションにチェックを入れ、適切なファイルを選択します:

- **iOS**: `.p8` ファイルを選択します。
- **Android**: `google-services.json` ファイルを選択します。

![公開セクション](img/push-notification-publishing-section.png)


3. **Android only**: プッシュ通知メソッドでは、次のステートメントを使用して `server key` を参照します:

```4d

$pushNotification.auth.serverKey:="your_server_key"

```



## プッシュ通知の基本的な例

[4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server/tree/main) コンポーネントは、1人以上の受信者にプッシュ通知するためのメソッドを提供しています。 詳細については、[プッシュ通知コンポーネントのドキュメント](https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Classes/PushNotification.md) を参照ください。

以下は、`test@4d.com` にプッシュ通知を送信する簡単な例です:

```4d

$target:=New collection("ios";"android")
$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)
$pushNotification.auth.isDevelopment:=True // iOS のみ、本番用は削除
$pushNotification.auth.serverKey:="your_server_key" // Android のみ
$notification:=New object 
$notification.title:="ここがタイトルです" 
$notification.body:="ここが通知の内容です" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

このように、とても簡単です。

:::tip

[**4D Mobile App Server** コンポーネント](https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Classes/PushNotification.md) を使用すると、プッシュ通知を簡単にニーズに合わせることができます。 アプリに最適な部分を選んで、自由にお使いください。 もちろん、フィードバックやバグレポート、さらにはプルリクエストを通じて、このプロジェクトへの貢献を歓迎します。

:::

## プッシュ通知とデータの同期

プッシュ通知で、データを更新するための同期を開始することもできます。

たとえば、アプリに荷物追跡オプションがある場合、顧客に送られた通知により、データベースの配達状況が更新されます。 この通知にはデータの同期リクエストが含まれており、顧客はスマートフォンで最新のデータを取得できます。

`4D Mobile App Server` コンポーネントを使用してこれをおこなうには、プッシュ通知でデータの同期を強制するかどうかを指定する必要があります。 これには、`userInfo` オブジェクトの `dataSynchro` ブール値を指定します。

### レコードを開く通知とデータの同期

デフォルトで、レコードを開く通知はデータの同期を自動的に開始します。

たとえば、連絡先アプリにおいて、連絡先の情報 (住所や電話番号などの連絡先のレコード) が変更された場合、ユーザーは受け取った通知から自動的に当該レコードを開き、そのデータを同期できます。 ユーザーが通知を開くと、連絡先の情報が完全に更新されます。

以下は、デフォルトの動作の例です。 `dataSynchro` リクエストと `open()` を組み合わせて使います:

:::note

`open()` メソッドにおいては、これがデフォルトの動作です。 そのため、指定していない場合の `dataSynchro` のデフォルト値は `true` です。

:::

```4d

$target:=New collection("ios";"android")
$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)
$pushNotification.auth.isDevelopment:=True // iOS のみ
$pushNotification.auth.serverKey:="your_server_key" // Android のみ

$notification:=New object
$notification.title:="ここがタイトルです" 
$notification.body:="ここが通知の内容です" 

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

`dataSynchro` を指定することで、データの同期を強制しないことも可能です:

```4d

$target:=New collection("ios";"android")
$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)
$pushNotification.auth.isDevelopment:=True // iOS のみ
$pushNotification.auth.serverKey:="your_server_key" // Android のみ

$notification:=New object
$notification.title:="ここがタイトルです" 
$notification.body:="ここが通知の内容です" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds.Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

### シンプル通知とデータの同期

特定のレコードを開かずに、簡単な通知のための同期を要求することができます。 たとえば、新しいエントリーがいくつか追加されたとします。 そのことを通知し、ユーザー操作なしにデータを更新することができます。

これには、以下のコード例のように、`userInfo` オブジェクトの `dataSynchro` の値を指定します (他の通知方法でも同様に使えます)。

```4d

$target:=New collection("ios";"android")
$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)
$pushNotification.auth.isDevelopment:=True // iOS のみ
$pushNotification.auth.serverKey:="your_server_key" // Android のみ

$notification:=New object
$notification.title:="ここがタイトルです" 
$notification.body:="ここが通知の内容です" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```
![データ同期のアニメーション](img/pushandSynchro.gif)

## Windows の設定

Windows ユーザーは、マシンの環境変数を扱うため、[最新の CURL バージョン](https://curl.se/download.html) をダウンロードする必要があります。 または、運用データベースの Resources フォルダーに curl.exe を挿入することもできます。

## MobileApps フォルダー

Windows でも macOS でも、開発プロジェクトから運用プロジェクトに以下のファイルをコピーする必要があります:

- `4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8`
- `4DBASE/MobileApps/ID.BundleID/manifest.json`


