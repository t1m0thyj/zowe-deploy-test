module.exports = {
    branches: [
        {
            name: "master",
            level: "minor"
        },
        {
            name: "next",
            prerelease: true
        },
        {
            name: "lts-*",
            level: "patch"
        }
    ],
    plugins: [
        "./octorelease/packages/changelog",  // @octorelease/changelog
        ["./octorelease/packages/npm", {     // @octorelease/npm
            aliasTags: {
                "latest": "zowe-v1-lts"
            },
            smokeTest: true,
            tarballDir: "dist"
        }],
        ["./octorelease/packages/github", {  // @octorelease/github
            assets: "dist/*.tgz",
            checkPrLabels: true
        }],
        "./octorelease/packages/git"         // @octorelease/git
    ]
};
