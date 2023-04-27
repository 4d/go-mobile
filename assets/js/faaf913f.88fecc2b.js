"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6388],{98473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=a(87462),r=(a(67294),a(3905));const n={id:"create-your-first-app",title:"Create your first mobile app with 4D"},i=void 0,l={unversionedId:"tutorials/create-your-first-app",id:"version-20/tutorials/create-your-first-app",title:"Create your first mobile app with 4D",description:"Welcome to the 4D mobile application builder. This tutorial will let you dive right into mobile development for iOS and Android with 4D.",source:"@site/versioned_docs/version-20/tutorials/create-your-first-app.md",sourceDirName:"tutorials",slug:"/tutorials/create-your-first-app",permalink:"/go-mobile/docs/tutorials/create-your-first-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/create-your-first-app.md",tags:[],version:"20",frontMatter:{id:"create-your-first-app",title:"Create your first mobile app with 4D"},sidebar:"tutorials",next:{title:"List form templates",permalink:"/go-mobile/docs/tutorials/creating-list-forms/list-form-template"}},p={},s=[{value:"STEP 1. Download the Starter project",id:"step-1-download-the-starter-project",level:2},{value:"STEP 2. Create the mobile project",id:"step-2-create-the-mobile-project",level:2},{value:"STEP 3. General page",id:"step-3-general-page",level:2},{value:"STEP 4. Structure page",id:"step-4-structure-page",level:2},{value:"STEP 5. Labels &amp; Icons page",id:"step-5-labels--icons-page",level:2},{value:"STEP 6. Forms",id:"step-6-forms",level:2},{value:"STEP 7. Build the app",id:"step-7-build-the-app",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the 4D mobile application builder. This tutorial will let you dive right into mobile development for iOS and Android with 4D. "),(0,r.kt)("admonition",{title:"Reminder",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before starting, please check that your configuration meets hardware and software ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/getting-started/requirements"},"requirements")," for 4D mobile project development.  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenario:"),' You are a commercial business manager and you want to consult your contact information on the go. We are going to create a mobile directory app for iOS and/or Android to search for contact names from a list and then view the details of each contact. We\'ll call it "Contact". '),(0,r.kt)("h2",{id:"step-1-download-the-starter-project"},"STEP 1. Download the Starter project"),(0,r.kt)("p",null,"Download and unzip our 4D Starter project, which contains a database file and a project icon (but no mobile project yet).  "),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip"},"Starter project")),(0,r.kt)("h2",{id:"step-2-create-the-mobile-project"},"STEP 2. Create the mobile project"),(0,r.kt)("p",null,'Launch your 4D application and select "Contact.4DProject". It contains a very simple database structure using a single table.'),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"New > Mobile project"),". In the Welcome screen, give your mobile project a name. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Name",src:a(88655).Z,width:"494",height:"449"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),"."),(0,r.kt)("p",null,"Additional components are required to develop an Android project. Click ",(0,r.kt)("strong",{parentName:"p"},"OK")," to download them:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(44493).Z,width:"434",height:"177"})),(0,r.kt)("h2",{id:"step-3-general-page"},"STEP 3. General page"),(0,r.kt)("p",null,"Here, you configure your app's primary information:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(89950).Z,width:"690",height:"638"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target:")," Mobile platform(s) to build")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are on Windows, only ",(0,r.kt)("strong",{parentName:"p"},"Android")," is available. If you are on macOS, you can select both ",(0,r.kt)("strong",{parentName:"p"},"Android")," and ",(0,r.kt)("strong",{parentName:"p"},"iOS")," targets. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organization:")," Name of your company and identifier of the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Product:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:"),' Name of the application. Let\u2019s call this one "Contact".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID:")," (Bundle ID) this area is automatically generated as a composition of your organization identifier and product name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version")," and ",(0,r.kt)("strong",{parentName:"li"},"Copyright:")," Leave the version as 1.0 and define your app's copyright. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icons:")," Select a target OS and drag and drop icons for your app into the area."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:")," Automatically filled from the user name on your computer. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team"),": Developer team reference from your developer account. You can leave it empty to build your application on the Simulator only.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"General",src:a(52062).Z,width:"1072",height:"994"})),(0,r.kt)("h2",{id:"step-4-structure-page"},"STEP 4. Structure page"),(0,r.kt)("p",null,"This is where you define the subset of data to expose to mobile devices. Select the table(s) in the left area and the field(s) in the right area. "),(0,r.kt)("p",null,"For our example, select ",(0,r.kt)("strong",{parentName:"p"},"ID"),", ",(0,r.kt)("strong",{parentName:"p"},"First Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Last Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Job"),", ",(0,r.kt)("strong",{parentName:"p"},"Company"),", ",(0,r.kt)("strong",{parentName:"p"},"Phone"),", ",(0,r.kt)("strong",{parentName:"p"},"Notes"),", and ",(0,r.kt)("strong",{parentName:"p"},"Photo"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Structure",src:a(63525).Z,width:"1072",height:"994"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We highly recommend publishing your primary key in order to identify each record of the database.")),(0,r.kt)("h2",{id:"step-5-labels--icons-page"},"STEP 5. Labels & Icons page"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/project-definition/data"},(0,r.kt)("strong",{parentName:"a"},"Data"))," and ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/project-definition/actions"},(0,r.kt)("strong",{parentName:"a"},"Actions"))," pages allow to configure your app's data and to trigger code on the server. To keep this example simple, we will use default behaviors. ")),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Labels & Icons")," page. Here you can define some labels and icons that will be used throughout the app for the tables, fields, and relations. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Short labels and long labels are automatically used by the app depending on the available space. "),(0,r.kt)("li",{parentName:"ul"},"To define a table icon, click on the ",(0,r.kt)("strong",{parentName:"li"},"Icons")," column for the table. The icon library appears and you can select an icon to illustrate the table or field. You can also opt to leave the icon column empty, a default icon will be generated. "),(0,r.kt)("li",{parentName:"ul"},"Select at least one icon for your fields: the editor will generate default icons for all remaining fields. You can also simply leave all fields empty to not display any field icons. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Icons &amp; Labels",src:a(14163).Z,width:"1082",height:"1002"})),(0,r.kt)("h2",{id:"step-6-forms"},"STEP 6. Forms"),(0,r.kt)("p",null,"We're almost done, but we still need to decide on the app's layout. There are both List and Details forms to choose from."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a List form template to display your table as a list. For our Contact app, let\u2019s use the ",(0,r.kt)("strong",{parentName:"li"},"Profile")," template.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List form template",src:a(80051).Z,width:"1072",height:"994"})),(0,r.kt)("p",null,"At this point, the bottom of the configuration window has changed from template selection to content definition."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop the fields you want displayed onto the template, ",(0,r.kt)("i",null,"i.e."),", Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List form content",src:a(10895).Z,width:"1082",height:"1009"})),(0,r.kt)("p",null,"And finally, we'll define the Detail form. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a template that is best suited for your app. For our Contact app, let\u2019s use the ",(0,r.kt)("strong",{parentName:"li"},"Visual Contact")," template.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detail form template",src:a(30018).Z,width:"1072",height:"994"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop the content onto the appropriate places on the detail form template, ",(0,r.kt)("i",null,"i.e."),", First Name, Last Name, and Photo.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detail form content",src:a(25901).Z,width:"1082",height:"1009"})),(0,r.kt)("h2",{id:"step-7-build-the-app"},"STEP 7. Build the app"),(0,r.kt)("p",null,"Now the fun part! It's time to build your app and test it on the Simulator to see the final result!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Build")," tab."),(0,r.kt)("li",{parentName:"ul"},"Select a device to use as a Simulator by clicking on the device button."),(0,r.kt)("li",{parentName:"ul"},"Click  ",(0,r.kt)("strong",{parentName:"li"},"Build and Run"),"."),(0,r.kt)("li",{parentName:"ul"},"Wait a few seconds and... voila! Your mobile app is alive!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build and Run",src:a(89281).Z,width:"1134",height:"1020"})),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Of course, many other options and features are available. Right now, you can click on ",(0,r.kt)("strong",{parentName:"p"},"Final Project")," below to download the final Contact app."),(0,r.kt)("div",null,(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip"},"FINAL PROJECT")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return a?o.createElement(h,i(i({ref:t},c),{},{components:a})):o.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89281:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Build-the-app-simulator-3e333cd7270b3db48d9d13ddc08eca16.png"},52062:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Contact-app-general-section-4D-for-iOS-415929c9b37bd87cad05677393c72379.png"},14163:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Contact-app-icons-labels-section-4D-for-iOS-6304c32db85ce66c2531ef967fadc4e2.png"},63525:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Contact-app-structure-section-4D-for-iOS-db8f77b9d72adb1da7ca60ac395d5e14.png"},25901:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/DetailformContent-form-section-4D-for-iOS-cf5589e87a43cd76af8b2da9e95b7196.png"},30018:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/DetailformTemplate-form-section-4D-for-iOS-bea0d9cad18badd0d39904aeef5c7f12.png"},10895:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ListformContent-form-section-4D-for-iOS-53751545293f31d01732505adf0da501.png"},80051:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ListformTemplate-form-section-4D-for-iOS-b4e534d35ca6502c7284f53a90db723e.png"},44493:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/install-android-d1cf84f8b66e0e3a9542a3a690ccd020.png"},89950:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/main-page-2a9d6b072df7c0677fec62be03e01fab.png"},88655:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-project-0086ec2255f336ef09eac7d109da09c4.png"}}]);