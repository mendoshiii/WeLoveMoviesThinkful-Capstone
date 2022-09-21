const knex = require("../db/connection");
const { conjoinCritics } = require("../reviews/reviews.service");

function list() {
  return knex("movies").select(
    "movie_id as id",
    "title",
    "runtime_in_minutes",
    "rating",
    "description",
    "image_url"
  );
}

function readTheatre() {
  return knex("movies as m").join("theaters as t", "m.movie_id", "t.movie_id");
}

function readReveiws(movie_id) {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .then((people) => people.map(conjoinCritics));
}

function showingList(is_showing) {
  return knex("movies as m")
    .distinct()
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select(
      "m.movie_id as id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url",
      "mt.is_showing"
    )
    .where({ "mt.is_showing": true });
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

module.exports = {
  list,
  read,
  showingList,
};
