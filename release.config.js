module.exports = {
    branches: [
        {
            name: "lerna",
            level: "minor",
            dependencies: [
                "@zowe/perf-timing"
            ]
        },
        {
            name: "next",
            prerelease: true,
            dependencies: {
                "@zowe/perf-timing": "latest"
            }
        },
        {
            name: "lts-*",
            level: "patch",
            dependencies: [
                "@zowe/perf-timing"
            ]
        }
    ],
    plugins: [
        "@octorelease/changelog",
        ["@octorelease/lerna", {
            aliasTags: {
                "latest": "zowe-v1-lts"
            },
            smokeTest: true,
            tarballDir: "dist"
        }],
        ["@octorelease/github", {
            assets: "dist/*.tgz",
            checkPrLabels: true
        }],
        "@octorelease/git"
    ]
};
