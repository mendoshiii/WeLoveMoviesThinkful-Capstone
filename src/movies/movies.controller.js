const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found" });
}

// async function list(req, res, next) {
//   res.json({ data: await service.list() });
// }

async function list(req, res, next) {
  const { is_showing } = req.query;
  if (is_showing === "true") {
    res.json({ data: await service.showingList(is_showing) });
  }
  res.json({ data: await service.list() });
}

async function read(req, res, next) {
  const { movie } = res.locals;
  res.json({ data: movie });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
