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













var page = document.getElementById('container'),
    ua = navigator.userAgent,
    iphone = ~ua.indexOf('iPhone') || ~ua.indexOf('iPod'),
    ipad = ~ua.indexOf('iPad'),
    ios = iphone || ipad,
    // Detect if this is running as a fullscreen app from the homescreen
    fullscreen = window.navigator.standalone,
    android = ~ua.indexOf('Android'),
    lastWidth = 0;
 
if (android) {
  // Android's browser adds the scroll position to the innerHeight, just to
  // make this really fucking difficult. Thus, once we are scrolled, the
  // page height value needs to be corrected in case the page is loaded
  // when already scrolled down. The pageYOffset is of no use, since it always
  // returns 0 while the address bar is displayed.
  window.onscroll = function() {
    page.style.height = window.innerHeight + 'px'
  } 
}
var setupScroll = window.onload = function() {
  // Start out by adding the height of the location bar to the width, so that
  // we can scroll past it
  if (ios) {
    // iOS reliably returns the innerWindow size for documentElement.clientHeight
    // but window.innerHeight is sometimes the wrong value after rotating
    // the orientation
    var height = document.documentElement.clientHeight;
    // Only add extra padding to the height on iphone / ipod, since the ipad
    // browser doesn't scroll off the location bar.
    if (iphone && !fullscreen) height += 60;
    page.style.height = height + 'px';
  } else if (android) {
    // The stock Android browser has a location bar height of 56 pixels, but
    // this very likely could be broken in other Android browsers.
    page.style.height = (window.innerHeight + 56) + 'px'
  }
  // Scroll after a timeout, since iOS will scroll to the top of the page
  // after it fires the onload event
  setTimeout(scrollTo, 0, 0, 1);
};
(window.onresize = function() {
  var pageWidth = page.offsetWidth;
  // Android doesn't support orientation change, so check for when the width
  // changes to figure out when the orientation changes
  if (lastWidth == pageWidth) return;
  lastWidth = pageWidth;
  setupScroll();
})();


















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





