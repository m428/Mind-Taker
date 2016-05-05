window.onload = function () {
  $('button.startButton').click(function() {
      makeTiles();
      makeReadyButton();
      runGame();
      ///We should call runGame() here//
  })


  $('button.replayButton').click(function() { //Replay button not linked to anything yet.
      console.log("Clear Board");
      player1score = 0;
      player2score = 0;
      turnNumber = 1;
  })
////Calls functions up here///
};

///////////Global Variables/////////////////
var playerClickArray = [];
var makeArrayOfIndices = [];
var player1score = 0;
var player2score = 0;
var turn = 1; //Need to loop to change value
var match = false;
var clicks = 0;
var turnNumber = 0;
////////////////////////////////////////////

// function makeTiles() Makes 5 blank tiles
//Start game makes tiles everytime it's clicked - need to fix.
//Current HTML file has pre-made divs with styles, just to visualize. Those divs are commented out in the HTML file bc makeTiles works correctly.
var makeTiles = function() {
  // var tiles = $("div").create; //Not necessary now, but may be helpful for making code more dry later.
  $("<div class=gameTile id=gTile1></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile2></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile3></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile4></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile5></div>").appendTo( $("#gameContainer"));
  console.log("Made game tiles");

  $("<div class=playTile id=pTile1 value=0></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile2 value=1></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile3 value=2></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile4 value=3></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile5 value=4></div>").appendTo( $("#playContainer"));
  console.log("Made player tiles");
}

var makeReadyButton = function() {
  $("<button class=readyButton>READY</button>").appendTo( $("#console")); //Adds a ready button to console
  $(".readyButton").addClass("btn btn-lg");
}

///////////////////////////// FUNCTION runGame ///////////////////////////////////////////////////////////////
var runGame = function() {
  var gameOver = false;
  //here we should clear the makeArrayOfIndices and playerClickArray variables
  // while (gameOver = false) {

////////////////EVERYTHING BELOW IS NOW  INSIDE runGame///////////////////////////////////////////////////////
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

//Adds click event listeners to  playTiles and records each click in an array.
var recordPlayerInput = function () {
      $('#pTile1').click(function() { //Adds click events to playTile 1
        if (clicks < 7) {
          console.log("clicked 1!");
          playerClickArray.push(0);
          clicks++;
          console.log(clicks);
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
          console.log(clicks);
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
          console.log(clicks);
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
          console.log(clicks);
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
          console.log(clicks);
          console.log(playerClickArray);
          if (clicks == 7) {
              checkForMatch();
            }
          } else {
              return;
          }
      });
}

//Generates random flash sequence and flashes tiles - not working all the way
var makeFlashPattern = function() {
    for (var i = 0; i < 7; i++) {
      var randomIndices = Math.floor(Math.random() * (5));
        makeArrayOfIndices.push(randomIndices);
          console.log("MAKING IT SHINY");
          console.log(makeArrayOfIndices);//Checks to see if we've properly stored our new index
        }







// TODO Create a series of set timeout. Save each gametile as a variable and right a set timeout for each tile.

    //Changes text of gameTiles to Flash
    var flashThoseGameTiles = function() {
      for (var i = 0; i < 7; i++) {
          (function() {
            var indexNum = makeArrayOfIndices[i];
            console.log("Index number is " + indexNum);
            var gameTiles = document.getElementsByClassName('gameTile');
            var tile = gameTiles[indexNum]


            if (i == 0) {
              var tile1 = tile;
            } else if (i == 1) {
                var tile2 = tile;
            } else if (i == 2) {
                var tile3 = tile;
            } else if (i == 3) {
                var tile4 = tile;
            } else if (i == 4) {
              var tile5 = tile;
            } else if (i == 5) {
              var tile6 = tile;
            } else {
              var tile7 = tile;
            };

            // TODO  set timeout to change back
             window.setTimeout(function() {
                flash(tile2);
              }, 3000);
              })();

            // TODO make into switch statement?







            } // end for loop




        var flash = function(tile, indexNum) {
          console.log("Index number is " + indexNum);
          $(tile).css('background-color','red');
        }






          } // end flashThoseGameTiles

          var makeRed = function(){
            var sqrNum = squares[Math.floor(Math.random() * (6 - 0)) + 0];
            $('#'+sqrNum).css('background-color','red');
            window.setTimeout(function(){
              makeWhite(sqrNum);
            }, 800);
          }


    //Changes gameTiles to clear - not working all the way
    var clearThoseGameTiles = function() {
      for (var i = 0; i < 7; i++) {
          (function() {
            var indexNum = makeArrayOfIndices[i];
            var gameTiles = document.getElementsByClassName('gameTile');
             setTimeout(function() {
                  gameTiles[indexNum].innerHTML ="clear";
                }, 3000);
              })();
            }
          }
  flashThoseGameTiles();
  // clearThoseGameTiles();
}














//Checks if player inputs the correct flash pattern
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

//Tracks each players score
var keepScore = function(match, turn) {
  if (match == true && turn == -1) { //Not sure why this is not using match set to true.
    player1score = player1score + 1;
    alert(" player 1 score is now " +  player1score);
    alert("Player 1 score is currently " + player1score + " and Player 2 score is currently " + player2score);
    alert("Press READY for next turn");
    checkWin();
  } else if (match == true && turn == 1) { //Not sure why this is not using match set to true.
    player2score = player2score + 1;
    alert(" player 2 score is now " +  player2score);
    alert("Player 1 score is currently " + player1score + " and Player 2 score is currently " + player2score);
    alert("Press READY for next turn");
    checkWin();
  } else if (match == false) {
    alert("No points added");
    alert("Player 1 score is currently " + player1score + " and Player 2 score is currently " + player2score);
    alert("Press READY for next turn");
  }
}

//Checks if either player scores 5 and declares a winner
var checkWin = function() {
  if (player1score == 5) {
    console.log("Player 1 wins!");
    gameOver = true;
    return gameOver;
  } else if (player2score == 5) {
    console.log("Player 2 wins!");
    gameOver = true;
    return gameOver;
  } else {
    return gameOver; //Need to add in a loop function here.
  }
}
//call function below to reset game for next round
  activateReadyButton();
} //End of runGame function
