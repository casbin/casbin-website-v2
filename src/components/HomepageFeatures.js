import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Hybrid access control models</Translate>,
    Svg: require('/img/model.svg').default,
    description: (
      <Translate>
        In Casbin, an access control model is abstracted into a CONF file based on the PERM metamodel (Policy, Effect, Request, Matchers). So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration.
      </Translate>
    ),
  },
  {
    title: <Translate>Flexible policy storage</Translate>,
    Svg: require('/img/storage.svg').default,
    description: (
      <Translate values={{
        adaptersLink:(
          <a href="/docs/adapters">
            <Translate>adapters</Translate>
          </a>
        )
      }}>
        {'Besides memory and file, Casbin policy can be stored into lots of places. Currently, dozens of databases are supported, from MySQL, Postgres, Oracle to MongoDB, Redis, Cassandra, AWS S3. Check the full supported list at: {adaptersLink}.'}
      </Translate>
    ),
  },
  {
    title: <Translate>Cross-languages & cross-platforms</Translate>,
    Svg: require('/img/language.svg').default,
    description: (
      <Translate>
        Casbin is implemented in Golang, Java, PHP and Node.js. All implementations share the same API and behaviors. You can learn Casbin once and use it everywhere.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
