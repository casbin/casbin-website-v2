export const MiddlewarePythonData = [
  {
    title: "[Django](https://www.djangoproject.com/)",
    description:
      "A high-level Python Web framework, via plugin: [django-casbin](https://github.com/officialpycasbin/django-casbin) or [django-casbin-auth](https://github.com/officialpycasbin/django-casbin-auth)",
    image: "/img/ecosystem/django.png",
  },
  {
    title: "[Flask](http://flask.pocoo.org/)",
    description:
      "A microframework for Python based on Werkzeug, Jinja 2 and good intentions, via plugin: [flask-authz](https://github.com/officialpycasbin/flask-authz) or [Flask-Casbin (3rd-party, but maybe more friendly)](https://github.com/daymien/Flask-Casbin) or [rbac-flask](https://github.com/daobeng/rbac-flask/tree/flask-casbin)",
    image: "/img/ecosystem/flask.png",
  },
  {
    title: "[FastAPI](https://github.com/tiangolo/fastapi)",
    description:
      "A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints, via plugin: [fastapi-casbin-auth](https://github.com/officialpycasbin/fastapi-casbin-auth) or [Fastapi-app](https://github.com/lqmanh/fastapi-app)",
    image: "/img/ecosystem/fastapi.png",
  },
  {
    title: "[OpenStack](https://www.openstack.org/)",
    description:
      "The most widely deployed open source cloud software in the world, via plugin: [openstack-patron](https://github.com/casbin/openstack-patron)",
    image: "/img/ecosystem/openstack.png",
  },
  {
    title: "[Tornado](https://www.tornadoweb.org/)",
    description:
      "Tornado is a Python web framework and asynchronous networking library, via plugin: [tornado-authz](https://github.com/officialpycasbin/tornado-authz)",
    image: "/img/ecosystem/tornado.png",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Python", "Middleware"],
  };
});
