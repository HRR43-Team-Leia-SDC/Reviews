/* eslint-disable no-unused-vars */
const Faker = require('faker');
const mongoose = require('mongoose');
const schema = require('./schema.js');

mongoose.connect('mongodb://localhost/reviews');


// Formatted date maker
const dateFormatter = () => {
  const date = Faker.date.past().toString();
  const dateFormatted = `${date.substring(4, 10)},${date.substring(10, 15)}`;
  return dateFormatted;
};

// Weighted rating generator function
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

// for 100 entries
for (let i = 10; i < 100; i++) {
  const document = new schema.Reviews({
    dbId: i,
    username: Faker.internet.userName(),
    datePosted: dateFormatter(),
    imageUrl: `https://www.placecage.com/100/1${i}`,
    avatarImgUrl: `https://www.placecage.com/200/2${i}`,
    text: Faker.lorem.lines(3),
    rating: ratingGenerator(),
    itemForSale: Faker.commerce.productName(),
  })
    .save();
}
