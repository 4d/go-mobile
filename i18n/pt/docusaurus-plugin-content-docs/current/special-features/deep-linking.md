---
id: deep-linking
title: Deep Linking
---


Graças a funcionalidade **deep linking**, é possível partilhar o conteúdo que está vendo com todos os seus colegas. Aqui há uma ilustração que resume o "deep linking":

![Animação Deep Link](img/4d-for-ios-deeplinking.gif)

Há duas maneiras de implementar "deep linking" em IOS: **"URL scheme"** e **"Universal Links"**. Os "URL schemes" são um método bem conhecido de "deep linking"  e os "Universal links" são o novo método que Apple implementou para conectar facilmente sua página web e sua aplicação sob o mesmo link.

:::informação 4D for Android

A funcionalidade Deep linking não está atualmente disponível para 4D for Android.

:::

## Comparação de modos deep linking

### URL Scheme

Aqui há uma comparação entre as duas opções que estão disponíveis no editor de projeto:

| PRÓS                                | CONTRAS                                           |
| ----------------------------------- | ------------------------------------------------- |
| Fácil de implementar                | Sempre requer permissão                           |
| Não precisa de um backend adicional | Não funciona se a aplicação não estiver instalada |
|                                     | Não funciona em Android                           |

### Universal links

| PRÓS                                                 | CONTRAS                                  |
| ---------------------------------------------------- | ---------------------------------------- |
| Não requer permissão                                 | Se necessita um backend estático com SSL |
| Não abre o navegador                                 | Mais complexo de implementar             |
| Compatível com Android                               |                                          |
| URL de fallback se a aplicação não estiver instalada |                                          |

## Esquema URL personalizado

No nível mais simples, os esquemas de URL permitem aos usuários abrir uma aplicação desde outras aplicações. Mas o verdadeiro poder dos esquemas URL está na capacidade de realizar ações específicas a medida que se abre a aplicação.



### Esquema de URL personalizado no editor de projeto

É muito simples incluir um esquema URL a sua aplicação móvel. Vamos ver um exemplo:

1. Selecione a ação predefinida **Share** da página [**Action**](../project-definition/actions.md) e selecione o alcance:
    *   entidade - para compartilhar o conteúdo de um formulário detalhado
    *   tabela - para compartilhar um formulário lista
2. Marque a propriedade **Deep Linking** na seção **Publishing** do editor de projetos.
3. A informação do esquema URL é preenchido automaticamente com o nome da aplicação definida previamente na página [**General**](../project-definition/general.md). Entretanto, ainda pode ser editado:

![Editor de projeto deep linking](img/deep-linking-project-editor-publishing-section.png)

4. Preencha seu método **On Mobile App Action**:

```4d

// On Mobile App Action database method

var $1 : Object  // Informação fonrecida por aplicação móvel
var $0 : Object  // Informação retornada para aplicação móvel

var $action : Object
$action:=MobileAppServer.Action.new($1)

Case of 

    : ($1.action="shareContact")

        $0:=$action.shareContext()

    Else 

        $0:=New object("success"; False;"statusText"; "Unknown action send to server")

End case 

```

5. Criação da aplicação.


### Usar esquemas URL em seu app móvel

1. Clique no botão **Action** para mostrar todas as suas ações disponíveis atualmente
2. Selecione a ação **Share** que foi previamente definida no editor de projetos
3. Aparece uma nova vista que lhe permite começar a compartilhar o conteúdo
4. Selecione o método de intercâmbio que quiser utilizar
5. Envie.

## Universal links

Os Universal links oferecem vários benefícios chave que não estão disponíveis com os esquemas de URL personalizados. Específicamente, os links universais são:

* **Unique**: Diferente de schemes personalizados de  URL , links universais não podem ser reclamadas por outros apps porque usam links padrão  HTTP ou HTTPS para seu website.

* **Secure**: quando os usuários instalam sua aplicação, iOS verifica que seu site web permita que sua aplicação abra URLs em seu nome. Só você pode criar e subir o arquivo que outorga esta permissão a seu servidor web, pelo que a associação de seu website com sua aplicação seja segura.

* **Flexible**: os links universais funcionam mesmo quando sua aplicação não estiver instalada. Neste caso, ao pressionar um link a seu site web se abre o conteúdo em Safari.

* **Simple**: uma única URL funciona tanto para seu site web quanto para sua aplicação.

* **Private**: outras aplicações podem se comunicar com sua aplicação sem necessidade de saber se sua aplicação estiver instalada.

### Links universais no Editor de Projeto

Para incluir os links universais em sua aplicação, o processo é bastante similar ao processo dos esquemas URL:

1. Selecione a ação predefinida **Share** da página [**Action**](../project-definition/actions.md) e selecione o alcance:
    *   entidade - para compartilhar um conteúdo de um formulário detalhado
    *   tabela - para compartilhar um formulário lista
2. Ativar a funcionalidade **Deep Linking** na seção **Publishing** no editor de projetos
3. Introduza a URL de seu site web no campo **Universal links**
4. Preencha seu método **On Mobile App Action**:

```4d

// On Mobile App Action database method

var $1 : Object  // Informação fonrecida por aplicação móvel
var $0 : Object  // Informação retornada para aplicação móvel

var $action : Object
$action:=MobileAppServer.Action.new($1)

Case of 

    : ($1.action="shareContact")

        $0:=$action.shareContext()

    Else 

        $0:=New object("success"; False;"statusText"; "Unknown action send to server")

End case 

```

5. Criação da aplicação.
6. Ativar os links universais do método **On Web Connection**:

```4d
// Método de banco On Web Connection

var $1; $2; $3; $4; $5; $6 : Text
var $handler : Object

$handler:=MobileAppServer.WebHandler.new()
Case of
    : ($handler.handle($1; $2; $3; $4; $5; $6))
        // Gerenciado por código móvel normal
    Else
        // Seu código web
End case

```



## Deep Linking e notificações Push

Algo genial sobre Deep Linking é que é completamente compatível com [notificações push](push-notification.md). Isso significa que pode enviar links Deep a seus usuários e levá-los diretamente à página correta.

Como pode ver, essa funcionalidade abre uma grande gama de possibilidades. Deep linking é uma funcionalidade crucial nas aplicações de hoje em dia, especialmente já que os usuários consumem o conteúdo mais rapidamente. Esta funcionalidade leva diretamente ao lugar desejado. Assim é recomendado que usem isso em seus apps móveis.

:::dica

Veja a documentação [**4D Mobile App Server** ](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md) para saber mais sobre como combinar notificações push com  deep linking.

:::






