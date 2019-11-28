
console.log("This is working")
function editTaskPopup(id,task_description,task_priority,target_date,developer_name,developer_notes,developer_duedate,completion_date){
  // iterator = JSON.parse(iterator)
  $('#edit_task #edittaskid').val(id);
  if (task_description != '' && task_description != 'null'){
    $('#edit_task #task_description').val(task_description);
  }
  if (task_priority != '' && task_priority != 'null'){
    $('#edit_task #task_priority').val(task_priority);
  }
  if (target_date != '' && target_date != 'null'){
    $('#edit_task #target_date').val(target_date);
  }
  if (developer_name != '' && developer_name != 'null'){
    $('#edit_task #developer_name').val(developer_name);
  }
  if (developer_notes != '' && developer_notes != 'null'){
    $('#edit_task #developer_notes').val(developer_notes);
  }
  
  if (developer_duedate != '' && developer_duedate != 'null'){
    $('#edit_task #developer_duedate').val(developer_duedate);
  }
  if (completion_date != '' && completion_date != 'null'){
    $('#edit_task #completion_date').val(completion_date);
  }
  $('#edit_task').modal('show');
}
$(document).ready(function() {
  function getallTasks(){
    $.get("/api/tasks", function(data) {
      console.log ('res', data)
      let table_rows = '';
      for (const iterator of data) {
        table_rows += `<tr>
        <td scope="col">${(iterator.task_description != null && iterator.task_description != '' && iterator.task_description != 'null')?iterator.task_description:''}</td>
        <td scope="col">${(iterator.task_priority != null && iterator.task_priority  != '' && iterator.task_priority != 'null')?iterator.task_priority:''}</td>
        <td scope="col">${(iterator.target_date != null &&  iterator.target_date != '' && iterator.target_date != 'null')?iterator.target_date:''}</td>
        <td scope="col">${(iterator.developer_name != null &&  iterator.developer_name != '' && iterator.developer_name != 'null')?iterator.developer_name:''}</td>
        <td scope="col">${(iterator.developer_notes != null &&  iterator.developer_notes != '' && iterator.developer_notes != 'null')?iterator.developer_notes:''}</td>
        <td scope="col">${(iterator.developer_duedate != null &&  iterator.developer_duedate != '' && iterator.developer_duedate != 'null')?iterator.developer_duedate:''}</td>
        <td scope="col">${(iterator.completion_date != null &&  iterator.completion_date != '' && iterator.completion_date != 'null')?iterator.completion_date:''}</td>
        <td scope="col"><button onclick = "editTaskPopup('${iterator.id}','${iterator.task_description}','${iterator.task_priority}','${iterator.target_date}','${iterator.developer_name}','${iterator.developer_notes}','${iterator.developer_duedate}','${iterator.completion_date}')">Edit</button></td>
      </tr>`
      }
      $('#alltasks tbody').html(table_rows);
      // display data in the alltasks div with an edit button

      // when you click on the edit button, a modal pops up with the data in the first 3 inputs and 
      // and inputs for: Developer	Notes	Developer Due Date	Completion Date
      // when a developer fills out the rest of the form and hits submit, you update the database with the
        // new infomration (put request -- look at activity 12 in Lesson 15)
    })
  }
  getallTasks();
  $('#edit_task').on('shown.bs.modal', function () { 
       
  });
  $('#edit_task').on('hidden.bs.modal', function () {
      $('#edit_task_form')[0].reset();
      
  });
  $("form").submit(function(event){
        event.preventDefault();
          var data = $("#edit_task_form").serialize();
          $.ajax({
              
          type : 'PUT',
          url  : "/api/tasks",
          data : data,
          success :  function(response)
             {	
              $('#edit_task').modal('hide');
              getallTasks();
            },
            error: function (xhr, ajaxOptions, thrownError) {
               alert(thrownError);
            }
          });
          return false;
      })

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
  });
