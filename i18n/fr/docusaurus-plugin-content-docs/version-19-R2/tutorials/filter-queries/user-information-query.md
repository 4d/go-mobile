---
id: user-information-query
title: Filtre de recherche utilisateur
---

Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du chargé de clientèle (information utilisateur) :

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
> * As soon as a query is based on user information and validated, you need to edit the **Mobile app authentication method**. To do so, right-click on the **Edit authentication method** button to open the database method edition window.

Ajoutez la ligne suivante dans la méthode de base de données :

```4d
$response.userInfo:=New object("email";$request.email)
```

Cela permettra de récupérer l’adresse mail de connexion du chargé de clientèle et d'afficher les données selon ce critère.

![Filtre de recherche utilisateur](img/database-method-user-information-query.png)

Ainsi, si vous générez votre application et que vous entrez « michelle.simpson@mail.com » en tant qu'e-mail de connexion, vous trouverez tous les contrats *"In progress"* de Michelle Simpson.

![Final result](img/restricted-queries-final-result.png)




