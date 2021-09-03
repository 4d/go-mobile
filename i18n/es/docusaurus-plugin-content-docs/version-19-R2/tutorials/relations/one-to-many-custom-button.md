---
id: one-to-many-custom-button
title: Uno a Muchos - Botón personalizado
---

Como hemos visto con todos los tutoriales anteriores, el editor móvil 4D le da la libertad de crear muchos elementos personalizados.

En cuanto a las plantillas y formatos personalizados, puede crear botones relaciones personalizados.

Para esto, ¡Nada más simple! Solo tiene que soltar su botón personalizado en su plantilla personalizada.


Comencemos descargando el proyecto Starter que incluye:

* una base de datos con su proyecto móvil
* un botón Relation estándar

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip">Starter project</a>
</div>

## Integrar un botón

El primer paso es incluir el botón button.xib en su plantilla personalizada para que 4D for iOS pueda utilizarlo.

Para utilizar el botón, sólo tiene que soltarlo en la carpeta `YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact`.

![Custom button path](img/Relation-custom-button-path.png)

¡El primer paso está listo!

## Modificar el botón

Abrir el archivo .xib con Xcode.

Debe tener un aspecto como este:

![Custom relation button](img/Relations-custom-button-relationButton-4D-for-iOS.png)

Y desde el inspector de atributos, puede cambiar, por ejemplo:

* los colores y las fuentes
* el estilo del botón
* el tamaño del botón, etc.

¡Cambiemos el color del botón y la fuente de la etiqueta del botón!

### Colores y fuentes personalizados

Seleccione el botón y cambie el color y la fuente desde el inspector de atributos.

Para el fondo, seleccionemos Label Color para obtener el mejor contraste en los modos Claro y Oscuro.

Para el color de fuente, seleccione el System background color con una fuente helvética Neue Medium.

Finalmente, no olvide seleccionar el color System background color para aplicar este color al icono del botón.

![Custom relation button](img/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)

Debería obtener este resultado en su simulador en modo Dark y Light:

![Custom relation color and font](img/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)

### Esquinas redondeadas de botones

¡Agreguemos algunas esquinas redondeadas al relationButton!

Para hacerlo, abra el Identity Inspector.

Seleccione su Botón y añada las dos líneas siguientes en el área User Defined Runtime Attributes:

* **Key Path**: `cornerRadius`

* **Type**: `Number`

* **Value**: `12`

y

* **Key Path**: `layer.masksToBounds`

* **Type**: `Boolean`

* **Value**: seleccione la casilla

![Custom relation color and font](img/Custom-relation-button-Xcode-round-corners.png)

¡Ahora puede crear su proyecto desde el editor de proyectos!

El resultado debe tener un aspecto como este:

![Custom relation color and font](img/Custom-relation-button-round-corners.png)

### Tamaño y restricciones

Tenga en cuenta que si **añada restricciones** a su botón, también tendrá que modificar el archivo xib xml para **agregar las TAGS** como para las plantillas de formularios detallados personalizados. Esto permite que el botón se duplique correctamente cuando hay varias relaciones disponibles en la misma vista detallada.

¡Qué conveniente, ya que planeamos agregar algunas restricciones!

#### Agregar restricciones

Para este tutorial, solo vamos a agregar una altura de botón porque queremos que se vea más grande en la pantalla.

Paso 1. Primero seleccione la vista y cambie la altura de 123 a 40

![Button view height](img/Button-view-height.png)

Paso 2. Haga doble clic en **Top Space Constraint** y cambie su valor de 8 a 0

![Top Space constraint](img/Top-Space-constraint.png)

Paso 3. Haga lo mismo con **Bottom Space Constraint** y cambie su valor de 8 a 0

Debe obtener esto:

![Custom  button constraints](img/Custom-button-constraints.png)

Paso 4. Añada una restricción de altura de 40

![Button height constraint](img/Button-height-constraint.png)

Debe obtener esto:

![Horizontal in container](img/Custom-relation-button-constraints.png)

Para indicar al editor de proyecto que todos los elementos incluidos en esta vista se duplicarán, debemos agregar un TAG a cada elemento y a cada restricción.


### Añadir TAGS

Cada elemento del storyboard tiene un identificador de objeto. Por ejemplo, si selecciona Field View 2 y va al **Identity inspector**, verá sus identificadores de objetos:

![Object ID Storyboard](img/Custom-button-object-id-storyboard.png)

El proceso es un poco complicado... ¡Comencemos por abrir el archivo storyboard con su editor de código favorito!

#### Agregar un tag a la restricción de altura

Paso 1. Selecciónelo del Storyboard para obtener la identificación del objeto

![Horizontal constraint object ID](img/Horizontal-constraint-object-ID.png)

Paso 2. Busque esta ID en el archivo xml y remplácelo por **TAG-RL-007** (un Tag que aún no se utiliza).

Paso 3. Guarda el archivo xml

![Horizontal constraint xml file](img/Horizontal-constraint-xml-file.png)

Paso 4. Concéntrese en el Storyboard para verificar si la restricción se ha actualizado correctamente

![Horizontal object ID updated](img/Horizontal-object-id-updated.png)

¡Y listo! Su botón ahora es completamente duplicable si tiene más de un botón de relación a mostrar...

## ¿Qué hacer ahora?

En este tutorial, hemos cubierto los conceptos básicos para crear botones Relación. Haga clic en el botón Final Project abajo para descargar el botón de relaciones personalizado.

Descargar el proyecto terminado:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip">Descargar</a>
</div>