$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
        $('#menu').css('display','none');
        $('#menu').css('transition','all 250ms linear');
        $('header').css('height','4.9rem');
        $('#containerTitulo').css('display','none');
        $('.page-wrapper').css('display','block');
        $('#bannerKonvivaFundo img').css('width','18%');
        $('#bannerKonvivaFundo').css('width','85%');
        $('#bannerKonvivaFundo').css('filter','opacity(0.45)');
        $('#bannerKonvivaFundo').css('transition','all 80ms linear');
        $('.sidebar-wrapper').css('display','none');
        $('#show-sidebar').css('display','block');

    } else if (scroll < 50){
        $('#menu').css('display','block');
        $('header').css('height','10.4rem');
        $('#bannerKonvivaFundo img').css('width','40%');
        $('#bannerKonvivaFundo').css('filter','opacity(0.15)');
        $('#bannerKonvivaFundo').css('width','100%');
        $('#bannerKonvivaFundo').css('display','block');
        $('#containerTitulo').css('display','block');
        $('.page-wrapper').css('display','none');

    }
});

$(window).on("load",function (){

		var url = window.location.href;

		var resultHome = url.indexOf("home.html") > -1;
		console.log(resultHome);
		var resultKonviva = url.indexOf("konviva.html") > -1;
		console.log(resultKonviva);
		var resultInstrucoes = url.indexOf("instrucoes.html") > -1;
		console.log(resultInstrucoes);
		var resultFeatures = url.indexOf("features.html") > -1;
		console.log(resultFeatures);
		var resultSugestoes = url.indexOf("sugestoes.html") > -1;
		console.log(resultSugestoes);

		var botaoHome = document.getElementById("botaoHome");
		var botaoKonviva = document.getElementById("botaoKonviva");
		var botaoInstrucoes = document.getElementById("botaoInstrucoes");
		var botaoFeatures = document.getElementById("botaoFeatures");
		var botaoSugestoes = document.getElementById("botaoSugestoes");

		var botaoHomeSidebar = document.getElementById("homeSidebar");
		console.log(botaoHomeSidebar);
		var botaoKonvivaSidebar = document.getElementById("konvivaSidebar");
		console.log(botaoKonvivaSidebar);
		var botaoInstrucoesSidebar = document.getElementById("instrucoesSidebar");
		console.log(botaoInstrucoesSidebar);
		var botaoFeaturesSidebar = document.getElementById("featuresSidebar");
		console.log(botaoFeaturesSidebar);
		var botaoSugestoesSidebar = document.getElementById("sugestoesSidebar");
		console.log(botaoSugestoesSidebar);

		var iconeHomeSidebar = document.getElementById("iconeHomeSidebar");
		console.log(iconeHomeSidebar);
		var iconeKonvivaSidebar = document.getElementById("iconeKonvivaSidebar");
		console.log(iconeKonvivaSidebar);
		var iconeInstrucoesSidebar = document.getElementById("iconeInstrucoesSidebar");
		console.log(iconeInstrucoesSidebar);
		var iconeFeaturesSidebar = document.getElementById("iconeFeaturesSidebar");
		console.log(iconeFeaturesSidebar);
		var iconeSugestoesSidebar = document.getElementById("iconeSugestoesSidebar");
		console.log(iconeSugestoesSidebar);


		if(resultHome == true){
			/*botaoHome.style.background = 'rgb(95 60 92)';
			botaoHome.style.border = '1px solid #555';
			botaoHome.style.boxShadow = 'inset 3px 2px 2px #323232';*/
			botaoHome.style.textShadow = '#d6c6d5';
			botaoHome.style.color = '#AAA';
			botaoHome.style.textDecoration = 'none';
			botaoHome.style.fontSize = '1.1rem';
			botaoHomeSidebar.style.background = 'rgb(95 60 92 / 50%)';
			iconeHomeSidebar.style.color = '#daa520';
			iconeHomeSidebar.style.textShadow = '0px 0px 10px rgba(22, 199, 255, 0.5)';
			$("#menu").addClass("homePage");

		} else if(resultInstrucoes == true){
			/*botaoInstrucoes.style.background = 'rgb(95 60 92)';
			botaoInstrucoes.style.border = '1px solid #555';
			botaoInstrucoes.style.boxShadow = 'inset 3px 2px 2px #323232';*/
			botaoInstrucoes.style.color = '#AAA';
			botaoInstrucoes.style.textDecoration = 'none';
			botaoInstrucoes.style.textShadow = '#d6c6d5';
			botaoInstrucoes.style.fontSize = '1.1rem';
			botaoInstrucoesSidebar.style.background = 'rgb(95 60 92 / 50%)';
			iconeInstrucoesSidebar.style.color = '#daa520';
			iconeInstrucoesSidebar.style.textShadow = '0px 0px 10px rgba(22, 199, 255, 0.5)';
			$("#menu").addClass("instrucoesPage");

		}else if(resultFeatures == true){
			/*botaoFeatures.style.background = 'rgb(95 60 92)';
			botaoFeatures.style.border = '1px solid #555';
			botaoFeatures.style.boxShadow = 'inset 3px 2px 2px #323232';*/
			botaoFeatures.style.color = '#AAA';
			botaoFeatures.style.textDecoration = 'none';
			botaoFeatures.style.textShadow = '#d6c6d5';
			botaoFeatures.style.fontSize = '1.1rem';
			botaoFeaturesSidebar.style.background = 'rgb(95 60 92 / 50%)';
			iconeFeaturesSidebar.style.color = '#daa520';
			iconeFeaturesSidebar.style.textShadow = '0px 0px 10px rgba(22, 199, 255, 0.5)';
			$("#menu").addClass("featuresPage");
            /*$("#sidebar").addClass("featuresSidePage");*/

		}else if(resultSugestoes == true){
			/*botaoSugestoes.style.background = 'rgb(95 60 92)';
			botaoSugestoes.style.border = '1px solid #555';
			botaoSugestoes.style.boxShadow = 'inset 3px 2px 2px #323232';*/
			botaoSugestoes.style.color = '#AAA';
			botaoSugestoes.style.textDecoration = 'none';
			botaoSugestoes.style.textShadow = '#d6c6d5';
			botaoSugestoes.style.fontSize = '1.1rem';
			botaoSugestoesSidebar.style.background = 'rgb(95 60 92 / 50%)';
			iconeSugestoesSidebar.style.color = '#daa520';
			iconeSugestoesSidebar.style.textShadow = '0px 0px 10px rgba(22, 199, 255, 0.5)';
			$("#menu").addClass("sugestoesPage");
            /*$("#sidebar").addClass("sugestoesSidePage");*/

		}
	});

	 jQuery(function ($) {

      $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
        $('#sidebar').css('transition','all 250ms linear');
        $('#sidebar').css('display','block');
        $('#show-sidebar').css('display','none');
        $('#bannerKonvivaFundo').css('display','none');
        $('#imagemIlogSidebarMenu').css('transition','all 1000ms linear');
        $('#imagemIlogSidebarMenu').css('display','block');
      });
      $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
        $('#show-sidebar').css('display','block');
        $('#bannerKonvivaFundo').css('display','block');
        $('#imagemIlogSidebarMenu').css('transition','all 10ms linear');
        $('#imagemIlogSidebarMenu').css('display','none');
      });


    });
