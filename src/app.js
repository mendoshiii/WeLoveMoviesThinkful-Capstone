const cors = require("cors");
const express = require("express");
const app = express();

// Error Handler
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// Route Handlers
const moviesRouter = require("../src/movies/movies.router");
//const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

app.use(cors());
app.use(express.json());

// Routing
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
//app.use("/theaters", theatersRouter);

// Error Handler
app.use(notFound);

app.use(errorHandler);

module.exports = app;
