export const WatcherPythonData = [
  {
    title: "[Etcd Watcher](https://github.com/officialpycasbin/etcd-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [etcd](https://github.com/coreos/etcd)",
    image: "/img/ecosystem/etcd.png",
  },
  {
    title: "[Redis Watcher](https://github.com/officialpycasbin/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title:
      "[Redis Watcher](https://github.com/ScienceLogic/flask-casbin-redis-watcher)",
    type: "KV store",
    author: "[ScienceLogic](https://github.com/ScienceLogic)",
    description: "Watcher for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title:
      "[Redis Async Watcher](https://github.com/kevinkelin/casbin_async_redis_watcher)",
    type: "KV store",
    author: "[@kevinkelin](https://github.com/kevinkelin)",
    description: "Watcher for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title:
      "[PostgreSQL Watcher](https://github.com/officialpycasbin/postgresql-watcher)",
    type: "Database",
    author: "Casbin",
    description: "Watcher for [PostgreSQL](https://www.postgresql.org/)",
    image: "/img/ecosystem/redis.png",
  },
  {
    title: "[RabbitMQ Watcher](https://github.com/officialpycasbin/rabbitmq-watcher)",
    type: "Messaging system",
    author: "Casbin",
    description: "Watcher for [RabbitMQ](https://www.rabbitmq.com/)",
    image: "/img/ecosystem/rabbitMQ.png",
  },
  {
    title:
      "[MongoDB Watcher](https://github.com/sanguinedab/pycasbin-mongo-watcher)",
    type: "Database",
    author: "[@sanguinedab](https://github.com/sanguinedab)",
    description: "Watcher for [MongoDB](https://www.mongodb.com/)",
    image: "/img/ecosystem/monogoDB.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Python", "Watcher"],
  };
});
