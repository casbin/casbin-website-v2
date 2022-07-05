import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import { DiscussionEmbed } from 'disqus-react';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
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
