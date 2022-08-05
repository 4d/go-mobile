---
id: session-management
title: セッション管理
---


4D for iOS と 4D for Android ではユーザーセッションを管理することができます。モバイルアプリの体験向上のため、セッションから接続ユーザーに関する情報を取得できます。


## セッションファイル

ユーザーが初めてアプリを開くと、セッションファイルが自動的に作成され、MobileAppsフォルダーのカレントデータファイルの隣に保存されます。

セッションファイルは、アプリのフォルダーごとに整理され、グループ化されています。 チームID とアプリバンドルID を連結してアプリフォルダー名を作成します。

4D for iOS で生成されたセッションファイルの例です:

```json
{
"application":{
  "id":"com.contactApp.Contact",
  "name":"Contact",
  "version":"1.0.0"
},
"team":{
  "id":"UTT7VDX8W5"
},
"language":{
  "id":"en_US",
  "code":"en",
  "region":"US"
},
"email":"",
"device":{
  "description":"iPhone X",
  "version":"11.3",
  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",
  "simulator":true
},
"send":"link",
"session":{
  "id":"7023d9205074199d1c16fc00d24354e778137675",
  "ip":"::ffff:192.168.5.4"
},
"status":"accepted",
"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"
}

```

デフォルトでは、[On Mobile App Authentication](../4d/on-mobile-app-authentication.md) データベースメソッドによってセッションが認証された場合、"ststus" は自動的に "accepted" に設定されます (`$result.success` は `True`)。 全ユーザーセッションの最初のログインを手動で認証する必要がある場合は、[On Mobile App Authentication](../4d/on-mobile-app-authentication.md) データベースメソッドによって返されるオブジェクトに `$result.verify:=True` を追加します。 これにより、セッションファイルのデフォルトステータス "accepted" が "pending" に変更されます。 詳細については [この例](../special-features/authentication#コンポーネントを使用しない場合) を参照ください。


## Session オブジェクト

モバイルセッションは、(サーバー上で有効化されていれば) 強力な [4Dユーザーセッション](https://developer.4d.com/docs/ja/WebServer/sessions.html) を活用することができます。 この場合、[モバイルセッションファイル](#セッションファイル) に格納された情報をサーバー上の [Session オブジェクト](https://developer.4d.com/docs/ja/API/SessionClass.html) に格納することができます。これにより、たとえば同一ユーザーのショッピングカートを Webセッションとモバイルセッションで共有することができます。

モバイルプロジェクトにおいては、[Session オブジェクト](https://developer.4d.com/docs/ja/API/SessionClass.html) は自動的に次のコンテキストから利用可能です:

- [On Mobile App Authentication](../4d/on-mobile-app-authentication.md) データベースメソッド
- [On Mobile App Action](../4d/on-mobile-app-action.md) データベースメソッド
- フォームの [Webエリア](https://github.com/mesopelagique/form-detail-WebArea)

ユーザーセッションを使用すると、[Webエリア](https://github.com/mesopelagique/form-detail-WebArea) の [4Dタグ](https://developer.4d.com/docs/en/Tags/tags.html) を介してユーザーデータを取得・表示することができます。 たとえば、page.shtml フォームに次のようにかけます:

```html
<html><body><h1>使用しているメールアドレス: <!--#4DTEXT Session.info.mobile.email--> </h1></body></html>
```




## Mobile Session Management コンポーネント

セッションは、**Mobile Session Management** (モバイルセッション管理) コンポーネントで管理することもできます:

<div>
<a className="button button--primary"
href="https://github.com/4d/Mobile-Session-Management/releases/latest">Mobile Session Management コンポーネント</a>
</div>

1. zipファイルをダウンロードし、解凍します。
2. Build / Components フォルダー内の MOBILE SESSION MANAGEMENT.4dbase を取得します。
3. アプリのデータ元である 4Dプロジェクトフォルダーに、**Components** フォルダーを作成します (Project や Data フォルダーと同階層)。
4. **MOBILE SESSION MANAGEMENT** コンポーネントを、新しく作成した **Components** フォルダーに移動します。
5. 4D を再起動します。
6. ツールバーの **実行** ボタンをクリックします。
7. メソッド実行ダイアログで、**MOBILE SESSION MANAGEMENT** メソッドを選択し、**実行** ボタンをクリックします。
8. アプリウィンドウが開き、アプリとセッションが表示されます:

![セッション](img/session-management.png)

* セッションを右クリックすると、Finder でセッションファイルを表示したり、削除したりすることができます。
* 各デバイスのセッションステータスを変更・定義することができます: accepted または pending

![選択したセッション](img/session-management-selected.png)


* **Push** ボタンを押すと、メモリ内のセッションが更新されます。
* **Refresh** ボタンはセッションリストを更新します。 


