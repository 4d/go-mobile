---
id: create-kotlin-input
title: Kotlin入力コントロールを作成する
---

> **目標**
> 
> Kotlin の入力コントロールを作成します。


このチュートリアルでは、連絡先から電話番号を取得するための Kotlin の [入力コントロール](../../project-definition/actions.md#アクション入力コントロール) を作成します。

:::info

[この入力コントロールのすぐに使えるバージョン](https://github.com/4d-go-mobile/input-control-phoneContact) は、[入力コントロール Github ギャラリー](https://4d-go-mobile.github.io/gallery//#/type/input-control) からダウンロードすることができます。

:::

## Manifest ファイル

まずは、入力コントロールをアプリに登録するための `manifest.json` ファイルを作成します。 ファイルの中身:

```json title="Resources/Mobile/inputControls/input-control-phoneContact/manifest.json"
{
    "name": "phoneContact",
    "type" : "text",
    "target" : ["ios", "android"],
    "capabilities": {
        "android": [ "android.permission.READ_CONTACTS" ]
    },
}
```

## PhoneContact.kt

`PhoneContact.kt` ファイルには、クリック時に連絡先から電話番号を取得するためのロジックが含まれています。 ファイルの中身:

```kotlin title="Resources/Mobile/inputControls/input-control-phoneContact/android/inputControlPhoneContact.kt"
package ___PACKAGE___

import android.net.Uri
import android.provider.ContactsContract
import android.view.View
import androidx.activity.result.contract.ActivityResultContracts
import com.qmobile.qmobiledatasync.utils.BaseKotlinInputControl
import com.qmobile.qmobiledatasync.utils.KotlinInputControl
import com.qmobile.qmobileui.activity.mainactivity.ActivityResultController
import com.qmobile.qmobileui.activity.mainactivity.MainActivity
import com.qmobile.qmobileui.ui.SnackbarHelper
import com.qmobile.qmobileui.utils.PermissionChecker

@KotlinInputControl
class PhoneContact(private val view: View) : BaseKotlinInputControl {

    override val autocomplete: Boolean = false

    override fun getIconName(): String {
        return "call.xml" 
    }

    private lateinit var outputCallback: (outputText: String) -> Unit

    private val contactPhoneNumberCallback: (contactUri: Uri?) -> Unit = { contactUri ->
        contactUri?.let {
            (view.context as MainActivity?)?.apply {
                contentResolver.query(contactUri, null, null, null, null)?.let { cursor ->
                    if (cursor.moveToFirst()) {
                        val contactIdIndex = cursor.getColumnIndex(ContactsContract.Contacts._ID)
                        val hasPhoneIndex = cursor.getColumnIndex(ContactsContract.Contacts.HAS_PHONE_NUMBER)
                        val contactId = cursor.getString(contactIdIndex)
                        val hasNumber = cursor.getString(hasPhoneIndex)
                        if (Integer.valueOf(hasNumber) == 1) {
                            contentResolver.query(
                                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                                null,
                                ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = " + contactId,
                                null,
                                null
                            )?.let { numbersCursor ->
                                while (numbersCursor.moveToNext()) {
                                    val phoneNumberIndex =
                                        numbersCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)
                                    val phoneNumber = numbersCursor.getString(phoneNumberIndex)
                                    outputCallback(phoneNumber)
                                    break
                                }
                            }
                        } else {
                            SnackbarHelper.show(this, "No phone number found in contact")
                            outputCallback("")
                        }
                    }
                }
            }
        }
    }

    override fun process(inputValue: Any?, outputCallback: (output: Any) -> Unit) {
        (view.context as PermissionChecker?)?.askPermission(
            permission = android.Manifest.permission.READ_CONTACTS,
            rationale = "Permission required to read contacts" 
        ) { isGranted ->
            if (isGranted) {
                this.outputCallback = outputCallback
                (view.context as ActivityResultController?)?.launch(
                    type = ActivityResultContracts.PickContact(),
                    input = null,
                    callback = contactPhoneNumberCallback
                )
            }
        }
    }
}
```

次の点を確認しましょう:

- `PhoneContact.kt` ファイルは、次のパスにある `inputControl` フォルダー内になくてはなりません: *input-control-phoneContact/android/inputControlPhoneContact.kt*
- Kotlin 入力コントロールは、`BaseKotlinInputControl` インターフェースから継承しなければなりません。
- 先頭行では、`___PACKAGE___` 行を保持します。 この行は、プロジェクト生成時に使用され、置換されます。
- Kotlin入力コントロールのメインクラスは `@KotlinInputControl` のアノテーションにより識別されます。 アプリ生成後は、Kotlin入力コントロールは次の場所にあります: *Your App / app / src / main / java / com / your_company / your_app / inputcontrol / YourCustomInputControl.kt*



### 自動補完

`autocomplete` 変数によって、Kotlin入力コントロールの `process()` の実行にクリックを要求するか、即座に実行するかを指定します。


### アイコン

Kotlin入力コントロール用のアイコンがある場合、`getIconName()` メソッドを次のようにオーバーライドします:

```kotlin

override fun getIconName(): String {
    return "call.xml" 
}

```

### リソースファイル

Kotlin入力コントロールに任意のリソースファイルを追加できます。 android フォルダー下の *res* フォルダーに格納されているものはすべて生成されるアプリにコピーされます。

たとえば、Kotlin の `.kt` 入力コントロールは、*res/drawable/your_resource.xml* 内のリソースを使用できます。 そのため、*your_resource.xml* ファイルは、*YourInputControl/android/res/drawable/your_resource.xml* になくてはなりません。

:::info

[Android リソースについての詳細はこちら](https://developer.android.com/guide/topics/resources/providing-resources)。

:::

### 権限

アプリに対して特定の権限を追加する必要があるかもしれません。

これには、`manifest.json` ファイルに次の `capabilities` ブロックを追加します:

```json
{
    ...
    "capabilities" : {
        "android" : [ "android.permission.READ_CONTACTS" ]
    }
}
```

登録された権限は次のように定義できます:

```json
{
    ...
    (context as PermissionChecker?)?.askPermission(
    permission = android.Manifest.permission.READ_CONTACTS,
    rationale = "Permission required to read contacts" 
) { isGranted ->
    if (isGranted) {
        ...
```

`contacts` は `android.permission.READ_CONTACTS` の権限を設定します。 `location` は `android.permission.ACCESS_COARSE_LOCATION` および `android.permission.ACCESS_FINE_LOCATION` の権限を設定します。

カスタムの Kotlin入力コントロールについてユーザーに権限を要求するには、`READ_CONTACTS` 権限をリクエストする次のコードサンプルを参照ください:

```kotlin
(context as PermissionChecker?)?.askPermission(
    permission = android.Manifest.permission.READ_CONTACTS,
    rationale = "Permission required to read contacts" 
) { isGranted ->
    if (isGranted) {
        ...
    {
    ...
```

権限リクエストを `Activity` に任せるため、`PermissionChecker` へのアクセスを提供しています。 `rationale` の文字列は、ユーザーが権限リクエストを拒否したときに表示されます。


### ActivityResultController

あらゆる `ActivityResultContracts` を `MainActivity` に委譲する `ActivityResultController` を提供しています。 たとえば、電話の連絡先から 1件取得するには、`ActivityResultContracts.PickContact()` を使用します。

```kotlin
(view.context as ActivityResultController?)?.launch(
    type = ActivityResultContracts.PickContact(),
    input = null,
    callback = contactPhoneNumberCallback
)
```

`ActivityResultContacts.PickContact()` のタイプは `ActivityResultContract<Void?, Uri?>` です。 これは、入力を受け付けず、選択された連絡先の `Uri` を返すという意味です。 `ActivityResultContracts.TakePicture()` のタイプは `ActivityResultContract<Uri, Boolean>` です。 これは、画像を保存するための `Uri` を受け取り、成功したかどうかを返すという意味です。

利用可能な Contract についてはこちらを参照ください: [`https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts`](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts)。


次のタイプをサポートしています:

- `ActivityResultContracts.StartActivityForResult` (`ActivityResultContract<Intent, ActivityResult>` タイプ)
- `ActivityResultContracts.StartIntentSenderForResult` (`ActivityResultContract<IntentSenderRequest, ActivityResult>` タイプ)
- `ActivityResultContracts.RequestMultiplePermissions` (`ActivityResultContract<Array<String>, Map<String, Boolean>>` タイプ)
- `ActivityResultContracts.RequestPermission` (`ActivityResultContract<String, Boolean>` タイプ)
- `ActivityResultContracts.TakePicturePreview` (`ActivityResultContract<Void?, Bitmap?>` タイプ)
- `ActivityResultContracts.TakePicture` (`ActivityResultContract<Uri, Boolean>` タイプ)
- `ActivityResultContracts.CaptureVideo` (`ActivityResultContract<Uri, Boolean>` タイプ)
- `ActivityResultContracts.PickContact` (`ActivityResultContract<Void?, Uri?>` タイプ)
- `ActivityResultContracts.GetContent` (`ActivityResultContract<String, Uri?>` タイプ)
- `ActivityResultContracts.GetMultipleContents` (`ActivityResultContract<String, List<Uri>>` タイプ)
- `ActivityResultContracts.OpenDocument` (`ActivityResultContract<Array<String>, Uri?>` タイプ)
- `ActivityResultContracts.OpenMultipleDocuments` (`ActivityResultContract<Array<String>, List<Uri>>` タイプ)
- `ActivityResultContracts.OpenDocumentTree` (`ActivityResultContract<Uri?, Uri?>` タイプ)