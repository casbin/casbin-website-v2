import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function EditorPreview() {
  return (
    <div className={styles.editorSection}>
      <div className="container">
        <div className={styles.editorHeader}>
          <h2 className={styles.editorTitle}>
            <Translate>Try the Apache Casbin Online Editor</Translate>
          </h2>
          <p className={styles.editorDescription}>
            <Translate>
              Write and test your Apache Casbin model and policy in real-time with the interactive online editor.
              Try different access control models and see results instantly.
            </Translate>
          </p>
        </div>
        <div className={styles.editorContainer}>
          <div className={styles.editorWrapper}>
            <img
              src="/img/online_editor_homepage_preview.png"
              className={styles.editorPreviewImage}
              alt="Preview of the Apache Casbin online editor interface"
              width="1552"
              height="973"
            />
          </div>
          <div className={styles.editorFooter}>
            <Link
              className="button button--primary button--lg"
              href="https://editor.casbin.org/"
            >
              <Translate>Open Full Editor</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPreview;
