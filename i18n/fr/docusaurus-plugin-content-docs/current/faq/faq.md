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

### Tableau de comparaison de version

| Xcode  | Swift | iOS  | 4D          | macOS   |
| ------ | ----- | ---- | ----------- | ------- |
| 12.4   | 5.3.2 | 14.4 | 18R6 beta   | 10.15.4 |
| 12.2   | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |
| 12.0   | 5.3   | 14.0 | 18R4        | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3        | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2        | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1        | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2        | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18          | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6        | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5        | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4        | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3        | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2        | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2        | 10.13.2 |

Si vous souhaitez une version antérieure de Xcode, vous pouvez la télécharger ici : https://developer.apple.com/download/more/

=> Seuls les développeurs ayant souscrit au Apple Developer Program peuvent télécharger des versions antérieures sur le site web Apple Developer.

Voir les conditions préalables [here]`(requirements.html)`.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>For which mobile platform(s) can I develop on macOS?</summary>

You can develop for both the iOS and Android mobile platforms.

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>For which mobile platform(s) can I develop on Windows?</summary>

You can only develop for the Android platform.

For the iOS platform, we need XCode to compile the final application and to run the Simulator.

</details>




## Licence

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'un Serveur Web 4D pour exécuter 4D for iOS ?</summary>

Non – 4D for iOS est inclus dans 4D Server v17 R2 et dans les versions plus récentes.

</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Existe-t-il une licence de test ou d’évaluation ?</summary>

Si vous avez déjà une licence 4D Developer Pro ou 4D Server de 4D v17 R2 ou de versions plus récentes, 4D for iOS y est inclus.

If you're not a 4D Partner or don't participate in the 4D Maintenance program, you have to wait for 4D v18.

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

Conscients de votre utilisation fréquente des tables reliées pour vos applications commerciales, nous travaillons sur l'accessibilité des tables reliées pour une prochaine version de 4D for iOS.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Puis-je utiliser des champs calculés dans 4D for iOS ?</summary>

Vous avez la possibilité de créer des champs pré-calculés dans 4D et de les publier depuis la[section Structure]`(project-definition-structure.html)` dans l'éditeur de projet de 4D for iOS.

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'images dans ma base de données ?</summary>

Les images ne sont pas obligatoires, mais nous vous recommandons d'en utiliser pour garantir la meilleure expérience utilisateur.

4D for iOS offers a variety of [list form]`(list-form-templates.html)` and [detail form]`(detail-form-templates.html)` templates. With or without images, with charts...

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

Tous les modèles disponibles dans 4D for iOS sont optimisés pour l'iPhone. Ils fonctionnent également parfaitement sur les iPad.

</details>



<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Ai-je besoin d'un compte Apple Developer ?</summary>

To test your app, you'll need to create at least a [free Apple Developer account]`(free-developer-account.html)`.

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program]`(register-apple-developer-enterprise-program.html)` (for an in-house deployment) or in the [Apple Developer Program]`(register-apple-developer-program-organization.html)` (for an App Store deployment).

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Puis-je personnaliser mon application 4D for iOS ?</summary>

4D for iOS génère un véritable projet Xcode que vous pouvez [ouvrir et modifier]`(open-xcode.html)` à votre guise.

</details>




