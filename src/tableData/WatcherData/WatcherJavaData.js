export const WatcherJavaData = [
  {
    title: "[Etcd Adapter](https://github.com/mapleafgo/jcasbin-extra)",
    type: "KV store",
    author: "[@mapleafgo](https://github.com/mapleafgo)",
    description: "Watcher for [etcd](https://github.com/coreos/etcd)",
    image: "/img/ecosystem/etcd.png",
  },
  {
    title: "[Redis Watcher](https://github.com/jcasbin/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title: "[Redis WatcherEx](https://github.com/jcasbin/redis-watcher-ex)",
    type: "KV store",
    author: "Casbin",
    description: "WatcherEx for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title:
      "[Lettuce-Based Redis Watcher](https://github.com/jcasbin/lettuce-redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description:
      "Watcher for [Redis](http://redis.io/) based on [Lettuce](https://lettuce.io/))",
    image: "/img/ecosystem/lettuce.png",
  },
  {
    title:
      "[PostgreSQL Watcher](https://github.com/jcasbin/jcasbin-postgres-watcher)",
    type: "Database",
    author: "Casbin",
    description: "Watcher for [PostgreSQL](https://www.postgresql.org/)",
    image: "/img/ecosystem/postgreSQL.png",
  },
  {
    title: "[Kafka Watcher](https://github.com/jcasbin/kafka-watcher)",
    type: "Messaging system",
    author: "Casbin",
    description: "Watcher for [Apache Kafka](https://kafka.apache.org/)",
    image: "/img/ecosystem/kafka.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Java", "Watcher"],
  };
});
