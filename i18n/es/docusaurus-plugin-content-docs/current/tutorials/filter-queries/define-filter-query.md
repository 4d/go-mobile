---
id: define-filter-query
title: Define a Filter Query
---

For the moment, if you build the Starter project app and enter "michelle.simpson@mail.com" as the login email (one of the account managers), you'll see **all manager contracts and statuses** (*Closed* and *In Progress*).

![iOS app without queries](img/ios-app-without-queries.png)

Como se indicó anteriormente, queremos que los administradores de cuentas accedan a sus contratos *En curso* iniciando sesión en su aplicación móvil con su correo electrónico. Para hacer esto:

* Acceda a la **sección "Datos"**
* Haga clic derecho en el campo **Filtro de búsqueda** para que aparezcan los **botones Campos, Comparadores y Operadores**.
* Haga clic en el botón **Campos** y seleccione **Estado**.
* Haga clic en el botón **Comparadores** y seleccione **Igual a**.
* Como desea mostrar los contratos *abiertos*, ingrese **En progreso**
* Recuerde validar su búsqueda haciendo clic en el botón **Validar**, de lo contrario no podrá crear su aplicación.

Debería obtener este resultado:

![CRM database](img/filterquery.png)

> **NOTA**
> 
> * Se muestra un icono de **filtro** a la derecha de cada tabla cuando se le aplica un filtro básico.
> * Para este tipo de filtros de búsqueda, puede optar por integrar los datos en la aplicación o cargar los datos después de iniciar sesión marcando la casilla de verificación **Integrar los datos en la aplicación**.
> * El tamaño se calculará en la primera generación para que pueda visualizar el **tamaño de sus datos**.

Si genera su aplicación e ingresa "michelle.simpson@mail.com" como correo electrónico de inicio de sesión, verá que todos los contratos *In Progress* se muestran en el simulador.

![aplicación iOS con consulta básica](img/restrited-queries-basic-query.png)

¡No es exactamente lo que esperábamos! Lo que queremos ahora es que cada administrador de cuentas visualice solo sus propios contratos *In Progress*, ¡Así que completemos nuestra búsqueda!


