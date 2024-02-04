import React from "react";
import Markdown from "markdown-to-jsx";

export const isExternalLink = (url) => {
  return url.startsWith("http://") || url.startsWith("https://");
};

const CustomLink = ({children, href, ...props}) => {
  const isExternal = isExternalLink(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return <a href={href} {...props}>{children}</a>;
};

const CustomMarkdown = ({children}) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            component: CustomLink,
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default CustomMarkdown;
