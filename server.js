// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//PREDEFINED FRIENDS
//==============================================================
var friends = [
  {
  "name": "Rick Sanchez",
  "image": "http://vignette3.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728",
  "scores": ["3","2","5","4","3","4"]
  },
  {
  "name": "Morty Smith",
  "image": "https://static.comicvine.com/uploads/scale_small/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg",
  "scores": ["3","1","1","1","1","4"]
  },
  {
  "name": "Summer Smith",
  "image": "https://vignette1.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/scale-to-width-down/250?cb=20160919183158",
  "scores": ["5","5","5","5","5","4"]
  },
  {
  "name": "Mr. Meeseeks",
  "image": "http://4.bp.blogspot.com/-NZ0AG7EvydY/VpkbubImaiI/AAAAAAAA_XM/hxAOv6McOYM/s1600/Cryptozoic%2BEntertainment%2BRick%2Band%2BMorty%2BMr%2BMeeseeks%2BBox%2BO%2BFun%2BDice%2BGame.png",
  "scores": ["1","1","1","1","1","1"]
  },
  {
  "name": "Scary Terry",
  "image": "http://cdn2.denofgeek.us/sites/denofgeekus/files/styles/insert_main_wide_image/public/rick-and-morty-raznoe-scary-terry-2208325.png?itok=tFRd6sUv",
  "scores": ["3","2","5","4","3","4"]
  },
];

//ROUTES
//===========================================================
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app,path);
var htmlRoutes = require("./app/routing/apiRoutes.js")(app,path,friends);

//BEGINS LISTENING WITH SERVER
//===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
