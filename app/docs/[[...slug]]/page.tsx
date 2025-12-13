import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // For now, return a simple placeholder
  if (!slug || slug.length === 0) {
    return (
      <DocsPage>
        <DocsBody>
          <h1>Documentation</h1>
          <p>Welcome to Casbin documentation.</p>
        </DocsBody>
      </DocsPage>
    );
  }

  return notFound();
}

export function generateStaticParams() {
  // Return an empty array to generate only the root docs page
  return [{ slug: [] }];
}

export async function generateMetadata() {
  return {
    title: 'Documentation',
    description: 'Casbin Documentation',
  };
}
