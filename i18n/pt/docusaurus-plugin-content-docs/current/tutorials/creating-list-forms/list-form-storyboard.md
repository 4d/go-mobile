---
id: list-form-storyboard
title: iOS Storyboard
---

Now it's time to create your iOS list form interface with Xcode.

Aqui está o resultado que queremos atingir:

![Storyboard custom listform](img/storyboard-custom-listform.png)

Para cada célula, vamos adicionar:

* Imagem de perfil
* Title
* Subtítulo

## Abrir o arquivo storyboard com Xcode

Primeiro, abra seu arquivo storyboard em Xcode.

![Empty storyboard custom template](img/empty-storyboard-custom-template.png)

It's quite empty, so let's add some content!

## Add an Image View

A partir da **Object library**(biblioteca de objetos), arraste e solte uma  **Image View** (vista de imagem) em uma célula. Pode pesquisar uma "Image View" na barra de pesquisas na parte inferior da biblioteca de Objetos

![Add Image View storyboard](img/add-imageview-storyboard.png)

A partir do **Size inspector panel** (do lado direito da janela Interface Builder), defina a largura da Imagem View para 110 e a Altura para 110. Depois defina o valor X como 8 e o valor Y para 3.

![Image View position height and width](img/imageview-position-height-width.png)

Agora, adicione uma restrição (Leading: 8) clicando no botão **Add New Constraints** (na parte inferior da janela Interface Builder). Adicione as restrições de largura e altura, como mostrado:

![Image View leading space width height](img/imageview-leading-space-width-height.png)

Clique no botão **Align** (na parte inferior do Interface Builder) e marque a opção "Vertically in Container".

![Image View align vertically](img/imageview-align-vertically.png)

Your Image View is now well positioned.

![Image View final](img/imageview-final.png)

Agora vamos trabalhar nas etiquetas de células.

## Adicione etiquetas de título e subtítulo

Comecemos por **agregar uma vista**. Pesquise por "View" na **Biblioteca de objetos** e arraste a Vista ao cell container.

![Add View Storyboard](img/add-view-storyboard.png)

A partir do painel**Size inspector** (no lado direito do Interface Builder), estabeleça o valor da Largura para 277 e altura para 94. Estabeleça X para 126 e Y para 10.

![View position height and width](img/view-position-height-width.png)

Na  Image View, adicione quatro restrições clicando no botão **Add New Constraints** (Trailing: 11, Leading: 8, Top: 11 e Bottom: 10.67) para posicioná-la corretamente como mostrado abaixo:

![View contraints Storyboard](img/view-constraints-storyboard.png)

Arraste e solte uma etiqueta na Vista que acaba de agregar desde a Biblioteca de Objetos.

![Add label Storyboard](img/add-label-storyboard.png)

Desde o painel **Size inspector**, defina o valor de largura de etiqueta para 269 e a Largura em 32. Depois estabeleça o valor de X para 8 e Y para 8

**Duplique a etiqueta** e no painel **Size inspector**, defina o valor X para 8 e o valor Y para 48.

![Duplicate the label](img/duplicated-label-storyboard.png)

Selecion ambas as etiquetas e adicione quatro restrições clicando no botão **Add New Constraints** (Trailing: 0, Leading: 8, Top: 8, e Bottom: Multiple) como mostrado:

![Duplicate the label](img/labels-contraints-storyboard.png)

Com a etiqueta selecionada, dê um duplo-clique em **Height constraint** para começar a edição.

![Label height constraint edition](img/label-height-constraint-edition.png)

Mude a relação de  Equal para **Greater Than or Equal** para que tenha uma altura variável (para manejar etiquetas multilinhas).

![Change relation label height constraint](img/change-relation-label-height-constraint.png)

Repita o processo para a segunda etiqueta.

## Label customization

Desde o Inspetor de atributos (do lado direito da janela Interface Builder), é possível personalizar as cores de fonte de sua etiqueta. Vamos fazer a segunda etiqueta com a cor **Dark Grey Color** :

![Label color dark grey](img/label-color-dark-grey.png)

Também pode selecionar a cor dominante para seu app:

![Label color background color](img/label-color-background-color.png)

Do inspetor de atributos, também pode personalizar a fonte. Seleccione as duas etiquetas e selecione Font > Custom > **Helvetica Neue**:

![Label font custom](img/label-font-custom.png)

Para completar a personalização, selecione ambas as etiquetas e **ingresse o valor 0 em Lines** na janela do Inspetor. Isso permite que o número de linhas seja ilimitado.

![Label lines number](img/label-lines-number.png)

:::note

The provided storyboard is optimized to have a **variable cell height** depending on the contents of each cell.

:::

![Row height tableview cell](img/row-height-tableview-cell.png)

## Como entrar os dados em suas células

### Image View

Selecione sua Image View e vá para **Identity inspector** > User Defined Runtime Attributes. Clique no ** botão+** para adicionar uma linha.

![User defined runtime attributes](img/user-defined-runtime-attributes.png)

* **Key Path**: comece com bindTo para ativar a união do componente. Introduza `bindTo.record.___FIELD_1___`

* **Type**: siempre `String`

* **Value**: nome do atributo. Introduza `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](img/identity-inspector-storyboard.png)

### Etiquetas

Select the first label and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Type**: siempre `String`

* **Valor**: `___FIELD_2_BINDING_TYPE___`

![Field 2 Binding](img/field-2-binding.png)

Select the second label and add a row in the Defined Runtime Attributes:

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Type**: siempre `String`

* **Valor**: `___FIELD_3_BINDING_TYPE___`

![Field 3 Binding](img/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility:

* Dê duplo clique na primeira etiqueta para entrar `___FIELD_2_LABEL___`
* Dê duplo clique na segunda etiqueta para editar e digitar `___FIELD_3_LABEL___`

![Storyboard label display names](img/storyboard-label-display-name.png)

Go to your project editor, select your list form template from the Forms section, then select Build and Run.

Here is the simulator result :

![Simulator result](img/simulator-result.png)

## Personalize seu app

The last step is adding a corner radius to the Image View to have a better design.

Selecione seu Image View e adicione as duas linhas abaixo noa área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

e

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: selecione a caixa de opção

![ImageView corner Radius](img/imageview-corner-radius.png)

Agora pode construir seu projeto no editor de projetos!

![Custom template final result](img/custom-template-final-result.png)

## Where to go from here?

In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build [detail form templates](../creating-detail-forms/detail-form-template.md).

Download the completed template list folder:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip">Download</a>
</div>




