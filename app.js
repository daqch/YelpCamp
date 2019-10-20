var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "Salmong Greeks",
    image:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Test2",
    image:
      "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  {
    name: "Test3",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/campgrounds", function (req, res) {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {
    name: name,
    image: image
  };

  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});

app.listen(3000, "localhost", function () {
  console.log("connected");
});
