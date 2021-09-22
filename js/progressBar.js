function move() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 440);
  var botaoRelatorio = document.getElementById("gerarRelatorio");
  console.log(botaoRelatorio);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $('#gerarRelatorio').css('display','block');
      window.scroll({
        top:950,
        behavior:"smooth",
      });

      /*$([document.documentElement, document.body]).animate({
          scrollTop: $("#gerarRelatorio").offset().top
        }, 500);*/

      } else {
        $('#gerarRelatorio').css('display','none');
        width++;
        elem.style.width = width + '%';
        document.getElementById("label").innerHTML = width * 1  + '%';
      }
    }
  }