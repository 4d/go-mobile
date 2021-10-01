---
id: list-form-manifest
title: Manifest.json
---

The manifest file includes information about your list form template, such as the storyboard **type** (list form or detail form), **name** and **number of fields per cell**.

```json
{
  "type": "listform",
  "name": "Custom List form",
  "fields": {
    "count": 3
  },
  "tags": {
    "___LISTFORMTYPE___": "Table"
  }
}

```

For example, the above manifest file includes the following information:

1. **Template type**: listform
2. **Template Name**: Custom List form
3. **Field number**: Three fields in each cell (profile image, title, and subtitle)
4. **Tag**: "___LISTFORMTYPE___": "Table" table display
