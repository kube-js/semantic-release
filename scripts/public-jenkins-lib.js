#!/usr/local/bin/node
const path = require("path");
const semanticRelease = require("../utils/semanticRelease");

semanticRelease({
  branch: "master",
  verifyConditions: [
    {
      path: "./node_modules/@krux/condition-jenkins"
    },
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  prepare: ["@semantic-release/npm"],
  publish: ["@semantic-release/github", "@semantic-release/npm"]
});
