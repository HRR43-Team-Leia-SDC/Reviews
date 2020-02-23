const app = require('./index.js');
require('dotenv').config();

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
