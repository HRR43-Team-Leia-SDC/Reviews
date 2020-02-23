/* eslint-disable no-unused-vars */
const Faker = require('faker');
const Sequelize = require('sequelize');
const db = new Sequelize('reviews', 'alexk', '', {
  host: 'localhost',
  dialect: 'postgres',
});
// /* TODO this constructor takes the database name, username, then password.
//  * Modify the arguments if you need to */

// /* first define the data structure by giving property names and datatypes
//  * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = db.define('User', {
//   username: Sequelize.STRING
// });

// var Message = db.define('Message', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// /* Sequelize comes with built in support for promises
//  * making it easy to chain asynchronous operations together */
// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });


// mongoose.connect('mongodb://localhost/reviews', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });
// const reviewSchema = new mongoose.Schema(schema);
// const Review = mongoose.model('Review', reviewSchema);

// const t0 = new Date;
// // Formatted date maker
// const dateFormatter = () => {
//   const date = Faker.date.past().toString();
//   const dateFormatted = `${date.substring(4, 10)},${date.substring(10, 15)}`;
//   return dateFormatted;
// };

// // Weighted rating generator function  - squeezed
// const ratingGenerator = () => {
//   const randomNum = Math.random() * 10;
//   if (randomNum > 0 && randomNum < 5) {
//     return 5;
//   } if (randomNum > 5 && randomNum < 6.5) {
//     return 4;
//   } if (randomNum > 6.5 && randomNum < 8) {
//     return 3;
//   } if (randomNum > 8 && randomNum < 9) {
//     return 2;
//   }
//   return 1;
// };

// // for 2000 documents
// const arrayOfDocs = [];
// // let res = 2000;
// for (let i = 0; i < 100; i += 1) {
//   let currentPictureId = 10;
//   const quantityOfReviews = Math.random() * 10 + 10;
//   // random number of reviews for item
//   for (let j = 0; j < quantityOfReviews; j += 1) {
//     const document = new Review({
//       dbId: i,
//       urlId: j,
//       username: Faker.internet.userName(),
//       datePosted: dateFormatter(),
//       imageUrl: `https://www.placecage.com/100/1${currentPictureId}`,
//       avatarImgUrl: `https://www.placecage.com/200/2${currentPictureId}`,
//       text: Faker.lorem.lines(3),
//       rating: ratingGenerator(),
//       itemForSale: Faker.commerce.productName(),
//     });
//     // .save()
//     // .then (()=> {
//     //   res --;
//     //   if (!res) {
//     //     let t1 = new Date;
//     //     console.log('seeded database in', t1 - t0, ' ms');
//     //     mongoose.connection.close();
//     //   }
//     // });
//     currentPictureId += 1;
//     arrayOfDocs.push(document);
//   }
// }
// Review.insertMany(arrayOfDocs)
//   .then(() => {
//     const t1 = new Date;
//     console.log('seeded database in', t1 - t0, ' ms');
//     mongoose.connection.close();
//   })
//   .catch((err) => console.error('Error: ', err));
