import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import { DiscussionEmbed } from 'disqus-react';
import Head from '@docusaurus/Head';

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <Head
        style={[{
          "cssText": `
        iframe[sandbox]:not([sandbox=""]) {
          display: none !important;
      }
      `
        }]} />
      <DocPaginator {...props} />
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
