"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[210],{77574:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=p(87462),a=(p(67294),p(3905));const n={id:"deploy-on-app-store-create-appstore-record",title:"App Store\u30ec\u30b3\u30fc\u30c9\u306e\u4f5c\u6210"},o=void 0,l={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",id:"version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",title:"App Store\u30ec\u30b3\u30fc\u30c9\u306e\u4f5c\u6210",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",permalink:"/go-mobile/ja/docs/19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record.md",tags:[],version:"19-R6",frontMatter:{id:"deploy-on-app-store-create-appstore-record",title:"App Store\u30ec\u30b3\u30fc\u30c9\u306e\u4f5c\u6210"},sidebar:"tutorials",previous:{title:"\u30a2\u30d7\u30ea\u3092 In-House \u3067\u914d\u5e03\u3059\u308b",permalink:"/go-mobile/ja/docs/19-R6/tutorials/deploying-in-house/deployment-in-house-distribute"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",permalink:"/go-mobile/ja/docs/19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload"}},i={},s=[{value:"\u2488 App ID \u3092\u4f5c\u6210\u3059\u308b",id:"-app-id-\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"App ID \u3068\u306f\uff1f",id:"app-id-\u3068\u306f",level:4},{value:"\u2489 App Store Connect \u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b",id:"-app-store-connect-\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b",level:2},{value:"\u248a \u65b0\u898f\u306e iOS\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",id:"-\u65b0\u898f\u306e-ios\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u248b App\u60c5\u5831",id:"-app\u60c5\u5831",level:2},{value:"\u248c \u4fa1\u683c\u304a\u3088\u3073\u914d\u4fe1\u72b6\u6cc1",id:"-\u4fa1\u683c\u304a\u3088\u3073\u914d\u4fe1\u72b6\u6cc1",level:2},{value:"\u248d \u63d0\u51fa\u6e96\u5099\u4e2d",id:"-\u63d0\u51fa\u6e96\u5099\u4e2d",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3067 App ID \u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"App Store Connect \u3067\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u7528\u610f\u3059\u308b\u3082\u306e")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"\u7d44\u7e54\u5411\u3051\u306eApple Developer Program")," \u307e\u305f\u306f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"\u500b\u4eba\u5411\u3051\u306e Apple Developer Program")))),(0,a.kt)("h2",{id:"-app-id-\u3092\u4f5c\u6210\u3059\u308b"},"\u2488 App ID \u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("h4",{id:"app-id-\u3068\u306f"},"App ID \u3068\u306f\uff1f"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"App ID \u306f\u30011\u3064\u306e\u958b\u767a\u30c1\u30fc\u30e0\u306b\u3088\u308b 1\u3064\u4ee5\u4e0a\u306e\u30a2\u30d7\u30ea\u306e\u8b58\u5225\u306b\u4f7f\u7528\u3055\u308c\u308b 2\u3064\u306e\u90e8\u5206\u304b\u3089\u306a\u308b\u6587\u5b57\u5217\u3067\u3059\u3002 \u6587\u5b57\u5217\u306f Team ID \u3068\u30d0\u30f3\u30c9\u30ebID \u3067\u69cb\u6210\u3055\u308c\u3001\u30d4\u30ea\u30aa\u30c9 (.) \u3067\u533a\u5207\u3089\u308c\u307e\u3059 (\u4f8b: TeamID.BundleID)\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u8a18")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u500b\u4eba\u5411\u3051\u306e Apple Developer \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u306f\u3001\u3059\u3050\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u5229\u7528\u3067\u304d\u3001App ID \u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7d44\u7e54\u5411\u3051\u306e Apple Developer \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u306b\u306f\u3001Apple \u306e\u627f\u8a8d\u3092\u5f97\u3066\u304b\u3089\u3001App ID \u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))),(0,a.kt)("p",null,"App ID \u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/ios/identifier/bundle"},"Certificates, IDs & Profile")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Register iOS App IDs")," \u306e\u6a2a\u306b\u3042\u308b + \u8a18\u53f7\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u65b0\u3057\u3044 App ID \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30a2\u30d7\u30ea\u306e\u540d\u524d\u3068\u30d0\u30f3\u30c9\u30ebID \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a2\u30d7\u30eaID",src:p(79773).Z,width:"1134",height:"1206"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306b\u542b\u3081\u308b App Services \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a2\u30d7\u30ea\u30b5\u30fc\u30d3\u30b9",src:p(48817).Z,width:"1150",height:"1331"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Register")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001App ID \u3092\u767b\u9332\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a2\u30d7\u30eaID\u306e\u78ba\u8a8d",src:p(43459).Z,width:"1150",height:"1331"})),(0,a.kt)("h2",{id:"-app-store-connect-\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b"},"\u2489 App Store Connect \u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com"},"App Store Connect \u30a2\u30ab\u30a6\u30f3\u30c8")," \u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30de\u30a4 App")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App Store Connect",src:p(98502).Z,width:"1189",height:"842"})),(0,a.kt)("h2",{id:"-\u65b0\u898f\u306e-ios\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"},"\u248a \u65b0\u898f\u306e iOS\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("p",null,"\u5de6\u4e0a\u306e ",(0,a.kt)("strong",{parentName:"p"},"+")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u65b0\u898f\u306e iOS\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u65b0\u898f\u306e iOS\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",src:p(46881).Z,width:"1025",height:"869"})),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"),": iOS\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u540d\u524d"),": \u30a2\u30d7\u30ea\u540d\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30d7\u30e9\u30a4\u30de\u30ea\u8a00\u8a9e"),": \u30a2\u30d7\u30ea\u3067\u4f7f\u308f\u308c\u308b\u4e3b\u8981\u8a00\u8a9e\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30d0\u30f3\u30c9\u30ebID"),": \u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u304b\u3089\u30a2\u30d7\u30ea\u306e\u30d0\u30f3\u30c9\u30ebID \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SKU"),": \u30a2\u30d7\u30ea\u306e\u30e6\u30cb\u30fc\u30af\u306a ID (\u3053\u308c\u306f\u975e\u516c\u958b\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u306f\u898b\u3048\u307e\u305b\u3093)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9")," (\u4efb\u610f): \u30a2\u30d7\u30ea\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092 App Manager\u3001Developer\u3001Marketer\u3001Sales \u306e\u30ed\u30fc\u30eb\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BundleID\u3092\u5909\u66f4\u3059\u308b",src:p(30342).Z,width:"1074",height:"861"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u8a18")),(0,a.kt)("p",{parentName:"blockquote"},"\u30d0\u30f3\u30c9\u30ebID \u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3001App Store \u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u3067\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u3001Xcode \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u81ea\u5206\u306e\u30d0\u30f3\u30c9\u30ebID \u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"-app\u60c5\u5831"},"\u248b App\u60c5\u5831"),(0,a.kt)("p",null,"App Store Connect \u3067 App\u60c5\u5831 \u3092\u958b\u304d\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fcURL \u3092\u5b9a\u7fa9\u3057\u307e\u3059 (\u4efb\u610f)\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u307e\u3059\u3002 \u3053\u306e\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u306f\u3001iOS 11\u3067\u306f\u3001App Store\u5168\u4f53\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u306e\u4e0b\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u3092\u8868\u793a\u3059\u308b\u30d7\u30e9\u30a4\u30de\u30ea\u30ab\u30c6\u30b4\u30ea\u304a\u3088\u3073\u30bb\u30ab\u30f3\u30c0\u30ea\u30ab\u30c6\u30b4\u30ea (\u4efb\u610f) \u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App\u60c5\u5831",src:p(80654).Z,width:"1300",height:"1182"})),(0,a.kt)("h2",{id:"-\u4fa1\u683c\u304a\u3088\u3073\u914d\u4fe1\u72b6\u6cc1"},"\u248c \u4fa1\u683c\u304a\u3088\u3073\u914d\u4fe1\u72b6\u6cc1"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u3001\u30a2\u30d7\u30ea\u306e\u4fa1\u683c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TIPS")),(0,a.kt)("p",{parentName:"blockquote"},"\u958b\u59cb\u65e5\u3068\u7d42\u4e86\u65e5\u3092\u6307\u5b9a\u3057\u3066\u3001\u671f\u9593\u9650\u5b9a\u306e\u5272\u5f15\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"-\u63d0\u51fa\u6e96\u5099\u4e2d"},"\u248d \u63d0\u51fa\u6e96\u5099\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831")," \u306b\u3001App Store \u3067\u8868\u793a\u3059\u308b\u30a2\u30d7\u30ea\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u3059\u3079\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TIPS")),(0,a.kt)("p",{parentName:"blockquote"},"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306f\u3059\u3079\u3066\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u751f\u6210\u3067\u304d\u307e\u3059 (File > New Screen Shot)\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u63d0\u51fa\u6e96\u5099\u4e2d",src:p(72078).Z,width:"1247",height:"1162"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'\u30a2\u30d7\u30ea\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 iPhone 5.5" Super Retina Display\u3001iPad 12.9" Retina Display\u7528\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306f\u5fc5\u9808\u3067\u3059\u3002 \u8a73\u3057\u304f\u306f\u3001',(0,a.kt)("a",{parentName:"p",href:"https://help.apple.com/app-store-connect/#/devd274dd925"},"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u4ed5\u69d8")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u3001",(0,a.kt)("strong",{parentName:"p"},"\u30ad\u30fc\u30ef\u30fc\u30c9")," \u3092\u8a2d\u5b9a\u3057\u3001",(0,a.kt)("strong",{parentName:"p"},"\u6982\u8981")," \u3092\u8a18\u5165\u3057\u307e\u3059 (\u3053\u308c\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c App Store \u3067\u898b\u308b\u3082\u306e\u3067\u3059)\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u3057\u3044\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u3084\u30a2\u30d7\u30ea\u5185\u8ab2\u91d1\u3001\u4eca\u5f8c\u306e\u6a5f\u80fd\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u3001\u671f\u9593\u9650\u5b9a\u30bb\u30fc\u30eb\u306a\u3069\u3001\u30a2\u30d7\u30ea\u306b\u95a2\u3059\u308b\u6700\u65b0\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("strong",{parentName:"p"},"\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u7528\u30c6\u30ad\u30b9\u30c8")," \u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001App Store \u3067\u6982\u8981\u306e\u4e0a\u306b\u8868\u793a\u3055\u308c\u307e\u3059 (iOS 11\u4ee5\u964d\u3092\u642d\u8f09\u3057\u305f\u30c7\u30d0\u30a4\u30b9\u306e\u30e6\u30fc\u30b6\u30fc\u5411\u3051)\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30a2\u30d7\u30ea\u306e\u30b5\u30dd\u30fc\u30c8\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b ",(0,a.kt)("strong",{parentName:"p"},"\u30b5\u30dd\u30fc\u30c8URL")," \u3092\u5165\u529b\u3057\u307e\u3059\u3002 \u3053\u306e URL \u306f\u3001App Store \u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0URL")," \u306f\u4efb\u610f\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u30a2\u30d7\u30ea\u306e\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u30b5\u30a4\u30c8\u3078\u8a98\u5c0e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"iOS App \u30bb\u30af\u30b7\u30e7\u30f3")," \u306b\u3066:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iOS\u30a2\u30d7\u30ea\u30bb\u30af\u30b7\u30e7\u30f3",src:p(64755).Z,width:"1289",height:"1216"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30d3\u30eb\u30c9")," \u3067\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u691c\u7d22\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"App \u4e00\u822c\u60c5\u5831")," \u30a8\u30ea\u30a2\u306b\u3001\u30a2\u30d7\u30ea\u306e Copyright\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3001\u304a\u3088\u3073\u4ee3\u8868\u8005\u306e\u9023\u7d61\u5148\u60c5\u5831\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30a2\u30a4\u30b3\u30f3\u306f\u3001\u751f\u6210\u3055\u308c\u305f 4D for iOS \u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e74\u9f62\u5236\u9650\u6307\u5b9a\u306f\u3001App Store \u306e\u30da\u30a2\u30ec\u30f3\u30bf\u30eb\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u4f7f\u7528\u3055\u308c\u308b\u5fc5\u9808\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059\u3002 \u7de8\u96c6\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30d7\u30ea\u306e\u9069\u5207\u306a\u5e74\u9f62\u30ab\u30c6\u30b4\u30ea\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"App Review \u306b\u95a2\u3059\u308b\u60c5\u5831")," \u304a\u3088\u3073 ",(0,a.kt)("strong",{parentName:"p"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9")," \u306e\u9805\u76ee\u306b\u306f\u3001App Store \u304c\u5fc5\u9808\u3068\u3059\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u307e\u3059\u3002 \u3053\u3053\u3067\u63d0\u4f9b\u3055\u308c\u308b\u60c5\u5831\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u76ee\u306b\u89e6\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App Review \u306b\u95a2\u3059\u308b\u60c5\u5831",src:p(8415).Z,width:"1275",height:"1374"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"App Review \u306b\u95a2\u3059\u308b\u60c5\u5831"),": \u79d8\u5bc6\u306e\u9023\u7d61\u5148\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u60c5\u5831\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9"),": \u81ea\u52d5\u307e\u305f\u306f\u624b\u52d5\u3067\u306e\u516c\u958b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u306b ",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")))}u.isMDXComponent=!0},3905:(e,t,p)=>{p.d(t,{Zo:()=>c,kt:()=>k});var r=p(67294);function a(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function n(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,r)}return p}function o(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?n(Object(p),!0).forEach((function(t){a(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):n(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function l(e,t){if(null==e)return{};var p,r,a=function(e,t){if(null==e)return{};var p,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)p=n[r],t.indexOf(p)>=0||(a[p]=e[p]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)p=n[r],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(a[p]=e[p])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),p=t;return e&&(p="function"==typeof e?e(t):o(o({},t),e)),p},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var p=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(p),k=a,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||n;return p?r.createElement(d,o(o({ref:t},c),{},{components:p})):r.createElement(d,o({ref:t},c))}));function k(e,t){var p=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=p.length,o=new Array(n);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=p[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,p)}m.displayName="MDXCreateElement"},48817:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/App-Services-to-include-6aa83e7c749cb27c8f87e51f0d33483c.png"},80654:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/App-Store-Connect-app-information-05b7e6c549964f84962ec3da5bcd2012.png"},98502:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/App-Store-Connect-home-page-698480bb11d26087c992c3cf7cdd5827.png"},30342:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Change-BundleID-Xcode-Project-89a5b406762fa844cbd901cd20a04da1.png"},43459:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Confirm-App-ID-badc7b63a6b1caa055a9c8bcd346fc3f.png"},46881:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Create-new-iOS-App-9fa88738ec4946ec2eb2fe04f1d0da42.png"},79773:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Developer-account-App-ID-a3e672797d9d37c866ed2fe8928167c1.png"},64755:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Prepare-for-submission-build-icon-331b09ed3c8aa01bc83a19cc0ace2206.png"},8415:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Prepare-for-submission-review-information-677d367b658298c314ebaad942685180.png"},72078:(e,t,p)=>{p.d(t,{Z:()=>r});const r=p.p+"assets/images/Prepare-for-submission-screenshot-description-ff47eb1948bf404fa6f88ece1c0410c3.png"}}]);