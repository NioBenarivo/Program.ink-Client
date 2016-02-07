$(document).ready(function(){
	$('#signup_tab').on('click', function() {
		$('li.is-selected').removeClass('is-selected');
		$(this).addClass('is-selected');
	});

	$('#login_tab').on('click', function() {
		$('li.is-selected').removeClass('is-selected');
		$(this).addClass('is-selected');
	});

	$('.devicon').hover(function(){
			$(this).children().toggleClass("colored");
	});


	$("#drop_zone").dropzone({ url: "/file/post"});

	$('.navbar-left ul li').on('click', function() {
		$('li.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('#discover_tab').on('click', function(){
		$('a.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('#stack_tab').on('click', function(){
		$('a.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.mail-tab li').on('click', function(){
		$('li.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.contact-panel ul li').on('click', function(){
		$('li.is-selected').removeClass('is-selected');
		$(this).addClass('is-selected');
	});

});