export const MiddlewareCppData = [
  {
    title: "[Nginx](https://nginx.org/)",
    description:
      "A HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server, via plugin: [nginx-casbin-module](https://github.com/casbin-cpp/nginx-casbin-module)",
    image: "/img/ecosystem/nginx.png",
  },
  {
    title: "[Mosquitto Plugin](https://github.com/gubertoli/mosquitto-casbin)",
    author: "[@gubertoli](https://github.com/gubertoli)",
    description:
      "Plugin for Mosquitto MQTT broker v2.0+ to manage access control via Casbin",
    image: "/img/ecosystem/mosquitto.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Cpp", "Middleware"],
  };
});
