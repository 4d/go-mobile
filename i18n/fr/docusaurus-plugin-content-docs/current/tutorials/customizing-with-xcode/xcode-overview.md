---
id: xcode-overview
title: Présentation de Xcode
---

> **OBJECTIFS**
> 
> Ensure a basic understanding of working with Xcode.

Nous allons passer en revue les différentes zones qui s'affichent dans Xcode :

![Xcode](img/Discover-Xcode-4D-for-iOS.png)

## Toolbar (Barre d’outils)

* Les boutons **Run** et **Stop** sont situés à gauche de la barre d'outils. Le bouton **Run** permet de créer, d'exécuter et de lancer votre application dans le simulateur iOS sélectionné.

![Build and Run](img/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* Le menu déroulant situé à côté du bouton **Stop** indique les éléments que vous souhaitez exécuter ainsi que le simulateur qui est utilisé.

![Toolbar Target](img/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* Sur le côté droit de la barre d’outils, vous trouverez des boutons vous permettant de modifier l’affichage.

![Toolbar View buttons](img/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Editor Area (Zone d’édition)

![Editor Area (Zone d’édition)](img/Editor-Xcode-4D-for-iOS.png)

C’est ici que le code est inséré lorsqu'un fichier Swift est sélectionné. Lorsqu’un fichier Storyboard est sélectionné, la vue change et l'Interface Builder apparaît.

## Zone "Interface Builder"

![Zone "Interface Builder"](img/Interface-Builder-Xcode-4D-for-iOS.png)

Il s’agit d’une interface graphique qui vous permet de générer un fichier Storyboard ou XIB. Toutes vos "scènes" sont visibles sur le côté gauche.

## Utility Area (Zone de fonctionnalités)

La zone de fonctionnalités de Xcode comporte deux volets : Inspector (l'inspecteur) et Library (la bibliothèque).

![Utility Area (Zone de fonctionnalités)](img/Utility-Xcode-4D-for-iOS.png)

### Inspector (Inspecteur)

Dans la section des propriétés, Inspector se divise en six onglets, comme illustré ci-dessous :

![Inspector (Inspecteur)](img/Xcode-Inspector-pane.png)

De gauche à droite, ces onglets correspondent à :

* **File inspector (inspecteur de fichier)** : pour visualiser et gérer les métadonnées d'un fichier, telles que le nom, le type et le chemin du fichier.

* **Quick Help (aide rapide)** : pour afficher les détails liés à ce qui a été sélectionné dans l'éditeur.

* **Identity inspector (inspecteur d'identité)** : pour l’affichage des métadonnées de l’objet, telles que la classe d’un objet, la durée d'exécution de ses attributs ainsi que son "label".

* **Attributes inspecteur (inspecteur d'attributs)** : pour configurer les attributs spécifiques à l’objet sélectionné. Par exemple, certains attributs d'un champ texte incluent un alignement et une couleur, un type de bordure et des paramètres de modification.

* **Size inspector (inspecteur de dimensions)** : pour préciser des caractéristiques telles que la taille et la position d’un objet.

* **Connections inspector (inspecteur de connexions)** : pour visualiser les "outlets" d'un objet, établir de nouvelles connexions et supprimer des connexions existantes.

### Library (Bibliothèque)

Dans la section des propriétés, Library se divise en quatre onglets, comme illustré ci-dessous :

De gauche à droite, ces onglets correspondent à :

![Library (Bibliothèque)](img/Xcode-Library-pane.png)

* **File templates (modèles de fichiers)** : ces modèles s'appliquent aux types de fichiers courants figurant dans la liste du menu "New File".

* **Code snippets (extraits de code)** : il s'agit d'extraits de code source destinés à être utilisés dans votre application. Pour en utiliser un, faites-le glisser directement dans votre fichier de code source.

* **Objects (objets)** : cette bibliothèque contient les types d’objets d’interface que vous pouvez choisir pour constituer votre interface utilisateur. Pour ajouter un objet dans une vue, faites-le glisser directement dans votre Storyboard, dans l’éditeur d’Interface Builder.

* **Media files (les fichiers multimédia)** : cette bibliothèque contient tous vos graphiques, icônes et fichiers audio. Pour les utiliser, faites-les glisser directement vers votre Storyboard, dans l’éditeur d’Interface Builder.

## Debug Area (Zone de débogage)

Cette zone affiche le résultat et l’état de différentes variables lors de l’exécution de votre application.

## Navigation Area (Zone de navigation)

Plusieurs onglets sont inclus ici, notamment :

* **L'onglet "Navigation"** : répertorie et donne accès à tous les fichiers nécessaires au bon fonctionnement de votre application.

![Navigation tab](img/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **L'onglet "Search navigator" (navigateur de recherche)** : permet de rechercher tous les fichiers du projet.

![Search navigator tab](img/Search-Navigator-Xcode-4D-for-iOS.png)

* **L'onglet "Issue navigator" (navigateur d'alertes)** : affiche toutes les erreurs issues d'un projet iOS.

    - Les erreurs affichées en rouge correspondent à des problèmes critiques qui doivent être résolus pour pouvoir générer votre application.
    - Les erreurs affichées en jaune correspondent à des alertes susceptibles de poser problème, mais qui ne bloquent pas la génération de l’application.

Vous pouvez cliquer sur les erreurs et les alertes pour les visualiser dans le projet.

![Issue Navigator](img/Issue-Navigator-Xcode-4D-for-iOS.png)

Nous allons ensuite nous pencher sur les fichiers inclus dans votre application 4D for iOS depuis l’onglet "Project navigation".
