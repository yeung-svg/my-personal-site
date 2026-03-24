const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPO_NAME || "my-personal-site";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
  },
};

module.exports = nextConfig;
