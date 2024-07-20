import React from "react";
import Layout from "@theme/Layout";
import Giscus from "@giscus/react";

function Editor() {
  return (
    <Layout title="Editor" description="Casbin Online Editor">
      <div className="editor-container">
        <iframe
          src="https://editor.casbin.org/"
          className="editor-iframe"
          title="Casbin-editor"
        />
      </div>
      <div className="comments-container">
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
