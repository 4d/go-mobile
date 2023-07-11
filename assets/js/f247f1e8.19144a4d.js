"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6811],{50458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"labels-and-icons",title:"Labels & Icons"},i=void 0,l={unversionedId:"project-definition/labels-and-icons",id:"version-19-R8/project-definition/labels-and-icons",title:"Labels & Icons",description:"This page allows you to define display properties for your tables, fields and relations in the mobile app.",source:"@site/versioned_docs/version-19-R8/project-definition/labels-and-icons.md",sourceDirName:"project-definition",slug:"/project-definition/labels-and-icons",permalink:"/go-mobile/docs/19-R8/project-definition/labels-and-icons",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/project-definition/labels-and-icons.md",tags:[],version:"19-R8",frontMatter:{id:"labels-and-icons",title:"Labels & Icons"},sidebar:"docs",previous:{title:"Actions",permalink:"/go-mobile/docs/19-R8/project-definition/actions"},next:{title:"Main Menu",permalink:"/go-mobile/docs/19-R8/project-definition/main-menu"}},s={},p=[{value:"Icons",id:"icons",level:2},{value:"Adding custom icons",id:"adding-custom-icons",level:3},{value:"Short and long labels",id:"short-and-long-labels",level:2},{value:"Formats",id:"formats",level:2},{value:"Selecting a formatter",id:"selecting-a-formatter",level:3},{value:"Adding custom formatters",id:"adding-custom-formatters",level:3},{value:"Downloading formatters",id:"downloading-formatters",level:4},{value:"Creating formatters",id:"creating-formatters",level:4},{value:"Installing custom formatters",id:"installing-custom-formatters",level:4},{value:"Title",id:"title",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page allows you to define display properties for your tables, fields and relations in the mobile app. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons section",src:a(34591).Z,width:"2835",height:"1988"})),(0,o.kt)("p",null,"Default properties are set. To modify a property, select an element and enter the new value in the appropriate column. "),(0,o.kt)("p",null,"You can define the same properties for tables, fields and relations. Additionally, formats can be defined for fields/relations."),(0,o.kt)("p",null,"These elements will be displayed in detail and list forms, depending on the template in the generated app."),(0,o.kt)("h2",{id:"icons"},"Icons"),(0,o.kt)("p",null,"Icon to associate to the table or field/element in the mobile app each time a template requires an icon."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For relation fields, icons will be displayed at the left of the ",(0,o.kt)("strong",{parentName:"p"},"Relation")," button that allows to open a related table.")),(0,o.kt)("p",null,"The 4D mobile editor provides a large library of icons to meet your needs. These include icons for business, finance, education, government, health, industry, real estate, services, etc. To select an icon, click on the ",(0,o.kt)("strong",{parentName:"p"},"icon")," button and choose an icon from the list: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Icons select",src:a(37487).Z,width:"1082",height:"994"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To keep everything consistent, ",(0,o.kt)("strong",{parentName:"p"},"default icons")," are generated for blank fields if at least one icon has been defined for a field. ")),(0,o.kt)("p",null,"You can also leave the icon area empty if you don\u2019t want to display icons in your application."),(0,o.kt)("h3",{id:"adding-custom-icons"},"Adding custom icons"),(0,o.kt)("p",null,"You can add your own icons to the library, so that you can select them in your project. You can use any icon format (SVG or PNG is recommended to preserve transparency) and size. It's highly recommended having colored versions of your custom icons to better visualize them in the project editor. "),(0,o.kt)("p",null,"For example, here are a set of custom icons that you can use:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomIcons/releases/latest/download/tutorial-CustomIcons.zip"},"Download custom icons")),(0,o.kt)("p",null,"To include custom icons in your project:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"icons")," folder at the following location:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<my4DProjetFolder>/Resources/Mobile/medias\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You may have to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"medias")," folder.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Drag and drop your customized icons in the ",(0,o.kt)("inlineCode",{parentName:"li"},"icons")," folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Icons select2",src:a(29871).Z,width:"997",height:"367"})),(0,o.kt)("p",null,"Your icons can now be selected for your project, they are listed after the standard icons. "),(0,o.kt)("h2",{id:"short-and-long-labels"},"Short and long labels"),(0,o.kt)("p",null,"You can define custom labels for published tables, fields, and relations. These labels will be automatically used according to the available space in the template to optimize space and avoid overcrowding the tab bar."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For relation fields, labels will be displayed in the ",(0,o.kt)("strong",{parentName:"p"},"Relation")," button that allows to open a related table.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Short labels should have 10 characters or less"),(0,o.kt)("li",{parentName:"ul"},"Long labels can have up to 25 characters"),(0,o.kt)("li",{parentName:"ul"},'You can use characters that are not allowed in structure names, such as "/","@", the space character, etc.')),(0,o.kt)("p",null,"By default, the mobile editor uses the table and field names as defined in the structure as labels in the app, and the same string is used for short and long labels."),(0,o.kt)("h2",{id:"formats"},"Formats"),(0,o.kt)("p",null,"This property allows you to select a ",(0,o.kt)("strong",{parentName:"p"},"formatter")," for your field."),(0,o.kt)("p",null,"Basically, a formatter allows you to map a data type from your database to a specific display on the mobile side. For example, you can define emails format, invoice numbers, etc."),(0,o.kt)("p",null,"However, formatters can call some code to create smart interfaces. For example, you can attach a data formatter to phone numbers that opens an action menu on the mobile app when the user touches the number (e.g. to call the person or save them in contacts)."),(0,o.kt)("h3",{id:"selecting-a-formatter"},"Selecting a formatter"),(0,o.kt)("p",null,"When you click on a field row in the Formats column, the formatter menu is displayed. By default, the 4D mobile editor provides several built-in formatters: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"formats",src:a(92198).Z,width:"200",height:"326"})),(0,o.kt)("p",null,"Available built-in formatters depend on the field type:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field type"),(0,o.kt)("th",{parentName:"tr",align:null},"Formats"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Text")),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Date")),(0,o.kt)("td",{parentName:"tr",align:null},"Date, Short date, Long date, Full date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Time")),(0,o.kt)("td",{parentName:"tr",align:null},"Time, Short time, Duration, Integer number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Image")),(0,o.kt)("td",{parentName:"tr",align:null},"Image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Boolean")),(0,o.kt)("td",{parentName:"tr",align:null},'"No" or "Yes", "False" or "True"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Integer number")),(0,o.kt)("td",{parentName:"tr",align:null},"Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency \u20ac, Currency \xa5, Spell Out")))),(0,o.kt)("p",null,"For an example of use of built-in formatters, see ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R8/tutorials/data-formatter/use-data-formatter"},"this tutorial"),"."),(0,o.kt)("p",null,"If you have downloaded or created additional formatters (see below), they are also listed in this menu so you can select them.  "),(0,o.kt)("h3",{id:"adding-custom-formatters"},"Adding custom formatters"),(0,o.kt)("p",null,"You can add custom formatters to your mobile project to highly customize its interface. You can either ",(0,o.kt)("a",{parentName:"p",href:"#downloading-formatters"},"download")," existing formatters from the ",(0,o.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/formatter"},"go-mobile formatters repository"),", or ",(0,o.kt)("a",{parentName:"p",href:"#creating-formatters"},"create")," your own formatters."),(0,o.kt)("p",null,"You need then to ",(0,o.kt)("a",{parentName:"p",href:"#installing-custom-formatters"},"install them in your project"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There are two types of additional formatters:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dynamic formatters")," with code (identified with the OS logos (",(0,o.kt)("img",{alt:"OS logo",src:a(4928).Z,width:"39",height:"18"}),") in the  go-mobile formatters Github repository)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static formatters")," without code."))),(0,o.kt)("h4",{id:"downloading-formatters"},"Downloading formatters"),(0,o.kt)("p",null,"You can download formatters from the ",(0,o.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/formatter"},(0,o.kt)("strong",{parentName:"a"},"go-mobile formatters github repository")),". You can click on the ",(0,o.kt)("strong",{parentName:"p"},"Download more formats")," link in the 4D mobile editor to access this repository."),(0,o.kt)("h4",{id:"creating-formatters"},"Creating formatters"),(0,o.kt)("p",null,"A custom formatter is always associated with a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file containing the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": a string containing the name of the formatter. Ex: phone, objectFormatter, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use. Ex: Text, Integer, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"binding"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For static formatters: ",(0,o.kt)("inlineCode",{parentName:"li"},"localizedText")," for strings or ",(0,o.kt)("inlineCode",{parentName:"li"},"imageNamed")," for images. "),(0,o.kt)("li",{parentName:"ul"},"For dynamic formatters: a string that links the code to your app"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values depending on the selected type (for static formatters only)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"assets"),": additional formating data for static formatters only, such as dark mode support, tintable, Integer to Image and Text to Image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"target"),": the platform supported by your formatter (for dynamic formatters only).")),(0,o.kt)("p",null,"Example of a static formatter's manifest file: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n}\n')),(0,o.kt)("p",null,"Several tutorial pages detail how to create formatters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-static-data-formatter"},(0,o.kt)("strong",{parentName:"a"},"Creating a static formatter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-swift-formatter"},(0,o.kt)("strong",{parentName:"a"},"Creating a Swift dynamic formatter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-kotlin-formatter"},(0,o.kt)("strong",{parentName:"a"},"Creating a Kotlin dynamic formatter")))),(0,o.kt)("admonition",{title:"for Android",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can add a specific permission to your app, using a ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilities")," block as follows:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-4d"},' "capabilities" : {\n        "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]\n'))),(0,o.kt)("h4",{id:"installing-custom-formatters"},"Installing custom formatters"),(0,o.kt)("p",null,"To install a custom formatter, you just need to drop the custom formatter folder into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Resources/Mobile/formatters")," of the 4D project folder. Once installed, a formatter can be selected from the ",(0,o.kt)("strong",{parentName:"p"},"Formats")," menu, just like a built-in format."),(0,o.kt)("h2",{id:"title"},"Title"),(0,o.kt)("p",null,"This property is only available for Relation fields. The defined title will be displayed on top of the destination view when using a relation. "),(0,o.kt)("p",null,"Use a pair of ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," characters to include the value of the related field in the title. For example, if you want that the title of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Employee.employer")," related field displays the name of the related ",(0,o.kt)("inlineCode",{parentName:"p"},"employee")," field, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%Name%'s employer\n")),(0,o.kt)("admonition",{title:"tutorial",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/relations/one-to-many-title-definition"},(0,o.kt)("strong",{parentName:"a"},"tutorial"))," is available to guide you through the Title definition process.")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Labels-&-icons-section-4D-for-iOS-e2a7d5f78925808a9618b76a7c71e129.png"},92198:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},37487:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/icon-library-bc268db5fac5bb35d9a614cb110fca01.png"},29871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mobile-folder-custom-icons-a975a9d1b38d6e46db0f3aae91994349.png"},4928:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAASCAYAAADYFMcrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJqSURBVEhLY/z249d/hkEKmKA0TrBxyw6Gzr4pUB5x4OfPn1AW8eAHFj14HTdv0XKGDUDH6WhpQEWIAzt272d48uw5lEcYgNTuBOpBBzgdd+PWHYbDx04yyMvJMLi7OEBFiQP+Ph4M7T2ToDzCAKQWpAcd4Exz+w4eYbh15x5DbEQIAzc3F1SUeLB15x4GcVFRBhMjfYY3b9+BPXsTiEFAXU2FQQOIRYSFGM6cu8jw8vVrBm93F7AcMoA7bvX6zQwnTp1lYGVlZdDX1WIQFRFhuHn7DsOTp88ZXrx8xSAhLsZgYWqE1YfYwINHjxmmzVrA8OHjJ4bfv39DRVEByC4Bfj6GrLQEBgU5WagoAoAdV1heBzaEGBAAdBwhB4JCidRMVF6UAw5NZMAEyo3UdNidu/dJdhgIgPSA9CIDpncfPkKZhIGTvQ2UhR2cvXCJobV7IpRHOgDpBZkBA0yvXr2GMvEDUJDz8vJAedgBqAiBARtLM4b5Mybg1QOSA6kBqYUBZDOY+Ph4oUz8gFC5BfIxcrSAMhIoyXz+/AUqgglAciA1ILUwADIDFnpMfARCAwa+fPnKcODwMSgPE1y4eAXKggBQbgUV4IQASA1ILTKAmcXEw80NZhADFi5dxbBo+WqGt+/eQ0UQAJRDqQVgZjG+fvvhf3NnP8NLItOeu4sjQ0SIP5SHAKDooSYAlQrgcm7P/kMMS1eugwrjBuJiogy1FYUM3Fyk1xjkAHDd6uJox6CtqQ4WwAf8vN3p5jAQgFdfoPpv87ZdDJ8+fwZXJfJA/OXrV4anwJwESrCgooTYqotaAGfFP/CAgQEAcAQISXyoclAAAAAASUVORK5CYII="}}]);