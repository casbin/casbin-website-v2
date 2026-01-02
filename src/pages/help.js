import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

function Hello() {
  return (
    <Layout title="Help" description="Help Page" styles={{padding: "19px"}}>

      <div className="container text--center">
        <br />
        <br />
        <h1><Translate>Looking for assistance?</Translate></h1>
        <Translate>Explore these support channels to get help with Casbin-related questions or issues.</Translate>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h2>Discord</h2>
            <Translate values={{
              discordLink: (
                <a href="https://discord.gg/S5UjpzGZjN">
                  <Translate>Discord</Translate>
                </a>
              ),
            }}
            >
              {"Join our {discordLink} community to connect with contributors and get assistance."}
            </Translate>
          </div>
          <div className="col">
            <h2>Github</h2>
            <Translate
              values={{
                repoLink: (
                  <a href="https://github.com/casbin/casbin">
                    <Translate>GitHub repository</Translate>
                  </a>
                ),
                issueLink: (
                  <a href="https://github.com/casbin/casbin/issues">
                    <Translate>issues</Translate>
                  </a>
                ),
                prLink: (
                  <a href="https://github.com/casbin/casbin/pulls">
                    <Translate>pull requests</Translate>
                  </a>
                ),
              }}
            >
              {"Visit our {repoLink} to explore the codebase, report bugs through {issueLink}, or contribute enhancements via {prLink}."}
            </Translate>
          </div>
          <div className="col">
            <h2><Translate>Google Groups</Translate></h2>
            <Translate values={{
              googleGroupsLink: (
                <a href="https://groups.google.com/g/casbin">
                  <Translate>Google Groups</Translate>
                </a>
              ),
            }}>
              {"Engage in discussions with maintainers or exchange insights about Casbin on {googleGroupsLink}."}
            </Translate>
          </div>
          <div className="col">
            <h2><Translate>Stack Overflow</Translate></h2>
            <Translate values={{
              stackOverflowLink: (
                <a href="https://stackoverflow.com/search?q=casbin">
                  <Translate>Stack Overflow</Translate>
                </a>
              ),
            }}>
              {"Post your Casbin-related inquiries on {stackOverflowLink}."}
            </Translate>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  );
}

export default Hello;
