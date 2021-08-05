---
id: overview
title: Generalidades
---


El editor de proyectos de 4D Mobile le permite diseñar, probar y construir sus proyectos móviles nativos para iOS y Android utilizando una interfaz gráfica. La ventana tiene dos pestañas: **Secciones** y **Generar**.

![General section](img/General-section-4D-for-iOS.png)

En la pestaña **Secciones**, encontrará todos los pasos necesarios para crear su aplicación móvil:

* General
* Estructura
* Datos
* Actions
* Etiquetas e iconos
* Main Menu
* Formularios
* Publishing

En la pestaña **Generar**, encontrará herramientas integradas para crear y probar su aplicación móvil:

* Build and Run
* Selección del simulador
* Navegador de proyecto y de producto
* Instalar

El editor de proyectos de 4D Mobile está disponible en el entorno de desarrollo de aplicaciones de **4D** (se requiere una licencia 4D Developer Pro).

Un proyecto móvil 4D está fuertemente vinculado a un modelo de datos 4D. Para poder crear o abrir un proyecto 4D mobile, debe abrir previamente la base de proyectos 4D asociada.


## Crear un proyecto móvil

Para crear un nuevo proyecto móvil:

1. Inicie su aplicación 4D y abra el proyecto 4D para el que desea crear un proyecto móvil.
2. Seleccione **Nuevo > Proyecto móvil** en el menú **Archivo** o en la barra de herramientas.

:::nota

Necesita una licencia 4D Developer Pro para abrir el editor 4D mobile.

:::

Se muestra la caja de diálogo de bienvenida:

![Project Name](img/new-project.png)

3. Give your project a name and click **Continue**.

The Mobile project editor is displayed and the mobile file architecture is automatically created in your 4D project.

## Opening a mobile project

To open a mobile project:

1. Start your 4D application and open the 4D project for which you want to open the mobile project.
2. Select **Open > Mobile Project** from the **File** or the toolbar menu.

The mobile project selection dialog box is displayed. It contains the list of mobile projects already defined for the current database:

![Project Name](img/select-project.png)

The icon on the left side indicates if the project was created for Android, iOS, or both.

3. Double-click on the project to open, or select the project and click **Open**.

### Open another project

The **Open another project...** link allows you to select any valid [`.4dmobileapp`](#mobile-project-architecture) file that is not listed in the dialog box.

:::warning

The selected mobile project must match the current data model, otherwise it will be updated and may not work as expected.

:::

## Deleting a mobile project

To delete a mobile project, just remove the mobile project folder from the 4D project folder.


## Mobile project architecture

Mobile projects are created inside the main 4D project folder:

- My4DProject (*main 4D project folder*)
    + Mobile Projects
        * MyMobileProject
            - project.4dmobileapp
            - *other files and folders*


