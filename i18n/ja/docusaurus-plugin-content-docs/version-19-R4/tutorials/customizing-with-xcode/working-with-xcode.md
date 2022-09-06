---
id: working-with-xcode
title: Xcodeに作業を引き継ぐ
---

> **目標**
> 
> * プロジェクトエディターで 4D for iOS プロジェクトをビルドする
> * ビルドした 4D for iOS アプリをカスタマイズする

4D for iOS は、ネイティブの iOSアプリを出力するので、これを Xcode で開いてカスタマイズすることができます。 具体的な手順を見ていきましょう。

> **注記**
> 
> Xcode でプロジェクトをカスタマイズした後に、プロジェクトエディターで再ビルドすると、カスタマイズ内容はすべて失われてしまいます！

## Xcodeとは？

Xcode は、macOS上で動く統合開発環境および付随する開発者ツールで構成されており、iPad・iPod・iPhone・macOS用のアプリを作成することができます。

## ダウンロード

最新版の Xcode は App Store からダウンロードできます。

<div className="center-button">
<a className="button button--primary" href="macappstore://itunes.apple.com/app/id497799835?mt=12">App Store を開く </a>
</div>

デベロッパー登録をすれば、Apple Developer のサイトから Xcode のプレビュー版や過去のバージョンをダウンロードすることもできます。


[Contact アプリ](../create-your-first-app) を使用しましょう。

スタータープロジェクトをダウンロード:

<div className="center-button">
<a
  className="button button--primary"
  href="#">
  ダウンロード
</a>
</div>

## ⒈ プロジェクトの作成

* まだプロジェクトをビルドしていないのであれ、2. に進んでください。
* すでにプロジェクトをビルドしたのであれば、3. に進んでください。

## ⒉ プロジェクトをビルドする

プロジェクトエディターのビルドタブを開きます:

* シミュレーターで起動するiOSデバイスのモデルを選びます。
* **ビルドして実行** ボタンをクリックします。

![ビルドして実行](img/build-and-run.png)

## ⒊ プロジェクトを Xcode で開く

プロジェクトエディターのビルドタブを開きます:

* プロジェクトボタンをクリックし、プロジェクトをXcodeで開く... を選択します。

![プロジェクトを Xcode で開く](img/Open-your-project-Xcode-4D-for-iOS.png)

これで、4D for iOS プロジェクトの作業を Xcode で続けることができます。