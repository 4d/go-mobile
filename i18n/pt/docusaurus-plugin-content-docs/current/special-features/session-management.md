---
id: session-management
title: Gestão da sessão
---


4D para iOS e 4D para Android permitem-lhe gerir sessões de utilizadores, para que possa obter informações sobre os utilizadores ligados e melhorar a sua experiência na sua aplicação móvel.


## Arquivo de sessão

Quando um utilizador abre a aplicação pela primeira vez, um arquivo de sessão é automaticamente criado e armazenado ao lado do arquivo de dados atual na pasta MobileApps.

The session files are organized and grouped by app folder. The Team ID and app bundle ID are concatenated to create the app folder names.

Here is an example of a 4D for iOS-generated session file:

```json
{
"application":{
  "id":"com.contactApp. Contact",
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

Se quiser a habilidade para validar manualmente o primeiro login de cada sessão de usuário, adicione `$result.verify:=True` ao objeto retornado pelo método de banco de dados [On Mobile App Authentication](../4d/on-mobile-app-authentication.md). Alterará o estado padrão "aceito" para "pendente" no arquivo da sessão. Como padrão, o "estado" se estabelece automaticamente como "aceito" se a sessão for validada pelo método base[On Mobile App Authentication](../4d/on-mobile-app-authentication.md) (`$result.success` definido como`True`). For more information, see [this example](../tutorials/login-forms/email.md#without-the-component).


## Objecto sessão

As sessões móveis podem aproveitar as poderosas sessões de usuário [4D](https://developer.4d.com/docs/WebServer/sessions.html), quando são ativadas no servidor. Neste caso, a informação armazenada no arquivo de sessão móvel [](#session-file) é utilizada para preencher o objecto de sessão [](https://developer.4d.com/docs/API/SessionClass.html) no servidor, para que possa partilhar um carrinho de compras para o mesmo usuário entre as suas sessões web e móveis, por exemplo.

No projecto móvel, o objecto de sessão [](https://developer.4d.com/docs/API/SessionClass.html) está automaticamente disponível a partir de:

- o método base [On Mobile App Authentication](../4d/on-mobile-app-authentication.md)
- o método banco de dados [On Mobile App Action](../4d/on-mobile-app-action.md)
- [webareas](https://github.com/mesopelagique/form-detail-WebArea) nos seus formulários.

Com sessões de usuário, pode acessar e exibir dados de usuários através de [4D tags](https://developer.4d.com/docs/Tags/tags.html) em [webareas](https://github.com/mesopelagique/form-detail-WebArea). Por exemplo, numa forma page.shtml, pode escrever:

```html
<html><body><h1>Utiliza o seguinte endereço: <!--#4DTEXT Session.info.mobile.email--> </h1></body></html>
```




## Mobile Session Management Component

Sessions can be managed by the **Mobile Session Management** component:

<div>
<a className="button button--primary"
href="https://github.com/4d/Mobile-Session-Management/releases/latest">Componente Mobile Session Management</a>
</div>

1. Descarregue e descomprima o arquivo zip
2. Vá para o arquivo Gerar/Componentes e obtenha o arquivo MOBILE SESSION MANAGEMENT.4dbase
3. Crie uma pasta **Componentes** junto ao banco de dados 4D com os dados da aplicação.
4. Coloque o componente **MOBILE SESSION MANAGEMENT** na pasta **Componentes** recém criada.
5. Reinicie 4D.
6. Clique no botão **Executar** a partir da barra de ferramentas
7. No explorador de métodos 4D, selecione o método **MOBILE SESSION MANAGEMENT** e clique no botão **Executar**.
8. A janela de aplicações aparecerá mostrando todas suas aplicações:

![Session](img/session-management.png)

* Right click on a session to reveal the session file in the Finder or delete it.
* You can change and define the session status for each device: accepted or pending

![Session selected](img/session-management-selected.png)


* The **Push** button will update the session in memory.
* The **Refresh** button updates the session list. 


