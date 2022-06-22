import React from 'react';
import DocItemFooter from '@theme-original/DocItemFooter';
import { DiscussionEmbed } from 'disqus-react';

export default function DocItemFooterWrapper(props) {
  return (
    <>
      <DocItemFooter {...props} />
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
