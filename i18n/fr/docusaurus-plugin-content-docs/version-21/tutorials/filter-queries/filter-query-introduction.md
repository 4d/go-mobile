---
id: filter-query-introduction
title: Filter queries
---

In this tutorial, we'll show how to create [**filter queries**](../../project-definition/data.md#filter-queries) to display filtered content in the generated mobile app.

Imagine you're an account manager and you want to consult your *In Progress* contracts simply by connecting to your app with your email address.

First, from the Data section we're going define a **basic filter query** to only display *In Progress* contracts. Then we're going to apply a **user information-based filter** which will depend on the account manager's email.

## Téléchargez le projet Starter

Before we begin, be sure to download the **Starter project** which includes a **4DforiOSQueries.4dbase** file (a demo database with a ready-to-use mobile app project)

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">Projet Starter</a>
</div>

The database includes:

* a **CRM table** with all the data we want to display in the generated iOS app
* an **AccountManager table** with basic information about the account managers (email and name).

![CRM database](img/CRMDatabase.png)


You're now ready to define your first filter query.

Open the mobile project by clicking on **Open** > **Mobile Project...** and select **CRM app** > **project.4dmobileapp**.


## Define a Filter Query

For the moment, if you build the Starter project app and enter "michelle.simpson@mail.com" as the login email (one of the account managers), you'll see **all manager contracts and statuses** (*Closed* and *In Progress*).

![iOS app without queries](img/ios-app-without-queries.png)

As we discussed above, we want the account managers to access their *In Progress* contracts by logging into their mobile app with their email. Pour ce faire :

* Accédez à la **section "Données"**
* Faites un clic droit dans le champ **filtre de recherche** pour faire apparaitre les **boutons Champs, Comparateurs et Opérateurs**.
* Cliquez sur le bouton **Champs** et sélectionnez **Status**.
* Cliquez sur le bouton **Comparateurs** et sélectionnez **Égal à**.
* Si vous souhaitez afficher les contrats *ouverts*, tapez **In progress**
* N’oubliez pas de valider votre recherche en cliquant sur le bouton **Valider**, sinon vous ne pourrez pas créer votre application.

Vous devriez avoir ce résultat :

![CRM database](img/filterquery.png)

> **NOTES**
> 
> * A **filter** icon is displayed at the right of each table when a basic filter is applied to it.
> * For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the **Embed data into the built application** checkbox.
> * Size will be calculated at the first build for you to visualize the **size of your data**.

Si vous générez votre application et que vous tapez « michelle.simpson@mail.com » comme étant l’e-mail de connexion, vous verrez que tous les contrats *In Progress* s’affichent dans le simulateur !

![iOS app with basic query](img/restrited-queries-basic-query.png)

Cela ne correspond pas tout à fait à ce que nous avions prévu ! What we want now is for each account manager to visualize only their own *In Progress* contracts, so let's complete our query.


## Filtre de recherche utilisateur

Now let's filter our app content [depending on a user information](../../project-definition/data.md#filter-queries-with-user-information), in this case, the account manager's login email address.

* Accédez à la **section "Données"**.
* Faites un clic droit dans le champ **Filtre de recherche** pour faire apparaître les **boutons Champs, Comparateurs et Opérateurs**.
* Cliquez sur le bouton **Operators** et sélectionnez **AND**.
* Définissez maintenant les informations utilisateur (**: email**) que vous souhaitez obtenir à partir de la méthode de base de données.
* Souvenez-vous de valider la recherche en cliquant sur le bouton **Valider**. Sinon, vous ne pourrez plus créer votre application.

![Filtre de recherche utilisateur](img/user-information-query.png)

```4d
Status = 'In Progress' & manager.Email = :email 
```

La recherche permettra de filtrer les données en fonction du statut **In Progress** ET de **l'e-mail du chargé de clientèle** (accessible depuis la table AccountManager grâce au lien *N vers 1* qui figure dans le nom du chargé de clientèle).

> **NOTE**
> 
> * A **user icon** is displayed on the right of each table when a user information filter is applied to it.
> * As soon as a query is based on user information and validated, you need to edit the [`On Mobile app authentication method`](../../4d/on-mobile-app-authentication.md). To do so, right-click on the **Edit authentication method** button to open the database method edition window.

Ajoutez la ligne suivante dans la méthode de base de données :

```4d
$response.userInfo:=New object("email";$request.email)
```

Cela permettra de récupérer l’adresse mail de connexion du chargé de clientèle et d'afficher les données selon ce critère.

![Filtre de recherche utilisateur](img/database-method-user-information-query.png)

Ainsi, si vous générez votre application et que vous entrez « michelle.simpson@mail.com » en tant qu'e-mail de connexion, vous trouverez tous les contrats *"In progress"* de Michelle Simpson.

![Final result](img/restricted-queries-final-result.png)


