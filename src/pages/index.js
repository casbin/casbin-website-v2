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
          <Translate>Open-source</Translate> <span className={styles.highlightedKeyword}><Translate>authorization</Translate></span> <Translate>for applications and services</Translate>
        </h1>
        <p className="hero__subtitle"><Translate>A powerful and efficient open-source access control library that supports various access control models for enforcing authorization across the board</Translate></p>
        <div className={styles.actionButtons}>
          <Link className="button button--secondary button--lg"
            to="/docs/get-started"
          >
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--secondary button--lg"
            to="https://editor.casbin.org/"
          >
            <Translate>Try Online Editor</Translate>
          </Link>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/go-logo-1.svg" />Golang</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/jcasbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/jee-3.svg" />Java</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/casbin-cpp"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/c.svg" />C/C++</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/node-casbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/nodejs-1.svg" />Node.js</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/casbin.js"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/logo-javascript.svg" />Front-end js</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/php-casbin/php-casbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/PHP-logo.svg" />PHP</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/php-casbin/laravel-authz"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/laravel-2.svg" />Laravel</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/pycasbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/python-5.svg" />Python</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/Casbin.NET"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/dotnet-logo.svg" />.Net (C#)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin4d/Casbin4D"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/delphi-2.svg" />Delphi</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/casbin-rs"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/rust.svg" />Rust</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/CasbinRuby/casbin-ruby"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/ruby.svg" />Ruby</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/SwiftCasbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/swift-15.svg" />Swift (Objective-C)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/lua-casbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/lua-5.svg" />Lua (OpenResty, Kong, APISIX)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/dart-casbin"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/dart.svg" />Dart (Flutter)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://github.com/casbin/casbin-ex"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/elixir-lang-icon.svg" />Elixir</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="/docs/cloud-native"><img className={styles.embedbutton} src="https://cdn.casbin.org/language/kubernets.svg" />Cloud Native (Kubernetes, Istio, Envoy, KubeSphere)</Link>
          </div>
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
