---
id: one-to-many-custom-button
title: Um para Muitos - botão personalizado
---

As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things.

Em relação a modelos e formatadores personalizados, pode criar Botões de Relação personalizados.

Para fazer isso, nada é mais simples! Só precisa soltar seu botão personalizado em seu modelo personalizado.


Let's get started by downloading the Starter project that includes:

* um banco de dados com seu projeto móvel
* um botão Relação padrão

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip">Starter project</a>
</div>

## Integrar um botão

O primeiro passo é incluir o botão.xib em seu modelo personalizado para que 4D for IOS possa usá-lo.

Para usar o botão só precisa soltar na pasta `YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact`.

![Custom button path](img/Relation-custom-button-path.png)

O primeiro passo está pronto!

## Modificar o botão

Abra o arquivo .xib com Xcode.

Deve ter um aspecto como este:

![Custom relation button](img/Relations-custom-button-relationButton-4D-for-iOS.png)

E a partir do inspetor de atributos, pode mudar por exemplo:

* cores e fontes
* o estilo do botão
* o tamanho do botão, etc

Vamos mudar a cor do botão e a fonte da sua etiqueta!

### Cores e fontes personalizadas.

Selecione o botão e mude a cor e fonte a partir do inspetor de atributos.

Para o fundo, selecione Label Color para ter o melhor contraste em modos Light e Dark.

Para a cor de fonte, selecione System background color com uma fonte helvética Neue Medium.

Finalmente, não se esqueça de selecionar "tint" em System background color para aplicar essa cor no ícone de botão.

![Custom relation button](img/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)

Deve obter esse resultado em seu Simulador em modo Dark e Light:

![Custom relation color and font](img/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)

### Cantos arredondados de botões

Vamos adicionar alguns cantos arredondados para relationButton!

Para fazer isso abra o Identity Inspector.

Selecione seu Botão e adicione as duas linhas abaixo na área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

e

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: selecione a caixa de opção

![Custom relation color and font](img/Custom-relation-button-Xcode-round-corners.png)

Agora pode construir seu projeto no editor de projetos!

O resultado deve parecer com isto:

![Custom relation color and font](img/Custom-relation-button-round-corners.png)

### Tamanho e restrições

lembre que se você **adicionar restrições** no seu botão, também terá que modificar o arquivo xib xml para **agregar algumas TAGS** como para os formulários detalhados personalizados. Isso permite que o botão seja duplicado quando várias relações estiverem disponíveis na mesma vista detalhada.

O que é conveniente porque vamos adicionar algumas restrições!

#### Adicionar restrições

Para este tutorial vamos adicionar uma altura de botão porque queremos que fique maior na tela.

Pásso 1. Primeiro selecione a vista e mude a altura de 123 a 40

![Button view height](img/Button-view-height.png)

Passo 2. Dê um duplo clique em **Top Space Constraint** e mude o valor de 8 para 0

![Top Space constraint](img/Top-Space-constraint.png)

Passo 3. Faça a mesma coisa com  **Bottom Space Constraint** e mude seu valor de 8 para 0

Você deveria obter isto:

![Custom  button constraints](img/Custom-button-constraints.png)

Passo 4. Adicione uma restrição de altura de 40

![Button height constraint](img/Button-height-constraint.png)

Você deveria obter isto:

![Horizontal in container](img/Custom-relation-button-constraints.png)

Para indicar no editor de projeto que todos os elementos incluídos nesta vista serão duplicados, precisamos adicionar uma TAG para cada elemento e restrição.


### adicionar TAGS

Each storyboard element has an Object ID. Por exemplo, se selecionar Field View 2 e for a** identity Inspector**, verá seus identificadores de objetos:

![Object ID Storyboard](img/Custom-button-object-id-storyboard.png)

O processo é um pouco complicado.... Começamos abrindo o arquivo storyboard com seu editor de código favorito!

#### Adicione uma tag para a restrição de altura

Pásso 1. Selecione-o a partir do Storyboard para obter o identiicador de Objeto.

![Horizontal constraint object ID](img/Horizontal-constraint-object-ID.png)

Passo 2. Pesquise por essa ID no arquivo xml e coloque no seu lugar **TAG-RL-007**  (uma Tag que ainda não esteja em uso).

Passo 3. Salve o arquivo xml

![Horizontal constraint xml file](img/Horizontal-constraint-xml-file.png)

Passo 4. Foco em Storyboard para verificar se a restrição foi atualizada corretamente

![Horizontal object ID updated](img/Horizontal-object-id-updated.png)

E isso é tudo! Seu botão agora é completamente duplicável se tiver mais de um botão de relação a exibir...

## Where to go from here?

Nesse tutorial, vimos o básico para criar botões de relação personalizados. Clique no botão abaixo Final Project para baixar o botão de relação personalizado.

Download the completed project:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip">Download</a>
</div>