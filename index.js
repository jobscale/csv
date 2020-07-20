const { Csv } = require('.');

const logger = console;
const main = () => {
  Csv.stringify([['a', 1, 2, 3, 4]])
  .then(logger.info);
  Csv.parse('a,1,2,3,4')
  .then(logger.info);
};
main();
