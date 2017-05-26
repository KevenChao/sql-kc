const sql = require('./index');

var selectString = sql.select().table('abc', 'sss').done()

console.log(selectString);
