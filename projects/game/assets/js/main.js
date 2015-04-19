var start = document.getElementById('start');
var reset = document.getElementById('reset');
var copyButton = document.getElementById('copy');
var pasteButton = document.getElementById('paste');
var pasteValue = document.getElementById('pasteValue');
var time = document.getElementById('time');
var score = document.getElementById('counter');
var highscore = document.getElementById('highscore');
var newHighscoreMessage = document.getElementById('newHighscoreMessage');

var interval;
var minutes = 0;
var seconds = 3;



function countdown() {
    interval = setInterval(function() {
        if(minutes == 0) {
            if(seconds == 0) {
                disableCopy();
                disablePaste();
                time.innerHTML = "0:00";
                clearInterval(interval);
                if (time.innerHTML == '0:00') {
                    if (Number(score.innerHTML) > Number(highscore.innerHTML)) {
                        //used to store hgihscore in local storage
                        // document.cookie = "document.getElementById('highscore').innerHTML = Number(counter); expires=Fri, 31 Dec 9999 23:59:59 GMT;"
                        highscore.innerHTML = Number(score.innerHTML);
                        newHighscore();
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

function clickStart () {
    countdown();
    enableCopy();
    enablePaste();
    hideStart();
    showReset();
    showScore();
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
    newHighscoreMessage.style.visibility = 'hidden';
}
function copyCurrentValue() {
    pasteValue.innerHTML = score.innerHTML;
};

function addPasteValue() {
    var newCountValue = Number(pasteValue.innerHTML) + Number(score.innerHTML);
    score.innerHTML = newCountValue;
};

// $(document).ready(function() {
//     $('div').hover(function() {
//         $('div').effect('shake');
//     });
//     $('div').click(function() {
//         $('div').effect('explode');
//     });
// });
function newHighscore() {
    newHighscoreMessage.style.visibility = 'visible';
    $("#scoreboard").fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
  // $("#counter").effect("shake");
  // $("#scoreboard").stop().css("background-color", "#FFFF9C")
  //   .animate({ backgroundColor: "#000"}, 15000);
};



// document.getElementById.