import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import { DiscussionEmbed } from 'disqus-react';
import Head from '@docusaurus/Head';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <Head
        style={[{
          "cssText": `
          #disqus_thread>iframe[sandbox]:not([sandbox=""]) {
            display: none !important;
        }
      `
        }]} />
      <BlogPostPaginator {...props} />
      <DiscussionEmbed
        shortname="casbin"
        config={
          {
            language: 'en',
          }
        } />
    </>
  );
}
