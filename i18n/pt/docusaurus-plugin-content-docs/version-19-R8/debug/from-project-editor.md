---
id: from-project-editor
title: A partir do editor de projeto
---

Pode acontecer que tenha problemas usando o editor de projeto 4D móvel em sua aplicação iOS ou android. Ler os arquivos de histórico oferece informação útil nesses casos.

Para acessar arquivos de histórico, aperte a tecla **Alt** e selecione **Project** no painel BUILD do editor de projetos:

![Depuração](img/project.png)

Itens de menu debug adicionais aparecem para o [simulador atualmente selecionado](../project-definition/build-panel#using-the-simulator):


* **Open Simulator logs**: aqui pode encontrar a pasta `CrashReporter MobileInstallation`

* **Abra o Relatórios de Diagnóstico de Simulador**

* **Abra a pasta de simulador atual**

* **Open Application Simulator Folder**: abre um submenu para cada aplicação


## How to debug your app

Once your app is complete and the simulator’s result is satisfactory, you may want to test it on your smartphone, whether you're working on 4D for iOS or 4D for Android..

To do so, in the Project editor, make sure you have plugged your smartphone, then select your physical device from the list and click on the “Build and Run" button.

![AndroidDevice](img/phone-selection.png)

:::nota

The **Update the list of devices...** button enables to refresh the list of available devices.

:::

4D shall then build the application and install it on the connected device.

:::nota

If you're an Android developer, you need to add an extra step to the debug process. More details [here](from-your-android-device-and-android-studio.md).

:::
