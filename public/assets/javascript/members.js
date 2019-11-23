var pug = require("pug");

$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  console.log(
    pug.renderFile("/views/members.pug", {
      name: "Timothy"
    })
  );
});
