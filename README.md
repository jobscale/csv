# @jobscale/csv

### csv.stringify

`@param [[]]`

### csv.parse

`@param string`

#### Installation

```bash
npm i @jobscale/csv
```

## Testing

```
npm test
```

#### Examples

csv.js

```javascript
const { csv } = require('@jobscale/csv');

const logger = console;
const main = () => {
  csv.stringify([['a', 1, 2, 3, 4]])
  .then(logger.info);
  csv.parse('a,1,2,3,4')
  .then(logger.info);
};
main();
```

### Run

```bash
node csv
```
