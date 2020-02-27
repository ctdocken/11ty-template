# 11ty Template

Here's a starter template for 11ty with a few additions:

-   Custom shortcode for a common article design.
-   RSS plugin already installed
-   Sass plugin already installed
-   GitHub Action to upload to S3
-   GitHub Action to compress images when PRs are created.

## Usage

Run some basic npm commands to get started:

```
npm install
npm start
```

Once the project is running, open [http://localhost:8080](http://localhost:8080).

## Setup

### GitHub Actions

TODO: GitHub deploy action instructions (secrets from s3-sync)

-   AWS_ACCESS_KEY_ID
-   AWS_S3_BUCKET
-   AWS_SECRET_ACCESS_KEY

### S3

TODO: S3 instructions

### Cloudflare

TODO: Cloudflare instructions

## Tips

-   To open a markdown previewer is VS Code, use CMD+K V.
-   Markdown Cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

### User-defined Code Snippets

This project uses code snippets to generate templates for posts. Create a new post and type `post` and hit enter. Visual Studio Code will generate something that looks like the following (automatically filling in the date for you):

```
---
title: POST_TITLE
date: 2020-02-14
categories:
-
---
```

Snippets can be found in the `.vscode` directory.

-   https://code.visualstudio.com/docs/editor/userdefinedsnippets
