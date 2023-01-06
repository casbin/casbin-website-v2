const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casbin",
  tagline: "An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir",
  url: "https://casbin.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "casbin", // Usually your GitHub org/user name.
  projectName: "casbin.io", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    metadata: [{name: "Casbin", content: "An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir"}],
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
    hotjar: {
      applicationId: "1689878",
    },
    navbar: {
      title: "Casbin",
      logo: {
        alt: "My Site Logo",
        src: "img/casbin.svg",
      },
      items: [
        {
          type: "doc",
          docId: "overview",
          position: "left",
          label: "Docs",
        },
        {to: "/blog", label: "Blog", position: "left"},
        {
          to: "/help",
          label: "Help",
          position: "left",
        },
        {
          href: "/docs/management-api",
          label: "API",
          position: "left",
        },
        {
          href: "/editor",
          label: "Editor",
          position: "left",
        },
        {
          href: "/docs/ide-plugins",
          label: "IDE plugins",
          position: "left",
        },
        {
          href: "https://casbin.com",
          label: "For Enterprise",
          position: "left",
        },
        {
          href: "https://casdoor.com",
          label: "Hosting Plan (SaaS)",
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
        {
          type: "custom-casdoor",
          label: "Sign Up",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-signup casdoor-link",
        },
        {
          type: "custom-casdoor",
          label: "Login",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-login casdoor-link",
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
              label: "Gitter",
              href: "https://gitter.im/casbin/Lobby",
            },
            {
              label: "QQ Group",
              href: "https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885",
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
                <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/casbinHQ?style=social">
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
      additionalLanguages: ["ini", "csv", "lua", "csharp", "java", "php", "rust"],
    },
    announcementBar: {
      id: "announcement", // ID of the announcement bar
      content:
        "<a href=\"https://casdoor.org/\">💖 Looking for an open-source identity and access management solution like Okta, Auth0, Keycloak ? Learn more about: Casdoor</a>",
      isCloseable: true,
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
      src: "/js/gitter.js",
      async: true,
    },
    {
      src: "/js/tawk.js",
      async: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: ({locale, docPath}) => {
            if (locale === "en") {
              return `https://github.com/casbin/casbin-website-v2/edit/master/docs/${docPath}`;
            }
            if (locale === "zh") {
              return "https://crowdin.com/project/casbin-website/zh-CN";
            }
            return `https://crowdin.com/project/casbin-website/${locale}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale === "en") {
              return `https://github.com/casbin/casbin-website-v2/edit/master/${blogDirPath}/${blogPath}`;
            }
            if (locale === "zh") {
              return "https://crowdin.com/project/casbin-website/zh-CN";
            }
            return `https://crowdin.com/project/casbin-website/${locale}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-hotjar"],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ko", "ru", "fr", "de", "ja"],
  },
};
