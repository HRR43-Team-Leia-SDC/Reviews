const Faker = require('faker');
const fs = require('fs');
const stream = fs.createWriteStream('./data.csv', { highWaterMark: 5000000 }); // highWaterMark=

// Formatted date maker
const dateFormatter = () => {
  const date = Faker.date.past().toString();
  const month = new Date(Date.parse(date)).getMonth() + 1;
  const day = new Date(Date.parse(date)).getDate();
  const year = new Date(Date.parse(date)).getFullYear();
  const dateFormatted = `${year}-${month}-${day}`;
  // console.log(dateFormatted);
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
let t0 = new Date;
let quantityOfReviews = Number;
let currentPictureId = Number;
let i = Number;
let j = Number;
let row = '';
let counter = 0;

function writeToCSV(writer, encoding, callback) {
  let i = 10000000;
  write();
  function write() {
    var ok = true;
    do {
      row = '';
      i -= 1;
      if (i === 0) {
        quantityOfReviews = Math.random() * 5 + 5;
        currentPictureId = 10;
        for (j = 0; j < quantityOfReviews; j += 1) {
          row += i + ';' + j +';' + Faker.internet.userName() + ';' + dateFormatter() + ';' + `https://www.placecage.com/100/1${currentPictureId}` + ';' + `https://www.placecage.com/200/2${currentPictureId}`+';' + Faker.lorem.lines(1)+';' + ratingGenerator()+';' + Faker.commerce.productName() + '\n';

        }
        writer.write(row, encoding, callback);
      } else {
        quantityOfReviews = Math.random() * 5 + 5;
        currentPictureId = 10;
        for (j = 0; j < quantityOfReviews; j += 1) {
          row += i + ';' + j +';' + Faker.internet.userName() + ';' + dateFormatter() + ';' + `https://www.placecage.com/100/1${currentPictureId}` + ';' + `https://www.placecage.com/200/2${currentPictureId}`+';' + Faker.lorem.lines(1)+';' + ratingGenerator()+';' + Faker.commerce.productName() + '\n';
        }
        ok = writer.write(row, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      counter ++;
      writer.once('drain', write);
    }
  }
}

writeToCSV(stream, 'utf-8', () => { stream.end(); console.log(new Date - t0, counter)});

//PSQL: COPY reviews (dbId, urlId, username, datePosted,imageUrl,avatarImgUrl,text,rating,itemForSale) FROM '/Users/ak/Downloads/Reviews-postgre_seed/data.csv' DELIMITER ';' ;

//CQLSH:

//SOURCE '/Users/ak/Downloads/Reviews-postgre_seed/db/Cassandra/schema.cql';

//copy reviews (dbId, urlId, username, datePosted,imageUrl,avatarImgUrl,text,rating,itemForSale) FROM '/Users/ak/Downloads/Reviews-postgre_seed/data.csv' WITH DELIMITER=';';