'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"www.yiivue.com"'
  BASE_API: '"http://192.168.41.130:9501"'
})
