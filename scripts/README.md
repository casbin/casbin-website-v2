# Scripts

This directory contains utility scripts for the Casbin website.

## check-data-links.js

Checks the availability of all URLs in data files (JSON and JavaScript files).

### What it checks

- GitHub profile URLs (e.g., `@username`)
- GitHub repository URLs
- External documentation links
- Any HTTP/HTTPS URLs in the following files:
  - `static/data/users.json`
  - All adapter data files in `src/tableData/AdapterData/`
  - All middleware data files in `src/tableData/MiddlewareData/`
  - All dispatcher data files in `src/tableData/DispatcherData/`
  - All role manager data files in `src/tableData/RoleManagerData/`
  - All watcher data files in `src/tableData/WatcherData/`

### Usage

```bash
# Run directly
node scripts/check-data-links.js

# Or use the npm script
npm run check:links
# or
yarn check:links
```

### Configuration

The script ignores certain URL patterns that are known to be problematic or block automated checks. These are configured in the `ignorePatterns` array in the script.

### CI/CD Integration

This script is automatically run by GitHub Actions on a schedule (weekly) via the `data-links-check.yml` workflow.
