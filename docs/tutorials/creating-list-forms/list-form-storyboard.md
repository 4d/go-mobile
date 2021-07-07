---
id: list-form-storyboard
title: iOS Storyboard
---

Now it's time to create your iOS list form interface with Xcode.

Here's the result we want to achieve:

![Storyboard custom listform](img/storyboard-custom-listform.png)

For each cell, we're going to add a:

* Profile image
* Title 
* Subtitle

## Open the storyboard file with Xcode

First, open your storyboard file in Xcode.

![Empty storyboard custom template](img/empty-storyboard-custom-template.png)

It's quite empty, so let's add some content!

## Add an Image View

From the **Object library**, drag and drop an  **Image View** into a cell. You can search for "Image View" in the search bar at the bottom of the Object Library.

![Add Image View storyboard](img/add-imageview-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Then set the X value to 8 and the Y value to 3.

![Image View position height and width](img/imageview-position-height-width.png)

Next, add a constraint (Leading: 8) by clicking on the **Add New Constraints button** (at the bottom of the Interface Builder window). Add width and height constraints too, as shown:

![Image View leading space width height](img/imageview-leading-space-width-height.png)

Finally, click on the **Align button** (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.

![Image View align vertically](img/imageview-align-vertically.png)

Your Image View is now well positioned.

![Image View final](img/imageview-final.png)

Now let's work on the cell's labels.

## Add title and subtitle labels

Let's begin by **adding a View**. Search for "View" in the **Object library** and drag it into the cell container.

![Add View Storyboard](img/add-view-storyboard.png)

From the **Size inspector panel** (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Then set the X value to 126 and the Y value to 10.

![View position height and width](img/view-position-height-width.png)

For the Image View, add four constraints by clicking on the **Add New Constraints button** (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:

![View contraints Storyboard](img/view-constraints-storyboard.png)

Drag and drop a label into the View you just added from the Object Library.

![Add label Storyboard](img/add-label-storyboard.png)

From the **Size inspector panel**, set the Label View Width value to 269 and the Height value to 32. Then set the X value to 8 and the Y value to 8.

**Duplicate the label** and in the **Size inspector panel**, set the X value to 8 and the Y value to 48.

![Duplicate the label](img/duplicated-label-storyboard.png)

Select both labels add four constraints by clicking on the **Add New Constraints button** (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:

![Labels contraints storyboard](img/labels-contraints-storyboard.png)

With a label selected, double-click on the **Height constraint** to edit it. 

![Label height constraint edition](img/label-height-constraint-edition.png)

Change the relation from Equal to **Greater Than or Equal** so it can have a variable height (to handle multiline labels). 

![Change relation label height constraint](img/change-relation-label-height-constraint.png)

Repeat the process for the second label.

## Label customization

From the attribute inspector (on the right side of the Interface Builder window),  you can customize your label's font colors. Let's make the second label **Dark Grey Color** :

![Label color dark grey](img/label-color-dark-grey.png)

You can also select the dominant color for your app:

![Label color background color](img/label-color-background-color.png)

From the attribute inspector, you can also customize the font. Select both labels and select Font > Custom > **Helvetica Neue**:

![Label font custom](img/label-font-custom.png)

To complete the customizations, select both labels and **enter 0 for Lines** in the inspector window. This allows the number of lines to be unlimited.

![Label lines number](img/label-lines-number.png)

:::note

The provided storyboard is optimized to have a **variable cell height** depending on the contents of each cell.

:::

![Row height tableview cell](img/row-height-tableview-cell.png)

## How to get data into your cells

### Image View

Select your Image View and go to **Identity inspector** > User Defined Runtime Attributes. Click the **+ button** to add a row.

![User defined runtime attributes](img/user-defined-runtime-attributes.png)

* **Key Path**: Begin with bindTo to activate binding on the component. Enter ```bindTo.record.___FIELD_1___```

* **Type**: Always ```String``` 

* **Value**: The attribute name. Enter ```___FIELD_1_BINDING_TYPE___```

![Identity inspector storyboard](img/identity-inspector-storyboard.png)

### Labels

Select the first label and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD_2___```

* **Type**: ```String```

* **Value**: ```___FIELD_2_BINDING_TYPE___```

![Field 2 Binding](img/field-2-binding.png)

Select the second label and add a row in the Defined Runtime Attributes:

* **Key Path**: ```bindTo.record.___FIELD_3___```

* **Type**: ```String``` 

* **Value**: ```___FIELD_3_BINDING_TYPE___```

![Field 3 Binding](img/field-3-binding.png)

You can change the **storyboard display labels** to have better visibility: 

* Double-click the first label to edit it and enter ```___FIELD_2_LABEL___```
* Double-click the second label to edit it and enter ```___FIELD_3_LABEL___```

![Storyboard label display names](img/storyboard-label-display-name.png)

Go to your project editor, select your list form template from the Forms section, then select Build and Run.

Here is the simulator result :

![Simulator result](img/simulator-result.png)

## Customize your app

The last step is adding a corner radius to the Image View to have a better design.

Select your Image View and add the two following lines in the User Defined Runtime Attributes:

* **Key Path**: ```cornerRadius```

* **Type**: ```Number``` 

* **Value**: ```12```

and

* **Key Path**: ```layer.masksToBounds```

* **Type**: ```Boolean``` 

* **Value**: Check the box

![ImageView corner Radius](img/imageview-corner-radius.png)

You can now build your project from the project editor!

![Custom template final result](img/custom-template-final-result.png)

## Where to go from here?

In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build [detail form templates](../creating-detail-forms/detail-form-template.md).

Download the completed template list folder:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip">Download</a>
</div>




