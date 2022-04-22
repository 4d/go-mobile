"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8712],{59169:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var o=t(83117),r=t(80102),n=(t(67294),t(3905)),i=["components"],p={id:"deploy-on-app-store-archive-and-upload",title:"Arquive e atualize seu Projeto"},l=void 0,s={unversionedId:"deployment/deploy-on-app-store-archive-and-upload",id:"version-19-R3/deployment/deploy-on-app-store-archive-and-upload",title:"Arquive e atualize seu Projeto",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R3/deployment/deploy-on-app-store-archive-and-upload.md",sourceDirName:"deployment",slug:"/deployment/deploy-on-app-store-archive-and-upload",permalink:"/go-mobile/pt/docs/19-R3/deployment/deploy-on-app-store-archive-and-upload",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/deployment/deploy-on-app-store-archive-and-upload.md",tags:[],version:"19-R3",frontMatter:{id:"deploy-on-app-store-archive-and-upload",title:"Arquive e atualize seu Projeto"},sidebar:"version-19-R3/docs",previous:{title:"Criar uma ficha em App Store",permalink:"/go-mobile/pt/docs/19-R3/deployment/deploy-on-app-store-create-appstore-record"}},u={},c=[{value:"PASSO 1. Configura\xe7\xe3o Xcode",id:"passo-1-configura\xe7\xe3o-xcode",level:2},{value:"PASSO 2. Obtenha uma ID de Equipe",id:"passo-2-obtenha-uma-id-de-equipe",level:2},{value:"PASSO 3. Configure 4D for iOS",id:"passo-3-configure-4d-for-ios",level:2},{value:"PASSO 4. Abra seu projeto com Xcode",id:"passo-4-abra-seu-projeto-com-xcode",level:2},{value:"PASSO 5. Arquive seu projeto com Xcode",id:"passo-5-arquive-seu-projeto-com-xcode",level:2},{value:"PASSO 6. Valide seu projeto",id:"passo-6-valide-seu-projeto",level:2},{value:"PASSO 7. Suba para a App Store",id:"passo-7-suba-para-a-app-store",level:2},{value:"PASSO 8. Selecione a vers\xe3o destinada \xe0 App Store",id:"passo-8-selecione-a-vers\xe3o-destinada-\xe0-app-store",level:2},{value:"PASSO 9. Envie para Revis\xe3o",id:"passo-9-envie-para-revis\xe3o",level:2}],d={toc:c};function m(e){var a=e.components,p=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,p,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,n.kt)("p",{parentName:"blockquote"},"Arquivar e publicar seu projeto para o App Store Connect.")),(0,n.kt)("h2",{id:"passo-1-configura\xe7\xe3o-xcode"},"PASSO 1. Configura\xe7\xe3o Xcode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se escolher uma Conta de Desenvolvedor Apple como um indiv\xedduo, sua conta est\xe1 dispon\xedvel imediatamente."),(0,n.kt)("li",{parentName:"ul"},"Se escolher uma Conta Desenvolvedor Apple como uma organiza\xe7\xe3o, tem que esperar pela valida\xe7\xe3o Apple."),(0,n.kt)("li",{parentName:"ul"},"Quando puder acessar sua conta, adicione-a a Xcode em Prefer\xeancias > Accounts."),(0,n.kt)("li",{parentName:"ul"},"Xcode vai instalar automaticamente o provisionamento e certificados necess\xe1rios.")),(0,n.kt)("h2",{id:"passo-2-obtenha-uma-id-de-equipe"},"PASSO 2. Obtenha uma ID de Equipe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Registre-se na sua Conta de Desenvolvedor Apple. L\xe1 pode achar sua ID de membro de um Time ou Equipe.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Obtenha uma ID de Equipe",src:t(59845).Z,width:"768",height:"739"})),(0,n.kt)("h2",{id:"passo-3-configure-4d-for-ios"},"PASSO 3. Configure 4D for iOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Abra 4D for iOS"),(0,n.kt)("li",{parentName:"ul"},"Na aba SE\xc7\xd5ES:")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Geral: Entre sua Team ID")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Team ID",src:t(49657).Z,width:"1082",height:"1009"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Publica\xe7\xe3o: introduza sua URL de produ\xe7\xe3o")),(0,n.kt)("p",null,"(HTTPS \xe9 obrigat\xf3rio para o lan\xe7amento)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Publishing",src:t(11004).Z,width:"1082",height:"1009"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Na aba BUILD:")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Criar e executar: crie seu projeto")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BuildTab",src:t(49927).Z,width:"1215",height:"1009"})),(0,n.kt)("h2",{id:"passo-4-abra-seu-projeto-com-xcode"},"PASSO 4. Abra seu projeto com Xcode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde a aba BUILD do editor de projetos de 4D for iOS, clique no Projeto > Abrir o projeto com Xcode")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Abra seu projeto com Xcode",src:t(51691).Z,width:"1033",height:"994"})),(0,n.kt)("h2",{id:"passo-5-arquive-seu-projeto-com-xcode"},"PASSO 5. Arquive seu projeto com Xcode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde Xcode, v\xe1 ao menu do simulador e selecione ",(0,n.kt)("strong",{parentName:"li"},"Generic iOS Device"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Generic iOS Device",src:t(58043).Z,width:"318",height:"558"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde o menu, clique em  Product e selecione ",(0,n.kt)("strong",{parentName:"li"},"Archive"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Arquive seu projeto com Xcode",src:t(36692).Z,width:"225",height:"337"})),(0,n.kt)("h2",{id:"passo-6-valide-seu-projeto"},"PASSO 6. Valide seu projeto"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No final do processo de arquivo, aparece a janela do Organizador com o arquivo que acaba de criar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"clique no bot\xe3o ",(0,n.kt)("strong",{parentName:"p"},"Validate")," para iniciar o processo de valida\xe7\xe3o."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Valide seu projeto",src:t(39716).Z,width:"1112",height:"729"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O primeiro passo \xe9 selecionar as op\xe7\xf5es de distribui\xe7\xe3o do App Store.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"App Store distribution options",src:t(70248).Z,width:"768",height:"485"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ent\xe3o deve voltar a assinar sua aplica\xe7\xe3o. Deixe que Xcode administre isso marcando a op\xe7\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Automaticamente gerencie assinaturas"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Re-sign your app",src:t(92866).Z,width:"768",height:"485"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verifique o conte\xfado de sua aplica\xe7\xe3o.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"App review",src:t(41433).Z,width:"768",height:"485"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se seu projeto passar o processo de valida\xe7\xe3o, vai ver esta mensagem:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Validation",src:t(65656).Z,width:"768",height:"485"})),(0,n.kt)("p",null,"Se um erro acontecer, uma mensagem ser\xe1 exibida. Estes erros devem ser resolvidos antes de tentar o processo de valida\xe7\xe3o novamente."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clique ",(0,n.kt)("strong",{parentName:"li"},"Done"),". Isso vai lhe devolver para a janela de Organizador.")),(0,n.kt)("h2",{id:"passo-7-suba-para-a-app-store"},"PASSO 7. Suba para a App Store"),(0,n.kt)("p",null,"Quando o processo de valida\xe7\xe3o tenha terminado, est\xe1 pronto para adicionar seu app para a App Store."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clique o bot\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Upload to App Store"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Suba para a App Store",src:t(42044).Z,width:"1112",height:"729"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quando seu projeto tiver sido atualizado com sucesso, ver\xe1 esta janela:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Upload successful",src:t(39936).Z,width:"768",height:"485"})),(0,n.kt)("h2",{id:"passo-8-selecione-a-vers\xe3o-destinada-\xe0-app-store"},"PASSO 8. Selecione a vers\xe3o destinada \xe0 App Store"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Em App Store Connect > App Store > iOS App, selecione seu app e clique no bot\xe3o ",(0,n.kt)("strong",{parentName:"li"},"+")," que aparece na se\xe7\xe3o Build")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add build",src:t(79642).Z,width:"1101",height:"1162"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Selecione a vers\xe3o que queira enviar e clique em ",(0,n.kt)("strong",{parentName:"li"},"Done"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Build selection",src:t(59716).Z,width:"1101",height:"1162"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finalmente, clique no bot\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Submit for Review"),".")),(0,n.kt)("h2",{id:"passo-9-envie-para-revis\xe3o"},"PASSO 9. Envie para Revis\xe3o"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O passo final para enviar sua aplica\xe7\xe3o para revis\xe3o \xe9 responder algumas perguntas r\xe1pidas sobre sua aplica\xe7\xe3o.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Envie para Revis\xe3o",src:t(67222).Z,width:"1160",height:"1101"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quando tiver terminado com as perguntas, clique ",(0,n.kt)("strong",{parentName:"p"},"Submit"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"O tempo m\xe9dio de revis\xe3o da App Store \xe9 de apenas dois dias!"))))}m.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return o.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return t?o.createElement(g,i(i({ref:a},u),{},{components:t})):o.createElement(g,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<n;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79642:function(e,a,t){a.Z=t.p+"assets/images/Add-build-app-store-connect-125a6da6dab376c3a5f66a40203ce15e.png"},70248:function(e,a,t){a.Z=t.p+"assets/images/App-Store-Distribution-options-0befe561af0cec5bcd8facf7681a7ae7.png"},65656:function(e,a,t){a.Z=t.p+"assets/images/Archive-validation-complete-e48a347ebb3ded597e714c4ab9978703.png"},36692:function(e,a,t){a.Z=t.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},49927:function(e,a,t){a.Z=t.p+"assets/images/BuildTab-f3ba903eca74e3a84690a816006f2ab4.png"},58043:function(e,a,t){a.Z=t.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},67222:function(e,a,t){a.Z=t.p+"assets/images/Export-Compliance-Content-Rights-Advertising-Identifer-832c4c2a41f4dc0e1c51359d67d8dc28.png"},51691:function(e,a,t){a.Z=t.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},39716:function(e,a,t){a.Z=t.p+"assets/images/Organizer-Project-Validation-a9c512fbb5ea5c6d545eef18c703a79b.png"},11004:function(e,a,t){a.Z=t.p+"assets/images/Publishing-c0eb8dd37534ce4b32a3e5f02cdfd227.png"},92866:function(e,a,t){a.Z=t.p+"assets/images/Re-sign-your-App-7b2992f63c7988ffc2ca830228c867e8.png"},41433:function(e,a,t){a.Z=t.p+"assets/images/Review-App-52773662f4a864a3a2f74ad29b59385d.png"},59716:function(e,a,t){a.Z=t.p+"assets/images/Select-build-app-store-connect-345cdd0f6ab34d09e3ae6e9fd0ae4a4f.png"},59845:function(e,a,t){a.Z=t.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},49657:function(e,a,t){a.Z=t.p+"assets/images/Team-ID-12c375482f73b79029a2a4e683a8fa4f.png"},42044:function(e,a,t){a.Z=t.p+"assets/images/Upload-to-AppStore-a119aac5a70e4144ea441d8a36095171.png"},39936:function(e,a,t){a.Z=t.p+"assets/images/upload-Successful-d2b342725164592071b6dcaaa791c7f8.png"}}]);