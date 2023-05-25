---
id: list-form-manifest
title: manifest.json
---

manifest ファイルには、ストーリーボードの **タイプ (type)** (リストフォーム "listform" あるいは詳細フォーム "detailform")・**名称 (name)**・**セル毎のフィールド数 (fields)** といった情報が記述されています。

```json
{
  "type": "listform",
  "name": "Custom List form",
  "fields": {
    "count": 3
  },
  "tags": {
    "___LISTFORMTYPE___": "Table"
  }
}

```

上記の manifest ファイルを解読すると、下記のことがわかります:

1. **type:** ストーリーボードのタイプ。この例では、"listform"
2. **name:** テンプレート名。この例では、"Custom List form"
3. **fields**: 各セルのフィールド数。この例では、3つのフィールド (プロフィール画像・タイトル・サブタイトル) が表示されます。
4. **tags**: "___LISTFORMTYPE___": リストフォームのタイプ。この例では "Table" (テーブル表示)
