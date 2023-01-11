---
author: Kobi Falus
sidebar_position: 2
---

# Making A Guide

This is a guide on how to make a guide. This guide will teach you how to make a guide for this website.

## Prerequisites

- A code editor (VS Code, Atom, etc.)
- A local version of the development environment (see [here](getting_started.md) for instructions on how to set it up)
- An understanding of Markdown (see [here](markdown_tutorial.md) for a guide on Markdown)

## Creating A Guide

1. Create a new file in the `guides` folder. The file name should be the name of the guide, with the `.md` extension. For example, if you were making a guide on how to make a guide, you would name the file `making_a_guide.md`.
2. Create a title for the guide. This is done by adding a `#` at the start of the file. For example, if you were making a guide on how to make a guide, you would add `# Making A Guide` at the start of the file.
3. Continue to write markdown content for the guide.

## Front Matter

Front matter is a set of metadata that is used to configure the guide. It is written in YAML and is placed at the top of the guide file. It allows you to configure things such as the guide's title, description, and sidebar position.

### Example

```yaml
---
title: Making A Guide
description: This is a guide on how to make a guide.
sidebar_position: 1
---
```

For the example above:

- The guide's title will be `Making A Guide`.
    - This is used for the guide's page title and as the text in the sidebar for this guide.
- The guide's description will be `This is a guide on how to make a guide.`
    - This is used for the guide's page description. I've only found it to be used in the search results.
- The guide's sidebar position will be `1`.
    - This is used to determine the order of the guides in the sidebar. The lower the number, the higher up the guide will be in the sidebar.

### Guide Front Matter

The following is a list of front matter that can be used for guides:

- `title`: The guide's title.
- `description`: The guide's description.
- `sidebar_position`: The guide's sidebar position.


## Special Features

### Live Code Editor

If you want to add a live python code editor, see this guide: [Live Code Editor](./live_python.md)

### Linking To Other Guides

You can use relative file paths to link to other guides. For example, if you had the following folder structure:

```
guides
    website_guides
        making_a_guide.md
    other_guides
        markdown_tutorial.md
```

You could link to `markdown_tutorial.md` from `making_a_guide.md` by using the following syntax:

```md
[Markdown Tutorial](../other_guides/markdown_tutorial.md)
```

### JavaScript

Expressions defined in curly braces will be evaluated as JavaScript. For example, if you had the following text

```js
{1 + 1}
```

It would be rendered as

<></>1 + 1 = {1 + 1}

NOTE: To trigger this functionality, somewhere in the file needs to be a JSX element. In this case, I added `<></>` to the line so that it would be rendered as a JSX element. The line looks like

```md
<></>1 + 1 = {1 + 1}
```

### JSX and HTML Elements

You can use JSX elements (React) in the guides too. For example, here is a button that says "Click Me":

<button onClick={() => alert('Hello!')}>Click Me!</button>

The code for the button is

```md
<button onClick={() => alert('Hello!')}>Click Me!</button>
```

### Images

You can add images to the guides. Put the image you want somewhere in the `guides` folder. Then, you can reference the image using the following syntax:

```md
![Image Title](image_path)
```

For example, if you had the following folder structure:

```md
guides
    website_guides
        making_a_guide.md
    images
        image.png
```

You could add the image to the guide by using the following syntax:

```md
![Image Title](../images/image.png)
```


## Extra Resources

- [Docusaurus Guide](https://docusaurus.io/docs)
    - Teach you how to use Docusaurus (the framework that this website is built on) to make docs and guides.
