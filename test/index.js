
var Differ = require('node-document-differ');

module.exports = Differ.Spec('DeepDiff', {
  module: require('..'),
  engine: require('deep-diff'),
  options: {}
});
