---
id: relation-interactions
title: Interacciones entre relaciones
---

Los proyectos móviles 4D permiten añadir una interacción muy agradable a sus aplicaciones. Por ejemplo, podrá publicar una relación de Uno a Muchos y de Muchos a Uno desde [Relación muchos a uno](many-to-one-relations.md).

# Editor de proyecto

## Structure section

Desde la sección de estructura, podrá publicar relaciones de Muchos a Uno muy fácilmente. Esto permitirá mostrar, por ejemplo, la relación Muchos a Muchos en su aplicación iOS.

![Publish relations from Structure section](img/structure-section.gif)

## Sección Etiquetas e Iconos

Desde la sección Etiquetas e Iconos, podrá personalizar la etiqueta de su botón de relación.

### Obtener el número de registros

Una nueva y gran funcionalidad está disponible para mostrar los números de registro que se mostrarán haciendo clic en una relación Uno a Muchos.

Para ello, basta con añadir %length% en su etiqueta de relación corta o larga para una relación Uno a Muchos.

![length parameter](img/icons-labels-length-parameter-relation.png)

## Forms section

### Añada cualquier relación donde desee

Cualquier tipo de relación se puede soltar en formularios listados y detallados para añadir interacciones y crear una aplicación más dinámica que nunca.

![Drop relations list and detail forms](img/drop-relation-list-detail-form.gif)

### Haga que su campo sea cliqueable

En la sección de formularios, podrá hacer que sus campos sean cliqueables soltando la relación sobre un campo en los formularios listados y en los formularios detallados.

![Clickable fields](img/clickable-fields-relation.gif)


# Aplicación generada

Estas mejoras le permitirán añadir interacciones a su aplicación:

* Pasar de un formulario listado a otro formulario listado en lugar de abrir un formulario detallado para acceder a otro formulario listado.

En este ejemplo accedemos a la lista de pedidos desde la lista de Pedidos haciendo clic en una relación Uno a Muchos desde el formulario Listado de Clientes.

![Many to many relation](img/many-to-many-relations.gif)

* Mostrar relación en los formularios listados para acceder a los formularios detallados relacionados.

En este ejemplo accedemos al formulario detallado del cliente, a la lista de pedidos y al formulario detallado de los pedidos.

![Many to One relation](img/many-to-one-relations.gif)

* Haga que su campo sea cliqueable añadiendo una relación N a Uno y muestre el número de registros gracias a %length%.

En este ejemplo se muestra el número de productos para cada relación Uno a Muchos en el formulario listado de Categorías.

![length for one to many](img/length-for-one-to-many.png)



