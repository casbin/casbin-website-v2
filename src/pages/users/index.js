import React from 'react'
import Layout from '@theme/Layout'
import Translate, { translate } from '@docusaurus/Translate'
import {UserList} from '@site/src/components/UserList'

export default function Users() {
  return (
    <Layout>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">
            <Translate>Who's using Casbin?</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate>
              Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups. If you're curious to see what can be accomplished with Casbin, check out these apps!
            </Translate>
          </p>
        </div>
      </header>
      <UserList />
      <div className="container" style={{
        paddingTop: '10vh',
        paddingBottom: "10vh",
        textAlign: 'center',
      }}>
        <h2>
          <Translate>Is your project also using Casbin?</Translate>
        </h2>
        <a className="button button--lg button--outline button--primary" href="https://github.com/casbin/casbin-website-v2/edit/master/static/data/users.json">
          <Translate>Add your company here</Translate>
        </a>
      </div>
    </Layout>
  );
};