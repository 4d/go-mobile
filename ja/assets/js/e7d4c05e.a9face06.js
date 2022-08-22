"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7465],{88390:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const l={id:"one-to-many-custom-button",title:"\uff11\u5bfe\uff2e\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3"},r=void 0,i={unversionedId:"tutorials/relations/one-to-many-custom-button",id:"version-19-R5/tutorials/relations/one-to-many-custom-button",title:"\uff11\u5bfe\uff2e\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3",description:"As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/relations/one-to-many-custom-button.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-custom-button",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/one-to-many-custom-button",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/relations/one-to-many-custom-button.md",tags:[],version:"19-R5",frontMatter:{id:"one-to-many-custom-button",title:"\uff11\u5bfe\uff2e\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3"},sidebar:"tutorials",previous:{title:"\uff11\u5bfe\uff2e\u30bf\u30a4\u30c8\u30eb\u306e\u8a2d\u5b9a",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/one-to-many-title-definition"},next:{title:"\uff11\u5bfe\uff2e\u3068\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/one-to-many-actions"}},s={},u=[{value:"\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"\u30dc\u30bf\u30f3\u306e\u8a2d\u5b9a",id:"\u30dc\u30bf\u30f3\u306e\u8a2d\u5b9a",level:2},{value:"\u30ab\u30e9\u30fc\u3068\u30d5\u30a9\u30f3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"\u30ab\u30e9\u30fc\u3068\u30d5\u30a9\u30f3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:3},{value:"\u30dc\u30bf\u30f3\u306e\u89d2\u306e\u4e38\u307f",id:"\u30dc\u30bf\u30f3\u306e\u89d2\u306e\u4e38\u307f",level:3},{value:"\u30b5\u30a4\u30ba\u3068\u5236\u7d04",id:"\u30b5\u30a4\u30ba\u3068\u5236\u7d04",level:3},{value:"\u5236\u7d04\u3092\u8ffd\u52a0\u3059\u308b",id:"\u5236\u7d04\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\u9ad8\u3055\u306e\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",id:"\u9ad8\u3055\u306e\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],p={toc:u};function c(t){let{components:e,...l}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things."),(0,o.kt)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3084\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3060\u3051\u3067\u306a\u304f\uff0c\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3082\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3057\u304b\u3082\uff0c\u305d\u306e\u624b\u9806\u306f\u3068\u3066\u3082\u7c21\u5358\uff01 \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3\u3092\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,o.kt)("p",null,"Let's get started by downloading the Starter project that includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,o.kt)("li",{parentName:"ul"},"\u6a19\u6e96\u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,o.kt)("h2",{id:"\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("p",null,"\u307e\u305a\uff0c\u30dc\u30bf\u30f3\u300cbutton.xib\u300d\u30924D for iOS\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\uff0c\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,"To use the button, you just need to drop it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact")," folder."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3\u306e\u30d1\u30b9",src:n(3151).Z,width:"2690",height:"734"})),(0,o.kt)("p",null,"\u7c21\u5358\u3067\u3059\u306d\uff01"),(0,o.kt)("h2",{id:"\u30dc\u30bf\u30f3\u306e\u8a2d\u5b9a"},"\u30dc\u30bf\u30f3\u306e\u8a2d\u5b9a"),(0,o.kt)("p",null,"Xcode\u3067\u300c.xib\u300d\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3",src:n(5224).Z,width:"2028",height:"1898"})),(0,o.kt)("p",null,"\u5c5e\u6027\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067\u3055\u307e\u3056\u307e\u306a\u9805\u76ee\u306e\u5024\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30ab\u30e9\u30fc\u3068\u30d5\u30a9\u30f3\u30c8"),(0,o.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u306e\u30b9\u30bf\u30a4\u30eb"),(0,o.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u306e\u30b5\u30a4\u30ba")),(0,o.kt)("p",null,"\u30dc\u30bf\u30f3\u306e\u30ab\u30e9\u30fc\u3068\u30e9\u30d9\u30eb\u30d5\u30a9\u30f3\u30c8\u3092\u5909\u3048\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,o.kt)("h3",{id:"\u30ab\u30e9\u30fc\u3068\u30d5\u30a9\u30f3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"\u30ab\u30e9\u30fc\u3068\u30d5\u30a9\u30f3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,o.kt)("p",null,"\u30dc\u30bf\u30f3\u3092\u9078\u629e\u3057\uff0c\u5c5e\u6027\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306b\u65b0\u3057\u3044\u30ab\u30e9\u30fc\u3068\u30d5\u30a9\u30f3\u30c8\u540d\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u80cc\u666f\u306b\u306f\uff0c\u30e9\u30a4\u30c8\u30e2\u30fc\u30c9\u3068\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u306e\u305d\u308c\u305e\u308c\u3067\u6700\u826f\u306e\u30b3\u30f3\u30c8\u30e9\u30b9\u30c8\u306b\u306a\u308b\u3088\u3046\u306b\u300cLabel Color \u300d\u3092\u9078\u629e\u3057\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,"\u30d5\u30a9\u30f3\u30c8\u30ab\u30e9\u30fc\u306f\u300cSystem Background Color\uff08\u30b7\u30b9\u30c6\u30e0\u80cc\u666f\u8272\uff09\u300d\uff0c\u30d5\u30a9\u30f3\u30c8\u540d\u306f\u300cHelvetica Neue Medium\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30dc\u30bf\u30f3\u306e\u30a2\u30a4\u30b3\u30f3\u306b\u300cSystem Background Color Tint\uff08\u8272\u5408\u3044\uff09\u300d\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u3082\u5fd8\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3",src:n(61289).Z,width:"2026",height:"1886"})),(0,o.kt)("p",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u3068\u30e9\u30a4\u30c8\u30e2\u30fc\u30c9\u305d\u308c\u305e\u308c\u306e\u7d50\u679c\u3092\u78ba\u304b\u3081\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom relation color and font",src:n(34810).Z,width:"1701",height:"992"})),(0,o.kt)("h3",{id:"\u30dc\u30bf\u30f3\u306e\u89d2\u306e\u4e38\u307f"},"\u30dc\u30bf\u30f3\u306e\u89d2\u306e\u4e38\u307f"),(0,o.kt)("p",null,"\u4eca\u5ea6\u306frelationButton\u306e\u89d2\u306b\u4e38\u307f\u3092\u3064\u3051\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,o.kt)("p",null,"\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3092\u958b\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30dc\u30bf\u30f3\u3092\u9078\u629e\u3057\u3066\u300cUser Defined Runtime Attributes\u300d\u306b\u4e0b\u8a18\u306e\uff12\u884c\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Number"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"12")))),(0,o.kt)("p",null,"\u304a\u3088\u3073"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom relation color and font",src:n(88363).Z,width:"2026",height:"1886"})),(0,o.kt)("p",null,"\u3053\u308c\u3067\u3001\u5b8c\u6210\u3057\u305f\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,o.kt)("p",null,"\u4e0b\u56f3\u306e\u3088\u3046\u306b\u8868\u793a\u304c\u5909\u5316\u3057\u3066\u3044\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom relation color and font",src:n(37015).Z,width:"1701",height:"992"})),(0,o.kt)("h3",{id:"\u30b5\u30a4\u30ba\u3068\u5236\u7d04"},"\u30b5\u30a4\u30ba\u3068\u5236\u7d04"),(0,o.kt)("p",null,"Keep in mind that if you ",(0,o.kt)("strong",{parentName:"p"},"add constraints")," into your button, you will also have to modifiy the xib xml file to ",(0,o.kt)("strong",{parentName:"p"},"add some TAGS")," as for custom Detail form templates. \u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306b\u3088\u308a\uff0c\u540c\u4e00\u306e\u8a73\u7d30\u30d3\u30e5\u30fc\u5185\u3067\u8907\u6570\u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u3053\u306e\u30dc\u30bf\u30f3\u3092\u4f7f\u3044\u56de\u3057\u305f\u3068\u3057\u3066\u3082\uff0c\u30dc\u30bf\u30f3\u304c\u6b63\u3057\u304f\u6a5f\u80fd\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u3053\u3068\u3092\u8e0f\u307e\u3048\uff0c\u30dc\u30bf\u30f3\u306b\u5236\u7d04\u3092\u8a2d\u5b9a\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,o.kt)("h4",{id:"\u5236\u7d04\u3092\u8ffd\u52a0\u3059\u308b"},"\u5236\u7d04\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\uff0c\u753b\u9762\u4e0a\u3067\u304a\u304a\u304d\u304f\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\uff0c\u30dc\u30bf\u30f3\u306e\u9ad8\u3055\u306b\u5236\u7d04\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u3092\u8003\u3048\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u2488 \u2488 \u2488 \u2488 \u30d3\u30e5\u30fc\u3092\u9078\u629e\u3057\uff0c\u9ad8\u3055\u3092123\u304b\u308940\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30dc\u30bf\u30f3\u30d3\u30e5\u30fc\u306e\u9ad8\u3055",src:n(97495).Z,width:"2030",height:"1858"})),(0,o.kt)("p",null,"\u2489 \u2489 \u2489 \u2489 Double click on the ",(0,o.kt)("strong",{parentName:"p"},"Top Space Constraint")," and change it from 8 to 0"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4e0a\u90e8\u4f59\u767d\u306e\u5236\u7d04",src:n(35735).Z,width:"2030",height:"1858"})),(0,o.kt)("p",null,"\u248a \u248a \u248a \u248a Do the same thing with ",(0,o.kt)("strong",{parentName:"p"},"Bottom Space Constraint")," and change it from 8 to 0"),(0,o.kt)("p",null,"\u4e0b\u56f3\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3\u306e\u5236\u7d04",src:n(68690).Z,width:"2030",height:"1858"})),(0,o.kt)("p",null,"\u248b \u248b \u248b \u248b \u9ad8\u3055\u306e\u5236\u7d04\u300c40\u300d\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30dc\u30bf\u30f3\u306e\u9ad8\u3055\u5236\u7d04",src:n(31467).Z,width:"2030",height:"1858"})),(0,o.kt)("p",null,"\u4e0b\u56f3\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30b3\u30f3\u30c6\u30ca\u5185\u3067\u6c34\u5e73",src:n(18519).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u5bfe\u3057\uff0c\u3053\u306e\u30d3\u30e5\u30fc\u5185\u306e\u5168\u8981\u7d20\u304c\u4e00\u7dd2\u306b\u8907\u88fd\u3055\u308c\u308b\u3079\u304d\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3059\u305f\u3081\uff0c\u305d\u308c\u305e\u308c\u306e\u8981\u7d20\u3068\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"},"\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("p",null,"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306e\u5404\u8981\u7d20\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID \u3092\u6301\u3061\u307e\u3059\u3002 \u8a66\u3057\u306b Field View 2 \u3092\u9078\u629e\u3057\u3001",(0,o.kt)("strong",{parentName:"p"},"Identity inspector")," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID \u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID \u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",src:n(45685).Z,width:"2050",height:"1280"})),(0,o.kt)("p",null,"1\u3064\u305a\u3064\u5909\u66f4\u3059\u308b\u306e\u306f\u5c11\u3005\u9762\u5012\u3067\u3059\u3057\u3001\u9014\u4e2d\u3067\u30df\u30b9\u3092\u3057\u3066\u3057\u307e\u3046\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067\u64cd\u4f5c\u3059\u308b\u306e\u306f\u5927\u5909\u306a\u306e\u3067\uff0c\u3053\u3053\u306f\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\uff0c\u52b9\u7387\u7684\u306b\u4f5c\u696d\u3092\u9032\u3081\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u3087\u3046\uff01"),(0,o.kt)("h4",{id:"\u9ad8\u3055\u306e\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"},"\u9ad8\u3055\u306e\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("p",null,"\u2488 \u2488 \u2488 \u2488 \u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u5185\u3067\u8981\u7d20\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID\u3092\u9078\u629e\u3057\u3066\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6c34\u5e73\u5236\u7d04\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306eID",src:n(61173).Z,width:"2050",height:"1280"})),(0,o.kt)("p",null,"\u2489 \u2489 \u2489 \u2489 Search for this ID in the xml file and put ",(0,o.kt)("strong",{parentName:"p"},"TAG-RL-007")," instead (a Tag that is not already used)."),(0,o.kt)("p",null,"\u248a \u248a \u248a \u248a XML\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6c34\u5e73\u5236\u7d04\u306eXML\u30d5\u30a1\u30a4\u30eb",src:n(1073).Z,width:"1782",height:"1434"})),(0,o.kt)("p",null,"\u248b \u248b \u248b \u248b \u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u3092\u79fb\u52d5\u3057\uff0c\u5236\u7d04\u304c\u6b63\u3057\u304f\u66f4\u65b0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6c34\u5e73\u5236\u7d04\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306eID\u66f4\u65b0",src:n(86329).Z,width:"2050",height:"1280"})),(0,o.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 \u8868\u793a\u3057\u305f\u3044\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u6570\u3042\u3063\u305f\u3068\u3057\u3066\u3082\uff0c\u3053\u306e\u30dc\u30bf\u30f3\u3092\u8907\u88fd\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,o.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\uff0c\u30ab\u30b9\u30bf\u30e0\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7fd2\u5f97\u3057\u307e\u3057\u305f\u3002 \u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3\u306e\u5b8c\u6210\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u4e0b\u8a18\u306e\u30ea\u30f3\u30af\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")))}c.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,r(r({ref:e},p),{},{components:n})):a.createElement(k,r({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31467:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Button-height-constraint-cc181760ed0e0e3271203ecbe5a573b6.png"},97495:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Button-view-height-4fb63323063ca0f6323d4e500a6c3bac.png"},68690:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Custom-button-constraints-f6ed75507bad0479ad3cc739dbd9e605.png"},45685:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Custom-button-object-id-storyboard-40a3a5997a462a031ea8725eef807527.png"},34810:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Custom-relation-button-Light-and-Dark-mode-font-and-color-8b7e6af3f02e9276ec211796dde15673.png"},88363:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Custom-relation-button-Xcode-round-corners-53525e920a1ba2f90b2d7cf855738985.png"},18519:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Custom-relation-button-constraints-84480a10d62ffba83d171a9e881c9a3e.png"},37015:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Custom-relation-button-round-corners-f0571acd6b1aad58fc6264826069ac84.png"},61173:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Horizontal-constraint-object-ID-5faf25ec4a5a4bbda03471754d590079.png"},1073:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Horizontal-constraint-xml-file-bcda2f30b0de3932a74c3920023ff7a8.png"},86329:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Horizontal-object-id-updated-da61e281af6c4a61c678d8b6bde0e94f.png"},3151:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Relation-custom-button-path-4b5a46bf970d1b8b9584098dfb487207.png"},61289:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color-e9e95f0e6f490a802c3eab8ef624ea1c.png"},5224:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-bf3b14ba27d987ac7235c102f49fe4ed.png"},35735:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Top-Space-constraint-a5c9ae57cc62b79b3acb2ebd5610a8b8.png"}}]);