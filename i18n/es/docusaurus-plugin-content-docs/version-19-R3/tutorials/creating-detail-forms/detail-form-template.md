---
id: detail-form-template
title: Plantillas de formulario detallado
---


En este tutorial, lo guiaremos en la creación de varios ejemplos de plantilla de formulario detallado. Se mostrará un **encabezado de imagen **, así como también **los campos de título y contenido** que se duplicarán en las aplicaciones iOS y Android generadas.

![Custom template final result](img/custom-template-final-result.png)

## Descargue el proyecto Starter

Para comenzar, descargue el **proyecto Starter**, que incluye:

* Una carpeta **Custom Detail form** (Carpeta de plantilla personalizada de formulario detallado)
* Un proyecto de demostración en 4D ("Contact") con un proyecto de aplicación móvil listo para usar.

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip">Starter project</a>
</div>

## Añada una plantilla de formulario detallado a su proyecto móvil

Primero, cree una carpeta *Contact.4dbase/Resources/Mobile/form/detail* y arrastre y suelte la carpeta **Custom Detail form** en ella.

![Mobile folder custom template](img/mobile-folder-custom-template.png)

Ahora, inicie su aplicación 4D y abra el proyecto 4D "Contact". A continuación, seleccione el proyecto móvil "Contact Demo App": **Archivo > Abrir > Proyecto móvil > App Demo Contact**.

En la **sección Formulario** en el editor del proyecto, puede ver que su plantilla de formulario detallado se ha agregado exitosamente a la lista de plantillas de formularios detallados disponibles:

![Forms section](img/custom-detailform-template.png)

Ahora vamos a centrarnos en el contenido de la carpeta **Formulario detallado personalizado**.

## La carpeta de plantillas de formulario detallado y su contenido

En esta carpeta, encontrará:

* Un icono **a layoutIconx2.png** de 160x160px: mostrado en el editor del proyecto cuando seleccione su plantilla personalizada entre otras
* Un archivo **a manifest.json**: incluye una descripción básica de la plantilla
* Un archivo **template.svg**: la representación de su plantilla que se mostrará cuando defina el contenido de su formulario detallado y dónde arrastrará y soltará sus campos
* una carpeta **ios** que incluye el storyboard (interfaz gráfica) y el archivo **Swift** (código del formulario) en la carpeta `Source > Forms > Tables 'TABLE'`
* una **carpeta android** que incluya el archivo layout.xml (interfaz gráfica) en la carpeta `app > src > main > res > layout`.

Estos archivos y carpetas se detallan en las siguientes secciones.