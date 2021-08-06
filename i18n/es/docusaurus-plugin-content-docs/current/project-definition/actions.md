---
id: actions
title: Actions
---

Esta sección le permite:

* crear acciones para ejecutar código 4D desde su aplicación iOS.
* definir y añadir parámetros a sus acciones.

## En el editor de proyectos

### Cree su acción

Puede crear una nueva acción haciendo clic en el botón + en la parte inferior de la tabla Acciones. Aparecerá una nueva línea en la tabla.

A continuación, deberá definir lo siguiente:

* **Nombres:** define el nombre de la acción a utilizar en el método base [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) para lanzar su código 4D.
* **Iconos:** seleccione un icono para su acción de su librería de iconos. También puede agregar su propio icono siguiendo este [tutorial]`(using-icons.html)`.
* **Etiquetas cortas y largas: **las etiquetas para las acciones que se mostrarán en su aplicación.
* **Tabla:** seleccione la tabla en la que desea aplicar la acción.
* **Alcance:** seleccione si desea aplicar la acción en una **entidad** o en una **tabla**.

![Action section](img/Actions-section-4D-for-iOS.png)

### Añada parámetros a su acción

Puede añadir los **parámetros de acción** y **editar** datos directamente desde su aplicación.

Para cada parámetro, puede editar las siguientes propiedades:

* Nombre
* Etiqueta larga
* Etiqueta corta
* Formato
* Restricciones de entrada (definir valores mínimos o máximos)
* Placeholder
* Definición de un campo obligatorio
* Valor por defecto

![Action parameters](img/Actions-parameters-4D-for-iOS.png)

Puede cambiar el orden de los parámetros con solo arrastrar y soltar.

Estos son los diferentes **formatos** que puede seleccionar para un parámetro:

<table>

<tr>
<th colspan="2"  style={{textAlign: 'center'}}>TEXTO</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Texto</td><td>Poner en mayúscula la primera letra de una cadena</td>
</tr><tr>
<td>Correo electrónico</td><td>Teclado iOS optimizado para la entrada de correo electrónico</td>
</tr><tr>
<td>Número de teléfono</td><td>Teclado iOS para ingresar números de teléfono.</td>
</tr><tr>
<td>Cuenta</td><td>Teclado iOS optimizado para la entrada de correo electrónico</td>
</tr><tr>
<td>Contraseña</td><td>Optimizado para manejar contraseñas</td>
</tr><tr>
<td>URL</td><td>Teclado iOS optimizado para la entrada del URL</td>
</tr><tr>
<td>Código postal</td><td>Teclado iOS optimizado para la entrada del código postal</td>
</tr><tr>
<td>Área de texto</td><td>Incluye varias líneas de texto en un solo campo</td>
</tr><tr>
<td>Código de barras</td><td>Extraer el valor asociado al código de barras. Formatos soportados: EAN8, EAN13, Code 39, Code 93, Code 128, QR Code, UPC, PDF417</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>NÚMERO</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Número</td><td>Números con decimales</td>
</tr><tr>
<td>Entero</td><td>Números sin decimales</td>
</tr><tr>
<td>Científica</td><td>Notación científica</td>
</tr><tr>
<td>Porcentaje</td><td>Notación en porcentaje</td>
</tr><tr>
<td>Nombre en letras</td><td>Convierte los números en cadenas</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>FECHA</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Fecha</td><td>Nov 23, 1937</td>
</tr><tr>
<td>Fecha corta</td><td> 11/23/37</td>
</tr><tr>
<td>Fecha larga</td><td>Noviembre 23, 1937</td>
</tr><tr>
<td>Fecha completa</td><td>Martes, 23 de noviembre 1937</td>
</tr><tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>HORA</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Hora</td><td>3:30 PM</td>
</tr><tr>
<td>Duración</td><td>2 horas 30 minutos</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>BOOLEANO</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descripción</th>
</tr><tr>
<td>Booleano</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"/></td>
</tr><tr>
<td>Marca de verificación</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"/></td>
</tr>

<tr>
<td colspan="2"></td>
</tr>
<tr>
<th colspan="2" style={{textAlign: 'center'}}>IMÁGENES</th>
</tr>
<tr>
<td>Firma</td><td>Permitir firmar con el dedo</td>
</tr>

</table>

## Acciones predefinidas

Los proyectos 4D mobile incluyen las siguientes acciones predefinidas para gestionar el contenido de su aplicación:

* Acción de edición
* Acción de añadir
* Acción de eliminar
* Compartir
* Ordenar

### Añadir acción

Los proyectos móviles 4D simplifican el proceso de creación de **acciones de adición**.

Lo único que debe hacer es seleccionar la opción **Acción de adición para**, accesible desde el **botón + ** en la parte inferior de la tabla Acciones.

![Add actions](img/Actions-Add-action-4D-for-iOS.png)

Luego **seleccione la tabla** que quiere asociar a la acción añadir.

Esto **creará automáticamente** todos los parámetros en el Editor de proyectos. En la aplicación generada, esto le permitirá editar cada valor de campo.

Para ese tipo de acción, verá que todas las **propiedades** ya están completadas para su conveniencia al lado derecho de la lista de parámetros.


### Acción de edición

La creación de **acciones de edición** sigue el mismo proceso que las acciones de adición, con la excepción de que no podrá definir valores predeterminados desde la sección Acciones.



### Acción de eliminación

La creación de **acciones de eliminación ** sigue el mismo proceso que las acciones de edición. La única diferencia es que esta acción le permite eliminar una entidad.

