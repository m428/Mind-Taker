window.onload = function () {
  $('button.startButton').click(function() {
      makeTiles();
      makeReadyButton();
      runGame();
  })

  $('button.replayButton').click(function() {
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
var turn = 1;
var match = false;
var clicks = 0;
var turnNumber = 0;
////////////////////////////////////////////

// function makeTiles() Makes 5 blank tiles
//TODO Start game makes tiles everytime it's clicked - need to fix.
var makeTiles = function() {
  //TODO refactor repetative code
  $("<div class=gameTile id=gTile1></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile2></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile3></div>").appendTo( $("#gameContainer"));
  $("<div class=gameTile id=gTile4></div>").appendTo( $("#gameContainer"));
  // TODO remove last div and change 5 to 4 when generating index array - based on feedback that 5 tiles is too difficult
  $("<div class=gameTile id=gTile5></div>").appendTo( $("#gameContainer"));
  console.log("Made game tiles");

  $("<div class=playTile id=pTile1 value=0></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile2 value=1></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile3 value=2></div>").appendTo( $("#playContainer"));
  $("<div class=playTile id=pTile4 value=3></div>").appendTo( $("#playContainer"));
  // TODO remove last div and change 5 to 4 when generating index array - based on feedback that 5 tiles is too difficult
  $("<div class=playTile id=pTile5 value=4></div>").appendTo( $("#playContainer"));
  console.log("Made player tiles");
}

var makeReadyButton = function() {
  $("<button class=readyButton>READY</button>").appendTo( $("#console")); //Adds ready button to console
  $(".readyButton").addClass("btn btn-lg");
}

///////////////////////////// FUNCTION runGame ///////////////////////////////////////////////////////////////
var runGame = function() {
  var gameOver = false;

////////////////EVERYTHING BELOW IS NOW INSIDE runGame///////////////////////////////////////////////////////
var activateReadyButton = function() {
  $('button.readyButton').click(function() { //Adds listener to ready button and generates flash pattern on click
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
// TODO refactor repetative code
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

//Generates random flash sequence and flash tiles
var makeFlashPattern = function() {
    for (var i = 0; i < 7; i++) {
      var randomIndices = Math.floor(Math.random() * (5));
        makeArrayOfIndices.push(randomIndices);
          // console.log(makeArrayOfIndices); //Check to see if we've properly stored our new index
        }

    var flashThoseGameTiles = function() {
      console.log(makeArrayOfIndices);
      console.log("WERE ON THE RIGHT BRANCH!!!!!")
      var flashes = [];
      for (var i = -1; i < 7; i++) {
        var gameTiles = document.getElementsByClassName('gameTile');

        // TODO make into switch statement?
        var flash = function(i) {
           var indexNum = makeArrayOfIndices[i];
           var tile = gameTiles[indexNum]
           $(tile).css('background-color','blue');

           console.log("i = " + i)
           console.log("Indexnum = " + indexNum)
           console.log("Index value = " + makeArrayOfIndices[i])
         }
         var clear = function(i) {
           var indexNum = makeArrayOfIndices[i];
           var tile = gameTiles[indexNum]
           $(tile).css('background-color','gray');
         }



        flashes.push(flash(i))
        flashes.push(clear(i))


          } // end for loop
        // set timeout for multiple flash functions

        //
        // console.log("hit call flash")
        // console.log(i);
        // console.log(flashes);
            var x = 0;
            // flashes.push(flash1, clear1, flash2, clear2, flash3, clear3, flash4, clear4, flash5, clear5, flash7, clear7, flash6, clear6)

            function callFlash() {
              console.log(flashes.length)
              flashes[x]();
              x++;
              // console.log(flashes[x])
                if (x < flashes.length) setTimeout(callFlash, 1000);
              } window.setTimeout(callFlash, 1000);




// flashes = []
// flashes = [flash1, clear1, flash2, clear2, flash3, clear3, flash4, clear4, flash5, clear5, flash7, clear7, flash6, clear6]
// flashes[0] = flash1
// flashes [x++] = flashes[0] = flashes1

            //
            // function callFlash() {
            //   flash2();
            //   console.log(x)
            //     if (x < flashes.length) setTimeout(flash2, 1000);
            //   } window.setTimeout(flash2, 1000);










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
