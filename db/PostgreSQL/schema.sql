DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE reviews (
  id serial NOT NULL,
  dbId int  ,
  urlId int  ,
  username varchar(100)  ,
  datePosted Date  ,
  imageUrl varchar(200)  ,
  avatarImgUrl varchar(200)  ,
  text varchar(1000)  ,
  rating real  ,
  itemForSale varchar(200)  ,
  PRIMARY KEY (ID)
);