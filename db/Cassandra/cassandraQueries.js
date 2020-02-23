const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'reviews',
});
const query = 'SELECT * FROM review WHERE dbId = 9998889 and urlId=4';
const t0 = new Date;
for (let i = 500000; i < 10000000; i = i + 1000000) {

  client.execute(query)
    .then(result => {
      console.log(new Date - t0);
    });
}
