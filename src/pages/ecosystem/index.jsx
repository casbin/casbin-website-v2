/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";

import {translate} from "@docusaurus/Translate";
import Layout from "@theme/Layout";

import ShowcaseHeader from "@site/src/pages/ecosystem/ShowcaseHeader";
import ShowcaseFilters from "@site/src/pages/ecosystem/ShowcaseFilters";
import ShowcaseCards from "@site/src/pages/ecosystem/ShowcaseCards";
import SearchBar from "@site/src/pages/ecosystem/SearchBar";

export const TITLE = translate({message: "Casbin ecosystem"});
export const DESCRIPTION = translate({
  message: "List of plugins for casbin",
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
