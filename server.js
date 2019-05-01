// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the Express node package
var express = require("express");

// require all of our models by requiring the models folder
// Save this to a variable and name it "db".
var db = require("./models");


// ---------------------------------------------------
// Configuration of the Express app
// --------------------------------------------------- 

// create an Express app
var app = express();

// set the port of the application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3001;

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the static folder so the Express app can use
// the css stylesheet, the images, etc...
app.use(express.static("./client/public"));


// ---------------------------------------------------
// Routes
// --------------------------------------------------- 

// link the "parentscontroller.js" file
var controllers = require("./controllers/parentscontroller.js");
app.use(controllers);

// link the "api" folder
var apiRoutes = require("./routes/api")
app.use(apiRoutes);


// ---------------------------------------------------
// Start the server
// --------------------------------------------------- 

// sync the sequelize models
db.sequelize.sync().then(function() {
  // so that it can begin listening to client requests.
  app.listen(PORT, function() {
      console.log("App listening on: http://localhost:" + PORT);
  });
});
