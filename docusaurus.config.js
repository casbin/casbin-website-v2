const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  title: "Casbin",
  tagline:
    "An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir",
  url: "https://casbin.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "casbin", // Usually your GitHub org/user name.
  projectName: "casbin.io", // Usually your repo name.
  themeConfig: {
    metadata: [
      {
        name: "Casbin",
        content:
          "An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir",
      },
    ],
    algolia: {
      appId: "6NBEV8TOFK",
      apiKey: "f00fe67a071e60e18a5c85ae314bba55",
      indexName: "casbin-v2",
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Casbin",
      logo: {
        alt: "My Site Logo",
        src: "img/casbin.svg",
      },
      hideOnScroll: true,
      items: [
        {
          label: "Docs",
          position: "left",
          to: "/docs/overview",
          items: [
            {
              label: "Get Started",
              to: "/docs/get-started",
            },
            {
              label: "Model",
              to: "/docs/category/model",
            },
            {
              label: "Storage",
              to: "/docs/category/storage",
            },
            {
              label: "Adapters",
              to: "/docs/adapters",
            },
            {
              label: "API",
              to: "/docs/category/api",
            },
            {
              label: "IDE plugins",
              to: "/docs/ide-plugins",
            },
            {
              label: "Start Contributing",
              to: "/docs/contributing",
            },
          ],
        },
        {
          to: "/ecosystem",
          label: "Ecosystem",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "/help",
          label: "Help",
          position: "left",
        },
        {
          href: "/editor",
          label: "Editor",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: "<hr style=\"margin: 0.3rem 0;\">",
            },
            {
              href: "https://crowdin.com/project/casbin-website",
              label: "Help Us Translate",
            },
          ],
        },
        {
          href: "https://github.com/casbin/casbin",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "custom-community",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/get-started",
            },
            {
              label: "Management API",
              to: "/docs/management-api",
            },
            {
              label: "RBAC API",
              to: "/docs/rbac-api",
            },
            {
              label: "Middlewares",
              to: "/docs/middlewares",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://forum.casbin.com/",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/search?q=casbin",
            },
            {
              label: "Discord",
              href: "https://discord.gg/S5UjpzGZjN",
            },
            {
              label: "QQ Group",
              href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casbin.png",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              html: `
                <a href="https://github.com/casbin/casbin" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/casbin?label=Casbin&style=social">
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/casbin/jcasbin" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/jcasbin?label=jCasbin&style=social">
                </a>
              `,
            },
            {
              html: `
                <a href="https://github.com/casbin/node-casbin" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/node-casbin?label=Node-Casbin&style=social">
                </a>
                &nbsp;&nbsp;
                <a href="https://github.com/php-casbin/php-casbin" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/php-casbin/php-casbin?label=PHP-Casbin&style=social">
                </a>
              `,
            },
            {
              html: `
                <a href="https://github.com/casbin/pycasbin" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/pycasbin?label=PyCasbin&style=social">
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/casbin/Casbin.NET" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/Casbin.NET?label=Casbin.NET&style=social">
                </a>
              `,
            },
            {
              html: `
                <a href="https://github.com/casbin/casbin-cpp" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/casbin-cpp?label=Casbin-CPP&style=social">
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/casbin/casbin-rs" target="_blank">
                  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/casbin/casbin-rs?label=Casbin-RS&style=social">
                </a>
              `,
            },
            {
              html: `
                <a href="https://twitter.com/casbinHQ" target="_blank">
                  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/casbinHQ?style=social">
                </a>
              `,
            },
            {
              html: `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2c0ffc6f8d49e98d964d59d7aa4cbf34";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
`,
            },
          ],
        },
      ],
      logo: {
        alt: "Casbin Logo",
        src: "img/casbin_min.svg",
        href: "/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casbin Organization`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        "ini",
        "csv",
        "lua",
        "csharp",
        "java",
        "php",
        "rust",
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  scripts: [
    {
      src: "/js/isMainland.js",
      async: true,
    },
    {
      src: "/js/hotjar.js",
      async: true,
    },
    {
      src: "/js/probe.js",
      async: true,
    },
    {
      src: "/js/clarity.js",
      async: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: "G-8S2TKCJ27X",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: ({docPath}) => {
            return `https://github.com/casbin/casbin-website-v2/edit/master/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({blogDirPath, blogPath}) => {
            return `https://github.com/casbin/casbin-website-v2/edit/master/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ko", "ru", "fr", "de", "ja", "es", "pt", "uk", "th", "ar", "id", "vi", "it", "ms", "tr"],
  },
};
