---
title: "Casbin in 2025: Authorization for the AI Agent Era"
slug: casbin-2025-ai-agent-era
authors: [hsluoyz]
tags: [casbin, roadmap, AI, MCP, edge-computing, LLM]
---

2024 was the year AI agents moved from demos to production. The Model Context Protocol (MCP) has been adopted by Google, OpenAI, Microsoft, and many others, and the way applications talk to external services is changing. That shift brings a new set of authorization challenges we at Casbin have been working on.

<!--truncate-->

## The World Has Changed

When we started Casbin back in 2017, the typical authorization scenario was straightforward: a user makes a request, we check if they have permission, done. Today? An AI agent might be acting on behalf of a user, calling multiple MCP servers, each with their own tool permissions, and the whole thing needs to happen in milliseconds at the edge.

The MCP spec now classifies MCP servers as OAuth 2.0 Resource Servers (June 2025 update), with fine-grained scopes like `mcp:tools:weather` or `mcp:resources:customer-data:read`. That is the kind of granular permission model Casbin was built for; integration with MCP and OAuth still needs more work.

## What We're Working On

### MCP Server Authorization

This is one of our main focus areas. When an AI agent calls an MCP server, the server must decide: can this agent, on behalf of this user, invoke this tool with these parameters?

Traditional RBAC is not enough. You need something like ABAC—e.g. “is this agent allowed to access customer data for Alice’s region during business hours?” We are exploring how Casbin’s policy model can express these constraints.

The catch: MCP servers must decide very quickly. We are looking at lightweight policy evaluation inside the MCP server process instead of calling a separate authorization service.

### Edge-First Authorization

Cloudflare Workers, Deno Deploy, Vercel Edge Functions - the edge computing space has exploded. In 2025, sub-50ms response times are table stakes, and you can't afford to add 100ms for an authorization check to some central server.

This is pushing us to think differently about how Casbin works. Can we compile policies to WebAssembly and run them directly in V8 isolates? Can we do smart policy caching at the edge while maintaining consistency? These are hard problems, and we don't have all the answers yet, but it's where things are heading.

We're particularly interested in the Cloudflare Workers ecosystem - they've built out a whole platform for MCP servers with built-in OAuth support. A native Casbin integration there could be powerful.

### RAG Pipeline Authorization

A recurring theme: companies building RAG systems where the LLM must access internal documents, but each user should only see documents they are allowed to see.

The OWASP Top 10 for LLM Applications 2025 lists “Sensitive Information Disclosure” as a major risk. The fix is not only to filter outputs but to ensure the LLM never retrieves documents the user is not authorized to access.

So authorization must happen at the vector store query level. We are looking at turning Casbin policies into metadata filters for vector DBs—i.e. a permission check becomes a WHERE clause pushed down to retrieval.

### Multi-Agent Scenarios

With multiple agents in a chain (e.g. coding agent → deployment agent → monitoring agent), permission delegation is tricky. Each agent may have different capabilities, and you must track the full chain.

OAuth’s On-Behalf-Of (OBO) flow covers part of this, but the logic for “can agent B do X on behalf of agent A on behalf of user alice” needs a clear model. Casbin’s role hierarchies and domain RBAC could extend to agent hierarchies; we are working through the semantics.

## The Traditional Roadmap Stuff

Of course, we're not abandoning the basics. Some practical things on our list:

**Language implementations catching up** - SwiftCasbin and Lua-Casbin are still behind on features compared to the Go and Node.js versions. The `in` operator, WatcherEx, better caching for the `g` function - these need to be consistent everywhere.

**New framework middlewares** - go-zero has been requested repeatedly. Poem for Rust is gaining traction. Play Framework for Java has been on the wishlist forever.

**Performance work** - As policies get more complex for these new use cases, evaluation speed matters more. We need better benchmarking, profiling, and optimization across all implementations.

## What we don’t know yet

The AI agent authorization space is moving fast; we are learning as we go. Open questions:

- Should Casbin have first-class primitives for "agent identity" vs "user identity"?
- How do you handle authorization for tools that are dynamically discovered via MCP?
- What's the right caching strategy when policies might depend on real-time context?

If you are building in this space and hitting authorization problems, we want to hear from you. The best features come from real use cases.

## Getting involved

We have been a GSoC organization for years, and these AI-related topics are a good fit for summer projects. You do not need to wait for GSoC—if this sounds interesting, reach out on Discord or open an issue on GitHub.

The next few years are going to be wild for authorization. The problems are harder, but also more interesting. We're excited to figure them out together.
