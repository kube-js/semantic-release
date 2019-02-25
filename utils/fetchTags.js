const git = require('simple-git/promise')(process.cwd());

module.exports = async () => {
  await git.fetch(['--tags']);
}