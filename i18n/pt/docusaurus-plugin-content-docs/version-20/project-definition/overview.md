---
id: overview
title: Visão Geral
---


O editor de projeto 4D Móvel permite criar, testar e construir seus projetos móveis nativos para iOS e Android usando uma interface gráfica. A janela tem duas abas: **Seções** e **Construir**.

![General section](img/General-section-4D-for-iOS.png)

Na aba **Seçõess**, encontra todos os passos para criar sua aplicação móvel:

* General
* Estrutura
* Data
* Actions
* Labels & Icons
* Menu principal
* Formulários
* Publishing

Na aba **Construir**, encontra ferramentas para construir e testar seu app móvel:

* Build and Run
* Seleção de simulador
* Navegador de projeto e de produto
* Instalar

O editor de projeto 4D Mobile está disponível no ambiente de **4D** desenvolvimento de aplicação (é necessária uma licença 4D Developer Pro).

Um projeto 4D móvel é fortemente vinculado a um modelo de dados 4D. Para poder criar ou abrir um projeto móvel 4D, deve antes abrir o projeto 4D associado.


## Criar um projeto móvel

Para criar um novo projeto móvel:

1. Inicie sua aplicação 4D e abrir o projeto 4D para o qual quer criar um projeto móvel.
2. Selecione **New > Mobile Project** nos menus **File** ou na barra de ferramentas.

:::nota

Precisa ter uma licença 4D Developer Pro para abrir o editor 4D Móvel.

:::

A caixa de diálogo de boas vindas é exibida:

![Project Name](img/new-project.png)

3. Dê um nome a seu projeto e clique em **Continuar**.

O editor de projeto Móvel é exibido e é criada automaticamente a arquitetura de arquivos móveis em seu projeto 4D.

## Abrir projeto móvel

Para abrir projeto móvel:

1. Inicie sua aplicação 4D e abra o projeto 4D para o qual quer criar um projeto móvel.
2. Selecione **Abrir > Projeto Móvel** nos menus **Arquivo** ou na barra de ferramentas.

A caixa de seleção de projeto móvel é mostrada. Contém a lista de projetos móveis já definidas para o banco de dados atual:

![Project Name](img/select-project.png)

O ícone no lado esquerdo indica se o projeto foi criado para Android, iOS ou ambos.

3. Dê um duplo clique no projeto para abrir ou selecionar o projeto e clique em **Abrir**.

### Abrir outro projeto

O link **Abrir outro projeto...** permite selecionar qualquer arquivo válido [`.4dmobileapp`](#mobile-project-architecture) que não esteja listado na caixa de diálogo.

::: aviso

O projeto móvel selecionado deve corresponder com o modelo atual de dados senão será atualizado e pode não funcionar como esperado.

:::

## Apagar um projeto móvel

Para apgar um projeto móvel, apenas remova a pasta do projeto móvel da pasta 4D project.


## Arquitetura de projeto móvel

Projetos móveis são criados dentro da pasta principal project 4D:

- My4DProject (*pasta principal do projeto 4D*)
    + Projetos móveis
        * MyMobileProject
            - project.4dmobileapp
            - *outros arquivos e pastas*


