#!/usr/bin/env node
const semanticRelease = require('../utils/semanticRelease');

semanticRelease({
  verifyConditions: [
    "condition-circle",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  prepare: [
    "@semantic-release/npm"
  ],
  publish: [
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
});