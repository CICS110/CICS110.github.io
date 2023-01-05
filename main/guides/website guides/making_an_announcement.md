# Making an Announcement

This guide will show you how to make an announcement in the blog section.

## Prerequisites

- Have a local version of the development environment (see [here](getting_started.md) for instructions on how to set it up)
- Have an understanding of Markdown (see [here](markdown_tutorial.md) for a guide on Markdown)

:::note
Almost all of this comes from the [Docusaurus documentation](https://docusaurus.io/docs/blog). If you want to learn more about how to make announcements, you should check out the documentation.
:::

## Creating An Announcement

### Making the file

Create a new file in the `blog` folder. The file should be named `YYYY-MM-DD-announcement-title.md`, where `YYYY` is the year, `MM` is the month, `DD` is the day, and `announcement-title` is the title of the announcement. For example, if you were making an announcement on January 1st, 2021, you would name the file `2021-01-01-announcement-title.md`.

Example Structure:

```text
blog
    2021-01-01-announcement-title.md
```

If you think that you may want to include images in your announcement, you should create a folder with the same name as the file, but without the `.md` extension. For example, if you were making an announcement on January 1st, 2021, you would create a folder named `2021-01-01-announcement-title`. Inside this folder, also create a file called `index.md`. This will be the file we will write our announcement in. Other resources, such as images, can be placed in this folder. This is only necessary if you want to include other files in the announcement.

Example Structure (for an announcement with images):

```text
blog
    2021-01-01-announcement-title
        index.md
        image1.png
        image2.png
```

### Creating the Front Matter

Front matter is a set of metadata that is used to configure the announcement. It is written in YAML and is placed at the top of the announcement file. It allows you to configure things such as the announcement's title, description, and sidebar position.

#### Example:

```yaml
---
slug: my-url
title: Making an Announcement Guide is Out!
authors: [Kobi, Tim]
tags: [guides, hello, docusaurus]
---
```

For the example above:

#### Slug
The `slug` is the URL extension for the announcement. 

For example, if the slug is `welcome2`, the announcement will be located at `/blog/welcome2`. 

If the slug is not specified, it will follow the format `/blog/yyyy/mm/dd/announcement-title`. For example, if the announcement is named `2021-01-01-announcement-title.md`, the slug will be `/blog/2021/01/01/announcement-title`.

#### Title
The `title` is the title of the announcement. This will be displayed at the top of the announcement.

#### Authors
The `authors` is a list of authors by their unique id (as defined in `authors.yml`) that wrote the announcement. This will be displayed at the top of the announcement. 

Authors can be added to `authors.yml` by following the instructions [here](#adding-an-author).

#### Tags
The `tags` is a list of tags that are associated with the announcement. This will be displayed at the top of the announcement. They don't need to be defined in any other file. Clicking a tag will show all announcements with that tag.


## Content of the Announcement

The content of the announcement is written in Markdown. You can learn more about Markdown [here](markdown_tutorial.md).

It also shares the same additional features as the [docs](making_a_guide.md) pages.

Finally, there is also support for truncated posts. To make a truncated post, add the following to the content of the announcement:

```markdown
<!--truncate-->
```

Anything below this will not be shown on the announcement page. Instead, a "Read More" button will be shown, which will take the user to the full announcement.

## Adding an Author

In the blog folder is a file called `authors.yml`. This file contains a list of authors that have written announcements. To add an author, add a new entry to the list. The entry should be in the following format:

```yaml
author-id:
  name: Author Name
  title: Author Title
  url: https://author-url.com
  image_url: https://author-image-url.com
```

For example:

```yaml
kobi:
  name: Kobi
  title: Instructor
  url: https://kobif.github.io/block-game/
  image_url: http://images4.fanpop.com/image/user_images/2069000/Unnoticed-2069013_266_394.jpg
```

#### Author ID
The `author-id` is the unique id of the author. This is used to associate the author with the announcement. This must be **unique**.
This is also what is used in a blog post's `authors` field.

#### Name
The `name` is the name of the author. This is what will be displayed on the announcement. This does not need to be unique.

#### Title
The `title` is the title of the author. In our case, this is the role of the author for the course. This will be displayed on the announcement.

#### URL
The `url` is a URL that will be linked to the author's name on the announcement. This is optional.

#### Image URL
The `image_url` is a URL to an image that will be displayed next to the author's name on the announcement. This is optional.