var handleCreateAccount = () => {
    event.preventDefault();
  
    var username = $('#createUsername').val().trim();
    var name = $('#name').val().trim();
    var password = $('#createPassword').val();
    var age = $('#age').val().trim();
    var location = $('#location').val().trim();
  
    addUser({
      username: username,
      name: name,
      password: password,
      age: age,
      location: location
    });
  
  
  }
  
  let addUser = (userData) => {
    $.post('/create-account', userData);
  }
  
  $('#createAccount').on('click', handleCreateAccount);