/**
 * Mapping of language names to their icon URLs
 * Icons are sourced from the LanguageIntegration component
 */
export const languageIconMapping: Record<string, string> = {
  "Go": "/img/langs/go-logo-1.svg",
  "Golang": "/img/langs/go-logo-1.svg",
  "Java": "/img/langs/jee-3.svg",
  "C": "/img/langs/c.svg",
  "C++": "/img/langs/c.svg",
  "C/C++": "/img/langs/c.svg",
  "Node.js": "/img/langs/nodejs-1.svg",
  "Node": "/img/langs/nodejs-1.svg",
  "JavaScript": "/img/langs/logo-javascript.svg",
  "Front-end JavaScript": "/img/langs/logo-javascript.svg",
  "PHP": "/img/langs/PHP-logo.svg",
  "Laravel": "/img/langs/laravel-2.svg",
  "Python": "/img/langs/python-5.svg",
  ".NET": "/img/langs/dotnet-logo.svg",
  ".NET (C#)": "/img/langs/dotnet-logo.svg",
  "C#": "/img/langs/dotnet-logo.svg",
  "Delphi": "/img/langs/delphi-2.svg",
  "Rust": "/img/langs/rust.svg",
  "Ruby": "/img/langs/ruby.svg",
  "Swift": "/img/langs/swift-15.svg",
  "Swift (Objective-C)": "/img/langs/swift-15.svg",
  "Objective-C": "/img/langs/swift-15.svg",
  "Lua": "/img/langs/lua-5.svg",
  "Lua (OpenResty, Kong, APISIX)": "/img/langs/lua-5.svg",
  "Dart": "/img/langs/dart.svg",
  "Dart (Flutter)": "/img/langs/dart.svg",
  "Flutter": "/img/langs/dart.svg",
  "Elixir": "/img/langs/elixir-lang-icon.svg",
  "Cloud Native": "/img/langs/kubernets.svg",
  "Kubernetes": "/img/langs/kubernets.svg",
};

/**
 * Get the icon URL for a given language name
 * Returns undefined if no icon is found
 */
export function getLanguageIcon(languageName: string): string | undefined {
  return languageIconMapping[languageName];
}
