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
        Access control models in Casbin are abstracted into CONF configuration files following the PERM
        metamodel (Policy, Effect, Request, Matchers). Transitioning or enhancing
        authorization mechanisms in your application requires only configuration file modifications.
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
          "Policies in Casbin support storage across memory, file systems, and various database platforms. Currently, dozens of storage backends are supported, such as MySQL, Postgres, Oracle, MongoDB, Redis, Cassandra, and AWS S3. Browse the full catalog of supported {adaptersLink}."
        }
      </Translate>
    ),
  },
  {
    title: <Translate>Cross-languages & cross-platforms</Translate>,
    path: "/img/language",
    description: (
      <Translate>
        Casbin provides implementations across numerous programming languages such as Golang,
        Java, PHP, Node.js, Python, .NET, Rust, and additional options. All versions
        maintain consistent APIs and functionality, enabling seamless knowledge transfer across platforms.
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
