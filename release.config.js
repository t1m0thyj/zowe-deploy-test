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
    plugins: [
        "semantic-release-zowe-cli",
        "@semantic-release/npm",
        "@semantic-release/git"
    ]
};

/*
// Sample release config for Zowe CLI
module.exports = {
    branches: [
        {
            name: "master",
            range: "6.x",
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
            range: "2.36.x",
            dependencies: [
                "@brightside/imperative"
            ]
        },
        {
            name: "lts-stable",
            range: "1.0.x",
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
