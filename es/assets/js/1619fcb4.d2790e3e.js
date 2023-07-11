"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5719],{60185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const o={id:"detail-form-template-svg",title:"Template.svg",sidebar_label:"Template.svg"},i=void 0,n={unversionedId:"tutorials/creating-detail-forms/detail-form-template-svg",id:"version-20/tutorials/creating-detail-forms/detail-form-template-svg",title:"Template.svg",description:"El archivo template.svg es una representaci\xf3n b\xe1sica de plantilla. En este archivo svg, deber\xe1 definir \xe1reas para poder agregar campos a la plantilla de formulario detallado desde el editor de proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/tutorials/creating-detail-forms/detail-form-template-svg.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-svg",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-svg",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/creating-detail-forms/detail-form-template-svg.md",tags:[],version:"20",frontMatter:{id:"detail-form-template-svg",title:"Template.svg",sidebar_label:"Template.svg"},sidebar:"tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-manifest"},next:{title:"iOS Storyboard",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-storyboard"}},s={},p=[{value:"T\xedtulo",id:"t\xedtulo",level:2},{value:"Posici\xf3n, alto, ancho y tipo del \xe1rea",id:"posici\xf3n-alto-ancho-y-tipo-del-\xe1rea",level:2},{value:"Propiedades de los campos",id:"propiedades-de-los-campos",level:3},{value:"\xc1rea Image field",id:"\xe1rea-image-field",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"El archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"template.svg")," es una representaci\xf3n b\xe1sica de plantilla. En este archivo svg, deber\xe1 definir \xe1reas para poder agregar campos a la plantilla de formulario detallado desde el editor de proyecto."),(0,r.kt)("p",null,"Aqu\xed hay una versi\xf3n final:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Template svg file",src:a(91046).Z,width:"1072",height:"994"})),(0,r.kt)("p",null,"Esta plantilla tiene una numeraci\xf3n de campos din\xe1mica, lo que significa que le permitir\xe1 agregar una ",(0,r.kt)("strong",{parentName:"p"},"imagen")," y puede colocar ",(0,r.kt)("strong",{parentName:"p"}," tantos campos "),"como necesite. Entonces, durante la creaci\xf3n de su formulario detallado en la secci\xf3n Formularios y arrastra y suelta un campo, aparece un nuevo campo vac\xedo debajo del anterior para que agregue un nuevo campo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Template svg file",src:a(46684).Z,width:"1072",height:"994"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"![Template svg file](assets/en/custom-detailform/detailform-dynamic-field-number.png)\n")),(0,r.kt)("p",null,"Centr\xe9monos en las diferentes partes de este archivo svg y en lo que necesitar\xe1 editar."),(0,r.kt)("h2",{id:"t\xedtulo"},"T\xedtulo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom Detail form</title>\n")),(0,r.kt)("p",null,"Agregue el t\xedtulo de su plantilla aqu\xed."),(0,r.kt)("h2",{id:"posici\xf3n-alto-ancho-y-tipo-del-\xe1rea"},"Posici\xf3n, alto, ancho y tipo del \xe1rea"),(0,r.kt)("p",null,"Puede definir la posici\xf3n, la altura y el ancho de todos sus campos. Este proceso es el mismo que ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-svg-file#area-position-height-width-and-type"},"el que se utiliza para los formularios de lista personalizados"),"."),(0,r.kt)("h3",{id:"propiedades-de-los-campos"},"Propiedades de los campos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'//1\n<g id="f" visibility="hidden" ios:dy="35">\n\n//2\n<rect class="bg field" x="14" y="0" width="238" height="30"/>\n\n//3\n<textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>\n\n//4\n<rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>\n\n//5\n<use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Posici\xf3n de toda el \xe1rea Y"),(0,r.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,r.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,r.kt)("li",{parentName:"ol"},"Definir la posici\xf3n, el alto y el ancho del campo desplegable, as\xed como los ",(0,r.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-svg-file#iostypes"},(0,r.kt)("strong",{parentName:"a"},"tipos de campo"))," aceptados (en este ejemplo se aceptan todos los tipos)"),(0,r.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,r.kt)("h3",{id:"\xe1rea-image-field"},"\xc1rea Image field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'//1\n<g transform="translate(0,60)">\n\n//2\n<rect class="bg field" x="15" y="0" width="236" height="65"/>\n\n//3\n<path class="picture" transform="translate(10 0) scale(6)"/>\n\n//4\n<textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Posici\xf3n de toda el \xe1rea Y"),(0,r.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,r.kt)("li",{parentName:"ol"},"Icono para mostrar una imagen en el imageField"),(0,r.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,r.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del campo soltable, su alto y su ancho, as\xed como los ",(0,r.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-svg-file#iostypes"},(0,r.kt)("strong",{parentName:"a"},"tipos de campos"))," aceptados"),(0,r.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,r.kt)("p",null,"Ahora que tiene un ",(0,r.kt)("strong",{parentName:"p"},"icono"),", la ",(0,r.kt)("strong",{parentName:"p"},"descripci\xf3n b\xe1sica de la plantilla")," en el archivo manifest.json y su archivo ",(0,r.kt)("strong",{parentName:"p"},"svg"),", pasemos a la parte divertida con Xcode."),(0,r.kt)("p",null,":::consejo"),(0,r.kt)("p",null,"Para facilitar la definici\xf3n de los tipos de campos, 4D for iOS le permite incluir tipos de campos con los ",(0,r.kt)("strong",{parentName:"p"}," valores positivos ")," y tambi\xe9n excluir los tipos de campo con ",(0,r.kt)("strong",{parentName:"p"}," valores negativos "),". Por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," le permitir\xe1 arrastrar y soltar todos los campos excepto las im\xe1genes y las fechas. Para incluir todos los tipos de campos, introduzca simplemente ",(0,r.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."),(0,r.kt)("p",null,":::"))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?l.createElement(f,i(i({ref:t},c),{},{components:a})):l.createElement(f,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:r,i[1]=n;for(var p=2;p<o;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46684:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/detailform-dynamic-field-number-0f92f3ba75d0b7a37296cc8968005124.png"},91046:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/detailform-template-svg-file-cef194cf866182f438a26f18151e6838.png"}}]);