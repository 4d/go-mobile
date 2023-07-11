"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5642],{5342:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));const a={id:"customize-your-ios-app",title:"Customize your 4D for iOS App"},l=void 0,r={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-20/tutorials/customizing-with-xcode/customize-your-ios-app",title:"Customize your 4D for iOS App",description:"Now, let's do some storyboard modification ... from simple to complex.",source:"@site/versioned_docs/version-20/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/customize-your-ios-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"20",frontMatter:{id:"customize-your-ios-app",title:"Customize your 4D for iOS App"},sidebar:"tutorials",previous:{title:"4D for iOS project organization",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Selecting your Apple Developer Program",permalink:"/go-mobile/docs/tutorials/developer-program/selecting-your-developer-program"}},s={},c=[{value:"STEP 1. Simple label modification",id:"step-1-simple-label-modification",level:2},{value:"STEP 2. Change profile picture position",id:"step-2-change-profile-picture-position",level:2},{value:"STEP 3. Update profile picture constraints",id:"step-3-update-profile-picture-constraints",level:2},{value:"STEP 4. Update label positions and constraints",id:"step-4-update-label-positions-and-constraints",level:2},{value:"Now, let&#39;s work on the First Name label.",id:"now-lets-work-on-the-first-name-label",level:4},{value:"Finally, we&#39;ll work on the Last Name label.",id:"finally-well-work-on-the-last-name-label",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now, let's do some storyboard modification ... from simple to complex."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result",src:i(25039).Z,width:"1276",height:"1134"})),(0,o.kt)("h2",{id:"step-1-simple-label-modification"},"STEP 1. Simple label modification"),(0,o.kt)("p",null,"We'll start by modifying a label's font and color:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," file from the Navigation tab. "),(0,o.kt)("li",{parentName:"ul"},"Click on the First Name label (you can also select it from the interface builder or the left pane)."),(0,o.kt)("li",{parentName:"ul"},"Select the Attributes inspector pane from the Utility area.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attributes inspector",src:i(84065).Z,width:"1117",height:"790"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change the font from Helvetica Neue Bold to Futura Bold. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attributes inspector font",src:i(44777).Z,width:"1291",height:"1006"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can also change the color of the font from the same pane.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attributes inspector color",src:i(92249).Z,width:"1291",height:"1006"})),(0,o.kt)("h2",{id:"step-2-change-profile-picture-position"},"STEP 2. Change profile picture position"),(0,o.kt)("p",null,"All 4D for iOS templates use constraints for the app's elements to be well displayed on all devices."),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard")," file, the picture, First Name, and Last Name labels are all currently center aligned. "),(0,o.kt)("p",null,"Let's change it to appear like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator result",src:i(67372).Z,width:"545",height:"964"})),(0,o.kt)("p",null,"First, vertically align the picture and drag the First Name and Last Name labels to the right of the picture."),(0,o.kt)("p",null,"Next, select the image and go to the Size attributes pane from the Utility area. Change the X value from 161.67 to 40.67 and the Y value from 28 to 79."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture position",src:i(69812).Z,width:"1072",height:"1034"})),(0,o.kt)("p",null,"As you can see, the position has changed but Xcode is displaying yellow lines...why?\nThese yellow lines represent constraints which are no longer valid."),(0,o.kt)("h2",{id:"step-3-update-profile-picture-constraints"},"STEP 3. Update profile picture constraints"),(0,o.kt)("p",null,"To vertically align the picture in the center in the Superview (the view which contains it), we need to delete the existing constraints and add new ones."),(0,o.kt)("p",null,"The image currently has the following constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Width Equals: A width of 78 pixels."),(0,o.kt)("li",{parentName:"ul"},"Height Equals: A height of 78 pixels."),(0,o.kt)("li",{parentName:"ul"},"Align Center X: Centers the image on a previously defined horizontal axis."),(0,o.kt)("li",{parentName:"ul"},"Top Space: An amount of space from the top of the image to the top of the view."),(0,o.kt)("li",{parentName:"ul"},"Bottom space to ",(0,o.kt)("inlineCode",{parentName:"li"},"<First Name>"),": The previously defined space between the First Name label and the image.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture constraints",src:i(51944).Z,width:"312",height:"397"})),(0,o.kt)("p",null,"Delete all of the constraints except Width and Height (you'll modify these later from the Size inspector in the Constraints section). The picture outline should be now in red because the constraints are missing."),(0,o.kt)("p",null,"Click on the Align button (at the bottom of the Interface Builder window) and check the ",(0,o.kt)("strong",{parentName:"p"},"Vertically in Container")," checkbox."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture Align",src:i(68342).Z,width:"1072",height:"1034"})),(0,o.kt)("p",null,"Next, click on the ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," button and add a leading space constraint (the left constraint)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture new constraints",src:i(84148).Z,width:"1072",height:"1034"})),(0,o.kt)("p",null,"At this point, all the profile picture constraints should be blue."),(0,o.kt)("p",null,"Congratulations! Your profile picture is now well positioned with the correct constraints."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TIPS")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To create a constraint between two views, press Ctrl and drag one of the views to the other. When you release the mouse button, the Interface Builder displays a menu with a list of possible constraints.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.")))),(0,o.kt)("h2",{id:"step-4-update-label-positions-and-constraints"},"STEP 4. Update label positions and constraints"),(0,o.kt)("h4",{id:"now-lets-work-on-the-first-name-label"},"Now, let's work on the First Name label."),(0,o.kt)("p",null,"We'll begin by changing the position and width:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the First Name label from the Interface Builder."),(0,o.kt)("li",{parentName:"ul"},"Next, change the Width from 386 to 267 pixels."),(0,o.kt)("li",{parentName:"ul"},"Change the X value from 8 to 127 pixels and the Y value from 28 to 79 pixels.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Name Label position",src:i(9193).Z,width:"1139",height:"1040"})),(0,o.kt)("p",null,"Modify the remaining constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delete the leading and the bottom space constraints from the Size inspector."),(0,o.kt)("li",{parentName:"ul"},"Add a leading space constraint by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Add New Constraints")," button to position the First Name label to the right of the Profile picture."),(0,o.kt)("li",{parentName:"ul"},"Press Ctrl and drag the First Name label to the Profile picture. Select the top constraint in the menu to top align both elements.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Name Label top constraint",src:i(92619).Z,width:"1139",height:"1040"})),(0,o.kt)("h4",{id:"finally-well-work-on-the-last-name-label"},"Finally, we'll work on the Last Name label."),(0,o.kt)("p",null,"Change the position and width:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the Last Name label from the Interface Builder."),(0,o.kt)("li",{parentName:"ul"},"Change the width from 386 to 267 pixels."),(0,o.kt)("li",{parentName:"ul"},"Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Last Name Label position",src:i(35346).Z,width:"1139",height:"1040"})),(0,o.kt)("p",null,"Modify the remaining constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delete the leading space constraints from the Size inspector."),(0,o.kt)("li",{parentName:"ul"},"Add a leading space and top space constraints by clicking on the Add New Constraints button. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Last Name Label constraint",src:i(38978).Z,width:"1139",height:"1040"})),(0,o.kt)("p",null,"Both of your name labels are now repostioned. "),(0,o.kt)("p",null,"Let's see the results in the Simulator !"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator result",src:i(83905).Z,width:"545",height:"964"})),(0,o.kt)("p",null,"Hmmmm. That's not exactly the result we wanted ..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels Alignment",src:i(75491).Z,width:"1139",height:"1040"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Next, select the Profile picture and double click on the leading space constraint."),(0,o.kt)("li",{parentName:"ul"},"Change the Constant value from 40.67 to 80 pixels.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Constraints adjustments",src:i(33310).Z,width:"1140",height:"1065"})),(0,o.kt)("p",null,"Much better! Now all constraints are working and the labels aren't breaking other constraints."),(0,o.kt)("p",null,"As you can see, customizing your app is very simple!"))}u.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(i),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},84065:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},92249:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},44777:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},33310:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},9193:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},92619:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},75491:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},38978:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},35346:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},68342:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},51944:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},84148:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},69812:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},25039:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},67372:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},83905:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);