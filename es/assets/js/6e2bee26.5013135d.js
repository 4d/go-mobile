"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[595],{3602:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=o(83117),n=o(80102),i=(o(67294),o(3905)),c=["components"],u={id:"working-with-xcode",title:"Working with Xcode"},a=void 0,l={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"version-19-R3/tutorials/customizing-with-xcode/working-with-xcode",title:"Working with Xcode",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R3/tutorials/customizing-with-xcode/working-with-xcode.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/go-mobile/es/docs/19-R3/tutorials/customizing-with-xcode/working-with-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/customizing-with-xcode/working-with-xcode.md",tags:[],version:"19-R3",frontMatter:{id:"working-with-xcode",title:"Working with Xcode"},sidebar:"version-19-R3/tutorials",previous:{title:"Xcode",permalink:"/go-mobile/es/docs/19-R3/tutorials/customizing-with-xcode/what-is-xcode"},next:{title:"Xcode Overview",permalink:"/go-mobile/es/docs/19-R3/tutorials/customizing-with-xcode/xcode-overview"}},p={},s=[{value:"STEP 1. Generate your iOS Project",id:"step-1-generate-your-ios-project",level:2},{value:"STEP 2. Build your Project",id:"step-2-build-your-project",level:2},{value:"STEP 3. Open your Project with Xcode",id:"step-3-open-your-project-with-xcode",level:2}],d={toc:s};function m(e){var t=e.components,u=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Open a 4D for iOS project from the Project Editor."),(0,i.kt)("li",{parentName:"ul"},"Customize the generated 4D for iOS app."))),(0,i.kt)("p",null,"4D for iOS generates a native iOS app for you which you can modify and customize with Xcode. Let's take a look at the process!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("p",{parentName:"blockquote"},"If you customize your project on Xcode and rebuild it from the Project Editor All of your modifications will be lost!")),(0,i.kt)("p",null,"We'll use the ",(0,i.kt)("a",{parentName:"p",href:"../create-your-first-app"},"contact application")," we created. "),(0,i.kt)("p",null,"Download the Starter project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"#"},"Download")),(0,i.kt)("h2",{id:"step-1-generate-your-ios-project"},"STEP 1. Generate your iOS Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If your haven't built your project yet, go to step 2."),(0,i.kt)("li",{parentName:"ul"},"If you've already built your project, go to step 3.")),(0,i.kt)("h2",{id:"step-2-build-your-project"},"STEP 2. Build your Project"),(0,i.kt)("p",null,"From the Project Editor BUILD tab:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the device to use as a Simulator by clicking on the device button."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Build and Run")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Run",src:o(94390).Z,width:"768",height:"739"})),(0,i.kt)("h2",{id:"step-3-open-your-project-with-xcode"},"STEP 3. Open your Project with Xcode"),(0,i.kt)("p",null,"From the Project Editor BUILD tab:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Project > Open the project with Xcode")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Open your Project with Xcode",src:o(90953).Z,width:"1033",height:"994"})),(0,i.kt)("p",null,"Now you're ready to start working on your 4D for iOS project in Xcode."))}m.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),l=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return o?r.createElement(f,c(c({ref:t},p),{},{components:o})):r.createElement(f,c({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,c=new Array(i);c[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<i;l++)c[l]=o[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},90953:function(e,t,o){t.Z=o.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-6fbba90ad139fdb4bc2e436c061c0106.png"},94390:function(e,t,o){t.Z=o.p+"assets/images/build-and-run-dfc802f164eab0d00808ff57bd0e3c3c.png"}}]);