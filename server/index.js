const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const cors = require('cors');

require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', expressStaticGzip(__dirname + '/public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

const { getById } = require('../db/PG/postgreQueries.js');


//loader IO
app.get("/loaderio-5fbf2c0aea965cf58adb218b83e9bece.txt", (req,res) => {
	console.log('loader');
  res.sendFile('/home/ubuntu/repos/Reviews/server/loaderio-5fbf2c0aea965cf58adb218b83e9bece.txt');
});



app.get('/reviews/:id', (req, res) => {
console.log(req.params);
	const id = req.params.id;
  getById(id,(data)=>{
    res.send(data);
  });
});

//it will delete all the reviews for product (dbId), there should be another delete - to delete a specific review
app.delete('/reviews/:id', (req, res) => {
  const id = req.params.id;
  Review.deleteOne({dbId: id})
    .then((dbObj) => {
      res.json(dbObj);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(404);  //It is not the right code
      }
    });
})

// use find in find having 2 schemas!
//to change review to existing product => get all reviews from ?
//current product reviews should live in REDIS
app.put('/reviews/:id', (req, res) => {
  const id = req.params.id;
  Review.updateOne({dbId: id}, req.body)
    .then((dbObj) => {
      res.json(dbObj);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(404);
      }
    });
})

//for future:
//avoid double posting of the same data
//to change review to existing product => get all reviews from ?
//current product reviews should live in REDIS
app.post('/reviews/:id', (req, res) => {
  const id = req.params.id;
  const document = new Review(req.body)  //schema-valid JSON should be sent to server, inculing!!!!! the main id(dbId)
  document.save()
    .then((dbObj) => {
      res.json(dbObj);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(404);
      }
    });
})

module.exports = app;
