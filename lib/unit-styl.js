/*!
 * unit.styl v0.1.1
 * MIT License
 */

var stylus = require("stylus");
var path   = require("path");

exports = module.exports = plugin;


/**
 * Stylus path.
 */

exports.path = __dirname;


/**
 * Return the plugin callback for Stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin () {
  return function(style){
    style.include(__dirname);
  };
}
