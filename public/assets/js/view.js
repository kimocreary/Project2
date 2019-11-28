$(document).ready(function() {
  var $newTaskInput = $(".new-task");

  var $taskContainer = $(".task-container");

  $(document).on("submit", "#task-form", insertTask);

  var tasks = [];

  getTasks();

  function initializeRows() {
    $taskContainer.empty();

    var taskRows = [];

    for (var i = 0; i < tasks.length; i++) {
      taskRows.push(createNewRow(tasks[i]));
    }
    $taskContainer.prepend(taskRows);
  }

  function insertTask(event) {
    event.preventDefault();
    var task = {
      name: $newTaskInput.val().trim()
    };

    $.post("/api/tasks", task, getTasks);
    $newTaskInput.val("");
  }

  function getTasks() {
    $.get("/api/tasks", function(data) {
      tasks = data;
      initializeRows();
    });
  }

  // function updateTask(task) {
  // 	$.ajax({
  // 		method: 'PUT',
  // 		url: '/api/tasks',
  // 		data: task,
  // 	}).then(getTasks);
  // }

  function createNewRow(task) {
    var $newInputRow = $(
      [
        "<li class='list-group-item task-item'>",
        "<span> task: ",
        task.name,
        "</span><br>",
        "</li>"
      ].join("")
    );

    $newInputRow.data("task", task);

    return $newInputRow;
  }
});
