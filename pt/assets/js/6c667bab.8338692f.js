"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7166],{45600:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={id:"detail-form-template-svg",title:"Template.svg",sidebar_label:"Template.svg"},l=void 0,n={unversionedId:"tutorials/creating-detail-forms/detail-form-template-svg",id:"version-20/tutorials/creating-detail-forms/detail-form-template-svg",title:"Template.svg",description:"O arquivo template.svg \xe9 uma representa\xe7\xe3o b\xe1sica de modelo. No arquivo svg precisa definir \xe1reas para poder adicionar campos em seu modelo de formul\xe1rio detalhado desde o editor de projeto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/tutorials/creating-detail-forms/detail-form-template-svg.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-svg",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template-svg",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/creating-detail-forms/detail-form-template-svg.md",tags:[],version:"20",frontMatter:{id:"detail-form-template-svg",title:"Template.svg",sidebar_label:"Template.svg"},sidebar:"tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template-manifest"},next:{title:"iOS Storyboard",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template-storyboard"}},s={},p=[{value:"Titulo",id:"titulo",level:2},{value:"Posi\xe7\xe3o, altura, largura e tipo da \xe1rea",id:"posi\xe7\xe3o-altura-largura-e-tipo-da-\xe1rea",level:2},{value:"Propriedades de campo",id:"propriedades-de-campo",level:3},{value:"\xc1rea Image Field",id:"\xe1rea-image-field",level:3}],m={toc:p};function d(e){let{components:a,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"template.svg")," \xe9 uma representa\xe7\xe3o b\xe1sica de modelo. No arquivo svg precisa definir \xe1reas para poder adicionar campos em seu modelo de formul\xe1rio detalhado desde o editor de projeto."),(0,o.kt)("p",null,"Aqui est\xe1 a vers\xe3o terminada:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Template svg file",src:t(16785).Z,width:"1072",height:"994"})),(0,o.kt)("p",null,"Este modelo tem numera\xe7\xe3o de campos din\xe2micos, o que significa que este modelo vai permitir que adicione uma ",(0,o.kt)("strong",{parentName:"p"},"imagem")," e que possa colocar ",(0,o.kt)("strong",{parentName:"p"},"quantos campos")," precisar. Quando construir seu formul\xe1rio detalhado na se\xe7\xe3o Formul\xe1rios e arrastar e soltar um campo, um novo campo vazio aparece abaixo do campo anterior para adicionar um novo campo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Template svg file",src:t(65051).Z,width:"1072",height:"994"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"![Template svg file](assets/en/custom-detailform/detailform-dynamic-field-number.png)\n")),(0,o.kt)("p",null,"Vamos focar nas diferentes partes de seu arquivo SVG e o que vai precisar para editar."),(0,o.kt)("h2",{id:"titulo"},"Titulo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom Detail form</title>\n")),(0,o.kt)("p",null,"Adicione o t\xedtulo para seu modelo aqui."),(0,o.kt)("h2",{id:"posi\xe7\xe3o-altura-largura-e-tipo-da-\xe1rea"},"Posi\xe7\xe3o, altura, largura e tipo da \xe1rea"),(0,o.kt)("p",null,"Pode definir a posi\xe7\xe3o, a altura e a largura de todos seus campos. Esse processo \xe9 o mesmo que ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-svg-file#area-position-height-width-and-type"},"que se usa para os formul\xe1rios de lista personalizados"),"."),(0,o.kt)("h3",{id:"propriedades-de-campo"},"Propriedades de campo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'//1\n<g id="f" visibility="hidden" ios:dy="35">\n\n//2\n<rect class="bg field" x="14" y="0" width="238" height="30"/>\n\n//3\n<textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>\n\n//4\n<rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>\n\n//5\n<use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o Y toda a \xe1rea"),(0,o.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o fundo, altura e largura da \xc1rea"),(0,o.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,o.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura do campo suspenso, assim como ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-svg-file#iostypes"},(0,o.kt)("strong",{parentName:"a"},"tipos de campo"))," aceitos (todos os tipos s\xe3o aceitos nesse  exemplo)"),(0,o.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,o.kt)("h3",{id:"\xe1rea-image-field"},"\xc1rea Image Field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'//1\n<g transform="translate(0,60)">\n\n//2\n<rect class="bg field" x="15" y="0" width="236" height="65"/>\n\n//3\n<path class="picture" transform="translate(10 0) scale(6)"/>\n\n//4\n<textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o Y toda a \xe1rea"),(0,o.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o fundo, altura e largura da \xc1rea"),(0,o.kt)("li",{parentName:"ol"},"Icone para mostrar uma imagem no imageField"),(0,o.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,o.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura dos campos solt\xe1veis, assim como ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-svg-file#iostypes"},(0,o.kt)("strong",{parentName:"a"},"tipos de campos aceitos"))),(0,o.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,o.kt)("p",null,"Agora que tem um ",(0,o.kt)("strong",{parentName:"p"},"\xedcone"),", uma ",(0,o.kt)("strong",{parentName:"p"},"descri\xe7\xe3o b\xe1sica do modelo")," no arquivo manifest.json, e seus arquivos ",(0,o.kt)("strong",{parentName:"p"},"svg "),", vamos ver a parte divertida com Xcode!"),(0,o.kt)("p",null,":::dica"),(0,o.kt)("p",null,"Para fazer com que a defini\xe7\xe3o de tipo de campo seja mais f\xe1cil, 4D for iOS permite que inclua tipos de campo com  ",(0,o.kt)("strong",{parentName:"p"},"valores positivos")," e tamb\xe9m excluir tipos de campos com ",(0,o.kt)("strong",{parentName:"p"},"valores negativos"),". Por exemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," permite que arraste e solte todos os campos exceto imagens e datas. Para incluir todos os tipos, apenas entre ",(0,o.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."),(0,o.kt)("p",null,":::"))}d.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return t?r.createElement(f,l(l({ref:a},m),{},{components:t})):r.createElement(f,l({ref:a},m))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var n={};for(var s in a)hasOwnProperty.call(a,s)&&(n[s]=a[s]);n.originalType=e,n.mdxType="string"==typeof e?e:o,l[1]=n;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65051:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/detailform-dynamic-field-number-0f92f3ba75d0b7a37296cc8968005124.png"},16785:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/detailform-template-svg-file-cef194cf866182f438a26f18151e6838.png"}}]);