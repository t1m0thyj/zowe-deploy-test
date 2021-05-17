module.exports = {
    branches: [
        {
            name: "master",
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
            range: "2.x",
            dependencies: [
                "@brightside/imperative"
            ]
        },
        {
            name: "lts-stable",
            range: "1.x",
            dependencies: [
                "@brightside/imperative"
            ]
        }
    ],
    plugins: [
        "semantic-release-zowe-cli",
        "@semantic-release/npm",
        "@semantic-release/github"
    ]
};
