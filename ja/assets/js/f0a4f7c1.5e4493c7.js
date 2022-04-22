"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3518],{85832:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=["components"],l={id:"create-data-formatter",title:"\u30ab\u30b9\u30bf\u30e0\u306e\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},s=void 0,p={unversionedId:"tutorials/data-formatter/create-data-formatter",id:"version-19-R2/tutorials/data-formatter/create-data-formatter",title:"\u30ab\u30b9\u30bf\u30e0\u306e\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R2/tutorials/data-formatter/create-data-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-data-formatter",permalink:"/go-mobile/ja/docs/19-R2/tutorials/data-formatter/create-data-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/data-formatter/create-data-formatter.md",tags:[],version:"19-R2",frontMatter:{id:"create-data-formatter",title:"\u30ab\u30b9\u30bf\u30e0\u306e\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},sidebar:"version-19-R2/tutorials",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",permalink:"/go-mobile/ja/docs/19-R2/tutorials/data-formatter/build-and-run"},next:{title:"Filter queries",permalink:"/go-mobile/ja/docs/19-R2/tutorials/filter-queries/filter-query-introduction"}},m={},d=[{value:"\u2488 \u2488 \u2488 Download the Starter project",id:"---download-the-starter-project",level:2},{value:"formatters \u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210",id:"formatters-\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210",level:2},{value:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2},{value:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078",id:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078",level:3},{value:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078",id:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2},{value:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078",id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078",id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078",level:3},{value:"Dark mode support",id:"dark-mode-support",level:2},{value:"Tintable color",id:"tintable-color",level:3},{value:"Optimized color pictures",id:"optimized-color-pictures",level:3},{value:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",level:2},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",level:2}],u={toc:d};function c(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first data formatters.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,o.kt)("p",{parentName:"blockquote"},"\u59cb\u3081\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3082\u306e\u306b\u3064\u3044\u3066\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)"),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0b\u3055\u3044!")),(0,o.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u69d8\u3005\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u4f8b\u3092\u4f5c\u6210\u3057\u3066\u3044\u304f\u3053\u3068\u3092\u6848\u5185\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"---download-the-starter-project"},"\u2488 \u2488 \u2488 Download the Starter project"),(0,o.kt)("p",null,"To begin, download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," and ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," folders that contain images (to use later for formatters that include images)"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Task Management.4dbase")," file (with a ready to use mobile app project)")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Starter project")),(0,o.kt)("p",null,"\u3053\u308c\u3067\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\uff01"),(0,o.kt)("h2",{id:"formatters-\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210"},"formatters \u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210"),(0,o.kt)("p",null,"First, create a ",(0,o.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters")," folder."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(29167).Z,width:"929",height:"367"})),(0,o.kt)("h2",{id:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,o.kt)("h3",{id:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078"},"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," folder in the formatters folder you've just created."),(0,o.kt)("li",{parentName:"ul"},"Then create a ",(0,o.kt)("strong",{parentName:"li"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(45109).Z,width:"1130",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,o.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values")),(0,o.kt)("h3",{id:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078"},"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create an ",(0,o.kt)("strong",{parentName:"p"},"integerToImage")," folder in the ",(0,o.kt)("strong",{parentName:"p"},"formatters")," folder you've created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"integerToImage")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(61671).Z,width:"966",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then create an ",(0,o.kt)("strong",{parentName:"li"},"Images")," folder in the ",(0,o.kt)("strong",{parentName:"li"},"integerToImage")," folder. You can add the images from the ",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," in the StarterProject.zip to this new folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf",src:a(3429).Z,width:"1119",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n    }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type")," : the 4D format type you want to use"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,o.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"assets"),": adjust the display size (width and height)")),(0,o.kt)("h2",{id:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,o.kt)("h3",{id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"textToString")," folder in the formatters folder you've just created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"textToString")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(53257).Z,width:"967",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,o.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values")),(0,o.kt)("h3",{id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"textToImage")," folder in the formatters folder you've just created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"textToImage")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(97555).Z,width:"971",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then create an ",(0,o.kt)("strong",{parentName:"li"},"Images")," folder in the ",(0,o.kt)("strong",{parentName:"li"},"textToImage")," folder. You can add the images from the ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," in the StarterProject.zip to this new folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf",src:a(68265).Z,width:"1133",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n        }\n    }\n}\n\n')),(0,o.kt)("h2",{id:"dark-mode-support"},"Dark mode support"),(0,o.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom data formatters containing images. The pictures will be adapted depending on the phone's color mode."),(0,o.kt)("h3",{id:"tintable-color"},"Tintable color"),(0,o.kt)("p",null,"To optimize the color contrast of your black and white images on your app depending on the color mode (light or dark), you can set the images as follows, with the ",(0,o.kt)("inlineCode",{parentName:"p"},'"tintable": true')," code line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,o.kt)("p",null,"Here is the result in light and dark modes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(16917).Z,width:"231",height:"500"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(35618).Z,width:"231",height:"500"}))))),(0,o.kt)("h3",{id:"optimized-color-pictures"},"Optimized color pictures"),(0,o.kt)("p",null,"To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"_dark"),", as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(64229).Z,width:"1280",height:"720"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,o.kt)("p",null,"Here is the result in light mode and in dark mode:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(84285).Z,width:"1170",height:"2532"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(86499).Z,width:"1170",height:"2532"}))))),(0,o.kt)("h2",{id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"},"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"),(0,o.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the ",(0,o.kt)("strong",{parentName:"p"},"Tasks")),(0,o.kt)("p",null,"Next, go to the ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Job field")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"textToString")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Country field")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"integerToImage")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Task Status")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"textToImage")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Manager"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:a(86300).Z,width:"1082",height:"994"})),(0,o.kt)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),(0,o.kt)("p",null,"Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:a(71023).Z,width:"1417",height:"992"})),(0,o.kt)("p",null,"Download the completed formatter template folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Download")))}c.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64229:function(e,t,a){t.Z=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},35618:function(e,t,a){t.Z=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},86499:function(e,t,a){t.Z=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},61671:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},45109:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},97555:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},53257:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},29167:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},3429:function(e,t,a){t.Z=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},68265:function(e,t,a){t.Z=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},71023:function(e,t,a){t.Z=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},86300:function(e,t,a){t.Z=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},16917:function(e,t,a){t.Z=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},84285:function(e,t,a){t.Z=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);