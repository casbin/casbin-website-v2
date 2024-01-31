export const MiddlewareSwiftData = [
  {
    title: "[Vapor](https://github.com/vapor/vapor)",
    description:
      "A server-side Swift web framework, via plugin: [vapor-authz](https://github.com/SwiftCasbin/vapor-authz)",
    image: "/img/ecosystem/vapor.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Swift", "Middleware"],
  };
});
