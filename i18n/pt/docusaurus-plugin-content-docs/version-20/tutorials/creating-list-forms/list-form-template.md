---
id: list-form-template
title: Modelos de formulários Lista
---

Neste tutorial, vamos cobrir quase todos os aspectos da criação de um modelo de lista formulário, tais como: criar um formulário lista com uma **barra de pesquisa** e uma tabela exibindo uma **imagem**, um **título**, e um **subtítulo** para cada célula.

![List form template final result](img/custom-template-final-result.png)

## Baixe o Starter Project

Antes de começar, baixe e descompacte o **Starter Project** que inclui:

* Uma pasta **formulário Lista**
* Um projeto demo 4D ("Contact") com um projeto app móvel pronto para usar.

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip">Starter project</a>
</div>

## Adicione um modelo de formulário lista para seu projeto móvel

A primeira coisa que precisa é criar uma pasta `list` em *Contact.4dbase/Resources/Mobile/form/* e arrastar e soltar sua pasta **list form** lá dentro.

![Mobile folder list form template](img/mobile-folder-custom-template.png)

Agora lance sua aplicação 4D e abra o projeto  4D "Contact".

Selecione o projeto móvel "Contact Demo App": **File > Open > Mobile Project > Contact Demo App**.

Na seção **Formulário** do editor de projeto móvel, verá que seu modelo de formulário lista foi agregado com sucesso à lista de modelos de formulários lista disponíveis:

![Forms section](img/custom-listform-template.png)

Agora vamos nos concentrar nos conteúdos da pasta  **Custom List form**

## Conteúdos do modelo formulário lista

Nesta pasta vai encontrar:

* Um ícone **layoutIconx2.png** de 160x160px: mostrado no editor de projeto quando selecionar seu modelo
* Um arquivo**manifest.json** : inclui uma descrição básica do modelo
* Um arquivo**template.svg** : a representação visual de seu modelo que é mostrada quando definir o conteúdo de seu formulário lista.
* uma pasta **ios** que inclui o storyboard (interface gráfica) e arquivo**Swift** (código par formulário) na pasta`Source/Forms/Tables/___TABLE___`
* uma pasta **android** que inclui o arquivo layout.xml (interface gráfica) na pasta `app/src/main/res/layout`.

Esses arquivos e pastas são detalhados nas próximas seções. 
