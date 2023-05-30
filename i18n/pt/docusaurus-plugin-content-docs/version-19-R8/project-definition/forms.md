---
id: forms
title: Formulários
---

A página Formulários lhe permite selecionar os modelos de formulário Lista e de formulários detalhados para cada tabela publicada. Pode selecionar um formulário lista e um formulário detalhado por tabela publicada.

O editor móvel 4D oferece vários modelos com efeitos de transição personalizados para gerar aplicações móveis novas e modernas. Os modelos simples e vazios são usados de forma pré-determinada para os formulários Lista e os formulários de detalhados de uma aplicação.

Aqui está o detalhamento da tela, de cima para baixo:

* **Os formulários lista e os formulários detalhados:** permitem mudar entre definições de  formulários Lista e  formulários detalhados para cada tabela.
* **Tabelas publicadas:** Exibe todas as tabelas publicadas na seção  [Structure](structure.md)
* **Formularios:** lista de formularios disponibles. Permite  mudar entre a seleção de modelos e definição de conteúdos. Na área de definição de conteúdos se pode exibir dicas que oferecem informações adicionais nos campos de formulário.


![List form template selection](img/Forms-section-templates-selection-4D-for-iOS.png)



## Formulários Lista

Quando seleciona um modelo de formulário lista para uma tabela, a tela de definição de conteúdo aparece. Depois pode arrastar e soltar os campos da lista diretamente no modelo mostrado à direita.

![List form content definition](img/Forms-section-content-definition-4D-for-iOS.png)

:::nota

Nos formulários lista não é possível adicionar mais campos do que aqueles incluídos no modelo.

:::

A maioria dos formulários lista incluem campos opcionais de **Search** e **Section**. Também pode ativar o  **escaneador de código de barra**.


### Pesquisa

Um campo de**pesquisa** permite filtrar dinamicamente a lista de conteúdos dependendo dos caracteres digitados.

#### Pesquisa multicritério

Pode soltar mais de um campo no campo de pesquisa - nesse caso o campo vai mostrar "Pesquisa multicriterio":

![multi-criteria](img/multi-criteria.png)

Nesse caso, o app vai pesquisar por caracteres digitados em todos os campos usando o operador "OR". Para remover um campo da lista, clique no botão apagar do campo de pesquisa para selecionar os campos a serem removidos:

![multi-criteria remove](img/multi-criteria-search-forms-section-remove-fields.png)


### Seções

Um campo de seção vai agrupar e ordenar entidades na lista dependendo de seu valor para esse campo.



### Escaner de código de barras

Para ativar a pesquisa por código de barra, clique na lupa do lado do campo pesquisa e selecionea opção **Ativar escaner de código de barras**.

![Barcode Search activation](img/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

A pesquisa de código de barras permite duas funcionalidades:

* Filtrar um formulário lista escaneando um código de barras que contenha um valor texto. Isso preenche a Barra de Pesquisae abre o formulário detalhado se houver apenas um valor após a filtragem.
* Exibir formulários lista e detalhado apenas com o escaneamento de códigos de barras cujos valores são **URL Schemes** or **Universal Links** quando a funcionalidade [**deep linking**](../special-features/deep-linking.md) estiver ativada.

![Barcode Search app](img/text-Qrcode-barcode-search-4D-for-iOS.gif)

:::informação 4D for Android

This feature is currently not available in 4D for Android.

:::

## Formulários detalhados

![Detail form template selection](img/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

As with the List Form definition, select a template and configure the fields. In detail forms, you can add as many fields as you want onto your detail form.

You have several ways to add your fields in Detail forms:

* Pode arrastar e soltar os campos em qualquer parte na vista SVG para adicionar e exibir logo depois que o último campo tenha sido adicionado ou entre qualquer outros campos que já são exibidos.

* Dê duplo-clique no campo. Seu campo será adicionado ao final da lista.

* Dê um clique direito no campo disponível na tabela Campos à esquerda e selecione **Adicionar campos que faltam** do menu contextual.

![Detail form content definition](img/Forms-section-detail-form-content-definition-4D-for-iOS.png)


You can reorder your fields at any moment using drag and drop in the detail form.

:::dica

If you want to try another template after dispatching your fields, just select it: previously selected fields are automatically moved for you to the new template in appropriate areas, according to the template and field types.

:::


## Galería

When you select a template in the form section, a "More" icon is available for both list and detail forms.

![More template button](img/more.png)

![More template button](img/Forms-more-button.png)

Just click on that icon to display a list of additional templates from the 4D mobile Gallery:

![Template picker more button](img/Forms-template-gallery.png)

Then, the only thing you have to do is selecting the template that suits your needs and the mobile editor will handle all the installation process. So you can directly start working on the template, as it is ready-to-use.

A github icon is displayed at the top left of a template icon in the Forms template picker to indicate that it comes from Github:

![Add template from gallery](img/indicator-template-github.png)


:::dica

The Gallery is also directly available on Github.
- [**galeria de modelos para formulários lista**](https://4d-for-ios.github.io/gallery/#/type/list-detail/picker/0)
- [**galeria de modelos para formulários detalhados**](https://4d-for-ios.github.io/gallery/#/type/form-detail/picker/0)

:::

## Criar seus modelos

If you want to customize a downloaded template or create your own templates, **several tutorials** can guide you through these tasks:

- [**Personalizar um formulário modelo**](../tutorials/gallery/update-gallery-template.md)
- [**Criar formulários lista**](../tutorials/creating-list-forms/list-form-template.md)
- [**Criar formulários detalhados**](../tutorials/creating-detail-forms/detail-form-template.md)