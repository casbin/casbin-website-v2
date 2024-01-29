export const WatcherPythonData = [
  {
    title: "[Etcd Watcher](https://github.com/pycasbin/etcd-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [etcd](https://github.com/coreos/etcd)",
    image: require("/static/img/ecosystem/etcd.png"),
  },
  {
    title: "[Redis Watcher](https://github.com/pycasbin/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
    image: require("/static/img/ecosystem/redis.png"),
  },
  {
    title:
      "[Redis Watcher](https://github.com/ScienceLogic/flask-casbin-redis-watcher)",
    type: "KV store",
    author: "[ScienceLogic](https://github.com/ScienceLogic)",
    description: "Watcher for [Redis](http://redis.io/)",
    image: require("/static/img/ecosystem/redis.png"),
  },
  {
    title:
      "[Redis Async Watcher](https://github.com/kevinkelin/casbin_async_redis_watcher)",
    type: "KV store",
    author: "[@kevinkelin](https://github.com/kevinkelin)",
    description: "Watcher for [Redis](http://redis.io/)",
    image: require("/static/img/ecosystem/redis.png"),
  },
  {
    title:
      "[PostgreSQL Watcher](https://github.com/pycasbin/postgresql-watcher)",
    type: "Database",
    author: "Casbin",
    description: "Watcher for [PostgreSQL](https://www.postgresql.org/)",
    image: require("/static/img/ecosystem/redis.png"),
  },
  {
    title: "[RabbitMQ Watcher](https://github.com/pycasbin/rabbitmq-watcher)",
    type: "Messaging system",
    author: "Casbin",
    description: "Watcher for [RabbitMQ](https://www.rabbitmq.com/)",
    image: require("/static/img/ecosystem/rabbitMQ.png"),
  },
].map((item) => {
  return {
    ...item,
    tags: ["Python", "Watcher"],
  };
});
