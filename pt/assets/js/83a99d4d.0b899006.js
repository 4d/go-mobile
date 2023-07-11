"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3193],{10012:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=o(87462),a=(o(67294),o(3905));const i={id:"list-form-template",title:"Modelos de formul\xe1rios Lista"},l=void 0,s={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"version-20/tutorials/creating-list-forms/list-form-template",title:"Modelos de formul\xe1rios Lista",description:"Neste tutorial, vamos cobrir quase todos os aspectos da cria\xe7\xe3o de um modelo de lista formul\xe1rio, tais como: criar um formul\xe1rio lista com uma barra de pesquisa e uma tabela exibindo uma imagem, um t\xedtulo, e um subt\xedtulo para cada c\xe9lula.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/creating-list-forms/list-form-template.md",tags:[],version:"20",frontMatter:{id:"list-form-template",title:"Modelos de formul\xe1rios Lista"},sidebar:"tutorials",previous:{title:"Create your first mobile app with 4D",permalink:"/go-mobile/pt/docs/tutorials/create-your-first-app"},next:{title:"\xcccones de formul\xe1rios Lista",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-icon"}},n={},m=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",level:2},{value:"Adicione um modelo de formul\xe1rio lista para seu projeto m\xf3vel",id:"adicione-um-modelo-de-formul\xe1rio-lista-para-seu-projeto-m\xf3vel",level:2},{value:"Conte\xfados do modelo formul\xe1rio lista",id:"conte\xfados-do-modelo-formul\xe1rio-lista",level:2}],u={toc:m};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Neste tutorial, vamos cobrir quase todos os aspectos da cria\xe7\xe3o de um modelo de lista formul\xe1rio, tais como: criar um formul\xe1rio lista com uma ",(0,a.kt)("strong",{parentName:"p"},"barra de pesquisa")," e uma tabela exibindo uma ",(0,a.kt)("strong",{parentName:"p"},"imagem"),", um ",(0,a.kt)("strong",{parentName:"p"},"t\xedtulo"),", e um ",(0,a.kt)("strong",{parentName:"p"},"subt\xedtulo")," para cada c\xe9lula."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"List form template final result",src:o(61121).Z,width:"1417",height:"992"})),(0,a.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,a.kt)("p",null,"Antes de come\xe7ar, baixe e descompacte o ",(0,a.kt)("strong",{parentName:"p"},"Starter Project")," que inclui:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uma pasta ",(0,a.kt)("strong",{parentName:"li"},"formul\xe1rio Lista")),(0,a.kt)("li",{parentName:"ul"},'Um projeto demo 4D ("Contact") com um projeto app m\xf3vel pronto para usar.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"Starter project")),(0,a.kt)("h2",{id:"adicione-um-modelo-de-formul\xe1rio-lista-para-seu-projeto-m\xf3vel"},"Adicione um modelo de formul\xe1rio lista para seu projeto m\xf3vel"),(0,a.kt)("p",null,"A primeira coisa que precisa \xe9 criar uma pasta ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," em ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," e arrastar e soltar sua pasta ",(0,a.kt)("strong",{parentName:"p"},"list form")," l\xe1 dentro."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder list form template",src:o(47557).Z,width:"1301",height:"367"})),(0,a.kt)("p",null,'Agora lance sua aplica\xe7\xe3o 4D e abra o projeto  4D "Contact".'),(0,a.kt)("p",null,'Selecione o projeto m\xf3vel "Contact Demo App": ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,a.kt)("p",null,"Na se\xe7\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Formul\xe1rio")," do editor de projeto m\xf3vel, ver\xe1 que seu modelo de formul\xe1rio lista foi agregado com sucesso \xe0 lista de modelos de formul\xe1rios lista dispon\xedveis:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:o(55999).Z,width:"1072",height:"994"})),(0,a.kt)("p",null,"Agora vamos nos concentrar nos conte\xfados da pasta  ",(0,a.kt)("strong",{parentName:"p"},"Custom List form")),(0,a.kt)("h2",{id:"conte\xfados-do-modelo-formul\xe1rio-lista"},"Conte\xfados do modelo formul\xe1rio lista"),(0,a.kt)("p",null,"Nesta pasta vai encontrar:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Um \xedcone ",(0,a.kt)("strong",{parentName:"li"},"layoutIconx2.png")," de 160x160px: mostrado no editor de projeto quando selecionar seu modelo"),(0,a.kt)("li",{parentName:"ul"},"Um arquivo",(0,a.kt)("strong",{parentName:"li"},"manifest.json")," : inclui uma descri\xe7\xe3o b\xe1sica do modelo"),(0,a.kt)("li",{parentName:"ul"},"Um arquivo",(0,a.kt)("strong",{parentName:"li"},"template.svg")," : a representa\xe7\xe3o visual de seu modelo que \xe9 mostrada quando definir o conte\xfado de seu formul\xe1rio lista."),(0,a.kt)("li",{parentName:"ul"},"uma pasta ",(0,a.kt)("strong",{parentName:"li"},"ios")," que inclui o storyboard (interface gr\xe1fica) e arquivo",(0,a.kt)("strong",{parentName:"li"},"Swift")," (c\xf3digo par formul\xe1rio) na pasta",(0,a.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")),(0,a.kt)("li",{parentName:"ul"},"uma pasta ",(0,a.kt)("strong",{parentName:"li"},"android")," que inclui o arquivo layout.xml (interface gr\xe1fica) na pasta ",(0,a.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout"),".")),(0,a.kt)("p",null,"Esses arquivos e pastas s\xe3o detalhados nas pr\xf3ximas se\xe7\xf5es."))}p.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var n=r.createContext({}),m=function(e){var t=r.useContext(n),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=m(e.components);return r.createElement(n.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,n=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(o),d=a,f=c["".concat(n,".").concat(d)]||c[d]||p[d]||i;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=c;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var m=2;m<i;m++)l[m]=o[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},55999:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},61121:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},47557:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);