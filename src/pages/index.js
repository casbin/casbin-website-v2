import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate>An authorization library that supports access control models like ACL, RBAC, ABAC, ReBAC, BLP, Biba, LBAC, UCON, Priority, RESTful for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir</Translate></p>
        <div>
          <Link className="button button--secondary button--lg"
            style={{
              marginTop: "1rem",
              marginRight: "1rem",
              marginLeft: "1rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "700",
              boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
              border: "2px solid #ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
            to="/docs/get-started"
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(255, 255, 255, 0.4)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.3)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            <Translate>Get Started</Translate>
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
              {"In Casbin, the policy storage is implemented as an adapter(aka middleware for Casbin). To keep light-weight, we don't put adapter code in the main library (except the default file adapter). A complete list of Casbin adapters is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:) For details of adapters, please refer to the documentation: {adaptersLink}."}
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
            <h3><Translate>Policy enforcement at scale</Translate></h3>
            <Translate>Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.</Translate>
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
            <h3><Translate>Role manager</Translate></h3>
            <Translate
              values={{
                rolemanagersLink: (
                  <Link to="/docs/role-managers">
                    <Translate>role-managers</Translate>
                  </Link>
                ),
              }}
            >
              {"The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don't put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as: {rolemanagersLink} ."}
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
    <div className="hero text--center showcase" style={{
      padding: "80px 0",
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
    }}>
      <div className="container">
        <h1 style={{
          fontSize: "2.8rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          <Translate>Who&apos;s using Casbin?</Translate>
        </h1>
        <p style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          width: "70vw",
          maxWidth: "800px",
          margin: "0 auto 3rem",
          color: "#666",
        }}>
          <Translate values={{
            UsersPage: (
              <Link to="/users" style={{fontWeight: "600", color: "var(--ifm-color-primary)"}}>
                <Translate>check out these apps</Translate>
              </Link>
            ),
          }}>
            {"Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups.If you're curious to see what can be accomplished Casbin, {UsersPage}!"}
          </Translate>
        </p>
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
      title="Casbin · An authorization library that supports access control models like ACL, RBAC, ABAC, ReBAC, BLP, Biba, LBAC, UCON, Priority, RESTful for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir"

      description="An authorization library that supports access control models like ACL, RBAC, ABAC, ReBAC, BLP, Biba, LBAC, UCON, Priority, RESTful for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir">
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
