export const AdapterJavaData = [
  {
    title: "[File Adapter (built-in)](/docs/adapters#file-adapter-built-in)",
    type: "File",
    author: "Casbin",
    autoSave: "❌",
    description:
      "For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files",
  },
  {
    title: "[JDBC Adapter](https://github.com/jcasbin/jdbc-adapter)",
    type: "JDBC",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, Oracle, PostgreSQL, DB2, Sybase, SQL Server are supported by [JDBC](https://docs.oracle.com/cd/E19226-01/820-7688/gawms/index.html)",
  },
  {
    title: "[Hibernate Adapter](https://github.com/jcasbin/hibernate-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "Oracle, DB2, SQL Server, Sybase, MySQL, PostgreSQL are supported by [Hibernate](http://www.hibernate.org/)",
  },
  {
    title: "[MyBatis Adapter](https://github.com/jcasbin/mybatis-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MySQL, Oracle, PostgreSQL, DB2, Sybase, SQL Server (the same as JDBC) are supported by [MyBatis 3](https://mybatis.org/mybatis-3/)",
  },
  {
    title: "[Hutool Adapter](https://github.com/mapleafgo/jcasbin-extra)",
    type: "ORM",
    author: "[@mapleafgo](https://github.com/mapleafgo)",
    autoSave: "✅",
    description:
      "MySQL, Oracle, PostgreSQL, SQLite are supported by [Hutool](https://github.com/looly/hutool)",
  },
  {
    title:
      "[MongoDB Adapter](https://github.com/zzl221000/jcasbin-mongo-adapter)",
    type: "NoSQL",
    author: "Casbin",
    autoSave: "✅",
    description:
      "MongoDB is supported by [mongodb-driver-sync](https://mongodb.github.io/mongo-java-driver/)",
  },
  {
    title: "[DynamoDB Adapter](https://github.com/jcasbin/dynamodb-adapter)",
    type: "NoSQL",
    author: "Casbin",
    autoSave: "❌",
    description: "For [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)",
  },
  {
    title: "[Redis Adapter](https://github.com/jcasbin/redis-adapter)",
    type: "KV store",
    author: "Casbin",
    autoSave: "✅",
    description: "For [Redis](https://redis.io/)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Java", "adapter"],
  };
});
