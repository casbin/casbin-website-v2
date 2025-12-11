import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: <Translate>Flexible Access Control Models</Translate>,
    path: "/img/model",
    description: (
      <Translate>
        Casbin defines access control models in CONF files using the PERM
        metamodel (Policy, Effect, Request, Matchers). Switch or upgrade
        your authorization mechanism simply by modifying a configuration file.
      </Translate>
    ),
  },
  {
    title: <Translate>Multiple Storage Options</Translate>,
    path: "/img/storage",
    description: (
      <Translate
        values={{
          adaptersLink: (
            <a href="/docs/AdapterData">
              <Translate>adapters</Translate>
            </a>
          ),
        }}
      >
        {
          "Store Casbin policies in memory, files, or databases including MySQL, PostgreSQL, Oracle, MongoDB, Redis, Cassandra, and AWS S3. We support dozens of storage backends. View all supported {adaptersLink}."
        }
      </Translate>
    ),
  },
  {
    title: <Translate>Cross-Language Support</Translate>,
    path: "/img/language",
    description: (
      <Translate>
        Available in Golang, Java, PHP, Node.js, Python, .NET, Rust, and more.
        All implementations share a consistent API and behavior, so you can
        learn once and deploy anywhere.
      </Translate>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img
            src={colorMode === "light" ? path + ".png" : path + "-dark.png"}
            className={styles.featureSvg}
            alt={title}
          />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
