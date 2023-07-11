"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4363],{36368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"general",title:"G\xe9n\xe9ral"},a=void 0,l={unversionedId:"project-definition/general",id:"version-20/project-definition/general",title:"G\xe9n\xe9ral",description:"Cette page vous permet de d\xe9finir les informations principales de votre application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/project-definition/general.md",sourceDirName:"project-definition",slug:"/project-definition/general",permalink:"/go-mobile/fr/docs/project-definition/general",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/project-definition/general.md",tags:[],version:"20",frontMatter:{id:"general",title:"G\xe9n\xe9ral"},sidebar:"docs",previous:{title:"Overview",permalink:"/go-mobile/fr/docs/project-definition/overview"},next:{title:"Structure",permalink:"/go-mobile/fr/docs/project-definition/structure"}},s={},u=[{value:"OS cible",id:"os-cible",level:2},{value:"Organisation",id:"organisation",level:2},{value:"Produit",id:"produit",level:2},{value:"Couleur principale",id:"couleur-principale",level:3},{value:"D\xe9veloppeur",id:"d\xe9veloppeur",level:2}],A={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cette page vous permet de d\xe9finir les informations principales de votre application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"General section",src:r(23499).Z,width:"690",height:"638"})),(0,i.kt)("h2",{id:"os-cible"},"OS cible"),(0,i.kt)("p",null,"S\xe9lectionnez l'OS (syst\xe8me d'exploitation) mobile pour lequel vous souhaitez cr\xe9er l'application. Ce param\xe8tre d\xe9finira les options de l'\xe9diteur mobile disponibles."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sur macOS, vous pouvez s\xe9lectionner ",(0,i.kt)("strong",{parentName:"li"},"Android"),", ",(0,i.kt)("strong",{parentName:"li"},"iOS"),", ou ",(0,i.kt)("strong",{parentName:"li"},"les deux cibles")),(0,i.kt)("li",{parentName:"ul"},"Sous Windows, vous pouvez s\xe9lectionner uniquement la cible ",(0,i.kt)("strong",{parentName:"li"},"Android"),".")),(0,i.kt)("h2",{id:"organisation"},"Organisation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nom\xa0:")," Nom de votre entreprise, ou votre nom."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Identifiant :"),' Saisissez l\'identifiant bundle de votre entreprise. Cela servira \xe0 identifier votre application. Le nom du produit que vous saisissez est concat\xe9n\xe9 pour cr\xe9er le "Bundle ID" en utilisant la notation inverse du service des noms de domaine (voir ',(0,i.kt)("strong",{parentName:"p"},"ID")," ci-dessous). Ce bundle ID doit \xeatre unique \xe0 votre application."),(0,i.kt)("p",null,'Par exemple, si le nom de votre entreprise est " MonEntreprise" et que le nom de votre application est "MonApp", vous pouvez choisir "com.MonEntreprise" comme identifiant bundle de votre entreprise et le bundle ID de votre application sera "com.MonEntreprise.MonApp".'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Le nom Bundle ID ne doit pas contenir d\'espace ni de caract\xe8res sp\xe9ciaux tels que "*,%,/". Ils sont filtr\xe9s automatiquement et remplac\xe9s par -.')),(0,i.kt)("h2",{id:"produit"},"Produit"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nom :"),' Le nom de votre application. Comme indiqu\xe9 ci-dessus, le nom du produit est utilis\xe9 pour cr\xe9er le "Bundle ID". Ce Bundle ID doit \xeatre identique au Bundle ID que vous avez cr\xe9\xe9 dans votre compte Apple Development.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Le nom Bundle ID ne doit pas contenir d\'espace ni de caract\xe8res sp\xe9ciaux tels que "*,%,/". Ils sont filtr\xe9s automatiquement et remplac\xe9s par -.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Version :")," La version de votre application. Ajoutez les num\xe9ros de version par ordre s\xe9quentiel et ascendant en commen\xe7ant par 1.0."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ID :")," (Bundle ID) : Cette zone est automatiquement g\xe9n\xe9r\xe9e en tant que composition de l'identifiant de votre entreprise et du nom du produit. Elle n'est pas modifiable."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Copyright\xa0:")," Les droits d\u2019auteur de votre application. L'\xe9diteur mobile vous propose un format de droit d\u2019auteur, mais vous avez \xe9galement la possibilit\xe9 de cr\xe9er votre propre format."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ic\xf4nes :")," Ic\xf4ne principale qui sera utilis\xe9e \xe0 divers endroits dans votre application. Il vous suffit de d\xe9signer votre ic\xf4ne et l'\xe9diteur mobile vous g\xe9n\xe8re tous les formats n\xe9cessaires, conform\xe9ment aux directives mobiles standard."),(0,i.kt)("p",null,"Pour s\xe9lectionner une ic\xf4ne :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Glissez et d\xe9posez une image directement dans la zone d'ic\xf4ne, ou"),(0,i.kt)("li",{parentName:"ul"},"Utilisez le menu image pour s\xe9lectionner ou copier votre image.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"icon",src:r(49299).Z,width:"375",height:"198"})),(0,i.kt)("p",null,"Vous pouvez \xe9galement double-cliquer sur la zone pour afficher la bo\xeete de dialogue de s\xe9lection d'image."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Sous Windows, il faut utiliser un "fichier image" (*.public.image).')),(0,i.kt)("p",null,"Une fois l'ic\xf4ne est s\xe9lectionn\xe9e, l'\xe9diteur mobile cr\xe9e automatiquement toutes les ic\xf4nes n\xe9cessaires pour l'application. Vous pouvez acc\xe9der aux formats d'ic\xf4nes g\xe9n\xe9r\xe9s en s\xe9lectionnant ",(0,i.kt)("strong",{parentName:"p"},"Montrer le dossier des ic\xf4nes")," dans le menu image."),(0,i.kt)("h3",{id:"couleur-principale"},"Couleur principale"),(0,i.kt)("p",null,"Ce menu vous permet de choisir comment d\xe9finir la couleur principale de votre application. La couleur principale est utilis\xe9e pour g\xe9n\xe9rer un sch\xe9ma de couleurs personnalis\xe9 pour votre application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"icon",src:r(51554).Z,width:"264",height:"113"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Utiliser le s\xe9lecteur de couleurs du syst\xe8me"),": affiche le s\xe9lecteur de couleurs du syst\xe8me dans lequel vous pouvez d\xe9signer la couleur principale"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Utiliser la couleur dominante de l'ic\xf4ne"),": laissez l'\xe9diteur mobile d\xe9terminer automatiquement la couleur principale de l'ic\xf4ne de votre application.")),(0,i.kt)("p",null,"\xc0 tout moment, vous pouvez r\xe9initialiser la couleur principale et revenir \xe0 la couleur principale pr\xe9d\xe9finie de l'ic\xf4ne, en cliquant sur \"Utiliser la couleur dominante de l'ic\xf4ne\"."),(0,i.kt)("h2",{id:"d\xe9veloppeur"},"D\xe9veloppeur"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nom\xa0:")," Ce champ est pr\xe9rempli automatiquement avec le nom de votre compte utilisateur. Vous pouvez saisir un nom quelconque."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Team :")," Votre ID d'\xe9quipe de compte d\xe9veloppeur, qui sera utilis\xe9e pendant la phase de d\xe9ploiement. Cet ID peut \xeatre obtenu depuis votre compte d\xe9veloppeur."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>A,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},A=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},A),{},{components:r})):n.createElement(m,a({ref:t},A))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},49299:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},51554:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},23499:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/main-page-2a9d6b072df7c0677fec62be03e01fab.png"}}]);