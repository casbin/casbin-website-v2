import {sortBy} from "@site/src/utils/jsUtils";
import {MiddlewareData} from "@site/src/data/MiddlewareData/MiddlewareData";
import {DispatcherData} from "@site/src/data/DispatcherData/DispatcherData";
import {AdapterData} from "@site/src/data/AdapterData/AdapterData";
import {RoleManagerData} from "@site/src/data/RoleManagerData/RoleManagerData";
import {WatcherData} from "@site/src/data/WatcherData/WatcherData";

const userExample = [
  {
    // markdown
    title: "[File Adapter (built-in)](/docs/adapters#file-adapter-built-in)",

    type: "File",

    // markdown
    author: "[Casbin]()",

    autoSave: "❌",

    // markdown
    description:
      "For [.CSV (Comma-Separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values) files",

    tags: ["adapter", "go"],

    preview: require("./showcase/agilets.png"),
  },
];

// const adapterData = userExample;
const adapterData = [
  ...AdapterData,
  ...DispatcherData,
  ...MiddlewareData,
  ...RoleManagerData,
  ...WatcherData,
];

function sortUsers() {
  let result = adapterData;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
