---
id: detail-form-template-storyboard
title: iOS Storyboard
---

Ahora es el momento de crear su interfaz iOS de formulario detallado con Xcode.

Este es el resultado que queremos lograr:

![Storyboard custom detailform](img/storyboard-custom-detailform.png)

For this template, we're going to add a:

* Una foto de perfil en el encabezado
* Un campo a duplicar

## Abrir el archivo storyboard con Xcode

Primero, abra su archivo storyboard en Xcode.

![Empty storyboard custom template](img/empty-storyboard-custom-detailform-template.png)

It's quite empty, so let's add some content!

## Añadir un "Scroll View"

Para que nuestro formulario detallado sea desplazable, el primer paso es arrastrar y soltar una "Scroll View" (vista de desplazamiento) desde la **Librería de objetos**.

![Add Scroll View Storyboard](img/add-scrollview-storyboard.png)


Desde el **Inspector de tamaño** (en el lado derecho de la ventana del Interface Builder), defina el valor del Scroll vista en 359 y el valor de altura en 667. A continuación, defina el valor de X en 8 y el valor de Y en 0.

![Scroll View position height and width](img/scrollview-position-height-width.png)


Luego, agregue cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 8, Leading: 8, Top: 0, y Bottom: 0) como se muestra a continuación:

![Scrollview Constraints](img/scrollview-constraints.png)

## Añadir una "Vertical Stack View"

Arrastre y suelte una "Vertical Stack View" desde la **librería de objetos** a la "Scroll view". Desde el **Size inspector** (al lado derecho del Interface Builder), defina el valor de ancho en 359 y el valor de alto en 202. A continuación, defina el valor de X en 0 y el valor de Y en 8.

![Add stackview Storyboard](img/add-vertical-stackview-storyboard.png)

Dado que el ancho y el alto del "Stack View" están definidos por los elementos que se encuentran dentro de ella, configuraremos el tamaño y las restricciones más adelante.

## Añadir las vistas en el Stack Views

Arrastre y suelte una vista de la **librería de objetos** en la Stack View que acaba de agregar a su storyboard. Llamémosla **Field View 1**.

![Add Field View 1](img/add-view1-storyboard.png)

Luego arrastre y suelte otra vista de la **Librería de objetos** directamente en el Document Outline al mismo nivel que Field View 1 (para integrarla en la Stack View) y llámela **Field View 2**.

![Add Field View 2](img/add-view2-storyboard.png)


Para agregar espacio entre las vistas, seleccione su Stack View y defina el valor de espaciado en 8 (en el Attributes Inspector).

![Stackview spacing](img/stackview-spacing.png)

Seleccione **Field View 1** y **Field View 2** y defina, en el **Size inspector** (a la derecha del Interface Builder), el valor de ancho en 359 y de alto en 97.

![views position height and width](img/views-position-height-width-storyboard.png)

Seleccione **Field View 1** y añada tres restricciones haciendo clic en el botón **Add New Constraints button** (Trailing: 0, Leading: 0 y Top: 0):

![Field Views constraints](img/fieldView-1-Field-View-2-constraints.png)

Para que los "Stack View" y "Scroll View" tengan el mismo ancho, debe agregar un restricción:

Presione **Ctrl** y arrastre la vista Pila a la vista Desplazamiento. Cuando suelte el botón del ratón, el Interface Builder muestra un menú con una lista de posibles restricciones. Seleccione "Equal Width".

![Stack View Equal Width](img/stackview-equal-width-scrollview.png)

Luego, agregue cuatro restricciones con la Stack View haciendo clic en **Add New Constraints** (Trailing: 0, Leading: 0, Top: 8, y Bottom: 0) como se muestra a continuación:

![Stackview constraints](img/stackview-constraints.png)

Esto es lo que verá cuando se agreguen restricciones:

![Stackview final constraints](img/stackview-constraints-final.png)

Ahora que tiene dos vistas en su Stack View y ha definido restricciones, concentrémonos en Field View 1.

## Añada una Image View al Field View 1

Desde la **Object library** (la librería de objetos), arrastre y suelte una **Image View** (una vista de imagen) en Field View 1.

![Add Image View storyboard](img/add-imageview-storyboard.png)

Desde el **Size inspector** (al lado derecho del Interface Builder), defina el valor del ancho del Image View en 359 y su altura en 97. A continuación, defina el valor de X en 0 y el valor de Y en 0.

![Image View position height and width](img/imageview-position-height-width.png)

Luego, agregue cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 0, Leading: 0, Top: 0, y Bottom: 0) como se muestra a continuación:

![Image View constraints](img/imageview-constraints.png)

En el **Size inspector**cambie el valor **Default** del intrínseco Size por **Placeholder**.

![Intrinsic size Image View](img/intrinsic-size-imageview.png)

## Añadir las etiquetas al Field View 2

### Etiqueta de título

En la **librería de objetos**, arrastre y suelte una **Etiqueta ** en Field View 2  y defina el valor de Ancho en 343 y el valor de Alto 22. A continuación, defina el valor de X en 8 y el valor de Y en 8.

![Add label](img/add-label1-storyboard.png)

Haga doble clic en la etiqueta y asígnele el nombre "`___FIELD_LABEL___`". Luego, en el **attribute inspector**, seleccione la fuente **Helvetica Neue Light 18.0** y el color **BackgroundColor**:

![Title label font and color](img/title-label-font-and-color.png)

### Etiqueta de contenido

Duplique la etiqueta Título y defina el ancho de etiqueta duplicado en 339 y el valor de alto en 44. Luego, defina el valor de X en 12 y el valor de Y en 37.

