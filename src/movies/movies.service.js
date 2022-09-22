const knex = require("../db/connection");
const { reduceCritics, addCritic } = require("../reviews/reviews.service");

// List all movies
function list() {
  return knex("movies").select("*");
}

// All movies (is_showing === true)
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
      "m.image_url"
    )
    .where({ "mt.is_showing": true });
}

// Select one movie matching the movie_id param
function read(movie_id) {
  return knex("movies as m").select("m.*").where({ movie_id }).first();
}

function readTheater(movie_id) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "m.movie_id", "mt.movie_id")
    .select("t.*", "mt.is_showing", "m.movie_id")
    .where("m.movie_id", movie_id);
}

// Read movies where reviews match movie_id parameter
function readReviews(movie_id) {
  return knex("movies as m")
    .join("reviews as r", "r.movie_id", "m.movie_id")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*")
    .where("m.movie_id", movie_id)
    .then((people) => people.map(addCritic));
}

module.exports = {
  list,
  showingList,
  read,
  readTheater,
  readReviews,
};
