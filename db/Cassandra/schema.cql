DROP KEYSPACE IF EXISTS reviews;

CREATE KEYSPACE reviews WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE reviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE review (
  dbId int,
  urlId int,
  username text,
  datePosted date,
  imageUrl text,
  avatarImgUrl text,
  text text,
  rating int,
  itemForSale text,
  PRIMARY KEY (dbId, urlId)
);
