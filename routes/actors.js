const express = require('express');
const Actor = require('../models/Actor');
const router = express.Router();

// /actors
router.get('/', (req, res) => {

  Actor.find().then((arrayOfActors) => {
    res.render('list-actors', { myActors: arrayOfActors })
  })

});

// show form to user
// GET /movies/create
router.get('/create', (req, res) => {
  res.render('new-actor')
})

// pick up data from submitted form
// POST /actors/create
router.post('/create', (req, res) => {
  console.log(req.body) // { title: 'Peter Pan', director: 'P. J. Hogan' }
  Actor.create({ name: req.body.actorName }).then(() => {
    res.redirect('/actors')
  })

})

module.exports = router;
