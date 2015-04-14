
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ?  + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// };

// function clickStart () {
//     var start = document.getElementById('startCountDown');
//     start.innerHTML = "Reset";
//     start.setAttribute("id", "resetCountDown");
//     start.setAttribute("onclick", "clickReset()");
//     var fifteenSeconds = 15,
//         display = document.querySelector('#time');
//     startTimer(fifteenSeconds, display);
// };

// function clickReset () {
//     var reset = document.getElementById('resetCountDown');
//     reset.innerHTML = "Start";
//     reset.setAttribute("onclick", "clickStart()");
//     reset.setAttribute("id", "startCountDown");

//     document.getElementById('time').innerHTML = "0:15";
//     var fifteenSeconds = 15,
//         display = document.querySelector('#time');
//     startTimer(fifteenSeconds, display);
// }

var interval;
var minutes = 0;
var seconds = 14;

function countdown() {
    var time = document.getElementById('time');
    var highscore = document.getElementById('highscore').innerHTML;
    interval = setInterval(function() {
        if(minutes == 0) {
            if(seconds == 0) {
                var pasteButton = document.getElementById('paste');
                pasteButton.removeAttribute("onclick");
                var copyButton = document.getElementById('copy');
                copyButton.removeAttribute("onclick");
                time.innerHTML = "0:00";                    
                clearInterval(interval);
                if (time.innerHTML == '0:00') {
                    var counter = document.getElementById('counter').innerHTML;
                    if (Number(counter) > Number(highscore)) {
                        document.getElementById('highscore').innerHTML = Number(counter);
                        // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    };
                };
                return; 
            } 
        }
        var second_text = seconds > 9 ? '' : '0';
        time.innerHTML = '0:' + second_text + seconds ;
        seconds--;
    }, 1000);
}

function clickStart () {
    var start = document.getElementById('startCountDown');
    start.innerHTML = "Reset";
    start.setAttribute("id", "resetCountDown");
    start.setAttribute("onclick", "clickReset()");
    countdown();
    var copyButton = document.getElementById('copy');
    copyButton.setAttribute("onclick", "copyCurrentValue()");
    var pasteButton = document.getElementById('paste');
    pasteButton.setAttribute("onclick", "addPasteValue()");
};

function clickReset () {
    document.getElementById('time').innerHTML = "0:15";
    clearInterval(interval);
    seconds = 14;
    var reset = document.getElementById('resetCountDown');
    reset.innerHTML = "Start";
    reset.setAttribute("onclick", "clickStart()");
    reset.setAttribute("id", "startCountDown");
    var copyButton = document.getElementById('copy');
    copyButton.removeAttribute("onclick");
    var pasteButton = document.getElementById('paste');
    pasteButton.removeAttribute("onclick");
    document.getElementById('counter').innerHTML = '1';
    document.getElementById('pasteValue').innerHTML = '1';
}

function copyCurrentValue() {
    var currentCount = document.getElementById('counter').innerHTML;
    var oldPasteValue = document.getElementById('pasteValue');
    oldPasteValue.innerHTML = currentCount;
};

function addPasteValue() {
    var currentPasteValue = Number(document.getElementById('pasteValue').innerHTML);
    var currentCountValue = Number(document.getElementById('counter').innerHTML);
    var newCountValue = currentPasteValue + currentCountValue;
    document.getElementById('counter').innerHTML = newCountValue;

};
