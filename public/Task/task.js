 $("form").submit(function(e){
        e.preventDefault();
        var name = $("input[name='name']").val();
        var email = $("input[name='email']").val();
        var date = $("input[name='date']").val();
     
        $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"' data-date='"+date+"'><td>"+name+"</td><td>"+email+"</td><td>"+date+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
    
        $("input[name='name']").val('');
        $("input[name='email']").val('');
        $("input[name='date']").val('');
    });
   
    $("body").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });
    
    $("body").on("click", ".btn-edit", function(){
        var name = $(this).parents("tr").attr('data-name');
        var email = $(this).parents("tr").attr('data-email');
        var date = $(this).parents("tr").attr('data-date');
    
        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" value="'+email+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_date" value="'+date+'">');
    
        $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });
   
    $("body").on("click", ".btn-cancel", function(){
        var name = $(this).parents("tr").attr('data-name');
        var email = $(this).parents("tr").attr('data-email');
        var date = $(this).parents("tr").attr('data-date');
    
        $(this).parents("tr").find("td:eq(0)").text(name);
        $(this).parents("tr").find("td:eq(1)").text(email);
        $(this).parents("tr").find("td:eq(2)").text(date);
   
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });
   
    $("body").on("click", ".btn-update", function(){
        var name = $(this).parents("tr").find("input[name='edit_name']").val();
        var email = $(this).parents("tr").find("input[name='edit_email']").val();
        var date = $(this).parents("tr").find("input[name='edit_date']").val();
    
    
        $(this).parents("tr").find("td:eq(0)").text(name);
        $(this).parents("tr").find("td:eq(1)").text(email);
        $(this).parents("tr").find("td:eq(2)").text(date);
     
        $(this).parents("tr").attr('data-name', name);
        $(this).parents("tr").attr('data-email', email);
        $(this).parents("tr").attr('data-date', date);
    
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
    
