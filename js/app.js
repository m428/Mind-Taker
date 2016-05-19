window.onload = function () {
  $('button.startButton').click(function() {
    var audio = $('#startSound')[0];
      audio.play();
      makeTiles();
      makeReadyButton();
      runGame();
      scoreBoard();
      $('.startButton').hide();
      $('.instructions').hide();
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

var makeTiles = function() { // Generate game and play tiles
  //TODO refactor repetative code
  $('<div class=gameTile id=gTile1>1</div>').appendTo( $('#gameContainer'));
  $('<div class=gameTile id=gTile2>2</div>').appendTo( $('#gameContainer'));
  $('<div class=gameTile id=gTile3>3</div>').appendTo( $('#gameContainer'));
  $('<div class=gameTile id=gTile4>4</div>').appendTo( $('#gameContainer'));
  $('<div class=gameTile id=gTile5>5</div>').appendTo( $('#gameContainer'));
  console.log('Made game tiles');
  $('<div class=playTile id=pTile1>1</div>').appendTo( $('#playContainer'));
  $('<div class=playTile id=pTile2>2</div>').appendTo( $('#playContainer'));
  $('<div class=playTile id=pTile3>3</div>').appendTo( $('#playContainer'));
  $('<div class=playTile id=pTile4>4</div>').appendTo( $('#playContainer'));
  $('<div class=playTile id=pTile5>5</div>').appendTo( $('#playContainer'));
  console.log('Made player tiles');
  $('#playContainer').hide();
} //end makeTiles()
var scoreBoard = function() { // Create scoreboard and display initial score of 0
  $('<div class=score>PLAYER 1</div>').appendTo( $('#player1'));
  $('<div class=score>PLAYER 2</div>').appendTo( $('#player2'));
  $('<div class=score id=p1></div>').appendTo( $('#player1'));
  $('<div class=score id=p2></div>').appendTo( $('#player2'));
  document.getElementById('p1').innerHTML = player1score;
  document.getElementById('p2').innerHTML = player2score;
} // end scoreBoard()
var makeReadyButton = function() {
  $('<button class=readyButton>READY</button>').appendTo( $('#console')); // Add ready button to console
  $('.readyButton').addClass('btn btn-lg');
} // end makeReadyButton()

function runGame() { // All functions below exist within runGame()
  var gameOver = false;
  function ready() {
    $('button.readyButton').click(function() { // Add listener to ready button and generate flash pattern on click
    $('button.readyButton').hide();
        makeArrayOfIndices = [];
        playerClickArray = [];
        clicks = 0;
        flashPattern();
        turnNumber = turnNumber + 1;
        if (turnNumber == 1) {
          console.log('This is turn number ' + turnNumber);
          recordPlayerInput();
        } else {
          console.log('This is turn number ' + turnNumber);
        }
    });
  } // end ready()

  function recordPlayerInput() { // Add click event listeners to playTiles and record each click in an array
    var revertTile = function() {
      $('#pTile1').css('background-color','#00CCFF');
      $('#pTile2').css('background-color','#FFFF00');
      $('#pTile3').css('background-color','#33FF00');
      $('#pTile4').css('background-color','#FF0000');
      $('#pTile5').css('background-color','#FF00FF');
    } // end revertTile()

  function highlightTile() { // Flash play tile on click
     $('.playTile').click(function() {
       var audio = $('#select')[0];
         audio.play();
        var id = $(this).attr('id')
        var captureClicks = function() { //Capture player input and store clicks as an array for comparison against generated game array
          switch(click) {
            case 1:
              if (clicks < 5) {
                playerClickArray.push(0);
                clicks++;
              } break;
            case 2:
              if (clicks < 5) {
                playerClickArray.push(1);
                clicks++;
              } break;
            case 3:
              if (clicks < 5) {
                playerClickArray.push(2);
                clicks++;
              } break;
            case 4:
              if (clicks < 5) {
                playerClickArray.push(3);
                clicks++;
              } break;
            case 5:
              if (clicks < 5) {
                playerClickArray.push(4);
                clicks++;
              } break;
            }
          if (clicks == 5) { // Check for match if player has clicked 5 tiles
            checkMatch();
          } else {
            return;
          }
        } //end captureClicks()
      switch(id) {
        case 'pTile1':
          $(this).css('background-color','black');
          setTimeout(revertTile, 200)
          var click = 1
          captureClicks(click);
            break;
        case 'pTile2':
          $(this).css('background-color','black');
          setTimeout(revertTile, 200)
          var click = 2
          captureClicks(click);
            break;
        case 'pTile3':
          $(this).css('background-color','black');
          setTimeout(revertTile, 200)
          var click = 3
          captureClicks(click);
            break;
        case 'pTile4':
          $(this).css('background-color','black');
          setTimeout(revertTile, 200)
          var click = 4
          captureClicks(click);
            break;
        case 'pTile5':
          $(this).css('background-color','black');
          setTimeout(revertTile, 200)
          var click = 5
          captureClicks(click);
            break;
          } // end switch()
        });
      } // end highlightTile()
    highlightTile()
  } // end recordPlayerInput()

  function flashPattern() {  // Generate random flash sequence and flash game tiles
      for (var i = 0; i < 5; i++) {
        var randomIndices = Math.floor(Math.random() * (5));
          makeArrayOfIndices.push(randomIndices);
        }
      function flashTiles() { // Play audio and flash tiles
        var gameTiles = document.getElementsByClassName('gameTile');
        var t = 0;
          function flash() {
            switch(t) {
              case 0:
                var indexNum = makeArrayOfIndices[0];
                var tile = gameTiles[indexNum];
                var audio = $('#tileSound1')[0];
                  audio.play();
                $(tile).css('background-color','black');
                setTimeout(clear, 200);
                t++;
                  break;
              case 1:
                var indexNum = makeArrayOfIndices[1];
                var tile = gameTiles[indexNum];
                var audio = $('#tileSound2')[0];
                  audio.play();
                $(tile).css('background-color','black');
                setTimeout(clear, 200);
                t++;
                  break;
              case 2:
                var indexNum = makeArrayOfIndices[2];
                var tile = gameTiles[indexNum];
                var audio = $('#tileSound3')[0];
                  audio.play();
                $(tile).css('background-color','black');
                setTimeout(clear, 200);
                t++;
                  break;
              case 3:
                var indexNum = makeArrayOfIndices[3];
                var tile = gameTiles[indexNum];
                var audio = $('#tileSound4')[0];
                  audio.play();
                $(tile).css('background-color','black');
                setTimeout(clear, 200);
                t++;
                  break;
              case 4:
                var indexNum = makeArrayOfIndices[4];
                var tile = gameTiles[indexNum];
                var audio = $('#tileSound5')[0];
                  audio.play();
                $(tile).css('background-color','black');
                setTimeout(clear, 200);
                t++;
                  break;
            }  // end switch()
          }// end flash()
          function clear() {
            $('#gTile1').css('background-color','#00CCFF');
            $('#gTile2').css('background-color','#FFFF00');
            $('#gTile3').css('background-color','#33FF00');
            $('#gTile4').css('background-color','#FF0000');
            $('#gTile5').css('background-color','#FF00FF');
          } // end clear()
          function playerTurn() {
            if (turn == 1) {
              $('<div class=motivator>PLAYER 1 GO!</div>').appendTo('#console');
              } else {
                $('<div class=motivator>PLAYER 2 GO!</div>').appendTo('#console');
              }
          } // end playerTurn()
          var switchTiles = function() {
            $('#gameContainer').hide();
            $('#playContainer').show();
            playerTurn();
          } //end switchTiles()
          var flashFunctions = [flash, flash, flash, flash, flash, flash, flash, switchTiles]
            i = 0;
            function callFlash() {  // Set timeout for multiple flashes
              flashFunctions[i++]();
                if (i < flashFunctions.length) setTimeout(callFlash, 500);
                } window.setTimeout(callFlash, 500);
        } // end flashTiles()
    flashTiles();
  } // end flashPattern()

  var checkMatch = function() { // Check if player inputs correct flash pattern
    var match = true;
    for (var i = 0; i < 5; i++) {
      if (playerClickArray[i] == undefined || playerClickArray[i] != makeArrayOfIndices[i]) {
         match = false;
         $('#gameContainer').show();
         $('#playContainer').hide();
         break;
       }
     }
     if (match == false) {
       var match = false;
       turn = turn * -1
       keepScore(match, turn);
       $('#gameContainer').show();
       $('#playContainer').hide();
       $('.motivator').remove();
       $('<div class=result id=noMatch>MIND TAKEN!</div>').appendTo('#console');
     } else if (playerClickArray.length == makeArrayOfIndices.length) {
       match = true;
       turn = turn * -1
       keepScore(match, turn);
       $('#gameContainer').show();
       $('#playContainer').hide();
       $('.motivator').remove();
       $('<div class=result id=match>MIND IT!</div>').appendTo('#console');
     }
       function removeResult() {
         $('button.readyButton').show();
         $('.result').remove();
       }
     setTimeout(removeResult, 3000);
  } // end checkMatch()

  var keepScore = function(match, turn) {  // Track each player's score
    if (match == true && turn == -1) {
      player1score = player1score + 1;
      document.getElementById('p1').innerHTML = player1score;
      checkWin();
    } else if (match == true && turn == 1) {
      player2score = player2score + 1;
      document.getElementById('p2').innerHTML = player2score;
      checkWin();
    } else if (match == false) {
      console.log('no match')
    }
  } // end keepScore()

  var checkWin = function() { // Check if either player has scored 5 times and declare a winner
    if (player1score == 3) {
      gameOver = true;
      $('.result').remove();
      $('.readyButton').remove();
      setTimeout(declareWinner, 4000);
      return gameOver;
    } else if (player2score == 3) {
        gameOver = true;
        $('.result').remove();
        $('.readyButton').remove();
        setTimeout(declareWinner, 4000);
      return gameOver;
    } else {
      return gameOver;
    }
  } // end checkWin()

  function declareWinner() { // Hide all tiles, clear game space, and display message for winner
    if (gameOver == true) {
      $('.playTile').remove();
      $('.gameTile').remove();
      $('.readyButton').remove();
      var audio = $('#win')[0];
        audio.play();
        if (turn == -1) {
          $('<div class=endGame id=winner>PLAYER 1 WINS!</div>').appendTo( $('#gameContainer'));
        } else {
          $('<div class=endGame id=winner>PLAYER 2 WINS!</div>').appendTo( $('#gameContainer'));
        }
      $('<button class=replayButton>PLAY AGAIN</button>').appendTo( $('#console'));
      $('.replayButton').addClass('btn btn-lg');
      $('button.replayButton').click(function() {
          player1score = 0;
          player2score = 0;
          turnNumber = 0;
          turn = 1;
          $('.replayButton').hide();
          $('.startButton').show();
          $('.endGame').remove();
          $('.score').remove();
      });
    }
  } // end declareWinner()
  ready();
} //End of runGame()
