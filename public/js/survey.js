$("#submit").on("click", function() {
    event.preventDefault();



function updatesurvey(CoffeeQuizes) {
    $.ajax({
      method: "PUT",
      url: "/api/all",
      coffeeType: "Will get result once javascript has been written"
    }).then(getsurvey);
  }

};
