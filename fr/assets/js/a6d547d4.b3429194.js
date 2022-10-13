"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[736],{54933:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={id:"on-mobile-app-action",title:"On Mobile App Action"},o=void 0,i={unversionedId:"4d/on-mobile-app-action",id:"version-19-R7/4d/on-mobile-app-action",title:"On Mobile App Action",description:"On Mobile App Action( mobileInfo Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/4d/on-mobile-app-action.md",sourceDirName:"4d",slug:"/4d/on-mobile-app-action",permalink:"/go-mobile/fr/docs/4d/on-mobile-app-action",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/4d/on-mobile-app-action.md",tags:[],version:"19-R7",frontMatter:{id:"on-mobile-app-action",title:"On Mobile App Action"},sidebar:"docs",previous:{title:"On Mobile App Authentication",permalink:"/go-mobile/fr/docs/4d/on-mobile-app-authentication"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],d={toc:m};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On Mobile App Action"),"( ",(0,r.kt)("em",{parentName:"p"},"mobileInfo")," : Object ) -> ",(0,r.kt)("em",{parentName:"p"},"result")," : Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Information passed by the mobile application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Action status & data synchro")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Mobile App Action")," 4D database method is in charge of managing actions requested by the mobile application for a specific session."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The mobile application must have been authenticated by the ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/4d/on-mobile-app-authentication"},"On Mobile App Authentication")," database method.")),(0,r.kt)("p",null,"This database method is called by 4D when a mobile application sends an action request."),(0,r.kt)("p",null,"The database method receives required information from the mobile application in the ",(0,r.kt)("em",{parentName:"p"},"mobileInfo")," parameter (object), and must return the action status in the ",(0,r.kt)("em",{parentName:"p"},"result")," parameter (object). You must declare and initialize these parameters as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," //On Mobile App Action database method\n#DECLARE ($mobileInfo : Object) -> $result : Object\n  // ...Code for the method\n$result:=New object() //do not forget to create the object to return\n")),(0,r.kt)("p",null,"The following properties are received in the ",(0,r.kt)("em",{parentName:"p"},"mobileInfo")," object parameter:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"Action name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID of the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/API/SessionClass.html"},"Session")," object on the 4D server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ip"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"Session IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Action parameters sent from the mobile application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Context parameters for the requested action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dataClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"4D dataclass name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"entity.primaryKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Text, Longint"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a selected entity). Primary key of the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"entity.relationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Many-to-one relation name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"parent.primaryKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Text, Longint"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Primary key of the parent entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"parent.relationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). One-to-many relation name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"parent.dataClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can access the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/API/SessionClass.html"},"Session object")," automatically created on the 4D server from this database method. You can use this object to control the mobile session.")),(0,r.kt)("p",null,"After processing information, the database method must return an object with the following properties in ",(0,r.kt)("em",{parentName:"p"},"result"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool\xe9en"),(0,r.kt)("td",{parentName:"tr",align:null},"True if action has been successfully processed, False otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusText"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errors"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Each object contains a ",(0,r.kt)("a",{parentName:"td",href:"../project-definition/actions#update-pending-tasks-that-failed"},"pair of 'parameter'/'message' keys")," to display in the mobile application for rejected entries.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSynchro"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool\xe9en"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'  // On Mobile App Action\n  // 2 actions are defined: "done" and "postponeAll"\n\n#DECLARE ($request : Object) -> $result : Object\n\nvar $o;$context : Object\n\n $context:=$request.context\n\n Case of\n\n    :($request.action="done")\n       $o:=New object(\\\n       "dataClass";$context.dataClass;\\\n       "ID";$context.entity.primaryKey;\\\n       "CompletePercentage";100)\n\n       $result:=modifyStatus($o) //call your project method to modify the status of the entity\n\n    :($request.action="postponeAll")\n       $o:=New object("dataClass";$context.dataClass)\n\n       $result:=postponeAll($o) //call your project method to postpone all entities of the dataClass\n\n    Else //Unknown request\n       $result:=New object("success";False)\n\n End case\n\n')))}s.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=m(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);