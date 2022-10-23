# [casbin.io](https://casbin.io) [![Build and Deploy](https://github.com/casbin/casbin-website-v2/actions/workflows/master.yml/badge.svg)](https://github.com/casbin/casbin-website-v2/actions/workflows/master.yml)

The configuration and documentation of Casbin website: <https://casbin.io/>.

Casbin website is built using [Docusaurus](https://docusaurus.io/), you can get the PDF at [Release](https://github.com/casbin/casbin-website-v2/releases/tag/pdf).

## Get Started

### Requirements

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download/)：v16.14 or above
3. [Yarn](https://classic.yarnpkg.com/en/docs/install): please use Yarn 1

### Running Locally

1. `git clone https://github.com/casbin/casbin-website-v2.git`
2. `cd casbin-website-v2`
3. `yarn`: install dependencies.
4. `yarn start`: starting the development server.

## Contributing

You can contribute to the documentation site in different ways: [Documentation Writing](#documentation-writing), [Translation](#translation), [Website Development](#website-development).

### Documentation Writing

For the configuration of the sidebar, you can refer to [Sidebar](https://docusaurus.io/docs/sidebar).

For the features that you may use when writing documents, please refer to [Markdown Features](https://docusaurus.io/docs/markdown-features).

A standard document should look like this:

````md
---
title: Title
description: description
keywords: [keyword1, keyword2]
---

## Headers

Only h2 and h3 will be in the TOC by default.

### h3

content

#### h4

content

````

#### Caution

##### Admonitions

You can add [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions) in the documentation, but please leave two blank lines like this:

```md
:::info Title

Title is optional

:::
```

##### JSX

You can use JSX in documents, such as the [Tabs](https://docusaurus.io/docs/markdown-features/tabs) component provided by Docusaurus, but to prevent Crowdin from breaking the code ([mdx-solutions](https://docusaurus.io/docs/i18n/crowdin#mdx-solutions)), please wrap the JSX code:

````md
```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

```mdx-code-block
<Tabs>
<TabItem value="go" label="Go">
```

content

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

content

```mdx-code-block
</TabItem>
</Tabs>
```

````

### Translation

[Crowdin](https://crowdin.com/project/casbin-website) and [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction) is used for Casbin website's translation.

Note: Please do not translate strings like `:::note`, `:::tip`, wrong translation may cause typographical error([casdoor-website#305](https://github.com/casdoor/casdoor-website/issues/305)).

You may see some sentences containing `{}`, like:

```text
At our {repoLink}, browse and submit {issueLink} or {prLink} for bugs you find or any new features you may want implemented.
```

Please do not translate `{repoLink}` or `{issueLink}` or any similar words, they are [interpolation placeholders](https://docusaurus.io/docs/docusaurus-core#translate-props).

### Website Development

See [Creating Pages](https://docusaurus.io/docs/creating-pages) to learn how to create a page.

See [Styling and Layout](https://docusaurus.io/docs/styling-layout) to learn how to modify styles.

See [Swizzling](https://docusaurus.io/docs/swizzling) to learn how to modify Docusaurus built-in components.

## LICENSE

[Apache-2.0 license](./LICENSE).
