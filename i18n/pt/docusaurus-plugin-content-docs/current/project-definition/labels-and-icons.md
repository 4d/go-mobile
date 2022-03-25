---
id: labels-and-icons
title: Labels & Icons
---

Essa página permite definir as propriedades de exibição para suas tabelas, campos e relações no app móvel.

![Labels & Icons section](img/Labels-&-icons-section-4D-for-iOS.png)

Propriedades padrão são estabelecidas. Para modificar uma propriedade, selecione um elmeento e digite o novo valor na coluna apropriada.

Pode definir as mesmas propriedades para tabelas, campos e relações. Além disso, formatos podem ser definidos para campos/relações.

Esses elementos serão mostrados em formulários detalhados e lista, dependendo no modelo no app gerado.


## Ícones

Ícones a associar a tabela ou campo/elemento no app móvel a cada vez que um modelo exigir um ícone.

:::info

Para campos de relação, ícones serão exibidos à esquerda do botão **Relação** que permite abrir uma tabela relacionada.

:::

O editor móvel 4D oferece uma grande biblioteca de ícones para atender às suas necessidades. Isso inclui ícones para negócios, finanças, educação, governo, saúde, indústria, imóveis, serviços, etc. Isso inclui ícones para negócios, finanças, educação, governo, saúde, indústria, imóveis, serviços, etc. Isso inclui ícones para negócios, finanças, educação, governo, saúde, indústria, imóveis, serviços, etc. ´Para selecionar um ícione, clique no botão **icone** e escolha um ícone da lista:

![Icons select](img/icon-library.png)

:::info

Para manter tudo consistente, **os ícones por padrão** são gerados para campos em branco se ao menos um ícone tiver sido definido para um campo.

:::

Também pode deixar a área ícone vazia se não quiser exibir ícones em sua aplicação.


### Adicionar ícones personalizados

Pode adicionar seus próprios ícones à bibilioteca, para que possa selecioná-los no projeto. Pode usar qualquer formato de ícone (SVG ou PNG é recomendado para preservar transparência) e tamanho. É recomendado ter versões coloridas de seus ícones personalizados para melhor visualização no editor de projetos.

Por exemplo, aqui está um conjunto de ícones personalizados que pode usar:

<div className="center-button">
<a
  className="button button--primary"
  href="https://github.com/4d-go-mobile/tutorial-CustomIcons/releases/latest/download/tutorial-CustomIcons.zip">
  Baixar ícones personalizados
</a>
</div>

Para incluir ícones personalizados em seu projeto:

1. Criar uma pasta `icones` no local abaixo:

```
<my4DProjetFolder>/Resources/Mobile/medias
```

:::nota

Pode ser necessário criar uma pasta `medias`.

:::

2. Arraste e solte seus ícones personalizados na pasta `icons`.

![Icons select2](img/mobile-folder-custom-icons.png)

Seus ícones podem agora ser selecionados para seu projeto, são listados depois dos ícones padrão.




## Etiquetas curtas e longas

Pode definir as mesmas etiquetas para tabelas, campos e relações. Essas etiquetas serão usadas automaticamente de acordo com o espaço disponível no modelo para otimizar os espaços e evitar lotar a barra de abas.

:::info

Para campos de relação, etiquetas serão exibidos à esquerda do botão **Relação** que permite abrir uma tabela relacionada.

:::

- Etiquetas curtas devem ter 10 caracteres ou menos
- Etiquetas longas podem ter até 25 caracteres
- Podem ser usados caracteres que não são permitidos em nomes de estrutura, por exemplo "/","@", o caractere de espaço e outros.

Como padrão, o editor móvel usa os nomes tabela  e campos como definidos na estrutura como etiquetas no app e a mesma string é usada para etiquetas curtas e longas.


## Formato

Essa propriedade permite formatar os dados para exibir no app. Quando clicar em um campo linha, um menu formato é exibido.

![formats](img/formats-menu.png)

Formatos disponíveis integrados dependem do tipo campo:

| Tipo campo         | Formato                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Texto**          | Texto                                                                                                                 |
| **Data**           | Data, data curta, data longa, data completa                                                                           |
| **Hora**           | Hora, hora curta, duração, número inteiro                                                                             |
| **Imagem**         | Imagem                                                                                                                |
| **Boolean**        | "No" ou "Yes", "False" ou"True"                                                                                       |
| **Número inteiro** | Número inteiro, número decimal, número real, porcentagem, número ordinal, moeda $, moeda €, moeda ¥, número em letras |


## Data formatters

The mobile editor allows you to add customized formats called "formatters" in your projects. A formatter enables to display your data through a specific menu, to map your data For example, you can define custom formats for emails, invoice numbers, etc.

To add custom formatters to your mobile project, you can either:

- Download and install customized formatters from the [**go-mobile formatters github repository**](https://4d-go-mobile.github.io/gallery//#/type/formatter).

Para instalar um formatador personalizado, precisa soltar a pasta formatador `/Resources/Mobile/formatters` da pasta 4D projeto. Quando instalado, um formato personalizado pode ser selecionado no menu Formatos, da mesma forma que os formatos integrados.

- Create your own formatters.

Note that there are 2 types of formatters:

- **Static data formatters** without code.
- **Dynamic data formatters** with code (identified with the ![OS logo](img/os-logo.png) in the above-mentioned formatters Github repository).

Your formatter must always be associated with a **manifest.json** file containing the following elements:

- **name**: a string containing the name of the formatter. Ex: phone, objectFormatter, etc.
- **type**: the 4D format type you want to use. Ex: Text, Integer, etc.
- **binding**:
  - For static formatters:`localizedText` for strings or `imageNamed` for images.
  - For dynamic formatters: a string that links the code to your app
- **choiceList**: mapped values depending on the selected type (for static formatters only).
- **assets**: additional formating data for static formatters only, such as dark mode support, tintable, Integer to Image and Text to Image.
- **target**: the OS on which your app will be used.

Ex:

```json
{
   "name": "integerToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},

   "target": ["ios", "android"]

}
```

:::note for Android

You can add a specific permission to your app, using a `capabilities` block as follows:

 ```4d
 "capabilities" : {
        "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]
```

:::

:::tip tutorial

Visit:
- [**this tutorial**](../tutorials/data-formatter/create-data-formatter) to know how to define a custom format.
- [**this tutorial**](../tutorials/data-formatter/create-swift-formatter) to define a Swift formatter.
- [**this tutorial**](../tutorials/data-formatter/create-kotlin-formatter) to define a Kotlin formatter. >>>>>>> Stashed changes

:::


## Titulo

Esta propriedade só está disponível para campos Relações. O título definido será exibido no topo da vista destino quando usar uma relação.

Utilize um par de caracteres `%` para incluir o valor de campo relacionado no título. Por exemplo se quiser que o titulo do campo relacionado`Employee.employer` exiba o nome do campo relacionado `employee` pode escrever:

```
%Name%'s employer
```

:::tip tutorial

Um [**tutorial**](../tutorials/relations/one-to-many-title-definition) está disponível para guiar você através do processo de definição de um título.

:::
