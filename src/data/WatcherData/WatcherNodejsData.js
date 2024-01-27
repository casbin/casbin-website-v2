export const WatcherNodejsData = [
  {
    title: "[Etcd Watcher](https://github.com/node-casbin/etcd-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [etcd](https://github.com/coreos/etcd)",
  },
  {
    title: "[Redis Watcher](https://github.com/node-casbin/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
  },
  {
    title: "[Pub/Sub Watcher](https://github.com/node-casbin/pubsub-watcher)",
    type: "Messaging system",
    author: "Casbin",
    description:
      "Watcher for [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/docs)",
  },
  {
    title:
      "[MongoDB Change Streams Watcher](https://github.com/node-casbin/mongo-changestream-watcher)",
    type: "Database",
    author: "Casbin",
    description:
      "Watcher for [MongoDB Change Streams](https://www.mongodb.com/docs/manual/changeStreams/)",
  },
  {
    title: "[Postgres Watcher](https://github.com/mcollina/casbin-pg-watcher)",
    type: "Database",
    author: "[@mcollina](https://github.com/mcollina)",
    description: "Watcher for [PostgreSQL](https://www.postgresql.org/)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["NodeJS", "watcher"],
  };
});
