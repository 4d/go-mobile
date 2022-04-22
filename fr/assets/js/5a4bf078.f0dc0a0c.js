"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8232],{56101:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],l={id:"testing-on-your-device",title:"Installation sur votre appareil iOS"},p=void 0,u={unversionedId:"deployment/testing-on-your-device",id:"version-19-R2/deployment/testing-on-your-device",title:"Installation sur votre appareil iOS",description:"Vous pouvez installer et tester votre application mobile sur un appareil connect\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/deployment/testing-on-your-device.md",sourceDirName:"deployment",slug:"/deployment/testing-on-your-device",permalink:"/go-mobile/fr/docs/19-R2/deployment/testing-on-your-device",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/deployment/testing-on-your-device.md",tags:[],version:"19-R2",frontMatter:{id:"testing-on-your-device",title:"Installation sur votre appareil iOS"},sidebar:"version-19-R2/docs",previous:{title:"Depuis votre iPhone",permalink:"/go-mobile/fr/docs/19-R2/debug/from-iphone"},next:{title:"Archiver et exporter un projet",permalink:"/go-mobile/fr/docs/19-R2/deployment/deployment-in-house-archive-and-export"}},s={},c=[{value:"Pr\xe9-requis",id:"pr\xe9-requis",level:2},{value:"\xc9TAPE 1. Cr\xe9er un compte",id:"\xe9tape-1-cr\xe9er-un-compte",level:2},{value:"\xc9TAPE 2. Configurer Xcode",id:"\xe9tape-2-configurer-xcode",level:2},{value:"\xc9TAPE 3. Obtenez votre Team ID",id:"\xe9tape-3-obtenez-votre-team-id",level:2},{value:"\xc9TAPE 4. Team ID pour un compte gratuit",id:"\xe9tape-4-team-id-pour-un-compte-gratuit",level:2},{value:"Profil et certificat fournis par Xcode",id:"profil-et-certificat-fournis-par-xcode",level:3},{value:"Cr\xe9ation du projet avec Xcode",id:"cr\xe9ation-du-projet-avec-xcode",level:3},{value:"STEP 5. Team ID pour un compte payant",id:"step-5-team-id-pour-un-compte-payant",level:2},{value:"\xc9TAPE 6. Installation",id:"\xe9tape-6-installation",level:2},{value:"Installation automatique avec Apple Configurator 2",id:"installation-automatique-avec-apple-configurator-2",level:3},{value:"Installation manuelle avec Xcode",id:"installation-manuelle-avec-xcode",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vous pouvez installer et tester votre application mobile sur un appareil connect\xe9."),(0,i.kt)("h2",{id:"pr\xe9-requis"},"Pr\xe9-requis"),(0,i.kt)("p",null,"Vous devez vous inscrire \xe0 un Apple Developer Program. En fonction de vos objectifs et de vos pr\xe9f\xe9rences, vous pouvez choisir de vous inscrire dans l\u2019un des programmes suivants\xa0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Free Apple Developer Program]",(0,i.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)-- \xe0 ajouter"),": A des fins de test uniquement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program pour les entreprises")," ou ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"pour les particuliers")," : \xe0 des fins de d\xe9ploiement sur l'App Store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," : \xe0 des fins de d\xe9ploiement interne de votre application")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous aurez besoin d' ",(0,i.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," install\xe9 sur votre Mac pour installer votre application automatiquement (facultatif)."))),(0,i.kt)("h2",{id:"\xe9tape-1-cr\xe9er-un-compte"},"\xc9TAPE 1. Cr\xe9er un compte"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Identifiant Apple")," : Cr\xe9ez votre identifiant Apple. Si vous n'en poss\xe9dez pas un, cliquez ",(0,i.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"ici"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Developer Account")," : Choisissez un Apple Developer Program (pour les entreprises ou les particuliers) si vous souhaitez d\xe9ployer votre application sur l'App Store ou bien depuis l'Apple Developer Enterprise Program (pour un d\xe9ploiement interne)."))),(0,i.kt)("h2",{id:"\xe9tape-2-configurer-xcode"},"\xc9TAPE 2. Configurer Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Developer Account")," : Dans Xcode > Preferences > Accounts, ajoutez votre Apple ID. ",(0,i.kt)("img",{alt:"Developer Account",src:r(53164).Z,width:"768",height:"557"}))),(0,i.kt)("h2",{id:"\xe9tape-3-obtenez-votre-team-id"},"\xc9TAPE 3. Obtenez votre Team ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si vous utilisez un ","[Free Apple Developer Program]",(0,i.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html--to addd)")," passez \xe0 ",(0,i.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"l'\xe9tape 4"),"."),(0,i.kt)("li",{parentName:"ul"},"Si vous utilisez un ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program pour les entreprises"),", ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"pour les particuliers")," ou un ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," passez \xe0 ",(0,i.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"l'\xe9tape 5"),".")),(0,i.kt)("h2",{id:"\xe9tape-4-team-id-pour-un-compte-gratuit"},"\xc9TAPE 4. Team ID pour un compte gratuit"),(0,i.kt)("h3",{id:"profil-et-certificat-fournis-par-xcode"},"Profil et certificat fournis par Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ouvrez votre projet actuel depuis l\u2019onglet G\xc9N\xc9RATION.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build tab",src:r(26745).Z,width:"1033",height:"994"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"V\xe9rifiez que l'option ",(0,i.kt)("strong",{parentName:"li"},"Automatically manage signing")," est coch\xe9e, puis s\xe9lectionnez le compte que vous avez ajout\xe9 ","[here]",(0,i.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)"),' \xe0 partir de la liste d\xe9roulante "Team".')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account-Selection",src:r(97947).Z,width:"1106",height:"877"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connectez votre appareil \xe0 votre ordinateur et s\xe9lectionnez-le dans le menu sup\xe9rieur de Xcode.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select your device",src:r(90578).Z,width:"1106",height:"877"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Xcode g\xe9n\xe8re automatiquement les profils et les certificats de provisioning n\xe9cessaires \xe0 la cr\xe9ation de votre application.")),(0,i.kt)("h3",{id:"cr\xe9ation-du-projet-avec-xcode"},"Cr\xe9ation du projet avec Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur le bouton Build and Run dans Xcode !")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Run",src:r(25149).Z,width:"1106",height:"877"})),(0,i.kt)("h2",{id:"step-5-team-id-pour-un-compte-payant"},"STEP 5. Team ID pour un compte payant"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Team ID")," : Cliquez sur Developer Account > Membership et obtenez votre Team ID. ",(0,i.kt)("img",{alt:"Developer Account membership",src:r(90480).Z,width:"768",height:"739"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"4D for iOS")," : Lancez 4D for iOS depuis Sections > G\xe9n\xe9ral et entrez votre Team ID. ",(0,i.kt)("img",{alt:"General section",src:r(90298).Z,width:"768",height:"739"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Passez \xe0 l\u2019\xe9tape 6 pour ex\xe9cuter votre projet sur votre appareil."))),(0,i.kt)("h2",{id:"\xe9tape-6-installation"},"\xc9TAPE 6. Installation"),(0,i.kt)("h3",{id:"installation-automatique-avec-apple-configurator-2"},"Installation automatique avec Apple Configurator 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lorsque votre application est pr\xeate, cliquez sur l\u2019onglet G\xc9N\xc9RATION."),(0,i.kt)("li",{parentName:"ul"},"Connectez votre appareil \xe0 votre ordinateur avec un c\xe2ble USB."),(0,i.kt)("li",{parentName:"ul"},"Dans l\u2019onglet G\xc9N\xc9RATION, cliquez sur ",(0,i.kt)("strong",{parentName:"li"},"Installer"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Install button",src:r(1942).Z,width:"768",height:"739"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L\u2019application est install\xe9e sur votre appareil\xa0!")),(0,i.kt)("h3",{id:"installation-manuelle-avec-xcode"},"Installation manuelle avec Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lorsque votre application est pr\xeate, cliquez sur l\u2019onglet G\xc9N\xc9RATION."),(0,i.kt)("li",{parentName:"ul"},"Connectez votre appareil \xe0 votre ordinateur avec un c\xe2ble USB."),(0,i.kt)("li",{parentName:"ul"},"Dans l\u2019onglet G\xc9N\xc9RATION, cliquez sur ",(0,i.kt)("strong",{parentName:"li"},"Installer"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manual installation",src:r(85532).Z,width:"2164",height:"1988"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une archive de votre projet est cr\xe9\xe9e.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Archive creation",src:r(16267).Z,width:"2164",height:"1988"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Indiquez l'archive g\xe9n\xe9r\xe9e dans Finder.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reveal archive in Finder",src:r(16026).Z,width:"1168",height:"734"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ouvez Xcode et acc\xe9dez \xe0 Menu > Window > Devices and Simulator et glissez-d\xe9posez le fichier ipa g\xe9n\xe9r\xe9 dans la section Installed Apps.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Devices and Simulators",src:r(44346).Z,width:"2346",height:"1636"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L\u2019application est d\xe9sormais install\xe9e sur votre appareil.")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16267:function(e,t,r){t.Z=r.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},25149:function(e,t,r){t.Z=r.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},53164:function(e,t,r){t.Z=r.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},44346:function(e,t,r){t.Z=r.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},1942:function(e,t,r){t.Z=r.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},85532:function(e,t,r){t.Z=r.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},26745:function(e,t,r){t.Z=r.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},16026:function(e,t,r){t.Z=r.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},90480:function(e,t,r){t.Z=r.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},90298:function(e,t,r){t.Z=r.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},97947:function(e,t,r){t.Z=r.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},90578:function(e,t,r){t.Z=r.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);