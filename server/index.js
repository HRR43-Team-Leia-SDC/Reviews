const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
require('dotenv').config();

//MONGOOSE
const mongoose = require('mongoose');
const { schema } = require('../db/schema.js');
mongoose.connect('mongodb://localhost/reviews', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const reviewSchema = new mongoose.Schema(schema);
const Review = mongoose.model('Review', reviewSchema);


const app = express();
app.use(bodyParser.json());

app.use('/', expressStaticGzip(__dirname + '/public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

// a route to request all review objects from the db
app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  Review.find({dbId: id})
    .then((dbObj) => {
      res.json(dbObj);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(404);
      }
    });
})

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