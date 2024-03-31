const { Csv, csv } = require('..');
const {
  data1, data2, data3, data4, urls1, urls2,
} = require('./data');

describe('test csv data1', () => {
  const customCsv = new Csv({
    delimiter: ',',
    eol: '\r\n',
  });

  for (const [index, data] of data1.entries()) {
    describe('csv stringify', () => {
      it(`toBe prompt ${index}`, async () => {
        await customCsv.stringify(data.obj)
        .then(str => {
          expect(str).toBe(data.str);
        });
      });
    });

    describe('csv parse', () => {
      it(`toStrictEqual prompt ${index}`, async () => {
        await customCsv.parse(data.str)
        .then(obj => {
          expect(obj).toStrictEqual(data.obj);
        });
      });
    });
  }
});

describe('test csv data2', () => {
  const customCsv = new Csv({
    delimiter: ',',
    eol: '\n',
  });

  for (const [index, data] of data2.entries()) {
    describe('csv stringify', () => {
      it(`toBe prompt ${index}`, async () => {
        await customCsv.stringify(data.obj)
        .then(str => {
          expect(str).toBe(data.str);
        });
      });
    });

    describe('csv parse', () => {
      it(`toStrictEqual prompt ${index}`, async () => {
        await customCsv.parse(data.str)
        .then(obj => {
          expect(obj).toStrictEqual(data.obj);
        });
      });
    });
  }
});

describe('test csv data3', () => {
  const customCsv = new Csv({
    delimiter: ',',
    eol: '\r\n',
  });

  for (const [key, value] of Object.entries(data3)) {
    describe(`csv stringify ${key}`, () => {
      const data = {};
      it(`csv toBe ${key}`, async () => {
        data.parsed = await customCsv.parse(value);
        data.str = await customCsv.stringify(data.parsed);
        expect(data.str).toBe(value);
      });

      it(`csv toStrictEqual ${key}`, async () => {
        const obj = await customCsv.parse(data.str);
        expect(obj).toStrictEqual(data.parsed);
      });
    });
  }
});

describe('test csv data4', () => {
  for (const [key, value] of Object.entries(data4)) {
    describe(`csv stringify ${key}`, () => {
      const data = {};
      it(`csv toBe ${key}`, async () => {
        data.parsed = await csv.parse(value);
        data.str = await csv.stringify(data.parsed);
        expect(data.str).toBe(value);
      });

      it(`csv toStrictEqual ${key}`, async () => {
        const obj = await csv.parse(data.str);
        expect(obj).toStrictEqual(data.parsed);
      });
    });
  }
});

describe('test csv urls1', () => {
  const eol = '\n';
  const customCsv = new Csv({
    eol,
  });
  const data = {};
  for (const [index, url] of urls1.entries()) {
    describe('csv fetch', () => {
      it(`toEqual prompt ${index}`, async () => {
        data.str = await fetch(url).then(res => res.text());
        if (data.str && data.str[data.str.length - 1] !== '\n') data.str += eol;
        expect(data.str).toEqual(expect.anything());
      });
    });

    describe('csv parse', () => {
      it(`toEqual prompt ${index}`, async () => {
        data.obj = await csv.parse(data.str);
        expect(data.obj).toEqual(expect.anything());
      });
    });

    describe('csv stringify', () => {
      it(`toBe prompt ${index}`, async () => {
        await customCsv.stringify(data.obj)
        .then(str => {
          expect(str).toBe(data.str);
        });
      });
    });

    describe('check match', () => {
      it(`toEqual prompt ${index}`, async () => {
        const obj = await csv.parse(data.str);
        expect(obj).toStrictEqual(data.obj);
      });
    });
  }
});

describe('test csv urls2', () => {
  const eol = '\n';
  const customCsv = new Csv({
    eol,
  });
  const data = {};
  for (const [index, url] of urls2.entries()) {
    describe('csv fetch', () => {
      it(`toEqual prompt ${index}`, async () => {
        data.str = await fetch(url).then(res => res.text());
        if (data.str && data.str[data.str.length - 1] !== '\n') data.str += eol;
        expect(data.str).toEqual(expect.anything());
      });
    });

    describe('csv parse', () => {
      it(`toEqual prompt ${index}`, async () => {
        data.obj = await csv.parse(data.str);
        expect(data.obj).toEqual(expect.anything());
      });
    });

    describe('csv stringify', () => {
      it(`toBe prompt ${index}`, async () => {
        await customCsv.stringify(data.obj)
        .then(str => {
          expect(str).toBe(data.str);
        });
      });
    });

    describe('check match', () => {
      it(`toEqual prompt ${index}`, async () => {
        const obj = await csv.parse(data.str);
        expect(obj).toStrictEqual(data.obj);
      });
    });
  }
});
