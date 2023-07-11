"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3423],{78925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={id:"filter-query-introduction",title:"Filter queries"},n=void 0,s={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"version-19-R8/tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/pt/docs/19-R8/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"19-R8",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"tutorials",previous:{title:"Create Kotlin formatter",permalink:"/go-mobile/pt/docs/19-R8/tutorials/data-formatter/create-kotlin-formatter"},next:{title:"Come\xe7ando",permalink:"/go-mobile/pt/docs/19-R8/tutorials/actions/getting-started"}},l={},p=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",level:2},{value:"Definir un Filter Query",id:"definir-un-filter-query",level:2},{value:"Filtro de pesquisa usu\xe1rio",id:"filtro-de-pesquisa-usu\xe1rio",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll show how to create ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/19-R8/project-definition/data#filter-queries"},(0,o.kt)("strong",{parentName:"a"},"filter queries"))," to display filtered content in the generated mobile app."),(0,o.kt)("p",null,"Se voc\xea for um gestor de contas e quiser consultar seus contratos ",(0,o.kt)("em",{parentName:"p"},"Em curso")," simplesmente conectando-se a sua aplica\xe7\xe3o com seu endere\xe7o de correio eletr\xf4nico."),(0,o.kt)("p",null,"Primeiro, a partir da se\xe7\xe3o Dados, vamos definir um ",(0,o.kt)("strong",{parentName:"p"},"filtro de pesquisa b\xe1sico")," para exibir apenas contratos ",(0,o.kt)("em",{parentName:"p"},"Em Progresso"),". Depois vamos aplicar um ",(0,o.kt)("strong",{parentName:"p"},"filtro baseado na informa\xe7\xe3o de usu\xe1rio")," que depende do email do gerente de conta."),(0,o.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,o.kt)("p",null,"Antes de come\xe7ar, tenha certeza de baixar o ",(0,o.kt)("strong",{parentName:"p"},"Starter Project")," que inclui um arquivo ",(0,o.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," (um banco de dados demo com um projeto de app m\xf3vel pronto para usar)"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,o.kt)("p",null,"The database includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM database",src:a(19138).Z,width:"2226",height:"1834"})),(0,o.kt)("p",null,"You're now ready to define your first filter query."),(0,o.kt)("p",null,"Open the mobile project by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Open")," > ",(0,o.kt)("strong",{parentName:"p"},"Mobile Project...")," and select ",(0,o.kt)("strong",{parentName:"p"},"CRM app")," > ",(0,o.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."),(0,o.kt)("h2",{id:"definir-un-filter-query"},"Definir un Filter Query"),(0,o.kt)("p",null,'Por agora,  se construir o app Starter Project e digitar "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como o email de login (uma das contas de administrador), ver\xe1 ',(0,o.kt)("strong",{parentName:"p"},"todos os contratos e estados dos administradores")," (",(0,o.kt)("em",{parentName:"p"},"Closed")," e ",(0,o.kt)("em",{parentName:"p"},"In Progress"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS app without queries",src:a(38993).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"As we discussed above, we want the account managers to access their ",(0,o.kt)("em",{parentName:"p"},"In Progress")," contracts by logging into their mobile app with their email. Para fazer isso:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe1 para a se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Dados")),(0,o.kt)("li",{parentName:"ul"},"D\xea clique direito no campo ",(0,o.kt)("strong",{parentName:"li"},"Filtro de pesquisa")," para fazer com que apare\xe7am os bot\xf5es ",(0,o.kt)("strong",{parentName:"li"},"Campos, Comparadores e Operadores"),"."),(0,o.kt)("li",{parentName:"ul"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Campos")," e selecione ",(0,o.kt)("strong",{parentName:"li"},"Estado"),"."),(0,o.kt)("li",{parentName:"ul"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Comparadores")," e selecione ",(0,o.kt)("strong",{parentName:"li"},"Igual a"),"."),(0,o.kt)("li",{parentName:"ul"},"Como quer mostrar os contratos",(0,o.kt)("em",{parentName:"li"},"abertos"),", ingresse ",(0,o.kt)("strong",{parentName:"li"},"Em progresso")),(0,o.kt)("li",{parentName:"ul"},"Lembre de validar sua pesquisa clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Validar")," do contr\xe1rio n\xe3o poder\xe1 criar sua aplica\xe7\xe3o.")),(0,o.kt)("p",null,"Deve obter este resultado:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM database",src:a(5083).Z,width:"2164",height:"1988"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTES")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Um \xedcone ",(0,o.kt)("strong",{parentName:"li"},"filter")," \xe9 exibido \xe0 direita de cada tabela quando um filtro b\xe1sico \xe9 aplicado."),(0,o.kt)("li",{parentName:"ul"},"Para esses tipos de filtros de pesquisa, pode escolher incorporar os dados no app ou carregar os dados depois do login, marcando a checkbox ",(0,o.kt)("strong",{parentName:"li"},"Embed data into the built application")," ."),(0,o.kt)("li",{parentName:"ul"},"O tamanho ser\xe1 calculado na primeira compila\xe7\xe3o para poder visualizar o ",(0,o.kt)("strong",{parentName:"li"},"tamanho de seus dados"),"."))),(0,o.kt)("p",null,'Se construir seu app e digitar "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como o email de login, ver\xe1 que todos os contratos ',(0,o.kt)("em",{parentName:"p"},"Em Progresso")," ser\xe3o exibidos no Simulator!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS app with basic query",src:a(61620).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"N\xe3o \xe9 bem o que esper\xe1vamos! What we want now is for each account manager to visualize only their own ",(0,o.kt)("em",{parentName:"p"},"In Progress")," contracts, so let's complete our query."),(0,o.kt)("h2",{id:"filtro-de-pesquisa-usu\xe1rio"},"Filtro de pesquisa usu\xe1rio"),(0,o.kt)("p",null,"Now let's filter our app content ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/19-R8/project-definition/data#filter-queries-with-user-information"},"depending on a user information"),", in this case, the account manager's login email address."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe1 para a se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Dados"),"."),(0,o.kt)("li",{parentName:"ul"},"D\xea um clique direito no campo  ",(0,o.kt)("strong",{parentName:"li"},"Filtro de pesquisa")," para que apare\xe7am os ",(0,o.kt)("strong",{parentName:"li"},"bot\xf5es Campo, Comparadores e Operadores")," ."),(0,o.kt)("li",{parentName:"ul"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Operadores")," e selecione ",(0,o.kt)("strong",{parentName:"li"},"AND"),"."),(0,o.kt)("li",{parentName:"ul"},"Agora defina a informa\xe7\xe3o de usu\xe1rio que deseja obter do m\xe9todo de banco de dados, ",(0,o.kt)("strong",{parentName:"li"},":email"),"."),(0,o.kt)("li",{parentName:"ul"},"Lembre de validar a pesquisa clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Validate"),". Do contr\xe1rio n\xe3o poder\xe1 criar sua aplica\xe7\xe3o.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filtro de pesquisa usu\xe1rio",src:a(7140).Z,width:"2164",height:"1988"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager. Email = :email \n")),(0,o.kt)("p",null,"A pesquisa vai filtrar os dados dependendo do status de ",(0,o.kt)("strong",{parentName:"p"},"In Progress")," E do ",(0,o.kt)("strong",{parentName:"p"},"endere\xe7o de email do gerente de conta")," (acess\xedvel da tabela AccountManager gra\xe7as a rela\xe7\xe3o  ",(0,o.kt)("em",{parentName:"p"},"Many-to-One")," no nome do gerente)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTA")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Um  ",(0,o.kt)("strong",{parentName:"li"},"\xedcone usu\xe1rio")," \xe9 mostrado \xe0 direita de cada tabela quando um filtro de informa\xe7\xe3o de usu\xe1rio \xe9 aplicado a ela."),(0,o.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/19-R8/4d/on-mobile-app-authentication"},(0,o.kt)("inlineCode",{parentName:"a"},"On Mobile app authentication method")),". Para fazer isso, d\xea um clique direito no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Edit authentication method")," para abrir a janela de edi\xe7\xe3o do m\xe9todo de banco de dados."))),(0,o.kt)("p",null,"Adicione a linha abaixo no m\xe9todo de banco de dados:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,o.kt)("p",null,"Isso permite recuperar o endere\xe7o de email do login do gerente e exibir dados dependendo desse crit\xe9rio."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filtro de pesquisa usu\xe1rio",src:a(89322).Z,width:"1836",height:"1534"})),(0,o.kt)("p",null,'Agora, se construir seu app e entrar "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como email de login, vai achar todos os contratos de Michelle Simpson ',(0,o.kt)("em",{parentName:"p"},'"Em progresso"'),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result",src:a(60917).Z,width:"1559",height:"907"})))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(g,n(n({ref:t},u),{},{components:a})):r.createElement(g,n({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19138:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"},89322:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},5083:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},38993:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},60917:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},61620:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"},7140:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);