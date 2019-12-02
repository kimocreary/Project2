"use strict";
module.exports = function(l, e) {
  return l.define("Task", {
    name: { type: e.STRING, allowNull: !1, validate: { len: [1] } },
    status: { type: e.STRING, allowNull: !0, validate: { len: [1] } },
    description: { type: e.TEXT, allowNull: !0 },
    dueDate: { type: e.DATE, allowNull: !0, validate: { isDate: !0 } },
    developer: { type: e.STRING, allowNull: !0 },
    complete: { type: e.BOOLEAN, allowNull: !0 },
    completionDate: { type: e.DATE, allowNull: !0, validate: { isDate: !0 } }
  });
};
