//Dependencies 
var express = require("express"); 


// Sets up the Express App
var app = express(); 
var PORT = process.env.PORT || 3000; 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public")); 

// Routes
var routes = require("./controllers/burgers_controller.js"); 

app.use(routes); 


// Starting our Express app
app.listen(PORT, function() {
    console.log("App now listening at localhose: " + PORT);
});