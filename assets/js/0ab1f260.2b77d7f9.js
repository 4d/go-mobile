(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4447],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=m(r),p=o,d=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35765:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return f},default:function(){return u}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],l={id:"list-form-manifest",title:"Manifest.json"},s=void 0,m={unversionedId:"tutorials/creating-list-forms/list-form-manifest",id:"tutorials/creating-list-forms/list-form-manifest",isDocsHomePage:!1,title:"Manifest.json",description:"The manifest file includes information about your list form template, such as the storyboard type (list form or detail form), name and number of fields per cell.",source:"@site/docs/tutorials/creating-list-forms/list-form-manifest.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-manifest",permalink:"/go-mobile/docs/tutorials/creating-list-forms/list-form-manifest",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-list-forms/list-form-manifest.md",version:"current",frontMatter:{id:"list-form-manifest",title:"Manifest.json"},sidebar:"tutorials",previous:{title:"List form icon",permalink:"/go-mobile/docs/tutorials/creating-list-forms/list-form-icon"},next:{title:"Template.svg",permalink:"/go-mobile/docs/tutorials/creating-list-forms/list-form-svg-file"}},f=[],c={toc:f};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The manifest file includes information about your list form template, such as the storyboard ",(0,i.kt)("strong",{parentName:"p"},"type")," (list form or detail form), ",(0,i.kt)("strong",{parentName:"p"},"name")," and ",(0,i.kt)("strong",{parentName:"p"},"number of fields per cell"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "listform",\n  "name": "Custom List form",\n  "fields": {\n    "count": 3\n  },\n  "tags": {\n    "___LISTFORMTYPE___": "Table"\n  }\n}\n\n')),(0,i.kt)("p",null,"For example, the above manifest file includes the following information:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Template type"),": listform"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Template Name"),": Custom List form"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Field number"),": Three fields in each cell (profile image, title, and subtitle)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Tag"),': "',(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"LISTFORMTYPE")),'": "Table" table display')))}u.isMDXComponent=!0}}]);