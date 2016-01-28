$(document).ready(function(){

	$('.ad-pro-core-detail a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	});

	var	$activityList= $('.ad-pro-activity-list');
	$activityList.on('click', '.news-container', function(event) {
		var $news = $(event.currentTarget);
		var newsId = parseInt($news.attr('id').replace(/news/, ''));
		window.location.href="/news/"+newsId;
	});

	var	$activityMore= $('.ad-pro-activity-more .btn');
	$activityMore.on('click', function(event) {
		window.location.href="/newslist/p1";
	});

});