"use strict";
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
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

  app.get("/api/tasks/", function(req, res) {
    db.Task.findAll({}).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  app.post("/api/tasks", function(req, res) {
    db.Task.create({
      name: req.body.name,
      priority: req.body.priority,
      dueDate: req.body.dueDate,
      developer: req.body.developer,
      description: req.body.description,
      completionDate: req.body.completionDate
    })
      .then(function(dbTask) {
        res.json(dbTask);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
