export const MiddlewareJavaData = [
  {
    title: "[Spring Boot](https://projects.spring.io/spring-boot/)",
    description:
      "Makes it easy to create Spring-powered applications and services, via plugin: [casbin-spring-boot-starter](https://github.com/jcasbin/casbin-spring-boot-starter) or [Simple SpringBoot security demo with jCasbin](https://github.com/jveverka/spring-examples/tree/master/spring-jcasbin)",
    image: "/img/ecosystem/springboot.png",
  },
  {
    title: "[Apache Shiro](https://shiro.apache.org/)",
    description:
      "A powerful and easy-to-use Java security framework that performs authentication, authorization, cryptography, and session management, via plugin: [shiro-casbin](https://github.com/jcasbin/shiro-casbin) or [shiro-jcasbin-spring-boot-starter](https://github.com/mapleafgo/shiro-jcasbin-spring-boot-starter)",
    image: "/img/ecosystem/shiro.jpeg",
  },
  {
    title: "[JFinal](http://www.jfinal.com/)",
    description:
      "A simple, light, rapid, independent and extensible Java WEB + ORM framework, via plugin: [jfinal-authz](https://github.com/jcasbin/jfinal-authz)",
  },
  {
    title: "[Nutz](https://nutzam.com/)",
    description:
      "Web framework (MVC/IOC/AOP/DAO/JSON) for all Java developers, via plugin: [nutz-authz](https://github.com/jcasbin/nutz-authz)",
    image: "/img/ecosystem/nuzt.png",
  },
  {
    title: "[mangoo I/O](https://github.com/svenkubiak/mangooio)",
    description:
      "An intuitive, lightweight, high performance full stack Java web framework, via built-in plugin: [AuthorizationService.java](https://github.com/svenkubiak/mangooio/blob/e8c647a3f7c427bce27377025bec074f6d767f50/mangooio-core/src/main/java/io/mangoo/services/AuthorizationService.java)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Java", "Middleware"],
  };
});
