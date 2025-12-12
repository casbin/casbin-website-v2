# [casbin.org](https://casbin.org) [![Build and Deploy](https://github.com/casbin/casbin-website-v2/actions/workflows/master.yml/badge.svg)](https://github.com/casbin/casbin-website-v2/actions/workflows/master.yml)

The configuration and documentation of Casbin website: <https://casbin.org/>.

Casbin website is built using [Fumadocs](https://fumadocs.vercel.app/) v10.1.2 with Next.js.

## Get Started

### Requirements

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download/)：v20 or above
3. [Yarn](https://classic.yarnpkg.com/en/docs/install): please use Yarn 1

### Running Locally

1. `git clone https://github.com/casbin/casbin-website-v2.git`
2. `cd casbin-website-v2`
3. `yarn`: install dependencies.
4. `yarn dev`: starting the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building

To build the website for production:

```bash
yarn build
```

To serve the production build locally:

```bash
yarn serve
```

## Contributing

You can contribute to the documentation site in different ways: [Documentation Writing](#documentation-writing), [Translation](#translation), [Website Development](#website-development).

### Documentation Writing

Documentation files are located in the `content/docs` directory as MDX files.

A standard document should look like this:

```md
---
title: Title
description: description
---

## Headers

Only h2 and h3 will be in the TOC by default, so h1 is not recommended to use.

### h3

content

#### h4

content
```

We use [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) to lint the markdown and mdx files, you can use the following command to fix basic errors and get a list of document issues:

```bash
yarn lint:md
```

If you write docs using VSCode, Sublime, or Vim/Neovim, you can install the [extension](https://github.com/DavidAnson/markdownlint#related) to get better lint experience.

### Translation

[Crowdin](https://crowdin.com/project/casbin-website) is used for Casbin website's translation.

Note: Please do not translate strings like `:::note`, `:::tip`, wrong translation may cause typographical error.

### Website Development

The website is built with Next.js 14 and Fumadocs v10.1.2.

- Pages are located in the `app` directory using the Next.js App Router
- Components can be placed in a `components` directory
- Documentation content is in `content/docs`
- Styling uses Tailwind CSS

See [Next.js Documentation](https://nextjs.org/docs) and [Fumadocs Documentation](https://fumadocs.vercel.app/) to learn more.

## LICENSE

[Apache-2.0 license](./LICENSE).
