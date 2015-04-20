var start = document.getElementById('start');
var reset = document.getElementById('reset');
var copyButton = document.getElementById('copy');
var pasteButton = document.getElementById('paste');
var pasteValue = document.getElementById('pasteValue');
var time = document.getElementById('time');
var score = document.getElementById('counter');
var highscore = document.getElementById('highscore');
var highscoreMessage = document.getElementById('newHighscoreMessage');
var timesUpMessage = document.getElementById('timesUp');

var interval;
var minutes = 0;
var seconds = 3;



function countdown() {
    interval = setInterval(function() {
        if(minutes == 0) {
            if(seconds == 0) {
                gameOver();
                clearInterval(interval);
                if (time.innerHTML == '0:00') {
                    if (Number(score.innerHTML) > Number(highscore.innerHTML)) {
                        //used to store hgihscore in local storage
                        // document.cookie = "document.getElementById('highscore').innerHTML = Number(counter); expires=Fri, 31 Dec 9999 23:59:59 GMT;"
                        highscore.innerHTML = Number(score.innerHTML);
                        showHighscoreMessage();
                        //adds commas to highscore. took out for now b/c turns number into string
                        // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
                    };
                };
                return; 
            }  
        }
        var second_text = seconds > 9 ? '' : '0';
        time.innerHTML = '0:' + second_text + seconds ;
        seconds--
;    }, 1000);
}

function enableCopy() {
    copyButton.setAttribute("onclick", "copyCurrentValue()");
}
function enablePaste() {
    pasteButton.setAttribute("onclick", "addPasteValue()");
}
function disableCopy() {
    copyButton.removeAttribute("onclick", "copyCurrentValue()");
}
function disablePaste() {
    pasteButton.removeAttribute("onclick", "addPasteValue()");
}
function hideStart() {
    start.style.display = 'none';
}
function showStart() {
    start.style.display = 'block';
}
function hideReset() {
    reset.style.display = 'none';
}
function showReset() {
    reset.style.display = 'block';
}
function hideScore() {
    score.style.display = 'none';
}
function showScore() {
    score.style.display = 'block';
}
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
    $("#scoreboard").fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
}

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
}
function copyCurrentValue() {
    pasteValue.innerHTML = score.innerHTML;
    copyButton.setAttribute("style", "-webkit-transform: scale(0.1);");
};
function addPasteValue() {
    var newCountValue = Number(pasteValue.innerHTML) + Number(score.innerHTML);
    score.innerHTML = newCountValue;
};
function gameOver() {
    disableCopy();
    disablePaste();
    time.innerHTML = "0:00";
    showTimesUpMessage();
    flashScoreboard();
};

// document.getElementById.