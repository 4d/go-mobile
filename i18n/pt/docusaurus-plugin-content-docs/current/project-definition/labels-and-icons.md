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

This property allows you to select a **formatter** for your field.

Basically, a formatter allows you to map a data type from your database to a specific display on the mobile side. For example, you can define emails format, invoice numbers, etc.

However, formatters can call some code to create smart interfaces. For example, you can attach a data formatter to phone numbers that opens an action menu on the mobile app when the user touches the number (e.g. to call the person or save them in contacts).


### Selecting a formatter

When you click on a field row in the Formats column, the formatter menu is displayed. By default, the 4D mobile editor provides several built-in formatters:

![formats](img/formats-menu.png)

Available built-in formatters depend on the field type:

| Tipo campo         | Formato                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Texto**          | Texto                                                                                                                 |
| **Data**           | Data, data curta, data longa, data completa                                                                           |
| **Hora**           | Hora, hora curta, duração, número inteiro                                                                             |
| **Imagem**         | Imagem                                                                                                                |
| **Boolean**        | "No" ou "Yes", "False" ou"True"                                                                                       |
| **Número inteiro** | Número inteiro, número decimal, número real, porcentagem, número ordinal, moeda $, moeda €, moeda ¥, número em letras |

For an example of use of built-in formatters, see [this tutorial](../tutorials/data-formatter/use-formatter.md).

If you have downloaded or created additional formatters (see below), they are also listed in this menu so you can select them.

### Adding custom formatters

You can add custom formatters to your mobile project to highly customize its interface. You can either [download](#downloading-formatters) existing formatters from the [go-mobile formatters repository](https://4d-go-mobile.github.io/gallery//#/type/formatter), or [create](#creating-formatters) your own formatters.

You need then to [install them in your project](#installing-custom-formatters).


:::nota

There are two types of additional formatters:

- **Dynamic formatters** with code (identified with the OS logos (![OS logo](img/os-logo.png)) in the  go-mobile formatters Github repository).
- **Static formatters** without code.

:::


#### Downloading formatters

You can download formatters from the [**go-mobile formatters github repository**](https://4d-go-mobile.github.io/gallery//#/type/formatter). You can click on the **Download more formats** link in the 4D mobile editor to access this repository.


#### Creating formatters

A custom formatter is always associated with a **manifest.json** file containing the following elements:

- **name**: a string containing the name of the formatter. Ex: phone, objectFormatter, etc.
- **type**: the 4D format type you want to use. Ex: Text, Integer, etc.
- **binding**:
  - For static formatters: `localizedText` for strings or `imageNamed` for images.
  - For dynamic formatters: a string that links the code to your app
- **choiceList**: mapped values depending on the selected type (for static formatters only).
- **assets**: additional formating data for static formatters only, such as dark mode support, tintable, Integer to Image and Text to Image.
- **target**: the platform supported by your formatter (for dynamic formatters only).

Example of a static formatter's manifest file:

```json
{
   "name": "integerToImage",

   "type": ["integer"],

   "binding": "imageNamed",

   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},

}
```

Several tutorial pages detail how to create formatters:

- [**Creating a static formatter**](../tutorials/data-formatter/create-static-data-formatter)
- [**Creating a Swift dynamic formatter**](../tutorials/data-formatter/create-swift-formatter)
- [**Creating a Kotlin dynamic formatter**](../tutorials/data-formatter/create-kotlin-formatter)

:::note for Android

You can add a specific permission to your app, using a `capabilities` block as follows:

```4d
 "capabilities" : {
        "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]
```

:::



#### Installing custom formatters

To install a custom formatter, you just need to drop the custom formatter folder into the `/Resources/Mobile/formatters` of the 4D project folder. Once installed, a formatter can be selected from the **Formats** menu, just like a built-in format.




## Titulo

Esta propriedade só está disponível para campos Relações. O título definido será exibido no topo da vista destino quando usar uma relação.

Utilize um par de caracteres `%` para incluir o valor de campo relacionado no título. Por exemplo se quiser que o titulo do campo relacionado`Employee.employer` exiba o nome do campo relacionado `employee` pode escrever:

```
%Name%'s employer
```

:::tip tutorial

Um [**tutorial**](../tutorials/relations/one-to-many-title-definition) está disponível para guiar você através do processo de definição de um título.

:::
