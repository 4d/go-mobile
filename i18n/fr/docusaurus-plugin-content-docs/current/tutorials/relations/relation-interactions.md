---
id: relation-interactions
title: Relation interactions
---

4D mobile projects allow to add very nice interaction into your apps. For instance you will be able to publish One to Many and Many to One relation from [many to one relation](many-to-one-relations.md).

# Project editor

## Structure section

From the structure section, you will be able to publish relations from Many to One relation very easily. This will allow to display for example Many to Many relation into your iOS app.

![Publish relations from Structure section](img/structure-section.gif)

## Labels & Icons section

From the Labels & Icons section, you will be able to customize your relation button label.

### Getting the number of records

A new great feature is available to display record numbers that will be displayed clicking on a One to Many relation.

For that just add %length% into your relation short or long label for a One to Many relation.

![length parameter](img/icons-labels-length-parameter-relation.png)

## Forms section

### Add any relation anywhere you want

Any kind of relation can be dropped in List and Detail form to add interactions and create more dynamic app as ever before !

![Drop relations list and detail forms](img/drop-relation-list-detail-form.gif)

### Make your field clickable

In the form section, you will be able to make your fields clickable droping relation on a field in List forms and Detail forms.

![Clickable fields](img/clickable-fields-relation.gif)


# Generated app

Those improvements will allow you to add interactions into your app :

* Move from a list form to another list form instead of opening a detail form to access to another list form.

In this example we access to the orders list from the Orders list clicking on a One to Many relation from the Customers List form.

![Many to many relation](img/many-to-many-relations.gif)

* Diplay relation in List Forms to access to related detail forms.

In this example we access to the Customer detail form the Orders List and Orders Detail form.

![Many to One relation](img/many-to-one-relations.gif)

* Make your field clickable adding a N to One relation and display records number thanks to %length%.

In this example the number of product for each One to Many relation in the Category List form is displayed.

![length for one to many](img/length-for-one-to-many.png)



