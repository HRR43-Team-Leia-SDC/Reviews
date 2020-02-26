DROP DATABASE IF EXISTS rev;

CREATE DATABASE rev;

\c rev;

CREATE TABLE rev (id serial NOT NULL, dbId int  ,  urlId int  ,  username varchar(30)  ,  datePosted Date  ,  imageUrl varchar(37)  ,  avatarImgUrl varchar(37)  ,  text varchar(120)  ,  rating real  ,  itemForSale varchar(30)  ,  PRIMARY KEY (ID));


