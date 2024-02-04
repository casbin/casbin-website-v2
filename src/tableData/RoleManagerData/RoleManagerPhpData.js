export const RoleManagerPhpData = [
  {
    title:
      "[Default Role Manager (built-in)](https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php)",
    author: "Casbin",
    description: "Supports role hierarchy stored in the Casbin policy",
  },
].map((item) => {
  return {
    ...item,
    tags: ["PHP", "RoleManager"],
  };
});
