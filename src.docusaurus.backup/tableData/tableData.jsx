import {MiddlewareData} from "@site/src/tableData/MiddlewareData/MiddlewareData";
import {DispatcherData} from "@site/src/tableData/DispatcherData/DispatcherData";
import {AdapterData} from "@site/src/tableData/AdapterData/AdapterData";
import {RoleManagerData} from "@site/src/tableData/RoleManagerData/RoleManagerData";
import {WatcherData} from "@site/src/tableData/WatcherData/WatcherData";

const adapterData = [
  ...AdapterData,
  ...DispatcherData,
  ...MiddlewareData,
  ...RoleManagerData,
  ...WatcherData,
];

function sortList() {
  let result = adapterData;
  // Sort by site name
  result = sortBy(result, (item) => item.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (item) => !item.tags.includes("favorite"));
  return result;
}

export const sortedList = sortList();

export function sortBy(array, getter) {
  const sortedArray = [...array];
  sortedArray.sort((a, b) =>
  // eslint-disable-next-line no-nested-ternary
    getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0
  );
  return sortedArray;
}
