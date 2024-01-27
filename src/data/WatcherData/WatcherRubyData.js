export const WatcherRubyData = [
  {
    title:
      "[Redis Watcher](https://github.com/CasbinRuby/casbin-ruby-redis-watcher)",
    type: "KV store",
    author: "[CasbinRuby](https://github.com/CasbinRuby)",
    description: "Watcher for [Redis](http://redis.io/)",
  },
  {
    title:
      "[RabbitMQ Watcher](https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher)",
    type: "Messaging system",
    author: "[CasbinRuby](https://github.com/CasbinRuby)",
    description: "Watcher for [RabbitMQ](https://www.rabbitmq.com/)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Ruby", "watcher"],
  };
});
