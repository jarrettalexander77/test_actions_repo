const core = require('@actions/core')

const displayName = core.getInput('displayName');

if (displayName) {
  core.setOutput('result', 'passed');
} else {
  core.setFailed('displayName not provided in package.json');
}