var _ = require('lodash')
var path = require('path')
var eslint = require('eslint')
var pkg = require('./package.json')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint,
  cmd: 'superlint',
  tagline: 'Supermind linting standards',
  eslintConfig: {
    baseConfig: {
      extends: [ 'supermind' ]
    }
    // configFile: path.join(__dirname, 'eslintrc.js')
  },
  parseOpts(options, config) {
    console.log('--- options ---')
    console.log(options)
    console.log('--- config ---')
    console.log(config)
    options.fix = _.get(config, 'fix', false)
    // if (config.use) {
    //   var eslintrc = require('./eslintrc')
    //   eslintrc.extends.concat(config.use)
    //   console.log(eslintrc)
    // }
    return options
  }
}
