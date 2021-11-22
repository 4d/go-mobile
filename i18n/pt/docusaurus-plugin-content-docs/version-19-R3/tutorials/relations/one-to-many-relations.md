---
id: one-to-many-relations
title: One to Many relations
---

Este tutorial vai mostrar como é fácil incluir relações Um para Muitos em seu projeto móvel.

Vamos começar baixando o Projeto Starter:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip">Starter project</a>
</div>

Neste tutorial, vamos construir um **Task app** colorido usando 4D for iOS.

![Task App Final result](img/4D-for-iOS-dark-mode-card-relation-ios-13.gif)

Mas primeiro, vamos olhar a estrutura de nosso banco de dados:

![Select link from structure section](img/Database-1-to-N-relations-4D-for-iOS.png)

Como pode ver, há um link  One to Many chamado **tasks** que vamos usar em nosso iOS app para exibir as tasks/tarefas(**to Many**).dos funcionários'(**One**)

Agora vá direto para o menu Open > Mobile project... selecione *Time Keeper* e vá para a seção  **Structure**.

## Structure section

Pode ver a **relação de tasks/tarefas** que vimos antes... Publique!

Agora isso vai operar como qualquer outro campo pelo resto do processo de criação do app.

![Structure section Relations properties](img/Structure-section-relations-4D-for-iOS.png)

:::dica

Quando passar o mouse over, uma dica exibe o nome de tabela originando a relação.

:::

## Labels & Icons section

A relação Um para Muitos está agora disponível na seção **Etiquetas e ìcones**.

É importante saber que incluindo uma relação Um para Muitos vai criar um botão no app iOS gerado.

Então, na seção Etiquetas & Icones você vai definir:

* um botão Etiqueta
* um botão ícone
* um título será exibido na vista de destino (para indicar de onde vem, por exemplo).

![Labels & Icons section Relations properties](img/Relations-properties-Labels-icons-section-4D-for-iOS.png)

## Forms section

* Vá para a seção Formulários e solte a relação *tasks* no formulário detalhado Employee Task.

![Related field in Forms section](img/1-to-n-relations-forms-section.png)

## Build and Run

1. Do formulário Employee List, clique em um empregado.
2. Isso vai abrir o formulário detalhado employee/empregados, onde você verá um novo botão **Relation** !
3. Clique no botão Relation para exibir as tarefas dos funcionários

![Related field in Forms section](img/One-to-n-relations-task-ios-app.png)

Muito bem!  Você incluiu com sucesso as relações Um a Muitos em seu projeto móvel.

Baixe o projeto terminado:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip">Baixar</a>
</div>
