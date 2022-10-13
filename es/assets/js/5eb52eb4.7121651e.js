"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8573],{87230:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={id:"user-information-query",title:"Filtro de b\xfasqueda usuario"},i=void 0,l={unversionedId:"tutorials/filter-queries/user-information-query",id:"version-19-R7/tutorials/filter-queries/user-information-query",title:"Filtro de b\xfasqueda usuario",description:"Ahora filtremos el contenido de nuestra aplicaci\xf3n seg\xfan la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador de la cuenta (informaci\xf3n del usuario):",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/es/docs/tutorials/filter-queries/user-information-query",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/filter-queries/user-information-query.md",tags:[],version:"19-R7",frontMatter:{id:"user-information-query",title:"Filtro de b\xfasqueda usuario"}},s={},c=[],u={toc:c};function d(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ahora filtremos el contenido de nuestra aplicaci\xf3n seg\xfan la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador de la cuenta (informaci\xf3n del usuario):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acceda a la ",(0,n.kt)("strong",{parentName:"li"},'secci\xf3n "Datos"'),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic derecho en el campo ",(0,n.kt)("strong",{parentName:"li"},"Filtro de b\xfasqueda")," para que aparezcan los ",(0,n.kt)("strong",{parentName:"li"},"botones Campos, Comparadores y Operadores"),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Operadores")," y seleccione ",(0,n.kt)("strong",{parentName:"li"},"AND"),"."),(0,n.kt)("li",{parentName:"ul"},"Ahora defina la informaci\xf3n del usuario que desea obtener del m\xe9todo de base de datos, ",(0,n.kt)("strong",{parentName:"li"},":email"),"."),(0,n.kt)("li",{parentName:"ul"},"Recuerde validar la consulta haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Validar"),". De lo contrario, no podr\xe1 crear su aplicaci\xf3n.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:t(66267).Z,width:"2164",height:"1988"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager. Email = :email \n")),(0,n.kt)("p",null,"La b\xfasqueda filtrar\xe1 los datos en funci\xf3n del estado ",(0,n.kt)("strong",{parentName:"p"},"In Progress")," Y de la ",(0,n.kt)("strong",{parentName:"p"},"direcci\xf3n de correo electr\xf3nico del administrador de cuentas")," (accesible desde la tabla AccountManager gracias a la relaci\xf3n ",(0,n.kt)("em",{parentName:"p"},"Muchos a Uno")," en el nombre del gerente)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTA")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Se muestra un ",(0,n.kt)("strong",{parentName:"li"},"icono usuario")," a la derecha de cada tabla cuando se le aplica un filtro de informaci\xf3n de usuario."),(0,n.kt)("li",{parentName:"ul"},"Tan pronto como una b\xfasqueda se base en la informaci\xf3n del usuario y se valide, debe editar el ",(0,n.kt)("strong",{parentName:"li"},"M\xe9todo de autenticaci\xf3n de la aplicaci\xf3n m\xf3vil"),". Para hacerlo, haga clic con el bot\xf3n derecho en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Edit authentication method")," para abrir la ventana de edici\xf3n del m\xe9todo de base de datos."))),(0,n.kt)("p",null,"Agregue la siguiente l\xednea en el m\xe9todo de base de datos:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,n.kt)("p",null,"Esto permitir\xe1 recuperar la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador y mostrar los datos seg\xfan ese criterio."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:t(62276).Z,width:"1836",height:"1534"})),(0,n.kt)("p",null,'Ahora, si crea su aplicaci\xf3n e ingresa "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n, encontrar\xe1 todos los contratos ',(0,n.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Resultado final",src:t(99594).Z,width:"1559",height:"907"})))}d.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,i(i({ref:r},u),{},{components:t})):a.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62276:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},99594:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},66267:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);