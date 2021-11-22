---
id: filter-query-introduction
title: Filter queries
---

Nesse tutorial vamos mostrar como criar **pesquisas com filtro** para exibir conteúdo filtrado no app móvel gerado.

Se você for um gestor de contas e quiser consultar seus contratos *Em curso* simplesmente conectando-se a sua aplicação com seu endereço de correio eletrônico.

Primeiro, a partir da seção Dados, vamos definir um **filtro de pesquisa básico** para exibir apenas contratos *Em Progresso*. Depois vamos aplicar um **filtro baseado na informação de usuário** que depende do email do gerente de conta.

## Baixe o Starter Project

Antes de começar, tenha certeza de baixar o **Starter Project** que inclui um arquivo **4DforiOSQueries.4dbase** (um banco de dados demo com um projeto de app móvel pronto para usar)

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">Starter project</a>
</div>

Este banco de dados inclui:

* **tabela CRM** com todos os dados que quisermos exibir no app gerado  iOS
* **tabela AccountManager ** com informação básica sobre os administradores de contas (email e nome).

![CRM database](img/CRMDatabase.png)


Estamos prontos para definir nossa primeira pesquisa limitada.

Abra o projeto móvel clicando em Open > Mobile Project... e selecione o app CRM  > **project.4dmobileapp**.
