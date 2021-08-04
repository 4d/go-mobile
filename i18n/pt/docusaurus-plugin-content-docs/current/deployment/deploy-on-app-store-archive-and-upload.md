---
id: deploy-on-app-store-archive-and-upload
title: Arquive e atualize seu Projeto
---

> **OBJETIVOS**
> 
> Arquivar e publicar seu projeto para o App Store Connect.

## PASSO 1. Configuração Xcode
* Se escolher uma Conta de Desenvolvedor Apple como um indivíduo, sua conta está disponível imediatamente.
* Se escolher uma Conta Desenvolvedor Apple como uma organização, tem que esperar pela validação Apple.
* Quando puder acessar sua conta, adicione-a a Xcode em Preferências > Accounts.
* Xcode vai instalar automaticamente o provisionamento e certificados necessários.

## PASSO 2. Obtenha uma ID de Equipe

* Registre-se na sua Conta de Desenvolvedor Apple. Lá pode achar sua ID de membro de um Time ou Equipe.

![Obtenha uma ID de Equipe](img/Team-ID-4D-for-iOS.png)

## PASSO 3. Configure 4D for iOS

* Abra 4D for iOS
* Na aba SEÇÕES:

**Geral: Entre sua Team ID**

![Team ID](img/Team-ID.png)

**Publicação: introduza sua URL de produção**

(HTTPS é obrigatório para o lançamento).

![Publishing](img/Publishing.png)

* Na aba BUILD:

**Criar e executar: crie seu projeto**

![BuildTab](img/BuildTab.png)

## PASSO 4. Abra seu projeto com Xcode

* Desde a aba BUILD do editor de projetos de 4D for iOS, clique no Projeto > Abrir o projeto com Xcode

![Abra seu projeto com Xcode](img/Open-your-project-Xcode-4D-for-iOS.png)

## PASSO 5. Arquive seu projeto com Xcode

* Desde Xcode, vá ao menu do simulador e selecione **Generic iOS Device**.

![Generic iOS Device](img/Deployment-Generic-iOS-Device.png)

* Desde o menu, clique em  Product e selecione **Archive**

![Arquive seu projeto com Xcode](img/Archive-your-Project.png)

## PASSO 6. Valide seu projeto

* No final do processo de arquivo, aparece a janela do Organizador com o arquivo que acaba de criar.

* clique no botão **Validate** para iniciar o processo de validação.

![Valide seu projeto](img/Organizer-Project-Validation.png)

* O primeiro passo é selecionar as opções de distribuição do App Store.

![App Store distribution options](img/App-Store-Distribution-options.png)

* Então deve voltar a assinar sua aplicação. Deixe que Xcode administre isso marcando a opção **Automaticamente gerencie assinaturas**.

![Re-sign your app](img/Re-sign-your-App.png)

* Verifique o conteúdo de sua aplicação.

![App review](img/Review-App.png)

* Se seu projeto passar o processo de validação, vai ver esta mensagem:

![Validation](img/Archive-validation-complete.png)

Se um erro acontecer, uma mensagem será exibida. Estes erros devem ser resolvidos antes de tentar o processo de validação novamente.

* Clique **Done**. Isso vai lhe devolver para a janela de Organizador.

## PASSO 7. Suba para a App Store

Quando o processo de validação tenha terminado, está pronto para adicionar seu app para a App Store.

* Clique o botão **Upload to App Store**.

![Suba para a App Store](img/Upload-to-AppStore.png)

* Quando seu projeto tiver sido atualizado com sucesso, verá esta janela:

![Upload successful](img/upload-Successful.png)

## PASSO 8. Selecione a versão destinada à App Store

* Em App Store Connect > App Store > iOS App, selecione seu app e clique no botão **+** que aparece na seção Build

![Add build](img/Add-build-app-store-connect.png)

* Selecione a versão que queira enviar e clique em **Done**.

![Build selection](img/Select-build-app-store-connect.png)

* Finalmente, clique no botão **Submit for Review**.

## PASSO 9. Envie para Revisão

* O passo final para enviar sua aplicação para revisão é responder algumas perguntas rápidas sobre sua aplicação.

![Envie para Revisão](img/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* Quando tiver terminado com as perguntas, clique **Submit**.

* O tempo médio de revisão da App Store é de apenas dois dias!
