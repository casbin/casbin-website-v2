import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { DiscussionEmbed } from 'disqus-react';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
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
