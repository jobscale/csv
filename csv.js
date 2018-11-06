const EOL = '\n';
class Csv {
  static async parse(str) {
    return Csv.lines(Csv.columns(str));
  }
  static isEol(str) {
    return ['\r\n', '\n', '\r'].indexOf(str) !== -1;
  }
  static lines(all) {
    const data = {
      lines: [],
      line: [],
    };
    const next = () => {
      data.lines.push(data.line);
      data.line = [];
    };
    all.forEach(str => Csv.isEol(str) ? next() : data.line.push(Csv.generate(str)));
    if (data.line.length) next();
    return data.lines;
  }
  static columns(line) {
    const columns = [];
    let empty = true;
    const token = t => {
      if (t === ',' || Csv.isEol(t)) {
        if (empty) {
          columns.push('');
        }
        if (Csv.isEol(t)) columns.push(t);
        empty = true;
        return;
      }
      columns.push(t);
      empty = false;
    };
    line.replace(/,|\r?\n|[^,"\r\n]+|"(?:[^"]|"")*"/g, token);
    if (empty) columns.push('');
    return columns;
  }
  static generate(column) {
    const num = parseInt(column, 10);
    return num.toString() === column ? num
      : (c => (c.match(/"/) ? c.replace(/^"/, '').replace(/"$/, '') : c)
      .replace(/""/g, '"'))(column);
  }
  static async stringify(array) {
    return array.map(Csv.joinRow).join(EOL);
  }
  static joinRow(row) {
    return row.map(Csv.escape).join(',');
  }
  static escape(x) {
    const isEsc = () => x.match(/"/) || x.match(/,/) || x.match(/\n/) || x.match(/\r/);
    return typeof x === 'number' ? x
      : (() => isEsc() ? `"${x.replace(/"/g, '""')}"` : x)();
  }
}
module.exports = {
  Csv,
};
