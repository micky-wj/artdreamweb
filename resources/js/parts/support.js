$(document).ready(function(){
	$(".ad-nav-spy").affix({
        offset: { 
            top: $(".container").offset().top-100,
            bottom: $('.footer').outerHeight(true) + 40
     	}
    });
	
	var containerCenter = $('.ad-sup-project-carousel').width()/2;
	$(".ad-sup-pro-c").CloudCarousel({			
		xPos:containerCenter,
		yPos:150,
		buttonLeft: $('.ad-sup-pro-cl'),
		buttonRight: $('.ad-sup-pro-cr'),
		titleBox: $(".ad-sup-pro-ct"),				
		newsBox: $(".ad-sup-pro-cn"),			
		infoBox: $(".ad-sup-pro-ci"),			
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	
	$(".ad-sup-enter-c").CloudCarousel({			
		xPos:containerCenter,
		yPos:150,
		buttonLeft: $('.ad-sup-enter-cl'),
		buttonRight: $('.ad-sup-enter-cr'),
		titleBox: $(".ad-sup-enter-ct"),				
		newsBox: $(".ad-sup-enter-cn"),			
		infoBox: $(".ad-sup-enter-ci"),			
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	
	$(".ad-sup-med-c").CloudCarousel({			
		xPos:containerCenter,
		yPos:150,
		buttonLeft: $('.ad-sup-med-cl'),
		buttonRight: $('.ad-sup-med-cr'),
		titleBox: $(".ad-sup-med-ct"),				
		newsBox: $(".ad-sup-med-cn"),			
		infoBox: $(".ad-sup-med-ci"),			
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	

	// $('ad-sup-donate-way a').click(function (e) {
	//   	e.preventDefault();
	//   	$(this).tab('show')
	// });
	$('[data-toggle="tooltip"]').tooltip();
});