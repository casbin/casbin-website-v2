import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';

const emptyTree = {
  name: 'Documentation',
  children: [],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={emptyTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
