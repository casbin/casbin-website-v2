import { DocsPage, DocsBody } from "fumadocs-ui/page";

export default function Page() {
  return (
    <DocsPage>
      <DocsBody>
        <h1>Overview</h1>
        <p>
          Casbin is a powerful and efficient open-source access control library that supports various
          access control models for enforcing authorization across the board.
        </p>
        <h2>Languages Supported by Casbin</h2>
        <p>
          Casbin provides support for various programming languages, ready to be integrated within any project and workflow.
        </p>
      </DocsBody>
    </DocsPage>
  );
}

export const metadata = {
  title: "Overview",
  description: "Casbin Overview",
};
