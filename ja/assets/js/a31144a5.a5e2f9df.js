"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5682],{29147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={id:"deployment-in-house-distribute",title:"\u30a2\u30d7\u30ea\u3092 In-House \u3067\u914d\u5e03\u3059\u308b"},l=void 0,a={unversionedId:"tutorials/deploying-in-house/deployment-in-house-distribute",id:"version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute",title:"\u30a2\u30d7\u30ea\u3092 In-House \u3067\u914d\u5e03\u3059\u308b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-distribute",permalink:"/go-mobile/ja/docs/19-R8/tutorials/deploying-in-house/deployment-in-house-distribute",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute.md",tags:[],version:"19-R8",frontMatter:{id:"deployment-in-house-distribute",title:"\u30a2\u30d7\u30ea\u3092 In-House \u3067\u914d\u5e03\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",permalink:"/go-mobile/ja/docs/19-R8/tutorials/deploying-in-house/deployment-in-house-archive-and-export"},next:{title:"App Store\u30ec\u30b3\u30fc\u30c9\u306e\u4f5c\u6210",permalink:"/go-mobile/ja/docs/19-R8/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},p={},s=[{value:"\u2488 \u2488 \u30a2\u30d7\u30ea\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",id:"--\u30a2\u30d7\u30ea\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",level:2},{value:"\u2489 \u2489 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u7528\u306e\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b",id:"--\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u7528\u306e\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u248a \u248a iOS \u306b\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baApp \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"--ios-\u306b\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baapp-\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,i.kt)("p",{parentName:"blockquote"},"\u30a2\u30d7\u30ea\u3092\u30bb\u30ad\u30e5\u30a2\u306a\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002")),(0,i.kt)("h2",{id:"--\u30a2\u30d7\u30ea\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"},"\u2488 \u2488 \u30a2\u30d7\u30ea\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30bb\u30ad\u30e5\u30a2\u306a\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8 (display-image \u304a\u3088\u3073 full-size-image)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"manifest.plist")," \u30d5\u30a1\u30a4\u30eb"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".ipa")," \u30d5\u30a1\u30a4\u30eb")),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u306f\u3001\u4efb\u610f\u306e\u30bb\u30ad\u30e5\u30a2\u306a\u30af\u30e9\u30a6\u30c9\u30b9\u30c8\u30ec\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9 (Dropbox\u3001Google Drive \u306a\u3069) \u3092\u4f7f\u7528\u3057\u3066\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u30a2\u30bb\u30c3\u30c8\u3068 ipa \u306e URL \u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.plist")," \u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b URL \u3068\u4e00\u81f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"--\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u7528\u306e\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b"},"\u2489 \u2489 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u7528\u306e\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b"),(0,i.kt)("p",null,"manifest \u30d5\u30a1\u30a4\u30eb\u306e\u5b8c\u5168\u306a Web\u30a2\u30c9\u30ec\u30b9\u3092\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3068\u3057\u3066\u3001",(0,i.kt)("strong",{parentName:"p"},"ITMS Serices link")," (iTunes Music Store) \u3092\u4f5c\u6210\u3057\u307e\u3059:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,i.kt)("p",null,"\u3053\u306e\u30ea\u30f3\u30af\u306f\u3001\u30e1\u30fc\u30eb\u3067\u9001\u4fe1\u3059\u308b\u307b\u304b\u3001html\u30da\u30fc\u30b8\u3078\u306e\u57cb\u3081\u8fbc\u307f\u3001QR\u30b3\u30fc\u30c9\u5185\u3067\u3082\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u7c21\u5358\u306a\u4e00\u4f8b\u3067\u3059:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Contact\u30c7\u30e2\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",src:n(56668).Z,width:"497",height:"625"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u3053\u3053\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b QR\u30b3\u30fc\u30c9\u306f\u6709\u52b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,i.kt)("h2",{id:"--ios-\u306b\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baapp-\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"\u248a \u248a iOS \u306b\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baApp \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u3001\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30b9\u30ad\u30e3\u30f3\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",src:n(70265).Z,width:"2443",height:"2149"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baApp \u3092\u521d\u3081\u3066\u958b\u304f\u3068\u3001\u305d\u306e\u30a2\u30d7\u30ea\u306e\u958b\u767a\u8005\u304c\u5f53\u8a72\u30c7\u30d0\u30a4\u30b9\u3067\u306f\u4fe1\u983c\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u793a\u3059\u901a\u77e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7121\u8996\u3057\u3066\u3001",(0,i.kt)("strong",{parentName:"p"},"\u30ad\u30e3\u30f3\u30bb\u30eb")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'\u8a2d\u5b9a > \u4e00\u822c > \u30d7\u30ed\u30d5\u30a1\u30a4\u30eb \u307e\u305f\u306f \u30d7\u30ed\u30d5\u30a1\u30a4\u30eb & \u30c7\u30d0\u30a4\u30b9\u7ba1\u7406\u3067\u3001"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baAPP" \u306e\u898b\u51fa\u3057\u3067\u3001\u958b\u767a\u8005\u306e\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002'))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4fe1\u983c\u3067\u304d\u306a\u3044\u958b\u767a\u8005",src:n(34923).Z,width:"2443",height:"2149"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u958b\u767a\u8005\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u3053\u306e\u958b\u767a\u8005\u3092\u4fe1\u983c\u3059\u308b\u3088\u3046\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4fe1\u983c\u306e\u78ba\u7acb",src:n(45161).Z,width:"2443",height:"2149"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u305d\u306e\u5f8c\u3001\u30a2\u30d7\u30ea\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("p",null,"\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059... \u3053\u308c\u3067\u3001\u30a2\u30d7\u30ea\u3092 In-House \u3067\u914d\u5e03\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56668:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},70265:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},45161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},34923:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);