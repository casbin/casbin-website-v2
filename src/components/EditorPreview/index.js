import React from "react";
import {useColorMode} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function EditorPreview() {
  const {colorMode} = useColorMode();
  const {i18n} = useDocusaurusContext();
  const currentLanguage = i18n.currentLocale;

  // Compute editor URL reactively to avoid unnecessary reloads
  const editorUrl = `https://editor.casbin.org/?theme=${colorMode}&lang=${currentLanguage}`;

  return (
    <div className={styles.editorSection}>
      <div className="container">
        <div className={styles.editorHeader}>
          <h2 className={styles.editorTitle}>
            <Translate>Try Casbin Online Editor</Translate>
          </h2>
          <p className={styles.editorDescription}>
            <Translate>
              Write and test your Casbin model and policy in real-time with our interactive online editor.
              Experiment with different access control models and see results instantly.
            </Translate>
          </p>
        </div>
        <div className={styles.editorContainer}>
          <div className={styles.editorWrapper}>
            <iframe
              src={editorUrl}
              className={styles.editorIframe}
              title="Casbin Online Editor"
            />
          </div>
          <div className={styles.editorFooter}>
            <Link
              className="button button--primary button--lg"
              to="/editor"
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
