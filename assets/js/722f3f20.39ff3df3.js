"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5895],{26437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const l={id:"detail-form-template",title:"Detail form templates"},n=void 0,i={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"version-19-R8/tutorials/creating-detail-forms/detail-form-template",title:"Detail form templates",description:"In this tutorial, we'll guide you through the creation of a detail form template. It will display an image header, as well as title and content fields that will be duplicated in the generated iOS and Android Apps.",source:"@site/versioned_docs/version-19-R8/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/docs/19-R8/tutorials/creating-detail-forms/detail-form-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"19-R8",frontMatter:{id:"detail-form-template",title:"Detail form templates"},sidebar:"tutorials",previous:{title:"Android Layout",permalink:"/go-mobile/docs/19-R8/tutorials/creating-list-forms/list-form-layout"},next:{title:"Detail form icons",permalink:"/go-mobile/docs/19-R8/tutorials/creating-detail-forms/detail-form-icon"}},p={},s=[{value:"Download the Starter project",id:"download-the-starter-project",level:2},{value:"Add a detail form template to your mobile project",id:"add-a-detail-form-template-to-your-mobile-project",level:2},{value:"Detail form template folder content",id:"detail-form-template-folder-content",level:2}],d={toc:s};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll guide you through the creation of a detail form template. It will display an ",(0,o.kt)("strong",{parentName:"p"},"image header"),", as well as ",(0,o.kt)("strong",{parentName:"p"},"title and content fields")," that will be duplicated in the generated iOS and Android Apps."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom template final result",src:r(41163).Z,width:"1417",height:"907"})),(0,o.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,o.kt)("p",null,"To begin, download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Custom Detail form")," folder (custom Detail form template folder)"),(0,o.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready to use mobile app project.')),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Starter project")),(0,o.kt)("h2",{id:"add-a-detail-form-template-to-your-mobile-project"},"Add a detail form template to your mobile project"),(0,o.kt)("p",null,"First, create a ",(0,o.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," folder and drag and drop the ",(0,o.kt)("strong",{parentName:"p"},"Custom Detail form")," folder in it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mobile folder custom template",src:r(61395).Z,width:"1342",height:"367"})),(0,o.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: ',(0,o.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Forms section")," in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Forms section",src:r(81595).Z,width:"1072",height:"994"})),(0,o.kt)("p",null,"Now let's focus on the ",(0,o.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,o.kt)("h2",{id:"detail-form-template-folder-content"},"Detail form template folder content"),(0,o.kt)("p",null,"In this folder, you will find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your custom template among others"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a manifest.json")," file: includes a basic description of the template"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a template.svg")," file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,o.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,o.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")," folder"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,o.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," folder.")),(0,o.kt)("p",null,"These files and folders are detailed in the next sections."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),u=o,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(f,n(n({ref:t},d),{},{components:r})):a.createElement(f,n({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,n=new Array(l);n[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var s=2;s<l;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},81595:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},41163:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},61395:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);