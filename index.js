(() => {
  class Csv {
    constructor(options) {
      this.csv = this;
      this.Csv = Csv;
      this.config(options);
    }

    config(options) {
      this.delimiter = options && options.delimiter ? options.delimiter : ',';
      this.EOL = options && options.eol ? options.eol : '\n';
    }

    async parse(str) {
      return this.lines(this.columns(str));
    }

    isEol(str) {
      return ['\r\n', '\n', '\r'].indexOf(str) !== -1;
    }

    isEmpty(obj) {
      return [
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
      next();
      return data.lines;
    }

    columns(line) {
      const data = {
        columns: [],
        empty: true,
      };
      const token = t => {
        if (t !== this.delimiter && !this.isEol(t)) {
          data.columns.push(t);
          data.empty = false;
          return;
        }
        if (data.empty) {
          data.columns.push('');
        }
        if (this.isEol(t)) data.columns.push(t);
        data.empty = true;
      };
      const regexp = new RegExp(`${this.delimiter}|\r?\n|[^${this.delimiter}"\r\n]+|"(?:[^"]|"")*"`, 'g');
      line.replace(regexp, token);
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
      return `${array.map(row => this.joinRow(row)).join(this.EOL)}${this.EOL}`;
    }

    joinRow(row) {
      return row.map(x => this.escape(x)).join(this.delimiter);
    }

    escape(x) {
      const isEsc = () => x.match(/"/) || x.match(/,/) || x.match(/\n/) || x.match(/\r/);
      if (typeof x === 'number') return x;
      if (typeof x === 'boolean') return x;
      if (typeof x === 'undefined') return x;
      return isEsc() ? `"${x.replace(/"/g, '""')}"` : x;
    }
  }

  const csv = new Csv();
  if (typeof module !== 'undefined') module.exports = csv;
  if (typeof window !== 'undefined') window.csv = csv;
})();
