import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import {DESCRIPTION, TITLE} from "@site/src/pages/ecosystem";
import Tooltip from "@site/src/pages/ecosystem/_components/ShowcaseTooltip";
const SUBMIT_URL = "https://github.com/casbin/casbin-website-v2";

export default function ShowcaseHeader() {
  const tooltipText = "Fork the repository, locate relevant files in the tableData directory, add your entry, and submit a pull request. (click to access tableData folder)";

  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Tooltip anchorEl="#__docusaurus" text={tooltipText}>
        <Link className="button button--primary" to={SUBMIT_URL}>
          <Translate id="showcase.header.button">🚀 Interested in contributing an extension?</Translate>
        </Link>
      </Tooltip>
    </section>
  );
}
