window.onload = function () {
  $('button.startButton').click(function() {
      makeTiles();
      makeReadyButton();
      runGame();
      scoreBoard();
      $(".startButton").hide()
  })
};

//////////////////////////////Global Variables//////////////////////////////////
var playerClickArray = [];
var makeArrayOfIndices = [];
var player1score = 0;
var player2score = 0;
var turn = 1;
var match = false;
var clicks = 0;
var turnNumber = 0;
////////////////////////////////////////////////////////////////////////////////

// function makeTiles() Makes 5 blank tiles
//TODO Start game makes tiles everytime it's clicked - need to fix.
var makeTiles = function() {
  //TODO refactor repetative code
  $("<div class=gameTile id=gTile1></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile2></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile3></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile4></div>").appendTo( $("#gameContainer"));
  // TODO remove last div and change 5 to 4 when generating index array
  $("<div class=gameTile id=gTile5></div>").appendTo( $("#gameContainer"));
  console.log("Made game tiles");
  $("<div class=playTile id=pTile1 value=0></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile2 value=1></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile3 value=2></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile4 value=3></div>").appendTo( $("#playContainer"));
  // TODO remove last div and change 5 to 4 when generating index array
  $("<div class=playTile id=pTile5 value=4></div>").appendTo( $("#playContainer"));
  console.log("Made player tiles");
}

//Create scoreboard and display initial score of 0
var scoreBoard = function() {
  $("<div class=score id=p1></div>").appendTo( $("#player1"));
  $("<div class=score id=p2></div>").appendTo( $("#player2"));
  document.getElementById("p1").innerHTML = player1score;
  document.getElementById("p2").innerHTML = player2score;
}


var makeReadyButton = function() {
  $("<button class=readyButton>READY</button>").appendTo( $("#console")); //Adds a ready button to console
  $(".readyButton").addClass("btn btn-lg");
}

