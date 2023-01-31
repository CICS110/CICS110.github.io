---
author: Kobi Falus
---
# Markdown Tutorial

This website is made of markdown documents. This guide will walk you through the process of writing markdown documents for the website.

## Resources

Markdown Cheat Sheet: https://www.markdownguide.org/cheat-sheet/
Basic Syntax Guide (Way better than this webpage): https://www.markdownguide.org/basic-syntax/

## Prerequisites

An environment to write markdown documents.

Some online editors to play around with: 
- [StackEdit](https://stackedit.io/).
- [Dillinger](https://dillinger.io/) 

## Main Ideas of Markdown

In markdown, you can write text and add formatting to it. You can also add links, images, and other elements to your text.

This does not cover everything that markdown can do, but it should be enough to get you started.

### Sections
You can create sections by using the `#` symbol. The more `#` symbols you use, the smaller the section will be. For example, `#` will create a large section, `##` will create a medium section, and `###` will create a small section.

For example:
- `# Hello World` will create a large section with the text `Hello World` in it. 
- `## Hello World` will create a medium section with the text `Hello World` in it. 
- `### Hello World` will create a small section with the text `Hello World` in it.

### Text Formatting
You can add formatting to your text by using the following symbols:
- `*` or `_` for italics
- `**` or `__` for bold
- `***` or `___` for bold and italics

To use them, surround the text you want to format with the symbols. For example, `*italics*` will create italics, `**bold**` will create bold, and `***bold and italics***` will create bold and italics.

### Links and Images
You can add links and images to your text with the following syntax:
```md
[Link Text](Link URL)
![Image Text](Image URL)
```
To do a link, surround the text you want to be the link with `[]` and then put the link in `()`. For example, `[Google](https://google.com)` will create a link to google with the text `Google` in it.

To do an image, do the same but put an `!` in front. For example, `![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)` will create an image of the google logo with the text `Google Logo` in it.

### Code Blocks
There are two types of code blocks: inline and multiline. Inline code blocks are used to show code in the middle of a sentence. Multiline code blocks are used to show code on their own line.

To do an inline code block, surround the code with `` ` ``. For example, `` `print('Hello World')` `` will create an inline code block with the text `print('Hello World')` in it.

To do a multiline code block, surround the code with `` ``` ``. For example: 
````md 
```
print('Hello World')
```
````
will create a multiline code block with the text `print('Hello World')` in it.

On the line where you start the code block, you can add a language to the code block. For example, `` ```py `` will create a python code block. This will add syntax highlighting to the code block. Here is an example of a python code block:
```py
print('Hello World')
```
And the markdown for it:
````md
```py
print('Hello World')
```
````

### Lists
You can create lists by using the following symbols:
- `-` for unordered lists
- `1.` for ordered lists

To create an unordered list, put `-` in front of each item in the list. For example:
```md
- Item 1
- Item 2
- Item 3
```
will create an unordered list with the items `Item 1`, `Item 2`, and `Item 3`.

To create an ordered list, put `{a number}.` in front of each item in the list. For example:
```md
1. Item 1
2. Item 2
3. Item 3
```
will create an ordered list with the items `Item 1`, `Item 2`, and `Item 3`.

### Tables
You can create tables by using the following syntax:
```md
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
```
This will create a table with the columns `Column 1`, `Column 2`, and `Column 3` and the rows `Row 1`, `Row 2`, and `Row 3`.

### Horizontal Rule (Line)
You can create a horizontal rule by using the following syntax:
```md
---
```
This will create a horizontal rule.
