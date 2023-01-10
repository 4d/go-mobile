---
id: detail-form-template-manifest
title: manifest.json
---

manifest ファイルには、ストーリーボードの **タイプ (type)** (リストフォーム "listform" あるいは詳細フォーム "detailform")・**名称 (name)**・**静的フィールド数 (fields)** といった情報が記述されています。


```json
{
  "type": "detailform",

  "name": "Custom Detail form",
  "renderer": 2,  
  "hOffset": 91, 
  "fields": {
    "count": 1, 
    "max": 0
 },

  "assets": {
    "size": {
      "width": 16,
      "height": 16
    }
  }
}

```

上記の manifest ファイルを解読すると、下記のことがわかります:



* **type:** ストーリーボードのタイプ。 この例では、"detailform"
* **name:** テンプレート名。 この例では、"Custom Detail form"
* **renderer:** バージョン番号
* **hOffset:** 複製される最初のフィールドの垂直オフセット。 この例では、上から 91ピクセル。
* **fields**: 静的フィールドの数。 この例では、静的フィールド (ヘッダー画像) が 1 と、無限の複製フィールドが 0
* **アイコンのプロパティ:** アイコンの幅と高さ (16px)

