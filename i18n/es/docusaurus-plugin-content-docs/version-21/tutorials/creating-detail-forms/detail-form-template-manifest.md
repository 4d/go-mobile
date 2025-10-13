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



* **tipo:**tipo storyboard. En este ejemplo, "detailform"
* **nombre:**nombre de la plantilla. En este ejemplo, "Formulario detallado personalizado" a continuación
* **renderer:** número de versión
* **hOffset:** desplazamiento vertical del primer campo que se va a duplicar. En este ejemplo, 91 píxeles desde la parte superior.
* **campos**: número de campos estáticos. En este ejemplo, 1 campo estático y 0 para un infinito de campos duplicados (una imagen de encabezado y los campos duplicados)
* **Propiedades del icono: **ancho y alto del icono (16 px)

