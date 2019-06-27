// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(bg) {
    orm.all("burgers", function(res) {
      bg(res);
    });
  },
  // The variables cols and vals are arrays.
  // Creates a new entry into the database.
  create: function(cols, vals, bg) {
    orm.create("burgers", cols, vals, function(res) {
      bg(res);
    });
  },
  // Updates a specific entry in the database.
  update: function(objColVals, condition, bg) {
    orm.update("burgers", objColVals, condition, function(res) {
      bg(res);
    });
  },
  // Deletes a specific entry in the database.
  delete: function(condition, bg) {
    orm.delete("burgers", condition, function(res) {
      bg(res);
    });
  }
};

// Export the database functions for the controller burgers_controller.js
module.exports = burger;