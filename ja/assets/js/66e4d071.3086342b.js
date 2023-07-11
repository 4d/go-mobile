"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2912],{72884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const n={id:"testing-on-your-device",title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},i=void 0,o={unversionedId:"tutorials/deploying-in-house/testing-on-your-device",id:"version-19-R8/tutorials/deploying-in-house/testing-on-your-device",title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30d0\u30a4\u30b9\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/tutorials/deploying-in-house/testing-on-your-device.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/testing-on-your-device",permalink:"/go-mobile/ja/docs/19-R8/tutorials/deploying-in-house/testing-on-your-device",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/deploying-in-house/testing-on-your-device.md",tags:[],version:"19-R8",frontMatter:{id:"testing-on-your-device",title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"tutorials",previous:{title:"Apple Developer Program \u306e\u9078\u629e",permalink:"/go-mobile/ja/docs/19-R8/tutorials/developer-program/selecting-your-developer-program"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",permalink:"/go-mobile/ja/docs/19-R8/tutorials/deploying-in-house/deployment-in-house-archive-and-export"}},p={},s=[{value:"\u8981\u4ef6",id:"\u8981\u4ef6",level:2},{value:"\u2488 \u2488 \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"--\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u2489 \u2488 Xcode \u306e\u8a2d\u5b9a",id:"--xcode-\u306e\u8a2d\u5b9a",level:2},{value:"\u248a \u2489 Team ID \u3092\u53d6\u5f97\u3059\u308b",id:"--team-id-\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"\u248b \u248b \u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID",id:"--\u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id",level:2},{value:"Provisioning Profile \u304a\u3088\u3073\u8a3c\u660e\u66f8\u306f\u3001Xcode \u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002",id:"provisioning-profile-\u304a\u3088\u3073\u8a3c\u660e\u66f8\u306fxcode-\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059",level:3},{value:"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066 Xcode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b",id:"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066-xcode-\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b",level:3},{value:"\u248c \u248c \u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID",id:"--\u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id",level:2},{value:"\u248d \u248d \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"--\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Apple Configurator 2 \u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"apple-configurator-2-\u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"Xcode \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"xcode-\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30d0\u30a4\u30b9\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u8981\u4ef6"},"\u8981\u4ef6"),(0,l.kt)("p",null,"Apple Developer Program \u306b\u52a0\u5165\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u76ee\u7684\u3084\u597d\u307f\u306b\u5fdc\u3058\u3066\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306b\u5165\u4f1a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7121\u6599\u306e Apple Developer Program: \u30c6\u30b9\u30c8\u3060\u3051\u3067\u304d\u308c\u3070\u826f\u3044\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enroll/"},"\u7d44\u7e54\u307e\u305f\u306f\u500b\u4eba\u5411\u3051\u306e Apple Developer Program"),": App Store \u7d4c\u7531\u3067\u914d\u5e03\u3057\u305f\u3044\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enterprise/"},"Apple Enterprise Developer Program"),": App Store \u3092\u7d4c\u7531\u305b\u305a\u306b In-House \u3067\u904b\u7528\u3057\u305f\u3044\u5834\u5408")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u81ea\u52d5\u5316\u3059\u308b\u305f\u3081\u306b\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," \u304c macOS \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059 (\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093)")),(0,l.kt)("h2",{id:"--\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"},"\u2488 \u2488 \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Apple ID"),": Apple ID \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u307e\u3060\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,l.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"\u3053\u3053")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8"),": App Store \u7d4c\u7531\u306e\u914d\u5e03\u304c\u76ee\u7684\u3067\u3042\u308c\u3070\u3001Apple Developer Program (\u7d44\u7e54\u307e\u305f\u306f\u500b\u4eba\u5411\u3051)\u3001In-House \u904b\u7528\u304c\u76ee\u7684\u3067\u3042\u308c\u3070\u3001Apple Developer Enterprise Program \u306b\u52a0\u5165\u3057\u307e\u3059\u3002"))),(0,l.kt)("h2",{id:"--xcode-\u306e\u8a2d\u5b9a"},"\u2489 \u2488 Xcode \u306e\u8a2d\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8"),": Xcode\u3092\u8d77\u52d5\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc \uff1e Preferences \uff1e Accounts \u3092\u9078\u629e\u3057\u3066 Apple ID \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 ",(0,l.kt)("img",{alt:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8",src:r(19432).Z,width:"768",height:"557"}))),(0,l.kt)("h2",{id:"--team-id-\u3092\u53d6\u5f97\u3059\u308b"},"\u248a \u2489 Team ID \u3092\u53d6\u5f97\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7121\u6599\u306e Apple Developer Program \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3042\u308c\u3070 ",(0,l.kt)("a",{parentName:"li",href:"#%E7%84%A1%E6%96%99%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE-team-id"},"\u248b")," \u306b\u9032\u307f\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"\u7d44\u7e54")," \u304a\u3088\u3073 ",(0,l.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"\u500b\u4eba\u5411\u3051\u306e Apple Developer Program")," \u307e\u305f\u306f ",(0,l.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," \u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3042\u308c\u3070 ",(0,l.kt)("a",{parentName:"li",href:"#%E6%9C%89%E6%96%99%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE-team-id"},"\u248c")," \u306b\u9032\u307f\u307e\u3059\u3002")),(0,l.kt)("h2",{id:"--\u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id"},"\u248b \u248b \u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID"),(0,l.kt)("h3",{id:"provisioning-profile-\u304a\u3088\u3073\u8a3c\u660e\u66f8\u306fxcode-\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059"},"Provisioning Profile \u304a\u3088\u3073\u8a3c\u660e\u66f8\u306f\u3001Xcode \u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f... \u30e1\u30cb\u30e5\u30fc\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30d3\u30eb\u30c9\u30bf\u30d6",src:r(79292).Z,width:"1033",height:"994"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u56f3\u306e\u3088\u3046\u306b ",(0,l.kt)("strong",{parentName:"li"},"Automatically manage signing")," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 Team\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u3053\u3053\u3067\u8ffd\u52a0\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9078\u629e",src:r(2152).Z,width:"1106",height:"877"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u3092 USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u63a5\u7d9a\u3057\u3001Xcode \u306e\u30c4\u30fc\u30eb\u30d0\u30fc\u306b\u3042\u308b\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u9078\u629e\u306b\u4f7f\u3046\u30e1\u30cb\u30e5\u30fc (\u56f3\u3092\u53c2\u7167) \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u63a5\u7d9a\u4e2d\u306e\u30c7\u30d0\u30a4\u30b9\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c7\u30d0\u30a4\u30b9\u306e\u9078\u629e",src:r(97228).Z,width:"1106",height:"877"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Xcode \u306f\u3001\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a Provisioning Profile \u3068\u8a3c\u660e\u66f8\u3092\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002")),(0,l.kt)("h3",{id:"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066-xcode-\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b"},"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066 Xcode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3042\u3068\u306f\u3001Xcode \u306e\u5b9f\u884c\u30dc\u30bf\u30f3 (\u56f3\u3092\u53c2\u7167) \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3060\u3051\u3067\u3059\uff01")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",src:r(5904).Z,width:"1106",height:"877"})),(0,l.kt)("h2",{id:"--\u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id"},"\u248c \u248c \u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Team ID"),": Apple Developer \u306b\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002 Membership \u30da\u30fc\u30b8\u306b Team ID \u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002 ",(0,l.kt)("img",{alt:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7",src:r(16263).Z,width:"768",height:"739"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"4D for iOS"),": \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30bb\u30af\u30b7\u30e7\u30f3\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u3066\u3001\u4e00\u822c\u30da\u30fc\u30b8\u306e\u90e8\u7f72\u540d\u306b Team ID \u3092\u5165\u529b\u3057\u307e\u3059\u3002 ",(0,l.kt)("img",{alt:"General\u753b\u9762",src:r(64055).Z,width:"768",height:"739"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u248d \u306b\u9032\u3093\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30d7\u30ea\u3092\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"))),(0,l.kt)("h2",{id:"--\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u248d \u248d \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u3053\u306e\u624b\u9806\u3067\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/19-R8/getting-started/requirements#apple-device-developer-mode"},"Apple Device Developer Mode")," \u304c\u6709\u52b9\u306b\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,l.kt)("h3",{id:"apple-configurator-2-\u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Apple Configurator 2 \u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304c\u51fa\u6765\u304c\u3063\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u3092 USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30d6\u306e ",(0,l.kt)("strong",{parentName:"li"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30dc\u30bf\u30f3",src:r(38429).Z,width:"768",height:"739"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u4e0a\u306b\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u958b\u59cb\u3059\u308b\u306f\u305a\u3067\u3059\uff01")),(0,l.kt)("h3",{id:"xcode-\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Xcode \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304c\u51fa\u6765\u304c\u3063\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u3092 USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30d6\u306e ",(0,l.kt)("strong",{parentName:"li"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30de\u30cb\u30e5\u30a2\u30eb\u64cd\u4f5c\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",src:r(62503).Z,width:"2164",height:"1988"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u4f5c\u6210",src:r(50820).Z,width:"2164",height:"1988"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u4f5c\u6210\u306b\u6210\u529f\u3057\u3066\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u305f\u3089 OK \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u5834\u6240\u3092 Finder \u3067\u958b\u304d\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a2\u30fc\u30ab\u30a4\u30d6\u3092Finder\u306b\u8868\u793a",src:r(95523).Z,width:"1168",height:"734"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Xcode \u3092\u8d77\u52d5\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc \uff1e Window \uff1e Devices and Simulators \u3092\u9078\u629e\u3057\u3066\u3001\u751f\u6210\u3055\u308c\u305f ipa\u30d5\u30a1\u30a4\u30eb\u3092 Installed Apps \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c7\u30d0\u30a4\u30b9\u3068\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",src:r(19078).Z,width:"2346",height:"1636"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u4e0a\u306b\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u958b\u59cb\u3059\u308b\u306f\u305a\u3067\u3059\uff01")))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=l,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50820:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},5904:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},19432:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},19078:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},38429:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},62503:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},79292:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},95523:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},16263:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},64055:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},2152:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},97228:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);