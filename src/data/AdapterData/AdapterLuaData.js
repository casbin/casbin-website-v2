export const AdapterLuaData = [
  {
    title: "[File Adapter (built-in)](/docs/adapters#file-adapter-built-in)",
    type: "File",
    author: "Casbin",
    autoSave: "❌",
    description:
      "For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files",
    image: "/img/ecosystem/file.png",
  },
  {
    title: "[Filtered File Adapter (built-in)](/docs/policy-subset-loading)",
    type: "File",
    author: "Casbin",
    autoSave: "❌",
    description:
      "For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files with policy subset loading support",
    image: "/img/ecosystem/file.png",
  },
  {
    title: "[LuaSQL Adapter](https://github.com/casbin-lua/luasql-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite3 are supported by [LuaSQL](http://lunarmodules.github.io/luasql/)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[4DaysORM Adapter](https://github.com/casbin-lua/4daysorm-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, SQLite3 are supported by [4DaysORM](https://github.com/itdxer/4DaysORM)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[OpenResty Adapter](https://github.com/tom2nonames/lua-resty-casbin-adapter)",
    type: "ORM",
    author: "[@tom2nonames](https://github.com/tom2nonames)",
    autoSave: "✅",
    description: "MySQL, PostgreSQL are supported by it",
    image: "/img/ecosystem/SQL.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Lua", "Adapter"],
  };
});
