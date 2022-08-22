"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8121],{5882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"many-to-one-relations",title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},i=void 0,l={unversionedId:"tutorials/relations/many-to-one-relations",id:"version-19-R5/tutorials/relations/many-to-one-relations",title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",description:"This tutorial will show you how easy it can be to include Many to one relations in your mobile projects.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/relations/many-to-one-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/many-to-one-relations",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/many-to-one-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/relations/many-to-one-relations.md",tags:[],version:"19-R5",frontMatter:{id:"many-to-one-relations",title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},sidebar:"tutorials",previous:{title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",permalink:"/go-mobile/ja/docs/19-R5/tutorials/actions/using-action-parameters"},next:{title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/one-to-many-relations"}},s={},c=[{value:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial will show you how easy it can be to include Many to one relations in your mobile projects."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this tutorial, we will use the relation names between your tables. Giving descriptive relation names can make your project structure definition easier."))),(0,r.kt)("p",null,"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,r.kt)("p",null,"Here we want to display the category for each task in the detail form of your generated app. To do so, open the ",(0,r.kt)("strong",{parentName:"p"},"StarteriOSProject")," from ",(0,r.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,r.kt)("p",null,"Then go right to your Structure section and select the ",(0,r.kt)("strong",{parentName:"p"},"Task table"),"."),(0,r.kt)("h3",{id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can notice that the ",(0,r.kt)("strong",{parentName:"p"},"TaskCategory relation")," is underlined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u540d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\uff0c\u30ea\u30f3\u30af\u5148\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Name field")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select link from structure section",src:n(23352).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u964d\u306e\u753b\u9762\u3067\u306f\uff0c\u30ea\u30ec\u30fc\u30c8\u306e\uff11\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4ed6\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u540c\u3058\u3088\u3046\u306b\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can also filter your app content using related fields from the Data section. To do so enter ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," in the Filter query field to exclude personal tasks."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u300c\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8868\u793a\u3055\u308c\u305f\uff11\u30d5\u30a3\u30fc\u30eb\u30c9",src:n(73662).Z,width:"2164",height:"1988"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can then select an ",(0,r.kt)("strong",{parentName:"p"},"icon")," as well as ",(0,r.kt)("strong",{parentName:"p"},"formatters")," and define ",(0,r.kt)("strong",{parentName:"p"},"short and long labels")," from the Labels and Icons section"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field from Labels and Icons section",src:n(73221).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\uff0c\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306b\uff11\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field in Forms section",src:n(13187).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c")),(0,r.kt)("p",null,"You should see your related field in your app detail form !"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field in Forms section",src:n(31888).Z,width:"1559",height:"907"})))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},31888:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},13187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},73221:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},23352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);