"use strict";
var loadScreen = $('#load-screen'),
  highScoreScreen = $('#high-score-screen'),
  newGameScreen = $('#new-game-screen'),
  newHighScoreScreen = $('#new-high-score-screen'),
  gameOverScreen = $('#game-over-screen'),
  dimScreen = $('#dim-screen'),
  startScreen = $('#start-screen'),
  playScreen = $('#play-screen'),
  playButton = $('#play-button'),
  startButton = $('#start-button'),
  retryButton = $('#retry-button'),
  highScoresButton = $('.high-scores-button'),
  closeHighScoresButton = $('#close-high-scores'),
  newGameButton = $('#new-game-button'),
  copyButton = $('#copy-button'),
  pasteButton = $('#paste-button'),
  saveHighScoreButton = $('#save-high-score-button'),
  newHighScoreName = $('#new-high-score-name'),
  newHighScoreValue = $('#new-high-score-value'),
  time = $('#time'),
  pasteValue = $('#paste-value'),
  currentHighScore = $('#current-high-score'),
  score = $('#score'),
  finalScore = $('#final-score'),
  countdown = $('#countdown'),
  highScoreTable = $('#high-score-table'),
  // boop = $('#boop')[0],
  // beep = $('#beep')[0],
  timer = new Timer(),
  gameLength = 15,
  t1 = 500,
  t2 = 1000,
  t3 = 250,
  highScores = [];



function hideLoadScreen() {
  setTimeout(function(){
    loadScreen.addClass('fadeOut');
  }, t1);
  setTimeout(function(){
    loadScreen.addClass('hide');
  }, t2);
}
function showStartScreen() {
  setTimeout(function(){
    startScreen.removeClass('hide');
  }, t1);
}
function hideStartScreen() {
  startScreen.addClass('fadeOut');
  setTimeout(function(){
    startScreen.addClass('hide');
  }, t2);
}
function showPlayScreen() {
  playScreen.addClass('fadeIn');
  setTimeout(function(){
    playScreen.removeClass('hide');
  }, t3);
}
function hidePlayScreen() {
  playScreen.addClass('fadeOut');
  setTimeout(function(){
    playScreen.addClass('hide');
  }, t2);
}
function showHighScoreScreen() {
  highScoreScreen.addClass('slideInUp');
  highScoreScreen.removeClass('hide');
  setTimeout(function(){
    highScoreScreen.removeClass('slideInUp');
  }, t1);
}
function hideHighScoreScreen() {
  highScoreScreen.addClass('slideOutDown');
  setTimeout(function(){
    highScoreScreen.addClass('hide');
    highScoreScreen.removeClass('slideOutDown');
  }, t1);
}
function showDimScreen() {
  dimScreen.addClass('fadeInHalf');
  dimScreen.removeClass('hide');
  setTimeout(function(){
    dimScreen.removeClass('fadeInHalf');
  }, t1);
}
function hideDimScreen() {
  dimScreen.addClass('fadeOutHalf');
  setTimeout(function(){
    dimScreen.addClass('hide');
    dimScreen.removeClass('fadeOutHalf');
  }, t1);
}
function showNewGameScreen() {
  newGameScreen.addClass('slideInDown');
  newGameScreen.removeClass('hide');
  setTimeout(function(){
    newGameScreen.removeClass('slideInDown');
  }, t1);
}
function hideNewGameScreen() {
  newGameScreen.addClass('slideOutUp');
  setTimeout(function(){
    newGameScreen.addClass('hide');
    newGameScreen.removeClass('slideOutUp');
  }, t1);
}
function showGameOverScreen() {
  gameOverScreen.addClass('slideInDown');
  gameOverScreen.removeClass('hide');
  setTimeout(function(){
    gameOverScreen.removeClass('slideInDown');
  }, t1);
}
function hideGameOverScreen() {
  gameOverScreen.addClass('slideOutUp');
  setTimeout(function(){
    gameOverScreen.addClass('hide');
    gameOverScreen.removeClass('slideOutUp');
  }, t1);
}
function showNewHighScoreScreen() {
  newHighScoreValue.html(score.html());
  newHighScoreScreen.addClass('slideInDown');
  newHighScoreScreen.removeClass('hide');
  setTimeout(function(){
    newHighScoreScreen.removeClass('slideInDown');
  }, t1);
}
function hideNewHighScoreScreen() {
  newHighScoreScreen.addClass('slideOutUp');
  setTimeout(function(){
    newHighScoreScreen.addClass('hide');
    newHighScoreScreen.removeClass('slideOutUp');
  }, t1);
}
function enableButtons() {
  copyButton.removeAttr('disabled');
  pasteButton.removeAttr('disabled');
}
function disableButtons() {
  copyButton.attr("disabled", true);
  pasteButton.attr("disabled", true);
}
function startNewShotclock() {
  timer = new Timer();
  timer.start({countdown: true, startValues: {seconds: gameLength}});
  if (timer.getTimeValues().seconds > 9) {
    time.html('0:' + timer.getTimeValues().seconds);
  } else {
    time.html('0:0' + timer.getTimeValues().seconds);
  }
  timer.addEventListener('secondsUpdated', function (e) {
    if (timer.getTimeValues().seconds > 9) {
      time.html('0:' + timer.getTimeValues().seconds);
    } else {
      time.html('0:0' + timer.getTimeValues().seconds);
    }
  });
  timer.addEventListener('targetAchieved', function (e) {
    time.html('0:00');
    endGame();
  });
}


