import js from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";

export default [
  {
    ignores: [
      "node_modules",
      ".next",
      "out",
      "build",
      ".docusaurus",
      "src.docusaurus.backup/**",
      "*.backup.js",
      "static/**",
      "webpack.config.js",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react,
      "@next/next": next,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["*.config.{js,mjs}"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
