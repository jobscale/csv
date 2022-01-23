const { csv } = require('..');

const data1 = {
  obj: [
    ['a', 1, 2, 3, 4],
    ['b"c', 5, ',', '', ''],
  ],
  str1: 'a,1,2,3,4\n\n"b""c",5,",",,\n\n',
  str2: 'a,1,2,3,4\n"b""c",5,",",,',
  str3: 'a,1,2,3,4\n"b""c",5,",",,',
};

const data2 = {
  obj: [
    ['a', 1, 2, 3, 4],
    ['b"c', 5, ',', '', 8],
  ],
  str1: 'a,1,2,3,4\n\n"b""c",5,",",,8\n\n',
  str2: 'a,1,2,3,4\n"b""c",5,",",,8',
  str3: 'a,1,2,3,4\n"b""c",5,",",,8',
};

describe('test csv data1', () => {
  describe('csv stringify', () => {
    it('toMatch prompt', async () => {
      await csv.stringify(data1.obj)
      .then(str => {
        expect(str).toMatch(data1.str2);
      });
    });
  });

  describe('csv parse', () => {
    it('toMatch prompt', async () => {
      await csv.parse(data1.str1)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data1.obj }));
      });
    });

    it('toMatch prompt', async () => {
      await csv.parse(data1.str2)
      .then(obj => {
        expect(JSON.stringify({ obj })).toMatch(JSON.stringify({ obj: data1.obj }));
      });
    });

    it('toMatch prompt', async () => {
      await csv.parse(data1.str3)
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
