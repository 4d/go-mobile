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

3. De un nombre a su proyecto y haga clic en **Continuar**.

Se muestra el editor de proyectos móviles y se crea automáticamente la arquitectura de archivos móviles en su proyecto 4D.

## Abrir un proyecto móvil

Para abrir un proyecto móvil:

1. Inicie su aplicación 4D y abra el proyecto 4D para el que desea abrir el proyecto móvil.
2. Seleccione **Abrir > Proyecto móvil** en el menú **Archivo** o en la barra de herramientas.

Se muestra la caja de diálogo de selección del proyecto móvil. Contiene la lista de proyectos móviles ya definidos para la base de datos actual:

![Project Name](img/select-project.png)

El icono de la izquierda indica si el proyecto fue creado para Android, iOS o ambos.

3. Haga doble clic en el proyecto para abrirlo, o seleccione el proyecto y haga clic en **Abrir**.

### Abrir otro proyecto móvil

El enlace **Abrir otro proyecto...** permite seleccionar cualquier archivo [`.4dmobileapp`](#arquitectura-de-proyecto-móvil) válido que no aparezca en la caja de diálogo.

:::advertencia

El proyecto móvil seleccionado debe coincidir con el modelo de datos actual, de lo contrario se actualizará y podría no funcionar como se espera.

:::

## Eliminar un proyecto móvil

Para eliminar un proyecto móvil, basta con quitar la carpeta del proyecto móvil de la carpeta del proyecto 4D.


## Arquitectura de proyectos móviles

Los proyectos móviles se crean dentro de la carpeta principal del proyecto 4D:

- My4DProject (*carpeta principal del proyecto 4D*)
    + Proyectos móviles
        * MyMobileProject
            - project.4dmobileapp
            - *otros archivos y carpetas*