![Add label](img/add-label2-storyboard.png)

Haga doble clic en la etiqueta y asígnele el nombre "`<___FIELD_LABEL___>`". Luego, en el **attribute inspector**, seleccione la fuente **Helvetica Neue Light 20.0** y el color **Back Color**:

![Content label font and color](img/content-label-font-and-color.png)

Seleccione las etiquetas Contenido y Título y agregue cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 8, Leading: Multiple, Top: Multiple, y Bottom: Multiple) como se muestra a continuación:

![Title and Content labels constraints](img/titlelabel-contentlabel-contraints.png)

¡Ya ha terminado la parte de los elementos gráficos! Todas sus restricciones están bien definidas.

## Cómo obtener datos en sus celdas

### Image View
Seleccione su Vista imagen y vaya a **Identity inspector** > User Defined Runtime Attributes. Haga clic en el **botón +** para añadir una línea.

![User defined runtime attributes](img/user-defined-runtime-attributes.png)

* **Key Path**: comience con bindTo para activar la unión del componente. Introduzca `bindTo.record.___FIELD_1___`

* **Type**: siempre `String`

* **Value**: nombre del atributo. Introduzca `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](img/identity-inspector-storyboard.png)

### Etiquetas

Para la **primera etiqueta**, vamos a agregar varias líneas principalmente para mostrar iconos:

![Label1 User Defined Runtime Attributes](img/label1-user-defined-runtime-attributes.png)

También hay que definir la Clase como `IconLabel` y verificar las casilla de selección **Inherit Module From Target** como podemos ver a continuación:

![Label1 Custom Class](img/label1-custom-class.png)

Seleccione la **segunda etiqueta** y agregue una línea en el área "Defined Runtime Attributes":

* **Key Path**: `bindTo.record.___FIELD___`

* **Tipo**: `Cadena`

* **Valor**: `___FIELD_BINDING_TYPE___`

![Label2 User Defined Runtime Attributes](img/label2-user-defined-runtime-attributes.png)

## Añadir las TAGS a las celdas a duplicar

Field View 2 incluye los elementos que se duplicarán para que pueda tener tantos campos como defina en el editor del proyecto.

Cada elemento del storyboard tiene un identificador de objeto. Por ejemplo, si selecciona Field View 2 y va al **Identity inspector**, verá sus identificadores de objetos:

![Object ID Storyboard](img/object-id-storyboard.png)

Para indicar al editor del proyecto que todos los elementos incluidos en esta vista se duplicarán, debemos agregar un TAG a cada elemento y a cada restricción.

El proceso es un poco complicado... ¡Comencemos por abrir el archivo storyboard con su editor de código favorito!

### Field View 2

* Seleccione **Field View 2** y obtenga sus identificadores de objeto del Identity Inspector (en el lado derecho de la ventana del Interface Builder). En nuestro proyecto, Field View 2 ID es: **SiX-3H-lNB**.

* Busque este ID en el código xml del storyboard y reemplácelo con **TAG-FD-001** cada vez que aparezca. Como puede ver, este ID de objeto se menciona varias veces, así que sea cuidadoso.

![Storyboard xml](img/storyboard-xml.png)

Guarde el archivo xml del storyboard. Como puede ver, el ID de objeto de Field View 2 ha cambiado en el storyboard en Xcode:

![Field View 2 Object ID](img/field-view-2-object-id.png)

### Primera etiqueta

* Ahora, obtenga el ID del objeto **primera etiqueta** del Identity Inspector y sustitúyalo por **TAG-FD-002** cada vez que aparezca en el código xml del storyboard.

![Label 1 Object ID](img/label1-object-id.png)

Lista la primera etiqueta.

### Segunda etiqueta

* Ahora, obtenga el ID del objeto de la** segunda etiqueta ** del Identity Inspector y sustitúyalo por ** TAG-FD-003 ** cada vez que aparezca en el código xml del storyboard.

![Label 2 Object ID](img/label2-object-id.png)

¡Listo!

### Restricciones

Ambas etiquetas tienen restricciones que también necesitamos identificar:

![Tag constraints](img/duplicated-constraints.png)

Como para View Field 2 y la etiqueta, obtenemos todos los identificadores de objetos de **7 Constraints** desde el Identity Inspector y los reemplazamos con: **TAG-FD-004**, **TAG-FD-005**, **TAG-FD-006**, **TAG-FD-007**, **TAG-FD-008**, **TAG-FD-009** y **TAG-FD-010**.

Vaya al editor de su proyecto y seleccione su plantilla de formulario detallado en la sección Formularios, luego haga clic en Crear.

![Custom detail template forms](img/custom-detail-template-forms.png)

¡No está mal para un primer intento!

![iPhone Demo](img/iphone-demo.png)

¡Field View 2 ha sido duplicado bien! A ver si podemos hacer esta aplicación un poco más interesante.

### Personalice su aplicación

Vamos a agregar un borde redondeado a la Image View, así como a Field View 2.

Seleccione su Vista imagen y añada las dos líneas siguientes en el área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

y

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: seleccione la casilla

![iPhone Demo](img/imageview-corner-radius.png)

A continuación, seleccione Field View 2 y agregue lo siguiente:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

![iPhone Demo](img/fieldview2-corner-radius.png)

¡Ahora puede crear su proyecto desde el editor de proyectos!

![Custom template final result](img/custom-template-final-result.png)

## Where to go from here?

In this tutorial, we've covered the basics for creating detail form templates. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del proyecto Starter.

Download the completed template folder:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip">Download</a>
</div>
