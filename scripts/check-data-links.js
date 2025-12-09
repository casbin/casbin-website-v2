#!/usr/bin/env node

/**
 * Script to check URL availability in data files (JSON and JS files)
 * Checks GitHub profiles, repositories, and external links
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Files and patterns to check
const filesToCheck = [
  'static/data/users.json',
  'src/tableData/AdapterData/AdapterGoData.js',
  'src/tableData/AdapterData/AdapterJavaData.js',
  'src/tableData/AdapterData/AdapterNodejsData.js',
  'src/tableData/AdapterData/AdapterPhpData.js',
  'src/tableData/AdapterData/AdapterPythonData.js',
  'src/tableData/AdapterData/AdapterRustData.js',
  'src/tableData/AdapterData/AdapterRubyData.js',
  'src/tableData/AdapterData/AdapterSwiftData.js',
  'src/tableData/AdapterData/AdapterDotNETData.js',
  'src/tableData/AdapterData/AdapterLuaData.js',
  'src/tableData/MiddlewareData/MiddlewareData.js',
  'src/tableData/DispatcherData/DispatcherData.js',
  'src/tableData/RoleManagerData/RoleManagerData.js',
  'src/tableData/WatcherData/WatcherData.js',
];

// URL patterns to ignore (known problematic sites)
const ignorePatterns = [
  /^https:\/\/codeigniter\.com\//,
  /^https:\/\/www\.thinkphp\.cn\//,
  /^https:\/\/virgool\.io\//,
  /^https:\/\/blog\.csdn\.net/,
  /^https:\/\/kns\.cnki\.net/,
  /^https:\/\/learnku\.com/,
  /^http:\/\/www\.cnblogs\.com/,
];

// Extract URLs from file content
function extractUrls(content) {
  const urls = new Set();
  
  // Match various URL patterns
  const urlRegex = /https?:\/\/[^\s\)"']+/g;
  const matches = content.match(urlRegex);
  
  if (matches) {
    matches.forEach(url => {
      // Clean up trailing characters
      url = url.replace(/[,;:)}\]]+$/, '');
      urls.add(url);
    });
  }
  
  return Array.from(urls);
}

// Check if URL should be ignored
function shouldIgnore(url) {
  return ignorePatterns.some(pattern => pattern.test(url));
}

// Check URL availability with retries
function checkUrl(url, retries = 2) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
      },
      timeout: 10000,
    };
    
    const req = protocol.request(url, options, (res) => {
      // Accept 2xx, 3xx status codes as success
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ url, status: 'ok', statusCode: res.statusCode });
      } else if (res.statusCode === 429 && retries > 0) {
        // Rate limited, retry after delay
        setTimeout(() => {
          checkUrl(url, retries - 1).then(resolve);
        }, 2000);
      } else {
        resolve({ url, status: 'error', statusCode: res.statusCode });
      }
    });
    
    req.on('error', (err) => {
      if (retries > 0) {
        setTimeout(() => {
          checkUrl(url, retries - 1).then(resolve);
        }, 1000);
      } else {
        resolve({ url, status: 'error', error: err.message });
      }
    });
    
    req.on('timeout', () => {
      req.destroy();
      if (retries > 0) {
        setTimeout(() => {
          checkUrl(url, retries - 1).then(resolve);
        }, 1000);
      } else {
        resolve({ url, status: 'error', error: 'timeout' });
      }
    });
    
    req.end();
  });
}

// Main function
async function main() {
  console.log('Starting link checking in data files...\n');
  
  const results = {
    total: 0,
    ok: 0,
    error: 0,
    ignored: 0,
    errors: [],
  };
  
  for (const file of filesToCheck) {
    const filePath = path.join(process.cwd(), file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }
    
    console.log(`Checking: ${file}`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const urls = extractUrls(content);
    
    console.log(`  Found ${urls.length} URLs`);
    
    for (const url of urls) {
      results.total++;
      
      if (shouldIgnore(url)) {
        results.ignored++;
        continue;
      }
      
      const result = await checkUrl(url);
      
      if (result.status === 'ok') {
        results.ok++;
      } else {
        results.error++;
        results.errors.push({ file, ...result });
        console.log(`  ❌ ${url} - ${result.error || result.statusCode}`);
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('');
  }
  
  console.log('\n=== Summary ===');
  console.log(`Total URLs checked: ${results.total}`);
  console.log(`✅ OK: ${results.ok}`);
  console.log(`❌ Errors: ${results.error}`);
  console.log(`⚠️  Ignored: ${results.ignored}`);
  
  if (results.errors.length > 0) {
    console.log('\n=== Failed URLs ===');
    results.errors.forEach(({ file, url, error, statusCode }) => {
      console.log(`${file}: ${url}`);
      console.log(`  Error: ${error || statusCode}\n`);
    });
    
    // Exit with error code if there are failures
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
