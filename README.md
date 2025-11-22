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

#### Browser Examples

csv.js

```javascript
import { csv } from 'https://esm.sh/@jobscale/csv';

const logger = console;
const main = () => {
  csv.stringify([['a', 1, 2, 3, 4]])
  .then(logger.info);
  csv.parse('a,1,2,3,4')
  .then(logger.info);
};
main();
```

#### Nodejs [ 20.x, 22.x, 24.x ] Examples

csv.js

```javascript
import { csv } from '@jobscale/csv';

const logger = console;
const main = () => {
  csv.stringify([['a', 1, 2, 3, 4]])
  .then(logger.info);
  csv.parse('a,1,2,3,4')
  .then(logger.info);
};
main();
```
