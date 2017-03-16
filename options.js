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
    configFile: path.join(__dirname, 'eslintrc.js')
  },
  cwd: ''
}
