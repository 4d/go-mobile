"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5237],{41594:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var e=n(87462),o=(n(67294),n(3905));const r={id:"detail-form-template-layout",title:"Dise\xf1o de Android"},i=void 0,d={unversionedId:"tutorials/creating-detail-forms/detail-form-template-layout",id:"version-19-R6/tutorials/creating-detail-forms/detail-form-template-layout",title:"Dise\xf1o de Android",description:"En esta secci\xf3n ver\xe1 c\xf3mo crear su interfaz de formulario detallado con Android Studio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-layout.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-layout",permalink:"/go-mobile/es/docs/19-R6/tutorials/creating-detail-forms/detail-form-template-layout",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-layout.md",tags:[],version:"19-R6",frontMatter:{id:"detail-form-template-layout",title:"Dise\xf1o de Android"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/es/docs/19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard"},next:{title:"Instalar una plantilla",permalink:"/go-mobile/es/docs/19-R6/tutorials/gallery/install-gallery-template"}},l={},p=[{value:"Abrir el archivo de dise\xf1o con Android Studio",id:"abrir-el-archivo-de-dise\xf1o-con-android-studio",level:2},{value:"Qu\xe9 est\xe1 disponible en este proyecto inicial",id:"qu\xe9-est\xe1-disponible-en-este-proyecto-inicial",level:2},{value:"A\xf1adir una &quot;Image View&quot;",id:"a\xf1adir-una-image-view",level:2},{value:"C\xf3mo obtener datos en su formulario detallado",id:"c\xf3mo-obtener-datos-en-su-formulario-detallado",level:2},{value:"Image View",id:"image-view",level:3},{value:"\xbfQu\xe9 hacer ahora?",id:"qu\xe9-hacer-ahora",level:2}],c={toc:p};function u(t){let{components:a,...r}=t;return(0,o.kt)("wrapper",(0,e.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En esta secci\xf3n ver\xe1 c\xf3mo crear su interfaz de formulario detallado con Android Studio."),(0,o.kt)("p",null,"Este es el resultado que queremos lograr:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard custom detailform",src:n(85641).Z,width:"2654",height:"2014"})),(0,o.kt)("p",null,"Para esta plantilla, vamos a a\xf1adir:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"una foto de perfil en el encabezado"),(0,o.kt)("li",{parentName:"ul"},"un campo a duplicar")),(0,o.kt)("h2",{id:"abrir-el-archivo-de-dise\xf1o-con-android-studio"},"Abrir el archivo de dise\xf1o con Android Studio"),(0,o.kt)("p",null,"La mejor manera de editar o crear una plantilla es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Abrir Android Studio y crear un nuevo proyecto m\xf3vil vac\xedo presionando en Archivo > Nuevo > Nuevo Proyecto...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Seleccionar la plantilla Actividad vac\xeda"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android Studio project creation",src:n(35417).Z,width:"2024",height:"1580"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure su proyecto y haga clic en ",(0,o.kt)("strong",{parentName:"li"},"Terminar"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure Android project",src:n(93279).Z,width:"2024",height:"1580"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copiar el archivo layout.xml en app > res > layout solt\xe1ndolo directamente en la carpeta dise\xf1o del proyecto")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy layout.xml file",src:n(26597).Z,width:"1642",height:"610"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deber\xeda tener eso en ese momento:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android project",src:n(95213).Z,width:"2548",height:"1916"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Haga clic en la opci\xf3n superior derecha ",(0,o.kt)("strong",{parentName:"li"},"Dividir")," para visualizar la vista previa de la plantilla as\xed como el c\xf3digo xml.")),(0,o.kt)("p",null,"Est\xe1 vac\xedo, as\xed que vamos a agregar algo de contenido."),(0,o.kt)("h2",{id:"qu\xe9-est\xe1-disponible-en-este-proyecto-inicial"},"Qu\xe9 est\xe1 disponible en este proyecto inicial"),(0,o.kt)("p",null,"Para que la vista sea desplazable, ya se incluye una vista de desplazamiento en el dise\xf1o:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n')),(0,o.kt)("p",null,"La parte que se va a duplicar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},' <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n')),(0,o.kt)("h2",{id:"a\xf1adir-una-image-view"},'A\xf1adir una "Image View"'),(0,o.kt)("p",null,"Para tener una buena visualizaci\xf3n de la imagen vamos a utilizar de nuevo un contenedor CardView. Queremos a\xf1adir un radio de esquina a la ImageView para tener un mejor dise\xf1o."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n')),(0,o.kt)("p",null,"Como puede ver, el ImageView est\xe1 insertado en el CardView. Eso permite a\xf1adirle radios de esquina."),(0,o.kt)("p",null,"La l\xednea ",(0,o.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," permitir\xe1 enlazar el valor de la imagen que se encuentra en la posici\xf3n 1 del archivo svg que se ha definido previamente."),(0,o.kt)("p",null,"La l\xednea ",(0,o.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," simplemente est\xe1 ah\xed para mostrar un marcador de posici\xf3n ImageView."),(0,o.kt)("p",null,"Aqu\xed est\xe1 el c\xf3digo de dise\xf1o completo en esta etapa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:card_view="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="DuplicateIds,HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    \x3c!-- Generated with detail form template named "Visual Contact" --\x3e\n\n    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n        <LinearLayout\n            android:layout_width="match_parent"\n            android:layout_height="match_parent"\n            android:orientation="vertical">\n\n            \x3c!-- START EDITING HERE --\x3e\n\n            <androidx.constraintlayout.widget.ConstraintLayout\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content">\n\n                <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n\n            </androidx.constraintlayout.widget.ConstraintLayout>\n\n            \x3c!--\n            THE FOLLOWING PART WILL BE DUPLICATED CARD VIEWS FOR EVERY FIELD\n            YOU DROP AT THE BOTTOM OF THE TEMPLATE\n            --\x3e\n\n            \x3c!--FOR_EACH_FIELD--\x3e\n            \x3c!-- EVERYTHING BELOW WILL BE DUPLICATED FOR EACH FIELD YOU DROP AT THE BOTTOM OF THE\n                 TEMPLATE IN THE PROJECT EDITOR --\x3e\n            <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n\n            \x3c!--END_FOR_EACH_FIELD--\x3e\n\n        </LinearLayout>\n\n    </androidx.core.widget.NestedScrollView>\n\n</layout>\n\n')),(0,o.kt)("h2",{id:"c\xf3mo-obtener-datos-en-su-formulario-detallado"},"C\xf3mo obtener datos en su formulario detallado"),(0,o.kt)("h3",{id:"image-view"},"Image View"),(0,o.kt)("p",null,"En nuestra plantilla de formulario detallado hemos utilizado ",(0,o.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,o.kt)("p",null,"Aqu\xed suponemos que la ImageView es la primera vista del svg, y su ID de vista es ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". Si fuera la tercera vista, ser\xeda ",(0,o.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," y su ID de vista ser\xeda ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,o.kt)("h2",{id:"qu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,o.kt)("p",null,"En este tutorial, hemos cubierto los conceptos b\xe1sicos para crear plantillas de formularios detallados. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del Proyecto Starter. Descargue la carpeta de la plantilla terminada:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Descargar")))}u.isMDXComponent=!0},3905:(t,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>_});var e=n(67294);function o(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t,a){if(null==t)return{};var n,e,o=function(t,a){if(null==t)return{};var n,e,o={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(o[n]=t[n]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=e.createContext({}),p=function(t){var a=e.useContext(l),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},c=function(t){var a=p(t.components);return e.createElement(l.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},s=e.forwardRef((function(t,a){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),s=p(n),_=o,m=s["".concat(l,".").concat(_)]||s[_]||u[_]||r;return n?e.createElement(m,i(i({ref:a},c),{},{components:n})):e.createElement(m,i({ref:a},c))}));function _(t,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95213:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/android-project-76fc0d360e0bc11d48b4f623531887a4.png"},93279:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},26597:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},35417:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},85641:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/xml-custom-detailform-dae0bd991a35099fdf18ae3f6a488b56.png"}}]);