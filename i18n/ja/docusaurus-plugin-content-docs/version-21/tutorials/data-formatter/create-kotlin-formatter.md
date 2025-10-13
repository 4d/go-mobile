---
id: create-kotlin-formatter
title: Kotlin フォーマッターを作成する
---

> **目標**
> 
> 最初の Kotlin フォーマッターを作成します。

フォーマッターは、Kotlin と [Swift](create-swift-formatter.md) 両方のコードで構成することができます。

## オブジェクト属性用 Kotlin フォーマッター

クリック時に電話番号をダイヤルできるようにするフォーマッターを作成するには、次のように `name`、`binding`、`type`、および `target` の値を含む **manifest.json file** が必要です:

```4d
{
    "name": "phone",
    "binding": "phoneAction",
    "type": "text" 
    "target" : ["ios", "android"]
}

```

binding の値 "phoneAction" は Kotlinファイルで使用され、`BindingAdapter` が Android XML レイアウトの特定のフィールドと対話します。

Android で電話番号をクリックするとダイヤルするための `PhoneAction.kt` ファイルは以下のとおりです:

```4d
package ___PACKAGE___

import android.content.Intent
import android.net.Uri
import android.widget.TextView
import androidx.databinding.BindingAdapter

@BindingAdapter("phoneAction")
fun phoneAction(view: TextView, phoneAction: String?) {
    if (phoneAction.isNullOrEmpty()) return
    view.text = phoneAction
    view.setOnClickListener {
        val dialIntent = Intent(Intent.ACTION_DIAL)
        dialIntent.data = Uri.parse("tel:$phoneAction")
        view.context.startActivity(dialIntent)
    }
}
```
これらをまとめて、このフォーマッターを **.kt** ファイルとしてフォーマッターフォルダーに保存すれば、モバイルプロジェクトで使用することができます。

![アーキテクチャー](img/phoneAction_dir.png)

このような結果になります:

![最終結果](img/rendu-android.png)
