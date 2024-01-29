export const MiddlewareCppData = [
  {
    title: "[Nginx](https://nginx.org/)",
    description:
      "A HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server, via plugin: [nginx-casbin-module](https://github.com/casbin-cpp/nginx-casbin-module)",
    image: require("/static/img/ecosystem/nginx.png"),
  },
].map((item) => {
  return {
    ...item,
    tags: ["Cpp", "Middleware"],
  };
});
