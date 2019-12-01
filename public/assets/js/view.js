$(document).ready(function() {
  var $newTaskInput = $(".new-task");

  var $newDueDate = $(".new-dueDate");

  var $newDescription = $(".new-description");

  var $newDeveloper = $(".new-developer");

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

  function insertTask (event) {

    event.preventDefault();

    var task = {
      name: $newTaskInput.val().trim(),
      description: $newDescription.val().trim(),
      developer: $newDeveloper.val().trim(),
      dueDate: $newDueDate.val()
    };

    $.post("/api/tasks", task, getTasks);

    $newTaskInput.val("");
    $newDescription.val("");
    $newDeveloper.val("");
    $newDueDate.val("");
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
      `<div class="card card-progress border shadow-none draggable-item mb-0">
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="card-body row align-items-center">
        <div class="col-sm-6">
          <p>${task.id}</p>
          <a class="h6" href="#modal-task-view" data-toggle="modal">${task.name}</a>
          <p>${task.createdAt}</p>
          <p>${task.dueDate}</p>
          <p>${task.description}</p>
          <p>${task.developer}</p>
        </div>
      </div>
    </div>`
    );

    $newInputRow.data("task", task);

    return $newInputRow;
  }
});
