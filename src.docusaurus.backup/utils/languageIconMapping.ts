/**
 * Mapping of language names to their icon URLs
 * Icons are sourced from the LanguageIntegration component
 */
export const languageIconMapping: Record<string, string> = {
  "Go": "https://cdn.casbin.org/language/go-logo-1.svg",
  "Golang": "https://cdn.casbin.org/language/go-logo-1.svg",
  "Java": "https://cdn.casbin.org/language/jee-3.svg",
  "C": "https://cdn.casbin.org/language/c.svg",
  "C++": "https://cdn.casbin.org/language/c.svg",
  "C/C++": "https://cdn.casbin.org/language/c.svg",
  "Node.js": "https://cdn.casbin.org/language/nodejs-1.svg",
  "Node": "https://cdn.casbin.org/language/nodejs-1.svg",
  "JavaScript": "https://cdn.casbin.org/language/logo-javascript.svg",
  "Front-end JavaScript": "https://cdn.casbin.org/language/logo-javascript.svg",
  "PHP": "https://cdn.casbin.org/language/PHP-logo.svg",
  "Laravel": "https://cdn.casbin.org/language/laravel-2.svg",
  "Python": "https://cdn.casbin.org/language/python-5.svg",
  ".NET": "https://cdn.casbin.org/language/dotnet-logo.svg",
  ".NET (C#)": "https://cdn.casbin.org/language/dotnet-logo.svg",
  "C#": "https://cdn.casbin.org/language/dotnet-logo.svg",
  "Delphi": "https://cdn.casbin.org/language/delphi-2.svg",
  "Rust": "https://cdn.casbin.org/language/rust.svg",
  "Ruby": "https://cdn.casbin.org/language/ruby.svg",
  "Swift": "https://cdn.casbin.org/language/swift-15.svg",
  "Swift (Objective-C)": "https://cdn.casbin.org/language/swift-15.svg",
  "Objective-C": "https://cdn.casbin.org/language/swift-15.svg",
  "Lua": "https://cdn.casbin.org/language/lua-5.svg",
  "Lua (OpenResty, Kong, APISIX)": "https://cdn.casbin.org/language/lua-5.svg",
  "Dart": "https://cdn.casbin.org/language/dart.svg",
  "Dart (Flutter)": "https://cdn.casbin.org/language/dart.svg",
  "Flutter": "https://cdn.casbin.org/language/dart.svg",
  "Elixir": "https://cdn.casbin.org/language/elixir-lang-icon.svg",
  "Cloud Native": "https://cdn.casbin.org/language/kubernets.svg",
  "Kubernetes": "https://cdn.casbin.org/language/kubernets.svg",
};

/**
 * Get the icon URL for a given language name
 * Returns undefined if no icon is found
 */
export function getLanguageIcon(languageName: string): string | undefined {
  return languageIconMapping[languageName];
}
