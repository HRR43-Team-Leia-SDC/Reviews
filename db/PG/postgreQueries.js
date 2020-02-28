const { Pool } = require('pg');


const pool = new Pool({
  database: 'rev',
  user: 'ak',
  password: 'password',
  // max: 10, // max number of workers at the same time
  // connectionTimeoutMillis: 0, // time the request waits for fresh client to give him some work
  // idleTimeoutMillis: 0, // client waits for next job, then checks out and becomes available
});

module.exports.getById = (dbId, callback) => {
  const query = 'SELECT * FROM rev WHERE dbId = $1';
  pool.query(query, [dbId])
    .then((data) => {
      //console.log(data.rows[0]);
      callback(data.rows);
    });
};

// t0 = new Date;
// for (let i = 0; i < 10000; i++) {

//   get(i, 2);
// }
