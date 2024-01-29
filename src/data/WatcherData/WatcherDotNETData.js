export const WatcherDotNETData = [
  {
    title: "[Redis Watcher](https://github.com/Sbou/Casbin.NET-Redis-Watcher)",
    type: "KV store",
    author: "[@Sbou](https://github.com/Sbou)",
    description: "Watcher for [Redis](http://redis.io/)",
    image: require("/static/img/ecosystem/redis.png"),
  },
].map((item) => {
  return {
    ...item,
    tags: ["dotNET", "watcher"],
  };
});
