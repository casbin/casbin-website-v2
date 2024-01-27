export const WatcherJavaData = [
  {
    title: "[Etcd Adapter](https://github.com/mapleafgo/jcasbin-extra)",
    type: "KV store",
    author: "[@mapleafgo](https://github.com/mapleafgo)",
    description: "Watcher for [etcd](https://github.com/coreos/etcd)",
  },
  {
    title: "[Redis Watcher](https://github.com/jcasbin/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
  },
  {
    title:
      "[Lettuce-Based Redis Watcher](https://github.com/jcasbin/lettuce-redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description:
      "Watcher for [Redis](http://redis.io/) based on [Lettuce](https://lettuce.io/))",
  },
  {
    title: "[Kafka Watcher](https://github.com/jcasbin/kafka-watcher)",
    type: "Messaging system",
    author: "Casbin",
    description: "Watcher for [Apache Kafka](https://kafka.apache.org/)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Java", "watcher"],
  };
});
