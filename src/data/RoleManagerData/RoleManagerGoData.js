export const RoleManagerGoData = [
  {
    title:
      "[Default Role Manager (built-in)](https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go)",
    author: "Casbin",
    description: "Supports role hierarchy stored in the Casbin policy",
  },
  {
    title:
      "[Session Role Manager](https://github.com/casbin/session-role-manager)",
    author: "[EDOMO Systems](https://github.com/edomosystems)",
    description:
      "Supports role hierarchy stored in the Casbin policy, with time-range-based sessions",
  },
  {
    title: "[Okta Role Manager](https://github.com/casbin/okta-role-manager)",
    author: "Casbin",
    description:
      "Supports role hierarchy stored in [Okta](https://www.okta.com/)",
  },
  {
    title: "[Auth0 Role Manager](https://github.com/casbin/auth0-role-manager)",
    author: "Casbin",
    description:
      "Supports role hierarchy stored in [Auth0](https://auth0.com/)'s [Authorization Extension](https://auth0.com/docs/extensions/authorization-extension/v2)",
  },
].map((item) => {
  return {
    ...item,
    tags: ["Go", "RoleManager"],
  };
});
