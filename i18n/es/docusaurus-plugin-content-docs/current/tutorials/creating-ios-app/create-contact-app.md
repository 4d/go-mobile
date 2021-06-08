---
id: create-contact-app
title: Contact App
---


> **OBJECTIVES**
> 
> Create your first app with 4D for iOS
> **PREREQUISITES**
> 
> Click `[here](prerequisites.html)` to see what you'll need to get started!

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

*Scenario: You're a commercial business manager and you want to consult your contact information on the go.*

We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it "Contact".

## STEP 1. Getting started
Download our Starter project, which contains a database file and project icon, but no mobile project yet:

<div style= {{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
<a className="button button--primary" href="https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip">Starter project</a>
</div>

## STEP 2. Creating the project

Let's start with a very simple structure using a single table. From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![Project Creation](img/create-contact-app/create-project.png)

## STEP 3. Opening the Project Editor

Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. 🙂

![Welcome Screen](img/create-contact-app/welcome-screen.png)

Click **Continue**.

## STEP 4. Sections - General

Here, you'll configure your app's primary information:

* **Organization:** Enter the name of your company and the application's identifier (ex. “My Company” and com.MyCompany).
* **Product:** Enter your app's name. Let’s call this one "Contact".
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your app's copyright. It's highly recommended to use the formats provided by 4D for iOS.
* **Icons:** Drag and drop an icon for your app into the icon area.
* **Developer:** This is automatically filled from the user name on your computer. Copy/paste your developer team reference (from your developer account) into the Team field. You can also leave it empty to build your application on the Simulator only.

![General](img/create-contact-app/general-section.png)

## STEP 5. Sections - Structure

This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices.

For our example, select **ID**, **First Name**, **Last Name**, **Job**, **Company**, **Phone**, **Notes** and **Photo**.

> **NOTE**
> 
> We highly recommend publishing your primary key in order to identify each record of your database


![Structure](img/create-contact-app/structure-section.png)

## STEP 6. Sections - Icons & Labels

Now it's time to define some labels and icons for the selected tables and fields.

**Table Properties:**

* Define a short and a long label for your Contact table
* Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

**Field Properties:**

* Define a short and a long label for your selected fields.
* Click on the icon field and select icons for each field. There are several options for field icons:
    * You can select an icon for each field,
    * If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you
    * You can simply leave them empty to not display any field icons.

![Icons & Labels](img/create-contact-app/labels-section.png)

## STEP 7. Sections - Main Menu

Next up is defining the order of the tables in the app's main menu.

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![Main Menu](img/create-contact-app/main-menu-section.png)

## STEP 8. Sections - Forms

We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from.

* Select a list form template to display your table as a list. For our Contact app, let’s use the **Profile** template.

![List form template](img/create-contact-app/listform-template-form-section.png)

At this point, the bottom of the configuration window has changed from template selection to content definition.

* Drag and drop the fields you want displayed onto the template, for example Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![List form content](img/create-contact-app/listform-content-form-section.png)

And finally, we'll define the detail form.

* Select a template that is best suited for your app. For our Contact app, let’s use the **Visual Contact**template.

![Detail form template](img/create-contact-app/detail-form-form-section.png)


* Drag and drop the content onto the appropriate places on the detail form template, for example First Name, Last Name, and Photo.

![Detail form content](img/create-contact-app/detail-form-content-form-section.png)

## STEP 9. Build the app

Now the fun part! It's time to build your app and test it on the Simulator to see the final result!

* Click the **Build** tab.
* Select a device to use as a Simulator by clicking on the device button.
* Click  **Build and Run**.
* Wait a few seconds and …. voila! Your iOS app is alive!

![Build and Run](img/create-contact-app/build-the-app-simulator.png)

## STEP 10. Where to go from here?

We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex app. Click on **Final Project** below to download the final Contact app.

<div style= {{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
<a className="button button--primary"
href="https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip">FINAL PROJECT</a>
</div>
