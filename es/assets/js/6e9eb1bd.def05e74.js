"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1211],{68656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const l={id:"detail-form-template-storyboard",title:"iOS Storyboard"},r=void 0,o={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"version-19-R8/tutorials/creating-detail-forms/detail-form-template-storyboard",title:"iOS Storyboard",description:"Ahora es el momento de crear su interfaz iOS de formulario detallado con Xcode.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/go-mobile/es/docs/19-R8/tutorials/creating-detail-forms/detail-form-template-storyboard",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/creating-detail-forms/detail-form-template-storyboard.md",tags:[],version:"19-R8",frontMatter:{id:"detail-form-template-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/es/docs/19-R8/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Dise\xf1o de Android",permalink:"/go-mobile/es/docs/19-R8/tutorials/creating-detail-forms/detail-form-template-layout"}},s={},d=[{value:"Abrir el archivo storyboard con Xcode",id:"abrir-el-archivo-storyboard-con-xcode",level:2},{value:"A\xf1adir un &quot;Scroll View&quot;",id:"a\xf1adir-un-scroll-view",level:2},{value:"A\xf1adir una &quot;Vertical Stack View&quot;",id:"a\xf1adir-una-vertical-stack-view",level:2},{value:"A\xf1adir las vistas en el Stack Views",id:"a\xf1adir-las-vistas-en-el-stack-views",level:2},{value:"A\xf1ada una Image View al Field View 1",id:"a\xf1ada-una-image-view-al-field-view-1",level:2},{value:"A\xf1adir las etiquetas al Field View 2",id:"a\xf1adir-las-etiquetas-al-field-view-2",level:2},{value:"Etiqueta de t\xedtulo",id:"etiqueta-de-t\xedtulo",level:3},{value:"Etiqueta de contenido",id:"etiqueta-de-contenido",level:3},{value:"C\xf3mo obtener datos en sus celdas",id:"c\xf3mo-obtener-datos-en-sus-celdas",level:2},{value:"Image View",id:"image-view",level:3},{value:"Etiquetas",id:"etiquetas",level:3},{value:"A\xf1adir las TAGS a las celdas a duplicar",id:"a\xf1adir-las-tags-a-las-celdas-a-duplicar",level:2},{value:"Field View 2",id:"field-view-2",level:3},{value:"Primera etiqueta",id:"primera-etiqueta",level:3},{value:"Segunda etiqueta",id:"segunda-etiqueta",level:3},{value:"Restricciones",id:"restricciones",level:3},{value:"Personalice su aplicaci\xf3n",id:"personalice-su-aplicaci\xf3n",level:3},{value:"\xbfQu\xe9 hacer ahora?",id:"qu\xe9-hacer-ahora",level:2}],c={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ahora es el momento de crear su interfaz iOS de formulario detallado con Xcode."),(0,n.kt)("p",null,"Este es el resultado que queremos lograr:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Storyboard custom detailform",src:a(70813).Z,width:"1377",height:"761"})),(0,n.kt)("p",null,"Para esta plantilla, vamos a a\xf1adir:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"una foto de perfil en el encabezado"),(0,n.kt)("li",{parentName:"ul"},"un campo a duplicar")),(0,n.kt)("h2",{id:"abrir-el-archivo-storyboard-con-xcode"},"Abrir el archivo storyboard con Xcode"),(0,n.kt)("p",null,"Primero, abra su archivo storyboard en Xcode."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Empty storyboard custom template",src:a(54064).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Est\xe1 vac\xedo, as\xed que vamos a agregar algo de contenido."),(0,n.kt)("h2",{id:"a\xf1adir-un-scroll-view"},'A\xf1adir un "Scroll View"'),(0,n.kt)("p",null,'Para que nuestro formulario detallado sea desplazable, el primer paso es arrastrar y soltar una "Scroll View" (vista de desplazamiento) desde la ',(0,n.kt)("strong",{parentName:"p"},"Librer\xeda de objetos"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Scroll View Storyboard",src:a(71291).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Desde el ",(0,n.kt)("strong",{parentName:"p"},"Inspector de tama\xf1o")," (en el lado derecho de la ventana del Interface Builder), defina el valor del Scroll vista en 359 y el valor de altura en 667. A continuaci\xf3n, defina el valor de X en 8 y el valor de Y en 0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Scroll View position height and width",src:a(94591).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Luego, agregue cuatro restricciones haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: 8, Top: 0, y Bottom: 0) como se muestra a continuaci\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Scrollview Constraints",src:a(85596).Z,width:"1164",height:"1092"})),(0,n.kt)("h2",{id:"a\xf1adir-una-vertical-stack-view"},'A\xf1adir una "Vertical Stack View"'),(0,n.kt)("p",null,'Arrastre y suelte una "Vertical Stack View" desde la ',(0,n.kt)("strong",{parentName:"p"},"librer\xeda de objetos"),' a la "Scroll view". Desde el ',(0,n.kt)("strong",{parentName:"p"},"Size inspector")," (al lado derecho del Interface Builder), defina el valor de ancho en 359 y el valor de alto en 202. A continuaci\xf3n, defina el valor de X en 0 y el valor de Y en 8."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add stackview Storyboard",src:a(80725).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,'Dado que el ancho y el alto del "Stack View" est\xe1n definidos por los elementos que se encuentran dentro de ella, configuraremos el tama\xf1o y las restricciones m\xe1s adelante.'),(0,n.kt)("h2",{id:"a\xf1adir-las-vistas-en-el-stack-views"},"A\xf1adir las vistas en el Stack Views"),(0,n.kt)("p",null,"Arrastre y suelte una vista de la ",(0,n.kt)("strong",{parentName:"p"},"librer\xeda de objetos")," en la Stack View que acaba de agregar a su storyboard. Llam\xe9mosla ",(0,n.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Field View 1",src:a(42057).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Luego arrastre y suelte otra vista de la ",(0,n.kt)("strong",{parentName:"p"},"Librer\xeda de objetos")," directamente en el Document Outline al mismo nivel que Field View 1 (para integrarla en la Stack View) y ll\xe1mela ",(0,n.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Field View 2",src:a(67444).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Para agregar espacio entre las vistas, seleccione su Stack View y defina el valor de espaciado en 8 (en el Attributes Inspector)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stackview spacing",src:a(87122).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Seleccione ",(0,n.kt)("strong",{parentName:"p"},"Field View 1")," y ",(0,n.kt)("strong",{parentName:"p"},"Field View 2")," y defina, en el ",(0,n.kt)("strong",{parentName:"p"},"Size inspector")," (a la derecha del Interface Builder), el valor de ancho en 359 y de alto en 97."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"views position height and width",src:a(76258).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Seleccione ",(0,n.kt)("strong",{parentName:"p"},"Field View 1")," y a\xf1ada tres restricciones haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0 y Top: 0):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Field Views constraints",src:a(44746).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,'Para que los "Stack View" y "Scroll View" tengan el mismo ancho, debe agregar un restricci\xf3n:'),(0,n.kt)("p",null,"Presione ",(0,n.kt)("strong",{parentName:"p"},"Ctrl"),' y arrastre la vista Pila a la vista Desplazamiento. Cuando suelte el bot\xf3n del rat\xf3n, el Interface Builder muestra un men\xfa con una lista de posibles restricciones. Seleccione "Equal Width".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stack View Equal Width",src:a(68257).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Luego, agregue cuatro restricciones con la Stack View haciendo clic en ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 8, y Bottom: 0) como se muestra a continuaci\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stackview constraints",src:a(1506).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Esto es lo que ver\xe1 cuando se agreguen restricciones:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stackview final constraints",src:a(75370).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Ahora que tiene dos vistas en su Stack View y ha definido restricciones, concentr\xe9monos en Field View 1."),(0,n.kt)("h2",{id:"a\xf1ada-una-image-view-al-field-view-1"},"A\xf1ada una Image View al Field View 1"),(0,n.kt)("p",null,"Desde la ",(0,n.kt)("strong",{parentName:"p"},"Object library")," (la librer\xeda de objetos), arrastre y suelte una ",(0,n.kt)("strong",{parentName:"p"},"Image View")," (una vista de imagen) en Field View 1."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Image View storyboard",src:a(14996).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Desde el ",(0,n.kt)("strong",{parentName:"p"},"Size inspector")," (al lado derecho del Interface Builder), defina el valor del ancho del Image View en 359 y su altura en 97. A continuaci\xf3n, defina el valor de X en 0 y el valor de Y en 0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image View position height and width",src:a(66050).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Luego, agregue cuatro restricciones haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 0, y Bottom: 0) como se muestra a continuaci\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image View constraints",src:a(79787).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"En el ",(0,n.kt)("strong",{parentName:"p"},"Size inspector"),"cambie el valor ",(0,n.kt)("strong",{parentName:"p"},"Default")," del intr\xednseco Size por ",(0,n.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Intrinsic size Image View",src:a(63632).Z,width:"1164",height:"1092"})),(0,n.kt)("h2",{id:"a\xf1adir-las-etiquetas-al-field-view-2"},"A\xf1adir las etiquetas al Field View 2"),(0,n.kt)("h3",{id:"etiqueta-de-t\xedtulo"},"Etiqueta de t\xedtulo"),(0,n.kt)("p",null,"En la ",(0,n.kt)("strong",{parentName:"p"},"librer\xeda de objetos"),", arrastre y suelte una ",(0,n.kt)("strong",{parentName:"p"},"Etiqueta ")," en Field View 2  y defina el valor de Ancho en 343 y el valor de Alto 22. A continuaci\xf3n, defina el valor de X en 8 y el valor de Y en 8."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add label",src:a(79877).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,'Haga doble clic en la etiqueta y as\xedgnele el nombre "',(0,n.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),'". Luego, en el ',(0,n.kt)("strong",{parentName:"p"},"attribute inspector"),", seleccione la fuente ",(0,n.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," y el color ",(0,n.kt)("strong",{parentName:"p"},"BackgroundColor"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Title label font and color",src:a(18505).Z,width:"1164",height:"1092"})),(0,n.kt)("h3",{id:"etiqueta-de-contenido"},"Etiqueta de contenido"),(0,n.kt)("p",null,"Duplique la etiqueta T\xedtulo y defina el ancho de etiqueta duplicado en 339 y el valor de alto en 44. Luego, defina el valor de X en 12 y el valor de Y en 37."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add label",src:a(54071).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,'Haga doble clic en la etiqueta y as\xedgnele el nombre "',(0,n.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),'". Luego, en el ',(0,n.kt)("strong",{parentName:"p"},"attribute inspector"),", seleccione la fuente ",(0,n.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," y el color ",(0,n.kt)("strong",{parentName:"p"},"Back Color"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Content label font and color",src:a(22012).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Seleccione las etiquetas Contenido y T\xedtulo y agregue cuatro restricciones haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: Multiple, Top: Multiple, y Bottom: Multiple) como se muestra a continuaci\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Title and Content labels constraints",src:a(461).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\xa1Ya ha terminado la parte de los elementos gr\xe1ficos! Todas sus restricciones est\xe1n bien definidas."),(0,n.kt)("h2",{id:"c\xf3mo-obtener-datos-en-sus-celdas"},"C\xf3mo obtener datos en sus celdas"),(0,n.kt)("h3",{id:"image-view"},"Image View"),(0,n.kt)("p",null,"Seleccione su Vista imagen y vaya a ",(0,n.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Haga clic en el ",(0,n.kt)("strong",{parentName:"p"},"bot\xf3n +")," para a\xf1adir una l\xednea."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"User defined runtime attributes",src:a(68011).Z,width:"1164",height:"1092"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": comience con bindTo para activar la uni\xf3n del componente. Introduzca ",(0,n.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,n.kt)("inlineCode",{parentName:"p"},"String"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": nombre del atributo. Introduzca ",(0,n.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Identity inspector storyboard",src:a(71075).Z,width:"1164",height:"1092"})),(0,n.kt)("h3",{id:"etiquetas"},"Etiquetas"),(0,n.kt)("p",null,"Para la ",(0,n.kt)("strong",{parentName:"p"},"primera etiqueta"),", vamos a agregar varias l\xedneas principalmente para mostrar iconos:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label1 User Defined Runtime Attributes",src:a(50259).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Tambi\xe9n hay que definir la Clase como ",(0,n.kt)("inlineCode",{parentName:"p"},"IconLabel")," y verificar las casilla de selecci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Inherit Module From Target")," como podemos ver a continuaci\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label1 Custom Class",src:a(79009).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Seleccione la ",(0,n.kt)("strong",{parentName:"p"},"segunda etiqueta"),' y agregue una l\xednea en el \xe1rea "Defined Runtime Attributes":'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tipo"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Cadena"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Valor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label2 User Defined Runtime Attributes",src:a(70881).Z,width:"1164",height:"1092"})),(0,n.kt)("h2",{id:"a\xf1adir-las-tags-a-las-celdas-a-duplicar"},"A\xf1adir las TAGS a las celdas a duplicar"),(0,n.kt)("p",null,"Field View 2 incluye los elementos que se duplicar\xe1n para que pueda tener tantos campos como defina en el editor del proyecto."),(0,n.kt)("p",null,"Cada elemento del storyboard tiene un identificador de objeto. Por ejemplo, si selecciona Field View 2 y va al ",(0,n.kt)("strong",{parentName:"p"},"Identity inspector"),", ver\xe1 sus identificadores de objetos:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Object ID Storyboard",src:a(98965).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Para indicar al editor del proyecto que todos los elementos incluidos en esta vista se duplicar\xe1n, debemos agregar un TAG a cada elemento y a cada restricci\xf3n."),(0,n.kt)("p",null,"El proceso es un poco complicado... \xa1Comencemos por abrir el archivo storyboard con su editor de c\xf3digo favorito!"),(0,n.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Seleccione ",(0,n.kt)("strong",{parentName:"p"},"Field View 2")," y obtenga sus identificadores de objeto del Identity Inspector (en el lado derecho de la ventana del Interface Builder). En nuestro proyecto, Field View 2 ID es: ",(0,n.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Busque este ID en el c\xf3digo xml del storyboard y reempl\xe1celo con ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-001")," cada vez que aparezca. Como puede ver, este ID de objeto se menciona varias veces, as\xed que sea cuidadoso."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Storyboard xml",src:a(20890).Z,width:"922",height:"227"})),(0,n.kt)("p",null,"Guarde el archivo xml del storyboard. Como puede ver, el ID de objeto de Field View 2 ha cambiado en el storyboard en Xcode:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Field View 2 Object ID",src:a(89961).Z,width:"1164",height:"1092"})),(0,n.kt)("h3",{id:"primera-etiqueta"},"Primera etiqueta"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ahora, obtenga el ID del objeto ",(0,n.kt)("strong",{parentName:"li"},"primera etiqueta")," del Identity Inspector y sustit\xfayalo por ",(0,n.kt)("strong",{parentName:"li"},"TAG-FD-002")," cada vez que aparezca en el c\xf3digo xml del storyboard.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 1 Object ID",src:a(12570).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Lista la primera etiqueta."),(0,n.kt)("h3",{id:"segunda-etiqueta"},"Segunda etiqueta"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ahora, obtenga el ID del objeto de la",(0,n.kt)("strong",{parentName:"li"}," segunda etiqueta ")," del Identity Inspector y sustit\xfayalo por ",(0,n.kt)("strong",{parentName:"li"}," TAG-FD-003 ")," cada vez que aparezca en el c\xf3digo xml del storyboard.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 2 Object ID",src:a(36417).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\xa1Listo!"),(0,n.kt)("h3",{id:"restricciones"},"Restricciones"),(0,n.kt)("p",null,"Ambas etiquetas tienen restricciones que tambi\xe9n necesitamos identificar:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tag constraints",src:a(62518).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Como para View Field 2 y la etiqueta, obtenemos todos los identificadores de objetos de ",(0,n.kt)("strong",{parentName:"p"},"7 Constraints")," desde el Identity Inspector y los reemplazamos con: ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-009")," y ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,n.kt)("p",null,"Vaya al editor de su proyecto y seleccione su plantilla de formulario detallado en la secci\xf3n Formularios, luego haga clic en Crear."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom detail template forms",src:a(26530).Z,width:"1072",height:"994"})),(0,n.kt)("p",null,"\xa1No est\xe1 mal para un primer intento!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone Demo",src:a(2628).Z,width:"1417",height:"907"})),(0,n.kt)("p",null,"\xa1Field View 2 ha sido duplicado bien! A ver si podemos hacer esta aplicaci\xf3n un poco m\xe1s interesante."),(0,n.kt)("h3",{id:"personalice-su-aplicaci\xf3n"},"Personalice su aplicaci\xf3n"),(0,n.kt)("p",null,"Vamos a agregar un borde redondeado a la Image View, as\xed como a Field View 2."),(0,n.kt)("p",null,"Seleccione su Vista imagen y a\xf1ada las dos l\xedneas siguientes en el \xe1rea User Defined Runtime Attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Number"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"12")))),(0,n.kt)("p",null,"y"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": seleccione la casilla"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone Demo",src:a(51963).Z,width:"1163",height:"1092"})),(0,n.kt)("p",null,"A continuaci\xf3n, seleccione Field View 2 y agregue lo siguiente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Number"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"12")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone Demo",src:a(93255).Z,width:"1163",height:"1092"})),(0,n.kt)("p",null,"\xa1Ahora puede crear su proyecto desde el editor de proyectos!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom template final result",src:a(16311).Z,width:"1417",height:"907"})),(0,n.kt)("h2",{id:"qu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,n.kt)("p",null,"En este tutorial, hemos cubierto los conceptos b\xe1sicos para crear plantillas de formularios detallados. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del proyecto Starter."),(0,n.kt)("p",null,"Descargue la carpeta de la plantilla terminada:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Descargar")))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return a?i.createElement(g,r(r({ref:t},c),{},{components:a})):i.createElement(g,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14996:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-imageview-storyboard-36f330915569e2a93221ba660b12fc84.png"},79877:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label1-storyboard-2f01d0c254f4d97ec20d2d367ce9ec7c.png"},54071:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label2-storyboard-1d6fb91ee892c6a65f5729d5e69f1922.png"},71291:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-scrollview-storyboard-d7dd2eaccc7c0e1d6b6c3f285820a0e2.png"},80725:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-vertical-stackview-storyboard-a77bb45fa7e07b3619466f619b841b77.png"},42057:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view1-storyboard-68249fe33e687b426e62861ca27ff8aa.png"},67444:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view2-storyboard-942c491dd7876b288072a8c9434d74a4.png"},22012:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/content-label-font-and-color-9f0854306427144fa1cdb46b3c69516b.png"},26530:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-detail-template-forms-684c7bdb81de3eaeca8c536798cd6eaf.png"},16311:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},62518:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/duplicated-constraints-e5ad96e2db402d7d9ce95a4285aa2034.png"},54064:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/empty-storyboard-custom-detailform-template-6663206b95888c7e8076b79411d1dad0.png"},89961:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/field-view-2-object-id-759b7dbf8ae041559a2f14eddbb125ff.png"},44746:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldView-1-Field-View-2-constraints-b66c9774eeed9b15c785284409b4ccd9.png"},93255:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldview2-corner-radius-c046e0a0aa9c45aeba49938d136f845d.png"},71075:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/identity-inspector-storyboard-da973e42db19cb35ee04896412de0835.png"},79787:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-constraints-d4d21829a4dcbbc8c329e9f1ceb55c51.png"},51963:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-corner-radius-6f9074bb95a961c9de553615ef39c9bb.png"},66050:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-position-height-width-72bfd675675801086b3b20155f2fd2ef.png"},63632:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/intrinsic-size-imageview-06259dc83255bf6351d83b809f7c8195.png"},2628:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/iphone-demo-509341fbe6b31946a3e285a1866fc8d0.png"},79009:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-custom-class-cfb751c3fe37927606ba3dbaf73ec1b9.png"},12570:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-object-id-eeee639d97b719fd4170fe964594f2ae.png"},50259:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-user-defined-runtime-attributes-9262fc5ad84234a215d9f428136af325.png"},36417:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-object-id-d52688b0242fd4f68acb10c26a9ed30b.png"},70881:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-user-defined-runtime-attributes-e720b43c31f49e75bc6a439759eae1ca.png"},98965:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/object-id-storyboard-a9e935f6d3b13ff7d8b0c025088706a8.png"},85596:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-constraints-908908fa94ba80c536f2a29b1132be48.png"},94591:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-position-height-width-83ed32ba7d8dcd47f59156425e6dd2be.png"},75370:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-final-de9eeaf65adf27f5518a3ee54de1c2d1.png"},1506:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-61be8a6fc102ebd539cef110925f845c.png"},68257:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-equal-width-scrollview-d51d69a40f4b666ff1ce4c157c655bf6.png"},87122:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-spacing-1f1af4566bed1dce74e795fb62b70a75.png"},70813:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-custom-detailform-69ea8fc4d8450ae06e61e29c8d2accdb.png"},20890:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-xml-351649fe451c881ec0ee4cecc6b04b6e.png"},18505:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/title-label-font-and-color-2eb7fa3157128aba53a61bd450808e31.png"},461:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/titlelabel-contentlabel-contraints-3f2e5158dd059a5d55a87a169a376e9c.png"},68011:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-defined-runtime-attributes-272f5431507eb1c173d5fed464335378.png"},76258:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/views-position-height-width-storyboard-678bc297732275201501516634843860.png"}}]);