// function test() {
// 	document.getElementById('bottom-view').style.display = 'none';
// }


// eases the scrolling to page sections
$(function () {
	$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var offset = 0;
		var target = $(id).offset().top - offset;
		$('html, body').animate({scrollTop:target}, 800);
		event.preventDefault();
	});
});