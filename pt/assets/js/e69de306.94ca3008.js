"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2717],{35639:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=o(83117),r=o(80102),n=(o(67294),o(3905)),i=["components"],l={id:"detail-form-template",title:"Modelos de formul\xe1rio detalhado"},s=void 0,m={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"version-19-R2/tutorials/creating-detail-forms/detail-form-template",title:"Modelos de formul\xe1rio detalhado",description:"Neste tutorial, vamos gui\xe1-lo atrav\xe9s da cria\xe7\xe3o de um modelo de formul\xe1rio detalhado. Se mostrar\xe1 um cabe\xe7alho de imagem , assim como os campos de t\xedtulo e conte\xfado que se duplicar\xe3o na aplica\xe7\xe3o iOS ou Android geradas.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-detail-forms/detail-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"19-R2",frontMatter:{id:"detail-form-template",title:"Modelos de formul\xe1rio detalhado"},sidebar:"version-19-R2/tutorials",previous:{title:"Layout Android",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-list-forms/list-form-layout"},next:{title:"\xcdcone de formul\xe1rio detalhado",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-detail-forms/detail-form-icon"}},u={},d=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",level:2},{value:"Adicione um modelo de formul\xe1rio detalhado a seu projeto m\xf3vel",id:"adicione-um-modelo-de-formul\xe1rio-detalhado-a-seu-projeto-m\xf3vel",level:2},{value:"A pasta de modelos de formul\xe1rio detalhado e seu conte\xfado",id:"a-pasta-de-modelos-de-formul\xe1rio-detalhado-e-seu-conte\xfado",level:2}],c={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Neste tutorial, vamos gui\xe1-lo atrav\xe9s da cria\xe7\xe3o de um modelo de formul\xe1rio detalhado. Se mostrar\xe1 um ",(0,n.kt)("strong",{parentName:"p"},"cabe\xe7alho de imagem "),", assim como ",(0,n.kt)("strong",{parentName:"p"},"os campos de t\xedtulo e conte\xfado")," que se duplicar\xe3o na aplica\xe7\xe3o iOS ou Android geradas."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom template final result",src:o(49825).Z,width:"1417",height:"907"})),(0,n.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,n.kt)("p",null,"Para come\xe7ar, baixe o ",(0,n.kt)("strong",{parentName:"p"},"Starter Project"),", que inclui:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Uma pasta ",(0,n.kt)("strong",{parentName:"li"},"Custom Detail form")," (pasta modelo de formul\xe1rio detalhado)"),(0,n.kt)("li",{parentName:"ul"},'Um projeto demo 4D ("Contact") com um projeto app m\xf3vel pronto para usar.')),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Starter project")),(0,n.kt)("h2",{id:"adicione-um-modelo-de-formul\xe1rio-detalhado-a-seu-projeto-m\xf3vel"},"Adicione um modelo de formul\xe1rio detalhado a seu projeto m\xf3vel"),(0,n.kt)("p",null,"Primeiro, crie uma pasta ",(0,n.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," e arraste e solte a pasta ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," nela."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mobile folder custom template",src:o(51391).Z,width:"1342",height:"367"})),(0,n.kt)("p",null,'Agora lance sua aplica\xe7\xe3o 4D e abra o projeto  4D "Contact". Selecione o projeto m\xf3vel "Contact Demo App": ',(0,n.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,n.kt)("p",null,"Na se\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"Forms")," do editor de projeto, ver\xe1 que seu modelo de lista formul\xe1rio foi adicionado com sucesso \xe0 lista de modelos de formul\xe1rios lista dispon\xedveis:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Forms section",src:o(99178).Z,width:"1072",height:"994"})),(0,n.kt)("p",null,"Agora vamos focar na pasta de conte\xfado ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,n.kt)("h2",{id:"a-pasta-de-modelos-de-formul\xe1rio-detalhado-e-seu-conte\xfado"},"A pasta de modelos de formul\xe1rio detalhado e seu conte\xfado"),(0,n.kt)("p",null,"Nesta pasta vai encontrar:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Um \xedcone ",(0,n.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," de 160x160px que se mostrar\xe1 no editor del projeto quando selecione seu modelo personalizado entre outras"),(0,n.kt)("li",{parentName:"ul"},"Um arquivo ",(0,n.kt)("strong",{parentName:"li"}," manifest.json"),"  inclui uma descrip\xe7\xe3o b\xe1sica do modelo"),(0,n.kt)("li",{parentName:"ul"},"Um arquivo ",(0,n.kt)("strong",{parentName:"li"},"a template.svg")," que ser\xe1 a representa\xe7\xe3o de seu modelo que se mostrar\xe1 quando defina o conte\xfado de seu formul\xe1rio detalhe e onde arrastar\xe1 e soltar\xe1 seus campos"),(0,n.kt)("li",{parentName:"ul"},"uma pasta ",(0,n.kt)("strong",{parentName:"li"},"ios")," que inclui o storyboard (interface gr\xe1fica) e arquivo",(0,n.kt)("strong",{parentName:"li"},"Swift")," (c\xf3digo par formul\xe1rio) na pasta",(0,n.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")),(0,n.kt)("li",{parentName:"ul"},"uma pasta ",(0,n.kt)("strong",{parentName:"li"},"android")," que inclui o arquivo layout.xml (interface gr\xe1fica) na pasta ",(0,n.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," .")),(0,n.kt)("p",null,"Esses arquivos e pastas s\xe3o detalhados nas pr\xf3ximas se\xe7\xf5es."))}p.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return p}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(o),p=r,f=c["".concat(s,".").concat(p)]||c[p]||d[p]||n;return o?a.createElement(f,i(i({ref:t},u),{},{components:o})):a.createElement(f,i({ref:t},u))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<n;m++)i[m]=o[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},99178:function(e,t,o){t.Z=o.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},49825:function(e,t,o){t.Z=o.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},51391:function(e,t,o){t.Z=o.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);