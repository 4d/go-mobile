---
id: actions
title: Actions
---

Esta seção permite que:

* crie ações para executar o código 4D a partir de seu app iOS.
* defina e adicione parâmetros para suas ações.

## No Editor de Projetos

### Crie sua ação

Pode criar uma nova ação clicando no botão +  no fundo da tabela Actions. Uma nova linha vai aparecer na tabela Actions.

Depois precisa definir o abaixo:

* **Names:** o nome da ação a usar no método de banco de dados [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) para ativar seu código 4D.
* **Icons:** O ícone a escolher de sua biblioteca ícone. You can also add your own icon by following this [tutorial]`(using-icons.html)`.
* **Short and long Labels:** As etiquetas para as ações para exibir em seu app.
* **Table:** A tabela na qual quer aplicar a ação.
* **Scope:** Onde usar a ação, uma **entidade** ou uma **tabela**.

![Action section](img/Actions-section-4D-for-iOS.png)

### Adicione parâmetros para sua ação

You can add **action parameters** and **edit** data directly from your app.

Para cada parâmetro, pode editar as propriedades abaixo:

* Nome
* Etiqueta longa
* Etiqueta curta
* Formato
* Restrições de input (define valores mínimos ou máximos)
* Placeholder (valores provisórios)
* Definição campo obrigatória
* Valor padrão

![Action-parameters](img/Actions-parameters-4D-for-iOS.png)

Você é livre para mudar a ordem dos parâmetros usando arrastar e soltar.

Aqui estão os diferentes **Formatos** que pode selecionar para um parâmetro:

<table>

<tr>
<th colspan="2"  style={{textAlign: 'center'}}>TEXTO</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Texto</td><td>Colocar em maiúscula a primeira letra da string</td>
</tr><tr>
<td>Endereço de email</td><td>Teclado iOS otimizado para a entrada de correio eletrônico</td>
</tr><tr>
<td>Número de telefone</td><td>Teclado iOS para ingressar o número de telefone.</td>
</tr><tr>
<td>Conta</td><td>Teclado iOS otimizado para a entrada de correio eletrônico</td>
</tr><tr>
<td>Senha</td><td>Otimizado para manejar senhas</td>
</tr><tr>
<td>URL</td><td>Teclado iOS otimizado para a entrada  de URLs</td>
</tr><tr>
<td>Código postal CEP</td><td>Teclado iOS otimizado para entrada de código postal</td>
</tr><tr>
<td>Área de texto</td><td>Inclui linhas múltiplas de texto em um único campo</td>
</tr><tr>
<td>Código de barras</td><td>Extrair valor associado ao código de barra. Formatos compatíveis:  EAN8, EAN13, Code 39, Code 93, Code 128, QR Code, UPC, PDF417</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>NUMBER</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Number</td><td>Numbers with decimals</td>
</tr><tr>
<td>Integer</td><td>Numbers without decimals</td>
</tr><tr>
<td>Scientific</td><td>Scientific Notation</td>
</tr><tr>
<td>Percentage</td><td>Percent Notation</td>
</tr><tr>
<td>Spell Out</td><td>Convert numbers into strings</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>DATE</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Date</td><td>Nov 23, 1937</td>
</tr><tr>
<td>Short Date</td><td> 11/23/37</td>
</tr><tr>
<td>Long Date</td><td>November 23, 1937</td>
</tr><tr>
<td>Full Date</td><td>Tuesday, November 23, 1937</td>
</tr><tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>TIME</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Time</td><td>3:30 PM</td>
</tr><tr>
<td>Duration</td><td>2 hours 30 minutes</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style={{textAlign: 'center'}}>BOOLEAN</th>
</tr><tr style={{textAlign: 'center'}}>
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Boolean</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"/></td>
</tr><tr>
<td>Check mark</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"/></td>
</tr>

<tr>
<td colspan="2"></td>
</tr>
<tr>
<th colspan="2" style={{textAlign: 'center'}}>IMAGES</th>
</tr>
<tr>
<td>Assinatura</td><td>Permitir assinatura com o dedo</td>
</tr>

</table>

## Preset actions

4D mobile projects include the following (predefined) preset actions to manage your app content:

* Ação de Editar
* Ação de Adicionar
* Ação de eliminar
* Share
* Sort

### Add action

4D mobile projects makes the **Add actions** creation process very simple.

