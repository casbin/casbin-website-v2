import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: <Translate>Hybrid access control models</Translate>,
    path: "/img/model",
    description: (
      <Translate>
        Casbin uses CONF files to define access control models based on the PERM
        metamodel (Policy, Effect, Request, Matchers). You can change or upgrade
        your authorization mechanism by modifying the configuration file.
      </Translate>
    ),
  },
  {
    title: <Translate>Flexible policy storage</Translate>,
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
          "Casbin policies can be stored in memory, files, or databases. We support dozens of storage backends including MySQL, Postgres, Oracle, MongoDB, Redis, Cassandra, and AWS S3. See the full list of {adaptersLink}."
        }
      </Translate>
    ),
  },
  {
    title: <Translate>Cross-languages & cross-platforms</Translate>,
    path: "/img/language",
    description: (
      <Translate>
        Casbin is implemented in multiple languages including Golang,
        Java, PHP, Node.js, Python, .NET, Rust, and more. All implementations
        share the same API and behavior.
      </Translate>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
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
