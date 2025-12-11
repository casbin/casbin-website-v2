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
        <p className="hero__subtitle"><Translate>A powerful authorization library supporting ACL, RBAC, ABAC, ReBAC, PBAC, and more access control models for Golang, Java, C/C++, Node.js, JavaScript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift, Lua, Dart, and Elixir</Translate></p>
        <div>
          <Link className="button button--secondary button--lg"
            style={{marginTop: "1rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="/docs/get-started"
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
            <h3><Translate>Flexible Policy Storage</Translate></h3>
            <Translate
              values={{
                adaptersLink: (
                  <Link to="/docs/adapters">
                    <Translate>adapters</Translate>
                  </Link>
                ),
              }}
            >
              {"Casbin provides flexible policy storage through adapter middleware. Our lightweight core architecture keeps adapter code separate from the main library (except for the default file adapter). We support dozens of storage backends including MySQL, PostgreSQL, Oracle, MongoDB, Redis, Cassandra, and AWS S3. Third-party contributions are always welcome. For a complete list of available adapters, see our {adaptersLink}."}
            </Translate>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="/img/store.png" alt="Policy Persistence" width="500" height="500" style={{borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)"}} />
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
            <img src="/img/scale.png" alt="Policy enforcement at scale" width="500" height="500" style={{borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)"}} />
          </div>
          <div className="col" style={{marginBlock: "auto"}}>
            <h3><Translate>Policy Enforcement at Scale</Translate></h3>
            <Translate>Casbin supports filtered policy management through specialized adapters, enabling selective policy loading based on custom filters. This feature is essential for high-performance authorization in large-scale, multi-tenant environments where loading the complete policy set would impact system performance.</Translate>
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
            <h3><Translate>Advanced Role Management</Translate></h3>
            <Translate
              values={{
                rolemanagersLink: (
                  <Link to="/docs/role-managers">
                    <Translate>role managers</Translate>
                  </Link>
                ),
              }}
            >
              {"Casbin's role manager handles RBAC role hierarchies and user-role mappings with ease. It integrates seamlessly with policy rules and supports external identity providers like LDAP, Okta, Auth0, and Azure AD. Multiple implementations are available to suit different needs. Our lightweight core keeps role manager code modular (except for the default implementation). Explore our complete list of {rolemanagersLink}."}
            </Translate>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="/img/role.png" alt="Role manager" width="500" height="500" style={{borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div className="hero text--center showcase" style={{
      background: "linear-gradient(135deg, #1a1f3a 0%, #2d1b4e 50%, #1a1f3a 100%)",
      padding: "80px 0",
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)",
        pointerEvents: "none",
      }}></div>
      <div className="container" style={{position: "relative", zIndex: 1}}>
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
            {"Hundreds of organizations trust Casbin, from Fortune 500 enterprises to innovative startups. Curious to see what can be built with Casbin? {UsersPage}!"}
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
