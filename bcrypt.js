#!/usr/bin/env node
var program = require('commander');

program
  .version('0.0.1')
  .command('hash [str]', 'Hash a string', {isDefault: true})
  .parse(process.argv);
