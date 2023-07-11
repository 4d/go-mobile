"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3677],{85612:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={id:"adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},r=void 0,s={unversionedId:"tutorials/actions/adding-actions-template",id:"version-20/tutorials/actions/adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/ja/docs/tutorials/actions/adding-actions-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/actions/adding-actions-template.md",tags:[],version:"20",frontMatter:{id:"adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/tutorials/actions/define-first-action"},next:{title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",permalink:"/go-mobile/ja/docs/tutorials/actions/using-action-parameters"}},o={},p=[{value:"\u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"--\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"\u2489 \u2489 4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0",id:"--4d-for-ios-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0",level:2},{value:"\u248a \u248a \u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0",id:"--\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0",level:2},{value:"TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"taskslist-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",id:"\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",level:4},{value:"\uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",id:"\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",level:4},{value:"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"taskscollection-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",id:"\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0-1",level:4},{value:"\uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",id:"\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0-1",level:4},{value:"\u248b \u248b \u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0",id:"--\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0",level:2}],c={toc:p};function u(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,l.kt)("p",{parentName:"blockquote"},"\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u3066\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0/\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30ab\u30b9\u30bf\u30e0\u3057\u307e\u3059\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u7528\u610f\u3059\u308b\u3082\u306e")),(0,l.kt)("p",{parentName:"blockquote"},"\u59cb\u3081\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3082\u306e\u306b\u3064\u3044\u3066\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3069\u3046\u3084\u3063\u3066\u7c21\u5358\u306b ",(0,l.kt)("strong",{parentName:"p"},"\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b")," \u304b\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"--\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")," \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c 2\u3064 (TasksList \u304a\u3088\u3073 TasksCollection)"),(0,l.kt)("li",{parentName:"ul"},"\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c 1\u3064 (TasksDetail)"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 (Tasks.4dbase)")),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),(0,l.kt)("h2",{id:"--4d-for-ios-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0"},"\u2489 \u2489 4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u64cd\u4f5c\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksList")," \u304a\u3088\u3073 ",(0,l.kt)("strong",{parentName:"li"},"TasksCollection")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u3092 ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list")," \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30c9\u30ed\u30c3\u30d7")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:a(83136).Z,width:"2274",height:"734"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksDetail")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u3092 ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail")," \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30c9\u30ed\u30c3\u30d7")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:a(36572).Z,width:"2274",height:"734"})),(0,l.kt)("h2",{id:"--\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0"},"\u248a \u248a \u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"2\u7a2e\u985e\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3"),(0,l.kt)("li",{parentName:"ul"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3")),(0,l.kt)("p",null,"\u307e\u305a\u6700\u521d\u306b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h3",{id:"taskslist-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("h4",{id:"\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0"},"\uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"\u4e0b\u56f3\u306e\u3088\u3046\u306b\u5f53\u8a72\u30d3\u30e5\u30fc\u306e ",(0,l.kt)("strong",{parentName:"p"},"Controller")," \u3092\u9078\u629e\u3057\u3001Identity inspector \u3092\u958b\u3044\u3066 ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u306e\u8ffd\u52a0",src:a(26185).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0"},"\uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"\u30c4\u30ea\u30fc\u3092\u5c55\u958b\u3057\u3066 Animatable Table View \u3092\u9078\u629e\u3057\u3001Identity inspector \u3067 ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u306e\u8ffd\u52a0",src:a(2228).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u3053\u308c\u3067\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u30a2\u30af\u30b7\u30e7\u30f3\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0")," \u30bb\u30af\u30b7\u30e7\u30f3\u3067 TaskList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08Taskslist\uff09",src:a(44995).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"\u7d9a\u3051\u3066\u3001TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u3082\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h3",{id:"taskscollection-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u307e\u305a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0-1"},"\uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"\u4f5c\u696d\u306f TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5834\u5408\u3068\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4e0b\u56f3\u306e\u3088\u3046\u306b\u5f53\u8a72\u30d3\u30e5\u30fc\u306e ",(0,l.kt)("strong",{parentName:"p"},"Controller")," \u3092\u9078\u629e\u3057\u3001Identity inspector \u3092\u958b\u3044\u3066 ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:a(75803).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0-1"},"\uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5\u306f\u3001\u30ea\u30b9\u30c8\u5f62\u5f0f\u306e TableView \u3068\u30b0\u30ea\u30c3\u30c9\u5f62\u5f0f\u306e CollectionView \u3067\u7570\u306a\u308a\u307e\u3059\u3002 \u5f8c\u8005\u306f\u30b9\u30ef\u30a4\u30d7\u64cd\u4f5c\u306b\u4e0d\u5411\u304d\u3067\u3059\u3002"),(0,l.kt)("p",null,"CollectionView \u306b\u304a\u3044\u3066\u306f\u64cd\u4f5c\u3057\u305f\u3044\u30bb\u30eb\u306b\u5bfe\u3057\u3001",(0,l.kt)("strong",{parentName:"p"},"\u9577\u62bc\u3057")," \u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u306b\u53cd\u5fdc\u3057\u3066\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3055\u305b\u308b\u306e\u304c\u826f\u3044\u65b9\u6cd5\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u306b\u306f\u3001CollectionView \u306e\u30bb\u30eb\u3092\u9078\u629e\u3057\u3066\u3001Identity inspector \u3067 ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:a(92161).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u30bf\u30c3\u30c1\u3057\u305f\u3068\u304d\u306b\u89e6\u899a\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3068\u62e1\u5927\u30a8\u30d5\u30a7\u30af\u30c8\u304c\u767a\u751f\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u3001",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3082\u8ffd\u52a0\u3057\u307e\u3059\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Number")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.96")," (\u30ba\u30fc\u30e0\u500d\u7387\u306f\u597d\u307f\u306b\u5fdc\u3058\u3066\u8abf\u6574\u3067\u304d\u307e\u3059)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0")," \u30bb\u30af\u30b7\u30e7\u30f3\u3067 TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08TasksCollection\uff09",src:a(58081).Z,width:"2164",height:"1988"})),(0,l.kt)("h2",{id:"--\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0"},"\u248b \u248b \u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0"),(0,l.kt)("p",null,'\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u306e "',(0,l.kt)("strong",{parentName:"p"},"..."),'" \u6c4e\u7528\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001',(0,l.kt)("strong",{parentName:"p"},"\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30ab\u30b9\u30bf\u30e0\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3")," \u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u7c21\u5358\u3067\u3059\u3002 \u3069\u3061\u3089\u306e\u5834\u5408\u306b\u3082\u3001\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u306e\u6c4e\u7528\u30dc\u30bf\u30f3\u306e\u5834\u5408\u306b\u306f\u3001\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e .storyboard \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u3066\u5f53\u8a72\u30d3\u30e5\u30fc\u306e Controller \u3092\u9078\u629e\u3057\u3001Identity inspector \u3067 ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:a(18543).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u306e\u6c4e\u7528\u30dc\u30bf\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002 \u307e\u305a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u958b\u3044\u305f\u3089\u53f3\u4e0b\u306e\u30dc\u30bf\u30f3 (More Button) \u3092\u9078\u629e\u3057\u3001Identity inspector \u3067 ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306b\u30ab\u30b9\u30bf\u30e0\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0",src:a(19060).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u898b\u3066\u306e\u3068\u304a\u308a\u3001Storyboard \u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u30dc\u30bf\u30f3\u306e\u753b\u50cf\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30d5\u30a9\u30fc\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e ",(0,l.kt)("strong",{parentName:"p"},"Resources")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b\u3042\u308a\u307e\u3059\u3002 \u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u3059\u308c\u3070\u3001\u3053\u308c\u3089\u306e\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001",(0,l.kt)("strong",{parentName:"p"},"moreButton.imageset")," \u306f\u53f3\u4e0b\u306e\u30dc\u30bf\u30f3\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb\u3067\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb",src:a(9976).Z,width:"1522",height:"766"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0")," \u3067 TasksDetail \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08TasksDetail\uff09",src:a(29421).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"\u5b8c\u6210\u3057\u305f iOS\u30a2\u30d7\u30ea\u306e\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u304c\u4e21\u65b9\u3068\u3082\u30a2\u30af\u30b7\u30e7\u30f3\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb",src:a(31338).Z,width:"1559",height:"907"})),(0,l.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")))}u.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),k=p(a),m=l,d=k["".concat(o,".").concat(m)]||k[m]||u[m]||i;return a?n.createElement(d,r(r({ref:e},c),{},{components:a})):n.createElement(d,r({ref:e},c))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=a.length,r=new Array(i);r[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},92161:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},75803:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},2228:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},26185:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},19060:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},18543:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},36572:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},31338:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},83136:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},9976:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},29421:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},58081:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},44995:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);