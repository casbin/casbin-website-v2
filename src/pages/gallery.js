import React, {useEffect, useState} from "react";
import Layout from "@theme/Layout";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function GalleryContent() {
  const {colorMode} = useColorMode();
  const {i18n} = useDocusaurusContext();
  const currentLanguage = i18n.currentLocale;
  const [galleryUrl, setGalleryUrl] = useState("");

  useEffect(() => {
    setGalleryUrl(`https://editor.casbin.org/gallery?theme=${colorMode}&lang=${currentLanguage}`);
  }, [colorMode, currentLanguage]);

  return (
    <>
      <div className="editor-container">
        <iframe
          src={galleryUrl}
          className="editor-iframe"
          title="Casbin-gallery"
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
          lang={currentLanguage}
          loading="lazy"
        />
      </div>
    </>
  );
}

function Gallery() {
  return (
    <Layout
      title="Gallery"
      description="Casbin Online Gallery"
    >
      <GalleryContent />
    </Layout>
  );
}

export default Gallery;
