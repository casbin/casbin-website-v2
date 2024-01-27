export const MiddlewareDotNETData = [
  {
    title: "[ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core)",
    description:
      "An open-source and cross-platform framework for building modern cloud based internet connected applications, such as web apps, IoT apps and mobile backends, via plugin: [Casbin.AspNetCore](https://github.com/casbin-net/Casbin.AspNetCore)",
  },
  {
    title: "[ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core)",
    description:
      "A simple demo of using Casbin at ASP.NET Core framework, via plugin: [CasbinACL-aspNetCore](https://github.com/MustafaMustafayev/CasbinACL-aspNetCore)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["dotNET", "middleware"],
  };
});
