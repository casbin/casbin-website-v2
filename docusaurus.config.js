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
      appId: 'EPG63X9KNS',
      apiKey: '23e4abcea442fdfc85d1c3c01e0395f8',
      indexName: 'casbin',
      contextualSearch: true,
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
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://crowdin.com/project/casbin-website',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/casbin/casbin',
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
      copyright: `Copyright © ${new Date().getFullYear()} Casbin Organization`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    announcementBar: {
      id: 'announcement', // ID of the announcement bar
      content:
        '<a href="https://casdoor.org/">💖 Looking for an open-source identity and access management solution like Okta, Auth0, Keycloak ? Learn more about: Casdoor</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42', // 默认为 `#000`。
      isCloseable: false, // 默认为 `true`。
    },
    docs:{
      sidebar: {
        hideable: true,
      },
    }
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
          sidebarCollapsed: false,
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
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'ru', 'fr', 'de', 'ja'],
  },
};
