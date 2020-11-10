const express = require('express');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const router = express.Router();

// /movies
router.get('/', (req, res) => {

  Movie.find().then((arrayOfMovies) => {
    res.render('movies', { myMovies: arrayOfMovies })
  })

});


// show form to user
// GET /movies/create
router.get('/create', (req, res) => {
  Actor.find().then((actorsFromDB) => {
    res.render('new-movie', { allActors: actorsFromDB })
  })

})



// pick up data from submitted form
// POST /movies/create
router.post('/create', (req, res) => {
  console.log(req.body) // { title: 'Peter Pan', director: 'P. J. Hogan' }
  Movie.create({ title: req.body.title, director: req.body.director, actors: [req.body.chosenActor] }).then(() => {
    res.redirect('/movies')
  })

})


// /movies/75465678798765ashgdjagsd
router.get('/:id', (req, res) => {

  Movie.findById(req.params.id).populate('actors').then((movie) => {
    res.render('movie-details', movie)
  })

});


// GET /movies/761623ut1i2u36tg/edit
router.get('/:id/edit', (req, res) => {
  Movie.findById(req.params.id).then((movie) => {
    res.render('edit-movie', movie)
  })

})

// POST /movies/761623ut1i2u36tg/edit
router.post('/:id/edit', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, { title: req.body.title, director: req.body.director }).then(() => {
    res.redirect('/movies')
  })
})


// POST /movies/761623ut1i2u36tg/delete
router.post('/:id/delete', (req, res) => {
  Movie.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/movies')
  })
})

module.exports = router;
