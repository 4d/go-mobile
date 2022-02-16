---
id: create-kotlin-formatter
title: Create Kotlin formatter
---

> **OBJECTIVES**
>
> Create your first data formatters.


## Object attribute Kotlin formatter


### On iOS:

Here is an example of a **manifest.json file**:

```4d
{
    "name": "objectFormatter",
    "binding": "objectAddress",
    "type": "object" 
	"target" : ["ios", "android"]
}

```

To get the number, the street, and the city, let’s build a custom **Swift formatter**:

```4d 
//
//  UILabel+phone.swift
//  ___PACKAGENAME___
//
//  Created by ___FULLUSERNAME___ on ___DATE___
//  ___COPYRIGHT___
import UIKit
import QMobileUI

extension UILabel {

    @objc dynamic public var phoneAction: String? {
        get {
            return self.text
        }
        set {
            self.text = newValue
            if let newValue = newValue,
                let tap = ApplicationOpenAppBeta.openMenuActionTagGesture(text: newValue, kind: .phone) {
                self.isUserInteractionEnabled = true
                self.addGestureRecognizer(tap)
                return
            }
            self.isUserInteractionEnabled = false
        }
    }
}
```

Putting all that together, you can save this formatter as a **.swift** file in the formatter folder and use it in your mobile project.



Check out the final result:




### On Android

If you want a formatter that will dial a phone number value on click, we will have the following **manifest file** containing a `name`, a `binding`,a `type` and a `target`:

```4d
{
    "name": "phone",
    "binding": "phoneAction",
    "type" : "text",
    "target" : ["ios", "android"]
}
```

Note that the binding value "phoneAction" will be used in the Kotlin file and that the `BindingAdapter` will interact with a specific field in an Android XML layout.

:::note

You can add several Android/iOS specifications to your app and specify them in your *manifest.json* file.
For instance, to add a specific permission to your app, you can add a `capabilities` block as follows:

 ```4d
 "capabilities" : {
        "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]
```

::: 

Here is the `PhoneAction.kt` file to dial a phone number value on click :

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
Putting all that together, you can save this formatter as a **.kt** file in the formatter folder and use it in your mobile project.

![Architecture](img/phoneAction_dir.png)

Check out the final result:

![Final result](img/rendu-android.png) 

Don't hesitate to give us feedbck on the 4D Forum, and check out the documentation for more details!