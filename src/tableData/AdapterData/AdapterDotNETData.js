export const AdapterDotNETData = [
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
    title: "[EF Adapter](https://github.com/casbin-net/EF-Adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "❌",
    description:
      "MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle, DB2, etc. are supported by [Entity Framework 6](https://docs.microsoft.com/en-us/ef/ef6/)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[EFCore Adapter](https://github.com/casbin-net/EFCore-Adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle, DB2, etc. are supported by [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title: "[Linq2DB Adapter](https://github.com/Tirael/Linq2DB-Adapter)",
    type: "ORM",
    author: "[@Tirael](https://github.com/Tirael)",
    autoSave: "✅",
    description:
      "[MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle, Access, Firebird, Sybase, etc.](https://github.com/linq2db/linq2db/blob/master/Tests/Base/TestProvName.cs) are supported by [linq2db](https://github.com/linq2db/linq2db)",
    image: "/img/ecosystem/SQL.png",
  },
  {
    title:
      "[Azure Cosmos DB Adapter](https://github.com/sagarkhandelwal/Casbin-Using-Cosmos)",
    type: "Cloud",
    author: "[@sagarkhandelwal](https://github.com/sagarkhandelwal)",
    autoSave: "✅",
    description:
      "For [Microsoft Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)",
    image: "/img/ecosystem/cosmosDB.png",
  },
  {
    title: "[Redis Adapter](https://github.com/casbin-net/redis-adapter)",
    type: "KV store",
    author: "Casbin",
    autoSave: "✅",
    description:
      "For [Redis](https://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["dotNET", "Adapter"],
  };
});
