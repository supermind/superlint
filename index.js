var Linter = require('standard-engine').linter
var options = require('./options.js')

module.exports = new Linter(options)
