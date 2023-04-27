"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5717],{21898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},i=void 0,l={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R8/debug/from-your-iphone-and-xcode",title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/fr/docs/19-R8/debug/from-your-iphone-and-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/debug/from-your-iphone-and-xcode.md",tags:[],version:"19-R8",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"docs",previous:{title:"Depuis l'\xe9diteur de projet",permalink:"/go-mobile/fr/docs/19-R8/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/fr/docs/19-R8/debug/from-your-android-device-and-android-studio"}},u={},s=[{value:"Debug from Xcode",id:"debug-from-xcode",level:2},{value:"Enregistreur",id:"enregistreur",level:3},{value:"Niveaux",id:"niveaux",level:3},{value:"Format",id:"format",level:3},{value:"\xc9motic\xf4nes",id:"\xe9motic\xf4nes",level:4},{value:"Cercles",id:"cercles",level:4},{value:"Debug from your iPhone",id:"debug-from-your-iphone",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,o.kt)("p",null,"Si vous rencontrez des probl\xe8mes au cours de la phase de cr\xe9ation, vous pouvez ouvrir votre projet g\xe9n\xe9r\xe9 avec Xcode en s\xe9lectionnant l'option ",(0,o.kt)("strong",{parentName:"p"},"Ouvrir le produit avec Xcode")," dans le menu ",(0,o.kt)("strong",{parentName:"p"},"Projet"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ouvrez votre projet avec Xcode",src:r(63424).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"A partir de l\xe0, vous pouvez ",(0,o.kt)("strong",{parentName:"p"},"lancer votre application")," dans le simulateur en cliquant sur le ",(0,o.kt)("strong",{parentName:"p"},"bouton G\xe9n\xe9rer")," et obtenir tous les journaux en bas de l'espace de travail Xcode."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journaux Xcode",src:r(62327).Z,width:"2502",height:"2144"})),(0,o.kt)("h3",{id:"enregistreur"},"Enregistreur"),(0,o.kt)("p",null,"Un enregistreur est un objet qui vous permettra d'enregistrer et de tracer."),(0,o.kt)("p",null,"Pour ce faire, nous utilisons ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger"),"."),(0,o.kt)("p",null,"Vous trouverez la d\xe9finition des param\xe8tres de l'enregistreur dans votre projet Xcode/Settings/Settings.plist."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journaux Xcode",src:r(34343).Z,width:"2414",height:"1410"})),(0,o.kt)("h3",{id:"niveaux"},"Niveaux"),(0,o.kt)("p",null,"Vous pouvez filtrer et afficher diff\xe9rents niveaux de journalisation dans votre console en ajoutant log.level dans votre fichier Settings.plist."),(0,o.kt)("p",null,"Pour cela, ajoutez une ligne en faisant un clic droit dans le fichier Settings.plist et entrez :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"log.level comme cl\xe9"),(0,o.kt)("li",{parentName:"ul"},"Nombre comme type"),(0,o.kt)("li",{parentName:"ul"},"3 comme valeur (par exemple)")),(0,o.kt)("p",null,"Les ",(0,o.kt)("strong",{parentName:"p"},"valeurs disponibles")," sont les suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 pour verbose"),(0,o.kt)("li",{parentName:"ul"},"1 pour le d\xe9bogage"),(0,o.kt)("li",{parentName:"ul"},"2 pour info (valeur par d\xe9faut)"),(0,o.kt)("li",{parentName:"ul"},"3 avertissement"),(0,o.kt)("li",{parentName:"ul"},"4 erreur"),(0,o.kt)("li",{parentName:"ul"},"5 s\xe9v\xe8re")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Niveau du journal",src:r(95027).Z,width:"2414",height:"1410"})),(0,o.kt)("p",null,"Donc, pour cet exemple, si vous d\xe9finissez la valeur log.level sur 3, vous obtiendrez un ",(0,o.kt)("strong",{parentName:"p"},"avertissement, une erreur et un s\xe9v\xe8re")," dans votre console Xcode."),(0,o.kt)("h3",{id:"format"},"Format"),(0,o.kt)("p",null,"Vous pouvez afficher diff\xe9rents indicateurs visuels dans la console Xcode pour ",(0,o.kt)("strong",{parentName:"p"},"mettre en \xe9vidence diff\xe9rents types de journaux"),"."),(0,o.kt)("p",null,"Pour ce faire, il vous suffit d'ouvrir votre projet Xcode/Settings/Settings.plist"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Format du journal",src:r(24367).Z,width:"2414",height:"1410"})),(0,o.kt)("h4",{id:"\xe9motic\xf4nes"},"\xc9motic\xf4nes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,o.kt)("h4",{id:"cercles"},"Cercles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,o.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,o.kt)("h2",{id:"debug-from-your-iphone"},"Debug from your iPhone"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature requires that you have enabled the ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R8/getting-started/requirements#apple-device-developer-mode"},"Apple Device Developer Mode"),".")),(0,o.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback."),(0,o.kt)("p",null,"Pour ce faire :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acc\xe9dez aux param\xe8tres de votre iPhone"),(0,o.kt)("li",{parentName:"ul"},"Recherchez votre application en d\xe9roulant la liste"),(0,o.kt)("li",{parentName:"ul"},"Activez les commentaires (feedback)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Activer les commentaires et les journaux",src:r(98276).Z,width:"1521",height:"936"})),(0,o.kt)("p",null,"\xc0 partir de l\xe0, il vous suffit de rouvrir votre application. Une feuille d'action appara\xeetra pour vous permettre de :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Envoyer des messages"),(0,o.kt)("li",{parentName:"ul"},"Sugg\xe9rer une am\xe9lioration"),(0,o.kt)("li",{parentName:"ul"},"Afficher le journal courant"),(0,o.kt)("li",{parentName:"ul"},"Signaler un probl\xe8me")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Afficher envoyer des logs",src:r(67432).Z,width:"1521",height:"936"})))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},62327:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},98276:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},67432:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},24367:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},95027:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},63424:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},34343:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);