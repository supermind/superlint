var R = require('ramda')
var path = require('path')
var eslint = require('eslint')
var pkg = require('./package.json')

var getFix = R.propOr(false, 'fix')
var getRules = R.propOr({}, 'rules')
var getRulesets = R.propOr('', 'use')
var addBaseRuleset = R.concat(['supermind'])
var prefixRulesets = R.map(R.concat('supermind/'))
var allowRulesets = R.intersection([
  'flowtype',
  'jsx-a11y',
  'inferno',
  'react'
])
var buildRulesets = R.compose(
  addBaseRuleset,
  prefixRulesets,
  allowRulesets,
  getRulesets
)

var buildConfig = function(config) {
  return {
    root: true,
    extends: buildRulesets(config),
    rules: getRules(config)
  }
}

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint,
  cmd: 'superlint',
  tagline: 'Supermind linting standards',
  parseOpts: function(options, config) {
    var eslintConfig = options.eslintConfig = {}
    eslintConfig.fix = options.fix = getFix(config)
    eslintConfig.baseConfig = buildConfig(config)
    console.log(config)
    console.log(options)
    return options
  }
}
