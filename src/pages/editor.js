import React from 'react';
import Layout from '@theme/Layout';
import { DiscussionEmbed } from 'disqus-react';
function Editor() {
  return (
    <Layout title="Editor" description="Casbin Online Editor">
      <div>
        <iframe
          src="https://casbin.org/casbin-editor/"
          style={{ width: '100%', height: '100vh', display: 'block' }}
          title="Casbin-editor"
          allowFullScreen={true}
        />
      </div>
      <DiscussionEmbed
        shortname="casbin"
        config={
          {
            language: 'en',
          }
        } />
    </Layout>
  );
}

export default Editor;
