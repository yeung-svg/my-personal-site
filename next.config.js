const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasGithubPagesCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";

const repoName = process.env.GITHUB_REPO_NAME || "my-personal-site";
const basePath = isGithubPages && !hasGithubPagesCustomDomain ? `/${repoName}` : "";

const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        ...(basePath
          ? {
              basePath,
              assetPrefix: basePath,
            }
          : {}),
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
  },
};

module.exports = nextConfig;
