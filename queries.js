var { Pool } = require('pg');

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'migrate',
  password: 'Saputra07',
  port: 5432, 
});

module.exports = pool;