---
id: detail-form-template-manifest
title: Manifest.json
---

The manifest file includes information about your detail form template,  such as the storyboard **type** ("listform" or "detailform"), **name**, and **number of static fields**.


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

For example, the above manifest file includes the following information:



* **type:**storyboard type. In this example, "detailform"
* **name:**template name. In the this example, "Custom Detail form" below
* **renderer:** version number
* **hOffset:** vertical offset of the first field that is going to be duplicated. In this example, 91 pixels from the top. 
* **fields**: number of static fields. In this example, 1 static field and 0 for infinite duplicated fields (a header image, and duplicated fields)
* **Icon properties:** Icon width and height (16 px)

