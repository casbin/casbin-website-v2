import React, {useEffect, useRef, useState} from "react";
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
    name: "Front-end JavaScript",
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
    name: "Swift (Objective-C)",
    icon: "https://cdn.casbin.org/language/swift-15.svg",
    url: "https://github.com/casbin/SwiftCasbin",
  },
  {
    name: "Lua (OpenResty, Kong, APISIX)",
    icon: "https://cdn.casbin.org/language/lua-5.svg",
    url: "https://github.com/casbin/lua-casbin",
  },
  {
    name: "Dart (Flutter)",
    icon: "https://cdn.casbin.org/language/dart.svg",
    url: "https://github.com/casbin/dart-casbin",
  },
  {
    name: "Elixir",
    icon: "https://cdn.casbin.org/language/elixir-lang-icon.svg",
    url: "https://github.com/casbin/casbin-ex",
  },
  {
    name: "Cloud Native",
    displayName: "Cloud Native",
    fullName: "Cloud Native (Kubernetes, Istio, Envoy, KubeSphere)",
    icon: "https://cdn.casbin.org/language/kubernets.svg",
    url: "/docs/cloud-native",
  },
];

export default function LanguageIntegration() {
  const [hoveredLanguage, setHoveredLanguage] = useState(null);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-carousel logic
  useEffect(() => {
    if (isPaused) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => {
        // After the last language (index 16), go to -1 (default view)
        // Then from -1, go to 0 (first language)
        if (prevIndex === languages.length - 1) {
          return -1;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Update hoveredLanguage based on currentLanguageIndex
  useEffect(() => {
    if (currentLanguageIndex >= 0 && !isPaused) {
      const language = languages[currentLanguageIndex];
      setHoveredLanguage(language.displayName || language.name);
    } else if (currentLanguageIndex === -1 && !isPaused) {
      setHoveredLanguage(null);
    }
  }, [currentLanguageIndex, isPaused]);

  const handleMouseEnter = (languageName, index) => {
    setIsPaused(true);
    setHoveredLanguage(languageName);
    setCurrentLanguageIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    // Keep the current language displayed and resume from current position
  };

  return (
    <div className={styles.languageIntegration}>
      <div className="container">
        <div className={styles.headlineContainer}>
          <h2 className={styles.headline}>
            Use Casbin with <span key={hoveredLanguage || "default"} className={styles.languageName}>{hoveredLanguage || "Multiple Languages"}</span>
          </h2>
        </div>
        <div className={styles.iconGrid} onMouseLeave={handleMouseLeave}>
          {languages.map((language, index) => {
            const isSelected = currentLanguageIndex === index;
            return (
              <Link
                key={language.name}
                to={language.url}
                className={styles.iconLink}
                aria-label={language.fullName || language.name}
              >
                <div
                  className={`${styles.iconContainer} ${isSelected ? styles.iconHovered : ""}`}
                  onMouseEnter={() => handleMouseEnter(language.displayName || language.name, index)}
                >
                  <img
                    src={language.icon}
                    alt={language.fullName || language.name}
                    className={styles.icon}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
