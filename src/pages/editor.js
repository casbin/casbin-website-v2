import React from "react";
import Layout from "@theme/Layout";
import Giscus from "@giscus/react";

function Editor() {
  return (
    <Layout title="Editor" description="Casbin Online Editor">
      <div>
        <iframe
          src="https://editor.casbin.org/"
          style={{width: "100%", height: "800px", display: "block"}}
          title="Casbin-editor"
          scrolling="no"
        />
      </div>
      <br />
      <div style={{width: "60vw", margin: "0 auto"}}>
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
          theme="light"
          lang="en"
          loading="lazy"
        />
      </div>
    </Layout>
  );
}

export default Editor;
