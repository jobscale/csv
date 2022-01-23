### Csv.stringify

@param [[]]

### Csv.parse

@param string

#### Setup
```bash
git clone https://github.com/jobscale/csv.git
```

#### Example
```nodejs
const { csv } = require('.');

const logger = console;
const main = () => {
  Csv.stringify([['a', 1, 2, 3, 4]])
  .then(logger.info);
  Csv.parse('a,1,2,3,4')
  .then(logger.info);
};
main();
```

### Run
```bash
npm start
```
