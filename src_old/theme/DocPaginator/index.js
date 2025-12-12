import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <br />
      <Giscus
        id="comments"
        repo="casbin/casbin"
        repoId="MDEwOlJlcG9zaXRvcnk4NzYxNzUwOA=="
        category="Docs comments"
        categoryId="DIC_kwDOBTjv5M4CRIiA"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={useColorMode().colorMode}
        lang="en"
        loading="lazy"
      />
    </>
  );
}
