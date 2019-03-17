var handleCreateAccount = function() {
  event.preventDefault();

  // var userName = $("#user-name").val().trim();
  // var email = $("#email").val().trim();
  // var password = $('#createPassword').val();
  // var age = $('#age').val().trim();
  // var location = $('#location').val().trim();

  addUser({
    userName: userName,
    email: email
    // password: password,
    // age: age,
    // location: location
  });
};

var addUser = function(userData){
  $.post("/api/add", userData);
};

$("#createAccount").on("click", handleCreateAccount);