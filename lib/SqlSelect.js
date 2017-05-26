class SelectSql {
  constructor(type) {
    this.TYPE = 'select';
    this.TABLE = [];
    this.left = [];
    this.right = [];
  }

  table(tableName, shortName) {
    this.TABLE.push({
      name: tableName,
      shortName
    });
    return this
  }

  done() {
    let result = '';
    result += this.TYPE;
    return result;
  }
}

module.exports = SelectSql;
