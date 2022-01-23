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

  isEmpty(obj) {
    return [
      JSON.stringify([]),
      JSON.stringify(['']),
    ].indexOf(JSON.stringify(obj)) !== -1;
  }

  lines(all) {
    const data = {
      lines: [],
      line: [],
    };
    const next = () => {
      if (!this.isEmpty(data.line)) data.lines.push(data.line);
      data.line = [];
    };
    all.forEach(str => this.isEol(str) ? next() : data.line.push(this.generate(str)));
    if (data.line.length) next();
    return data.lines;
  }

  columns(line) {
    const data = {
      columns: [],
      empty: true,
    };
    const token = t => {
      if (t !== ',' && !this.isEol(t)) {
        data.columns.push(t);
        data.empty = false;
        return;
      }
      if (data.empty) {
        data.columns.push('');
      }
      if (this.isEol(t)) data.columns.push(t);
      else data.empty = true;
    };
    line.replace(/,|\r?\n|[^,"\r\n]+|"(?:[^"]|"")*"/g, token);
    if (data.empty) data.columns.push('');
    return data.columns;
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
  Csv,
  csv: new Csv(),
};
