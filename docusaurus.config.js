const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Casbin',
  tagline: 'An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir',
  url: 'https://casbin.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'casbin', // Usually your GitHub org/user name.
  projectName: 'casbin.io', // Usually your repo name.
  themeConfig: {
    algolia: {
      "appId": "6NBEV8TOFK",
      "apiKey": "111e290764eefd6fef64a7113c783afe",
      "indexName": "casbin",
      "contextualSearch": true,
      "searchParameters": {}
    },
    navbar: {
      title: 'Casbin',
      logo: {
        alt: 'My Site Logo',
        src: 'img/casbin.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/help',
          label: 'Help',
          position: 'left',
        },
        {
          type: 'doc',
          label: 'API',
          docId: 'management-api',
          position: 'left',
        },
        {
          href: '/editor',
          label: 'Editor',
          position: 'left',
        },
        {
          type: 'doc',
          label: 'IDE plugins',
          docId: 'ide-plugins',
          position: 'left'
        },
        {
          label: 'Casdoor',
          href: 'https://casdoor.org/',
          position: 'left'
        },
        {
          label: 'Forum',
          href: 'https://forum.casbin.com/',
          position: 'left'
        },
        {
          label: 'OA',
          href: 'https://oa.casbin.com/',
          position: 'left'
        },
        {
          href: 'https://github.com/casbin/casdoor',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/overview',
            },
            {
              label: 'Getting Started',
              to: '/docs/get-started',
            },
            {
              label: 'Management API',
              to: '/docs/management-api',
            },
            {
              label: 'RBAC API',
              to: '/docs/rbac-api',
            },
            {
              label: 'Middlewares',
              to: '/docs/middlewares',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.casbin.com/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/search?q=casbin',
            },
            {
              label: 'Project Chat',
              href: 'https://gitter.im/casbin/Lobby'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'Casbin Logo',
        src: 'img/casbin_min.svg',
        href: '/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casbin contributors.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['ini', 'csv', 'lua', 'csharp', 'java', 'php', 'rust'],
    },
    announcementBar: {
      id: 'announcement', // ID of the announcement bar
      content:
        '<a href="https://github.com/casbin/casdoor">💖 Also need authentication/SSO? Find more at: Casdoor🚪</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42', // 默认为 `#000`。
      isCloseable: false, // 默认为 `true`。
    },
  },
  scripts: [
    '/js/gitter.js',
    '/js/hotjar.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/casbin/casbin-website-v2/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/casbin/casbin-website-v2/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
