$("#backToResults").on("click", function() {
  event.preventDefault();
  console.log("I've been clicked.");

  var coffeeMatch = getMatch();

  function updatesurvey(CoffeeQuizes) {
   
  console.log("I will record this coffee to the database: " + coffeeMatch);
    $.ajax({
      method: "PUT",
      url: "/api/all",


      coffeeType: coffeeMatch
    }).then(function(data) {
      window.location = "/results";
    });

  }
  updatesurvey();
});

function getMatch() {
  var quizData = [
    $("#q1").val(),
    $("#q2").val(),
    $("#q3").val(),
    $("#q4").val(),
    $("#q5").val(),
    $("#q6").val(),
    $("#q7").val(),
    $("#q8").val()
  ];

  console.log("Beginning to test for matches.....");
  console.log("My scores are: " + quizData);
  var bestMatch = 0;
  var scoresArray = [];

  for (var i = 0; i < quizData.length; i++) {
    var scoresDiff = 0;
    console.log("Running outer loop...");
    for (var j = 0; j < coffeeList.length; j++) {
      console.log("Running inner loop...");
      scoresDiff += Math.abs(
        parseInt(quizData[i]) - parseInt(coffeeList[j].scores[i])
      );
      console.log(quizData[i]);
      console.log(coffeeList[j].scores[j]);
      console.log("The difference is: " + scoresDiff);
    }
    //push results into scoresArray
    scoresArray.push(scoresDiff);
    console.log("My scores are:" + scoresArray);
  }

  for (var i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] <= scoresArray[bestMatch]) {
      bestMatch = i;
      console.log(bestMatch);
    }
  }
  console.log(bestMatch);
  var bestMatchIndex = parseInt(bestMatch);
  console.log(bestMatchIndex);
  console.log(coffeeList[parseInt(bestMatchIndex)].name);
  return coffeeList[parseInt(bestMatchIndex)].name;
}

var coffeeList = [
  {
    name: "Black Coffee",
    scores: [3, 5, 1, 1, 2, 1, 4, 4]
  },
  {
    name: "Vanilla Latte",
    scores: [5, 3, 2, 4, 2, 2, 2, 3]
  },
  {
    name: "Cappuccino",
    scores: [4, 4, 1, 2, 2, 2, 3, 5]
  },
  {
    name: "Chai Tea",
    scores: [5, 1, 5, 3, 3, 1, 1, 3]
  },
  {
    name: "Espresso",
    scores: [1, 2, 5, 2, 5, 5, 1, 2]
  },
  {
    name: "Caramel Macchiato",
    scores: [2, 2, 1, 4, 2, 5, 3, 4]
  }
];
