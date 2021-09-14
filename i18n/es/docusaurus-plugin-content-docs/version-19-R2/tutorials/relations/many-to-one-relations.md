---
id: many-to-one-relations
title: Many to One relations
---


Este tutorial le mostrará lo fácil que puede ser incluir relaciones Muchos a uno en proyectos móviles.

:::nota

En este tutorial, utilizaremos los nombres de las relaciones entre sus tablas. Dar nombres de enlaces descriptivos, puede facilitar la definición de la estructura de su proyecto.

:::

Comencemos descargando el proyecto Starter:

<div className="center-button">
<a className="button button--primary" href="https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip">Starter project</a>
</div>

Aquí queremos mostrar la categoría de cada tarea en el formulario detallado de su aplicación generada. Para ello, abra el **StarteriOSProject** desde **Open > Mobile Project...**

Luego diríjase a la sección Structure y seleccione la **tabla Task **.

### Structure section

* Puede constatar que el **enlace TaskCategory** está subrayado

* Al hacer clic en él, se mostrarán los campos disponibles a través de esta relación

* Seleccione el **campo Name**

![Select link from structure section](img/select-link-from-structure.png)

* Este campo funcionará como cualquier otro campo durante el resto del proceso de creación de la aplicación

* También puede filtrar el contenido de su aplicación utilizando campos relacionados, de la sección Datos. Para ello, introduzca `TaskCategory.Name != 'Personal'` en el campo Filter query para excluir las tareas personales.

 ![Related field in Forms section](img/Related-field-from-Data-section.png)

* Luego puede seleccionar un **ícono** y los **formatos** y definir las **etiquetas cortas y largas** en la sección Etiquetas e iconos

![Related field from Labels and Icons section](img/related-field-from-labels-icons.png)

* Vaya a la sección Formularios y arrastre el campo en el formulario detallado Tasks

![Related field in Forms section](img/related-field-forms.png)

* Build and Run

¡Su campo relacionado debe aparecer en el formulario detallado de su aplicación!

![Related field in Forms section](img/final-result-n-to-one-relations.png)

