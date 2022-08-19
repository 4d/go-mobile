---
id: create-static-data-formatter
title: 静的フォーマッターを作成する
---

> **目標**
> 
> 最初のデータフォーマッターを作成します。

> **PREREQUISITES**
> 
> はじめに [ここ](requirements.html) をクリックして、条件が揃っていることを確かめましょう！

このチュートリアルでは、様々なフォーマッターの例を作成していくことを案内していきます。


**ラベル & アイコン** セクションで、ビルトインのフォーマットが選択できます。

> **利用可能なフォーマット:**
> 
> * **Text**: テキスト
> * **Date**: 日付・短い日付・長い日付・完全な日付
> * **Time**: 時間・短い時間・経過時間・整数
> * **Boolean**: "いいえ" または "はい"・"False" または "True"
> * **Integer**: 整数・小数・実数・パーセント・助数詞・通貨 $・通貨 €・通貨 ¥・漢数字

スタータープロジェクトをダウンロードしてください:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip">ダウンロード</a>
</div>

## スタータープロジェクトをダウンロード

**スタータープロジェクト** をダウンロードします。これには、以下のものが収録されています:

* **integerToImage/Images** および **textToImage/Images** フォルダーと、そこに格納されているピクチャー (あとで画像を使うフォーマッターに使用します)
* **Task Management.4dbase** ファイル (およびすぐに使用できるモバイルアプリプロジェクト)

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip">スタータープロジェクト</a>
</div>

これでフォーマッターを作成する準備が整いました！

## formatters フォルダーを作成する

まず、*Task Management.4dbase/Resources/Mobile/formatters* フォルダーを作成します。

![Formatter フォルダー](img/formatter-folder.png)

## 整数用フォーマッター

### 整数から文字列へ

* 作成した formatters フォルダー内に **integerToString** フォルダーを作成します。
* 次に、**integerToString** フォルダー内に **manifest.json** ファイルを作成します。

![Formatter フォルダー](img/formatter-folder-integertostring.png)

**manifest.json** ファイルの中身は次のとおりです:

```json
{
   "name": "integerToString",

   "type": ["integer"],

   "binding": "localizedText",

   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}
}
```

1. **name**: フォーマッターの名前
2. **type**: 使用する 4Dフォーマット型
3. **binding**: 文字列なら **localized text**、あるいは画像なら **imageNamed**
4. **choiceList**: マップされた値

### 整数から画像へ

* 作成した **formatters** フォルダー内に **integerToImage** フォルダーを作成します。

* **integerToImage** フォルダー内に **manifest.json** ファイルを作成します。

![Formatter フォルダー](img/formatter-folder-integertoimage.png)

* 次に、**integerToImage** フォルダー内に **Images** フォルダーを作成します。 スタータープロジェクト内の **integerToImage/Images** にある画像をここに追加します。

![フォーマッターで使用する画像](img/formatter-images-integertoimage.png)

**manifest.json** ファイルの中身は次のとおりです:


```json
{
   "name": "integerToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},

   "assets": {
      "size": {
         "width": 40, "height": 40
      }
   }
}
```
1. **name**: フォーマッターの名前
2. **type**: 使用する 4Dフォーマット型
3. **binding**: 文字列なら **localized text**、あるいは画像なら **imageNamed**
4. **choiceList**: マップされた値
5. **assets**: 表示サイズの調整 (幅と高さ)

## テキストフォーマッター

### テキストから文字列へ

* 作成した formatters フォルダー内に **textToString** フォルダーを作成します。

* 次に、**textToString** フォルダー内に **manifest.json** ファイルを作成します。

![Formatter フォルダー](img/formatter-folder-texttostring.png)

**manifest.json** ファイルの中身は次のとおりです:

```json
{
   "name": "textToString",

   "type": ["text"],

   "binding": "localizedText",

   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}
}
```

1. **name**: フォーマッターの名前
2. **type**: 使用する 4Dフォーマット型
3. **binding**: 文字列なら **localized text**、あるいは画像なら **imageNamed**
4. **choiceList**: マップされた値

### テキストから画像へ

* 作成した formatters フォルダー内に **textToImage** フォルダーを作成します。

* **textToImage** フォルダー内に **manifest.json** ファイルを作成します。

![Formatter フォルダー](img/formatter-folder-textToImage.png)

* 次に、**textToImage** フォルダー内に **Images** フォルダーを作成します。 スタータープロジェクト内の **textToImage/Images** にある画像をここに追加します。

![フォーマッターで使用する画像](img/formatter-images-textToImage.png)

**manifest.json** ファイルの中身は次のとおりです:

```json
{
   "name": "textToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": ["image1.png","image2.png","image3.png"],

   "assets": {
  "size": {
   "width": 40, "height": 40
      }
   }
}

```

## ダークモード対応

デバイスがダークモードかライトモードか、あるいは iOS か Android かに関わらず、画像を使うカスタムデータフォーマッターは簡単に使用できます。 ピクチャーは、デバイスのカラーモードに適応されます。

### Tintable (彩色可能) カラー

アプリのカラーモード (ライト・ダーク) に応じて白黒画像のコントラストを最適化するには、 `"tintable": true` という行を追加します:

```json
{
   "name": "textToImage",
   "type": ["text"],
   "binding": "imageNamed",
   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},
   "assets": {
     "size": 54, 
     "tintable": true
     }
}
```
Here is the result in light and dark modes:

| Light mode                      |           Dark mode            |
| ------------------------------- |:------------------------------:|
| ![データフォーマッター](img/light-bw.png) | ![データフォーマッター](img/dark-bw.png) |


### Optimized color pictures

To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with `_dark`, as follows:

![データフォーマッター](img/Architecture.jpg)

```json
{
   "name": "textToImage",
   "type": ["text"],
   "binding": "imageNamed",
   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},
   "assets": {
     "size": 54
   }
}
```
Here is the result in light mode and in dark mode:

| Light mode                         |             Dark mode             |
| ---------------------------------- |:---------------------------------:|
| ![データフォーマッター](img/light-color.png) | ![データフォーマッター](img/dark-color.png) |

## モバイルプロジェクトを開く

Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the **Tasks**

Next, go to the **Labels & Icons section** in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:

* Select the **integerToString** formatter for the **Job field**
* Select the **textToString** formatter for the **Country field**
* Select the **integerToImage** formatter for the **Task Status**
* Select the **textToImage** formatter for the **Manager**

![Text formatter](img/formatters-icons-&-labels.png)

## Build your 4D for iOS app

Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit.

![Text formatter](img/formatters-final-result.png)

Download the completed formatter template folder:

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip">ダウンロード</a>
</div>

以上です！ 
