export const MiddlewareLuaData = [
  {
    title: "[OpenResty](https://openresty.org/)",
    description:
      "A dynamic web platform based on NGINX and LuaJIT, via plugin: [lua-resty-casbin](https://github.com/casbin-lua/lua-resty-casbin) and [casbin-openresty-example](https://github.com/rushitote/casbin-openresty-example)",
  },
  {
    title: "[Kong](https://github.com/Kong/kong)",
    description:
      "A cloud-native, platform-agnostic, scalable API Gateway distinguished for its high performance and extensibility via plugins, via plugin: [kong-authz](https://github.com/casbin-lua/kong-authz)",
  },
  {
    title: "[APISIX](https://github.com/apache/apisix)",
    description:
      "A dynamic, real-time, high-performance API gateway, via plugin: [authz-casbin](https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/authz-casbin.md)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Lua", "middleware"],
  };
});
