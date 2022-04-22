"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6588],{79965:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"user-information-query",title:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u57fa\u3065\u304f\u30af\u30a8\u30ea"},s=void 0,u={unversionedId:"tutorials/filter-queries/user-information-query",id:"version-19-R2/tutorials/filter-queries/user-information-query",title:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u57fa\u3065\u304f\u30af\u30a8\u30ea",description:"\u30e6\u30fc\u30b6\u30fc\u306e\u30ed\u30b0\u30a4\u30f3\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\uff08\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\uff09\u306b\u57fa\u3065\u304d\uff0c\u30a2\u30d7\u30ea\u306b\u8868\u793a\u3055\u308c\u308b\u30c7\u30fc\u30bf\u304c\u30d5\u30a3\u30eb\u30bf\u30fc\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R2/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/ja/docs/19-R2/tutorials/filter-queries/user-information-query",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/filter-queries/user-information-query.md",tags:[],version:"19-R2",frontMatter:{id:"user-information-query",title:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u57fa\u3065\u304f\u30af\u30a8\u30ea"},sidebar:"version-19-R2/tutorials",previous:{title:"Define a Filter Query",permalink:"/go-mobile/ja/docs/19-R2/tutorials/filter-queries/define-filter-query"},next:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/19-R2/tutorials/actions/getting-started"}},c={},p=[],m={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u30ed\u30b0\u30a4\u30f3\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\uff08\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\uff09\u306b\u57fa\u3065\u304d\uff0c\u30a2\u30d7\u30ea\u306b\u8868\u793a\u3055\u308c\u308b\u30c7\u30fc\u30bf\u304c\u30d5\u30a3\u30eb\u30bf\u30fc\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Data section"),"."),(0,o.kt)("li",{parentName:"ul"},"Right-click in the ",(0,o.kt)("strong",{parentName:"li"},"Filter query")," field to make ",(0,o.kt)("strong",{parentName:"li"},"Field, Comparators and Operators buttons")," appear."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Operators")," button and select ",(0,o.kt)("strong",{parentName:"li"},"AND"),"."),(0,o.kt)("li",{parentName:"ul"},"Now define the user information you want to get from the database method, ",(0,o.kt)("strong",{parentName:"li"},":email"),"."),(0,o.kt)("li",{parentName:"ul"},"Remember to validate the query by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Validate")," button. \u3053\u308c\u3092\u5fd8\u308c\u3066\u3057\u307e\u3046\u3068\uff0c\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3067\u304d\u307e\u305b\u3093\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u57fa\u3065\u304f\u30af\u30a8\u30ea",src:r(55478).Z,width:"2164",height:"1988"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager.Email = :email \n")),(0,o.kt)("p",null,"The query will filter data depending on the ",(0,o.kt)("strong",{parentName:"p"},"In Progress")," status AND the ",(0,o.kt)("strong",{parentName:"p"},"Account manager's email address")," (accessible from the AccountManager table thanks to the ",(0,o.kt)("em",{parentName:"p"},"Many-to-One")," relation on the manager's name)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"user icon")," is displayed on the right of each table when a user information filter is applied to it."),(0,o.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,o.kt)("strong",{parentName:"li"},"Mobile app authentication method"),". To do so, right-click on the ",(0,o.kt)("strong",{parentName:"li"},"Edit authentication method")," button to open the database method edition window."))),(0,o.kt)("p",null,"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u4e0b\u8a18\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,o.kt)("p",null,"\u8868\u793a\u3067\u304d\u308b\u30c7\u30fc\u30bf\u3092\u5224\u5b9a\u3059\u308b\u305f\u3081\u306e\u6761\u4ef6\u3068\u3057\u3066\uff0c\u55b6\u696d\u62c5\u5f53\u8005\u306e\u30ed\u30b0\u30a4\u30f3\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u53c2\u7167\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u57fa\u3065\u304f\u30af\u30a8\u30ea",src:r(72364).Z,width:"1836",height:"1534"})),(0,o.kt)("p",null,'Now if you build your app and enter "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as login email, you'll find all of Michelle Simpson's ",(0,o.kt)("em",{parentName:"p"},'"In progress"')," contracts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result",src:r(85194).Z,width:"1559",height:"907"})))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72364:function(e,t,r){t.Z=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},85194:function(e,t,r){t.Z=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},55478:function(e,t,r){t.Z=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);