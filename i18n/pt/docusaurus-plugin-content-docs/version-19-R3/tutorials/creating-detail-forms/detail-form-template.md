---
id: detail-form-template
title: Modelos de formulário detalhado
---


Neste tutorial, vamos guiá-lo através da criação de um modelo de formulário detalhado. Se mostrará um **cabeçalho de imagem **, assim como **os campos de título e conteúdo** que se duplicarão na aplicação iOS ou Android geradas.

![Custom template final result](img/custom-template-final-result.png)

## Baixe o Starter Project

Para começar, baixe o **Starter Project**, que inclui:

* Uma pasta **Custom Detail form** (pasta modelo de formulário detalhado)
* Um projeto demo 4D ("Contact") com um projeto app móvel pronto para usar.

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip">Starter project</a>
</div>

## Adicione um modelo de formulário detalhado a seu projeto móvel

Primeiro, crie uma pasta *Contact.4dbase/Resources/Mobile/form/detail* e arraste e solte a pasta **Custom Detail form** nela.

![Mobile folder custom template](img/mobile-folder-custom-template.png)

Agora lance sua aplicação 4D e abra o projeto  4D "Contact". Selecione o projeto móvel "Contact Demo App": **File > Open > Mobile Project > Contact Demo App**.

Na seção **Forms** do editor de projeto, verá que seu modelo de lista formulário foi adicionado com sucesso à lista de modelos de formulários lista disponíveis:

![Forms section](img/custom-detailform-template.png)

Agora vamos focar na pasta de conteúdo **Custom Detail form** folder content.

## A pasta de modelos de formulário detalhado e seu conteúdo

Nesta pasta vai encontrar:

* Um ícone **a layoutIconx2.png** de 160x160px que se mostrará no editor del projeto quando selecione seu modelo personalizado entre outras
* Um arquivo ** manifest.json**  inclui uma descripção básica do modelo
* Um arquivo **a template.svg** que será a representação de seu modelo que se mostrará quando defina o conteúdo de seu formulário detalhe e onde arrastará e soltará seus campos
* uma pasta **ios** que inclui o storyboard (interface gráfica) e arquivo**Swift** (código par formulário) na pasta`Source > Forms > Tables 'TABLE'`
* uma pasta **android** que inclui o arquivo layout.xml (interface gráfica) na pasta `app > src > main > res > layout` .

Esses arquivos e pastas são detalhados nas próximas seções.