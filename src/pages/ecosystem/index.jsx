import React from "react";

import {translate} from "@docusaurus/Translate";
import Layout from "@theme/Layout";

import ShowcaseHeader from "@site/src/pages/ecosystem/_components/ShowcaseHeader";
import ShowcaseFilters from "@site/src/pages/ecosystem/_components/ShowcaseFilters";
import ShowcaseCards from "@site/src/pages/ecosystem/_components/ShowcaseCards";
import SearchBar from "@site/src/pages/ecosystem/_components/SearchBar";

export const TITLE = translate({message: "Apache Casbin Plugins"});
export const DESCRIPTION = translate({
  message: "Adapters, watchers, role managers, middlewares, and dispatchers for Apache Casbin",
});

export default function Showcase() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <div
          style={{display: "flex", marginLeft: "auto"}}
          className="container"
        >
          <SearchBar />
        </div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
