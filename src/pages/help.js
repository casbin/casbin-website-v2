import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

function Hello() {
  return (
    <Layout title="Help" description="Help Page" styles={{padding: "19px"}}>

      <div className="container text--center">
        <br />
        <br />
        <h1><Translate>Need help?</Translate></h1>
        <Translate>If you need help with Casbin, you can try one of the mechanisms below.</Translate>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h2><Translate>Forum</Translate></h2>
            <Translate description="Help page forum" values={{
              forumLink: (
                <a href="https://forum.casbin.com">
                  <Translate>Casbin Forum</Translate>
                </a>
              ),
            }}>
              {"Discuss with maintainers or share your experience about Casbin on {forumLink}."}
            </Translate>
          </div>
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
              {"You can join the conversation on {discordLink} for contributing help."}
            </Translate>
          </div>
          <div className="col">
            <h2><Translate>Tencent QQ</Translate></h2>
            <Translate values={{
              qqLink: (
                <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casbin.png" target="_blank" rel="noreferrer">
                  546057381
                </a>
              ),
              WeChat_group: (
                <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg" target="_blank" rel="noreferrer">
                  WeChat group
                </a>
              ),
            }}>
              {"You can contact us by joining the QQ group: {qqLink} or {WeChat_group}."}
            </Translate>
          </div>
          <div className="col">
            <h2>Github</h2>
            <Translate
              values={{
                repoLink: (
                  <a href="https://github.com/casbin/casbin">
                    <Translate>GitHub repo</Translate>
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
              {"At our {repoLink}, browse and submit {issueLink} or {prLink} for bugs you find or any new features you may want implemented."}
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