Para crear una acción de eliminación, seleccione la opción **Acción de eliminación para**, accesible desde el **botón + ** en la parte inferior de la tabla Acciones.

Este tipo de acción debe utilizarse con precaución.

![Delete actions](img/Actions-Delete-action-4D-for-iOS.png)

### Acción compartir

La selección de **Compartir acción** permitirá a sus usuarios móviles compartir contenidos con otros usuarios. Sólo tiene que seleccionar el alcance:

- **entidad**: para compartir el contenido de un formulario detallado
- **tabla**: para compartir un formulario lista

Ver la página [Deep Linking](../special-features/deep-linking.md) para más detalles.

### Acción ordenar

**Acciones Ordenar** son útiles para:

- definir un orden por defecto para los formularios lista de la tabla
- permitir a los usuarios móviles elegir el orden de clasificación de la lista

Cuando se crea una acción de ordenación para una tabla, es necesario seleccionar el primer campo sobre el que se realizará la ordenación:

![Docusaurus](img/sort-select.png)

El campo se añade a la lista de criterios de ordenación. Se define un orden ascendente por defecto, pero puede cambiarlo utilizando el menú **Orden de clasificación**.

Puede ordenar las entidades en más de un campo. Cada campo que ordena se denomina como nivel de ordenación. Por ejemplo, los resultados de una ordenación ascendente de dos niveles de los campos `lastName` y `firstName` producirían una lista como esta:

```4d
Aardvark, Anthony
Aardvark, Artemis
Aardvark, Arthur
...
Zygote, Elena
Zymosian, Elmer
```

Para añadir uno o más niveles de ordenación en la lista Criterios de ordenación, seleccione el botón **+** bajo la lista y configure cada nivel:

![sort](img/ascending.png)


#### Menú de ordenación en la aplicación móvil

Cuando se define más de una acción de ordenación para una tabla, los usuarios móviles se benefician automáticamente de un menú **de ordenación**. Contiene todas las acciones de ordenación predefinidas:

![sort](img/sort-go-mobile.gif)


> Cuando sólo se define una acción de ordenación para una tabla, el menú **ordenación** no se muestra en la parte de la aplicación móvil.

### On Mobile App Action

El método base [On Mobile App Action]`(https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html)` está disponible para llamar a todos sus métodos 4D.

Después de crear todas sus acciones, simplemente haga clic en el botón Crear de la tabla Acciones para generar automáticamente un bloque de código *Case of* que incluya todos los nombres de sus acciones en el método *On Mobile App Action*.

:::nota notas

- Puede refrescar la selección después de ejecutar una acción utilizando `$out.dataSynchro:=True`.
- Puede notificar al usuario de la aplicación cuando se ha ejecutado una acción utilizando `$out.statusText:="Message you want to display"`.
- También puede decidir forzar el cierre del formulario de edición utilizando `$out.close:=True`.

:::

## Acciones en modo sin conexión

El usuario de una aplicación puede redactar, almacenar y poner en cola solicitudes de acción, incluso si está trabajando sin conexión (añadir el número de teléfono de un cliente, subir una foto, imprimir una factura o un presupuesto, borrar una dirección, etc.).  Todas estas tareas se colocan en la lista de acciones pendientes hasta que la red sea accesible. Una vez que el usuario está en línea, todas las acciones pendientes se sincronizan sistemáticamente, se ejecutan y son visibles en la lista de acciones completadas.

Las tareas pendientes pueden visualizarse y abrirse desde:

•   *La pantalla de configuración*

Muestra un resumen y un historial de todas las tareas pendientes y completadas.

![Action section](img/screen1.png)

•   *La Lista & Formularios detallados*

Muestran todas las tareas relacionadas con la tabla o con la entidad que se está viendo en ese momento.

![Action section](img/screen2.png)

:::nota notas

- La acción predefinida "Compartir" sólo es ejecutable en línea
- Las acciones son editables mientras están pendientes, pero ya no se pueden modificar una vez que pasan al modo "Completado".

:::

### Actualizar las tareas pendientes que han fallado

Debido a la lógica de negocio de su servidor, algunas tareas podrían ser rechazadas. Para los usuarios de móviles, es posible entonces editar y reintentar el envío de las tareas pendientes correspondientes. Para ello, puede mostrar un texto de estado que describa, en el historial de acciones "Completas", el motivo del fallo. Por ejemplo, puede rechazar una acción enviada por un usuario móvil al servidor e informarle que la operación ha fallado. En ese caso, puede definir el valor de `success` como `False` y poner un mensaje en `statusText`, como se indica a continuación:

 ```4d
 $response:=New object("success"; False; "statusText"; "Operación fallida"))
 ```
 Incluso puede añadir algunos errores por parámetros de acción para el parámetro `alphaField`, por ejemplo:

  ```4d
$response.errors:=New collection(New object("parameter"; "alphaField"; "message"; "El campo Alfa debe contener un valor válido")
  ```


## iOS app Side

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Table List forms

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](img/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](img/ListForm-table-action-tableview.png)

:::tip

Actions will be displayed in the same order as defined in the Action section.

:::

### Collection List forms

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](img/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](img/ListForm-table-action-collectionview.png)

### Detail forms

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](img/Detailform-final.png)

### Edition forms

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](img/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous field using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## Where to go from here?

* A [tutorial]`(actions-getting-started.html)` is available to guide you through the **action definition process**.

* Another [tutorial]`(action-custom-template.html)` will guide you through the **action TAG integration** for custom templates.

* A final [tutorial]`(action-parameters.html)` will guide you through the **action parameters definition**.
