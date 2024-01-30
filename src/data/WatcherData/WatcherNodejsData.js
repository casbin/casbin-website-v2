export const WatcherNodejsData = [
  {
    title: "[Etcd Watcher](https://github.com/node-casbin/etcd-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [etcd](https://github.com/coreos/etcd)",
    image: "/img/ecosystem/etcd.png",
  },
  {
    title: "[Redis Watcher](https://github.com/node-casbin/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title: "[Pub/Sub Watcher](https://github.com/node-casbin/pubsub-watcher)",
    type: "Messaging system",
    author: "Casbin",
    description:
      "Watcher for [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/docs)",
    image: "/img/ecosystem/pubsub.png",
  },
  {
    title:
      "[MongoDB Change Streams Watcher](https://github.com/node-casbin/mongo-changestream-watcher)",
    type: "Database",
    author: "Casbin",
    description:
      "Watcher for [MongoDB Change Streams](https://www.mongodb.com/docs/manual/changeStreams/)",
    image: "/img/ecosystem/monogoDB.png",
  },
  {
    title: "[Postgres Watcher](https://github.com/mcollina/casbin-pg-watcher)",
    type: "Database",
    author: "[@mcollina](https://github.com/mcollina)",
    description: "Watcher for [PostgreSQL](https://www.postgresql.org/)",
    image: "/img/ecosystem/postgreSQL.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["NodeJS", "Watcher"],
  };
});
