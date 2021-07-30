module.exports = {
    branches: [
        {
            name: "lerna",
            tag: "latest",
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
    publishConfig: [
        ["npm", {
            tarballDir: "dist"
        }],
        ["github", {
            assets: "dist/*.tgz"
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
    publishConfig: [
        "npm"
    ]
};
*/
