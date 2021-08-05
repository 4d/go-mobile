---
id: detail-form-template-svg
title: Template.svg
sidebar_label: Template.svg
---

O arquivo `template.svg` é uma representação básica de modelo. No arquivo svg precisa definir áreas para poder adicionar campos em seu modelo de formulário detalhado desde o editor de projeto.

Aqui está a versão terminada:

![Template svg file](img/detailform-template-svg-file.png)

Este modelo tem numeração de campos dinâmicos, o que significa que este modelo vai permitir que adicione uma **imagem** e que possa colocar **quantos campos** precisar. Quando construir seu formulário detalhado na seção Formulários e arrastar e soltar um campo, um novo campo vazio aparece abaixo do campo anterior para adicionar um novo campo:

![Template svg file](img/detailform-dynamic-field-number.png)

```
![Template svg file](assets/en/custom-detailform/detailform-dynamic-field-number.png)
```

Vamos focar nas diferentes partes de seu arquivo SVG e o que vai precisar para editar.

## Title

```xml
<title>Custom Detail form</title>
```

Adicione o título para seu modelo aqui.

## Posição, altura, largura e tipo da área
Pode definir a posição, a altura e a largura de todos seus campos. Esse processo é o mesmo que [que se usa para os formulários de lista personalizados](../creating-list-forms/list-form-svg-file.md#area-position-height-width-and-type).

### Propriedades de campo

```xml
//1
<g id="f" visibility="hidden" ios:dy="35">

//2
<rect class="bg field" x="14" y="0" width="238" height="30"/>

//3
<textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>

//4
<rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>

//5
<use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posição Y toda a área
2. Posição fundo, altura e largura da Área
3. Define a posição da área de texto e a largura
4. Define a posição, altura e largura do campo suspenso, assim como [**tipos de campo**](../creating-list-forms/list-form-svg-file.md#iostypes) aceitos (todos os tipos são aceitos nesse  exemplo)
5. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

### Área Image Field

```xml
//1
<g transform="translate(0,60)">

//2
<rect class="bg field" x="15" y="0" width="236" height="65"/>

//3
<path class="picture" transform="translate(10 0) scale(6)"/>

//4
<textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>

//5
<rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>

//6
<use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posição Y toda a área
2. Posição fundo, altura e largura da Área
3. Icone para mostrar uma imagem no imageField
4. Define a posição da área de texto e a largura
5. Define a posição, altura e largura dos campos soltáveis, assim como [**tipos de campos aceitos**](../creating-list-forms/list-form-svg-file.md#iostypes)
6. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

Agora que tem um **ícone**, uma **descrição básica do modelo** no arquivo manifest.json, e seus arquivos **svg **, vamos ver a parte divertida com Xcode!


:::tip

Para fazer com que a definição de tipo de campo seja mais fácil, 4D for iOS permite que inclua tipos de campo com  **valores positivos** e também excluir tipos de campos com **valores negativos**. Por exemplo, `ios:type="-3,-4"` permite que arraste e solte todos os campos exceto imagens e datas. Para incluir todos os tipos, apenas entre `ios:type="all"`.

:::
