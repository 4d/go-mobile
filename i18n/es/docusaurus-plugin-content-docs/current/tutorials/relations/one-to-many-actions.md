---
id: one-to-many-actions
title: Relaciones Uno a Muchos - Acciones
---


We are now going to go a little bit further and **create a task for a specific employee**.

It is very easy to create an entity using **parent Entity** !

Let's get started by downloading the Starter project:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip">Starter project</a>
</div>

## Crear una acción addProject

* Abra el editor del proyecto y vaya a la sección Action.

* Add a `addProject` Action

![create addProject Method](img/create-addProject-Method-4D-for-iOS-relation-parent-ID.png)


## Método On Mobile App Action

The only thing you have to do is defining the **addProject** action in the **On Mobile App Action method** as follows :

```4d
: ($request.action="addProjects")

$o:=New object(\
"dataClass";$context.dataClass;\
"parent";$context.parent;\
"entity";$context.entity;\
"parameters";$parameters)

$result:=addProject ($o)


```

## Método addProject


Then enter thoses lines in your **addProject Method**:

```4d
C_OBJECT($0)
C_OBJECT($1)

C_OBJECT($entity;$in;$out)

$in:=$1
$out:=New object("success";False)

If ($in.dataClass#Null)

    $entity:=ds[$in.dataClass].new()  //Crear una referencia

    For each ($key;$in.parameters)

        $entity[$key]:=$in.parameters[$key]

    End for each 

    $primaryKey:=$in.parent.primaryKey   //Get parent primary key

    $parent:=ds[$in.parent.dataClass].get($primaryKey)

  $inverseRelationName:=$in.entity.relationName   //Obtener nombre de la relación padre

    $entity[$inverseRelationName]:=$parent

    $status:=$entity.save()  //guardar la entidad

    $out.success:=True  // notificar App que la acción es exitosa

    $out.dataSynchro:=True  // notificar App para refrescar la selección

    $out.statusText:="Task added"

    $out.close:=True

Else 

    $out.errors:=New collection("No Selection")

End if 

$0:=$out

```

And that's it you can then add some task to your employees easily using the parent Entity !

Download the completed project:

<div className="center-button">
<a className="button button--primary"
href="https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip">Download</a>
</div>