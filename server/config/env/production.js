var mongodb = process.env.herokuMongo; //must set herokuMongo in heroku settings
module.exports = {
  db: mongodb,
  sessionSecret: 'productionSecret'
};