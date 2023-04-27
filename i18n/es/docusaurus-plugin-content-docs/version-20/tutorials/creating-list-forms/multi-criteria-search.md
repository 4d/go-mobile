---
id: multi-criteria-search
title: Búsqueda multicriterios
---


Esta sección le mostrará cómo activar la [búsqueda por criterios múltiples](../../project-definition/forms#multi-criteria-search) en sus propias plantillas.

:::info

La función de búsqueda multicriterio está activada por defecto en todas las plantillas generadas por el editor móvil.

:::

## Template svg file

Para activar esta funcionalidad en sus propias plantillas, debe modificar las siguientes líneas en su archivo template.svg de:

```xml
<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

a:

```xml
<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>

```

¡Listo! ¡Listo! ¡Listo! ¡Listo! ¡Listo! La clase es lo único que necesita modificar para que los criterios de búsqueda múltiples estén activos.

## Editor de proyecto

A continuación, puede ir al editor del proyecto y soltar varios campos en el área de búsqueda de formulario lista.

![Multi-criteria search in the project editor](img/multi-criteria-search-forms-section.png)

Haga clic en el botón de eliminar campo de búsqueda para modificar la lista de campos asociados.

Aparecerá un menú para permitirle **eliminar campos específicos** o **eliminar todos los campos **, según los criterios en los que desee basar su búsqueda.

![Modify Multi-criteria search fields](img/multi-criteria-search-forms-section-remove-fields.png)

¡Felicitaciones! ¡Felicitaciones! ¡Felicitaciones! Acaba de agregar 2 acciones a su aplicación iOS. ¡Felicitaciones! ¡Felicitaciones! ¡Ahora puede basar su(s) búsqueda(s) en múltiples campos en su aplicación móvil!
