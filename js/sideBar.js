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
