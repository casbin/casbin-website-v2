import React from "react";
import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
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
