const fs = require("fs");
const path = require("path");

function readExistingJson(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`);
}

function getGitHubHeaders(userAgent) {
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": userAgent,
  };
}

async function fetchGitHubJson(url, userAgent, errorLabel) {
  const response = await fetch(url, {
    headers: getGitHubHeaders(userAgent),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to fetch ${errorLabel}: ${response.status} ${body}`);
  }

  return response.json();
}

module.exports = {
  fetchGitHubJson,
  readExistingJson,
  writeJson,
};
