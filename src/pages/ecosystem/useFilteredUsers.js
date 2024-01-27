import {useLocation} from "@docusaurus/router";
import {useEffect, useMemo, useState} from "react";
import {readSearchTags} from "@site/src/pages/ecosystem/_components/ShowcaseTagSelect";
import {readOperator} from "@site/src/pages/ecosystem/_components/ShowcaseFilterToggle";
import {sortedUsers} from "@site/src/data/users";

const SearchNameQueryKey = "name";

export function useFilteredUsers() {
  const location = useLocation();
  const [operator, setOperator] = useState("OR");
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchName, setSearchName] = useState(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator, searchName),
    [selectedTags, operator, searchName]
  );
}

function readSearchName(search) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function restoreUserState(userState) {
  const {scrollTopPosition, focusedElementId} = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({top: scrollTopPosition});
}

function filterUsers(users, selectedTags, operator, searchName) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user.title.toLowerCase().includes(searchName.toLowerCase())
    );
  }
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === "AND") {
      return selectedTags.every((tag) => user.tags.includes(tag));
    }
    return selectedTags.some((tag) => user.tags.includes(tag));
  });
}
