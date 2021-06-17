---
id: structure
title: Structure
---

This page displays all of the tables and fields that are exposed as REST resources in the 4D database, including relation attributes (based upon many-to-one and one-to-many relations). In fact, the page displays a view similar to [ORDA's datastore](https://developer.4d.com/docs/en/ORDA/overview.html).  

![Structure section](img/Structure-section-4D-for-iOS.png)


Use this page to define a subset of your physical structure to replicate for mobile devices by selecting the specific tables and fields to publish. 

- Published tables will be automatically added as tabs of your app.
- Published scalar fields will be available when defining your [list and detail forms].
- Published relation fields (many-to-one and one-to-many) will be available when defining your [list and detail forms] and come with additional navigation features such as a Relation button.


:::note

The following tables and fields are not listed in this page:

- tables and fields that do not comply with [ORDA rules](https://developer.4d.com/docs/en/ORDA/dsmapping.html#structure-mapping).
- tables and fields whose name start with "`__`" (double underscore).

:::

## Selecting tables and fields to publish

A table is published when at least one of its fields is published. When a table is published, it is displayed in **bold**.  

To select a field to publish, click on a table name then click on the field in the rightmost list. You can also:

- press the **spacebar** to select/unselect a field
- use **Ctrl+click** to select all fields
- use **Publish** and **Publish all** from the Fields list local menu. 


### Filtering lists

When a list has the focus, you can filter its contents using the Search area and a local menu:

![Filter](img/filter.png)

- **Search** area: enter the characters to search within table or field names 
- **Sort by table name**/**Sort by field name**: sort the list by name. By default, lists are sorted by creation date
- **Only published tables**/**Only published fields**: show only tables or fields that have been selected (published)


## Supported field types

The mobile editor automatically displays the list of fields that are eligible to the mobile app, depending on their type:

![Fields](img/fields.png)

- All [4D scalar field types](https://developer.4d.com/docs/en/Concepts/data-types.html) except [BLOB](https://developer.4d.com/docs/en/Concepts/blob.html) and [Object](https://developer.4d.com/docs/en/Concepts/object.html). 
- Relation attributes (Many-to-one and One-to-many) are supported and can be selected just as fields. They have specific icons:

Many to one relation icon:  ![relation1](img/manyto1.png)

One to many relation icon: ![relationN](img/1tomany.png)

:::info

The names are based upon the relation names in the 4D Structure editor, see the [ORDA Structure mapping page](https://developer.4d.com/docs/en/ORDA/dsmapping.html#structure-mapping).

:::


## Using relations

### One to Many relations

You can include **One to Many relations** in your projects and display a list of related fields in a new page of your app.

All you have to do is:

* publishing at least one field of the target (Many) table
* publishing the relation from the source (One) table

![Drop relation in detail form](img/Structure-1-to-N-relations-4D-for-iOS.png)

Then, when your related fields are published, they can be used like any other field. So you will be able to:

* Define relations properties in the [Labels and Icons](labels-and-icons.md) page.
* Drop the One to Many relation in a Detail form from the [Forms](forms.md) page to create a link between a detail form and a related table. A Relation button will be automatically created in detail forms to go straight to the related view.

:::tip Tutorial

See the [**One to Many relations tutorial**](../tutorials/relations/one-to-many-relations) for a detailed example of One to Many relation integration in a mobile project.

:::

### Many to One relations

**Many to one relations** can be used like any other field in the app creation process. When you select a Many to One relation in the field list, you can to select which field(s) from the related table to publish in your app:

![Publish related tables](img/manyto1-tip.png)

You just need to click on the relation name, then select the field(s):

![Publish related tables](img/manyto1-select.png)

By default, all eligible fields of the related table are published. 

:::tip Tutorial

See the [**Many to One relations tutorial**](../tutorials/relations/many-to-one-relations) for a detailed example of Many to One relation integration in a mobile project.

:::

### Many to Many relations

Using the Structure page, you can publish Many to One and One to Many relations from your parent Many to One relations. It means that you can display Many to Many relations in your app and move directly from a List form to another List form.


:::tip Tutorial

See the [**Relation interactions**](../tutorials/relations/relation-interactions) for a detailed example of Many to One relation integration in a mobile project.

:::



## Incremental reload

### Allow structure adjustments

For the best user experience, 4D for iOS and 4D for Android implement an automatic feature for the incremental reload of data. It means that only new, modified or deleted data from the database will be updated to the app. This optimization enhances drastically loading time.

To enable this optimization, 4D for iOS and 4D for Android need the following structure elements:

* A `__DeletedRecords` table to store deleted records
* and `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

You can let the 4D mobile editor do all the work for you and add the necessary structure elements: just select **Allow 4D to make necessary structure adjustments for an optimized mobile data update** option. 

:::note

These optimizations are required for both local and server databases.

:::

### Pull to refresh!

On the mobile app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can now reset your app data and find information about your app. 

:::note

When an important maintenance operation is performed on the database side (Recover by tag / Restoration / Compacting) a Full reload is necessary on the mobile app. In this case, the admin shall notify mobile app users.  

::: 
