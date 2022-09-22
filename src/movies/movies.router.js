const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./movies.controller");

router
  .route("/:movieId/theaters")
  .get(controller.movieIdTheater)
  .all(methodNotAllowed);

router
  .route("/:movieId/reviews")
  .get(controller.movieIdReviews)
  .all(methodNotAllowed);

router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
