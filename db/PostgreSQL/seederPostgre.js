/* eslint-disable no-unused-vars */
const Faker = require('faker');
const { Client } = require('pg');

const client = new Client({
  database: 'reviews',
  user: 'postgres',
  password: 'password',
});

const select = 'select * from reviews';
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

// seed!
let counter = 0;
let t0 = new Date;
const insert = 'insert into rev (dbId, urlId, username, datePosted,imageUrl,avatarImgUrl,text,rating,itemForSale) select * from unnest ($1::int[], $2::int[], $3::text[], $4::date[], $5::text[], $6::text[], $7::text[], $8::real[], $9::text[])';
let cycle = 100000;
let values = Array;
let quantityOfReviews = Number;
let currentPictureId = Number;
let i = Number;
let j = Number;
let c = 0;

client.connect()
  .then(async() => {
    for (let x = 0; x < cycle; x += 1) {
      values = [[],[],[],[],[],[],[],[],[]];
      for (i = 0; i < 100; i += 1) {
        quantityOfReviews = Math.random() * 5 + 5;
        currentPictureId = 10;
        for (j = 0; j < quantityOfReviews; j += 1) {
          values[0].push(c + i);
          values[1].push(j);
          values[2].push(Faker.internet.userName());
          values[3].push(dateFormatter());
          values[4].push(`https://www.placecage.com/100/1${currentPictureId}`);
          values[5].push(`https://www.placecage.com/200/2${currentPictureId}`);
          values[6].push(Faker.lorem.lines(3));
          values[7].push(ratingGenerator());
          values[8].push(Faker.commerce.productName());
          currentPictureId++;
          counter++;
        }
      }
      await client.query(insert, values)
        .then(() => {values=[];
          //console.log('saved', counter);
          if (x === cycle - 1 ) {console.log('saved ALL in',new Date - t0, counter); client.end();  }
        })
        .catch(err => console.error('connection error', err.stack));
      c = c + cycle;
    }
  })
  .catch(err => console.error('connection error', err.stack));
