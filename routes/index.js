var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var url = "mongodb://lanabeji:uWCI4oYSRS3duSy5@cluster0-shard-00-00-fwq0s.mongodb.net:27017,cluster0-shard-00-01-fwq0s.mongodb.net:27017,cluster0-shard-00-02-fwq0s.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";



function getTweets(callback) {
  mongodb.connect(url, (err,db)=>{
    if(err) throw err;

    var tweets = db.collection("tweets");

    tweets.find({}).toArray((err2,tweets)=> {
      if(err2) throw err2;

      callback(tweets);
    });
  });
}

router.get('/tweets', function(req, res) {

  getTweets((tweets)=> {
    res.json(tweets);
  })
});

module.exports = router;
