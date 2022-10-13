"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5005],{31959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),o=(r(67294),r(3905));const a={id:"multi-criteria-search",title:"Multi-criteria Search"},n=void 0,l={unversionedId:"tutorials/creating-list-forms/multi-criteria-search",id:"version-19-R5/tutorials/creating-list-forms/multi-criteria-search",title:"Multi-criteria Search",description:"This section will show you how to activate the multi-criteria search in your own templates.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/multi-criteria-search.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/multi-criteria-search",permalink:"/go-mobile/fr/docs/19-R5/tutorials/creating-list-forms/multi-criteria-search",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/multi-criteria-search.md",tags:[],version:"19-R5",frontMatter:{id:"multi-criteria-search",title:"Multi-criteria Search"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/fr/docs/19-R5/tutorials/creating-list-forms/list-form-svg-file"},next:{title:"iOS Storyboard",permalink:"/go-mobile/fr/docs/19-R5/tutorials/creating-list-forms/list-form-storyboard"}},s={},c=[{value:"Template svg file",id:"template-svg-file",level:2},{value:"\xc9diteur de projet",id:"\xe9diteur-de-projet",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section will show you how to activate the ",(0,o.kt)("a",{parentName:"p",href:"../../project-definition/forms#multi-criteria-search"},"multi-criteria search")," in your own templates."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The multi-criteria search feature is activated by default in all templates generated by the mobile editor.")),(0,o.kt)("h2",{id:"template-svg-file"},"Template svg file"),(0,o.kt)("p",null,"To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,o.kt)("p",null,"to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,o.kt)("p",null,"There you go! The class is the only thing you need to modify for the multi-search criteria to be active."),(0,o.kt)("h2",{id:"\xe9diteur-de-projet"},"\xc9diteur de projet"),(0,o.kt)("p",null,"Next, you can go to the project editor and drop several fields into the list form search area."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multi-criteria search in the project editor",src:r(15519).Z,width:"567",height:"497"})),(0,o.kt)("p",null,"Click on the search field's delete button to modifiy the associated field list."),(0,o.kt)("p",null,"A menu will appear to allow you to ",(0,o.kt)("strong",{parentName:"p"},"remove specific fields")," or ",(0,o.kt)("strong",{parentName:"p"},"remove all fields"),", depending on which criteria you want to base your search(es) on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify Multi-criteria search fields",src:r(14055).Z,width:"567",height:"497"})),(0,o.kt)("p",null,"F\xe9licitations\xa0! You can now base your search(es) on multiple fields in your mobile app!"))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?i.createElement(f,n(n({ref:t},u),{},{components:r})):i.createElement(f,n({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var c=2;c<a;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14055:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},15519:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-7f228461bafbe978f0bfd65a9c697bb2.png"}}]);