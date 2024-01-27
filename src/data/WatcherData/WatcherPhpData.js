export const WatcherPhpData = [
  {
    title: "[Redis Watcher](https://github.com/php-casbin/webman-permission)",
    type: "KV store",
    author: "[@Tinywan](https://github.com/Tinywan)",
    description: "Watcher for [Redis](http://redis.io/)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["PHP", "watcher"],
  };
});
