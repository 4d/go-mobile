---
id: insert-tabs
title: Insert Tabs in Markdown Files
---

You can now insert tabs in markdown files:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="macos"
  values={[
    {label: 'macOS', value: 'macos'},
    {label: 'Windows', value: 'windows'},
    {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="macos">This is the macOS tab 🍎</TabItem>
  <TabItem value="windows">This is the Windows tab 🍊</TabItem>
  <TabItem value="linux">This is the Linux tab 🍌</TabItem>
</Tabs>

## Create a Blog Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
title: Greetings!
author: Steven Hansel
author_title: Docusaurus Contributor
author_url: https://github.com/ShinteiMai
author_image_url: https://github.com/ShinteiMai.png
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

A new blog post is now available at `http://localhost:3000/blog/greetings`.
