"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5809],{16240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={id:"push-notification",title:"Push notifications"},r=void 0,s={unversionedId:"special-features/push-notification",id:"version-20/special-features/push-notification",title:"Push notifications",description:"What is a push notification?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/special-features/push-notification.md",sourceDirName:"special-features",slug:"/special-features/push-notification",permalink:"/go-mobile/fr/docs/special-features/push-notification",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/special-features/push-notification.md",tags:[],version:"20",frontMatter:{id:"push-notification",title:"Push notifications"},sidebar:"docs",previous:{title:"Gestion des sessions",permalink:"/go-mobile/fr/docs/special-features/session-management"},next:{title:"Deep Linking",permalink:"/go-mobile/fr/docs/special-features/deep-linking"}},l={},c=[{value:"What is a push notification?",id:"what-is-a-push-notification",level:2},{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Basic example to manage push notifications",id:"basic-example-to-manage-push-notifications",level:2},{value:"Push notification with data synchronization",id:"push-notification-with-data-synchronization",level:2},{value:"Data synchronization with a notification opening a record",id:"data-synchronization-with-a-notification-opening-a-record",level:3},{value:"Data synchronization with a simple notification",id:"data-synchronization-with-a-simple-notification",level:3},{value:"Windows Configuration",id:"windows-configuration",level:2},{value:"MobileApps folder",id:"mobileapps-folder",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-push-notification"},"What is a push notification?"),(0,o.kt)("p",null,"On a mobile phone, a push notification is an alert message, received via an application, that you can open, delete, allow or block. It can be very useful for example to notify your app users that a new version is available."),(0,o.kt)("p",null,"But what about the architecture to implement, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display on the user's mobile?"),(0,o.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,o.kt)("p",null,"Here are the different elements needed to create, send and receive a mobile push notification (example with iOS):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Push notification process",src:n(65391).Z,width:"2317",height:"1600"})),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to send push notifications, you need to generate and reference authentication and configuration files for your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate and download your authentication files:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"iOS"),": Generate and download a ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthKey_XXXYYY.p8")," authentication key file as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md"},"this documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Android"),": Configure your Firebase project to get your ",(0,o.kt)("inlineCode",{parentName:"li"},"google-services.json")," file and your ",(0,o.kt)("inlineCode",{parentName:"li"},"server key")," as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Conf_firebase.md"},"this documentation"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("a",{parentName:"li",href:"../project-definition/publishing"},"Publishing")," page, check the ",(0,o.kt)("strong",{parentName:"li"},"Push notifications")," option and select appropriate files(s) for the mobile project:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"iOS"),": select the ",(0,o.kt)("inlineCode",{parentName:"li"},".p8")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Android"),": select the ",(0,o.kt)("inlineCode",{parentName:"li"},"google-services.json")," file")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publishing section",src:n(64703).Z,width:"2164",height:"1988"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Android only"),": In the push notification method, reference the ",(0,o.kt)("inlineCode",{parentName:"li"},"server key")," using the following statement:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification.auth.serverKey:="your_server_key"\n\n')),(0,o.kt)("h2",{id:"basic-example-to-manage-push-notifications"},"Basic example to manage push notifications"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d/4D-Mobile-App-Server/tree/main"},"4D Mobile App Server")," component provides methods to push notifications to one or multiple recipients. For detailed information, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Classes/PushNotification.md"},"PushNotification component documentation"),"."),(0,o.kt)("p",null,"Here is a simple example of push notification sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"test@4d.com"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$target:=New collection("ios";"android")\n$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)\n$pushNotification.auth.isDevelopment:=True //iOS only, to remove for production\n$pushNotification.auth.serverKey:="your_server_key" //Android only\n$notification:=New object \n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$response:=$pushNotification.send($notification;"test@4d.com")\n\n')),(0,o.kt)("p",null,"It's as simple as that!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d/4D-Mobile-App-Server/blob/main/Documentation/Classes/PushNotification.md"},(0,o.kt)("strong",{parentName:"a"},"4D Mobile App Server")," component")," to easily adapt the push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports and even better: pull requests.")),(0,o.kt)("h2",{id:"push-notification-with-data-synchronization"},"Push notification with data synchronization"),(0,o.kt)("p",null,"With a push notification, you can also launch a synchronization to update your data."),(0,o.kt)("p",null,"For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone."),(0,o.kt)("p",null,"To do so using the ",(0,o.kt)("inlineCode",{parentName:"p"},"4D Mobile App Server")," component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," object."),(0,o.kt)("h3",{id:"data-synchronization-with-a-notification-opening-a-record"},"Data synchronization with a notification opening a record"),(0,o.kt)("p",null,"By default, a notification opening a record automatically triggers a data synchronization."),(0,o.kt)("p",null,"For example, in a Contact app, if a contact\u2019s specific information (",(0,o.kt)("em",{parentName:"p"},"i.e.")," a contact\u2019s record, such as the address or the phone number) has been modified, the user receives a notification that automatically opens the relevant record and synchronizes the data contained in the record. When the user opens the notification, the contact\u2019s information is fully updated."),(0,o.kt)("p",null,"Here's an example of the default behaviour, a ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," request with the ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," method:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," method exclusively, this is the default behaviour. As a result, if you don't specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$target:=New collection("ios";"android")\n$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)\n$pushNotification.auth.isDevelopment:=True //iOS only\n$pushNotification.auth.serverKey:="your_server_key" //Android only\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,o.kt)("p",null,"However, you can also choose not to force a data synchronization, by preventing ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$target:=New collection("ios";"android")\n$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)\n$pushNotification.auth.isDevelopment:=True //iOS only\n$pushNotification.auth.serverKey:="your_server_key" //Android only\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; False)\n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,o.kt)("h3",{id:"data-synchronization-with-a-simple-notification"},"Data synchronization with a simple notification"),(0,o.kt)("p",null,"You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part."),(0,o.kt)("p",null,"Here is a code example that you can also use with other methods, as long as you fill the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," object with ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$target:=New collection("ios";"android")\n$pushNotification:=MobileAppServer.PushNotification.new("TEAM123456.com.sample.myappname";$target)\n$pushNotification.auth.isDevelopment:=True //iOS only\n$pushNotification.auth.serverKey:="your_server_key" //Android only\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; True)\n\n$response:=$pushNotification.send($notification; $recipients)\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data synchronization animation",src:n(31708).Z,width:"360",height:"720"})),(0,o.kt)("h2",{id:"windows-configuration"},"Windows Configuration"),(0,o.kt)("p",null,"Windows users need to download the ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"last CURL version")," to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database."),(0,o.kt)("h2",{id:"mobileapps-folder"},"MobileApps folder"),(0,o.kt)("p",null,"Whether you're working on Windows or on macOS, you need to copy the following files from your development project to your production project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/manifest.json"))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65391:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4D-for-ios-push-notification-1ba2c9f12090cef619cebe2a419431e3.png"},64703:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/push-notification-publishing-section-f2975b2a01f145baf627056df0614b45.png"},31708:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pushandSynchro-f7cc0281002b632433be23a623298cd9.gif"}}]);