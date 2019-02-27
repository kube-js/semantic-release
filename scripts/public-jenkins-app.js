const path = require("path");
const semanticRelease = require("../utils/semanticRelease");
const package = require("../utils/package");

const [org, repo] = package.name.split("/");
const name = `${org.replace(/[\W_]+/g, "")}/${repo}`;

semanticRelease({
  branch: "master",
  verifyConditions: [
    {
      path: "./node_modules/@krux/condition-jenkins"
    },
    "semantic-release-docker",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  prepare: ["@semantic-release/npm"],
  publish: [
    "@semantic-release/github",
    "@semantic-release/npm",
    {
      path: "semantic-release-docker",
      name
    }
  ]
});
