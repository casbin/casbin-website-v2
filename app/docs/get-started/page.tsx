import { DocsPage, DocsBody } from "fumadocs-ui/page";

export default function Page() {
  return (
    <DocsPage>
      <DocsBody>
        <h1>Get Started</h1>
        <h2>Installation</h2>
        <p>
          Install Casbin in your preferred language to get started with authorization in your application.
        </p>
      </DocsBody>
    </DocsPage>
  );
}

export const metadata = {
  title: "Get Started",
  description: "Getting started with Casbin",
};
