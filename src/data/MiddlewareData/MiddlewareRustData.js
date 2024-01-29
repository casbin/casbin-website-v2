export const MiddlewareRustData = [
  {
    title: "[Actix](https://github.com/actix/actix)",
    description:
      "A Rust actors framework, via plugin: [actix-casbin](https://github.com/casbin-rs/actix-casbin)",
    image: require("/static/img/ecosystem/actix.png"),
  },
  {
    title: "[Actix web](https://github.com/actix/actix-web)",
    description:
      "A small, pragmatic, and extremely fast rust web framework, via plugin: [actix-casbin-auth](https://github.com/casbin-rs/actix-casbin-auth)",
    image: require("/static/img/ecosystem/actix.png"),
  },
  {
    title: "[Rocket](https://github.com/SergioBenitez/Rocket)",
    description:
      "a web framework for Rust that makes it simple to write fast, secure web applications without sacrificing flexibility, usability, or type safety, via plugin: [rocket-authz](https://github.com/casbin-rs/rocket-authz) or [rocket-casbin-auth](https://github.com/0xethsign/rocket-casbin-auth-app)",
    image: require("/static/img/ecosystem/rocket.jpeg"),
  },
  {
    title: "[Axum web](https://github.com/tokio-rs/axum)",
    description:
      "A ergonomic and modular rust web framework, via plugin: [axum-casbin-auth](https://github.com/casbin-rs/axum-casbin-auth)",
  },
  {
    title: "[Poem web](https://github.com/poem-web/poem)",
    description:
      "A full-featured and easy to use web framework with the Rust programming language, via plugin: [poem-casbin](https://github.com/casbin-rs/poem-casbin)",
    image: require("/static/img/ecosystem/poem.jpeg"),
  },
].map((item) => {
  return {
    ...item,
    tags: ["Rust", "middleware"],
  };
});
