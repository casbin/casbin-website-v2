---
title: Link Checking
description: Guide to link checking in the Casbin website repository
keywords: [link checking, CI/CD, GitHub Actions, quality assurance]
---

# Link Checking

The Casbin website repository has comprehensive link checking to ensure all URLs (GitHub profiles, repositories, internal links, external links) remain valid and accessible.

## Overview

Link checking is performed automatically through GitHub Actions workflows on:

- **Schedule**: Weekly checks on Saturdays
- **Pull Requests**: Automatic checks when relevant files are modified
- **Manual**: Can be triggered via workflow dispatch

## What Gets Checked

### 1. Documentation Links (docs/)

All markdown (`.md`) and MDX (`.mdx`) files in the `docs/` directory are checked for:

- Internal links to other documentation pages
- External links to websites and resources
- GitHub repository and profile links
- Image references

**Workflow**: `.github/workflows/docs-links-check.yml` (scheduled) and `.github/workflows/docs-links-check-pr.yml` (on PRs)

### 2. Blog Posts (blog/)

All markdown files in the `blog/` directory are checked for the same types of links as documentation.

**Workflow**: `.github/workflows/docs-links-check.yml` (scheduled) and `.github/workflows/docs-links-check-pr.yml` (on PRs)

### 3. README.md

The main README file is checked to ensure all links remain valid.

**Workflow**: `.github/workflows/docs-links-check.yml` (scheduled) and `.github/workflows/docs-links-check-pr.yml` (on PRs)

### 4. Data Files

JavaScript and JSON data files containing ecosystem information are checked for:

- GitHub repository URLs
- GitHub profile URLs (author links)
- External documentation links
- Project websites

**Files checked**:
- `static/data/users.json` - User showcase data
- All adapter data files in `src/tableData/AdapterData/`
- All middleware data files in `src/tableData/MiddlewareData/`
- All dispatcher data files in `src/tableData/DispatcherData/`
- All role manager data files in `src/tableData/RoleManagerData/`
- All watcher data files in `src/tableData/WatcherData/`

**Workflow**: `.github/workflows/data-links-check.yml`

**Local testing**: You can run the data links checker locally:

```bash
npm run check:links
# or
yarn check:links
```

## Configuration

### Ignored URL Patterns

Some URLs are intentionally ignored in link checking because they:
- Block automated checkers
- Have rate limiting that causes false positives
- Are known to be problematic with HEAD requests

These patterns are configured in `.github/workflows/docs.links.check.config.json`:

```json
{
  "ignorePatterns": [
    {
      "pattern": "^(?!https?://)"
    },
    {
      "pattern": "^https://codeigniter.com/"
    },
    {
      "pattern": "^https://www.thinkphp.cn/"
    }
    // ... more patterns
  ]
}
```

The data links checker script also has its own ignore patterns in `scripts/check-data-links.js`.

## How It Works

### Markdown Link Checking

Uses the [github-action-markdown-link-check](https://github.com/gaurav-nelson/github-action-markdown-link-check) action powered by [markdown-link-check](https://github.com/tcort/markdown-link-check).

For each link found in markdown files:
1. Resolves the URL (handling relative paths, anchors, etc.)
2. Makes an HTTP HEAD request to check availability
3. Reports broken links as workflow failures

### Data Links Checking

Uses a custom Node.js script (`scripts/check-data-links.js`) that:
1. Extracts all URLs from specified data files using regex
2. Filters out ignored patterns
3. Makes HTTP HEAD requests with retry logic
4. Reports all broken links with error details

## Handling False Positives

If you encounter false positives (working links reported as broken):

1. **Verify the link**: Manually check if the link actually works in a browser
2. **Check rate limiting**: Some sites (like LinkedIn) aggressively rate-limit automated checkers
3. **Add to ignore patterns**: If confirmed as false positive, add the pattern to the appropriate config file
4. **Document the reason**: Add a comment explaining why it's ignored

## Contributing

When adding new data files with URLs:

1. Add the file path to the `filesToCheck` array in `scripts/check-data-links.js`
2. Test locally with `npm run check:links`
3. Ensure all links are valid before committing

When adding new documentation:

1. Ensure all links work before committing
2. The PR checks will automatically verify links in modified files
3. Internal links should use relative paths when possible

## Troubleshooting

### Link Checker Failures

If the link checker fails on your PR:

1. Check the workflow logs to see which links are broken
2. Fix or remove broken links
3. If it's a false positive, discuss with maintainers about adding to ignore list

### Rate Limiting

GitHub Actions may encounter rate limiting when checking many links. This is handled by:
- Retry logic in the data links checker
- Staggered execution of different workflows
- Using quiet mode to reduce noise in logs

## Manual Workflow Runs

You can manually trigger link checking workflows:

1. Go to the [Actions tab](https://github.com/casbin/casbin-website-v2/actions)
2. Select the workflow you want to run
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

This is useful for:
- Testing after making many link changes
- Verifying fixes for broken links
- One-off checks outside the regular schedule
