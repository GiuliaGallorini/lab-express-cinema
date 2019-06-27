const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

/* GET home page */ // Route "/" (http://localhost:3000)
router.get("/", (req, res, next) => {
  res.render("index"); // Render /views/index.hbs
});

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(moviesFromDb => {
    res.render("movies", { 
      movies: moviesFromDb 
    });
  });
});

// Example: http://localhost:3000/movies/52cdef7c4bab8bd675297d94
router.get("/movies/:id", (req, res, next) => {
  console.log("DEBUG req.params", req.params)
  let movieId = req.params.id;
  Movie.findById(movieId).then(movie => {
    res.render("movie-detail", { movie: movie });
  });
});

module.exports = router;

