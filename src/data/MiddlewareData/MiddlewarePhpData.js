export const MiddlewarePhpData = [
  {
    title: "[Laravel](https://laravel.com/)",
    description:
      "The PHP framework for web artisans, via plugin: [laravel-authz](https://github.com/php-casbin/laravel-authz)",
    image: require("/static/img/ecosystem/laravel.png"),
  },
  {
    title: "[Yii PHP Framework](https://www.yiiframework.com/)",
    description:
      "A fast, secure, and efficient PHP framework, via plugin: [yii-permission](https://github.com/php-casbin/yii-permission) or [yii-casbin](https://github.com/php-casbin/yii-casbin)",
    image: require("/static/img/ecosystem/yii.png"),
  },
  {
    title: "[CakePHP](https://cakephp.org/)",
    description:
      "Build fast, grow solid PHP Framework, via plugin: [cake-permission](https://github.com/php-casbin/cake-permission)",
    image: require("/static/img/ecosystem/cake.png"),
  },
  {
    title: "[CodeIgniter](https://codeigniter.com/)",
    description:
      "Associate users with roles and permissions in CodeIgniter4 Web Framework, via plugin: [CodeIgniter Permission](https://github.com/php-casbin/codeigniter-permission)",
    image: require("/static/img/ecosystem/codeIgniter.png"),
  },
  {
    title: "[ThinkPHP 5.1](https://www.thinkphp.cn/)",
    description:
      "The ThinkPHP 5.1 framework, via plugin: [think-casbin](https://github.com/php-casbin/think-casbin)",
    image: require("/static/img/ecosystem/thinkPHP.png"),
  },
  {
    title: "[ThinkPHP 6.0](https://www.thinkphp.cn/)",
    description:
      "The ThinkPHP 6.0 framework, via plugin: [think-authz](https://github.com/php-casbin/think-authz)",
    image: require("/static/img/ecosystem/thinkPHP.png"),
  },
  {
    title: "[Symfony](https://symfony.com/)",
    description:
      "The Symfony PHP framework, via plugin: [symfony-permission](https://github.com/php-casbin/symfony-permission) or [symfony-casbin](https://github.com/videni/symfony-casbin)",
    image: require("/static/img/ecosystem/symfony.png"),
  },
  {
    title: "[Hyperf](https://github.com/hyperf/hyperf)",
    description:
      "A coroutine framework that focuses on hyperspeed and flexibility, via plugin: [hyperf-permission](https://github.com/php-casbin/hyperf-permission) or [donjan-deng/hyperf-casbin](https://github.com/donjan-deng/hyperf-casbin) or [cblink/hyperf-casbin](https://github.com/cblink/hyperf-casbin)",
  },
  {
    title: "[EasySwoole](https://www.easyswoole.com/)",
    description:
      "A distributed, persistent memory PHP framework based on the Swoole extension, via plugin: [easyswoole-permission](https://github.com/php-casbin/easyswoole-permission) or [easyswoole-hyperfOrm-permission](https://github.com/ice-leng/easyswoole-hyperfOrm-permission)",
  },
  {
    title: "[Slim](https://www.slimframework.com/)",
    description:
      "A PHP micro framework that helps you quickly write simple yet powerful web applications and APIs, via plugin: [casbin-with-slim](https://github.com/php-casbin/casbin-with-slim)",
  },
  {
    title: "[Phalcon](https://phalcon.io/)",
    description:
      "A full-stack PHP framework delivered as a C-extension, via plugin: [phalcon-permission](https://github.com/php-casbin/phalcon-permission)",
    image: require("/static/img/ecosystem/phalcon.png"),
  },
  {
    title: "[Webman](https://github.com/walkor/webman)",
    description:
      "High performance HTTP Service Framework for PHP based on Workerman, via plugin: [webman-permission](https://github.com/php-casbin/webman-permission) or [webman-casbin](https://github.com/sunsgneayo/webman-casbin)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["PHP", "middleware"],
  };
});
