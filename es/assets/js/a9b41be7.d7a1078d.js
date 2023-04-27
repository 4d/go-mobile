"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4237],{12023:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(87462),i=(n(67294),n(3905));const r={id:"using-action-parameters",title:"Utilizar par\xe1metros de acci\xf3n"},o=void 0,s={unversionedId:"tutorials/actions/using-action-parameters",id:"version-19-R8/tutorials/actions/using-action-parameters",title:"Utilizar par\xe1metros de acci\xf3n",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/es/docs/19-R8/tutorials/actions/using-action-parameters",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/actions/using-action-parameters.md",tags:[],version:"19-R8",frontMatter:{id:"using-action-parameters",title:"Utilizar par\xe1metros de acci\xf3n"},sidebar:"tutorials",previous:{title:"A\xf1adir acciones a las plantillas",permalink:"/go-mobile/es/docs/19-R8/tutorials/actions/adding-actions-template"},next:{title:"Create Kotlin input control",permalink:"/go-mobile/es/docs/19-R8/tutorials/actions/create-kotlin-input"}},c={},l=[{value:"PASO 1. A\xf1adir acci\xf3n",id:"paso-1-a\xf1adir-acci\xf3n",level:2},{value:"PASO 2. Acci\xf3n de edici\xf3n",id:"paso-2-acci\xf3n-de-edici\xf3n",level:2},{value:"PASO 3. Acci\xf3n de eliminaci\xf3n",id:"paso-3-acci\xf3n-de-eliminaci\xf3n",level:2},{value:"PASO 4. Acci\xf3n de env\xedo de comentario",id:"paso-4-acci\xf3n-de-env\xedo-de-comentario",level:2},{value:"PASO 5. Creaci\xf3n del m\xe9todo base On Mobile App Action",id:"paso-5-creaci\xf3n-del-m\xe9todo-base-on-mobile-app-action",level:2},{value:"PASO 6. Creaci\xf3n de todos los m\xe9todos necesarios",id:"paso-6-creaci\xf3n-de-todos-los-m\xe9todos-necesarios",level:2},{value:"addAction",id:"addaction",level:3},{value:"editAction",id:"editaction",level:3},{value:"deleteAction",id:"deleteaction",level:3},{value:"sendEmail",id:"sendemail",level:3},{value:"PASO 7. Creaci\xf3n de la aplicaci\xf3n",id:"paso-7-creaci\xf3n-de-la-aplicaci\xf3n",level:2},{value:"PASO 8. \xbfQu\xe9 hacer ahora?",id:"paso-8-qu\xe9-hacer-ahora",level:2}],p={toc:l};function d(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,i.kt)("p",{parentName:"blockquote"},"Definir par\xe1metros de acci\xf3n para editar el contenido de su aplicaci\xf3n.")),(0,i.kt)("p",null,"En el tutorial al definir acciones, descubrimos c\xf3mo ejecutar c\xf3digo 4D desde una aplicaci\xf3n iOS definiendo acciones en la secci\xf3n acciones."),(0,i.kt)("p",null,"En este tutorial, iremos m\xe1s all\xe1 y crearemos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"una acci\xf3n de adici\xf3n para ",(0,i.kt)("strong",{parentName:"li"},"crear una nueva tarea"),","),(0,i.kt)("li",{parentName:"ul"},"una acci\xf3n de edici\xf3n que le permitir\xe1 ",(0,i.kt)("strong",{parentName:"li"},"editar las tareas existentes")," desde la aplicaci\xf3n iOS,"),(0,i.kt)("li",{parentName:"ul"},"una acci\xf3n de eliminaci\xf3n para ",(0,i.kt)("strong",{parentName:"li"},"eliminar una entidad"),", y"),(0,i.kt)("li",{parentName:"ul"},"una acci\xf3n que le permitir\xe1 ",(0,i.kt)("strong",{parentName:"li"},"enviar un comentario por correo electr\xf3nico para una tarea espec\xedfica"),".")),(0,i.kt)("p",null,"Para comenzar, primero descarguemos el ",(0,i.kt)("strong",{parentName:"p"},"proyecto Starter")," basado en nuestra aplicaci\xf3n iOS Tasks:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Descargar")),(0,i.kt)("h2",{id:"paso-1-a\xf1adir-acci\xf3n"},"PASO 1. A\xf1adir acci\xf3n"),(0,i.kt)("p",null,"Comencemos por una tarea simple. Abra el proyecto m\xf3vil Tasks y vaya directamente a la ",(0,i.kt)("strong",{parentName:"p"},"secci\xf3n Actions"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Action section",src:n(29493).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"Est\xe1 bastante vac\xedo por el momento... Esto es lo que queremos: ",(0,i.kt)("strong",{parentName:"p"},"crear una nueva tarea desde la aplicaci\xf3n iOS"),"."),(0,i.kt)("p",null,"Para esto, creemos una acci\xf3n utilizando una acci\xf3n preestablecida ",(0,i.kt)("strong",{parentName:"p"},"Agregar"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en la flecha en el ",(0,i.kt)("strong",{parentName:"li"},"bot\xf3n +"),", en la parte inferior de la tabla Acciones."),(0,i.kt)("li",{parentName:"ul"},"Seleccione la opci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"acci\xf3n de a\xf1adir"),"."),(0,i.kt)("li",{parentName:"ul"},"Seleccione la ",(0,i.kt)("strong",{parentName:"li"},"tabla Task"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add action creation",src:n(94120).Z,width:"2164",height:"2046"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Se muestra una ",(0,i.kt)("strong",{parentName:"li"},"nueva acci\xf3n")," llamada ",(0,i.kt)("em",{parentName:"li"},'"addTasks"')," con ",(0,i.kt)("em",{parentName:"li"},'"Add..."')," como etiqueta predeterminada."),(0,i.kt)("li",{parentName:"ul"},"Todos los ",(0,i.kt)("strong",{parentName:"li"},"par\xe1metros"),"disponibles y sus ",(0,i.kt)("strong",{parentName:"li"},"propiedades")," se muestran en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Par\xe1metros de las acciones"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add action parameters",src:n(72794).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"En este punto, todos los ",(0,i.kt)("strong",{parentName:"p"},"par\xe1metros de las acciones de adici\xf3n")," se crean autom\xe1ticamente y est\xe1n listos para usar."),(0,i.kt)("h2",{id:"paso-2-acci\xf3n-de-edici\xf3n"},"PASO 2. Acci\xf3n de edici\xf3n"),(0,i.kt)("p",null,"Ahora creemos una acci\xf3n que le permitir\xe1 ",(0,i.kt)("strong",{parentName:"p"},"editar el contenido de su aplicaci\xf3n"),"."),(0,i.kt)("p",null,"Para esto, creemos una acci\xf3n utilizando una acci\xf3n preestablecida de ",(0,i.kt)("strong",{parentName:"p"},"edici\xf3n"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en la flecha en el ",(0,i.kt)("strong",{parentName:"li"},"bot\xf3n +"),", en la parte inferior de la tabla Acciones."),(0,i.kt)("li",{parentName:"ul"},"Seleccione la opci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"acci\xf3n de edici\xf3n"),"."),(0,i.kt)("li",{parentName:"ul"},"Seleccione la tabla Tasks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit action creation",src:n(62320).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"En este punto ver\xe1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Se muestra ",(0,i.kt)("strong",{parentName:"li"},"Una nueva acci\xf3n")," llamada ",(0,i.kt)("em",{parentName:"li"},'"editTasks"')," con ",(0,i.kt)("em",{parentName:"li"},'"Add..."')," como etiqueta predeterminada."),(0,i.kt)("li",{parentName:"ul"},"Todos los ",(0,i.kt)("strong",{parentName:"li"},"par\xe1metros"),"disponibles y sus ",(0,i.kt)("strong",{parentName:"li"},"propiedades")," se muestran en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Par\xe1metros de las acciones"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit action parameters",src:n(98669).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"No se preocupe, manejaremos el c\xf3digo 4D para estas acciones m\xe1s adelante. :-)"),(0,i.kt)("h2",{id:"paso-3-acci\xf3n-de-eliminaci\xf3n"},"PASO 3. Acci\xf3n de eliminaci\xf3n"),(0,i.kt)("p",null,"El proceso de creaci\xf3n de la acci\xf3n predefinido ",(0,i.kt)("strong",{parentName:"p"},"Eliminar")," es casi el mismo que la acci\xf3n Editar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en la flecha en el ",(0,i.kt)("strong",{parentName:"li"},"bot\xf3n +"),", en la parte inferior de la tabla Acciones."),(0,i.kt)("li",{parentName:"ul"},"Seleccione la opci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"acci\xf3n de eliminaci\xf3n"),"."),(0,i.kt)("li",{parentName:"ul"},"Seleccione la tabla Tasks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete action creation",src:n(47837).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"En este punto, ver\xe1 una ",(0,i.kt)("strong",{parentName:"p"},"nueva acci\xf3n")," llamada ",(0,i.kt)("em",{parentName:"p"},'"deleteTasks"')," con ",(0,i.kt)("em",{parentName:"p"},'"Remove"')," como la etiqueta predeterminada."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Acci\xf3n de eliminaci\xf3n",src:n(27529).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"No necesita preocuparse por los par\xe1metros o propiedades de este tipo de acci\xf3n."),(0,i.kt)("h2",{id:"paso-4-acci\xf3n-de-env\xedo-de-comentario"},"PASO 4. Acci\xf3n de env\xedo de comentario"),(0,i.kt)("p",null,"Ahora queremos ",(0,i.kt)("strong",{parentName:"p"},"enviar un comentario")," a un ",(0,i.kt)("strong",{parentName:"p"},"correo electr\xf3nico espec\xedfico")," dependiendo de una tarea espec\xedfica. Para hacerlo, haga clic en el bot\xf3n + y cree una nueva acci\xf3n llamada ",(0,i.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete action creation",src:n(66678).Z,width:"2164",height:"2046"})),(0,i.kt)("p",null,"Ahora creemos tres par\xe1metros:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n + y seleccione ",(0,i.kt)("strong",{parentName:"li"},"Title")," en la lista de par\xe1metros de las acciones, para incluirlo en el correo electr\xf3nico que va a enviar."),(0,i.kt)("li",{parentName:"ul"},"Cree un par\xe1metro ",(0,i.kt)("strong",{parentName:"li"},"Comment")," y seleccione el formato \xc1rea de texto."),(0,i.kt)("li",{parentName:"ul"},"Cree un par\xe1metro ",(0,i.kt)("strong",{parentName:"li"},"email")," y seleccione el formato Email address.")),(0,i.kt)("p",null,"Su secci\xf3n Actions deber\xeda verse as\xed:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Send comment action creation",src:n(6226).Z,width:"2164",height:"2046"})),(0,i.kt)("h2",{id:"paso-5-creaci\xf3n-del-m\xe9todo-base-on-mobile-app-action"},"PASO 5. Creaci\xf3n del m\xe9todo base On Mobile App Action"),(0,i.kt)("p",null,"Haga clic en el bot\xf3n Crear para crear el m\xe9todo base ",(0,i.kt)("em",{parentName:"p"},"On Mobile App Action"),"."),(0,i.kt)("p",null,"Todas sus acciones se incluir\xe1n autom\xe1ticamente en el m\xe9todo base."),(0,i.kt)("p",null,"Lo \xfanico que debe hacer es agregar una referencia a su(s) m\xe9todo(s) para el (los) escenario(s) que desea manejar."),(0,i.kt)("p",null,"Aqu\xed el m\xe9todo base ",(0,i.kt)("em",{parentName:"p"},"On Mobile App Action")," final:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informaci\xf3n ofrecida por la aplicaci\xf3n m\xf3vil\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Add\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Edit\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Remove"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Send Comment"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // Acci\xf3n desconocida\nEnd case \n\n$0:=$result\n\n')),(0,i.kt)("h2",{id:"paso-6-creaci\xf3n-de-todos-los-m\xe9todos-necesarios"},"PASO 6. Creaci\xf3n de todos los m\xe9todos necesarios"),(0,i.kt)("h3",{id:"addaction"},"addAction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  //create a reference\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  //save the entity\n\n\n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,i.kt)("h3",{id:"editaction"},"editAction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notificar la App que la acci\xf3n es exitosa\n        $out.dataSynchro:=True  // notificar la App para refrescar esta entidad\n        $out.statusText:="Task edited"\n\n    Else \n\n        $out:=$status  // devolver estado a la App\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar la App que la acci\xf3n fall\xf3\n\nEnd if \n\n$0:=$out\n\n\n')),(0,i.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // notificar a la App que la acci\xf3n es exitosa\n        $out.dataSynchro:=True  // notificar a la App refrescar esta entidad\n        $out.statusText:="Task deleted"\n\n    Else \n\n        $out:=$status  // devolver estado a la App\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar a la App que la acci\xf3n fall\xf3\n\nEnd if \n\n$0:=$out\n\n\n')),(0,i.kt)("h3",{id:"sendemail"},"sendEmail"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // notificar a la App que la acci\xf3n fue exitosa\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // notificar a la App que la acci\xf3n fall\xf3\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar a la App que la acci\xf3n fall\xf3\n\nEnd if \n\n$0:=$out\n\n\n')),(0,i.kt)("p",null,"No olvide agregar sus propios valores para la acci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"sendEmail"),"."),(0,i.kt)("h2",{id:"paso-7-creaci\xf3n-de-la-aplicaci\xf3n"},"PASO 7. Creaci\xf3n de la aplicaci\xf3n"),(0,i.kt)("p",null,"\xa1Es hora de generar su aplicaci\xf3n!"),(0,i.kt)("p",null,"Ahora, si hace clic en el bot\xf3n Action de la barra de navegaci\xf3n, podr\xe1 ",(0,i.kt)("strong",{parentName:"p"},"crear una nueva tarea"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create new task",src:n(7146).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"Si mantiene la presi\xf3n sobre su nueva celda de tareas en el Formulario Lista, se mostrar\xe1 una acci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Editar...")," en la lista de acciones."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit task",src:n(96590).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"Env\xede un comentario utilizando la acci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Send comment"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Send task comment",src:n(6662).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"Y finalmente puede eliminar una entidad utilizando la acci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Eliminar... "),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete task",src:n(84897).Z,width:"1701",height:"992"})),(0,i.kt)("h2",{id:"paso-8-qu\xe9-hacer-ahora"},"PASO 8. \xbfQu\xe9 hacer ahora?"),(0,i.kt)("p",null,"\xa1Felicitaciones! \xa1Felicitaciones! \xa1Felicitaciones! Acaba de agregar 2 acciones a su aplicaci\xf3n iOS. \xa1Felicitaciones! \xa1Felicitaciones! \xa1Felicitaciones! Su aplicaci\xf3n iOS Tasks ahora est\xe1 completa y ahora puede modificar los datos de su aplicaci\xf3n directamente desde su dispositivo y sincronizarlos con su servidor."),(0,i.kt)("p",null,"Descargar el proyecto terminado:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"Descargar el proyecto completo")))}d.isMDXComponent=!0},3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?t.createElement(k,o(o({ref:a},p),{},{components:n})):t.createElement(k,o({ref:a},p))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7146:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},84897:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},96590:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},6662:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},29493:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},94120:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},72794:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},47837:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},27529:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},62320:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},98669:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},66678:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},6226:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);