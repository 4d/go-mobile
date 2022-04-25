---
id: filter-query-introduction
title: Filter queries
---

In this tutorial, we'll show how to create **filter queries** to display filtered content in the generated mobile app.

Imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## Téléchargez le projet Starter

Before we begin, be sure to download the **Starter project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">Projet Starter</a>
</div>

The database includes a:

* **La table CRM** qui comprend l'ensemble des données que nous souhaitons afficher dans l'application iOS générée
* **La table AccountManager** qui comprend les informations de base sur les chargés de clientèle (nom et e-mail).

![CRM database](img/CRMDatabase.png)


You're now ready to define your first restricted query.

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
