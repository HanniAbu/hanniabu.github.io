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
  newGameButton = $('.new-game-button'),
  score = $('#score'),
  finalScore = $('#final-score'),
  countdown = $('#countdown'),
  copyButton = $('#copy-button'),
  pasteButton = $('#paste-button'),
  pasteValue = $('#paste-value'),
  currentHighScore = $('#current-high-score'),
  time = $('#time'),
  boop = $('#boop')[0],
  beep = $('#beep')[0],
  countdownLength = 15, //Make 15 seconds
  soundControl = $('#sound-control'),
  sound = localStorage.getItem('sound'),
  t1 = 500,
  t2 = 1000,
  t3 = 250;



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
  highScoreScreen.addClass('slideInUp');;
  highScoreScreen.removeClass('hide');
  setTimeout(function(){
    highScoreScreen.removeClass('slideInUp')
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
  dimScreen.addClass('fadeInHalf');;
  dimScreen.removeClass('hide');
  setTimeout(function(){
    dimScreen.removeClass('fadeInHalf')
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
  newGameScreen.addClass('slideInDown');;
  newGameScreen.removeClass('hide');
  setTimeout(function(){
    newGameScreen.removeClass('slideInDown')
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
  gameOverScreen.addClass('slideInDown');;
  gameOverScreen.removeClass('hide');
  setTimeout(function(){
    gameOverScreen.removeClass('slideInDown')
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
  newHighScoreScreen.addClass('slideInDown');;
  newHighScoreScreen.removeClass('hide');
  setTimeout(function(){
    newHighScoreScreen.removeClass('slideInDown')
  }, t1);
}
function hideNewHighScoreScreen() {
  newHighScoreScreen.addClass('slideOutUp');
  setTimeout(function(){
    newHighScoreScreen.addClass('hide');
    newHighScoreScreen.removeClass('slideOutUp');
  }, t1);
}
function playBoop() {

  boop.play();
}
function playBeep() {

  beep.play();
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
  timer.start({countdown: true, startValues: {seconds: countdownLength}});
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
    // if (Number(score.html()) > 'highScoreList[highScoreList.length()]') {

    // } else {
      endGame();
    // }
  });
}
function stopShotclock() {

  timer.stop();
};
function pauseShotclock() {

  timer.pause();
};


function startGame() {
  runCountdown();
  setTimeout(function(){
    startNewShotclock();
  }, 3100);
}
function runCountdown() {
  countdown.html('3').css({'color':'#555'});
  countdown.removeClass('hide');
  sound = localStorage.getItem('sound');
  if (sound == 'off') {
    setTimeout(function(){
      countdown.html('2').css({'color':'#555'});
    }, 1100);
    setTimeout(function(){
      countdown.html('1').css({'color':'#555'});
    }, 2100);
    setTimeout(function(){
      countdown.addClass('hide');
      score.removeClass('hide');
      enableButtons();
    }, 3100);
  } else {
    setTimeout(function(){
      playBoop();
    }, 100);
    setTimeout(function(){
      playBoop();
      countdown.html('2').css({'color':'#555'});
    }, 1100);
    setTimeout(function(){
      playBoop();
      countdown.html('1').css({'color':'#555'});
    }, 2100);
    setTimeout(function(){
      countdown.addClass('hide');
      playBeep();
      score.removeClass('hide');
      enableButtons();
    }, 3100);
  }
}
function resetTimer() {
  stopShotclock();
  time.html('0:05');
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
  showGameOverScreen();
  checkHighScore();
}

function toggleSound() {
  sound = localStorage.getItem('sound');
  if (sound === 'off') {
    soundControl.attr('src','assets/img/sound-on.svg');
    localStorage.setItem('sound','on');
  } else if (sound === 'on') {
    soundControl.attr('src','assets/img/sound-off.svg');
    localStorage.setItem('sound','off');
  }
}

function checkHighScore() {
  if (Number(score.html()) > Number(currentHighScore.html())) {
    currentHighScore.html(score.html());
    localStorage.setItem('current-high-score',score.html());
  }
}
function loadHighScore() {
    currentHighScore.html(localStorage.getItem('current-high-score'));
}




(function () {
  $(document).ready(function() {
    hideLoadScreen();
    showStartScreen();
    loadHighScore();
    if (sound == 'off') {
      soundControl.attr('src','assets/img/sound-off.svg');
    }
  });

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

  soundControl.click(function() {
    toggleSound();
  })

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

  retryButton.click(function() {
    hideGameOverScreen();
    setTimeout(function(){
      showNewGameScreen();
      resetGame();
    }, 400);
  });

})();