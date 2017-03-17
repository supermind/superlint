var R = require('ramda')
var path = require('path')
var eslint = require('eslint')
var pkg = require('./package.json')

var getRules = R.prop('rules')
var isObject = R.pipe(R.type, R.equals('Object'))
var isRulesObject = R.propSatisfies(isObject, 'rules')
var buildRules = R.ifElse(isRulesObject, getRules, R.always({}))

var getFix = R.propOr(false, 'fix')
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
    rules: buildRules(config)
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
    return options
  }
}
