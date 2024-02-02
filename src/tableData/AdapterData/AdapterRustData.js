export const AdapterRustData = [
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
    title: "[Diesel Adapter](https://github.com/casbin-rs/diesel-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "[SQLite, PostgreSQL, MySQL](https://github.com/diesel-rs/diesel/blob/master/guide_drafts/backend_installation.md) are supported by [Diesel](http://diesel.rs/)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[Sqlx Adapter](https://github.com/casbin-rs/sqlx-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL are supported by [Sqlx](https://github.com/launchbadge/sqlx) with fully asynchronous operation",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[SeaORM Adapter](https://github.com/lingdu1234/sea_orm_casbin_adapter)",
    type: "ORM",
    author: "[@lingdu1234](https://github.com/lingdu1234)",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite are supported by [SeaORM](https://github.com/SeaQL/sea-orm) with fully asynchronous operation",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[SeaORM Adapter](https://github.com/ZihanType/sea-orm-adapter)",
    type: "ORM",
    author: "[@ZihanType](https://github.com/ZihanType)",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite are supported by [SeaORM](https://github.com/SeaQL/sea-orm) with fully asynchronous operation",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[Rbatis Adapter](https://github.com/jiashiwen/casbin-rbatis-adapter)",
    type: "ORM",
    author: "[rbatis](https://github.com/rbatis)",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite, SQL Server, MariaDB, TiDB, CockroachDB, Oracle are supported by [Rbatis](https://github.com/rbatis/rbatis)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[DynamodDB Adapter](https://github.com/fospitia/dynamodb-adapter)",
    type: "NoSQL",
    author: "[@fospitia](https://github.com/fospitia)",
    autoSave: "✅",
    description: "For [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)",
    image: "/img/ecosystem/dynamoDB.png",
  },
  {
    title:
      "[MongoDB Adapter](https://github.com/wangjun861205/nb-mongo-adapter)",
    type: "MongoDB",
    author: "[@wangjun861205](https://github.com/wangjun861205)",
    autoSave: "✅",
    description: "For [MongoDB](https://www.mongodb.com)",
    image: "/img/ecosystem/monogoDB.png",
  },
  {
    title: "[JSON Adapter](http://github.com/casbin-rs/json-adapter)",
    type: "String",
    author: "Casbin",
    autoSave: "✅",
    description: "For [JSON](https://json.org/)",
    image: "/img/ecosystem/json.png",
  },
  {
    title: "[YAML Adapter](https://github.com/casbin-rs/yaml-adapter)",
    type: "String",
    author: "Casbin",
    autoSave: "✅",
    description: "For [YAML](https://yaml.org/)",
    image: "/img/ecosystem/yaml.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Rust", "Adapter"],
  };
});
