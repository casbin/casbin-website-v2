import React from "react";
import Layout from "@theme/Layout";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function EditorContent() {
  const {colorMode} = useColorMode();
  const {i18n} = useDocusaurusContext();
  const currentLanguage = i18n.currentLocale;
  return (
    <>
      <div className="editor-container">
        <iframe
          src={`https://editor.casbin.org/?theme=${colorMode}&lang=${currentLanguage}`}
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
          theme={colorMode}
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
}

function Editor() {
  return (
    <Layout
      title="Editor"
      description="Casbin Online Editor"
    >
      <EditorContent />
    </Layout>
  );
}

export default Editor;