function startGame() {
  runCountdown();
  setTimeout(function(){
    startNewShotclock();
  }, 3100);
}
function changeCount(num) {
  countdown.html(num);
}
function runCountdown() {
  changeCount('3');
  countdown.removeClass('hide');
    setTimeout(function(){
      changeCount('2');
    }, 1100);
    setTimeout(function(){
      changeCount('1');
    }, 2100);
    setTimeout(function(){
      countdown.addClass('hide');
      score.removeClass('hide');
      enableButtons();
    }, 3100);
}
function resetTimer() {
  timer.stop();
  time.html('0:15');
}
function resetGame() {
  score.html('1').addClass('hide');
  pasteValue.html('1');
  disableButtons();
  resetTimer();
}
function endGame()  {
  disableButtons();
  showDimScreen();
  finalScore.html(score.html());
  checkHighScore();
}
function sortArray(a,b) {
  a = a[1];
  b = b[1];
  return a == b ? 0 : (a < b ? 1 : -1)
}
function saveHighScoreArray() {
  localStorage.setItem('high-scores', JSON.stringify(highScores));
}
function loadHighScoreArray() {
  if (localStorage.getItem('high-scores')) {
    highScores = JSON.parse(localStorage.getItem('high-scores'));
  }
}
function checkHighScore() {
  if (highScores.length < 10) {
    showNewHighScoreScreen();
  } else if (highScores[highScores.length - 1][1] < Number(score.html())) {
    showNewHighScoreScreen();
  } else {
    showGameOverScreen();
  }
}
function saveHighScore() {
  var name = newHighScoreName.val().replace(/[^\w]/g, '').toLowerCase().slice(0, 12);
  var score = Number(newHighScoreValue.html());
  if (highScores.length > 9) {
    highScores.pop();
  }
  highScores[highScores.length] = [name, score];
  highScores.sort(sortArray);
  saveHighScoreArray();
  loadHighestScore();
  fillHighScoreTable();
}

function loadHighestScore() {
  if (localStorage.getItem('high-scores')) {
    currentHighScore.html(highScores[0][1]);
  }
}

function fillHighScoreTable() {
  if (localStorage.getItem('high-scores')) {
    var i = 0;
    var limit = highScores.length;
    var raw_fragment = document.createDocumentFragment();

    for (i; i < limit; i++) {
      var tr = $('<tr/>');
      tr.html("<td>" + (i + 1) + "</td><td>" + highScores[i][0] + "</td><td>" + highScores[i][1] + "</td>");
      raw_fragment.appendChild(tr[0]);
    }
    highScoreTable.html(raw_fragment);
  }
}


(function () {
  $(document).ready(function() {
    setTimeout(function() {
      hideLoadScreen();
      showStartScreen();
    },800);
    loadHighScoreArray();
    loadHighestScore();
    fillHighScoreTable();

    if (localStorage.getItem('high-scores')) {
      console.log('High: ' + highScores[0][1] + ', Low: ' + highScores[highScores.length - 1][1] + ', Count: ' + highScores.length);
      console.log('Array: ' + highScores);
    }
  });

  // FastClick.attach(document.body);

  startButton.click(function() {
    hideStartScreen();
    showPlayScreen();
    showDimScreen();
    showNewGameScreen();
  });

  highScoresButton.click(function() {
    showDimScreen();
    showHighScoreScreen();
  });

  closeHighScoresButton.click(function() {
    hideHighScoreScreen();
    if (newGameScreen.hasClass('hide')) {
      hideDimScreen();
    }
  });

  playButton.click(function() {
    hideNewGameScreen();
    hideDimScreen();
    startGame();
  });

  newGameButton.click(function() {
    if (time.html() !== '0:15') {
      showDimScreen();
      showNewGameScreen();
      resetGame();
    }
  });

  copyButton.click(function() {
    pasteValue.html(score.html());
    disableButtons();
    setTimeout(function(){
      enableButtons();
    }, 800);
  });

  pasteButton.click(function() {
    var total = Number(score.html()) + Number(pasteValue.html());
    score.html(total);
  });

  saveHighScoreButton.click(function() {
    saveHighScore();
    hideNewHighScoreScreen();
    setTimeout(function(){
      showGameOverScreen();
    }, 400);
  });

  retryButton.click(function() {
    hideGameOverScreen();
    setTimeout(function(){
      showNewGameScreen();
      resetGame();
    }, 400);
  });

})();