


// $("#backToResults").on("click", function() {
//   var renderUserName = $("#name");
//   var renderCoffeeType = ("USER RESULT")

//   $("#username").append(renderUserName);
//   $("#resultDescription").append(renderCoffeeType);


// });

var userName = $("")



function addUserResult(data){
  $.get("/api/all/:id", function(data) {
    var renderUserName = $();
    $("#username").append(renderUserName);
  })
  
}





// 14 - 09 - PUBLIC/JS/AUTHOR.JS (LINE 63)
// ^ ROUTES/AUTHOR.API.ROUTES  (LINE 15)