A única coisa que precisa fazer é selecionar a opção **Ação adicionar** acessível a partir do  **+ botão** no fundo da tabela Ações.

![Add actions](img/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action.

Isso vai **criar automaticamente** todos os parâmetros para você no Editor de Projeto. No app gerado, isso permite que edite cada valor de campo.

Para este tipo de ação, vai ver que todas as **propriedades** já estão preenchidas para sua conveniência no lado direito da lista de parâmetros.


### Edit action

A criação de **Ações Editar** segue o mesmo processo que as Ações Adicionar, com exceção que não é possível definir valores predeterminados a partir da seção Ações.



### Delete action

**Delete action** creation follows the same process as the Edit action. The only difference is that this action allows you to remove an entity.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

This type of action should be used with caution.

![Delete actions](img/Actions-Delete-action-4D-for-iOS.png)

### Share action

Selecting the **Share action** will allow your mobile users to share content with other users. You just need to select the scope:

- **entity**: to share content from a detail form
- **table**: to share a list form

See the [Deep Linking](../special-features/deep-linking.md) page for more details.

### Sort action

**Sort actions** are useful to:

- define a default sort order for the table list forms
- allow your mobile users to choose a list sort order

When you create a sort action for a table, you need to select the first field on which the sort will be done:

![Docusaurus](img/sort-select.png)

The field is added to the Sort Criteria list. An ascending sort order is set by default, but you can change it using the **Sort order** menu.

You can sort entities in more than one field. Each field you sort is referred to as a sort level. For example, the results of a two-level ascending sort of the `lastName` and `firstName` fields would produce a list such as this:

```4d
Aardvark, Anthony
Aardvark, Artemis
Aardvark, Arthur
...
Zygote, Elena
Zymosian, Elmer
```

To add one or more sort level(s) in the Sort Criteria list, select the **+** button under the list and configure each level:

![sort](img/ascending.png)


#### Sort order menu on the mobile app

When you define more than one sort action for a table, mobile users automatically benefit from a **sort** menu. It contains all the predefined sort actions:

![sort](img/sort-go-mobile.gif)


> When only one sort action is defined for a table, the **sort** menu is not displayed on the mobile app side.

### On Mobile App Action

The [On Mobile App Action]`(https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html)` database method is available to call all of your 4D methods.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.

:::note notes

- You can refresh the selection after executing an action using `$out.dataSynchro:=True`.
- You can notify the app user when action has been executed using `$out.statusText:="Message you want to display"`.
- You can also decide to force close the Edition form using `$out.close:=True`.

:::

## Offline mode actions

The user of an app can draft, store and queue action requests, even if he’s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list.

Pending tasks can be visualized and opened from:

•   *The Settings screen*

It displays a summary and a history of all pending and completed tasks.

![Action section](img/screen1.png)

•   *The List & Detail forms*

They display all the tasks related to the table or to the entity that you are currently viewing.

![Action section](img/screen2.png)

:::note notes

- The "Share" predefined action is only executable online
- Actions are editable while pending, but they can no longer be modified once they switch to the "Completed" mode.

:::

### Update pending tasks that failed

Due to your server business logic, some tasks could be rejected. For mobile users, it is then possible to edit and to retry sending the relevant pending tasks. To do so, you can display a status text describing, in the "Complete" actions history, the reason of the failure. For example, you can reject an action sent by a mobile user to the server and inform him that the operation has failed. In that case, you can set the `success` value to `False` and provide a message in `statusText`, as follows:

 ```4d
 $response:=New object("success"; False; "statusText"; "Operation failed"))
 ```
 You can even add some errors by action parameters for the `alphaField` parameter, for example:

  ```4d
$response.errors:=New collection(New object("parameter"; "alphaField"; "message"; "Alpha field must contains a valide value")
  ```


## iOS app Side

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Table List forms

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](img/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](img/ListForm-table-action-tableview.png)

:::tip

Actions will be displayed in the same order as defined in the Action section.

:::

### Collection List forms

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](img/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](img/ListForm-table-action-collectionview.png)

### Detail forms

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](img/Detailform-final.png)

### Edition forms

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](img/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous field using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## Where to go from here?

* A [tutorial]`(actions-getting-started.html)` is available to guide you through the **action definition process**.

* Another [tutorial]`(action-custom-template.html)` will guide you through the **action TAG integration** for custom templates.

* A final [tutorial]`(action-parameters.html)` will guide you through the **action parameters definition**.
