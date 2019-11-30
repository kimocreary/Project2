"use strict";
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/kanban");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", function(req, res) {
    if (req.user) {
      res.redirect("/kanban");
    }
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/kanban");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/kanban", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/kanban.html"));
  });

  app.get("/overview", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/overview.html"));
  });

  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  app.get("/project", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/project.html"));
  });

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/tasks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/task.html"));
  });

  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  app.get("/react", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/react.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
