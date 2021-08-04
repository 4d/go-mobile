---
id: many-to-one-relations
title: Many to One relations
---


This tutorial will show you how easy it can be to include Many to one relations in your mobile projects.

:::nota

In this tutorial, we will use the relation names between your tables. Giving descriptive relation names can make your project structure definition easier.

:::

Let's get started by downloading the Starter project:

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">Starter project</a>
</div>

Here we want to display the category for each task in the detail form of your generated app. To do so, open the **StarteriOSProject** from **Open > Mobile Project...**

Then go right to your Structure section and select the **Task table**.

### Structure section

* Pode verificar que a **relação TaskCategory** está sublinhado

* Ao clicar nele, serão mostrados os campos disponíveis através dessa relação.

* Selecione o  **campo Name**

![Select link from structure section](img/select-link-from-structure.png)

* Este campo funcionará como qualquer outro campo durante o resto do processo de criação da aplicação

* You can also filter your app content using related fields from the Data section. To do so enter `TaskCategory.Name != 'Personal'` in the Filter query field to exclude personal tasks.

 ![Related field from Data section](img/Related-field-from-Data-section.png)

* Então pode selecionar um **ícone** assim como **formatadores** e definir **etiquetas curtas e longas** na seção Etiquetas e Ícones

![Related field from Labels and Icons section](img/related-field-from-labels-icons.png)

* Vá para a seção Formulários e arraste o campo no formulário detalhado Tasks

![Related field in Forms section](img/related-field-forms.png)

* Build and Run

You should see your related field in your app detail form !

![Related field in Forms section](img/final-result-n-to-one-relations.png)

