---
id: one-to-many-title-definition
title: 1 vers N - Définition du titre
---

### Définir un titre pour vos vues de destination

Pour garder une trace de la vue que vous étiez en train de visualiser dans votre application, 4D for iOS vous permet de définir un Titre personnalisé.

Dans ce tutoriel nous utiliserons le projet suivant :

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip">Projet Starter</a>
</div>

Rendez-vous directement dans le **menu Ouvrir> Projet mobile...**, sélectionnez *Time Keeper* puis la **section Étiquettes et icônes**.

Ouvrez ensuite l'onglet Liens pour définir le titre du lien *tasks* et saisissez la ligne suivante dans **la colonnes Titles** : `%Name% tasks`

![Labels & Icons relation title](img/labels-icons-title-definition.png)

Vous l'aurez deviné, il vous permet d'afficher **la valeur du nom de l'Employé** dans la vue de destination en fonction du formulaire détaillé Employee sur lequel vous étiez en train de travailler précédemment.

![Labels & Icons relation title](img/relations-title-definition.png)

Ceci est un excellent moyen de garder une trace de la vue précédente sur laquelle vous étiez !

Voyons maintenant comment créer et ajouter votre propre bouton Relation dans le prochain tutoriel !