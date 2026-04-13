import React, {useEffect} from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const GALLERY_URL = "https://editor.casbin.org/gallery";

function Gallery() {
  useEffect(() => {
    window.location.replace(GALLERY_URL);
  }, []);

  return (
    <Layout title="Redirecting to Gallery" description="Redirecting to the Apache Casbin authorization model gallery">
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${GALLERY_URL}`} />
        <link rel="canonical" href={GALLERY_URL} />
      </Head>
      <main className="container margin-vert--xl">
        <p>
          Redirecting to the authorization model gallery...
          {" "}
          <Link href={GALLERY_URL}>Continue manually</Link>
        </p>
      </main>
    </Layout>
  );
}

export default Gallery;
