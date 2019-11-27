// var user  = require("../models/user.js");
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // USER AUTHENTICATION

  // LOG IN
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  //SIGN UP
  app.post("/api/signup", function(req, res) {
    user.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // LOG OUT
  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });

  // USER DATA
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //TASKS
  app.get("/api/tasks", function(req, res) {
    db.Task.findAll({}).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  app.get("/api/tasks", function(req, res) {
    db.Task.findAll({}).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  app.post("/api/tasks", function(req, res) {
    db.Task.create({
      taskName: req.body.taskName
    })
      .then(function(dbTask) {
        res.json(dbTask);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.put("/api/tasks", function(req, res) {
    db.Task.update({
      where: {
        id: req.body.id
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
