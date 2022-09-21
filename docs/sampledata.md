// const reduceTheaterAndMovies = reduceProperties("theater_id", {
//   theater_id: ["theater", "theater_id"],
//   name: ["theater", "name"],
//   movie_id: ["movies", null, "movie_id"],
//   title: ["movies", null, "title"],
//   rating: ["movies", null, "rating"],
// });

// function list() {
//   return knex("theaters as t")
//     .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
//     .join("movies as m", "mt.movie_id", "m.movie_id")
//     .select("t.*, ");
// }

// module.exports = {
//   list,
// };
