"use strict";
var db = require("../models"),
  passport = require("../config/passport");
module.exports = function(t) {
  t.post("/api/login", passport.authenticate("local"), function(t, o) {
    o.json(t.user);
  }),
    t.post("/api/signup", function(t, o) {
      db.User.create({ email: t.body.email, password: t.body.password })
        .then(function() {
          o.redirect(307, "/api/login");
        })
        .catch(function(t) {
          o.status(401).json(t);
        });
    }),
    t.get("/logout", function(t, o) {
      t.session.destroy(function(t) {
        o.redirect("/");
      });
    }),
    t.get("/api/user_data", function(t, o) {
      t.user ? o.json({ email: t.user.email, id: t.user.id }) : o.json({});
    }),
    t.get("/api/tasks/", function(t, o) {
      db.Task.findAll({}).then(function(t) {
        o.json(t);
      });
    }),
    t.delete("/api/tasks/:id", function(t, o) {
      db.Task.destroy({
        where: {
          id: t.params.id
        }
      }).then(function(t) {
        o.json(t);
      });
    });
    t.post("/api/tasks", function(t, o) {
      db.Task.create({
        name: t.body.name,
        status: t.body.status,
        dueDate: t.body.dueDate,
        description: t.body.description,
        developer: t.body.developer,
        complete: t.body.complete,
        completionDate: t.body.completionDate
      })
        .then(function(t) {
          o.json(t);
        })
        .catch(function(t) {
          o.json(t);
        });
    });
};
