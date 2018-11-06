const { Csv } = require('.');

const logger = console;
const main = () => {
  Csv.stringify([[1, 2, 3, 4]])
  .then(logger.info);
  Csv.parse('1,2,3,4')
  .then(logger.info);
};
main();
