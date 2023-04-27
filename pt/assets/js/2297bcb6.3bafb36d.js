"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9665],{52957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const i={id:"deployment-in-house-distribute",title:"Distribua seu app in-House"},r=void 0,l={unversionedId:"tutorials/deploying-in-house/deployment-in-house-distribute",id:"version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute",title:"Distribua seu app in-House",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-distribute",permalink:"/go-mobile/pt/docs/19-R8/tutorials/deploying-in-house/deployment-in-house-distribute",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute.md",tags:[],version:"19-R8",frontMatter:{id:"deployment-in-house-distribute",title:"Distribua seu app in-House"},sidebar:"tutorials",previous:{title:"Arquive e exporte seu Projeto",permalink:"/go-mobile/pt/docs/19-R8/tutorials/deploying-in-house/deployment-in-house-archive-and-export"},next:{title:"Criar uma ficha em App Store",permalink:"/go-mobile/pt/docs/19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},s={},p=[{value:"PASSO 1. Suba sua aplica\xe7\xe3o",id:"passo-1-suba-sua-aplica\xe7\xe3o",level:2},{value:"PASSO 2. Crie o link da instala\xe7\xe3o",id:"passo-2-crie-o-link-da-instala\xe7\xe3o",level:2},{value:"PASSO 3. Instale a sua aplica\xe7\xe3o em iOS",id:"passo-3-instale-a-sua-aplica\xe7\xe3o-em-ios",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,n.kt)("p",{parentName:"blockquote"},"Suba sua aplica\xe7\xe3o para um servidor seguro.")),(0,n.kt)("h2",{id:"passo-1-suba-sua-aplica\xe7\xe3o"},"PASSO 1. Suba sua aplica\xe7\xe3o"),(0,n.kt)("p",null,"Suba sua aplica\xe7\xe3o a um servidor seguro:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Recursos (exibir imagem e imagem em tamanho real)"),(0,n.kt)("li",{parentName:"ul"},"arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"manifest.plist")),(0,n.kt)("li",{parentName:"ul"},"arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},".ipa"))),(0,n.kt)("p",null,"Pode usar qualquer servi\xe7o de armazenamento na nuvem para distribuir seu app logo que estiver protegida (Dropbox, Google Drive, etc)."),(0,n.kt)("p",null,":::nota"),(0,n.kt)("p",null,"Seu recurso e suas URL ipa devem coincidir com as URL definidas em seu arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"manifest.plist"),"."),(0,n.kt)("p",null,":::"),(0,n.kt)("h2",{id:"passo-2-crie-o-link-da-instala\xe7\xe3o"},"PASSO 2. Crie o link da instala\xe7\xe3o"),(0,n.kt)("p",null,"Crie um ",(0,n.kt)("strong",{parentName:"p"},"link de servi\xe7os ITMS"),"(iTUnes Music Store) com o endere\xe7o web completo de seu arquivo manifesto como par\xe2metro:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,n.kt)("p",null,"Esse link pode ser usado quando enviar emails, embebido na p\xe1gina html ou  mesmo em  um c\xf3digo QR."),(0,n.kt)("p",null,"Aqui um exemplo simples:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Contact demo app install",src:a(7258).Z,width:"497",height:"625"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"O c\xf3digo QR usado por essa documenta\xe7\xe3o n\xe3o est\xe1 ativo.")),(0,n.kt)("h2",{id:"passo-3-instale-a-sua-aplica\xe7\xe3o-em-ios"},"PASSO 3. Instale a sua aplica\xe7\xe3o em iOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instale o app clicando no link ou escaneando o C\xf3digo QR")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Scan and install",src:a(13552).Z,width:"2443",height:"2149"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quando abrir pela primeira vez um app empresarial que instalou manualmente, uma notifica\xe7\xe3o ser\xe1 exibida que indica que o desenvolvedor da aplica\xe7\xe3o n\xe3o \xe9 de confian\xe7a em seu dispositivo.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ignore essa mensagem e clique ",(0,n.kt)("strong",{parentName:"p"},"Cancel"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Em Configura\xe7\xf5es > Geral > Gest\xe3o de perfis & Gest\xe3o de dispositivo, no cabe\xe7alho "Enterprise App", se lista o perfil do desenvolvedor.'))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untrust developer",src:a(46894).Z,width:"2443",height:"2149"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Introduza o nome do perfil do desenvolvedor para seja reconhecido como confi\xe1vel.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Trust-confirmation",src:a(92882).Z,width:"2443",height:"2149"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Depois pode ir \xe0 sua aplica\xe7\xe3o e abri-la.")),(0,n.kt)("p",null,"Parab\xe9ns... j\xe1 pode distribuir sua primeira aplica\xe7\xe3o interna."))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?o.createElement(b,r(r({ref:t},u),{},{components:a})):o.createElement(b,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7258:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},13552:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},92882:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},46894:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);