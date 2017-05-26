class UpdateSql {
  constructor(type) {
    this.TYPE = 'select';
    this.TABLE = [];
    this.left = [];
    this.right = [];
  }
  done() {
    let result = '';
    result += this.TYPE;
    return result;
  }

}

module.exports = UpdateSql;
