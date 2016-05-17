window.onload = function () {
  $('button.startButton').click(function() {
    var audio = $("#startSound")[0];
      audio.play();
      makeTiles();
      makeReadyButton();
      runGame();
      scoreBoard();
      $(".startButton").hide();
      $(".instructions").hide();

  })
};

// $(".startButton").click(function() {
//     audio.play();
// });​

//////////////////////////////Global Variables//////////////////////////////////
var playerClickArray = [];
var makeArrayOfIndices = [];
var player1score = 0;
var player2score = 0;
var turn = 1;
var match = false;
var clicks = 0;
var turnNumber = 0;
  var f = 0
// var click = 1;
////////////////////////////////////////////////////////////////////////////////

// function makeTiles() Makes 5 blank tiles
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
  $("#playContainer").hide();
}

//Create scoreboard and display initial score of 0
var scoreBoard = function() {
  $("<div class=score>PLAYER 1</div>").appendTo( $("#player1"));
  $("<div class=score>PLAYER 2</div>").appendTo( $("#player2"));
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
function runGame() {
  var gameOver = false;
//////////////// EVERYTHING BELOW IS NOW INSIDE runGame ////////////////////////
  function ready() {
    $('button.readyButton').click(function() { //Adds a click to Ready? button and generates flash pattern.
  //  TODO play audio on first click only
    $('button.readyButton').hide();
      var audio = $("#readySound")[0];
        audio.play();

        makeArrayOfIndices = [];
        playerClickArray = [];
        clicks = 0;
        flashPattern();
        turnNumber = turnNumber + 1;
        if (turnNumber == 1) {
          console.log("This is turn number " + turnNumber);
          recordPlayerInput();
        } else {
          console.log("This is turn number " + turnNumber);
        }
    });
  } // end ready

//Adds click event listeners to playTiles and records each click in an array.
  function recordPlayerInput() {
    var revertTile = function() {
      $('#pTile1').css('background-color','#00CCFF');
      $('#pTile2').css('background-color','#FFFF00');
      $('#pTile3').css('background-color','#33FF00');
      $('#pTile4').css('background-color','#FF0000');
      $('#pTile5').css('background-color','#FF00FF');
    } // end revertTile

  function highlightTile() {
     $('.playTile').click(function() {
        var id = $(this).attr('id')
        var captureClicks = function() { //Capture player input and store clicks as an array for comparison against generated game array
          switch(click) {
            case 1:
              if (clicks < 7) {
                playerClickArray.push(0);
                clicks++;
                console.log(playerClickArray);
              } break;
            case 2:
              if (clicks < 7) {
                playerClickArray.push(1);
                clicks++;
                console.log(playerClickArray);
              } break;
            case 3:
              if (clicks < 7) {
                playerClickArray.push(2);
                clicks++;
                console.log(playerClickArray);
              } break;
            case 4:
              if (clicks < 7) {
                playerClickArray.push(3);
                clicks++;
                console.log(playerClickArray);
              } break;
            case 5:
              if (clicks < 7) {
                playerClickArray.push(4);
                clicks++;
                console.log(playerClickArray);
              } break;
          } //end switch
          //Check for match if player has clicked 7 tiles
          if (clicks == 7) {
            checkForMatch();
          } else {
            return;
          }
        } //end captureClicks

      switch(id) {
        case 'pTile1':
          $(this).css('background-color','gray');
          setTimeout(revertTile, 200)
          var click = 1 //testing
          captureClicks(click);
            break;
        case 'pTile2':
          $(this).css('background-color','gray');
          setTimeout(revertTile, 200)
          var click = 2 //testing
          captureClicks(click);
            break;
        case 'pTile3':
          $(this).css('background-color','gray');
          setTimeout(revertTile, 200)
          var click = 3 //testing
          captureClicks(click);
            break;
        case 'pTile4':
          $(this).css('background-color','gray');
          setTimeout(revertTile, 200)
          var click = 4 //testing
          captureClicks(click);
            break;
        case 'pTile5':
          $(this).css('background-color','gray');
          setTimeout(revertTile, 200)
          var click = 5 //testing
          captureClicks(click);
            break;
          }
        });
      } // end highlightTile
    highlightTile()
  } // end recordPlayerInput


  //Generates random flash sequence and flashes game tiles
  function flashPattern() {
      for (var i = 0; i < 7; i++) {
        var randomIndices = Math.floor(Math.random() * (5));
          makeArrayOfIndices.push(randomIndices);
          console.log(makeArrayOfIndices); //Checks to see if we've properly stored our new index numbers
        }
      function flashTiles() {
        var gameTiles = document.getElementsByClassName('gameTile');
        var t = 0;
          function flash() {
            console.log("t = " + t)
            switch(t) {
              case 0:
                console.log("hit case 0")
                var indexNum = makeArrayOfIndices[0];
                var tile = gameTiles[indexNum];
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
              case 1:
                console.log("hit case 1")
                var indexNum = makeArrayOfIndices[1];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
              case 2:
                console.log("hit case 2")
                var indexNum = makeArrayOfIndices[2];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
              case 3:
                console.log("hit case 3")
                var indexNum = makeArrayOfIndices[3];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
              case 4:
                console.log("hit case 4")
                var indexNum = makeArrayOfIndices[4];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
              case 5:
                console.log("hit case 5")
                var indexNum = makeArrayOfIndices[5];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
              case 6:
                console.log("hit case 6")
                var indexNum = makeArrayOfIndices[6];
                var tile = gameTiles[indexNum]
                $(tile).css('background-color','gray');
                setTimeout(clear, 200);
                t++;
                  break;
            }  // end switch
          }// end flash
          function clear() {
            $('#gTile1').css('background-color','#00CCFF');
            $('#gTile2').css('background-color','#FFFF00');
            $('#gTile3').css('background-color','#33FF00');
            $('#gTile4').css('background-color','#FF0000');
            $('#gTile5').css('background-color','#FF00FF');
          }

          function playerTurn() {
            if (turn == 1) {
              $("<div class=motivator>PLAYER 1 GO!</div>").appendTo("#console");
              } else {
                $("<div class=motivator>PLAYER 2 GO!</div>").appendTo("#console");
              }
          } // end playerTurn
          var switchTiles = function() {
            $("#gameContainer").hide();
            $("#playContainer").show();
            playerTurn();
          }
          //Set timeout for multiple flashes
          var flashFunctions = [flash, flash, flash, flash, flash, flash, flash, switchTiles]
            i = 0;
            function callFlash() {
              flashFunctions[i++]();
                if (i < flashFunctions.length) setTimeout(callFlash, 500);
                } window.setTimeout(callFlash, 500);
        } //End flashTiles
    flashTiles();
  } //End flashPattern

//Check if player inputs the correct flash pattern
  var checkForMatch = function() {
    var match = true;
    for (var i = 0; i < 7; i++) {
      if (playerClickArray[i] == undefined || playerClickArray[i] != makeArrayOfIndices[i]) {
         match = false;
         $("#gameContainer").show();
         $("#playContainer").hide();
         break;
       }
     }
     if (match == false) {
       var match = false;
       turn = turn * -1
       keepScore(match, turn);
       $("#gameContainer").show();
       $("#playContainer").hide();
       $(".motivator").remove();
       $("<div class=result>MIND TAKEN!</div>").appendTo("#console");
     } else if (playerClickArray.length == makeArrayOfIndices.length) {
       match = true;
       turn = turn * -1
       keepScore(match, turn);
       $("#gameContainer").show();
       $("#playContainer").hide();
       $(".motivator").remove();
       $("<div class=result>WE HAVE A MATCH!</div>").appendTo("#console");
     }
       function removeResult() {
         $('button.readyButton').show();
         $(".result").remove();
       }
  setTimeout(removeResult, 1000);
  } // end checkForMatch

  var keepScore = function(match, turn) {  // Track each player's score
    if (match == true && turn == -1) {
      player1score = player1score + 1;
      document.getElementById("p1").innerHTML = player1score;
      checkWin();
    } else if (match == true && turn == 1) {
      player2score = player2score + 1;
      document.getElementById("p2").innerHTML = player2score;
      checkWin();
    } else if (match == false) {
      console.log("no winners yet")
    }
  } // end keepScore

  var checkWin = function() { //Check if either player has scored 5 times and declares a winner
    if (player1score == 2) {
      gameOver = true;
      declareWinner();
      return gameOver;
    } else if (player2score == 2) {
      gameOver = true;
        declareWinner();
      return gameOver;
    } else {
      return gameOver;
    }
  } // end checkWin

  function declareWinner() {
    if (gameOver == true) {
      $('.score').remove();
      $(".playTile").remove();
      $(".gameTile").remove();
      $(".readyButton").remove();
      $("<div class=endGame id=winner></div>").appendTo( $("#endGame"));
      //TODO add conditional to state which player wins.
      $("<div class=endGame id=scoreBoard></div>").appendTo( $("#endGame"));
      $("<button class=replayButton>PLAY AGAIN</button>").appendTo( $("#console")); //Adds a ready button to console
      $(".replayButton").addClass("btn btn-lg");
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
  } // end declareWinner
  ready();
} //End of runGame function
