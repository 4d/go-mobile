---
id: list-form-template
title: List form templates
---

In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a **searchBar**, a table displaying an **image**, a **title**, and a **subtitle** for each cell.

![List form template final result](img/custom-template-final-result.png)

## Download the Starter project

Before we begin, be sure to download and unzip the **Starter project** which includes:

* A **List form** folder 
* A demo 4D project ("Contact") with a ready-to-use mobile app project.

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip">Starter project</a>
</div>

## Add a list form template to your mobile project

The first thing you'll need to do is to create a `list` folder in *Contact.4dbase/Resources/Mobile/form/* location and drag and drop your **list form** folder into it.

![Mobile folder list form template](img/mobile-folder-custom-template.png)

Now, launch your 4D application and open the "Contact" 4D project. 

Then, select the "Contact Demo App" mobile project: **File > Open > Mobile Project > Contact Demo App**. 

In the **Forms section** of the mobile project editor, you can see that your list form template has been successfully added to the list of available list form templates:

![Forms section](img/custom-listform-template.png)

Now let's focus on the contents of the **Custom List form** folder.

## List form template content

In this folder, you will find:

* **a layoutIconx2.png** icon in 160x160px: displayed in the project editor when you select your template
* **a manifest.json file**: includes a basic description of the template
* **a template.svg file**: the visual representation of your template displayed when you define your list form content.
* an **ios folder** that includes the storyboard (graphical interface) and **Swift** file (code for the form) in `Source/Forms/Tables/___TABLE___` folder
* an **android folder** that includes the layout.xml file (graphical interface) in `app/src/main/res/layout` folder.

These files and folders are detailed in the next sections. 
