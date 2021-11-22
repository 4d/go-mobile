---
id: adding-actions-template
title: Adicionar ações em modelos
---

> **OBJETIVOS**
> 
> Adicionar ações para modelos de formulários de Lista e formulários detalhados.

> **PRÉ-REQUISITOS**
> 
> Clique em`[here](prerequisites.html)` para ver o que necessita para  começar

Neste tutorial, veremos como é fácil **agregar ações a planilhas personalizadas**.

## PASSO 1. Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* 2 modelos personalizados formulários Lista (TaskList e TasksCollection)
* 1 modelo personalizado Formulário Detalhado (TasksDetails)
* um arquivo Tasks.4dbase

<div className="center-button">
<a class="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip">Baixar</a>
</div>

## PASSO 2. Adicione modelos personalizados para Projeto 4D for iOS

Primeiro, solte:

* as pastas de planilhas **TasksList** e **TasksCollection** na pasta *Tasks.4dbase/Resources/Mobile/form/list*

![Listform templates](img/Listform-templates.png)

* as pastas do modelo **TasksDetail** en *Tasks.4dbase/Resources/Mobile/form/detail *

![Detailform template](img/Detailform-template.png)

## PASSO 3. Adicione ações em formulários Lista

Há dois tipos de ações disponíveis:
* ações de Tabela
* ações de entidade

Primeiro vamos abrir o arquivo `list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.. Storyboard` .

### Adicione ações para o modelo personalizado TasksList

#### A. A. A. A. Adicionar uma Tag de ação de tabela

Selecione o **List form Controller** e adicione esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add table action tag](img/Add-table-tag-taskslist.png)


#### B. B. B. B. Adicionar uma Tag de ação de Entidade

Selecione a vista Animatable Table e adicione esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add entity action tag](img/Add-entity-tag-taskslist.png)

Seu modelo personalizado está pronto para exibir as ações!

Pode selecionar o modelo personalizado TaskList na **seção Formulários** e agregar os seguintes campos:

![Taskslist Forms section](img/listform-taskslist-forms-section.png)

Agora vamos agregar as etiquetas de ação ao modelo personalizado TasksCollection

### Adicionar ações para o modelo personalizado TasksCollection

Para fazer isso, abra o arquivo `list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm. Storyboard`.

#### A. A. A. A. Adicionar uma Tag de ação de tabela

O processo é similar ao processo do modelo personalizado TasksList

Selecione o **List form Controller** e adicione esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___TABLE_ACTIONS___`

![Add collection table action tag](img/Add-collection-table-tag-taskslist.png)

#### B. B. B. B. Adicionar uma Tag de ação de Entidade

Para as entidades, a forma de mostrar as ações é bastante diferente de TableView: a ação de deslizar não está adaptada a CollectionViews.

Para as vistas de coleção, a melhor maneira de mostrar as ações é utilizar um gesto de **pressão longo** nas células com as quais queira interagir.

Para isso, selecione a célula collectionView e agregue esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add collection entity action tag](img/Add-collection-entity-tag-taskslist.png)

Para otimizar a interação, pode agregar um efeito escalar com uma haptic feedback (que permite modular sutilmente vibrações em games) agregando a linha abaixo em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `touch.zoomScale`
* Type: `Number`
* Valor: `0,96` (adapte a relação de escala segundo o resultado que quiser obter)

Pode selecionar o modelo personalizado TasksCollection na **seção Formulários** e adicionar os campos abaixo:

![TasksCollection Forms section](img/listform-taskscollection-forms-section.png)


## PASSO 4. Adicionar as ações nos formulários Detalhados

Nos formulários detalhados, pode utilizar o **botão genérico** na barra de navegação ou **criar facilmente seu próprio botão de ação personalizado**. Em ambos os casos você tem que adicionar tags.

Para o botão genérico integrado na barra de navegação, selecione o Controlador e adicione esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag](img/Detail-form-action-navigationBar.png)

Em nosso tutorial, queremos construir nosso próprio botão genérico. Para isso, abra o arquivo Storyboard `detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard`.

Abra o arquivo, selecione o botão na parte inferior direita e agregue esta linha em **User Defined Runtime Attributes** (Identity inspector):

* Key Path: `actions`
* Type: `String`
* Value: `___ENTITY_ACTIONS___`

![Add detailform entity action tag custom action button](img/Detail-form-action-custom-action-Button.png)

Como pode ver, alguns botões visuais estão faltando no arquivo Storyboard. Pode encontrar estas imagens na planilha**carpeta Resources**. Serão incluídas no projeto durante o processo de build.

Por exemplo, para  **moreButton.imageset**:

![Template ressources](img/Template-Ressources.png)

Pode selecionar o modelo personalizado TasksDetail na **seção Formulários** e agregar os campos abaixo:

![TasksDetail Forms section](img/detailform-forms-section.png)

Parabéns, sua aplicação iOS Tasks agora está completa e inclui ações nos formulários Lista e detalhados.

![Template ressources](img/ListForm-entity-action-tableview.png)

Baixe o projeto terminado:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip">Baixar</a>
</div>


