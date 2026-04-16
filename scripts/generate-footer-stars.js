const fs = require("fs");
const path = require("path");

const badges = require("../src/components/FooterMoreBadges/badges.json");

const outputPath = path.join(
  __dirname,
  "..",
  "src",
  "components",
  "FooterMoreBadges",
  "stars.json"
);

function getRepoKey(owner, repo) {
  return `${owner}/${repo}`;
}

function readExistingStars() {
  if (!fs.existsSync(outputPath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(outputPath, "utf8"));
  } catch {
    return null;
  }
}

async function fetchStars() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "casbin-website-footer-stars",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const results = await Promise.all(
    badges.map(async({owner, repo}) => {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers,
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to fetch stars for ${owner}/${repo}: ${response.status} ${body}`);
      }

      const data = await response.json();

      if (typeof data.stargazers_count !== "number") {
        throw new Error(`Missing stargazers_count for ${owner}/${repo}`);
      }

      return [getRepoKey(owner, repo), data.stargazers_count];
    })
  );

  return Object.fromEntries(results);
}

async function main() {
  const existingStars = readExistingStars();

  try {
    const stars = await fetchStars();
    const payload = {
      generatedAt: new Date().toISOString(),
      stars,
    };

    fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
    process.stdout.write(`Updated footer stars at ${outputPath}\n`);
  } catch (error) {
    if (existingStars?.stars) {
      process.stderr.write(`${error.message}\nUsing existing footer stars JSON.\n`);
      return;
    }

    throw error;
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exit(1);
});
