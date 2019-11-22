$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  var pug = require("pug");

  // Compile the source code
  var compiledFunction = pug.compileFile("/views/layouts/template.pug");

  // Render a set of data
  console.log(
    compiledFunction({
      name: "Timothy"
    })
  );
});
