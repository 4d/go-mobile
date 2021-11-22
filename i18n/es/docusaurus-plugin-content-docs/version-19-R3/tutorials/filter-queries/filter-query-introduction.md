---
id: filter-query-introduction
title: Filter queries
---

In this tutorial, we'll show how to create **filter queries** to display filtered content in the generated mobile app.

Imagine que es un gestor de cuentas y quiere consultar sus contratos *En curso* simplemente conectándose a su aplicación con su dirección de correo electrónico.

Primero, desde la sección Datos definiremos un **filtro de búsqueda básico** para mostrar solo los contratos *En curso*. Luego, vamos a aplicar un **filtro basado en información del usuario** que dependerá del correo electrónico del administrador de la cuenta.

## Descargue el proyecto Starter

Antes de comenzar, asegúrese de descargar el **proyecto Starter** que incluye un archivo **4DforiOSQueries.4dbase** (una base de datos de demostración y un proyecto de aplicación móvil listo para usar)

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip">Starter project</a>
</div>

La base de datos incluye:

* **La tabla CRM** con todos los datos que queremos mostrar en la aplicación iOS generada
* **La tabla AccountManager** con información básica sobre los administradores de cuentas (correo electrónico y nombre).

![CRM database](img/CRMDatabase.png)


Ahora está listo para definir su primera búsqueda limitada.

Abra el proyecto móvil haciendo clic en Open > Mobile Project... y seleccione CRM app > **project.4dmobileapp**.
