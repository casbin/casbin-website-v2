export const MiddlewareNodejsData = [
  {
    title: "[Shield](https://github.com/odpf/shield)",
    description:
      "An authZ server and authZ aware reverse-proxy built on top of casbin.",
    image: "/img/ecosystem/express.png",
  },
  {
    title: "[Express](https://github.com/expressjs/express)",
    description:
      "Fast, unopinionated, minimalist web framework for node, via plugin: [express-authz](https://github.com/node-casbin/express-authz)",
    image: "/img/ecosystem/express.png",
  },
  {
    title: "[Koa](https://github.com/koajs/koa)",
    description:
      "Expressive middleware for node.js using ES2017 async functions, via plugin: [koa-authz](https://github.com/node-casbin/koa-authz) or [koajs-starter](https://github.com/djordjep/koajs-starter) or [koa-casbin](https://github.com/zcong1993/koa-casbin)",
    image: "/img/ecosystem/koa.png",
  },
  {
    title: "[LoopBack 4](https://github.com/koajs/koa)",
    description:
      "A highly extensible Node.js and TypeScript framework for building APIs and microservices, via plugin: [loopback4-authorization](https://github.com/sourcefuse/loopback4-authorization)",
    image: "/img/ecosystem/loopback.png",
  },
  {
    title: "[Nest](https://nestjs.com/)",
    description:
      "Progressive Node.js framework for building efficient and scalable server-side applications on top of TypeScript & JavaScript. via plugin: [nest-authz](https://github.com/dreamdevil00/nest-authz) or [nest-casbin](https://github.com/pardjs/nest-casbin) or [NestJS Casbin Module](https://github.com/switchit-conseil/nestjs-casbin-module) or [nestjs-casbin](https://github.com/juicycleff/nestjs-casbin) or [acl-nest](https://github.com/Twiddlle/acl-nest) or [nestjs-casbin-typeorm](https://github.com/0xb4lamx/nestjs-casbin-typeorm)",
    image: "/img/ecosystem/nest.png",
  },

  {
    title: "[Fastify](https://github.com/fastify/fastify)",
    description:
      "Fast and low overhead web framework, for Node.js. via plugin: [fastify-casbin](https://github.com/nearform/fastify-casbin) or [fastify-casbin-rest](https://github.com/nearform/fastify-casbin-rest)",
    image: "/img/ecosystem/fastify.png",
  },
  {
    title: "[Egg](https://github.com/eggjs/egg)",
    description:
      "Born to build better enterprise frameworks and apps with Node.js & Koa, via plugin: [egg-authz](https://github.com/node-casbin/egg-authz) or [egg-zrole](https://github.com/klren0312/egg-zrole)",
    image: "/img/ecosystem/egg.jpeg",
  },
  {
    title: "[hapi](https://hapi.dev/)",
    description:
      "The Simple, Secure Framework Developers Trust. via plugin: [hapi-authz](https://github.com/node-casbin/hapi-authz)",
    image: "/img/ecosystem/hapi.png",
  },
  {
    title:
      "[Casbin JWT Express](https://github.com/tiagostutz/casbin-jwt-express)",
    description:
      "Authorization middleware that uses stateless JWT token to validate ACL rules using Casbin",
    image: "/img/ecosystem/jwt.png",
  },  
  {
    title:
      "[Hono](https://github.com/honojs/hono) ",
    description:
      "Fast, lightweight, built on Web Standards. via plugin: [@hono/casbin](https://github.com/honojs/middleware/tree/main/packages/casbin)",
    image: "/img/ecosystem/hono.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["NodeJS", "Middleware"],
  };
});