///////////////////////////// FUNCTION runGame /////////////////////////////////
var runGame = function() {
  var gameOver = false;
//////////////// EVERYTHING BELOW IS NOW INSIDE runGame ////////////////////////
var activateReadyButton = function() {
  $('button.readyButton').click(function() { //Adds a click to Ready? button and generates flash pattern.
      makeArrayOfIndices = [];
      playerClickArray = [];
      clicks = 0;
      makeFlashPattern();
      turnNumber = turnNumber + 1;
      if (turnNumber == 1) {
        console.log("This is turn number " + turnNumber);
        recordPlayerInput();
      } else {
        console.log("This is turn number " + turnNumber);
      }
  });
}

//Adds click event listeners to playTiles and records each click in an array.
//TODO refactor repetative code
var recordPlayerInput = function () {
      $('#pTile1').click(function() { //Adds click events to playTile 1
        if (clicks < 7) {
          console.log("clicked 1!");
          playerClickArray.push(0);
          clicks++;
          console.log(playerClickArray);
          if (clicks == 7) {
            checkForMatch();
          }
        } else {
          return;
          }
      });
      $('#pTile2').click(function() { //Adds click events to playTile 2
        if (clicks < 7) {
          console.log("clicked 2!");
          playerClickArray.push(1);
          clicks++;
          console.log(playerClickArray);
          if (clicks == 7) {
            checkForMatch();
          }
        } else {
            return;
        }
      });
      $('#pTile3').click(function() { //Adds click events to playTile 3
        if (clicks < 7) {
          console.log("clicked 3!");
          playerClickArray.push(2);
          clicks++;
          console.log(playerClickArray);
          if (clicks == 7) {
            checkForMatch();
          }
        } else {
            return;
        }
      });
      $('#pTile4').click(function() { //Adds click events to playTile 4
        if (clicks < 7) {
          console.log("clicked 4!");
          playerClickArray.push(3);
          clicks++;
          console.log(playerClickArray);
          if (clicks == 7) {
            checkForMatch();
          }
        } else {
            return;
        }
      });
      $('#pTile5').click(function() { //Adds click events to playTile 5
        if (clicks < 7) {
          console.log("clicked 5!");
          playerClickArray.push(4);
          clicks++;
          console.log(playerClickArray);
          if (clicks == 7) {
              checkForMatch();
            }
          } else {
              return;
          }
      });
}

//Generates random flash sequence and flashes game tiles
var makeFlashPattern = function() {
    for (var i = 0; i < 7; i++) {
      var randomIndices = Math.floor(Math.random() * (5));
        makeArrayOfIndices.push(randomIndices);
          console.log(makeArrayOfIndices); //Checks to see if we've properly stored our new index numbers
        }
    var flashThoseGameTiles = function() {
      //TODO refactor repetative code
      for (var i = 0; i < 7; i++) {
        console.log(i)
        var gameTiles = document.getElementsByClassName('gameTile');
            if (i == 1) {
              var flash1 = function() {
                var indexNum = makeArrayOfIndices[0];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear1 = function() {
                var indexNum = makeArrayOfIndices[0];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            } else if (i == 2) {
              var flash2 = function() {
                var indexNum = makeArrayOfIndices[1];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear2 = function() {
                var indexNum = makeArrayOfIndices[1];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            } else if (i == 3) {
              var flash3 = function() {
                var indexNum = makeArrayOfIndices[2];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear3 = function() {
                var indexNum = makeArrayOfIndices[2];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            } else if (i == 4) {
              var flash4 = function() {
                var indexNum = makeArrayOfIndices[3];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear4 = function() {
                var indexNum = makeArrayOfIndices[3];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            } else if (i == 5) {
              var flash5 = function() {
                var indexNum = makeArrayOfIndices[4];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear5 = function() {
                var indexNum = makeArrayOfIndices[4];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            } else if (i == 6) {
              var flash6 = function() {
                var indexNum = makeArrayOfIndices[5];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear6 = function() {
                var indexNum = makeArrayOfIndices[5];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            } else {
              var flash7 = function() {
                var indexNum = makeArrayOfIndices[6];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
              }
              var clear7 = function() {
                var indexNum = makeArrayOfIndices[6];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
              }
            };
          } //End for loop

        //Set timeout for multiple flash functions
        var flashFunctions = [flash1, clear1, flash2, clear2, flash3, clear3, flash4, clear4, flash5, clear5, flash6, clear6, flash7, clear7]
            i = 0;
            function callFlash() {
              flashFunctions[i++]();
                if (i < flashFunctions.length) setTimeout(callFlash, 200);
              } window.setTimeout(callFlash, 200);
          } //End flashThoseGameTiles
  flashThoseGameTiles();
} //End makeFlashPattern

//Check if player inputs the correct flash pattern
var checkForMatch = function() {
  var match = true;
  for (var i = 0; i < 7; i++) {
    if (playerClickArray[i] == undefined || playerClickArray[i] != makeArrayOfIndices[i]) {
       match = false;
       break;
     }
   }
   if (match == false) {
     alert("Mind taken! Try again!");
     console.log(match);
     var match = false;
     turn = turn * -1
     keepScore(match, turn);
   } else if (playerClickArray.length == makeArrayOfIndices.length) {
     alert("We have a match!");
     match = true;
     console.log(match);
     turn = turn * -1 //take out of for loop
     keepScore(match, turn);
   }
}

//Track each players score
var keepScore = function(match, turn) {
  if (match == true && turn == -1) { //Not sure why this is not using match set to true.
    player1score = player1score + 1;
    document.getElementById("p1").innerHTML = player1score;
    //TODO remove alerts and add information currently displayed in alerts (for testing purposes) to frontend
    alert(" player 1 score is now " +  player1score);
    alert("Player 1 score is currently " + player1score + " and Player 2 score is currently " + player2score);
    alert("Press READY for next turn");
    checkWin();
  } else if (match == true && turn == 1) { //Not sure why this is not using match set to true.
    player2score = player2score + 1;
    document.getElementById("p2").innerHTML = player2score;
    //TODO remove alerts and display with frontend
    alert(" player 2 score is now " +  player2score);
    alert("Player 1 score is currently " + player1score + " and Player 2 score is currently " + player2score);
    alert("Press READY for next turn");
    checkWin();
  } else if (match == false) {
    //TODO remove alerts and display with frontend
    alert("No points added");
    alert("Player 1 score is currently " + player1score + " and Player 2 score is currently " + player2score);
    alert("Press READY for next turn");
  }
}

//Check if either player has scored 5 times and declares a winner
var checkWin = function() {
  if (player1score == 2) {
    gameOver = true;
    showWinner();
    return gameOver;
  } else if (player2score == 2) {
    gameOver = true;
      showWinner();
    return gameOver;
  } else {
    return gameOver;
  }
} // end checkWin

var showWinner = function() {
  if (gameOver == true) {
    $(".playTile").remove();
    $(".gameTile").remove();
    $(".readyButton").remove();
    $("<div class=endGame id=winner></div>").appendTo( $("#endGame"));
    //TODO add conditional to state which player wins.
    $("<div class=endGame id=scoreBoard></div>").appendTo( $("#endGame"));
    $("<button class=replayButton>PLAY AGAIN</button>").appendTo( $("#console")); //Adds a ready button to console
    $('button.replayButton').click(function() {
        console.log("Clear Board");
        player1score = 0;
        player2score = 0;
        turnNumber = 0;
        $(".replayButton").hide()
        $(".startButton").show()

    })
  }
  else {
    console.log("hit announce Winner")
  }
} // end announceWinner

//TODO Call function below to reset game for next round
  activateReadyButton();
} //End of runGame function
