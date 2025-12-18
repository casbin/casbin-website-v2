import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import {UserList} from "@site/src/components/UserList";
import Translate from "@docusaurus/Translate";
import {useWindowSize} from "@docusaurus/theme-common";
import EditorPreview from "../components/EditorPreview";
import LanguageIntegration from "../components/LanguageIntegration";

class Button extends React.Component {
  render() {
    return (
      <div>
        <a style={{marginRight: "8px", marginBottom: "8px"}} className="button" href={this.props.href} target={this.props.target} icon={this.props.icon}>
          <img className="icon" src={this.props.icon} height={"20px"} width={"20px"} />
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self",
};

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Open-source authorization for applications</Translate>
        </h1>
        <p className="hero__subtitle"><Translate>A powerful and efficient open-source access control library that supports various access control models for enforcing authorization across the board</Translate></p>
        <div className={styles.actionButtons}>
          <Link className={`button button--lg ${styles.getStartedBtn}`}
            to="/docs/get-started"
          >
            <Translate>Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function PolicyPersistence() {
  return (
    <div className={styles.policypersistence}>
      <div className="container text--center">
        <div className="row">
          <div className="col" style={{marginBlock: "auto"}}>
            <h3> <Translate>Policy Persistence</Translate></h3>
            <Translate
              values={{
                adaptersLink: (
                  <Link to="/docs/adapters">
                    <Translate>adapters</Translate>
                  </Link>
                ),
              }}
            >
              {"Casbin implements policy storage through adapters (middleware components). To maintain a lightweight core, adapter code is not included in the main library (except for the default file adapter). We welcome third-party adapter contributions. For a complete list of available adapters and detailed documentation, please refer to: {adaptersLink}."}
            </Translate>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="/img/store.png" alt="Policy Persistence" width="500" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyEnforcement() {
  return (
    <div className={styles.policyenforcement}>
      <div className="container text--center">
        <div className="row">
          <div style={{marginInline: "auto"}}>
            <img src="/img/scale.png" alt="Policy enforcement at scale" width="500" height="500" />
          </div>
          <div className="col" style={{marginBlock: "auto"}}>
            <h3><Translate>Policy Enforcement at Scale</Translate></h3>
            <Translate>Some adapters support filtered policy management, meaning Casbin loads only a subset of policies from storage based on specified filters. This enables efficient policy enforcement in large, multi-tenant environments where loading the entire policy set would create a performance bottleneck.</Translate>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleManager() {
  return (
    <div className={styles.rolemanager}>
      <div className="container text--center">
        <div className="row">
          <div className="col" style={{marginBlock: "auto"}}>
            <h3><Translate>Role Manager</Translate></h3>
            <Translate
              values={{
                rolemanagersLink: (
                  <Link to="/docs/role-managers">
                    <Translate>role-managers</Translate>
                  </Link>
                ),
              }}
            >
              {"The role manager handles RBAC role hierarchies (user-role mappings) in Casbin. It can retrieve role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, and others. We support multiple role manager implementations. To maintain a lightweight core, role manager code is not included in the main library (except for the default implementation). View the complete list of available {rolemanagersLink}."}
            </Translate>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="/img/role.png" alt="Role manager" width="500" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div className="hero text--center showcase">
      <div className="container">
        <h1><Translate>Who&apos;s using Casbin?</Translate></h1>
        <p style={{
          width: "50vw",
          margin: "auto",
        }}>
          <Translate values={{
            UsersPage: (
              <Link to="/users">
                <Translate>check out these apps</Translate>
              </Link>
            ),
          }}>
            {"Hundreds of projects use Casbin, from established Fortune 500 companies to innovative startups. If you're curious to see what can be accomplished with Casbin, {UsersPage}!"}
          </Translate>
        </p>
        <br /><br />
        <UserList />
      </div>
    </div>
  );
}

function OpenCollective() {
  if (useWindowSize() === "mobile") {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "1100px", display: "block"}}></iframe>
    );
  } else {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "650px", display: "block"}}></iframe>
    );
  }
}

export default function Home() {
  return (
    <Layout
      title="Casbin · An authorization library that supports access control models like ACL, RBAC, ABAC, ReBAC, PBAC, OrBAC, BLP, Biba, LBAC, UCON, Priority, RESTful for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir"

      description="An authorization library that supports access control models like ACL, RBAC, ABAC, ReBAC, PBAC, OrBAC, BLP, Biba, LBAC, UCON, Priority, RESTful for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LanguageIntegration />
        <EditorPreview />
        <PolicyPersistence />
        <PolicyEnforcement />
        <RoleManager />
        <Showcase />
        <OpenCollective />
      </main>
    </Layout>
  );
}
