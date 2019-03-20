$("#backToResults").on("click", function() {
  event.preventDefault();
  console.log("I've been clicked.");
  getMatch();

  function updatesurvey(CoffeeQuizes) {
    $.ajax({
      method: "PUT",
      url: "/api/all",
      coffeeType: "Will get result once javascript has been written"
    }).then(getsurvey);
  }
});

function getMatch() {
  var quizData = {
    scores: [
      $("#question1").val(),
      $("#question2").val(),
      $("#question3").val(),
      $("#question4").val(),
      $("#question5").val(),
      $("#question6").val(),
      $("#question7").val(),
      $("#question8").val()
    ]
  };
  console.log("Beginning to test for matches.....");
  console.log("My scores are: " + quizData.scores);
  
  var scoresArray = [];
  var coffeeCount = 0;
  var bestMatch = 0;

  console.log(userData);
  for (var i = 0; i < scoresArray.length; i++) {
    var scoresDiff = 0;

    for (var j = 0; j < coffeeList.length; j++) {
      scoresDiff += Math.abs(
        parseInt(coffeesArray[i].scores[j]) - parseInt(coffeeList[j])
      );
    }

    //push results into scoresArray
    scoresArray.push(scoresDiff);
  }

  for (var i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] <= scoresArray[bestMatch]) {
      bestMatch = i;
    }
  }

  //return bestMatch data
  var coffeeMatch = coffeesArray[bestMatch];
}


var coffeeList = [
  {
    name: "Black Coffee",
    scores: ["3", "5", "1", "1", "2", "1", "4", "4"]
  },
  {
    name: "Vanilla Latte",
    scores: ["5", "3", "2", "4", "2", "2", "2", "3"]
  },
  {
    name: "Cappuccino",
    scores: ["4", "4", "1", "2", "2", "2", "3", "5"]
  },
  {
    name: "Chai Tea",
    scores: ["5", "1", "5", "3", "3", "1", "1", "3"]
  },
  {
    name: "Espresso",
    scores: ["1", "2", "5", "2", "5", "5", "1", "2"]
  },
  {
    name: "Black Coffee",
    scores: ["2", "2", "1", "4", "2", "5", "3", "4"]
  }
];
