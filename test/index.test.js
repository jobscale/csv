require('@jobscale/core');
const { Csv, csv } = require('..');
const {
  data1, data2, urls1, urls2,
} = require('./data');

describe('test csv data1', () => {
  const customCsv = new Csv({
    delimiter: ',',
    eol: '\r\n',
  });

  describe('csv stringify', () => {
    it('toMatch prompt', async () => {
      await customCsv.stringify(data1.obj)
      .then(str => {
        expect(str).toMatch(data1.str2);
      });
    });
  });

  describe('csv parse', () => {
    it('toMatch prompt', async () => {
      await customCsv.parse(data1.str1)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data1.obj }));
      });
    });

    it('toMatch prompt', async () => {
      await customCsv.parse(data1.str2)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data1.obj }));
      });
    });

    it('toMatch prompt', async () => {
      await customCsv.parse(data1.str3)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data1.obj }));
      });
    });
  });
});

describe('test csv data2', () => {
  describe('csv stringify', () => {
    it('toMatch prompt', async () => {
      await csv.stringify(data2.obj)
      .then(str => {
        expect(str).toMatch(data2.str2);
      });
    });
  });

  describe('csv parse', () => {
    it('toMatch prompt', async () => {
      await csv.parse(data2.str1)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data2.obj }));
      });
    });

    it('toMatch prompt', async () => {
      await csv.parse(data2.str2)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data2.obj }));
      });
    });

    it('toMatch prompt', async () => {
      await csv.parse(data2.str3)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data2.obj }));
      });
    });
  });
});

describe('test csv urls1', () => {
  const eol = '\n';
  const customCsv = new Csv({
    eol,
  });
  const data = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const url of urls1) {
    describe('csv fetch', () => {
      it('toEqual prompt', async () => {
        data.str = await fetch(url).then(res => res.text());
        if (data.str && data.str[data.str.length - 1] !== '\n') data.str += eol;
        expect(data.str).toEqual(expect.anything());
      });
    });

    describe('csv parse', () => {
      it('toEqual prompt', async () => {
        data.obj = await csv.parse(data.str);
        expect(data.obj).toEqual(expect.anything());
      });
    });

    describe('csv stringify', () => {
      it('toMatch prompt', async () => {
        await customCsv.stringify(data.obj)
        .then(str => {
          expect(str).toMatch(data.str);
        });
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
  // eslint-disable-next-line no-restricted-syntax
  for (const url of urls2) {
    describe('csv fetch', () => {
      it('toEqual prompt', async () => {
        data.str = await fetch(url).then(res => res.text());
        expect(data.str).toEqual(expect.anything());
      });
    });

    describe('csv parse', () => {
      it('toEqual prompt', async () => {
        data.obj = await csv.parse(data.str);
        expect(data.obj).toEqual(expect.anything());
      });
    });

    describe('csv stringify', () => {
      it('toMatch prompt', async () => {
        await customCsv.stringify(data.obj)
        .then(str => {
          expect(str).toMatch(data.str);
        });
      });
    });
  }
});
