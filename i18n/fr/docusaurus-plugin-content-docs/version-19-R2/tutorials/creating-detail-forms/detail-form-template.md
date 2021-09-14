---
id: detail-form-template
title: Modèles de formulaires détaillés
---


Dans ce tutoriel, nous vous guiderons dans la création d'un modèle de formulaire détaillé. Ce modèle affichera un **en-tête d'image** et **des champs titre et contenu** qui seront dupliqués dans les applications iOS et Android qui seront générés.

![Custom template final result](img/custom-template-final-result.png)

## Téléchargez le projet Starter

Pour commencer, téléchargez le **Projet Starter**, qui comprend :

* Un dossier **Custom Detail form** (dossier contenant le modèle personnalisé du formulaire détaillé)
* A demo 4D project ("Contact") with a ready to use mobile app project.

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip">Projet Starter</a>
</div>

## Ajoutez un modèle de formulaire détaillé à votre projet mobile

Créez d'abord un dossier *Contact.4dbase/Resources/Mobile/form/detail* dans lequel vous glisserez et déposerez le dossier **Custom Detail form**.

![Mobile folder custom template](img/mobile-folder-custom-template.png)

Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: **File > Open > Mobile Project > Contact Demo App**.

In the **Forms section** in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:

![Forms section](img/custom-detailform-template.png)

Now let's focus on the **Custom Detail form** folder content.

## Le dossier du modèle de formulaire détaillé et son contenu

Dans ce dossier, vous trouverez :

* Une icône **layoutIconx2.png** d'une résolution de 160x160px, qui sera affichée dans l'éditeur de projet lorsque vous sélectionnerez votre modèle personnalisé
* Un fichier **manifest.json**, qui contient une description simple du modèle
* **a template.svg** file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields
* an **ios folder** that includes the storyboard (graphical interface) and **Swift** file (code for the form) in `Source > Forms > Tables 'TABLE'` folder
* an **android folder** that includes the layout.xml file (graphical interface) in `app > src > main > res > layout` folder.

These files and folders are detailed in the next sections.