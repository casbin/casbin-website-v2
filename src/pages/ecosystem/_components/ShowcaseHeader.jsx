import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import {DESCRIPTION, TITLE} from "@site/src/pages/ecosystem";
const SUBMIT_URL = "https://github.com/casbin/casbin-website-v2";

export default function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
        <Translate id="showcase.header.button">🚀 add new one</Translate>
      </Link>
    </section>
  );
}
