window.onload = function () {
  $('button.startButton').click(function() {
      makeTiles();
      makeReadyButton();
      runGame();
  })

  $('button.replayButton').click(function() { // TODO  link eplay button
      console.log("Clear Board");
      player1score = 0;
      player2score = 0;
      turnNumber = 1;
  })
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
          console.log("Hit makeFlashPattern");
          // console.log(makeArrayOfIndices); //Checks to see if we've properly stored our new index
        }
// TODO Create a series of set timeout. Save each gametile as a variable and right a set timeout for each tile.
    //Changes text of gameTiles to Flash
    var flashThoseGameTiles = function() {
      console.log("Hit flashThoseGameTiles");
      console.log(makeArrayOfIndices);
      for (var i = 0; i < 7; i++) {
        console.log(i)
        var gameTiles = document.getElementsByClassName('gameTile');

        // TODO make into switch statement?
            if (i == 1) {
              var flash1 = function() {
                var indexNum = makeArrayOfIndices[0];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 1 hit BLUE");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[0])
              }

              var clear1 = function() {
                var indexNum = makeArrayOfIndices[0];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // console.log("clear BLUE");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[0])
              }
            } else if (i == 2) {
              var flash2 = function() {
                var indexNum = makeArrayOfIndices[1];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 2 hit GREEN");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[1])
              }
              var clear2 = function() {
                var indexNum = makeArrayOfIndices[1];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // console.log("clear GREEN");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[1])
              }

            } else if (i == 3) {
              var flash3 = function() {
                var indexNum = makeArrayOfIndices[2];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 3 hit YELLOW");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[2])
              }
              var clear3 = function() {
                var indexNum = makeArrayOfIndices[2];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // console.log("clear YELLOW");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[2])
              }
            } else if (i == 4) {
              var flash4 = function() {
                var indexNum = makeArrayOfIndices[3];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 4 hit PURPLE");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[3])
              }
              var clear4 = function() {
                var indexNum = makeArrayOfIndices[3];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // console.log("clear PURPLEr");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[3])
              }
            } else if (i == 5) {
              var flash5 = function() {
                var indexNum = makeArrayOfIndices[4];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 5 hit PINK");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[4])
              }
              var clear5 = function() {
                var indexNum = makeArrayOfIndices[4];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // console.log("clear PINK");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[4])
              }
            } else if (i == 6) {
              var flash6 = function() {
                var indexNum = makeArrayOfIndices[5];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 6 hit ORANGE");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[5])
              }
              var clear6 = function() {
                var indexNum = makeArrayOfIndices[5];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // // console.log("clear ORANGE");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[5])
              }
            } else {
              var flash7 = function() {
                var indexNum = makeArrayOfIndices[6];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','blue');
                // console.log("tile 7 hit GRAY");
                console.log("i = " + i)
                console.log("Indexnum = " + indexNum)
                console.log("Index value = " + makeArrayOfIndices[6])
              }
              var clear7 = function() {
                var indexNum = makeArrayOfIndices[6];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                // console.log("clear GRAY");
                // console.log("i = " + i)
                // console.log("Indexnum = " + indexNum)
                // console.log("Index value = " + makeArrayOfIndices[6])
              }
            };
          } // end for loop
        // set timeout for multiple flash functions
        // var flashFunctions = [flash1, flash2, flash3, flash4, flash5, flash6, flash7]
        var flashFunctions = [flash1, clear1, flash2, clear2, flash3, clear3, flash4, clear4, flash5, clear5, flash6, clear6, flash7, clear7]

            i = 0;
            function callFlash() {
              flashFunctions[i++]();
                if (i < flashFunctions.length) setTimeout(callFlash, 1000);
              } window.setTimeout(callFlash, 1000);


                // // TODO change revert tile color
                // var clear1 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile1).css('background-color','gray');
                // }
                //
                // var clear2 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile2).css('background-color','gray');
                // }
                //
                // var clear3 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile3).css('background-color','gray');
                // }
                //
                // var clear4 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile4).css('background-color','gray');
                // }
                //
                // var clear5 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile5).css('background-color','gray');
                // }
                //
                // var clear6 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile6).css('background-color','gray');
                // }
                //
                // var clear7 = function(tile, indexNum) {
                //   console.log("Index number is " + indexNum);
                //   $(tile7).css('background-color','gray');
                // }

            // var clearFunctions = [clear1, clear2, clear3, clear4, clear5, clear6, clear7]
            //   i = 0;
            //   function clearFlash() {
            //       clearFunctions[i++]();
            //       if (i < clearFunctions.length) setTimeout(clearFlash, 10001);
            //     } window.setTimeout(clearFlash, 1001);
            //




          } // end flashThoseGameTiles
  flashThoseGameTiles();
} // end makeFlashPattern

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

//Check if either player scores 5 and declares a winner
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
//Call function below to reset game for next round
  activateReadyButton();
} //End of runGame function
