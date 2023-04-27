---
id: push-notification
title: Push notifications
---

:::informação 4D for Android

This section is currently not available in 4D for Android.

:::

## O que é uma notificação push?

Em um telefone móvel, uma notificação Push é uma mensagem de alerta, recebido através de uma aplicação, que pode abrir, eliminar, autorizar ou bloquear. Pode ser muito útil por exemplo para notificar aos usuários da aplicação que há uma nova versão disponível.

Mas o que acontece com a arquitetura de implementação, para poder integrar essa funcionalidade em uma aplicação móvel? E qual é o processo de uma notificação push, desde a criação até a visualização no telefone do usuário?

## Arquitetura técnica

Esses são os elementos diferentes necessários para criar, enviar e receber uma notificação push móvel:

![Processo de notificações Push](img/4D-for-ios-push-notification.png)

## Pré-requisitos

Para enviar notificações push, é necessário um arquivo de autenticação  `AuthKey_XXXYYY.p8` 8 da Apple.

1. Gerar e baixar um arquivo chave .p8 está descrito [nesta documentação](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md).

2. Na página [Publishing](../project-definition/publishing) marque a opção **Push notifications** e selecione seu certificado no projeto móvel.

![Publishing section](img/push-notification-publishing-section.png)


## Exemplo básico para gerenciar suas notificações push

O componente [4D Mobile App Server](https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master) fornece métodos para notificações push para um ou múltiplos recebedores. Para informações detalhadas, veja a documentação de componente [PushNotification ](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md).

Este é um exemplo para enviar uma notificação push a `test@4d.com`:

```4d

$pushNotification:=MobileAppServer. PushNotification.new() 
$notification:=New object 
$notification.title:="Este é o título" 
$notification.body:="Aqui é o conteúdo da notificação" 
$response:=$pushNotification.send($notification;"test@4d.com")

```

It's as simple as that!

:::dica

Veja a documentação [**4D Mobile App Server** ](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para saber mais sobre como adaptar notificações push para suas necessidades. Pode usar e escolher quais os aspectos mais relevantes para sua aplicação. Todas as contribuições são bem vindas a este projeto, seja através de comentários, relatórios de erros ou ainda melhor: "pull requests".

:::

## Empurrar notificações com sincronização de dados

Com uma notificação push, pode lançar uma sincronização para atualizar seus dados.

Por exemplo se sua aplicação tiver uma opção de acompanhamento de entrega, a informação de entrega será atualizada no banco de dados graças à notificação enviada ao cliente. Esta notificação, contendo uma petição para sincronizar os dados, vai permitir ao cliente modificar os dados no seu smartphone.

Para fazer isso no componente  `4D Mobile App Server` , precisa especificar se vai ou não forçar a sincronização de dados em suas notificações push/empurrar. Para isso, simplesmente forneça o valor booleano `dataSynchro` no objeto `userInfo`.

### Sincronização de dados com uma notificação e abertura de registro

Como padrão normal, uma notificação de abertura de registro automaticamente ativa a sincronização de dados.

Por exemplo, em um app Contact, se uma informação específica de contato (*ou seja.* um registro do contato, tal como endereço ou número de telefone) for modificado, o usuário recebe uma notificação que automaticamente abre o registro relevante e sincroniza os dados contidos no registro. Quando o usuário abrir a notificação, a informação de contato é totalmente atualizada.

Aqui um exemplo do comportamento normal,  uma petição `dataSynchro` com o método `open()`:

:::nota

Note que exclusivamente para o método `open()`, esse é o comportamento padrão. Como resultado, se não especificar o valor booleano `dataSynchro` seu valor por padrão será `true`.

:::

```4d

$pushNotification:=MobileAppServer. PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 

$entity:=ds. Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

Entretanto pode escolher não forçar uma sincronização de dados, para prevenir `dataSynchro`:

```4d

$pushNotification:=MobileAppServer. PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; False)

$entity:=ds. Employees.get("456456")
$response:=$pushNotification.open($entity; $notification; $recipients)

```

### Sincronização de dados com uma notificação simples

Também pode se pedir uma sincronização para uma notificação simples, sem abrir um registro específico. Por exemplo, algumas novas entradas foram adicionadas. Pode informar então a seu usuário e atualizar os dados sem manipulação do seu lado.

Aqui está um exemplo de código que pode usar com outros métodos, desde que preencha o objeto `userInfo` com o valor `dataSynchro`.

```4d

$pushNotification:=MobileAppServer. PushNotification.new()

$notification:=New object
$notification.title:="This is title" 
$notification.body:="Here is the content of this notification" 
$notification.userInfo:=New object("dataSynchro"; True)

$response:=$pushNotification.send($notification; $recipients)

```
![Data synchronization animation](img/pushandSynchro.gif)

## Configuração Windows

Usuários de Windows precisam baixar a [última versão de CURL](https://curl.se/download.html) para trabalhar nas variáveis do ambiente de sua máquina. Ou podem inserir curl.exe na pasta Resources do banco de dados produção.

## Pasta MobileApps

Não importa se trabalhar em Windows ou macOS é preciso copiar os arquivos abaixo de seu proejto de desenvolvimento para seu projeto de produção:

- `4DBASE/MobileApps/ID. BundleID/AuthKey_XXXX.`
- `4DBASE/MobileApps/ID. BundleID/manifest.json`


