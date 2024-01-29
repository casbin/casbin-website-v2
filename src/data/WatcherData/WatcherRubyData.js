export const WatcherRubyData = [
  {
    title:
      "[Redis Watcher](https://github.com/CasbinRuby/casbin-ruby-redis-watcher)",
    type: "KV store",
    author: "[CasbinRuby](https://github.com/CasbinRuby)",
    description: "Watcher for [Redis](http://redis.io/)",
    image: require("/static/img/ecosystem/redis.png"),
  },
  {
    title:
      "[RabbitMQ Watcher](https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher)",
    type: "Messaging system",
    author: "[CasbinRuby](https://github.com/CasbinRuby)",
    description: "Watcher for [RabbitMQ](https://www.rabbitmq.com/)",
    image: require("/static/img/ecosystem/rabbitMQ.png"),
  },
].map((item) => {
  return {
    ...item,
    tags: ["Ruby", "watcher"],
  };
});
