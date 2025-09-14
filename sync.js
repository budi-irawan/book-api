const { sequelize } = require('./config/connection');
let pathNormalize = require('path').join(__dirname, 'model');

require('fs')
  .readdirSync(pathNormalize)
  .forEach((file) => {
    require('./model/' + file);
  });

sequelize.sync({ force: true }).then(() => {
  console.log('All models were synchronized successfully.');
  process.exit(0);
}).catch((error) => {
  console.error('Error synchronizing models:', error);
  process.exit(1);
});