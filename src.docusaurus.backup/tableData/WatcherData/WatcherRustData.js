export const WatcherRustData = [
  {
    title: "[Redis Watcher](https://github.com/casbin-rs/redis-watcher)",
    type: "KV store",
    author: "Casbin",
    description: "Watcher for [Redis](http://redis.io/)",
    image: "/img/ecosystem/redis.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Rust", "Watcher"],
  };
});
