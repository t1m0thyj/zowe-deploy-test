// module.exports = {
//     branches: [
//         {
//             name: "master",
//             level: "minor"
//         },
//         {
//             name: "next",
//             prerelease: true
//         },
//         {
//             name: "lts-*",
//             level: "patch"
//         }
//     ],
//     plugins: [
//         "@octorelease/changelog",
//         ["@octorelease/npm", {
//             aliasTags: {
//                 "latest": "zowe-v1-lts"
//             },
//             smokeTest: true,
//             tarballDir: "dist"
//         }],
//         ["@octorelease/github", {
//             assets: "dist/*.tgz",
//             checkPrLabels: true
//         }],
//         "@octorelease/git"
//     ]
// };

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
        "semantic-release-zowe-cli",
        ["@semantic-release/npm", {
            tarballDir: "dist"
        }],
        ["@semantic-release/github", {
            assets: "dist/*.tgz"
        }],
        "@semantic-release/git"
    ]
};
