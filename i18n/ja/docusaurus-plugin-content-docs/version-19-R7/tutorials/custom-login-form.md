---
id: custom-login-form
title: カスタムログインフォーム
---


このチュートリアルでは、次のことを紹介します:

- カスタム [ログインフォーム](https://4d-for-ios.github.io/gallery/#/type/form-login) の作成と使用
- QRコードのスキャンによる認証済みユーザーのログイン
> **用意するもの**
> 
> 認証済みユーザーをもつ Webサイト
> 
> 4D v18R6 以上
> 
> iOSモバイルデバイスの実機 (シミュレーターはカメラをシミュレートしないため)


*シナリオ: 認証済みユーザーをもつ Webサイトがすでにあり、QRコードをスキャンするだけでそれらのユーザーがアプリにログインできるようにする。*

:::note

プロジェクトエディターからカスタムログインフォームを選択する機能はまだ実装されていませんが、手動でおこなう方法を説明します。

:::

## ⒈ はじめに

In this tutorial, we're going to:

* カスタムログインフォームを追加する
* QRコードをスキャンするだけで、アプリユーザーがログインできる機能を実装する

First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomLoginForm/archive/main.zip">スタータープロジェクト</a>
</div>

:::info

This project already includes a Users table with a Login and a Password for each authenticated user.

:::

## ⒉ カスタムログインフォームを追加する

To use a custom login form, the first thing you'll need to do is creating a *YourDatabase.4dbase/Resources/Mobile/form/login* folder.

Download the Sign in With [QRCode login form](https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip) and simply drop it in the login folder you've just created.

![login folder](img/login-folder.png)

次に、*YourDatabase.4dbase/Mobile Projects/ContactQRCodeLogin/project.4dmobileapp* ファイルを開きます。

![project.4dmobileapp](img/4dmobileapp-file.png)

プロジェクトを閉じた状態で、以下の行を追加します: *"login":"/SignInWithQRCode",*

```
{
    "info": {
        "version": 5,
        "target": "iOS",
        "ideVersion": "1870",
        "ideBuildVersion": "261295",
        "componentBuild": ""
    },
    "login": "/SignInWithQRCode",
    ...

```

これにより、カスタムテンプレートを初期化し、ビルドプロセス中に使用することができます。

これで、カスタムテンプレートの追加は完了です。 簡単でしたね!


## ⒊ On Mobile App Authentication データベースメソッド

プロジェクトを開き、ContactQRCodeLogin モバイルプロジェクトを開いて、公開セクションに移動します。

ここで、認証機能にチェックを入れ、作成ボタンをクリックしてデータベースメソッドを作成します (すでに作成されている場合は編集ボタンに変化します)。

![公開セクション](img/publishing-section.png)


ユーザー認証のため、以下のように記述します:

```4d
var $0 : Object
var $1 : Object

var $request; $response : Object

$request:=$1  // モバイルアプリから提供される情報
$response:=New object  // モバイルアプリに返される情報

$entity:=ds.User.query("login = :1"; $request.email)
If ($entity.length>0)
    $password:=$entity.first().password  // テーブルからパスワードを取得します

    If (Verify password hash($password; $request.parameters.token))
        // リクエストから受け取ったパスワードと比較します

        $response.success:=True
    Else 
        $response.success:=False
    End if 
Else 
    $response.success:=False
End if 

// モバイルアプリに表示する任意のメッセージ
If ($response.success)
    $response.statusText:="認証に成功しました"
Else 
    $response.statusText:="このアプリを使用する権限がありません"
End if 

$0:=$response
```


## ⒋ プロジェクトメソッド

### Authentication メソッド

Here we get the variable from the form and check if those values exist in the User table :

```4d
//Retrieve all the variables of the form
C_TEXT($1)
ARRAY TEXT($arrNames; 0)
ARRAY TEXT($arrVals; 0)

// Get the login and pswd variable from the authentication web page
WEB GET VARIABLES($arrNames; $arrVals)
$VLOGIN:=Find in array($arrNames; "VLOGIN")
$VPASS:=Find in array($arrNames; "VPASS")

// Shared variable creation to access to it in the code
Use (Storage)
    Storage.session:=New shared object("login"; ""; "password"; "")
End use 

// Search if the login / pswd exist and if the user can be authentified
$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})

// If the login / pswd exist the login / pswd are initialised in the share variable
If ($entity.length>0)
    Use (Storage.session)
        Storage.session.login:=$arrVals{$VLOGIN}
        Storage.session.password:=$arrVals{$VPASS}
        Storage.session.success:=True
    End use 

    // Redirection to the web page
    WEB SEND HTTP REDIRECT("/createQRCode.html")

Else 
    // Back to the home page
    Use (Storage.session)
        Storage.session.success:=False
    End use 
    WEB SEND HTTP REDIRECT("/")
End if 
```

### GenerateQRCODE メソッド

ここで、vqrCodeData を生成します。これは、ユーザーのメールアドレスと暗号化されたパスワードを含む json で、QRコードに埋め込まれることになるデータです。

```4d
// Use storage variable
$currentUserEmail:=Storage.session.login
$token:=Storage.session.password
$options:=New object("algorithm"; "bcrypt"; "cost"; 4)
$hash:=Generate password hash($token; $options)

// Process variable creation (json value with mail and encrypted pswd)
vqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))

// Redirection to the QRcode webpage
WEB SEND HTTP REDIRECT("/generatedQRCode.shtml")
```


## ⒌ Webサイト

For this tutorial, three html pages are already available into the WebFolder folder:

* 認証ページ (index.html)
* QRコード生成ページ (createQRCode.html)
* ユーザーがモバイルデバイスでスキャンする最終ページ (generatedQRCode.shtml)

Let's have a focus on those three pages :

### index.html

Here, we just use a 4DACTION to post login and password to be used in the *Authentication Project Method* that we are going to see in step 4:

```html
  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>
  <h1>1. Login</h1>
  <input type="text" id="login" placeholder="Username" name=VLOGIN >
  <input type="password" id="login" placeholder="Password" name=VPASS>
  <input type="submit" name="" value="Login">
  </form>
```

### createQRCode.html

Here, we use call the *GenerateQRCODE Project Method* using a 4DACTION:

```html
<h1>2. GENERATE YOUR QRCODE</h1>
    <div>
        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>
    </div>
```

### generatedQRCode.shtml

In this last page, we use [4D tags](https://developer.4d.com/docs/Tags/tags.html) to get the *data* value:

```html
<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>
  <div id="canvas"></div>

  <script type="text/javascript">

    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: '<!--#4DEVAL vqrCodeData-->',
      dotsOptions: {
        color: "#000",
        type: "square"
      },
      backgroundOptions: {
        color: "#FFFFFF",
      }
    });
    qrCode.append(document.getElementById("canvas"));
  </script>

```

## ⒍ テストしましょう

### Webサイトのトップページにログインする

Enter **david@4D.com** in the Login field and **TEST** in the Password field in your website home page and click Login (Which is an existing record in the User table).

![Login form](img/login-form.png)


### QRコードを生成する

Click on the **HERE** button to generate the QR Code.

![Create QR Code](img/create-qr-code.png)

You will be redirected to the final QR Code page.

![Generated QR Code](img/generated-qr-code.png)

### 実機でアプリをビルドする

Install your mobile app from the project editor on a real device.

Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app.

Here is the final result :

![Sign in with QR Code](img/sign-in-with-qr-code.gif)

## ⒎ これからどうする？

ステップ2 では、モバイルアプリに任意のログインフォームを簡単に追加する方法を説明しています。 同様に、作成した独自のログインフォームをモバイルアプリに追加して、使用することができます。

また、その後の手順では、Sign In With QRCode ログインの実装方法を説明しています。これを使うと、認証済みユーザーが QRコードをスキャンしてモバイルアプリにログインできるようになります。
