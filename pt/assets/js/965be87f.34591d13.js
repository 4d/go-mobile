"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5642],{67202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={id:"email",title:"Email authentication example"},s=void 0,r={unversionedId:"tutorials/login-forms/email",id:"version-20/tutorials/login-forms/email",title:"Email authentication example",description:"This authentication example provides a way to verify that an email comes from whom it claims to be from, and will allow to block harmful or fraudulent uses of email.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/tutorials/login-forms/email.md",sourceDirName:"tutorials/login-forms",slug:"/tutorials/login-forms/email",permalink:"/go-mobile/pt/docs/tutorials/login-forms/email",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/login-forms/email.md",tags:[],version:"20",frontMatter:{id:"email",title:"Email authentication example"},sidebar:"tutorials",previous:{title:"Layout Android",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template-layout"},next:{title:"Custom Login Form",permalink:"/go-mobile/pt/docs/tutorials/login-forms/custom-login-form"}},l={},c=[{value:"Scenario",id:"scenario",level:2},{value:"1. Enable authentication",id:"1-enable-authentication",level:4},{value:"2. Enter email address",id:"2-enter-email-address",level:4},{value:"3. Check mailbox and 4. Click on the link",id:"3-check-mailbox-and-4-click-on-the-link",level:4},{value:"5. and 6. Back to the app",id:"5-and-6-back-to-the-app",level:4},{value:"Using the 4D Mobile App Server Component",id:"using-the-4d-mobile-app-server-component",level:2},{value:"Without the Component",id:"without-the-component",level:2},{value:"Remote url definition",id:"remote-url-definition",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This authentication example provides a way to verify that an email comes from whom it claims to be from, and will allow to block harmful or fraudulent uses of email."),(0,i.kt)("h2",{id:"scenario"},"Scenario"),(0,i.kt)("p",null,"In short, the principle is the following:"),(0,i.kt)("h4",{id:"1-enable-authentication"},"1. Enable authentication"),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," in the Publishing page to use a login form into your app. Select ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," in the Publishing page to use a login form into your app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"authentication activation",src:n(39587).Z,width:"351",height:"122"})),(0,i.kt)("h4",{id:"2-enter-email-address"},"2. Enter email address"),(0,i.kt)("p",null,"An email is required when the app is launched. An email is required when the app is launched. A validation email is then sent to the user."),(0,i.kt)("h4",{id:"3-check-mailbox-and-4-click-on-the-link"},"3. Check mailbox and 4. Click on the link"),(0,i.kt)("p",null,"When the validation email is available, the user only needs to click on the validation link. This will call the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Web-Connection-database-method.301-5392847.en.html"},(0,i.kt)("inlineCode",{parentName:"a"},"On Web Connection"))," database method and update the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/special-features/session-management"},"user's session"),' status from "pending" to "accepted".'),(0,i.kt)("h4",{id:"5-and-6-back-to-the-app"},"5. and 6. Back to the app"),(0,i.kt)("p",null,"Once the validation is done, the user can reopen their app and click on the ",(0,i.kt)("strong",{parentName:"p"},"Login")," button. The ",(0,i.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication"),' method is called again but this time, the user\'s session status is "accepted", so the access is granted.'),(0,i.kt)("p",null,"Here is a snapshot of the whole sequence:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Authentication",src:n(9731).Z,width:"1812",height:"1238"})),(0,i.kt)("p",null,"You can handle this sequence using a special component, or manually."),(0,i.kt)("h2",{id:"using-the-4d-mobile-app-server-component"},"Using the 4D Mobile App Server Component"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," component is a toolbox component developed to help you manage several common mobile features. It provides methods for authenticate email logins."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"Mobile App Email Checker")," method from the ",(0,i.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," database method with the information provided by the mobile application:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// On Mobile App Authentication database method\n\n#DECLARE ($mobileInfo : Object) -> $result : Object\n$result:= Mobile App Email Checker($mobileInfo)\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"Mobile App Active Session")," method from the ",(0,i.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," ID parameter retrieved from the URL:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection database method\n\n#DECLARE ($info : Text) Case of \n: (Mobile App Active Session($info).success)\n    //add log if you want End case \n\n")),(0,i.kt)("p",null,"It's as simple as that!"),(0,i.kt)("p",null,"You will find more information in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md"},"Email Checker method documentation"),"."),(0,i.kt)("h2",{id:"without-the-component"},"Without the Component"),(0,i.kt)("p",null,"You can implement your own email authentication without using the 4D Mobile App Server component. Here a basic example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," database method, write the following code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'// On Mobile App Authentication database method\n\n#DECLARE($request : Object)->$response : Object\nvar $mail;$status : Object\n\n  // Create an email with an activation URL\n$mail:=New object\n$mail.from:="myapplication@gmail.com"\n$mail.to:=$request.email  // email entered by the user on their smartphone\n$mail.subject:="Login confirmation"\n$mail.htmlBody:="<a href=\\"https://myserverapplication/activation/"+$request.session.id \\\n+"\\">Click Here to confirm your email.</a>\\"<br>"\n\n  // Send mail\n$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")\n$transporter:=SMTP New transporter($smtp)\n$status:=$transporter.send($mail)\n\n  // Configure response for the mobile app\n$response:=New object\n\n  // Declare that the current session is being verified\n$response.verify:=True\n\n  // Check if the email was successsfully sent\nIf ($status.success)\n      //create a share object to contain our sessions, accessible from all processes\n    If (Storage.pendingSessions=Null)\n        Use (Storage)\n            Storage.pendingSessions:=New shared object\n        End use \n    End if \n\n    Use (Storage.pendingSessions)\n          //Add a session to our session lists\n        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id\n    End use \n\n    $response.success:=True\n    $response.statusText:="Please check your mail box"\nElse \n      // Display an error message on the smatphone\n    $response.statusText:="The mail is not sent please try again later"\n    $response.success:=False\nEnd if \n\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method, write some code to activate the session after the user clicked on the link in the confirmation email.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'// On Web Connection database method\n\n#DECLARE($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \n\nvar $token ; $session : Text\nvar $sessionFile ; $sessionObject : Object If ($url="/activation/@")\n    $token:=Substring($1;13)\nEnd if \n\n\n  //get session from ID received from URL If (Storage.pendingSessions#Null)\n    $session:=Storage.pendingSessions[$token]\nEnd if If ($session#"")\n      //get session folder\n    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)\n    $sessionObject:=JSON Parse($sessionFile.getText())\n      //update status value\n    $sessionObject.status:="accepted"\n    $sessionFile.setText(JSON Stringify($sessionObject))\n    Use (Storage.pendingSessions)\n          //delete pending session\n        OB REMOVE(Storage.pendingSessions;$token)\n    End use \n\n    /*\n        The MOBILE APP REFRESH SESSIONS command checks all mobile\n        application session files located in the MobileApps folder of the server, \n        and updates existing session contents in memory for any edited files.\n    */\n\n    MOBILE APP REFRESH SESSIONS\n\n    WEB SEND TEXT("You are successfully authenticated")\nElse \n    WEB SEND TEXT("Invalid session") End if \n')),(0,i.kt)("h2",{id:"remote-url-definition"},"Remote url definition"),(0,i.kt)("p",null,"By default, a remote server URL is defined in your Android app. In case the URL is not correct, the server will not be accessible. Therefore, to modify or update this URL, just make a long pressure on the icon in the login screen, or from the settings tab. Once you press the icon, a message is displayed with the remote url address and the server access status. You will then be able to edit the URL, authenticate successfully and access the server."),(0,i.kt)("p",null,'On iOS, you can edit the remote server URL from the iOS device Settings screen. You just need to check the "Reset server address" option to enter the correct server address.'))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9731:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/4D-for-iOS-email-auth-6e5d979a255eb468fc5d777636c9f442.png"},39587:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);