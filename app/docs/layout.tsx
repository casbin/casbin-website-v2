import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const tree = {
    name: 'Documentation',
    children: [
      {
        type: 'page' as const,
        name: 'Overview',
        url: '/docs/overview',
      },
      {
        type: 'page' as const,
        name: 'Get Started',
        url: '/docs/get-started',
      },
    ],
  };
  
  return (
    <DocsLayout
      tree={tree}
      nav={{
        title: 'Casbin',
      }}
    >
      {children}
    </DocsLayout>
  );
}
