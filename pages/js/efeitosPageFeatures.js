$(function(){
	$('#ambientes').on('click', function(){
		var select = document.querySelector('select');
        var option = select.children[select.selectedIndex];
        var texto = option.textContent;

        console.log(texto);
		if(texto=='Digitar ambiente'){
			document.getElementById("setUrl").disabled = false;
		}else{
		document.getElementById("setUrl").disabled = true;
		}
	});
});

$(function(){
	$('#usuario').on('click', function(){
		var select2 = document.getElementById('usuario');
        var option2 = select2.children[select2.selectedIndex];
        var texto2 = option2.textContent;

        console.log(texto2);
		if(texto2=='Digitar login e senha'){
			document.getElementById("setLogin").disabled = false;
			document.getElementById("setPassword").disabled = false;
		}else{
		document.getElementById("setLogin").disabled = true;
		document.getElementById("setPassword").disabled = true;
		}
	});
});

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
		$('#aguardeRelatorio').css('display','block');
	});
});


$(function(){

	$("#botaoExecutar").on("click", function(){
		var video = $("video")[0];
		var video2 = $("video")[1];
		var video3 = $("video")[2];
		var video4 = $("video")[3];
		if ($(this).hasClass("botaoFeature")) {
			video.play();
			video2.play();
			video3.play();
			video4.play();
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
		top:1100,
		behavior:"smooth",
	});

        /*$([document.documentElement, document.body]).animate({
            scrollTop: $("#videosSection").offset().top
        }, 500);*/
    });

    function move() {
       var elem = document.getElementById("myBar");
       var elem2 = document.getElementById("myBar2");
        var elem3 = document.getElementById("myBar3");
       var width = 10;
       var id = setInterval(frame, 440);
       var botaoRelatorio = document.getElementById("gerarRelatorio");
       var botoes = document.getElementsByClassName("close");
       console.log(botaoRelatorio);
       function frame() {
         if (width >= 100) {
           clearInterval(id);
           $('#gerarRelatorio').css('display','block');
           $('#aguardeRelatorio').css('display','none');
           botoes[0].click();
           botoes[1].click();
           window.scroll({
             top:1150,
             behavior:"smooth",
           });

           /*$([document.documentElement, document.body]).animate({
               scrollTop: $("#gerarRelatorio").offset().top
             }, 500);*/

           } else {
             $('#gerarRelatorio').css('display','none');
             width++;
             elem.style.width = width + '%';
             elem2.style.width = width + '%';
             elem3.style.width = width + '%';
             document.getElementById("label").innerHTML = width * 1  + '%';
             document.getElementById("label2").innerHTML = width * 1  + '%';
             document.getElementById("label3").innerHTML = width * 1  + '%';
           }
         }
       };

       $(function(){
                document.onkeydown = function(evt) {
                   evt = evt || window.event;
                   var isEscape = false;
                   var botoes = document.getElementsByClassName("close");
                   console.log(botoes);
                   if ("key" in evt) {
                       isEscape = (evt.key === "Escape" || evt.key === "Esc");
                   } else {
                       isEscape = (evt.keyCode === 27);
                   }
                   if (isEscape) {
                       botoes[0].click();
                       botoes[1].click();
                   }
           };
           });


