export const AdapterPhpData = [
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
    title: "[Database Adapter](https://github.com/php-casbin/database-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite, Microsoft SQL Server are supported by [techone/database](https://github.com/techoner/database)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[Zend Db Adapter](https://github.com/php-casbin/zend-db-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite, Oracle, IBM DB2, Microsoft SQL Server, Other PDO Driver are supported by [zend-db](https://docs.zendframework.com/zend-db/)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[Doctrine DBAL Adapter (Recommend)](https://github.com/php-casbin/dbal-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "Powerful PHP database abstraction layer ([DBAL](https://github.com/doctrine/dbal)) with many features for database schema introspection and management.",
    image: "/img/ecosystem/DBAL.png",
  },
  {
    title: "[Medoo Adapter](https://github.com/php-casbin/medoo-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "[Medoo](https://github.com/catfan/Medoo) is a lightweight PHP Database Framework to Accelerate Development, supports all SQL databases, including `MySQL`, `MSSQL`, `SQLite`, `MariaDB`, `PostgreSQL`, `Sybase`, `Oracle` and more.",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[Laminas-db Adapter](https://github.com/php-casbin/laminas-db-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, Oracle, IBM DB2, Microsoft SQL Server, PDO, etc. are supported by [laminas-db](https://github.com/laminas/laminas-db)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[Zend-db Adapter](https://github.com/php-casbin/zend-db-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, Oracle, IBM DB2, Microsoft SQL Server, PDO, etc. are supported by [zend-db](https://github.com/zendframework/zend-db)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[ThinkORM Adapter (ThinkPHP)](https://github.com/getandpost/tp3-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server, MongoDB are supported by [ThinkORM](https://github.com/top-think/think-orm)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[Redis Adapter](https://github.com/nsnake/CasbinAdapter-Redis-Adapter)",
    type: "KV store",
    author: "[@nsnake](https://github.com/nsnake)",
    autoSave: "❌",
    description: "For [Redis](https://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["PHP", "Adapter"],
  };
});
