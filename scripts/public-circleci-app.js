#!/usr/local/bin/node
const path = require('path');
const semanticRelease = require('../utils/semanticRelease');
const package = require('../utils/package');

semanticRelease({
  verifyConditions: [
    "condition-circle",
    "semantic-release-docker",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  prepare: [
    "@semantic-release/npm"
  ],
  publish: [
    "@semantic-release/github",
    "@semantic-release/npm",
    {
      "path": "semantic-release-docker",
      "name": package.name.replace(/@/g, ''),
    }
  ]
});