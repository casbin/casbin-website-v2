/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docs: [
    {
      type: "category",
      label: "The basics",
      items: [
        "overview",
        "get-started",
        "how-it-works",
        "tutorials",
      ],
    },
    {
      type: "category",
      label: "Model",
      items: [
        "supported-models",
        "syntax-for-models",
        "effector",
        "function",
        "rbac",
        "rbac-with-pattern",
        "rbac-with-domains",
        "rbac-96",
        "abac",
        "priority-model",
        "superadmin",
      ],
    },
    {
      type: "category",
      label: "Storage",
      items: [
        "model-storage",
        "policy-storage",
        "policy-subset-loading",
      ],
    },
    {
      type: "category",
      label: "Extensions",
      items: [
        "enforcers",
        "adapters",
        "watchers",
        "dispatchers",
        "role-managers",
        "middlewares",
        "graphql-middlewares",
        "cloud-native",
      ],
    },
    {
      type: "category",
      label: "API",
      items: [
        "api-overview",
        "management-api",
        "rbac-api",
        "rbac-with-domains-api",
        "rolemanager-api",
        "data-permissions",
      ],
    },
    {
      type: "category",
      label: "Advanced usage",
      items: [
        "multi-threading",
        "benchmark",
        "performance",
        "k8s",
        "envoy",
      ],
    },
    {
      type: "category",
      label: "Management",
      items: [
        "admin-portal",
        "service",
        "log-error",
        "frontend",
      ],
    },
    {
      type: "category",
      label: "Editor",
      items: [
        "online-editor",
        "ide-plugins",
      ],
    },
    {
      type: "category",
      label: "More",
      items: [
        "adopters",
        "contributing",
        "privacy-policy",
        "terms-of-service",
      ],
    },
  ],
};
