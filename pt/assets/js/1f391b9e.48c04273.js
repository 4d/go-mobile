"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3085],{51761:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var l=n(67294),t=n(86010),i=n(92877),c=n(49360),s=n(78473),m=n(26982),r="mdxPageWrapper_zHyg";function o(e){var a=e.content,n=a.metadata,o=n.title,d=n.description,u=n.frontMatter,v=u.wrapperClassName,f=u.hide_table_of_contents;return l.createElement(m.FG,{className:(0,t.Z)(null!=v?v:m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},l.createElement(m.d,{title:o,description:d}),l.createElement(i.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",r)},l.createElement("div",{className:(0,t.Z)("col",!f&&"col--8")},l.createElement(c.Z,null,l.createElement(a,null))),!f&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:a.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},78473:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(83117),t=n(80102),i=n(67294),c=n(86010),s=n(14569),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,t.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:function(e,a,n){n.d(a,{Z:function(){return r}});var l=n(83117),t=n(80102),i=n(67294),c=n(26982),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,t.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=N?N:_.tableOfContents.maxHeadingLevel,E=(0,c.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),b=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:C}}),[d,v,k,C]);return(0,c.Si)(b),i.createElement(m,(0,l.Z)({toc:E,className:r,linkClassName:d},g))}}}]);