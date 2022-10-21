---
id: create-kotlin-input
title: Create Kotlin input control
---

> **OBJECTIFS**
> 
> Create a Kotlin input control.


In this tutorial, we want to create a Kotlin [input control](../../project-definition/actions/md#input-controls) that can get a phone number from a contact.


## Manifest file

First, we have to create a `manifest.json` file to register the input control in the app. The file contents:

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

The `PhoneContact.kt` file contains the logic to fetch the number of a contact on click. The file contents:

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

Note the following points:

- The `PhoneContact.kt` file must be located in the `inputControl` folder at the following path: *input-control-phoneContact/android/inputControlPhoneContact.kt*
- Our Kotlin input control must inherit from `BaseKotlinInputControl` interface.
- On the first line, keep this `___PACKAGE___` line. It will be used and replaced at project generation.
- The Kotlin input control main class is identified by the annotation `@KotlinInputControl` Once your app is generated, you will find your Kotlin input control in *Your App / app / src / main / java / com / your_company / your_app / inputcontrol / YourCustomInputControl.kt*



### Auto fill

The `autocomplete` variable sets if the Kotlin input control requires a click to call its `process()` method or if it should process as soon as created.


### Icon

If your Kotlin input control has an icon, override the method `getIconName()` as follows :

```kotlin

override fun getIconName(): String {
    return "call.xml" 
}

```

### Resource files

You are free to add any resource file to your Kotlin input control. Everything you put in a *res* folder under android folder will be copied to the generated app.

For example, your Kotlin `.kt` input control can make use of a resource in *res/drawable/your_resource.xml* , therefore your will need to have a your *resource.xml* file in *YourInputControl/android/res/drawable/your_resource.xml*.

:::info

[More about Android resources](https://developer.android.com/guide/topics/resources/providing-resources).

:::

### Permissions

You may need to add specific permissions to your app.

Add the following `capabilities` block in your `manifest.json` file:

```json
{
    ...
    "capabilities" : {
        "android" : [ "android.permission.READ_CONTACTS" ]
    }
}
```

There are registered permissions which you can simply define with the following:

```json
{
    ...
    "capabilities" : {
        "contacts": true,
        "location": true
    }
}
```

`contacts` setups `android.permission.READ_CONTACTS` permission. `location` setups `android.permission.ACCESS_COARSE_LOCATION` and `android.permission.ACCESS_FINE_LOCATION` permissions.

In order to ask user permission in your custom Kotlin input control, check out this code sample where we want the `READ_CONTACTS` permission:

```kotlin
(context as PermissionChecker?)?.askPermission(
    permission = android.Manifest.permission.READ_CONTACTS,
    rationale = "Permission required to read contacts" 
) { isGranted ->
    if (isGranted) {
        ...
    }
}
```

We offer access to `PermissionChecker` that will delegate to the `Activity` the permission request. The `rationale` string will be displayed in case of the user denies the permission request.


### ActivityResultController

We offer access to `ActivityResultController` that will delegate any `ActivityResultContracts` to `MainActivity`. For example, to get a contact from your phone contacts, use `ActivityResultContracts.PickContact()`.

```kotlin
(view.context as ActivityResultController?)?.launch(
    type = ActivityResultContracts.PickContact(),
    input = null,
    callback = contactPhoneNumberCallback
)
```

`ActivityResultContacts.PickContact()` is of `ActivityResultContract<Void?, Uri?>` type. It means it takes no input, and returns the chosen contact `Uri`. `ActivityResultContracts.TakePicture()` is of `ActivityResultContract<Uri, Boolean>` type. It means it takes an `Uri` to store the image and returns if success or not.

The available contracts can be found here: [`https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts`](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts).


We support the following types:

- `ActivityResultContracts.StartActivityForResult` of type `ActivityResultContract<Intent, ActivityResult>`
- `ActivityResultContracts.StartIntentSenderForResult` of type `ActivityResultContract<IntentSenderRequest, ActivityResult>`
- `ActivityResultContracts.RequestMultiplePermissions` of type `ActivityResultContract<Array<String>, Map<String, Boolean>>`
- `ActivityResultContracts.RequestPermission` of type `ActivityResultContract<String, Boolean>`
- `ActivityResultContracts.TakePicturePreview` of type `ActivityResultContract<Void?, Bitmap?>`
- `ActivityResultContracts.TakePicture` of type `ActivityResultContract<Uri, Boolean>`
- `ActivityResultContracts.CaptureVideo` of type `ActivityResultContract<Uri, Boolean>`
- `ActivityResultContracts.PickContact` of type `ActivityResultContract<Void?, Uri?>`
- `ActivityResultContracts.GetContent` of type `ActivityResultContract<String, Uri?>`
- `ActivityResultContracts.GetMultipleContents` of type `ActivityResultContract<String, List<Uri>>`
- `ActivityResultContracts.OpenDocument` of type `ActivityResultContract<Array<String>, Uri?>`
- `ActivityResultContracts.OpenMultipleDocuments` of type `ActivityResultContract<Array<String>, List<Uri>>`
- `ActivityResultContracts.OpenDocumentTree` of type `ActivityResultContract<Uri?, Uri?>`