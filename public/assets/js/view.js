$(document).ready(function() {
  var a = $(".new-task"),
    e = $(".new-dueDate"),
    t = $(".new-description"),
    n = $(".new-developer"),
    i = $(".new-completionDate"),
    o = $(".task-container");
  $(document).on("submit", "#task-form", function(o) {
    o.preventDefault();
    var l = {
      name: a.val().trim(),
      description: t.val().trim(),
      status: "todo",
      developer: n.val().trim(),
      dueDate: e.val(),
      completionDate: i.val()
    };
    $.post("/api/tasks", l, d),
      a.val(""),
      t.val(""),
      n.val(""),
      e.val(""),
      i.val("");
  });
  var l = [];
  function d() {
    $.get("/api/tasks", function(a) {
      (l = a),
        (function() {
          o.empty();
          for (var a = [], e = 0; e < l.length; e++) a.push(s(l[e]));
          o.prepend(a);
        })();
    });
  }
  function s(a) {
    var e = $(
      `<div class="card card-progress border shadow-none draggable-item mb-0">\n <div class="card-body row align-items-center">\n        <div class="col-sm-6">\n          <a class="h6" href="#modal-task-view" data-toggle="modal">${a.name}</a>\n</div>\n      </div>\n    </div>`
    );
    return e.data("task", a), e;
  }
  d();
});
