"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8007],{48503:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"create-kotlin-formatter",title:"Create Kotlin formatter"},c=void 0,u={unversionedId:"tutorials/data-formatter/create-kotlin-formatter",id:"version-19-R5/tutorials/data-formatter/create-kotlin-formatter",title:"Create Kotlin formatter",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R5/tutorials/data-formatter/create-kotlin-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-kotlin-formatter",permalink:"/go-mobile/ja/docs/tutorials/data-formatter/create-kotlin-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/data-formatter/create-kotlin-formatter.md",tags:[],version:"19-R5",frontMatter:{id:"create-kotlin-formatter",title:"Create Kotlin formatter"},sidebar:"tutorials",previous:{title:"Create Swift formatter",permalink:"/go-mobile/ja/docs/tutorials/data-formatter/create-swift-formatter"},next:{title:"Filter queries",permalink:"/go-mobile/ja/docs/tutorials/filter-queries/filter-query-introduction"}},p={},d=[{value:"Object attribute Kotlin formatter",id:"object-attribute-kotlin-formatter",level:2}],f={toc:d};function s(t){var e=t.components,l=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Create your first Kotlin data formatters.")),(0,a.kt)("p",null,"A formatter can be composed of both Kotlin and ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/tutorials/data-formatter/create-swift-formatter"},"Swift")," code."),(0,a.kt)("h2",{id:"object-attribute-kotlin-formatter"},"Object attribute Kotlin formatter"),(0,a.kt)("p",null,"If you want a formatter that will enable you to dial a phone number value on click, we need a ",(0,a.kt)("strong",{parentName:"p"},"manifest.json file")," containing a ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"binding"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," value as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "phone",\n    "binding": "phoneAction",\n    "type": "text" \n    "target" : ["ios", "android"]\n}\n\n')),(0,a.kt)("p",null,'Note that the binding value "phoneAction" will be used in the Kotlin file and that the ',(0,a.kt)("inlineCode",{parentName:"p"},"BindingAdapter")," will interact with a specific field in an Android XML layout."),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhoneAction.kt")," file to dial a phone number value on click on Android:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'package ___PACKAGE___\n\nimport android.content.Intent\nimport android.net.Uri\nimport android.widget.TextView\nimport androidx.databinding.BindingAdapter\n\n@BindingAdapter("phoneAction")\nfun phoneAction(view: TextView, phoneAction: String?) {\n    if (phoneAction.isNullOrEmpty()) return\n    view.text = phoneAction\n    view.setOnClickListener {\n        val dialIntent = Intent(Intent.ACTION_DIAL)\n        dialIntent.data = Uri.parse("tel:$phoneAction")\n        view.context.startActivity(dialIntent)\n    }\n}\n')),(0,a.kt)("p",null,"Putting all that together, you can save this formatter as a ",(0,a.kt)("strong",{parentName:"p"},".kt")," file in the formatter folder and use it in your mobile project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(96454).Z,width:"1628",height:"556"})),(0,a.kt)("p",null,"Check out the final result:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Final result",src:n(13176).Z,width:"700",height:"720"})))}s.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=u(n),s=o,m=f["".concat(c,".").concat(s)]||f[s]||d[s]||a;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function s(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96454:function(t,e,n){e.Z=n.p+"assets/images/phoneAction_dir-4a33175d2cc12f780e091d476ecaa3b0.png"},13176:function(t,e,n){e.Z=n.p+"assets/images/rendu-android-14f71c3c2305115bf53934226b91161e.png"}}]);