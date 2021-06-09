---
id: overview
title: Overview
---


The 4D Mobile Project editor allows you to design, test, and build your native mobile projects for iOS and Android. 

The 4D Mobile Project editor is available from the 4D development environment. Since a mobile project is linked to a 4D database, a 4D project must be launched.  

## Mobile project management

### Creating a mobile project

To create a new mobile project:

1. Start your 4D application and open the 4D project for which you want to create a mobile project.
2. Select **New > Mobile Project** from the **File** or the toolbar menu.

:::note

You need a 4D Developer Pro license to open the 4D mobile editor.
:::

The welcome dialog box is displayed:

![Project Name](img/new-project.png)

3. Give your project a name and click **Continue**.

The Mobile project editor is displayed and the mobile file architecture is automatically created in your 4D project.  

### Opening a mobile project

To open a mobile project:

1. Start your 4D application and open the 4D project for which you want to open the mobile project.
2. Select **Open > Mobile Project** from the **File** or the toolbar menu.

The mobile project selection dialog box is displayed. It contains the list of mobile projects already defined for the current database:

![Project Name](img/select-project.png)

The icon on the left side indicates if the project was created for Android, iOS, or both. 

3. Double-click on the project to open, or select the project and click **Open**.

#### Open another project

The **Open another project...** link allows you to select any valid [`.4dmobileapp`](#mobile-project-architecture) file that is not listed in the dialog box.

:::warning

The selected mobile project must match the current database structure, otherwise it will be updated and may not work as expected.

::: 

### Deleting a mobile project

To delete a mobile project, just remove the mobile project folder from the 4D project folder. 


### Mobile project architecture

Mobile projects are created inside the main 4D project folder:

- My4DProject (*main 4D project folder*)
	+ Project
	+ Mobile Projects
		* MyMobileProject
			- project.4dmobileapp
			- *other files and folders*


## Sections

In the Sections tab, you'll find all of the necessary steps to create your 4D for iOS application:

* General
* Structure
* Data
* Actions
* Labels & Icons
* Main Menu
* Forms
* Publishing

## Build

The Build tab has four options:

* Build and Run 
* Simulator selection
* Project and product browser
* Install 
