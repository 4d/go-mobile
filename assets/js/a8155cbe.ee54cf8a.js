"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4521],{6190:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var o=r(83117),a=r(80102),n=(r(67294),r(3905)),l=["components"],i={id:"detail-form-template",title:"Detail form templates"},p=void 0,m={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"version-19-R4/tutorials/creating-detail-forms/detail-form-template",title:"Detail form templates",description:"In this tutorial, we'll guide you through the creation of a detail form template. It will display an image header, as well as title and content fields that will be duplicated in the generated iOS and Android Apps.",source:"@site/versioned_docs/version-19-R4/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/docs/19-R4/tutorials/creating-detail-forms/detail-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"19-R4",frontMatter:{id:"detail-form-template",title:"Detail form templates"},sidebar:"version-19-R4/tutorials",previous:{title:"Android Layout",permalink:"/go-mobile/docs/19-R4/tutorials/creating-list-forms/list-form-layout"},next:{title:"Detail form icons",permalink:"/go-mobile/docs/19-R4/tutorials/creating-detail-forms/detail-form-icon"}},s={},c=[{value:"Download the Starter project",id:"download-the-starter-project",level:2},{value:"Add a detail form template to your mobile project",id:"add-a-detail-form-template-to-your-mobile-project",level:2},{value:"Detail form template folder content",id:"detail-form-template-folder-content",level:2}],d={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll guide you through the creation of a detail form template. It will display an ",(0,n.kt)("strong",{parentName:"p"},"image header"),", as well as ",(0,n.kt)("strong",{parentName:"p"},"title and content fields")," that will be duplicated in the generated iOS and Android Apps."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom template final result",src:r(91740).Z,width:"1417",height:"907"})),(0,n.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,n.kt)("p",null,"To begin, download the ",(0,n.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"Custom Detail form")," folder (custom Detail form template folder)"),(0,n.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready to use mobile app project.')),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Starter project")),(0,n.kt)("h2",{id:"add-a-detail-form-template-to-your-mobile-project"},"Add a detail form template to your mobile project"),(0,n.kt)("p",null,"First, create a ",(0,n.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," folder and drag and drop the ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder in it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mobile folder custom template",src:r(50919).Z,width:"1342",height:"367"})),(0,n.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: ',(0,n.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Forms section")," in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Forms section",src:r(56122).Z,width:"1072",height:"994"})),(0,n.kt)("p",null,"Now let's focus on the ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,n.kt)("h2",{id:"detail-form-template-folder-content"},"Detail form template folder content"),(0,n.kt)("p",null,"In this folder, you will find:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your custom template among others"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a manifest.json")," file: includes a basic description of the template"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a template.svg")," file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,n.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")," folder"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,n.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," folder.")),(0,n.kt)("p",null,"These files and folders are detailed in the next sections."))}u.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||n;return r?o.createElement(f,l(l({ref:t},s),{},{components:r})):o.createElement(f,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<n;m++)l[m]=r[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56122:function(e,t,r){t.Z=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},91740:function(e,t,r){t.Z=r.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},50919:function(e,t,r){t.Z=r.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);