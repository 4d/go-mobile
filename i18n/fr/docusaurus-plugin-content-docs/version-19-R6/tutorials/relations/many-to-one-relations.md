---
id: many-to-one-relations
title: Many to One relations
---


Grâce à ce tutoriel, vous pourrez facilement inclure des liens N vers 1 dans vos projets mobiles.

:::note

Dans ce tutoriel, nous allons utiliser les noms des liens reliant vos tables. En attribuant des noms de liens descriptifs, vous simplifierez la structure de votre projet.

:::

Commençons par télécharger le Projet Starter :

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">Projet Starter</a>
</div>

Here we want to display the category for each task in the detail form of your generated app. To do so, open the **StarteriOSProject** from **Open > Mobile Project...**

Accédez directement à la section Structure, puis sélectionnez la **table Tasks**.

### Structure section

* Vous pouvez constater que le **lien TaskCategory** est souligné

* En cliquant dessus, vous afficherez les champs disponibles à travers ce lien

* Sélectionnez le **champ Name**

![Sélectionnez le lien à partir de la section Structure](img/select-link-from-structure.png)

* Ce champ aura le même fonctionnement que n’importe quel autre champ pour la suite de la création de l’application

* Vous pouvez également filtrer le contenu de votre application à l’aide des champs liés, à partir de la section Données. To do so enter `TaskCategory.Name != 'Personal'` in the Filter query field to exclude personal tasks.

 ![Champs liés depuis la section Données](img/Related-field-from-Data-section.png)

* Vous pouvez ensuite sélectionner une **icône** et des **formats** et définir des **libellés courts et longs** dans la section Libellés et icônes

![Related field from Labels and Icons section](img/related-field-from-labels-icons.png)

* Cliquez sur la section Formulaires et faites glisser le champ dans le formulaire détaillé Tasks

![Related field in Forms section](img/related-field-forms.png)

* Build and Run

Votre champ lié devrait apparaitre dans le formulaire détaillé de votre application !

![Related field in Forms section](img/final-result-n-to-one-relations.png)

