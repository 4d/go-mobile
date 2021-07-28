---
id: deployment-in-house-distribute
title: Distribua seu app in-House
---

> **OBJECTIVES**
> 
> Suba sua aplicação para um servidor seguro.


## PASSO 1. Suba sua aplicação

Suba sua aplicação a um servidor seguro:

* Recursos (exibir imagem e imagem em tamanho real)
* `manifest.plist` file
* `.ipa` file

Pode usar qualquer serviço de armazenamento na nuvem para distribuir seu app logo que estiver protegida (Dropbox, Google Drive, etc).

:::note

Your asset and ipa URLs must match the URLs defined in your `manifest.plist` file.

:::

## PASSO 2. Crie o link da instalação

Create an **ITMS Serices link** (iTUnes Music Store) with the full web address of your manifest file as a parameter:

```html
itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist

```

This link can be used when sending emails, embedded in an html page, or even within a QR code.

Here is a simple example:

![Contact demo app install](img/Contact-demo-app-install.png)

*The QR Code used for this documentation is not active.*

## PASSO 3. Instale a sua aplicação em iOS

* Instale o app clicando no link ou escaneando o Código QR

![Scan and install](img/Scan-and-install.png)

* Quando abrir pela primeira vez um app empresarial que instalou manualmente, uma notificação será exibida que indica que o desenvolvedor da aplicação não é de confiança em seu dispositivo.

* Ignore essa mensagem e clique **Cancel**.

* Em Configurações > Geral > Gestão de perfis & Gestão de dispositivo, no cabeçalho "Enterprise App", se lista o perfil do desenvolvedor.

![Untrust developer](img/Untrust-developer.png)

* Introduza o nome do perfil do desenvolvedor para seja reconhecido como confiável.

![Trust-confirmation](img/Trust-confirmation.png)

* Depois pode ir à sua aplicação e abri-la.

Congratulations... you can now distribute your app in-house.
