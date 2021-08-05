---
id: forms
title: Formularios
---

La página Formularios le permite seleccionar ambos formularios Lista y detallados para cada tabla publicada. Puede seleccionar un formulario lista y un formulario detallado por tabla publicada.

El editor de 4D mobile ofrece varias plantillas con efectos de transición personalizados para generar aplicaciones móviles nuevas y modernas. Simple, las plantillas vacías se utilizan de forma predeterminada para los formularios Lista y los formularios de detallados de una aplicación.

Aquí está el desglose de esta pantalla, de arriba a abajo:

* **Formularios Lista/Formularios detallados:** permiten cambiar entre los formulario Lista y los formularios detallados para cada tabla.
* **Las tablas publicadas:** muestra todas las tablas publicadas en la sección [Estructura](structure.md).
* **Formularios:** lista de formularios disponibles. Permite cambiar entre la selección de la plantilla y la definición del contenido. En el área de definición del contenido, puede mostrar consejos que den información adicional sobre los campos del formulario.


![List form template selection](img/Forms-section-templates-selection-4D-for-iOS.png)



## Formularios lista

Cuando se selecciona una plantilla de formulario lista para una tabla, aparece la pantalla de definición del contenido. Luego puede arrastrar y soltar los campos de la lista directamente en la plantilla que se muestra a la derecha.

![List form content definition](img/Forms-section-content-definition-4D-for-iOS.png)

:::nota

En formularios lista, no se pueden añadir más campos que los incluidos en la plantilla.

:::

Most of the list forms include optional **Search** and **Section** fields. You can also enable the **barcode scanner**.


### Search

A **search** field allows to filters dynamically the list contents depending on entered characters.

#### Multi-criteria search

You can drop more than one field to the search field, in which case the field displays "Multi-criteria Search":

![multi-criteria](img/multi-criteria.png)

In this case, the app will search for entered characters in all the fields using the "OR" operator. To remove a field from the list, click on the search field's delete button to select the field(s) to remove:

![multi-criteria remove](img/multi-criteria-search-forms-section-remove-fields.png)


### Section

A section field will group and order entities in the list depending on their value for this field.



### Barcode Scanner

To activate the Barcode search, click on the magnifying glass next to the search field and select **Enable barcode scanner** option.

![Barcode Search activation](img/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

The Barcode search allows two features:

* Filtering the list form by scanning a barcode that contains a text value. It fills the Search Bar and opens the detail form if there is only one value left after filtering.
* Displaying specific list and detail forms just by scanning a barcode whose values are **URL Schemes** or **Universal Links** when the [**deep linking**](../special-features/deep-linking.md) feature is enabled.

![Barcode Search app](img/text-Qrcode-barcode-search-4D-for-iOS.gif)


## Detail forms

![Detail form template selection](img/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

As with the List Form definition, select a template and configure the fields. In detail forms, you can add as many fields as you want onto your detail form.

You have several ways to add your fields in Detail forms:

* Drag and drop a field anywhere into the rightmost view to add it and display it just after the last field added or between any other fields that are already displayed.

* Double-click on a field. Your field will be added at the end of the list.

* Right-click on an available field in the Fields table at the left and select **Add missing fields** from the contextual menu.

![Detail form content definition](img/Forms-section-detail-form-content-definition-4D-for-iOS.png)


You can reorder your fields at any moment using drag and drop in the detail form.

:::tip

If you want to try another template after dispatching your fields, just select it: previously selected fields are automatically moved for you to the new template in appropriate areas, according to the template and field types.

:::


## Galería

When you select a template in the form section, a "More" icon is available for both list and detail forms.

![More template button](img/more.png)

![More template button](img/Forms-more-button.png)

Just click on that icon to display a list of additional templates from the 4D mobile Gallery:

![Template picker more button](img/Forms-template-gallery.png)

Then, the only thing you have to do is selecting the template that suits your needs and the mobile editor will handle all the installation process. So you can directly start working on the template, as it is ready-to-use.

A github icon is displayed at the top left of a template icon in the Forms template picker to indicate that it comes from Github:

![Add template from gallery](img/indicator-template-github.png)


:::tip

The Gallery is also directly available on Github.
- [**gallery of list form templates**](https://4d-for-ios.github.io/gallery/#/type/list-detail/picker/0)
- [**gallery of detail form templates**](https://4d-for-ios.github.io/gallery/#/type/form-detail/picker/0)

:::

## Creating your own templates

If you want to customize a downloaded template or create your own templates, **several tutorials** can guide you through these tasks:

- [**Customizing a template form**](../tutorials/gallery/update-gallery-template.md)
- [**Creating list forms**](../tutorials/creating-list-forms/list-form-template.md)
- [**Creating details forms**](../tutorials/creating-detail-forms/detail-form-template.md)