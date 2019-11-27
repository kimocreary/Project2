console.log("This is working")

$(document).ready(function() {
    $(document).on("click", "#submitbutton", function(event) {
      event.preventDefault();

      var taskName = $("#taskName").val();
      var priorityLevel = $("#priorityLevel").val().trim();
      var expectedDueDate = $("#expectedDate").val().trim()
      console.log("values are entered", taskName, priorityLevel, expectedDueDate)

      const taskData = {
        taskName,
        priorityLevel,
        expectedDueDate,
      }
      console.log("task data", taskData)

      $.post("/api/tasks", taskData, function() {
        $.get('/api/orders', function(data) {
          orders = data;
        });
      })
      // $("#tasks").empty();
      // $(".submit-button").removeClass("active");
      // $(this).addClass("active");

      // var type = $(this).attr("data-type");

      // $.ajax({
      //   url: queryURL,
      //   method: "POST"
      // })
      //   .then(function(response) {
      //     var results = response.data;

      //     for (var i = 0; i < results.length; i++) {
      //     }
      //   });
    });


  //   $("#add-task").on("click", function(event) {
  //     event.preventDefault();
  //     var newTask = $("input").eq(0).val();

  //     if (newTask.length > 2) {
  //       task.push(newTask);
  //     }

  //     populateButtons(tasks, "task-button", "#task-buttons");

  //   });

  //   populateButtons(tasks, "task-button", "#task-buttons");
  });