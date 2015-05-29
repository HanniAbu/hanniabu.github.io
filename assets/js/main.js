
// eases the scrolling to page sections
$(function () {
	$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var offset = 0;
		var target = $(id).offset().top - offset;
		$('body').animate({scrollTop:target}, 800);
		event.preventDefault();
	});
});