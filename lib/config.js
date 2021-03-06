
/*!
 * Module dependencies.
 */

var space = require('to-space-case');

/**
 * Export `Config`.
 */

module.exports = Config;

/**
 * Configuration constructor.
 *
 * TODO: document me
 *
 * @constructor
 * @public
 */

function Config () {
  this.settings = {
      'mq host': 'localhost'
    , 'mq port': 5672
    , 'mq exchange': 'starsky'
    , 'mq vhost': '/'
    , 'mq tls': false
    , 'mq tls cert': undefined
    , 'mq tls key': undefined
    , 'mq username': 'guest'
    , 'mq password': 'guest'
    , 'mq heartbeat': 30
    , 'namespace': undefined
  };
}

/**
 * Sets the setting `option` with `value`.
 *
 * @param {String|Object} option
 * @param {Mixed} [value]
 * @public
 */

Config.prototype.set = function (option, value) {
  if ('object' == typeof option) {
    for (var key in option) {
      this.set(key, option[key]);
    }
  } else {
    this.settings[space(option)] = value;
  }
};

/**
 * Gets the setting `option`.
 *
 * @param {String} option
 * @return {Mixed}
 * @public
 */

Config.prototype.get = function (option) {
  return this.settings[option];
};
