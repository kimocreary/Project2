
console.log("This is working")

$(document).ready(function() {
  function getallTasks(){
      $.get("/api/tasks", function(data) {
        console.log ('res', data)
        // display data in the alltasks div with an edit button
        // when you click on the edit button, a modal pops up with the data in the first 3 inputs and 
        // and inputs for: Developer	Notes	Developer Due Date	Completion Date
        // when a developer fills out the rest of the form and hits submit, you update the database with the
          // new infomration (put request -- look at activity 12 in Lesson 15)
      })
    }

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
        console.log('this worked!')
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
    getallTasks();
    });
