var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongo = require("mongoose");
app.set("view engine", "ejs");

mongo.connect("mongodb://localhost/yelp_camp");

var campgroundSchema = new mongo.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongo.model("Campground", campgroundSchema);

/* Campground.create(
  {
    name: "Mount Rainer",
    image:
      "https://www.nps.gov/mora/planyourvisit/images/OhanaCampground2016_CMeleedy_01_web.jpeg?maxwidth=1200&maxheight=1200&autorotate=false",
    description: "A beautiful canadian campground!"
  },
  function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      console.log(campground);
    }
  }
); */

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
  res.render("index.ejs");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", { campgrounds: campgrounds });
    }
  });
  //res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {
    name: name,
    image: image
  };
  Campground.create(newCampground, function(err, c) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
  res.render("show.ejs");
});

app.listen(3000, "localhost", function() {
  console.log("connected");
});
