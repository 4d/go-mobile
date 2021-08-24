---
id: list-form-svg-file
title: Template.svg
---

O arquivo  `template.svg` é uma representação visual básica de um modelo. Neste arquivo, precisa definir áreas para poder adicionar campos para seu modelo de formulário lista do editor de projeto.

Aqui está a versão terminada:

![Template svg file](img/template-svg-file.png)

Vamos focar nas diferentes partes de seu arquivo SVG e o que vai precisar para editar.

## Titulo

```xml
<title>Custom List form</title>
```

Título do modelo.

## ios:values

```xml
<text id="cookery" ios:values="search,section,f1,f2,f3"/>
```

Inclui IDs que definem suas áreas formulário:

* **search **: Refere a área campo pesquisa. Isso permite que arraste e solte um campo como um critério de pesquisa em seu formulário lista (opcional).
* **section **: Refere a àrea campo da seção. Isso permite que arraste e solte um campo como o critério de ordenação em seu formulário lista (opcional).
* **f1, f2 and f3 **: Refere aos campos a exibir em cada célula do formulário lista. Isso permite que arraste e solte campos para aparecer em suas células de formulário lista.

## Posição, altura e largura da área

Pode definir a posição, altura e largura para:

* Campo de pesquisa
* Sectionfield
* Outros campos gerais que serão exibidas em cada célula tabela

### Área searchableField:

```svg
//1
<g transform="translate(0,60)”>

//2
<rect class="bg field" x="14" y="12" width="238" height="30”/>

//3
<path class="magnifyingGlass" transform="translate(20,8) scale(1)”/>

//4
<textArea id="search.label" class="label" x="14" y="8" width="238"/>

//5
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"  ios:bind="searchableField"/>

//6
<use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posição Y toda a área
2. Posição fundo, altura e largura da Área
3. Ícone para exibir um ícone lupa no campo de pesquisa
4. Define a posição da área de texto e a largura
5. Define a posição, altura e largura dos campos soltáveis, assim como [**tipos de campos aceitos**](#iostypes)
6. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

O campo pesquisável é opcional.


### Área SectionField:

```svg
//1
<rect class="bg field" x="10" y="110" width="246" height="30”/>

//2
<textArea id="section.label" class="label" x="0" y="118" width="250"/>

//3
<rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField”/>

//4
<use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>
```

1. Posição, altura e largura da Área de fundo
2. Define a posição da área de texto e a largura
3. Define a posição, altura e largura dos campos soltáveis, assim como [**tipos de campos aceitos**](#iostypes)
4. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

O campo de seção é opcional.

### Área ImageField:

```svg
//1
<g transform="translate(0,162)">

//2
<rect class="bg field" x="14" y="0" width="60" height="65"/>

//3
<path class="picture" transform="translate(-60 0) scale(5)"/>

//4
<textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>

//5
<rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>

//6
<use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posição Y toda a área
2. Posição, altura e largura da Área de fundo
3. Icone para mostrar uma imagem no imageField
4. Define a posição da área de texto e a largura
5. Define a posição, altura e largura dos campos soltáveis, assim como [**tipos de campos aceitos**](#iostypes)
6. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

### Área Title Field:

```svg
//1
<g transform="translate(0,162)”>

//2
<rect class="bg field" x="84" y="0" width="168" height="30”/>

//3
<textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>

//4
<rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]”/>

//5
<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posição Y toda a área
2. Posição, altura e largura da Área de fundo
3. Define a posição da área de texto e a largura
4. Define a posição, altura e largura dos campos soltáveis, assim como [**tipos de campos aceitos**](#iostypes)
5. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual

### Área Subtitle Field:

```svg
//1
<g transform="translate(0,198)”>

//2
<rect class="bg field" x="84" y="0" width="168" height="30”/>

//3
<textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>

//4
<rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]”/>

//5
<use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>
</g>
```

1. Posição Y toda a área
2. Posição, altura e largura da Área de fundo
3. Define a posição da área de texto e a largura
4. Define a posição, altura e largura dos campos soltáveis, assim como [**tipos de campos aceitos**](#iostypes)
5. Define um botão de cancelar que será mostrado para eliminar o conteúdo atual


## tipos:ios

Os tipos de campo abaixo são compatíveis:

| Code | Type            |
| ---- | --------------- |
| 0    | alpha           |
| 1    | real            |
| 2    | texto           |
| 3    | imagem          |
| 4    | data            |
| 8    | inteiro         |
| 9    | inteiro longo   |
| 11   | hora            |
| 25   | inteiro 64 bits |

:::nota

Para saber mais sobre estes tipos de campo, consulte [**esta página**](https://developer.4d.com/docs/en/Concepts/data-types.html).

:::

:::dica

Para fazer com que a definição de tipo de campo seja mais fácil, 4D for iOS permite que inclua tipos de campo com  **valores positivos** e também excluir tipos de campos com **valores negativos**. Por exemplo, `ios:type="-3,-4"` permite que arraste e solte todos os campos exceto imagens e datas. Para incluir todos os tipos, apenas entre `ios:type="all"`.

:::