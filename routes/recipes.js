const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth')
// all of these start with /movies, because of this code in our server
// app.use('/movies', moviesRouter);

// THis matches the URL
//recipes
router.get('/', recipesCtrl.index);

// GET /recipes/new
router.get('/new', isLoggedIn ,recipesCtrl.new);

//recipes/1303727424
router.get('/:id', recipesCtrl.show);
// POST /recipes
router.post('/', recipesCtrl.create);



module.exports = router;