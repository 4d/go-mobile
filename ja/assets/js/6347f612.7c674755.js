"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5954],{5121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={id:"multi-criteria-search",title:"\u8907\u6570\u6761\u4ef6\u691c\u7d22"},o=void 0,l={unversionedId:"tutorials/creating-list-forms/multi-criteria-search",id:"version-19-R8/tutorials/creating-list-forms/multi-criteria-search",title:"\u8907\u6570\u6761\u4ef6\u691c\u7d22",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u72ec\u81ea\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067 \u8907\u6570\u6761\u4ef6\u691c\u7d22 \u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/tutorials/creating-list-forms/multi-criteria-search.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/multi-criteria-search",permalink:"/go-mobile/ja/docs/19-R8/tutorials/creating-list-forms/multi-criteria-search",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/creating-list-forms/multi-criteria-search.md",tags:[],version:"19-R8",frontMatter:{id:"multi-criteria-search",title:"\u8907\u6570\u6761\u4ef6\u691c\u7d22"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/ja/docs/19-R8/tutorials/creating-list-forms/list-form-svg-file"},next:{title:"iOS \u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",permalink:"/go-mobile/ja/docs/19-R8/tutorials/creating-list-forms/list-form-storyboard"}},s={},c=[{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8SVG\u30d5\u30a1\u30a4\u30eb",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8svg\u30d5\u30a1\u30a4\u30eb",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u72ec\u81ea\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067 ",(0,n.kt)("a",{parentName:"p",href:"../../project-definition/forms#%E8%A4%87%E6%95%B0%E6%9D%A1%E4%BB%B6%E6%A4%9C%E7%B4%A2"},"\u8907\u6570\u6761\u4ef6\u691c\u7d22")," \u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u30e2\u30d0\u30a4\u30eb\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u53ce\u9332\u3055\u308c\u3066\u3044\u308b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u691c\u7d22\u30a8\u30ea\u30a2\u306f\u3001\u3059\u3067\u306b\u8907\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30af\u30a8\u30ea\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8svg\u30d5\u30a1\u30a4\u30eb"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8SVG\u30d5\u30a1\u30a4\u30eb"),(0,n.kt)("p",null,"\u81ea\u5206\u3067\u4f5c\u6210\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8907\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u691c\u7d22\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001template.svg \u30d5\u30a1\u30a4\u30eb\u3092\u4e0b\u8a18\u306e\u3088\u3046\u306b\u66f8\u304d\u63db\u3048\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,n.kt)("p",null,"\u4e0a\u306e\u884c\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304d\u63db\u3048\u307e\u3059:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,n.kt)("p",null,"\u3053\u308c\u3060\u3051\u3067\u3059\uff01 \u691c\u7d22\u30a8\u30ea\u30a2\u306b\u30af\u30e9\u30b9\u540d\u3092\u8ffd\u52a0\u3059\u308c\u3070\u3001\u8907\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u691c\u7d22\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u958b\u304d\u3001\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u691c\u7d22\u30a8\u30ea\u30a2\u306b\u8907\u6570\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u5185\u306e\u8907\u6570\u6761\u4ef6\u691c\u7d22",src:r(32459).Z,width:"567",height:"497"})),(0,n.kt)("p",null,"\u8a2d\u5b9a\u3057\u305f\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u691c\u7d22\u30a8\u30ea\u30a2\u306e\u524a\u9664\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u5fc5\u8981\u306b\u5fdc\u3058\u3066 ",(0,n.kt)("strong",{parentName:"p"},"\u7279\u5b9a\u306e\u30d5\u30a3\u30fc\u30eb\u30c9")," \u307e\u305f\u306f ",(0,n.kt)("strong",{parentName:"p"},"\u3059\u3079\u3066\u306e\u30d5\u30a3\u30fc\u30eb\u30c9")," \u3092\u691c\u7d22\u30a8\u30ea\u30a2\u304b\u3089\u53d6\u308a\u9664\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8907\u6570\u6761\u4ef6\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7de8\u96c6\u3059\u308b",src:r(55253).Z,width:"567",height:"497"})),(0,n.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 \u8907\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u691c\u7d22\u3059\u308b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304c\u4f5c\u6210\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?i.createElement(f,o(o({ref:t},p),{},{components:r})):i.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55253:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},32459:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-7f228461bafbe978f0bfd65a9c697bb2.png"}}]);