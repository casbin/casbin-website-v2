export const AdapterPythonData = [
  {
    title: "[File Adapter (built-in)](/docs/adapters#file-adapter-built-in)",
    type: "File",
    author: "Casbin",
    autoSave: "❌",
    description:
      "For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files",
  },
  {
    title:
      "[Django ORM Adapter](https://github.com/pycasbin/django-orm-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "PostgreSQL, MariaDB, MySQL, Oracle, SQLite, IBM DB2, Microsoft SQL Server, Firebird, ODBC are supported by [Django ORM](https://docs.djangoproject.com/en/3.0/ref/databases/)",
  },
  {
    title: "[SQLObject Adapter](https://github.com/pycasbin/sqlobject-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite, Microsoft SQL Server, Firebird, Sybase, MAX DB, pyfirebirdsql are supported by [SQLObject](http://www.sqlobject.org/index.html)",
  },
  {
    title:
      "[SQLAlchemy Adapter](https://github.com/pycasbin/sqlalchemy-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, Firebird, Sybase are supported by [SQLAlchemy](https://www.sqlalchemy.org/)",
  },
  {
    title:
      "[Async SQLAlchemy Adapter](https://github.com/pycasbin/async-sqlalchemy-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, Firebird, Sybase are supported by [SQLAlchemy](https://www.sqlalchemy.org/)",
  },
  {
    title:
      "[Async Databases Adapter](https://github.com/pycasbin/casbin-databases-adapter)",
    type: "ORM",
    author: "Casbin",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, Firebird, Sybase are supported by [Databases](https://www.encode.io/databases/)",
  },
  {
    title: "[Peewee Adapter](https://github.com/shblhy/peewee-adapter)",
    type: "ORM",
    author: "[@shblhy](https://github.com/shblhy)",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite are supported by [Peewee](http://docs.peewee-orm.com/)",
  },
  {
    title:
      "[MongoEngine Adapter](https://github.com/zhangbailong945/mongoengine_adapter)",
    type: "ORM",
    author: "[@zhangbailong945](https://github.com/zhangbailong945)",
    autoSave: "❌",
    description:
      "MongoDB is supported by [MongoEngine](http://mongoengine.org/)",
  },
  {
    title:
      "[Pony ORM Adapter](https://github.com/drorvinkler/pycasbin-pony-adapter)",
    type: "ORM",
    author: "[@drorvinkler](https://github.com/drorvinkler)",
    autoSave: "✅",
    description:
      "MySQL, PostgreSQL, SQLite, Oracle, CockroachDB are supported by [Pony ORM](https://ponyorm.org/)",
  },
  {
    title:
      "[Tortoise ORM Adapter](https://github.com/thearchitector/casbin-tortoise-adapter)",
    type: "ORM",
    author: "[@thearchitector](https://github.com/thearchitector)",
    autoSave: "✅",
    description:
      "PostgreSQL (>=9.4), MySQL, MariaDB, and SQLite are supported by [Tortoise ORM](https://tortoise.github.io/databases.html)",
  },
  {
    title:
      "[Async Ormar Adapter](https://github.com/shepilov-vladislav/ormar-casbin-adapter)",
    type: "ORM",
    author: "[@shepilov-vladislav](https://github.com/shepilov-vladislav)",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite are supported by [Ormar](https://github.com/collerek/ormar/)",
  },
  {
    title:
      "[SQLModel Adapter](https://github.com/shepilov-vladislav/async-casbin-sqlmodel-adapter)",
    type: "ORM",
    author: "[@shepilov-vladislav](https://github.com/shepilov-vladislav)",
    autoSave: "✅",
    description:
      "PostgreSQL, MySQL, SQLite are supported by [SQLModel](https://github.com/tiangolo/sqlmodel)",
  },
  {
    title:
      "[Couchbase Adapter](https://github.com/ScienceLogic/casbin-couchbase-adapter)",
    type: "NoSQL",
    author: "[ScienceLogic](https://github.com/ScienceLogic)",
    autoSave: "✅ (without `remove_filtered_policy()`)",
    description: "For [Couchbase](https://www.couchbase.com/)",
  },
  {
    title: "[DynamoDB Adapter](https://github.com/abqadeer/python-dycasbin)",
    type: "NoSQL",
    author: "[@abqadeer](https://github.com/abqadeer/)",
    autoSave: "✅",
    description: "For [DynamoDB](https://aws.amazon.com/dynamodb/)",
  },
  {
    title: "[Pymongo Adapter](https://github.com/pycasbin/pymongo-adapter)",
    type: "NoSQL",
    author: "Casbin",
    autoSave: "❌",
    description:
      "MongoDB is supported by [Pymongo](https://pypi.org/project/pymongo/)",
  },
  {
    title: "[Redis Adapter](https://github.com/pycasbin/redis-adapter)",
    type: "KV store",
    author: "Casbin",
    autoSave: "✅",
    description: "For [Redis](https://redis.io/)",
  },
  {
    title:
      "[GCP Firebase Adapter](https://github.com/devrushi41/pycasbin-firebase-adapter)",
    type: "Cloud",
    author: "[@devrushi41](https://github.com/devrushi41)",
    autoSave: "✅",
    description:
      "For [Google Cloud Platform Firebase](https://firebase.google.com/)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Python", "adapter"],
  };
});
