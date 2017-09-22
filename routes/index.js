var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var mongodb = require("mongodb");
var url = "mongodb://lanabeji:uWCI4oYSRS3duSy5@cluster0-shard-00-00-fwq0s.mongodb.net:27017,cluster0-shard-00-01-fwq0s.mongodb.net:27017,cluster0-shard-00-02-fwq0s.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";


function guardarFollowers(followers) {
  mongodb.connect(url, (err,db)=>{
    if(err) throw err;

    var follows = db.collection("followers");

    follows.insertOne(followers, function (err2,res) {
        if(err2) throw err2;
        console.log("1 document inserted");
    });
  });
}

function getFollowers(callback) {
    mongodb.connect(url, (err,db)=>{
        if(err) throw err;

        var followers = db.collection("followers");

        followers.find({}).toArray((err2,followers)=> {
            if(err2) throw err2;

            callback(followers);
        });
    });
}

router.get("/getAllFollowers", function (req,res) {
    getFollowers((followers)=> {
        console.log("Index.js en getAllFollowers");
        res.json(followers);
    })
});

router.get("/getFollowers/:user", function (req,res,next) {
    var github = new GitHubApi({});

    github.users.getFollowingForUser({

        username: req.params.user
    }, function(err, data) {
        if(data!= undefined){
            guardarFollowers(data);
        }
        console.log("Estoy en index.js en getFollowersUser");
        console.log(data);
        res.json(data);
    });

});

module.exports = router;