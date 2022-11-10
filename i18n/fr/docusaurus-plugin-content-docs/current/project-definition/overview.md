---
id: overview
title: Overview
---


L'éditeur 4D Mobile Project vous permet de concevoir, tester et générer vos projets mobiles natifs pour iOS et Android à l'aide d'une interface graphique. La fenêtre a deux onglets : **Sections** et **Build**.

![General section](img/General-section-4D-for-iOS.png)

Dans l'onglet **Sections**, vous trouverez toutes les étapes nécessaires à la création de votre application mobile :

* Général
* Structure
* Données
* Actions
* Libellés et icônes
* Menu
* Forms
* Publishing

Dans l’onglet **Build**, vous trouverez des outils intégrés pour générer et tester votre application mobile :

* Build and Run
* Simulator selection
* Project and product browser
* Install

L'éditeur de projet 4D Mobile est disponible depuis l'environnement de développement de l'application **4D** (une licence 4D Developer Pro est exigée).

Un projet mobile 4D est fortement lié à un modèle de données 4D. To be able to create or open a 4D mobile project, you must open the associated 4D project database beforehand.


## Creating a mobile project

To create a new mobile project:

1. Start your 4D application and open the 4D project for which you want to create a mobile project.
2. Select **New > Mobile Project** from the **File** or the toolbar menu.

:::note

You need a 4D Developer Pro license to open the 4D mobile editor.

:::

The welcome dialog box is displayed:

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


