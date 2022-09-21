const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");
const mapProperties = require("./utils/mapProperties");

const reduceMovies = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movie", null, "title"],
  runtime_in_minutes: ["movie", null, "runtime_in_minutes"],
  rating: ["movie", null, "rating"],
  description: ["movie", null, "description"],
  image_url: ["movie", null, "image_url"],
  created_at: ["movie", null, "created_at"],
  updated_at: ["movie", null, "updated_at"],
  is_showing: ["movie", null, "is_showing"],
});

function create() {}

function read() {
  return knex("theaters");
}

function update() {}

function destroy() {}

function list() {
  return knex("theaters").select("*").join("movies as m");
}

module.exports = {
  list,
  read,
};
