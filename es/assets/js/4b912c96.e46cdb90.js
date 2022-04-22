"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9446],{61041:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],l={id:"testing-on-your-device",title:"Instalar en su dispositivo iOS"},p=void 0,c={unversionedId:"deployment/testing-on-your-device",id:"version-19-R2/deployment/testing-on-your-device",title:"Instalar en su dispositivo iOS",description:"Puede instalar y probar su aplicaci\xf3n m\xf3vil en un dispositivo conectado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R2/deployment/testing-on-your-device.md",sourceDirName:"deployment",slug:"/deployment/testing-on-your-device",permalink:"/go-mobile/es/docs/19-R2/deployment/testing-on-your-device",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/deployment/testing-on-your-device.md",tags:[],version:"19-R2",frontMatter:{id:"testing-on-your-device",title:"Instalar en su dispositivo iOS"},sidebar:"version-19-R2/docs",previous:{title:"Desde su iPhone",permalink:"/go-mobile/es/docs/19-R2/debug/from-iphone"},next:{title:"Archivar y exportar un proyecto",permalink:"/go-mobile/es/docs/19-R2/deployment/deployment-in-house-archive-and-export"}},u={},s=[{value:"Requisitos",id:"requisitos",level:2},{value:"PASO 1. Crear cuenta",id:"paso-1-crear-cuenta",level:2},{value:"PASO 2. Configuraci\xf3n Xcode",id:"paso-2-configuraci\xf3n-xcode",level:2},{value:"PASO 3. Obtenga su Team ID",id:"paso-3-obtenga-su-team-id",level:2},{value:"PASO 4. Team ID para una cuenta gratuita",id:"paso-4-team-id-para-una-cuenta-gratuita",level:2},{value:"Deje que Xcode genere su perfil y certificado",id:"deje-que-xcode-genere-su-perfil-y-certificado",level:3},{value:"Creaci\xf3n del proyecto con Xcode",id:"creaci\xf3n-del-proyecto-con-xcode",level:3},{value:"PASO 5. Team ID para una cuenta paga",id:"paso-5-team-id-para-una-cuenta-paga",level:2},{value:"PASO 6. Instalaci\xf3n",id:"paso-6-instalaci\xf3n",level:2},{value:"Instalaci\xf3n autom\xe1tica con Apple Configurator 2",id:"instalaci\xf3n-autom\xe1tica-con-apple-configurator-2",level:3},{value:"Instalaci\xf3n manual con Xcode",id:"instalaci\xf3n-manual-con-xcode",level:3}],d={toc:s};function m(e){var a=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Puede instalar y probar su aplicaci\xf3n m\xf3vil en un dispositivo conectado."),(0,i.kt)("h2",{id:"requisitos"},"Requisitos"),(0,i.kt)("p",null,"Tiene que suscribirse a un programa de desarrolladores de Apple. Dependiendo de sus objetivos y de sus preferencias, puede optar por inscribirse en uno de los siguientes programas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Free Apple Developer Program]",(0,i.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)-- to add"),": para pruebas \xfanicamente"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para las empresas")," o ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"para los particulares"),": con el fin de desplegar en el App Store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program"),": para desplegar su aplicaci\xf3n internamente")),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"Necesita ",(0,i.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," instalado en su Mac para automatizar la instalaci\xf3n de la aplicaci\xf3n (opcional)."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"paso-1-crear-cuenta"},"PASO 1. Crear cuenta"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Identificador Apple"),": cree su identificador Apple. Si no tienen uno, haga clic ",(0,i.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"aqu\xed"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Developer Account"),": elija un Apple Developer Program (para empresas o individuos) para desplegar en la App Store o el Apple Developer Enterprise Program (para despliegue interno)."))),(0,i.kt)("h2",{id:"paso-2-configuraci\xf3n-xcode"},"PASO 2. Configuraci\xf3n Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Developer Account"),": En Xcode > Preferences > Accounts, a\xf1ada su Apple ID. ",(0,i.kt)("img",{alt:"Developer Account",src:t(60841).Z,width:"768",height:"557"}))),(0,i.kt)("h2",{id:"paso-3-obtenga-su-team-id"},"PASO 3. Obtenga su Team ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si est\xe1 utilizando un ","[Programa gratuito para desarrolladores de Apple]",(0,i.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html--to addd)")," vaya a ",(0,i.kt)("a",{parentName:"li",href:"#paso-4-team-id-for-free-account"},"paso 4"),"."),(0,i.kt)("li",{parentName:"ul"},"Si est\xe1 utilizando un ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para empresas"),", ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"}," para particulares ")," o un ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," vaya al ",(0,i.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"paso 5"),".")),(0,i.kt)("h2",{id:"paso-4-team-id-para-una-cuenta-gratuita"},"PASO 4. Team ID para una cuenta gratuita"),(0,i.kt)("h3",{id:"deje-que-xcode-genere-su-perfil-y-certificado"},"Deje que Xcode genere su perfil y certificado"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abra su proyecto actual desde la pesta\xf1a BUILD.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build tab",src:t(15147).Z,width:"1033",height:"994"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verifique que la opci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Automatically manage signing")," est\xe9 marcada y seleccione la cuenta que agreg\xf3 ","[here]",(0,i.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)"),' de la lista desplegable "Team".')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account-Selection",src:t(71212).Z,width:"1106",height:"877"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conecte su dispositivo a su ordenador y selecci\xf3nelo en el men\xfa superior de Xcode.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select your device",src:t(42496).Z,width:"1106",height:"877"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Xcode genera autom\xe1ticamente los perfiles y certificados de aprovisionamiento necesarios para crear su aplicaci\xf3n.")),(0,i.kt)("h3",{id:"creaci\xf3n-del-proyecto-con-xcode"},"Creaci\xf3n del proyecto con Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xa1Presione el bot\xf3n Build and run Button en Xcode!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Run",src:t(88923).Z,width:"1106",height:"877"})),(0,i.kt)("h2",{id:"paso-5-team-id-para-una-cuenta-paga"},"PASO 5. Team ID para una cuenta paga"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Team ID"),": Haga clic en Developer Account > Membership y obtenga su Team ID. ",(0,i.kt)("img",{alt:"Developer Account membership",src:t(94002).Z,width:"768",height:"739"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"4D for iOS"),": Lance 4D for iOS en Sections > General e introduzca su Team ID. ",(0,i.kt)("img",{alt:"General section",src:t(32860).Z,width:"768",height:"739"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Vaya al PASO 6 para ejecutar su proyecto en su dispositivo."))),(0,i.kt)("h2",{id:"paso-6-instalaci\xf3n"},"PASO 6. Instalaci\xf3n"),(0,i.kt)("h3",{id:"instalaci\xf3n-autom\xe1tica-con-apple-configurator-2"},"Instalaci\xf3n autom\xe1tica con Apple Configurator 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cuando su aplicaci\xf3n est\xe9 lista, abra la pesta\xf1a CREAR."),(0,i.kt)("li",{parentName:"ul"},"Conecte su dispositivo a su ordenador con un cable USB."),(0,i.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a CREAR, haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Instalador"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Install button",src:t(93747).Z,width:"768",height:"739"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xa1La aplicaci\xf3n se est\xe1 instalando en su dispositivo!")),(0,i.kt)("h3",{id:"instalaci\xf3n-manual-con-xcode"},"Instalaci\xf3n manual con Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cuando su aplicaci\xf3n est\xe9 lista, abra la pesta\xf1a CREAR."),(0,i.kt)("li",{parentName:"ul"},"Conecte su dispositivo a su ordenador con un cable USB."),(0,i.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a CREAR, haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Instalador"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manual installation",src:t(56).Z,width:"2164",height:"1988"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Se crea un archivo de su proyecto")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Archive creation",src:t(95823).Z,width:"2164",height:"1988"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Indique el archivo generado en Finder")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reveal archive in Finder",src:t(81384).Z,width:"1168",height:"734"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abra Xcode y vaya a Menu > Window > Devices and Simulator y arrastre y suelte el archivo ipa generado en la secci\xf3n Installed Apps.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Devices and Simulators",src:t(28559).Z,width:"2346",height:"1636"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xa1La aplicaci\xf3n se est\xe1 instalando en su dispositivo!")))}m.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(g,o(o({ref:a},u),{},{components:t})):n.createElement(g,o({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95823:function(e,a,t){a.Z=t.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},88923:function(e,a,t){a.Z=t.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},60841:function(e,a,t){a.Z=t.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},28559:function(e,a,t){a.Z=t.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},93747:function(e,a,t){a.Z=t.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},56:function(e,a,t){a.Z=t.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},15147:function(e,a,t){a.Z=t.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},81384:function(e,a,t){a.Z=t.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},94002:function(e,a,t){a.Z=t.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},32860:function(e,a,t){a.Z=t.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},71212:function(e,a,t){a.Z=t.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},42496:function(e,a,t){a.Z=t.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);