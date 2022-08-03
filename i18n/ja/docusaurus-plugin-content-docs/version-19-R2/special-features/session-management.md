---
id: session-management
title: セッション管理
---




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

全ユーザーセッションの最初のログインを手動で認証する必要がある場合は、[*On Mobile App Authentication*](https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html) データベースメソッドによって返されるオブジェクトに `$result.verify:=True` を追加します。


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


