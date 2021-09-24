$(function(){
	$(".carroselSection").owlCarousel({
		loop:true,
		nav:false,
		navText: [" < "," > "],
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive: {
			0 : {
				items: 1
			},
			480:{
				items: 1
			},
			1000: {
				items: 1
			},

		}
	}),

	$(".carroselFooter").owlCarousel({
		loop:true,
		nav:true,
		navText: [" < Previous "," Next > "],
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive: {
			0 : {
				items: 1
			},
			480:{
				items: 2
			},
			760: {
				items: 3
			},

		}
	});

});