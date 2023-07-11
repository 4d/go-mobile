"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7617],{66685:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const o={id:"deploy-on-app-store-archive-and-upload",title:"Archivar y descargar un proyecto"},i=void 0,l={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",id:"version-19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",title:"Archivar y descargar un proyecto",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",permalink:"/go-mobile/es/docs/19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",tags:[],version:"19-R8",frontMatter:{id:"deploy-on-app-store-archive-and-upload",title:"Archivar y descargar un proyecto"},sidebar:"tutorials",previous:{title:"Crear una ficha en App Store",permalink:"/go-mobile/es/docs/19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},p={},s=[{value:"PASO 1. Configuraci\xf3n Xcode",id:"paso-1-configuraci\xf3n-xcode",level:2},{value:"PASO 2. Obtenga su Team ID",id:"paso-2-obtenga-su-team-id",level:2},{value:"PASO 3. Configure 4D for iOS",id:"paso-3-configure-4d-for-ios",level:2},{value:"PASO 4. Abra su proyecto con Xcode",id:"paso-4-abra-su-proyecto-con-xcode",level:2},{value:"PASO 5. Archive su proyecto desde Xcode",id:"paso-5-archive-su-proyecto-desde-xcode",level:2},{value:"PASO 6. Valide su proyecto",id:"paso-6-valide-su-proyecto",level:2},{value:"PASO 7. Subir a la App Store",id:"paso-7-subir-a-la-app-store",level:2},{value:"PASO 8. Seleccione la versi\xf3n destinada a la App Store",id:"paso-8-seleccione-la-versi\xf3n-destinada-a-la-app-store",level:2},{value:"PASO 9. Env\xede para revisi\xf3n",id:"paso-9-env\xede-para-revisi\xf3n",level:2}],c={toc:s};function d(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,r.kt)("p",{parentName:"blockquote"},"Archivar y publicar un proyecto en la App Store Connect.")),(0,r.kt)("h2",{id:"paso-1-configuraci\xf3n-xcode"},"PASO 1. Configuraci\xf3n Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si ha elegido una cuenta de desarrollador de Apple individual, su cuenta estar\xe1 disponible de inmediato."),(0,r.kt)("li",{parentName:"ul"},"Si ha elegido una Cuenta de desarrollador de Apple como organizaci\xf3n, debe esperar la validaci\xf3n de Apple."),(0,r.kt)("li",{parentName:"ul"},"Cuando se pueda acceder a su cuenta, agr\xe9guela a Xcode en Preferences > Accounts."),(0,r.kt)("li",{parentName:"ul"},"Xcode instalar\xe1 autom\xe1ticamente los elementos de provisi\xf3n y certificados necesarios.")),(0,r.kt)("h2",{id:"paso-2-obtenga-su-team-id"},"PASO 2. Obtenga su Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inicie sesi\xf3n en su cuenta de desarrollador Apple. Encuentre su ITeam ID en Membership.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Obtenga su Team ID",src:t(92828).Z,width:"768",height:"739"})),(0,r.kt)("h2",{id:"paso-3-configure-4d-for-ios"},"PASO 3. Configure 4D for iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lance 4D for iOS"),(0,r.kt)("li",{parentName:"ul"},"En la pesta\xf1a SECTIONS:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General: introduzca su Team ID")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Team ID",src:t(32058).Z,width:"1082",height:"1009"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Publicaci\xf3n: introduzca su URL de producci\xf3n")),(0,r.kt)("p",null,"(HTTPS es obligatorio para el despliegue)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Publishing",src:t(79903).Z,width:"1082",height:"1009"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"En la pesta\xf1a BUILD:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Crear y ejecutar: cree su proyecto")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BuildTab",src:t(57401).Z,width:"1215",height:"1009"})),(0,r.kt)("h2",{id:"paso-4-abra-su-proyecto-con-xcode"},"PASO 4. Abra su proyecto con Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a BUILD del editor de proyectos de 4D for iOS, haga clic en Proyecto > Abrir el proyecto con Xcode")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Abra su proyecto con Xcode",src:t(90410).Z,width:"1033",height:"994"})),(0,r.kt)("h2",{id:"paso-5-archive-su-proyecto-desde-xcode"},"PASO 5. Archive su proyecto desde Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde Xcode, vaya al men\xfa del simulador y seleccione ",(0,r.kt)("strong",{parentName:"li"},"Generic iOS Device"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic iOS Device",src:t(72448).Z,width:"318",height:"558"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Luego desde el men\xfa, haga clic en Product y seleccione ",(0,r.kt)("strong",{parentName:"li"},"Archive"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive su proyecto desde Xcode",src:t(60779).Z,width:"225",height:"337"})),(0,r.kt)("h2",{id:"paso-6-valide-su-proyecto"},"PASO 6. Valide su proyecto"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Validate")," para iniciar el proceso de validaci\xf3n."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Valide su proyecto",src:t(21404).Z,width:"1112",height:"729"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El primer paso es seleccionar las opciones de distribuci\xf3n de la App Store.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Store distribution options",src:t(39522).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entonces debe volver a firmar su aplicaci\xf3n. Deje que Xcode administre esto marcando la opci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Re-sign your app",src:t(63731).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verifique el contenido de su aplicaci\xf3n.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App review",src:t(23250).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si su proyecto pasa el proceso de validaci\xf3n, deber\xeda ver este mensaje:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Validation",src:t(80097).Z,width:"768",height:"485"})),(0,r.kt)("p",null,"Si se produce un error, se mostrar\xe1 un mensaje. Estos errores deben corregirse antes de volver a intentar el proceso de validaci\xf3n."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Done"),". Esto le devolver\xe1 a la ventana del organizador.")),(0,r.kt)("h2",{id:"paso-7-subir-a-la-app-store"},"PASO 7. Subir a la App Store"),(0,r.kt)("p",null,"Una vez termine el proceso de validaci\xf3n, estar\xe1 listo para agregar su aplicaci\xf3n a la App Store."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Upload to App Store"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Subir a la App Store",src:t(13359).Z,width:"1112",height:"729"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cuando su proyecto se haya subido con \xe9xito, ver\xe1 esta ventana:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upload successful",src:t(42959).Z,width:"768",height:"485"})),(0,r.kt)("h2",{id:"paso-8-seleccione-la-versi\xf3n-destinada-a-la-app-store"},"PASO 8. Seleccione la versi\xf3n destinada a la App Store"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde App Store Connect > App Store > iOS App, seleccione su aplicaci\xf3n y haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"+")," que aparece en la secci\xf3n Build")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add build",src:t(67954).Z,width:"1101",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seleccione la versi\xf3n que quiere enviar y haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Done"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build selection",src:t(53077).Z,width:"1101",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finalmente, haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Submit for Review"),".")),(0,r.kt)("h2",{id:"paso-9-env\xede-para-revisi\xf3n"},"PASO 9. Env\xede para revisi\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El \xfaltimo paso para enviar su aplicaci\xf3n para revisi\xf3n es responder algunas preguntas r\xe1pidas sobre su aplicaci\xf3n.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Env\xede para revisi\xf3n",src:t(55935).Z,width:"1160",height:"1101"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cuando haya terminado con las preguntas, haga clic en ",(0,r.kt)("strong",{parentName:"p"},"Submit"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El tiempo promedio de revisi\xf3n de la App Store es de alrededor de dos d\xedas."))))}d.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67954:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Add-build-app-store-connect-125a6da6dab376c3a5f66a40203ce15e.png"},39522:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/App-Store-Distribution-options-0befe561af0cec5bcd8facf7681a7ae7.png"},80097:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Archive-validation-complete-e48a347ebb3ded597e714c4ab9978703.png"},60779:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},57401:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/BuildTab-f3ba903eca74e3a84690a816006f2ab4.png"},72448:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},55935:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Export-Compliance-Content-Rights-Advertising-Identifer-832c4c2a41f4dc0e1c51359d67d8dc28.png"},90410:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},21404:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Organizer-Project-Validation-a9c512fbb5ea5c6d545eef18c703a79b.png"},79903:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Publishing-c0eb8dd37534ce4b32a3e5f02cdfd227.png"},63731:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Re-sign-your-App-7b2992f63c7988ffc2ca830228c867e8.png"},23250:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Review-App-52773662f4a864a3a2f74ad29b59385d.png"},53077:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Select-build-app-store-connect-345cdd0f6ab34d09e3ae6e9fd0ae4a4f.png"},92828:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},32058:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Team-ID-12c375482f73b79029a2a4e683a8fa4f.png"},13359:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Upload-to-AppStore-a119aac5a70e4144ea441d8a36095171.png"},42959:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-Successful-d2b342725164592071b6dcaaa791c7f8.png"}}]);