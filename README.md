### Csv.stringify

@param [[]]

### Csv.parse

@param string

#### Setup
```bash
git clone https://github.com/jobscale/csv.git
```

#### Example
```bash
echo "const { Csv } = require('csv');
      
const logger = console;
const main = () => {
  Csv.stringify([[1, 2, 3, 4]])
  .then(logger.info);
  Csv.parse('1,2,3,4')
  .then(logger.info);
};
main();" > example.js
```

### Run
```bash
NODE_PATH=. node example.js
```
