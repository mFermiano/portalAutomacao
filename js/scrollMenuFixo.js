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