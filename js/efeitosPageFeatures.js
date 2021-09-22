$(function(){

	$('#features').on('change', function(){
		let campo = $($(this).val());
		console.log(campo);

		$('.fieldset').css('display', 'none');
		$('.fieldset').attr('disabled', false);

		if(campo){
			campo.css('display', 'block');
			campo.attr('disabled', false);
		}
	});
});

$(function(){
	$('#modulos').on('change', function(){
		let campo = $($(this).val());
		$('.features').css('display', 'none');
		$('.features').attr('disabled', false);
		if(campo){
			campo.css('display', 'block');
			campo.attr('disabled', false);
		}
	});
});

$(function(){
	$('#botaoExecutar').css('display', 'none');
	$('#features').on('change', function(){
		let campo = $($(this).val());
		if(campo){
			$('#botaoExecutar').css('display', 'block');
			/*$('.form').css('transition', 'all 50ms linear');
			$('.form').css('padding-top', '2rem');*/
			document.getElementById("botaoExecutar").disabled = false;

		}
	});
});

$(function(){
	$("#botaoExecutar").on("click", function(){
		document.getElementById("botaoExecutar").disabled = true;
	});
});


$(function(){

	$("#botaoExecutar").on("click", function(){
		var video = $("video")[0];
		if ($(this).hasClass("botaoFeature")) {
			video.play();
		}
	});
});

/* $(function(){

	const executar = document.querySelectorAll('#botaoExecutar');
	executar.forEach(item => {
		item.addEventListener('click', scrollOnClick);
	})
	function scrollOnClick(event){
		event.preventDefault();
		const element = event.target;
		const id = element.getAttribute("href");
		const to = document.querySelector(id).offsetTop;

		window.scroll({
			top:750,
			behavior:"smooth",
		});
	}
});*/

$("#botaoExecutar").click(function() {

	window.scroll({
		top:800,
		behavior:"smooth",
	});

        /*$([document.documentElement, document.body]).animate({
            scrollTop: $("#videosSection").offset().top
        }, 500);*/
    });
