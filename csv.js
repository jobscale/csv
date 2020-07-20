class Csv {
  constructor() {
    this.EOL = '\n';
  }

  async parse(str) {
    return this.lines(this.columns(str));
  }

  isEol(str) {
    return ['\r\n', '\n', '\r'].indexOf(str) !== -1;
  }

  lines(all) {
    const data = {
      lines: [],
      line: [],
    };
    const next = () => {
      data.lines.push(data.line);
      data.line = [];
    };
    all.forEach(str => this.isEol(str) ? next() : data.line.push(this.generate(str)));
    if (data.line.length) next();
    return data.lines;
  }

  columns(line) {
    const columns = [];
    let empty = true;
    const token = t => {
      if (t === ',' || this.isEol(t)) {
        if (empty) {
          columns.push('');
        }
        if (this.isEol(t)) columns.push(t);
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

  generate(column) {
    const num = parseInt(column, 10);
    return num.toString() === column ? num
      : (c => (c.match(/"/) ? c.replace(/^"/, '').replace(/"$/, '') : c)
      .replace(/""/g, '"'))(column);
  }

  async stringify(array) {
    return array.map(row => this.joinRow(row)).join(this.EOL);
  }

  joinRow(row) {
    return row.map(x => this.escape(x)).join(',');
  }

  escape(x) {
    const isEsc = () => x.match(/"/) || x.match(/,/) || x.match(/\n/) || x.match(/\r/);
    return typeof x === 'number' ? x
      : (() => isEsc() ? `"${x.replace(/"/g, '""')}"` : x)();
  }
}

module.exports = {
  Csv: new Csv(),
};
