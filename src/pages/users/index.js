import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import {UserList} from "@site/src/components/UserList";

export default function Users() {
  return (
    <Layout title="Showcase" description="Casbin Showcase">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">
            <Translate>Who&apos;s using Casbin?</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate>
              Casbin serves numerous projects spanning major Fortune 500 corporations to emerging startups worldwide. Explore what&apos;s achievable with Casbin by reviewing these applications!
            </Translate>
          </p>
        </div>
      </header>
      <div className="container" style={{
        paddingTop: "10vh",
        paddingBottom: "10vh",
        textAlign: "center",
      }}>
        <UserList />
        <br /><br /><br />
        <h2>
          <Translate>Does your project utilize Casbin?</Translate>
        </h2>
        <a className="button button--lg button--outline button--primary" href="https://github.com/casbin/casbin-website-v2/edit/master/static/data/users.json">
          <Translate>Include your organization</Translate>
        </a>
      </div>
    </Layout>
  );
}
