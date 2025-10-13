---
id: list-form-storyboard
title: iOS Storyboard
---

Ahora es el momento de crear su interfaz iOS de formulario listado con Xcode.

Este es el resultado que queremos lograr:

![Storyboard custom listform](img/storyboard-custom-listform.png)

Para cada celda, vamos a añadir:

* Una foto de perfil
* Título
* Subtitulo

## Abrir el archivo storyboard con Xcode

Primero, abra su archivo storyboard en Xcode.

![Empty storyboard custom template](img/empty-storyboard-custom-template.png)

Está vacío, así que vamos a agregar algo de contenido.

## Añadir una "Image View"

Desde la **Object library** (la librería de objetos), arrastre y suelte una **Image View** (una vista de imagen) en una celda. Puede buscar una "Image View" en la barra de búsqueda en la parte inferior de la librería de objetos.

![Add Image View storyboard](img/add-imageview-storyboard.png)

Desde el **Size inspector** (al lado derecho del Interface Builder), defina el ancho de la imagen en 110 y su altura en 110. Luego, defina el valor de X en 8 y el valor de Y en 3.

![Image View position height and width](img/imageview-position-height-width.png)

A continuación, agregue una restricción (Leading: 8) haciendo clic en el botón ** Add New Constraints button** (en la parte inferior de la ventana del Generador de interfaz). Agregue también restricciones de ancho y alto, como se muestra:

![Image View leading space width height](img/imageview-leading-space-width-height.png)

Haga clic en el botón **Align**(en la parte inferior del Interface Builder) y marque la casilla "Vertically in Container".

![Image View align vertically](img/imageview-align-vertically.png)

Su vista Imagen ahora está bien ubicada.

![Image View final](img/imageview-final.png)

Ahora, vamos a trabajar en las etiquetas de celdas.

## Añadir etiquetas de título y subtítulo

Comencemos por **agregar una vista**. Busque "View" en la **Librería de objetos** y arrastre la vista al contenedor de celdas.

![Add View Storyboard](img/add-view-storyboard.png)

Desde el panel **Size inspector** (al lado derecho del Interface Builder), defina el ancho de la imagen en 277 y su altura en 94. Luego, defina el valor de X en 126 y el valor de Y en 10.

![View position height and width](img/view-position-height-width.png)

Para la vista de imagen, agregue cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 11, Leading: 8, Top: 11, y Bottom: 10.67) para posicionarla correctamente como se muestra a continuación:

![View contraints Storyboard](img/view-constraints-storyboard.png)

Arrastre y suelte una etiqueta en la Vista que acaba de agregar desde la Librería de objetos.

![Add label Storyboard](img/add-label-storyboard.png)

Desde el panel ** Size inspector**, defina el valor de ancho de etiqueta vista en 269 y el valor de alto en 32. A continuación, defina el valor de X en 8 y el valor de Y en 8.

**Duplique la etiqueta** y en el panel **Size inspector**, defina el valor de X en 8 y el valor de Y en 48.

![Duplicate the label](img/duplicated-label-storyboard.png)

Seleccione las dos etiquetas y añada cuatro restricciones haciendo clic en el botón **Add New Constraints** (Trailing: 0, Leading: 8, Top:, y Bottom: Multiple) como se muestra a continuación:

![Labels contraints storyboard](img/labels-contraints-storyboard.png)

Con una etiqueta seleccionada, haga doble clic en **Height constraint** para editarla.

![Label height constraint edition](img/label-height-constraint-edition.png)

Cambie la relación "Equal" por **Greater Than or Equal** para que pueda tener una altura variable (para manejar etiquetas multilíneas).

![Change relation label height constraint](img/change-relation-label-height-constraint.png)

Repita el proceso para la segunda etiqueta.

## Personalizar la etiqueta

Desde el inspector de atributos (al lado derecho de la ventana del Interface Builder), puede personalizar los colores de fuente de su etiqueta. Apliquemos el color **Dark Grey Color** a la segunda etiqueta:

![Label color dark grey](img/label-color-dark-grey.png)

También puede seleccionar el color principal de su aplicación:

![Label color background color](img/label-color-background-color.png)

Desde el inspector de atributos, también puede personalizar la fuente. Seleccione las dos etiquetas y seleccione Font > Custom > **Helvetica Neue**:

![Label font custom](img/label-font-custom.png)

Para finalizar las personalizaciones, seleccione ambas etiquetas y en la ventana del inspector ** ingrese el valor 0 en Lines**. Esto permite que el número de líneas sea ilimitado.

![Label lines number](img/label-lines-number.png)

:::nota

El Storyboard se optimiza para tener una **altura de celda variable** en función del contenido de cada celda.

:::

![Row height tableview cell](img/row-height-tableview-cell.png)

## Cómo obtener datos en sus celdas

### Image View

Seleccione su Vista imagen y vaya a **Identity inspector** > User Defined Runtime Attributes. Haga clic en el **botón +** para añadir una línea.

![User defined runtime attributes](img/user-defined-runtime-attributes.png)

* **Key Path**: comience con bindTo para activar la unión del componente. Introduzca `bindTo.record.___FIELD_1___`

* **Type**: siempre `String`

* **Value**: nombre del atributo. Introduzca `___FIELD_1_BINDING_TYPE___`

![Identity inspector storyboard](img/identity-inspector-storyboard.png)

### Etiquetas

Seleccione la primera etiqueta y agregue una línea en el área "Defined Runtime Attributes":

* **Key Path**: `bindTo.record.___FIELD_2___`

* **Tipo**: `Cadena`

* **Value**: `___FIELD_2_BINDING_TYPE___`

![Field 2 Binding](img/field-2-binding.png)

Seleccione la segunda etiqueta y agregue una línea en el área "Defined Runtime Attributes":

* **Key Path**: `bindTo.record.___FIELD_3___`

* **Tipo**: `Cadena`

* **Value**: `___FIELD_3_BINDING_TYPE___`

![Field 3 Binding](img/field-3-binding.png)

Puede cambiar las **etiquetas del storyboard** para tener una mejor visibilidad:

* Haga doble clic en la primera etiqueta para editarla e ingresar `___FIELD_2_LABEL___`
* Haga doble clic en la segunda etiqueta para editarla e ingresar `___FIELD_3_LABEL___`

![Storyboard label display names](img/storyboard-label-display-name.png)

Vaya al editor de su proyecto y seleccione su plantilla de formulario listado en la sección Formularios, luego haga clic en Crear y Ejecutar.

Este es el el resultado del simulador:

![Simulator result](img/simulator-result.png)

## Personalice su aplicación

El último paso es agregar un radio de esquina a la vista de imagen para tener un mejor diseño.

Seleccione su Vista imagen y añada las dos líneas siguientes en el área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

y

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: seleccione la casilla

![ImageView corner Radius](img/imageview-corner-radius.png)

¡Ahora puede crear su proyecto desde el editor de proyectos!

![Custom template final result](img/custom-template-final-result.png)

## ¿Qué hacer ahora?

En este tutorial, hemos cubierto los conceptos básicos para crear plantillas con iOS. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del proyecto Starter. También puede ver cómo construir [plantillas de formularios detallados](../creating-detail-forms/detail-form-template.md).

Descargue la carpeta lista de la plantilla terminada:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip">Descargar</a>
</div>




