var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index.ejs");
});

app.get("/campgrounds", function(req, res) {
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

  res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(3000, "localhost", function() {
  console.log("connected");
});
