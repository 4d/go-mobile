---
id: many-to-one-relations
title: Many to One relations
---


Este tutorial vai mostrar como é fácil incluir relações Muitos para Um em seu projeto móvel.

:::nota

Neste tutorial, vamos usar os nomes das relações entre suas tabelas. Dar nomes de relação bem descritivos ajuda a facilitar a definição de sua estrutura de projeto.

:::

Vamos começar baixando o Projeto Starter:

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">Starter project</a>
</div>

Aquí queremos mostrar la categoría de cada tarea en el formulario detallado de su aplicación generada. Para fazer isso, abra **StarteriOSProject** from **Open > Mobile Project...**

Depois vá para a seção Estrutura e selecione a **tabela Task**.

### Structure section

* Pode verificar que a **relação TaskCategory** está sublinhado

* Ao clicar nele, serão mostrados os campos disponíveis através dessa relação.

* Selecione o  **campo Name**

![Select link from structure section](img/select-link-from-structure.png)

* Este campo funcionará como qualquer outro campo durante o resto do processo de criação da aplicação

* Pode também filtrar seu conteúdo de app usando campos relacionados da seção Data. Para fazer isso digite `TaskCategory. Name != 'Personal'` no campo Filter query para excluir as tarefas pessoais.

 ![Related field from Data section](img/Related-field-from-Data-section.png)

* Então pode selecionar um **ícone** assim como **formatadores** e definir **etiquetas curtas e longas** na seção Etiquetas e Ícones

![Related field from Labels and Icons section](img/related-field-from-labels-icons.png)

* Vá para a seção Formulários e arraste o campo no formulário detalhado Tasks

![Related field in Forms section](img/related-field-forms.png)

* Build and Run

Seu campo relacionado deve aparecer no formulário detalhado do app!

![Related field in Forms section](img/final-result-n-to-one-relations.png)

