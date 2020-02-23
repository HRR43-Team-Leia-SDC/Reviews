/* eslint-disable no-unused-vars */
const Faker = require('faker');
const mongoose = require('mongoose');
const { schema } = require('./schema.js');


mongoose.connect('mongodb://localhost/reviews', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const reviewSchema = new mongoose.Schema(schema);
const Review = mongoose.model('Review', reviewSchema);

var t0 = new Date;
// Formatted date maker
const dateFormatter = () => {
  const date = Faker.date.past().toString();
  const dateFormatted = `${date.substring(4, 10)},${date.substring(10, 15)}`;
  return dateFormatted;
};

// Weighted rating generator function  - squeezed
const ratingGenerator = () => {
  const randomNum = Math.random() * 10;
  if (randomNum > 0 && randomNum < 5) {
    return 5;
  } if (randomNum > 5 && randomNum < 6.5) {
    return 4;
  } if (randomNum > 6.5 && randomNum < 8) {
    return 3;
  } if (randomNum > 8 && randomNum < 9) {
    return 2;
  }
  return 1;
};

// for 2000 documents
let arrayOfDocs = [];
let res = 2000;
let quantityOfReviews = Math.random() * 10 + 10;
for (let i = 0; i < 100; i += 1) {
  let currentPictureId = 10;
  //random number of reviews for item
  var arrayOfReviews = [];
  for (let j = 0; j < quantityOfReviews; j += 1) {
    const review = {
      urlId: j,
      username: Faker.internet.userName(),
      datePosted: dateFormatter(),
      imageUrl: `https://www.placecage.com/100/1${currentPictureId}`,
      avatarImgUrl: `https://www.placecage.com/200/2${currentPictureId}`,
      text: Faker.lorem.lines(3),
      rating: ratingGenerator(),
      itemForSale: Faker.commerce.productName(),
    };
    // .save()
    // .then (()=> {
    //   res --;
    //   if (!res) {
    //     let t1 = new Date;
    //     console.log('seeded database in', t1 - t0, ' ms');
    //     mongoose.connection.close();
    //   }
    // });
    arrayOfReviews.push(review);
    currentPictureId += 1;
  }
  //construct and push
  const document = new Review({
    dbId: i,
    reviews: arrayOfReviews,
  });
  arrayOfDocs.push(document);
}
Review.insertMany(arrayOfDocs)
    .then(() => {
      let t1 = new Date;
      console.log('seeded database in', t1 - t0, ' ms');
      mongoose.connection.close();
    })
    .catch((err) => console.error('Error: ', err));

