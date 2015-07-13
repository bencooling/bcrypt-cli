#!/usr/bin/env node

var program = require('commander');
var bcrypt = require('bcrypt');
var _ = require('lodash');

program
  .option('-s, --salt [number]', 'Generate salt', parseInt)
  .parse(process.argv);

var str = program.args[0];

if (!_.isString(str)) {
  console.error('String required to hash');
  process.exit(1);
}

var generateHash = function (options){

  var settings = _.assign({salt: 8}, options);

  bcrypt.hash(settings.str, settings.salt, function (err, hash) {

    process.stdout.write(hash + '\n');
    process.exit(1);
  });
};

if (!program.salt){
  generateHash({str: str});
}
else {
  bcrypt.genSalt(program.salt, function (err, salt) {

    generateHash({str: str, salt: salt});
  });
}
