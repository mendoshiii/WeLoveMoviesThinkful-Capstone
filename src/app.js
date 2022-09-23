// Core processes
const cors = require("cors");
const express = require("express");
const app = express();

// Error Handlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// Route Handlers
const moviesRouter = require("../src/movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// Cors enabled, express library required
app.use(express.json());
app.use(cors());

// Routing
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

// Error Handlers
app.use(notFound);

app.use(errorHandler);

module.exports = app;
