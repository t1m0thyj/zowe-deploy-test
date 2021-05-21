module.exports = {
    branches: [
        {
            name: "master",
            level: "minor",
            dependencies: [
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
                "@zowe/perf-timing": "latest"
            }
        },
        {
            name: "lts-*",
            level: "patch",
            dependencies: [
                "@brightside/imperative"
            ]
        }
    ],
    // plugins: [
    //     "semantic-release-zowe-cli",
    //     ["@semantic-release/npm", {
    //         tarballDir: "dist"
    //     }],
    //     ["@semantic-release/github", {
    //         assets: "dist/*.tgz"
    //     }],
    //     ["@semantic-release/git", {
    //         message: "Bump version to ${nextRelease.version} [ci skip"
    //     }]
    // ]
    plugins: [
        "semantic-release-zowe-cli",
        ["semantic-release-lerna", {
            tarballDir: "dist"
        }],
        ["@semantic-release/github", {
            assets: "dist/*.tgz"
        }],
        ["@semantic-release/git", {
            assets: [
                "lerna.json",
                "package.json",
                "package-lock.json",
                "packages/*/CHANGELOG.md",
                "packages/*/package.json"
            ],
            message: "Bump version to ${nextRelease.version} [ci skip]"
        }]
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
    plugins: [
        "semantic-release-zowe-cli",
        "@semantic-release/npm",
        "@semantic-release/git"
    ]
};
*/