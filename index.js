const SqlSelect = require('./lib/SqlSelect');
const SqlInsert = require('./lib/SqlInsert');
const SqlUpdate = require('./lib/SqlUpdate');
const SqlDelete = require('./lib/SqlDelete');

module.exports = {
  select: () => {
    const a = new SqlSelect;
    return a;
  },
  insert: () => {
    const a = new SqlInsert;
    return a;
  },
  update: () => {
    const a = new SqlUpdate;
    return a;
  },
  delete: () => {
    const a = new SqlDelete;
    return a;
  },
}
