"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7846],{48275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={id:"define-first-action",title:"Definir una primera acci\xf3n"},r=void 0,s={unversionedId:"tutorials/actions/define-first-action",id:"version-19-R7/tutorials/actions/define-first-action",title:"Definir una primera acci\xf3n",description:"En este tutorial, vamos a trabajar en una aplicaci\xf3n Tasks iOS y veremos c\xf3mo lidiar con las acciones en esta aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/tutorials/actions/define-first-action.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/define-first-action",permalink:"/go-mobile/es/docs/tutorials/actions/define-first-action",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/actions/define-first-action.md",tags:[],version:"19-R7",frontMatter:{id:"define-first-action",title:"Definir una primera acci\xf3n"},sidebar:"tutorials",previous:{title:"Comencemos",permalink:"/go-mobile/es/docs/tutorials/actions/getting-started"},next:{title:"A\xf1adir acciones a las plantillas",permalink:"/go-mobile/es/docs/tutorials/actions/adding-actions-template"}},l={},c=[{value:"Acciones de entidad",id:"acciones-de-entidad",level:2},{value:"PASO 1. Acciones de entidad en la secci\xf3n Actions",id:"paso-1-acciones-de-entidad-en-la-secci\xf3n-actions",level:3},{value:"PASO 2. Crear y editar el m\xe9todo On Mobile App Action",id:"paso-2-crear-y-editar-el-m\xe9todo-on-mobile-app-action",level:3},{value:"PASO 3. Crear un m\xe9todo &quot;modifyStatus&quot;",id:"paso-3-crear-un-m\xe9todo-modifystatus",level:3},{value:"Acciones de tabla",id:"acciones-de-tabla",level:2},{value:"PASO 1. Acciones de tabla en la secci\xf3n Actions",id:"paso-1-acciones-de-tabla-en-la-secci\xf3n-actions",level:3},{value:"PASO 2. Modificar el m\xe9todo Action",id:"paso-2-modificar-el-m\xe9todo-action",level:3},{value:"PASO 3. Crear un m\xe9todo &quot;postponeAll&quot;",id:"paso-3-crear-un-m\xe9todo-postponeall",level:3},{value:"\xbfQu\xe9 hacer ahora?",id:"qu\xe9-hacer-ahora",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En este tutorial, vamos a trabajar en una aplicaci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Tasks iOS")," y veremos c\xf3mo lidiar con las acciones en esta aplicaci\xf3n."),(0,o.kt)("p",null,"B\xe1sicamente, lo que queremos hacer en una ",(0,o.kt)("strong",{parentName:"p"},"aplicaci\xf3n Task")," es cambiar el ",(0,o.kt)("strong",{parentName:"p"},"estado")," y el ",(0,o.kt)("strong",{parentName:"p"},"porcentaje de finalizaci\xf3n")," de una tarea individualmente."),(0,o.kt)("p",null,"M\xe1s globalmente, queremos ",(0,o.kt)("strong",{parentName:"p"},"cambiar el estado de todas las tareas")," a pospuesto o en progreso, por ejemplo."),(0,o.kt)("p",null,"Descargue el ",(0,o.kt)("strong",{parentName:"p"},"proyect Starter")," y vaya directamente a la secci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Actions"),"."),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Descargar")),(0,o.kt)("p",null,"Puede definir acciones para dos niveles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acciones de entidad"),(0,o.kt)("li",{parentName:"ul"},"Acciones de tabla")),(0,o.kt)("p",null,"Centr\xe9monos primero en las acciones de entidad"),(0,o.kt)("h2",{id:"acciones-de-entidad"},"Acciones de entidad"),(0,o.kt)("h3",{id:"paso-1-acciones-de-entidad-en-la-secci\xf3n-actions"},"PASO 1. Acciones de entidad en la secci\xf3n Actions"),(0,o.kt)("p",null,"En esta secci\xf3n Actions, podr\xe1 definir todas los ",(0,o.kt)("strong",{parentName:"p"},"nombres"),", los ",(0,o.kt)("strong",{parentName:"p"},"iconos"),", las ",(0,o.kt)("strong",{parentName:"p"},"etiquetas")," de sus acciones, as\xed como tambi\xe9n las ",(0,o.kt)("strong",{parentName:"p"},"tablas")," en las cuales desea que la acci\xf3n est\xe9 disponible y el ",(0,o.kt)("strong",{parentName:"p"},"alcance")," de las acciones."),(0,o.kt)("p",null,"La secci\xf3n Actions est\xe1 bastante vac\xeda cuando la abre por primera vez, as\xed que haga clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"p"},'M\xe1s "+"')," en la parte inferior izquierda para agregar su primera acci\xf3n."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create action",src:a(97086).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"Primero definamos una acci\xf3n que ",(0,o.kt)("strong",{parentName:"p"},"cambiar\xe1 el estado de una tarea"),' a "Completa" y pondr\xe1 el ',(0,o.kt)("strong",{parentName:"p"},"porcentaje de finalizaci\xf3n")," en 100%."),(0,o.kt)("p",null,"Para definir esta acci\xf3n:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduzca ",(0,o.kt)("strong",{parentName:"li"},"taskDone")," en el campo ",(0,o.kt)("strong",{parentName:"li"},"Nombres")),(0,o.kt)("li",{parentName:"ul"},"Seleccione el ",(0,o.kt)("strong",{parentName:"li"},'icono "Done"')," de la librer\xeda de iconos"),(0,o.kt)("li",{parentName:"ul"},"Introduzca ",(0,o.kt)("strong",{parentName:"li"},"Done")," en el campo ",(0,o.kt)("strong",{parentName:"li"},"Etiquetas cortas")),(0,o.kt)("li",{parentName:"ul"},"Introduzca ",(0,o.kt)("strong",{parentName:"li"},"Task Done")," en el campo ",(0,o.kt)("strong",{parentName:"li"},"Etiquetas largas")),(0,o.kt)("li",{parentName:"ul"},"Seleccione la tabla ",(0,o.kt)("strong",{parentName:"li"},"Tasks")," a partir de la lista propuesta en ",(0,o.kt)("strong",{parentName:"li"},"Tables")),(0,o.kt)("li",{parentName:"ul"},"Seleccione ",(0,o.kt)("strong",{parentName:"li"},"Entidad actual")," en la lista ",(0,o.kt)("strong",{parentName:"li"},"Alcance"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Done action definition",src:a(88931).Z,width:"2164",height:"1988"})),(0,o.kt)("h3",{id:"paso-2-crear-y-editar-el-m\xe9todo-on-mobile-app-action"},"PASO 2. Crear y editar el m\xe9todo On Mobile App Action"),(0,o.kt)("p",null,"Now that your action is defined in the Project Editor, you have to create the ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/4d/on-mobile-app-action"},"On Mobile App Action")," database method."),(0,o.kt)("p",null,"Para hacerlo, haga clic en el ",(0,o.kt)("strong",{parentName:"p"},"bot\xf3n Crear")," en la parte inferior derecha de la tabla de acciones e ingrese el siguiente c\xf3digo en el m\xe9todo base ",(0,o.kt)("strong",{parentName:"p"},"On Mobile App Action"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,o.kt)("h3",{id:"paso-3-crear-un-m\xe9todo-modifystatus"},'PASO 3. Crear un m\xe9todo "modifyStatus"'),(0,o.kt)("p",null,"Una vez que su m\xe9todo base ha sido editado, debe crear un m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"modifyStatus")," que har\xe1 el trabajo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    $entity.CompletePercentage:=$in.CompletePercentage\n\n    $entity.Status:=3\n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notify App that action is successful\n        $out.dataSynchro:=True  // notify App to refresh this entity\n\n    Else\n\n        $out:=$status  // return status to the App\n\n    End if\n\nElse\n\n    $out.success:=False  // notify App that action failed\n\nEnd if\n\n$0:=$out\n\n')),(0,o.kt)("p",null,"Build and Run you app, and there you go! Cree y ejecute su aplicaci\xf3n y \xa1listo! Cree y ejecute su aplicaci\xf3n y \xa1listo! Cree y ejecute su aplicaci\xf3n y \xa1listo! Su ",(0,o.kt)("strong",{parentName:"p"},"acci\xf3n Done ")," est\xe1 disponible cuando desliza hacia la izquierda una celda en el formulario Lista, as\xed como cuando hace clic en el ",(0,o.kt)("strong",{parentName:"p"},"bot\xf3n gen\xe9rico Actions")," en la barra de navegaci\xf3n del formulario detallado."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Done action",src:a(46396).Z,width:"1559",height:"907"})),(0,o.kt)("h2",{id:"acciones-de-tabla"},"Acciones de tabla"),(0,o.kt)("h3",{id:"paso-1-acciones-de-tabla-en-la-secci\xf3n-actions"},"PASO 1. Acciones de tabla en la secci\xf3n Actions"),(0,o.kt)("p",null,"Ahora, imagine que se va de vacaciones y quiere ",(0,o.kt)("strong",{parentName:"p"},"cambiar el estado de todas sus tareas"),' a "Pospuesto".'),(0,o.kt)("p",null,"Definamos esta acci\xf3n desde la secci\xf3n Action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduzca ",(0,o.kt)("strong",{parentName:"li"},"postponeAll")," en el campo ",(0,o.kt)("strong",{parentName:"li"},"Nombres")),(0,o.kt)("li",{parentName:"ul"},"Seleccione el ",(0,o.kt)("strong",{parentName:"li"},'icono "Postponed"')," de la librer\xeda de iconos"),(0,o.kt)("li",{parentName:"ul"},"Introduzca ",(0,o.kt)("strong",{parentName:"li"},"Postpone All")," en el campo ",(0,o.kt)("strong",{parentName:"li"},"Etiquetas cortas")),(0,o.kt)("li",{parentName:"ul"},"Introduzca ",(0,o.kt)("strong",{parentName:"li"},"Postpone All")," en el campo ",(0,o.kt)("strong",{parentName:"li"},"Etiquetas largas")),(0,o.kt)("li",{parentName:"ul"},"Seleccione la tabla ",(0,o.kt)("strong",{parentName:"li"},"Tasks")," a partir de la lista propuesta en ",(0,o.kt)("strong",{parentName:"li"},"Tables")),(0,o.kt)("li",{parentName:"ul"},"Seleccione ",(0,o.kt)("strong",{parentName:"li"},"Table")," de la lista ",(0,o.kt)("strong",{parentName:"li"},"Alcance"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postponed action definition",src:a(50728).Z,width:"2164",height:"1988"})),(0,o.kt)("h3",{id:"paso-2-modificar-el-m\xe9todo-action"},"PASO 2. Modificar el m\xe9todo Action"),(0,o.kt)("p",null,"Haga clic el ",(0,o.kt)("strong",{parentName:"p"},"bot\xf3n Editar")," en la parte inferior derecha de la tabla action para completar el m\xe9todo base ",(0,o.kt)("strong",{parentName:"p"},"On Mobile App Action"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    : ($request.action="postponeAll")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "Status";4)\n\n        $result:= postponeAll ($o)\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,o.kt)("h3",{id:"paso-3-crear-un-m\xe9todo-postponeall"},'PASO 3. Crear un m\xe9todo "postponeAll"'),(0,o.kt)("p",null,"A medida que crea el m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"modifyStatus"),", siga el mismo proceso y cree un nuevo m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"postponeAll")," que modificar\xe1 todo el estado del registro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    For each ($entity;ds[$in.dataClass].all())\n\n        $entity.Status:=$in.Status\n        $entity.save()\n\n    End for each\n\n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n\nElse\n\n    $out.errors:=New collection("No Selection")\n\nEnd if\n\n$0:=$out\n\n')),(0,o.kt)("p",null,"\xa1Cree y ejecute su aplicaci\xf3n! Encontrar\xe1 un nuevo ",(0,o.kt)("strong",{parentName:"p"},"bot\xf3n gen\xe9rico")," en la barra de navegaci\xf3n de su formulario Lista. Haga clic en \xe9l para activar la acci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Postpone All"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result Postponed Action",src:a(73980).Z,width:"1559",height:"907"})),(0,o.kt)("h2",{id:"qu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,o.kt)("p",null,"\xa1Felicitaciones! \xa1Felicitaciones! \xa1Felicitaciones! Acaba de agregar 2 acciones a su aplicaci\xf3n iOS. \xa1Felicitaciones! \xa1Felicitaciones! Acaba de agregar 2 acciones a su aplicaci\xf3n iOS. \xa1Ahora puede agregar todas las acciones que necesita a su aplicaci\xf3n Tasks!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result All Action",src:a(65385).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"Descargue el proyecto terminado que incluye varias acciones:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Descargar")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Create-action-3f9a1551995b3fc7cecfd5efc767fad7.png"},88931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Done-action-definition-0ad0618548aacf2461c2dd6cd50fbe5b.png"},46396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Entity-action-Done-af91a9feef35665a480fd2607f6f58b7.png"},65385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},73980:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ListForm-table-action-tableview-tuto-658578b1585c3ebf027a34911111377a.png"},50728:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PostponedAll-action-definition-fbbbc42bb0a71003e1335f344eb93c0e.png"}}]);