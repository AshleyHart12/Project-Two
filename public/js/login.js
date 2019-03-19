
$("#createAccount").on("click", function () {
  event.preventDefault();

  var todo = {
    username: $("#name").val().trim(),
    email: $("#email").val().trim()
    // location: $("#location").val().trim()
  };

  $.post("/api/add", todo).then(function(data) {
    console.log(data);
    alert("Adding an amazing Person!!");

  });
<<<<<<< HEAD
  $.post("/survey");

});
=======
});


>>>>>>> 9d6a3b58be49468bba6bbd82605675ff4bf390f6
