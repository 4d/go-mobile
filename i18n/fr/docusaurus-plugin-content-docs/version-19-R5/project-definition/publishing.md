---
id: publishing
title: Publishing
---

Cette page vous donne accès aux paramètres de publication de votre application et aux fonctionnalités mobiles spéciales :


![Publishing section](img/publishing.png)


## URL de production

URL du serveur Web sur lequel les applications mobiles se connecteront pour lire et écrire des données, dans un contexte de production. Vous pouvez saisir n'importe quelle adresse valide, par exemple :

```
https://my.wesbsite.com
http://my.website.com:9200
www.website.com/mobile
```

Pendant la phase de développement, vous pouvez laisser cette zone vide et définir la [Source de données](data.md) comme **Fichier de données courant**.

:::tip

L'utilisateur pourra [modifier l'url du serveur ](#modify-remote-url) à partir de l'appareil mobile.

:::



## Paramètres du serveur Web

Le bouton **Éditer...** ouvre la page **Web** de la boîte de dialogue des paramètres 4D. Utilisez cette page pour définir les paramètres suivants à intégrer dans l'application mobile :

- L'option **Activer HTTP** et **port HTTP**.
- L'option **Activez HTTPS** et **port HTTP**.

:::note

Si HTTP et HTTPS sont tous les deux activés, HTTP est utilisé.

:::

L'activation du port HTTPS nécessite que vous ayez installé un [certificat TLS](https://developer.4d.com/docs/Admin/tls.html) valide. Vous pouvez créer des certificats d'essai avec 4D.

Ces paramètres ne sont pris en compte que si l'[URL de production](#production-url) est définie. Sinon, l'adresse IP locale est utilisée.

:::note

Le simulateur fonctionne toujours localement (127.0.0.1 ou localhost).

:::

## Aperçu sur l'appareil

### Écran de paramètres

Un écran de paramètres est disponible dans la barre d’onglets. Vous pouvez également le trouver sous l’onglet "More" si nécessaire (*à savoir*, votre application contient plus de quatre tables).

L'écran Paramètres vous permet de :

* Consultez votre URL distante ainsi que son état actuel
* De vous déconnecter (si vous étiez connecté en tant qu'utilisateur autorisé)

![Login & Settings screen](img/Login-Settings-screen-Publishing-section-4D-for-iOS.png)


### Modifier l'url distant

Vous pouvez facilement mettre à jour votre URL distante à partir des Paramètres de l'iPhone :

* Accédez aux paramètres de votre iPhone
* Sélectionnez l'application pour laquelle vous souhaitez que l'URL distante soit mise à jour
* Activez l'option "Réinitialiser l'adresse du serveur"

![Reset remote url](img/Reset-remote-url.png)

* Puis redémarrez votre application pour réinitialiser l'adresse du serveur
* Enfin, définissez la nouvelle URL distante

![Update remote url](img/Update-remote-url.png)


## Fonctionnalités

Cette zone vous permet de sélectionner et de configurer plusieurs fonctionnalités spéciales de l'application mobile. Ces fonctionnalités sont documentées dans des sections dédiées :

- [Authentification](../special-features/authentication.md)
- [Notifications Push](../special-features/push-notification.md)
- [Lien profond](../special-features/deep-linking)


