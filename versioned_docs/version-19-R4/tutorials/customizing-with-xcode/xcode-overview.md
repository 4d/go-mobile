---
id: xcode-overview
title: Xcode Overview
---

> **OBJECTIVES**
>
> Ensure a basic understanding of working with Xcode.

Xcode displays various areas that we're going to review:

![Xcode](img/Discover-Xcode-4D-for-iOS.png)

## Toolbar

* **Run** and **Stop** buttons are located on the left side of the toolbar. Pressing the **Run** button will build, run, and launch your application in the selected iOS Simulator.

![Build and Run](img/Toolbar-Build-and-Run-Xcode-4D-for-iOS.png)

* The dropdown menu next to the **Stop** button indicates which build target you want to run and which Simulator is being used.

![Toolbar Target](img/Toolbar-Target-simulator-Xcode-4D-for-iOS.png)

* On the right side of the toolbar, you'll find buttons to change the display.

![Toolbar View buttons](img/Toolbar-View-buttons-Xcode-4D-for-iOS.png)

## Editor Area

![Editor Area](img/Editor-Xcode-4D-for-iOS.png)

This is where the coding happens when a Swift file is selected.
When a Storyboard file is selected, the view changes and the Interface Builder appears.

## Interface Builder Area

![Interface Builder Area](img/Interface-Builder-Xcode-4D-for-iOS.png)

This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side. 

## Utility Area

The Utility area of Xcode has two panes: the Inspector pane and the Library pane.

![Utility Area](img/Utility-Xcode-4D-for-iOS.png)

### Inspector pane

Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:

![Inspector pane](img/Xcode-Inspector-pane.png)

From left-to-right, these tabs are:

* **File inspector**: For viewing and managing file metadata, such as a filename, type, and path.

* **Quick Help**: For viewing details about what has been selected in an editor.

* **Identity inspector**: For viewing object metadata such as an object’s class, runtime attributes, label.

* **Attributes inspector**: For configuring the attributes specific to the selected interface object. For example, some text field attributes include text alignment and color, border type, and editability.

* **Size inspector**: For specifying characteristics such as the size and position of an interface object.

* **Connections inspector**: View the outlets and actions for an interface object, make new connections, and delete existing connections.

### Library pane

Within the Properties section, there are four different Library Tabs, as shown in the following illustration:

From left-to-right, these tabs are:

![Library pane](img/Xcode-Library-pane.png)

* **File templates**: These templates are for the common types of files listed as choices in the New File menu.

* **Code snippets**: These are short pieces of source code for use in your application. To use one, drag it directly into your source code file.

* **Objects**: This library contains the kinds of interface objects you’d use to make up your user interface. To add one to a view, drag it directly into your storyboard in the Interface Builder editor.

* **Media files**: This library contains all your graphics, icons, and sound files. To use one, drag it directly to your storyboard in the Interface Builder editor.

## Debug Area

This area displays the output and the state of various variables when running your app.

## Navigation Area

Several tabs are included here, the most important of which are:

* **Navigation tab**: Lists and provides access to all files necessary for your application to work properly.

![Navigation tab](img/Project-Navigation-Editor-Xcode-4D-for-iOS.png)

* **Search navigator tab**: Allows searching all files in the project.

![Search navigator tab](img/Search-Navigator-Xcode-4D-for-iOS.png)

* **Issue navigator tab**: Displays all errors in an iOS project. 

	- Errors in red are critical issues that need to be corrected in order to build your application. 
	- Errors in yellow are warnings about issues which have the potential to cause problems but do not block the building of the application. 

You can click on errors and warnings to visualize them in the project.

![Issue Navigator](img/Issue-Navigator-Xcode-4D-for-iOS.png)

Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab.
