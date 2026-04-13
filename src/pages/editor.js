import React, {useEffect} from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const EDITOR_URL = "https://editor.casbin.org/";

function Editor() {
  useEffect(() => {
    window.location.replace(EDITOR_URL);
  }, []);

  return (
    <Layout title="Redirecting to Editor" description="Redirecting to the Apache Casbin Online Editor">
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${EDITOR_URL}`} />
        <link rel="canonical" href={EDITOR_URL} />
      </Head>
      <main className="container margin-vert--xl">
        <p>
          Redirecting to the online editor...
          {" "}
          <Link href={EDITOR_URL}>Continue manually</Link>
        </p>
      </main>
    </Layout>
  );
}

export default Editor;
