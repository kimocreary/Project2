"use strict";
var db = require("../models"),
  passport = require("../config/passport");
module.exports = function(o) {
  o.post("/api/login", passport.authenticate("local"), function(o, e) {
    e.json(o.user);
  }),
    o.post("/api/signup", function(o, e) {
      db.User.create({ email: o.body.email, password: o.body.password })
        .then(function() {
          e.redirect(307, "/api/login");
        })
        .catch(function(o) {
          e.status(401).json(o);
        });
    }),
    o.get("/logout", function(o, e) {
      o.session.destroy(function(o) {
        e.redirect("/");
      });
    }),
    o.get("/api/user_data", function(o, e) {
      o.user ? e.json({ email: o.user.email, id: o.user.id }) : e.json({});
    }),
    o.get("/api/tasks/", function(o, e) {
      db.Task.findAll({}).then(function(o) {
        e.json(o);
      });
    }),
    o.post("/api/tasks", function(o, e) {
      db.Task.create({
        name: o.body.name,
        status: o.body.status,
        dueDate: o.body.dueDate,
        developer: o.body.developer,
        description: o.body.description,
        completionDate: o.body.completionDate
      })
        .then(function(o) {
          e.json(o);
        })
        .catch(function(o) {
          e.json(o);
        });
    });
};
