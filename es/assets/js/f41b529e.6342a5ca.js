"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9950],{18865:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(87462),i=(n(67294),n(3905));const l={id:"deep-linking",title:"Deep Linking"},r=void 0,o={unversionedId:"special-features/deep-linking",id:"version-19-R8/special-features/deep-linking",title:"Deep Linking",description:"This feature is currently not available in 4D for Android.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/special-features/deep-linking.md",sourceDirName:"special-features",slug:"/special-features/deep-linking",permalink:"/go-mobile/es/docs/19-R8/special-features/deep-linking",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/special-features/deep-linking.md",tags:[],version:"19-R8",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"docs",previous:{title:"Push notifications",permalink:"/go-mobile/es/docs/19-R8/special-features/push-notification"},next:{title:"Desde el editor del proyecto",permalink:"/go-mobile/es/docs/19-R8/debug/from-project-editor"}},s={},p=[{value:"Comparaci\xf3n de los modos deep linking",id:"comparaci\xf3n-de-los-modos-deep-linking",level:2},{value:"Esquema URL",id:"esquema-url",level:3},{value:"Enlaces universales",id:"enlaces-universales",level:3},{value:"Esquema URL personalizado",id:"esquema-url-personalizado",level:2},{value:"Esquema de URL personalizado en el editor de proyetos",id:"esquema-de-url-personalizado-en-el-editor-de-proyetos",level:3},{value:"Utilizar esquemas URL en su aplicaci\xf3n m\xf3vil",id:"utilizar-esquemas-url-en-su-aplicaci\xf3n-m\xf3vil",level:3},{value:"Enlaces universales",id:"enlaces-universales-1",level:2},{value:"Enlaces universales en el editor de proyectos",id:"enlaces-universales-en-el-editor-de-proyectos",level:3},{value:"Deep Linking y notificaciones Push",id:"deep-linking-y-notificaciones-push",level:2}],c={toc:p};function d(e){let{components:a,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"rmaci\xf3n 4D for Android",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This feature is currently not available in 4D for Android.")),(0,i.kt)("p",null,"Gracias a la funcionalidad ",(0,i.kt)("strong",{parentName:"p"},"deep linking"),", puede compartir el contenido que est\xe1 viendo en ese momento con todos sus colegas. Here's an illustration demonstrating deep linking:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking animation",src:n(568).Z,width:"722",height:"450"})),(0,i.kt)("p",null,'Hay dos maneras de implementar "deep linking" en IOS: ',(0,i.kt)("strong",{parentName:"p"},'"URL scheme"')," y ",(0,i.kt)("strong",{parentName:"p"},'"Universal Links"'),". While URL schemes are a well-known method for deep linking, Universal links are the new way that Apple has implemented to easily connect your webpage and your app under the same link."),(0,i.kt)("h2",{id:"comparaci\xf3n-de-los-modos-deep-linking"},"Comparaci\xf3n de los modos deep linking"),(0,i.kt)("h3",{id:"esquema-url"},"Esquema URL"),(0,i.kt)("p",null,"Here is a comparison between the two options which are available in the project editor:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"VENTAJAS"),(0,i.kt)("th",{parentName:"tr",align:null},"DESVENTAJAS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F\xe1cil de implementar"),(0,i.kt)("td",{parentName:"tr",align:null},"Siempre requiere permiso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No se requiere un backend adicional"),(0,i.kt)("td",{parentName:"tr",align:null},"No funciona si la aplicaci\xf3n no est\xe1 instalada")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"No funciona en Android")))),(0,i.kt)("h3",{id:"enlaces-universales"},"Enlaces universales"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"VENTAJAS"),(0,i.kt)("th",{parentName:"tr",align:null},"DESVENTAJAS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No requiere permiso"),(0,i.kt)("td",{parentName:"tr",align:null},"Se necesita un backend est\xe1tico con SSL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No abre el navegador"),(0,i.kt)("td",{parentName:"tr",align:null},"M\xe1s complejo de implementar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compatible con Android"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fallback URL if app isn't installed"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"esquema-url-personalizado"},"Esquema URL personalizado"),(0,i.kt)("p",null,"At the simplest level, URL schemes allow users to open an app from other apps. But the true power of URL schemes is in the ability to perform specific actions as your app opens."),(0,i.kt)("h3",{id:"esquema-de-url-personalizado-en-el-editor-de-proyetos"},"Esquema de URL personalizado en el editor de proyetos"),(0,i.kt)("p",null,"It's very simple to include an URL scheme to your mobile app. Let's see an example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Seleccione la acci\xf3n predefinida ",(0,i.kt)("strong",{parentName:"li"},"Share")," de la p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/19-R8/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," ")," y seleccione el alcance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entidad - para compartir el contenido de un formulario detallado"),(0,i.kt)("li",{parentName:"ul"},"tabla - para compartir un formulario listado"))),(0,i.kt)("li",{parentName:"ol"},"Marcar la funcionalidad ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," del editor de proyectos"),(0,i.kt)("li",{parentName:"ol"},"La informaci\xf3n del esquema URL se llena autom\xe1ticamente con el nombre de la aplicaci\xf3n que ha definido previamente en la p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/19-R8/project-definition/general"},(0,i.kt)("strong",{parentName:"a"},"General")),". Sin embargo, a\xfan puede editarlo:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking Project editor",src:n(3267).Z,width:"2164",height:"1988"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Llene su m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action"),", por ejemplo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// M\xe9todo base On Mobile App Action\n\n// var $1 : Object  // Informaci\xf3n suministrada por la aplicaci\xf3n m\xf3vil\nvar $0 : Object  // Informaci\xf3n devuelta a la aplicaci\xf3n m\xf3vil\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Enviar acci\xf3n desconocida al servidor")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Creaci\xf3n de la aplicaci\xf3n.")),(0,i.kt)("h3",{id:"utilizar-esquemas-url-en-su-aplicaci\xf3n-m\xf3vil"},"Utilizar esquemas URL en su aplicaci\xf3n m\xf3vil"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Haga clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Action")," para mostrar todas sus acciones disponibles actualmente"),(0,i.kt)("li",{parentName:"ol"},"Seleccione la acci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Share")," que previamente defini\xf3 en el editor de proyectos"),(0,i.kt)("li",{parentName:"ol"},"Aparece una nueva vista que le permite comenzar a compartir el contenido"),(0,i.kt)("li",{parentName:"ol"},"Seleccione el m\xe9todo de intercambio a utilizar"),(0,i.kt)("li",{parentName:"ol"},"Env\xedelo.")),(0,i.kt)("h2",{id:"enlaces-universales-1"},"Enlaces universales"),(0,i.kt)("p",null,"Universal links provide several key benefits that aren't available with custom URL schemes. Specifically, universal links are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unique"),": a diferencia de los esquemas de URL personalizados, otras aplicaciones no pueden reclamar los enlaces universales porque utilizan enlaces HTTP o HTTPS est\xe1ndar a su sitio web.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure"),": cuando los usuarios instalan su aplicaci\xf3n, iOS verifica que su sitio web permita que su aplicaci\xf3n abra URLs en su nombre. S\xf3lo usted puede crear y subir el archivo que otorga este permiso a su servidor web, por lo que la asociaci\xf3n de su sitio web con su aplicaci\xf3n es segura.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexible"),": los enlaces universales funcionan incluso cuando su aplicaci\xf3n no est\xe1 instalada. En este caso, al presionar un enlace a su sitio web se abre el contenido en Safari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple"),": una sola URL funciona tanto para su sitio web como para su aplicaci\xf3n.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private"),": otras aplicaciones pueden comunicarse con su aplicaci\xf3n sin necesidad de saber si su aplicaci\xf3n est\xe1 instalada."))),(0,i.kt)("h3",{id:"enlaces-universales-en-el-editor-de-proyectos"},"Enlaces universales en el editor de proyectos"),(0,i.kt)("p",null,"To include Universal links into your app, the process is quite similiar to the URL Schemes process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Seleccione la acci\xf3n predefinida ",(0,i.kt)("strong",{parentName:"li"},"Share")," de la p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/19-R8/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," ")," y seleccione el alcance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entidad - para compartir un contenido de un formulario detallado"),(0,i.kt)("li",{parentName:"ul"},"tabla - para compartir un formulario listado"))),(0,i.kt)("li",{parentName:"ol"},"Activar la funcionalidad ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," en el editor de proyectos"),(0,i.kt)("li",{parentName:"ol"},"Introduzca la URL de su sitio web en el campo ",(0,i.kt)("strong",{parentName:"li"},"Universal links")),(0,i.kt)("li",{parentName:"ol"},"Llene su m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action"),", por ejemplo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// M\xe9todo base On Mobile App Action\n\n// var $1 : Object  // Informaci\xf3n suministrada por la aplicaci\xf3n m\xf3vil\nvar $0 : Object  // Informaci\xf3n devuelta a la aplicaci\xf3n m\xf3vil\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Enviar acci\xf3n desconocida al servidor")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Creaci\xf3n de la aplicaci\xf3n."),(0,i.kt)("li",{parentName:"ol"},"Activar los enlaces universales del m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Web Connection"),", por ejemplo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// M\xe9todo base On Web Connection\n\n// Var $1; $2; $3; $4; $5; $6 : Text\nVar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Gestionado por el c\xf3digo m\xf3vil por defecto\n    Else\n        // Su c\xf3digo web\nEnd case\n\n")),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"To create a universal link, make sure you use standard ports (80 or 443)."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"deep-linking-y-notificaciones-push"},"Deep Linking y notificaciones Push"),(0,i.kt)("p",null,"Algo genial sobre Deep Linking es que es completamente compatible con ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R8/special-features/push-notification"},"notificaciones push"),". Esto significa que puede enviar enlaces deep a sus usuarios y llevarlos directamente a la p\xe1gina correcta."),(0,i.kt)("p",null,"Como puede ver, esta funci\xf3n abre un gran abanico de posibilidades. Deep linking es una funcionalidad crucial en las aplicaciones de hoy en d\xeda, especialmente ya que los usuarios consumen el contenido m\xe1s y m\xe1s r\xe1pidamente. Esta funcionalidad los lleva directamente al lugar deseado. As\xed que recomendamos que lo utilicen en sus aplicaciones m\xf3viles."),(0,i.kt)("p",null,":::consejo"),(0,i.kt)("p",null,"Consulte la documentaci\xf3n del componente ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server"))," para obtener m\xe1s informaci\xf3n sobre c\xf3mo combinar las notificaciones push y deep linking."),(0,i.kt)("p",null,":::"))}d.isMDXComponent=!0},3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?t.createElement(k,r(r({ref:a},c),{},{components:n})):t.createElement(k,r({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},568:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},3267:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);