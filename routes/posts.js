const express = require('express');
const router = express.Router();
const TweetModel = require('../models/TweetModel.js')

// TODO: Add your routes to the route here.

//return all tweets
router.get('/', TweetsController.list);

//return tweet with specific id
router.get('/:id', TweetsController.show);

//create a new tweet
router.post('/', TweetsController.create);

//update/edit existing tweet with specific id
router.put('/:id', TweetsController.update);


//irradicate a tweet with a specific id
router.delete('/:id', TweetsController.delete);

module.exports = router;
