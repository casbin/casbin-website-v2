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
        In Casbin, an access control model is abstracted into a CONF file based on the PERM metamodel (Policy, Effect, Request, Matchers). So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration.
      </Translate>
    ),
  },
  {
    title: <Translate>Flexible policy storage</Translate>,
    path: "/img/storage",
    description: (
      <Translate values={{
        adaptersLink: (
          <a href="/docs/adapters">
            <Translate>adapters</Translate>
          </a>
        ),
      }}>
        {"Besides memory and file, Casbin policy can be stored into lots of places. Currently, dozens of databases are supported, from MySQL, Postgres, Oracle to MongoDB, Redis, Cassandra, AWS S3. Check the full supported list at: {adaptersLink}."}
      </Translate>
    ),
  },
  {
    title: <Translate>Cross-languages & cross-platforms</Translate>,
    path: "/img/language",
    description: (
      <Translate>
        Casbin is implemented in Golang, Java, PHP and Node.js. All implementations share the same API and behaviors. You can learn Casbin once and use it everywhere.
      </Translate>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
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
