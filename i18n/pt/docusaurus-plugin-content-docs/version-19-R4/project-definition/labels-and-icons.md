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


### Adicionar formatos personalizados

O editor móvel permite adicionar formatos personalizados (chamados "formatadores" em seus projetos. Por exemplo, pode definir formatadores personalizados para emails, faturas, números, etc.

Para adicionar formatos personalizados para seus projetos móveis, pode:

- Download and install customized formats from the [**go-mobile formatters github repository**](https://4d-go-mobile.github.io/gallery//#/type/formatter).

- Criar seus formatos próprios.

:::tip tutorial

Visitar [**este tutorial**](../tutorials/data-formatter/create-data-formatter) para saber como definir um formato personalizado

:::

Para instalar um formatador personalizado, precisa soltar a pasta formatador `/Resources/Mobile/formatters` da pasta 4D projeto. Quando instalado, um formato personalizado pode ser selecionado no menu Formatos, da mesma forma que os formatos integrados.


## Titulo

Esta propriedade só está disponível para campos Relações. O título definido será exibido no topo da vista destino quando usar uma relação.

Utilize um par de caracteres `%` para incluir o valor de campo relacionado no título. Por exemplo se quiser que o titulo do campo relacionado`Employee.employer` exiba o nome do campo relacionado `employee` pode escrever:

```
%Name%'s employer
```

:::tip tutorial

Um [**tutorial**](../tutorials/relations/one-to-many-title-definition) está disponível para guiar você através do processo de definição de um título.

:::
