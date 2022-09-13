---
id: deploy-on-app-store-archive-and-upload
title: プロジェクトのアーカイブとアップロード
---

> **目標**
> 
> プロジェクトをアーカイブし、App Store Connect にアップロードします。

## ⒈ Xcode の設定
* 個人向けの Apple Developer アカウントを選択した場合、アカウントはすぐに利用できます。
* 組織向けの Apple Developer アカウントを選択した場合、Apple の承認を待つ必要があります。
* アカウントにアクセスできるようになったら、Xcode で Preferences > Accounts に追加します。
* Xcode は、必要な Provisioning Profile と証明書を自動的にインストールします。

## ⒉ Team ID を取得する

* Apple Developer アカウントにログインします。 Team ID は Membership にて確認できます。

![Team ID を取得する](img/Team-ID-4D-for-iOS.png)

## ⒊ 4D for iOS の設定

* 4D for iOS を起動します。
* セクションタブにて:

**一般: Team ID を入力します**

![Team ID](img/Team-ID.png)

**公開: プロダクションURL を入力します**

(運用環境では HTTPS が必須です)

![公開](img/Publishing.png)

* ビルドタブにて:

**ビルドして実行: プロジェクトをビルドします**

![BuildTab](img/BuildTab.png)

## ⒋ プロジェクトを Xcode で開く

* 4D for iOS プロジェクトエディターのビルドタブで、プロジェクト > プロジェクトをXcodeで開く... をクリックします。

![プロジェクトを Xcode で開く](img/Open-your-project-Xcode-4D-for-iOS.png)

## ⒌ Xcode でプロジェクトをアーカイブする

* Xcode でツールバーのシミュレーター選択メニューを開き、**Generic iOS Device** を選択します。

![Generic iOS Device](img/Deployment-Generic-iOS-Device.png)

* 次に、上部メニューから Product をクリックし、**Archive** を選択します。

![Xcode でプロジェクトをアーカイブする](img/Archive-your-Project.png)

## ⒍ プロジェクトを検証する

* アーカイブ処理の最後に、作成したアーカイブを表示する Organizer ウィンドウが表示されます。

* Click on the **Validate** button to start the validation process.

![プロジェクトを検証する](img/Organizer-Project-Validation.png)

* The first step is selecting the App Store distribution options.

![App Store distribution options](img/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by  checking the **Automatically manage signing** option.

![Re-sign your app](img/Re-sign-your-App.png)

* Review your app's content.

![App review](img/Review-App.png)

* If your project passes the validation process, you should see this message:

![Validation](img/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Click **Done**. This will return you to the Organizer window.

## ⒎ ⒎ ⒎ ⒎ Upload to App Store

Once the validation process has been completed, you're ready to add your app to the App Store.

* Click the **Upload to App Store** button.

![⒎ ⒎ ⒎ Upload to App Store](img/Upload-to-AppStore.png)

* When your project has been successfully uploaded, you'll see this window:

![Upload successful](img/upload-Successful.png)

## ⒏ ⒏ ⒏ ⒏ Select the build for the App Store

* From App Store Connect > App Store > iOS App, select your app and click the **+** button that appears in the Build section

![Add build](img/Add-build-app-store-connect.png)

* Select the build you want to submit and click **Done**.

![Build selection](img/Select-build-app-store-connect.png)

* Finally, click on the **Submit for Review** button.

## ⒐ ⒐ Submit for Review

* The final step to submitting your app for review is answering a few quick questions about your app.

![⒐ Submit for Review](img/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click **Submit**.

* The average App Store review time is around two days!
