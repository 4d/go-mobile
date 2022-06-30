---
id: one-to-many-title-definition
title: Uno a Muchos - Título
---

### Definir un título para sus vistas de destino

Para realizar un seguimiento de la vista de la que proviene en su aplicación, 4D for iOS le permite definir un Título personalizado.

En este tutorial, utilizaremos el siguiente proyecto:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip">Starter project</a>
</div>

Ahora, vaya directamente al **menú Abrir > Proyecto móvil...**, seleccione *Time Keeper* y vaya a la sección **Etiquetas e iconos**.

Desde aquí, abra la pestaña de relación para definir el título de relación *tasks* e ingrese la siguiente línea en la columna **Titles**:`%Name% tasks`

![Labels & Icons relation title](img/labels-icons-title-definition.png)

Como habrá adivinado, esto le permitirá mostrar el **valor del nombre del empleado** en la vista de destino, en función del formulario detallado Employee en el que estaba anteriormente.

![Labels & Icons relation title](img/relations-title-definition.png)

Esta es una excelente manera de hacer un seguimiento de la vista de donde viene.

¡Ahora veamos cómo puede crear y agregar su propio botón Relation en el próximo tutorial!