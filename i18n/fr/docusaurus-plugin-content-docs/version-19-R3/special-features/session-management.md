---
id: session-management
title: Gestion des sessions
---




## Fichier session

Lorsqu'un utilisateur ouvre l'application pour la première fois, un fichier session est créé et stocké avec le fichier de données courant dans le dossier MobileApps.

Les fichiers de session sont organisés et groupés par dossier d'application. Les Team ID et Bundle ID de l'application sont concaténés pour créer des noms de dossiers d'application.

Voici un exemple de fichier de session généré par 4D for iOS :

```json
{
"application":{
  "id":"com.contactApp.Contact",
  "name":"Contact",
  "version":"1.0.0"
},
"team":{
  "id":"UTT7VDX8W5"
},
"language":{
  "id":"en_US",
  "code":"en",
  "region":"US"
},
"email":"",
"device":{
  "description":"iPhone X",
  "version":"11.3",
  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",
  "simulator":true
},
"send":"link",
"session":{
  "id":"7023d9205074199d1c16fc00d24354e778137675",
  "ip":"::ffff:192.168.5.4"
},
"status":"accepted",
"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"
}

```

Si vous souhaitez pouvoir valider manuellement la première connexion pour chaque session utilisateur, vous devez changer le statut par défaut "accepté" en "en attente" en ajoutant `$response.verify:=True` à la méthode base [*On Mobile App Authentication*](https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html).


## Composant Mobile Session Management

Sessions can be managed by the **Mobile Session Management** component:

<div>
<a className="button button--primary"
href="https://github.com/4d/Mobile-Session-Management/releases/latest">Mobile Session Management component</a>
</div>

1. Download and unzip the zip file
2. Go to Build / Components file and get the MOBILE SESSION MANAGEMENT.4dbase
3. Create a **Components** folder next to the 4D project with the app's data.
4. Place the **MOBILE SESSION MANAGEMENT** component in the newly created **Components** folder.
5. Restart 4D.
6. Click on the **Execute** button from the toolbar
7. In the 4D Methods Explorer, select the **MOBILE SESSION MANAGEMENT** method and click on the **Execute** button.
8. The Apps window will appear displaying all of your apps:

![Session](img/session-management.png)

* Right click on a session to reveal the session file in the Finder or delete it.
* You can change and define the session status for each device: accepted or pending

![Session selected](img/session-management-selected.png)


* The **Push** button will update the session in memory.
* The **Refresh** button updates the session list. 


