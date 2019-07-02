// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(br) {
    orm.all("burgers", function(res) {
      br(res);
    });
  },
  // The variables cols and vals are arrays.
  // Creates a new entry into the database.
  create: function(cols, vals, br) {
    orm.create("burgers", cols, vals, function(res) {
      br(res);
    });
  },
  // Updates a specific entry in the database.
  update: function(objColVals, condition, br) {
    orm.update("burgers", objColVals, condition, function(res) {
      br(res);
    });
  },
  // Deletes a specific entry in the database.
  delete: function(condition, br) {
    orm.delete("burgers", condition, function(res) {
      br(res);
    });
  }
};

// Export the database functions for the controller burgers_controller.js
module.exports = burger;