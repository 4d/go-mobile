---
id: faq
title: FAQ
---

## Conditions préalables



<details><summary style= {{ fontWeight: "bold", marginBottom: "20px" }}>Dois-je avoir des connaissances spécialisées pour utiliser 4D for iOS et 4D for Android ?</summary>

Non. Avec 4D for iOS et 4D for Android, vous pouvez facilement créer de nouveaux projets mobiles directement depuis 4D, sans aucune connaissance préalable en matière de création d’applications iOS natives !

L'éditeur de projet mobile a été conçu de façon à être utilisé sans aucune connaissance spécifique en développement d’applications mobiles.

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Y a-t-il des conditions préalables à l'utilisation de 4D for iOS ?</summary>

See the requirements list [here](../getting-started/requirements.md).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Pour quelle(s) plateforme(s) mobile(s) puis-je développer sur macOS?</summary>

Vous pouvez développer à la fois pour les plateformes mobiles iOS et Android.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Pour quelle(s) plateforme(s) mobile(s) puis-je développer sur Windows ?</summary>

Vous pouvez développer uniquement pour la plateforme Android.

For the iOS platform, we need XCode to compile the final application and to run the Simulator.

</details>




## Licence

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'un Serveur Web 4D pour exécuter 4D for iOS ?</summary>

Non – 4D for iOS est inclus dans 4D Server v17 R2 et dans les versions plus récentes.

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Existe-t-il une licence de test ou d’évaluation ?</summary>

Si vous avez déjà une licence 4D Developer Pro ou 4D Server de 4D v17 R2 ou de versions plus récentes, 4D for iOS y est inclus.

Si vous n’êtes pas un partenaire 4D ou si vous ne participez pas au programme de maintenance de 4D, vous devez attendre la sortie de 4D v18.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Quelle licence 4D dois-je utiliser avec 4D for iOS ?</summary>

Pour développer des applications 4D for iOS, vous avez besoin d’une licence 4D Developer Pro v17 R2 (macOS) ou une version plus récente.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Quelle licence 4D dois-je utiliser pour déployer des applications créées avec 4D for iOS ?</summary>

Vous avez besoin d’une licence 4D Server (macOS ou Windows) v17 R2 ou d'une licence plus récente pour déployer des applications 4D for iOS.

Aucune autre licence n'est nécessaire. Vos applications 4D for iOS partageront les mêmes licences que celles de 4D Remote (client).

Les clients peuvent se connecter sur des PC Mac, Windows ou sur des mobiles iPhone, tant que l'ensemble des utilisateurs simultanés sont couverts par la licence 4D Server.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>J’ai un 4D Server et une extension pour deux clients (quatre clients au total). Combien d'appareils mobiles puis-je utiliser ?</summary>

Vous pouvez utiliser jusqu'à quatre appareils mobiles.

</details>


## Questions diverses

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Puis-je modifier et mettre à jour les données de mon application iOS ?</summary>

Oui, bien entendu.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Où sont stockées mes données ?</summary>

Vos données sont stockées localement sur vos appareils iOS. Cela vous permettra d'accéder à vos données en mode hors ligne.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Puis-je utiliser des tables reliées dans 4D for iOS ?</summary>

Conscients de votre utilisation fréquente des tables liées, nous travaillons actuellement sur leur accessibilité, prévue pour une version ultérieure de 4D for iOS.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Puis-je utiliser des champs calculés dans 4D for iOS ?</summary>

Vous avez la possibilité de créer des champs pré-calculés dans 4D et de les publier depuis la[section Structure]`(project-definition-structure.html)` dans l'éditeur de projet de 4D for iOS.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'images dans ma base de données ?</summary>

Les images ne sont pas obligatoires, mais nous vous recommandons d'en utiliser pour garantir la meilleure expérience utilisateur.

4D for iOS offre un large éventail de modèles de [list form]`(list-form-templates.html)` et de [detail form]`(detail-form-templates.html)`. Avec ou sans images, avec des graphiques, etc.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Dois-je créer une icône pour mon application iOS ?</summary>

Il est fortement recommandé d'avoir une icône pour votre application 4D for iOS. Si vous n'en avez pas, l'icône par défaut (le logo 4D) sera affichée.

Si vous possédez déjà une icône pour votre application 4D, vous pouvez la glisser-déposer directement dans la zone consacrée à l'icône dans la section [General]`(general.html)` de l'éditeur de projet.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Comment puis-je tester mon application ?</summary>

4D for iOS vous permet de tester vos applications dans le [Simulator]`(simulator.html)`. Pour tester votre application sur votre appareil iOS, il vous faut un **compte Apple Developer payant** (install-device.html) (iPhone et iPad).

**Note :** Pour installer votre application avec un **compte Apple Developer gratuit**, vous pouvez ouvrir votre projet iOS généré et installer votre application via Xcode.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Dois-je créer des modèles iOS spécifiques pour créer mes applications sur un iPhone ou un iPad ?</summary>

Tous les modèles disponibles dans 4D for iOS sont optimisés pour iPhone. Ils fonctionnent également parfaitement sur les iPad.

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'un compte Apple Developer ?</summary>

Pour tester votre application, vous aurez besoin de créer au moins un [free Apple Developer account]`(free-developer-account.html)`.

Pour déployer une application 4D for iOS, vous devez adhérer au [Apple Developer Enterprise Program]`(register-apple-developer-enterprise-program.html)` (pour un déploiement interne) ou au [Apple Developer Program]`(register-apple-developer-program-organization.html)` (pour un déploiement sur l'App Store).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Puis-je personnaliser mon application 4D for iOS ?</summary>

4D for iOS génère un véritable projet Xcode que vous pouvez [ouvrir et modifier]`(open-xcode.html)` à votre guise.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Is there a specific size limit for my apps?</summary>

On iOS, make sure your app total uncompressed size doesn't exceed 4GB. For more information, click [here](https://help.apple.com/app-store-connect/#/dev611e0a21f).

On Android, with [Android App Bundles](https://developer.android.com/guide/app-bundle), the total size of the compressed APKs required to install your app should not exceed 150 MB. For more details about the Android size restrictions, click [here](https://developer.android.com/topic/performance/reduce-apk-size) or [here](https://developer.android.com/guide/playcore/asset-delivery).

</details>




