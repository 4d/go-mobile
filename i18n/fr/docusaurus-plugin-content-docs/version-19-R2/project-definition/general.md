---
id: general
title: Général
---

Cette page vous permet de définir les informations principales de votre application.

![General section](img/main-page.png)

## OS cible

Sélectionnez l'OS (système d'exploitation) mobile pour lequel vous souhaitez créer l'application. Ce paramètre définira les options de l'éditeur mobile disponibles.

- Sur macOS, vous pouvez sélectionner **Android**, **iOS**, ou **les deux cibles**
- Sous Windows, vous pouvez sélectionner uniquement la cible **Android**.

## Organisation

**Nom :** Nom de votre entreprise, ou votre nom.

**Identifiant :** Saisissez l'identifiant bundle de votre entreprise. Cela servira à identifier votre application. Le nom du produit que vous saisissez est concaténé pour créer le "Bundle ID" en utilisant la notation inverse du service des noms de domaine (voir **ID** ci-dessous). Ce bundle ID doit être unique à votre application.

Par exemple, si le nom de votre entreprise est " MonEntreprise" et que le nom de votre application est "MonApp", vous pouvez choisir "com.MonEntreprise" comme identifiant bundle de votre entreprise et le bundle ID de votre application sera "com.MonEntreprise.MonApp".

:::note

Le nom Bundle ID ne doit pas contenir d'espace ni de caractères spéciaux tels que "*,%,/". Ils sont filtrés automatiquement et remplacés par -.

:::


## Produit


**Nom :** Le nom de votre application. Comme indiqué ci-dessus, le nom du produit est utilisé pour créer le "Bundle ID". Ce Bundle ID doit être identique au Bundle ID que vous avez créé dans votre compte Apple Development.

:::note

Le nom Bundle ID ne doit pas contenir d'espace ni de caractères spéciaux tels que "*,%,/". Ils sont filtrés automatiquement et remplacés par -.

:::

**Version :** La version de votre application. Ajoutez les numéros de version par ordre séquentiel et ascendant en commençant par 1.0.

**ID :** (Bundle ID) : Cette zone est automatiquement générée en tant que composition de l'identifiant de votre entreprise et du nom du produit. Elle n'est pas modifiable.

**Copyright :** Les droits d’auteur de votre application. L'éditeur mobile vous propose un format de droit d’auteur, mais vous avez également la possibilité de créer votre propre format.

**Icônes :** Icône principale qui sera utilisée à divers endroits dans votre application. Il vous suffit de désigner votre icône et l'éditeur mobile vous génère tous les formats nécessaires, conformément aux directives mobiles standard.

Pour sélectionner une icône :

- Glissez et déposez une image directement dans la zone d'icône, ou
- Utilisez le menu image pour sélectionner ou copier votre image.

![icon](img/iconselect.png)

Vous pouvez également double-cliquer sur la zone pour afficher la boîte de dialogue de sélection d'image.

:::note

Sous Windows, il faut utiliser un "fichier image" (*.public.image).

:::

Une fois l'icône est sélectionnée, l'éditeur mobile crée automatiquement toutes les icônes nécessaires pour l'application. Vous pouvez accéder aux formats d'icônes générés en sélectionnant **Montrer le dossier des icônes** dans le menu image.

### Couleur principale

Ce menu vous permet de choisir comment définir la couleur principale de votre application. La couleur principale est utilisée pour générer un schéma de couleurs personnalisé pour votre application.

![icon](img/main-color.png)

- **Utiliser le sélecteur de couleurs du système**: affiche le sélecteur de couleurs du système dans lequel vous pouvez désigner la couleur principale
- **Utiliser la couleur dominante de l'icône**: laissez l'éditeur mobile déterminer automatiquement la couleur principale de l'icône de votre application.

À tout moment, vous pouvez réinitialiser la couleur principale et revenir à la couleur principale prédéfinie de l'icône, en cliquant sur "Utiliser la couleur dominante de l'icône".

## Développeur

**Nom :** Ce champ est prérempli automatiquement avec le nom de votre compte utilisateur. Vous pouvez saisir un nom quelconque.

**Team :** Votre ID d'équipe de compte développeur, qui sera utilisée pendant la phase de déploiement. Cet ID peut être obtenu depuis votre compte développeur. 
