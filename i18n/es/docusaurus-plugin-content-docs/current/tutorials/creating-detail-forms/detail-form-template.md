---
id: detail-form-template
title: Plantillas de formulario detallado
---


En este tutorial, lo guiaremos en la creación de varios ejemplos de plantilla de formulario detallado. It will display an **image header**, as well as **title and content fields** that will be duplicated in the generated iOS and Android Apps.

![Custom template final result](img/custom-template-final-result.png)

## Descargue el proyecto Starter

To begin, download the **Starter project**, which includes:

* Una carpeta **Custom Detail form** (Carpeta de plantilla personalizada de formulario detallado)
* A demo 4D project ("Contact") with a ready to use mobile app project.

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip">Starter project</a>
</div>

## Añada una plantilla de formulario detallado a su proyecto móvil

First, create a *Contact.4dbase/Resources/Mobile/form/detail* folder and drag and drop the **Custom Detail form** folder in it.

![Mobile folder custom template](img/mobile-folder-custom-template.png)

Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: **File > Open > Mobile Project > Contact Demo App**.

In the **Forms section** in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:

![Forms section](img/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## La carpeta de plantillas de formulario detallado y su contenido

In this folder, you will find:

* **a layoutIconx2.png** icon in 160x160px: displayed in the project editor when you select your custom template among others
* **a manifest.json** file: includes a basic description of the template
* **a template.svg** file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields
* an **ios folder** that includes the storyboard (graphical interface) and **Swift** file (code for the form) in `Source > Forms > Tables 'TABLE'` folder
* an **android folder** that includes the layout.xml file (graphical interface) in `app > src > main > res > layout` folder.

These files and folders are detailed in the next sections.