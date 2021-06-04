---
id: filter-query-introduction
title: Restricted queries
---

> **OBJECTIVES**
>
> Defining basic and user information-based query filters to display filtered content in the generated iOS app.


>**PREREQUISITES**
>
>Click ```[here](prerequisites.html)``` to see what you'll need to get started!


In this tutorial, we'll cover **restricted queries** with a simple use case: imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## Download the Starter project

Before we begin, be sure to download the **Starter project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<a className="button button--primary"
href="https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">Starter project</a>

The database includes a:

* **CRM table** with all the data we want to display in the generated iOS app
* **AccountManager table** with basic information about the account managers (email and name).

![CRM database](img/CRMDatabase.png)

> **NOTE**
>
>This project uses [custom templates](../creating-list-forms/list-form-template.md), [custom icons](../using-icons/using-icons.md) and custom [data formatters](../data-formatter/create-data-formatter.md).

You're now ready to define your first restricted query!

Open the mobile project by clicking on Open > Mobile Project... and select CRM app > **project.4dmobileapp**.
