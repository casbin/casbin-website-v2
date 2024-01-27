export const MiddlewarePythonData = [
  {
    title: "[Django](https://www.djangoproject.com/)",
    description:
      "A high-level Python Web framework, via plugin: [django-casbin](https://github.com/pycasbin/django-casbin) or [django-authorization](https://github.com/pycasbin/django-authorization)",
  },
  {
    title: "[Flask](http://flask.pocoo.org/)",
    description:
      "A microframework for Python based on Werkzeug, Jinja 2 and good intentions, via plugin: [flask-authz](https://github.com/pycasbin/flask-authz) or [Flask-Casbin (3rd-party, but maybe more friendly)](https://github.com/daymien/Flask-Casbin) or [rbac-flask](https://github.com/daobeng/rbac-flask/tree/flask-casbin)",
  },
  {
    title: "[FastAPI](https://github.com/tiangolo/fastapi)",
    description:
      "A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints, via plugin: [fastapi-authz](https://github.com/pycasbin/fastapi-authz) or [Fastapi-app](https://github.com/lqmanh/fastapi-app)",
  },
  {
    title: "[OpenStack](https://www.openstack.org/)",
    description:
      "The most widely deployed open source cloud software in the world, via plugin: [openstack-patron](https://github.com/casbin/openstack-patron)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Python", "middleware"],
  };
});
