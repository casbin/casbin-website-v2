import React, {useState} from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const languages = [
  {
    name: "Golang",
    icon: "https://cdn.casbin.org/language/go-logo-1.svg",
    url: "https://github.com/casbin",
  },
  {
    name: "Java",
    icon: "https://cdn.casbin.org/language/jee-3.svg",
    url: "https://github.com/casbin/jcasbin",
  },
  {
    name: "C/C++",
    icon: "https://cdn.casbin.org/language/c.svg",
    url: "https://github.com/casbin/casbin-cpp",
  },
  {
    name: "Node.js",
    icon: "https://cdn.casbin.org/language/nodejs-1.svg",
    url: "https://github.com/casbin/node-casbin",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.casbin.org/language/logo-javascript.svg",
    url: "https://github.com/casbin/casbin.js",
  },
  {
    name: "PHP",
    icon: "https://cdn.casbin.org/language/PHP-logo.svg",
    url: "https://github.com/php-casbin/php-casbin",
  },
  {
    name: "Laravel",
    icon: "https://cdn.casbin.org/language/laravel-2.svg",
    url: "https://github.com/php-casbin/laravel-authz",
  },
  {
    name: "Python",
    icon: "https://cdn.casbin.org/language/python-5.svg",
    url: "https://github.com/casbin/pycasbin",
  },
  {
    name: ".NET (C#)",
    icon: "https://cdn.casbin.org/language/dotnet-logo.svg",
    url: "https://github.com/casbin/Casbin.NET",
  },
  {
    name: "Delphi",
    icon: "https://cdn.casbin.org/language/delphi-2.svg",
    url: "https://github.com/casbin4d/Casbin4D",
  },
  {
    name: "Rust",
    icon: "https://cdn.casbin.org/language/rust.svg",
    url: "https://github.com/casbin/casbin-rs",
  },
  {
    name: "Ruby",
    icon: "https://cdn.casbin.org/language/ruby.svg",
    url: "https://github.com/CasbinRuby/casbin-ruby",
  },
  {
    name: "Swift",
    icon: "https://cdn.casbin.org/language/swift-15.svg",
    url: "https://github.com/casbin/SwiftCasbin",
  },
  {
    name: "Lua",
    icon: "https://cdn.casbin.org/language/lua-5.svg",
    url: "https://github.com/casbin/lua-casbin",
  },
  {
    name: "Dart",
    icon: "https://cdn.casbin.org/language/dart.svg",
    url: "https://github.com/casbin/dart-casbin",
  },
  {
    name: "Elixir",
    icon: "https://cdn.casbin.org/language/elixir-lang-icon.svg",
    url: "https://github.com/casbin/casbin-ex",
  },
];

export default function LanguageIntegration() {
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  return (
    <div className={styles.languageIntegration}>
      <div className="container">
        <h2 className={styles.headline}>
          Native Support for <span className={styles.languageName}>{hoveredLanguage || "Multiple Languages"}</span>
        </h2>
        <div className={styles.iconGrid}>
          {languages.map((language) => (
            <Link
              key={language.name}
              to={language.url}
              className={styles.iconLink}
              onMouseEnter={() => setHoveredLanguage(language.name)}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              <div className={`${styles.iconContainer} ${hoveredLanguage === language.name ? styles.iconHovered : ""}`}>
                <img
                  src={language.icon}
                  alt={language.name}
                  className={styles.icon}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
