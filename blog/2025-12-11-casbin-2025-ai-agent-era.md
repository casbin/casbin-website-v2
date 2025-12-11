---
title: "Casbin in 2025: Authorization for the AI Agent Era"
slug: casbin-2025-ai-agent-era
author: Yang Luo
authorURL: "http://github.com/hsluoyz"
authorImageURL: "https://avatars.githubusercontent.com/hsluoyz"
tags: [casbin, roadmap, AI, MCP, edge-computing, LLM]
---

2024 was the year AI agents went from demos to production. With the Model Context Protocol (MCP) gaining adoption from Google, OpenAI, Microsoft, and countless others, we're seeing a fundamental shift in how applications interact with external services. And with that shift comes a whole new set of authorization challenges that we at Casbin have been thinking about.

<!--truncate-->

## The World Has Changed

When we started Casbin back in 2017, the typical authorization scenario was straightforward: a user makes a request, we check if they have permission, done. Today? An AI agent might be acting on behalf of a user, calling multiple MCP servers, each with their own tool permissions, and the whole thing needs to happen in milliseconds at the edge.

The MCP specification now explicitly classifies MCP servers as OAuth 2.0 Resource Servers (as of the June 2025 update), requiring fine-grained scopes like `mcp:tools:weather` or `mcp:resources:customer-data:read`. This is exactly the kind of granular permission model Casbin was built for - but the integration story needs work.

## What We're Working On

### MCP Server Authorization

This is probably the most exciting area for us right now. When an AI agent calls an MCP server, that server needs to decide: can this agent, acting on behalf of this user, invoke this specific tool with these parameters?

Traditional RBAC falls short here. You need something more like ABAC - checking not just "is alice an admin" but "is this agent authorized to access customer data for alice's region during business hours." We're exploring how Casbin's policy model can express these constraints naturally.

The challenge is that MCP servers need to make these decisions fast. Really fast. We're looking at lightweight policy evaluation that can run in the MCP server process itself, rather than making network calls to a separate authorization service.

### Edge-First Authorization

Cloudflare Workers, Deno Deploy, Vercel Edge Functions - the edge computing space has exploded. In 2025, sub-50ms response times are table stakes, and you can't afford to add 100ms for an authorization check to some central server.

This is pushing us to think differently about how Casbin works. Can we compile policies to WebAssembly and run them directly in V8 isolates? Can we do smart policy caching at the edge while maintaining consistency? These are hard problems, and we don't have all the answers yet, but it's where things are heading.

We're particularly interested in the Cloudflare Workers ecosystem - they've built out a whole platform for MCP servers with built-in OAuth support. A native Casbin integration there could be powerful.

### RAG Pipeline Authorization

Here's something that keeps coming up: companies building RAG systems where the LLM needs access to internal documents, but different users should see different documents in their responses.

The OWASP Top 10 for LLM Applications 2025 lists "Sensitive Information Disclosure" as a major risk. The solution isn't just filtering outputs - it's ensuring the LLM never sees documents the user shouldn't have access to in the first place.

This means authorization checks need to happen at the vector store query level. We're thinking about how Casbin policies can translate into metadata filters for vector databases - essentially, turning a permission check into a WHERE clause that gets pushed down to the retrieval layer.

### Multi-Agent Scenarios

When you have multiple AI agents collaborating - think a coding agent that calls a deployment agent that calls a monitoring agent - permission delegation gets tricky. Each agent in the chain might have different capabilities, and you need to track the full chain of custody.

The OAuth On-Behalf-Of (OBO) flow handles some of this, but the authorization logic for "can agent B do X on behalf of agent A on behalf of user alice" needs a proper model. Casbin's support for role hierarchies and domain-based RBAC could extend naturally to agent hierarchies, but we need to think through the semantics carefully.

## The Traditional Roadmap Stuff

Of course, we're not abandoning the basics. Some practical things on our list:

**Language implementations catching up** - SwiftCasbin and Lua-Casbin are still behind on features compared to the Go and Node.js versions. The `in` operator, WatcherEx, better caching for the `g` function - these need to be consistent everywhere.

**New framework middlewares** - go-zero has been requested repeatedly. Poem for Rust is gaining traction. Play Framework for Java has been on the wishlist forever.

**Performance work** - As policies get more complex for these new use cases, evaluation speed matters more. We need better benchmarking, profiling, and optimization across all implementations.

## What We Don't Know Yet

Honestly, the AI agent authorization space is moving so fast that we're learning as we go. Some open questions:

- Should Casbin have first-class primitives for "agent identity" vs "user identity"?
- How do you handle authorization for tools that are dynamically discovered via MCP?
- What's the right caching strategy when policies might depend on real-time context?

If you're building in this space and running into authorization problems, we want to hear about it. The best features come from real use cases.

## Getting Involved

We've been a GSoC organization for years, and these AI-related projects are exactly the kind of thing that makes for interesting summer projects. But you don't need to wait for GSoC - if any of this sounds interesting, come chat with us on Discord or open an issue on GitHub.

The next few years are going to be wild for authorization. The problems are harder, but also more interesting. We're excited to figure them out together.
