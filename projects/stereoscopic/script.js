// Automatically Starts Video
setTimeout(function(){
    document.getElementById("video").play();
}, 800);



// // Canvas

    document.addEventListener('DOMContentLoaded', function(){
    var video = document.getElementById('video');
    var canvas1 = document.getElementById('canvas1');
    var context1 = canvas1.getContext('2d');
    var canvas2 = document.getElementById('canvas2');
    var context2 = canvas2.getContext('2d');

    var cw = Math.floor(video.clientWidth);
    var ch = Math.floor(video.clientHeight);
    canvas1.width = ch;
    canvas1.height = cw;
    canvas2.width = ch;
    canvas2.height = cw;

    // translate context to center of canvas and rotate clockwise
      context1.translate(canvas1.width / 1.25, 1/ canvas1.height );
      context1.rotate(Math.PI / 2);
      context2.translate(canvas2.width / 1.25, 1/ canvas2.height );
      context2.rotate(Math.PI / 2);

    video.addEventListener('play', function(){
        draw(this,context1,cw,ch);
    },false);
    video.addEventListener('play', function(){
        draw(this,context2,cw,ch);
    },false);

},false);



// Draw second canvas
//  document.addEventListener('DOMContentLoaded', function(){
//  var video, context, canvas2, canvas1;
// //get the canvases
// canvas2 = document.getElementById('canvas2');
// canvas1 = document.getElementById('canvas1');
// //get the google logo
// video = document.getElementById('video');
// //make sure the canvases are the same size as the source image.

// var cw = video.width;
// var ch = video.height;
// canvas2.width = cw;
// canvas2.height = ch;
// canvas1.width = cw;
// canvas1.height = ch;

// //draw the source image to the source canvas
// context = canvas2.getContext('2d');
// context.drawImage(video, 0, 0, video.width, video.height);
// video.addEventListener('play', function(){
//     draw(this,context,cw,ch);
// });
// });

// // Benchmark.prototype.teardown = function() {
// // canvas2.width = canvas2.width;
// // canvas1.width = canvas1.width;
// // },false);




// For custom video controls
function vidplay() {
       var video = document.getElementById("video");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = " ";
       } else {
          video.pause();
          button.textContent = " ";
       }
    }

    function restart() {
        var video = document.getElementById("vid");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("vid");
        video.currentTime += value;
    }      
function draw(v,c,w,h) {
    if(video.paused || video.ended) return false;
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}





