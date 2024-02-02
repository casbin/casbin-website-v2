export const AdapterRubyData = [
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
    title:
      "[Sequel Adapter](https://github.com/CasbinRuby/casbin-ruby-sql-adapter)",
    type: "ORM",
    author: "[CasbinRuby](https://github.com/CasbinRuby)",
    autoSave: "✅",
    description:
      "[ADO, Amalgalite, IBM_DB, JDBC, MySQL, Mysql2, ODBC, Oracle, PostgreSQL, SQLAnywhere, SQLite3, and TinyTDS](http://sequel.jeremyevans.net/) are supported by [Sequel](http://sequel.jeremyevans.net/)",
    image: "/img/ecosystem/SQL.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Ruby", "Adapter"],
  };
});
