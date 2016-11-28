// TODO: Add your controller logic here.

var taskModel = require('../Models/TweetModel.js');

module.exports = {
  list: function(req, res) {
    TweetModel.find(function(err, tweets) {
      return res.json(tweets);
    });
  },

  show: function(req, res) {
    var id = req.params.id;
    TweetModel.findOne({_id: id}, function (err, tweet) {
      return res.json(tweet);
    });
  },

  create: function(req, res) {
    var tweet = new TweetModel({
        text: req.body.text
    });

    Tweet.save(function(req, res) {
      return res.json(tweet);
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    TweetModel.findOne({_id:id}, function(err, tweet) {
      tweet.text = req.body.text;

      tweet.save(function(err, tweet) {
        return res.json(tweet);
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;
    TweetModel.findByIdAndRemove(id, function(err, tweet) {
      return res.json(tweet);
    });
  }
};
