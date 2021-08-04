---
id: detail-form-template-manifest
title: Manifest.json
---

El archivo de manifiesto incluye información sobre la plantilla de formulario detallado, como el **tipo** Storyboard (formulario listado o formulario detallado), **el nombre** y **el número de campos estáticos**.


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

Por ejemplo, el archivo de manifiesto anterior incluye la siguiente información:



* **type:**storyboard type. In this example, "detailform"
* **name:**template name. In the this example, "Custom Detail form" below
* **renderer:** número de versión
* **hOffset:** vertical offset of the first field that is going to be duplicated. In this example, 91 pixels from the top.
* **fields**: number of static fields. In this example, 1 static field and 0 for infinite duplicated fields (a header image, and duplicated fields)
* **Icon properties:** Icon width and height (16 px)

