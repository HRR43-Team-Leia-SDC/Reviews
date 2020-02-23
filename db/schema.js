const schema = {
  dbId: Number,
  reviews: [{
    urlId: Number,
    username: String,
    datePosted: Date,
    imageUrl: String,
    avatarImgUrl: String,
    text: String,
    rating: Number,
    itemForSale: String,
  }],
};

module.exports.schema = schema;
