const path = require("path");
const {
  fetchGitHubJson,
  readExistingJson,
  writeJson,
} = require("./github-data-utils");

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

async function fetchStars() {
  const results = await Promise.all(
    badges.map(async({owner, repo}) => {
      const data = await fetchGitHubJson(
        `https://api.github.com/repos/${owner}/${repo}`,
        "casbin-website-footer-stars",
        `stars for ${owner}/${repo}`
      );

      if (typeof data.stargazers_count !== "number") {
        throw new Error(`Missing stargazers_count for ${owner}/${repo}`);
      }

      return [getRepoKey(owner, repo), data.stargazers_count];
    })
  );

  return Object.fromEntries(results);
}

async function main() {
  const existingStars = readExistingJson(outputPath);

  try {
    const stars = await fetchStars();
    const payload = {
      generatedAt: new Date().toISOString(),
      stars,
    };

    writeJson(outputPath, payload);
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
