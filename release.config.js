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
        "./octorelease/packages/changelog",
        ["./octorelease/packages/npm", {
            aliasTags: {
                "latest": "zowe-v1-lts"
            },
            tarballDir: "dist"
        }],
        ["./octorelease/packages/github", {
            assets: "dist/*.tgz",
            checkPrLabels: true
        }],
        "./octorelease/packages/git"
    ]
};

/*
// Sample release config for Zowe CLI
module.exports = {
    branches: [
        {
            name: "master",
            level: "minor",
            dependencies: [
                "@zowe/imperative",
                "@zowe/perf-timing"
            ],
            aliasTags: [
                "zowe-v1-lts"
            ]
        },
        {
            name: "next",
            prerelease: true,
            dependencies: {
                "@zowe/imperative": "next",
                "@zowe/perf-timing": "latest"
            }
        },
        {
            name: "lts-incremental",
            level: "patch",
            dependencies: [
                "@brightside/imperative"
            ]
        },
        {
            name: "lts-stable",
            level: "patch",
            dependencies: [
                "@brightside/imperative"
            ]
        }
    ],
    publishConfig: [
        "npm"
    ]
};
*/
