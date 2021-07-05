(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4461],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:e},l),{},{components:r})):n.createElement(f,a({ref:e},l))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5840:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],s={id:"getting-started",title:"Getting started"},c=void 0,u={unversionedId:"tutorials/actions/getting-started",id:"tutorials/actions/getting-started",isDocsHomePage:!1,title:"Getting started",description:"OBJECTIVES",source:"@site/docs/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/docs/tutorials/actions/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/actions/getting-started.md",version:"current",frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"tutorials",previous:{title:"User information query",permalink:"/go-mobile/docs/tutorials/filter-queries/user-information-query"},next:{title:"Defining your first action",permalink:"/go-mobile/docs/tutorials/actions/define-first-action"}},l=[],p={toc:l};function d(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,i.kt)("p",{parentName:"blockquote"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),(0,i.kt)("p",null,"In 4D v17 R5, you can ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/docs/tutorials/actions/define-first-action"},"define actions")," directly from the Project Editor and execute 4D code from your generated iOS app!"),(0,i.kt)("p",null,"From here, when you build your app from the Project Editor using actions, you can decide to use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. In this case, actions are already included. You just need to ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/docs/tutorials/actions/define-first-action"},"define actions")," in the Actions section and create appropriate methods in 4D.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/docs/tutorials/actions/adding-actions-template"},"include action Tags")," in your Listform and Detailforms templates. "))),(0,i.kt)("p",null,"Now it's time to enjoy building a ",(0,i.kt)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}d.isMDXComponent=!0}}]);