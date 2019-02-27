const semanticRelease = require("../utils/semanticRelease");
const package = require("../utils/package");

const [org, repo] = package.name.split("/");
const name = `${org.replace(/[\W_]+/g, "")}/${repo}`;

semanticRelease({
  verifyConditions: [
    "condition-circle",
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
