$("#createAccount").on("click", function () {
  event.preventDefault();

  var todo = {
    username: $("#name").val().trim(),
    email: $("#email").val().trim()
    // location: $("#location").val().trim()
  };

  $.post("/api/add", todo).then(function (data) {
    console.log(data);
    alert("Adding an amazing Person!!");
  });
});