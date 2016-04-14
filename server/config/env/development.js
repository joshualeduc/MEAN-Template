var mongodb = require('./dbInfo.js'); //module.exports mongolab url in this file
module.exports = {
  db: mongodb,
  sessionSecret: 'developmentSecret'
};