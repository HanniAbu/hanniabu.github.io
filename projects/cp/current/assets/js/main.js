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
var seconds = 14;
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
    $(copyButton).animate({width: '-=30%', height: '-=23%'});
};
function shrinkCopyButtonSmaller() {
    $(copyButton).animate({width: '25px', height: '25px'});
};
function resetCopyButtonSize() {
    $(copyButton).animate({width: '80%', height: '60px'});
};
function changeCopyButtonStyle() {
    copyButton.style.color = '#50DE7D';
    copyButton.style.textShadow = 'none';
};
function resetCopyButtonStyle() {
    copyButton.style.color = '#fff';
    copyButton.style.textShadow = ' 0 1px 2px rgba(0, 0, 0, 0.25)';
};
function resetCopyButtonClicks() {
    copyButtonClicks = 0;
};
function flashScreen() {
    $("body").animate({backgroundColor: "#ccc"}, 40).delay(10);
    $("body").animate({backgroundColor: "#fff"}, 40);
};
function copyButtonNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 25;
    var w = $(window).width() - 25;
    var nh = Math.floor(Math.random() * h - 450);
    var nw = Math.floor(Math.random() * w - 180);
    return [nh,nw]; 
};







function shuffleCopyButtonSlow() {
    if (time.innerHTML == '0:00' || time.innerHTML == '0:15') {
        console.log('initiate postition1 reset');
        resetCopyButtonPosition();
    } else {
        console.log('shuffle initiated');
        $("#copy").animate({"left": "-43%"}, 2000)
        if (time.innerHTML == '0:00' || time.innerHTML == '0:15') {
            console.log('initiate postition2 reset');
            resetCopyButtonPosition();
        } else {
            $("#copy").animate({"left": "43%"}, 2000);
            if (time.innerHTML == '0:00' || time.innerHTML == '0:15') {
                console.log('initiate postition3 reset');
                resetCopyButtonPosition();
            } else {
                shuffleCopyButtonSlow;
            }
        }
    }
};







function animateCopyButton() {
    if (time.innerHTML == '0:00') {
           return;
        };
    var newq = copyButtonNewPosition();
    $(copyButton).animate({ top: newq[0], left: newq[1] }, function(){
      animateCopyButton();  
    });
};
function resetCopyButtonPosition() {
    // $("#copy").animate({"left": "0"}, 50);
    console.log(time.innerHTML);
    $("#copy").stop();
    // $('#copy').animate({'top': originTop,'left' : originLeft});
    // $('#copy').animate({'top': 0,'left' : 0});
};


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
    time.innerHTML = "0:15";
    clearInterval(interval);
    seconds = 14;
    disablePaste();
    disableCopy();
    score.innerHTML = '1';
    pasteValue.innerHTML = '1';
    hideReset();
    hideScore();
    showStart();
    hideHighscoreMessage();
    hideTimesUpMessage();
    resetCopyButtonClicks();
    resetCopyButtonPosition();
    resetCopyButtonSize();
    resetCopyButtonStyle();
};
function clickCopy() {
    pasteValue.innerHTML = score.innerHTML;
    copyButtonClicks += 1;
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
};
function checkIfHighScore() {
    if (Number(score.innerHTML) > Number(highscore.innerHTML)) {
        //used to store hgihscore in local storage
        // document.cookie = "document.getElementById('highscore').innerHTML = Number(counter); expires=Fri, 31 Dec 9999 23:59:59 GMT;"
        highscore.innerHTML = Number(score.innerHTML);
        showHighscoreMessage();
        //adds commas to highscore. took out for now b/c turns number into string
        // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    };
};
function copyButtonEffects() {
    flashScreen();
    switch(copyButtonClicks) {
        case 2:
            shrinkCopyButton();
            return;
        case 3:
            shrinkCopyButton();
            return;
        case 4:
            changeCopyButtonStyle();
            shrinkCopyButtonSmaller();
            return;
        case 5:
            shuffleCopyButtonSlow();
            return;
        // case 6:
        //     shuffleCopyButtonFast();
        //     return;
        // case 7:
        //     animateCopyButton();
        //     return;
        default:
            shuffleCopyButtonSlow();
            return;
    };
};

