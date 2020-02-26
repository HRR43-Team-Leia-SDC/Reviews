const { Pool } = require('pg');


const pool = new Pool({
  database: 'reviews',
  user: 'ak',
  password: '',
  max: 10, // max number of workers at the same time
  connectionTimeoutMillis: 0, // time the request waits for fresh client to give him some work
  idleTimeoutMillis: 0, // client waits for next job, then checks out and becomes available
});

var t0;
var m = 20000;

const get = (dbId, urlId, cb) => {
  const query = 'SELECT * FROM reviews WHERE dbId = $1 and urlId = $2';
  pool.query(query, [dbId, urlId])
    .then((data) => {
      if (dbId === 9999) {
        console.log(new Date - t0);
      }
    });
}
t0 = new Date;
for (let i = 0; i < 10000; i++) {

  get(i, 2);
}
