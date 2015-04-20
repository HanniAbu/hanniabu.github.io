var start = document.getElementById('start');
var reset = document.getElementById('reset');
var copyButton = document.getElementById('copy');
var pasteButton = document.getElementById('paste');
var pasteValue = document.getElementById('pasteValue');
var time = document.getElementById('time');
var score = document.getElementById('counter');
var scoreboard = document.getElementById('scoreboard');
var highscore = document.getElementById('highscore');
var highscoreMessage = document.getElementById('newHighscoreMessage');
var timesUpMessage = document.getElementById('timesUp');
var topScore = document.getElementById('topScore');

var interval;
var minutes = 0;
var seconds = 2;
var copyButtonClicks = 0;


function enableCopy() {
    copyButton.setAttribute("onclick", "clickCopy()");
};
function disableCopy() {
    copyButton.removeAttribute("onclick", "clickCopy()");
};
function enablePaste() {
    pasteButton.setAttribute("onclick", "clickPaste()");
};
function disablePaste() {
    pasteButton.removeAttribute("onclick", "clickPaste()");
};
function hideStart() {
    start.style.display = 'none';
};
function showStart() {
    start.style.display = 'block';
};
function hideReset() {
    reset.style.display = 'none';
};
function showReset() {
    reset.style.display = 'block';
};
function hideScore() {
    score.style.display = 'none';
};
function showScore() {
    score.style.display = 'block';
};
function showHighscoreMessage() {
    highscoreMessage.style.visibility = 'visible';
};
function hideHighscoreMessage() {
    highscoreMessage.style.visibility = 'hidden';
};
function showTimesUpMessage() {
    timesUpMessage.style.visibility = 'visible';
};
function hideTimesUpMessage() {
    timesUpMessage.style.visibility = 'hidden';
};
function flashScoreboard() {
    $(scoreboard).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
};
function shrinkCopyButton() {
    $(copyButton).animate({width: '-=23%', height: '-=23%'});
};
function shrinkCopyButtonSmaller() {
    $(copyButton).animate({width: '15px', height: '15px'});
};
function resetCopyButtonSize() {
    $(copyButton).animate({width: '80%', height: '60px'});
};
function changeCopyButtonStyle() {
    copyButton.style.color = '#000';
    copyButton.style.textShadow = 'none';
    copyButton.style.backgroundColor = '#000';
}
function resetCopyButtonStyle() {
    copyButton.style.color = '#fff';
    copyButton.style.textShadow = ' 0 1px 2px rgba(0, 0, 0, 0.25)';
    copyButton.style.backgroundColor = '#50DE7D';
}
function resetCopyButtonClicks() {
    copyButtonClicks = 0;
};
function flashScreen() {
    $("body").animate({backgroundColor: "#ccc"}, 20).delay(10);
    $("body").animate({backgroundColor: "#fff"}, 20);
}


function countdown() {
    interval = setInterval(function() {
        if(minutes == 0) {
            if(seconds == 0) {
                gameOver();
                clearInterval(interval);
                if (time.innerHTML == '0:00') {
                   checkIfHighScore();
                };
                return; 
            }  
        }
        var second_text = seconds > 9 ? '' : '0';
        time.innerHTML = '0:' + second_text + seconds ;
        seconds--;
    }, 1000);
};
function clickStart () {
    countdown();
    enableCopy();
    enablePaste();
    hideStart();
    showReset();
    showScore();
    hideTimesUpMessage();
};
function clickReset () {
    time.innerHTML = "0:10";
    clearInterval(interval);
    seconds = 9;
    disablePaste();
    disableCopy();
    score.innerHTML = '1';
    pasteValue.innerHTML = '1';
    hideReset();
    hideScore();
    showStart();
    hideHighscoreMessage();
    hideTimesUpMessage();
    resetCopyButtonSize();
    resetCopyButtonClicks();
    resetCopyButtonStyle();
    // $(topScore).animate({color: "#000"}, 4000);
};
function clickCopy() {
    pasteValue.innerHTML = score.innerHTML;
    copyButtonClicks += 1;
    console.log(copyButtonClicks);
    copyButtonEffects();
};
function clickPaste() {
    var newCountValue = Number(pasteValue.innerHTML) + Number(score.innerHTML);
    score.innerHTML = newCountValue;
};
function gameOver() {
    disableCopy();
    disablePaste();
    time.innerHTML = "0:00";
    showTimesUpMessage();
    flashScoreboard();
    resetCopyButtonClicks();
    // resetCopyButtonSize();
    // showCopyButtonText();
};
function checkIfHighScore() {
    if (Number(score.innerHTML) > Number(highscore.innerHTML)) {
        //used to store hgihscore in local storage
        // document.cookie = "document.getElementById('highscore').innerHTML = Number(counter); expires=Fri, 31 Dec 9999 23:59:59 GMT;"
        highscore.innerHTML = Number(score.innerHTML);
        showHighscoreMessage();
        // $(highscore).animate({color: "#000"}, 'fast');
        // $(highscore).animate({color: "#000"}, 5000);
        //adds commas to highscore. took out for now b/c turns number into string
        // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    };
};
function copyButtonEffects() {
    flashScreen();
    switch(copyButtonClicks) {
        case 2:
            shrinkCopyButton();
            return
        case 3:
            shrinkCopyButton();
            return
        case 4:
            changeCopyButtonStyle();
            shrinkCopyButtonSmaller();
            return
        default:
            return;
    };
};

