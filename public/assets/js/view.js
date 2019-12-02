$(document).ready(function() {
  var a = $(".new-task"),
    n = $(".new-dueDate"),
    e = $(".new-description"),
    d = $(".new-developer"),
    t = $(".new-completionDate"),
    i = $(".task-container");
  $(document).on("submit", "#task-form", function(i) {
    i.preventDefault();
    var o = {
      name: a.val().trim(),
      description: e.val().trim(),
      status: "todo",
      developer: d.val().trim(),
      dueDate: n.val(),
      completionDate: t.val()
    };
    // var firstConverted = moment(first, 'HH:mm').subtract(1, 'years');
    $.post("/api/tasks", o, l),
      a.val(""),
      e.val(""),
      d.val(""),
      n.val(""),
      t.val("");
  });
  var o = [];
  function l() {
    $.get("/api/tasks", function(a) {
      (o = a),
        (function() {
          i.empty();
          for (var a = [], n = 0; n < o.length; n++) a.push(s(o[n]));
          i.prepend(a);
        })();
    });
  }
  function s(a) {
    var n = $(
      `<div class="card card-progress border shadow-none draggable-item mb-0">\n <div class="card-body row align-items-center">\n        <div class="col-sm-6">\n          <a class="h6" href="#modal-task-view-${a.name}" data-toggle="modal">${a.name}</a>\n</div>\n      </div>\n    </div>\n      <div class="modal fade fixed-right" id="modal-task-view-${a.name}" tabindex="-1" role="dialog" aria-hidden="true">\n      <div class="modal-dialog modal-vertical modal-lg" role="document">\n        <div class="modal-content">\n          <div class="modal-header row">\n          ${a.name}</div>\n          <div class="modal-body">\n          ${a.description}<br>          ${a.status}<br>    ${moment(a.dueDate, "DD-MM-YYYY").startOf('day').subtract(1, 'years')}<br>          ${a.developer}<br>         ${a.completionDate}<br></div>\n          <div class="modal-footer align-items-center">\n<button
      type="submit"
      class="btn btn-sm btn-primary rounded-pill mr-auto update"
    >
      Update
    </button>
    <button
      type="submit"
      class="btn btn-sm btn-warning rounded-pill mr-auto delete"
    >
      Delete
    </button>
    <button
      type="submit"
      class="btn btn-sm btn-secondary rounded-pill mr-auto"
      data-dismiss="modal"
    >
      Close
    </button>          </div>\n        </div>\n      </div>\n      </div>\n\n\n      `
    );
    return n.data("task", a), n;
  }
  l();
});
