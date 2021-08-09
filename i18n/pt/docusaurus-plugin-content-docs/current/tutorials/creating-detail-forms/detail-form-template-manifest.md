---
id: detail-form-template-manifest
title: Manifest.json
---

O arquivo manifest inclui informação sobre seu modelo de formulário detalhe tal como  **tipo Storyboard ** (formulário lista ou formulário detalhe), **nome**, **e número de campos estáticos** .


```json
{
  "type": "detailform",

  "name": "Custom Detail form",
  "renderer": 2,  
  "hOffset": 91, 
  "fields": {
    "count": 1, 
    "max": 0
 },

  "assets": {
    "size": {
      "width": 16,
      "height": 16
    }
  }
}

```

Por exemplo, o arquivo de manifesto acima inclui as informações:



* **type:**tipo storyboard. Nesse exemplo, "detailform"
* **name:**nome do modelo. Nesse exemplo, "Custom Detail form"
* **renderer:** número da versão
* **hOffset:** o offset (desclocamento) vertical do primeiro campo que vai ser duplicado. Nesse exemplo, 91 píxels a partir do topo.
* **fields**: número de campos estáticos. Nesse exemplo, 1 campo estático e 0 para campos infinitos duplicados( uma imagem de cabeçalho e campos duplicados)
* **Propriedades do ìcone:** Largura e altura do ícone(16 px)

