$(function(){
	$("#trigger1").on("click", function(e){
		var video1 = $("video")[0];
		video1.play();
	});
	$("#trigger2").on("click", function(e){
		var video2 = $("video")[1];
		video2.play();
	});
});
$(function(){
$(".close").on("click", function(e){
		var video1 = $("video")[0];
		var video2 = $("video")[1];
		if ($(this).hasClass("close")) {
			video1.pause();
			video2.pause();
		}else {
        video1.play();
        video2.play();
    }
    e.preventDefault();
	});

});
$(function(){
 document.onkeydown = function(evt) {
    evt = evt || window.event;
    var video1 = $("video")[0];
    var video2 = $("video")[1];
    var isEscape = false;
    var botoes = document.getElementsByClassName("close");
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        video1.pause();
        video2.pause();
        botoes[0].click();
        botoes[1].click();
    }
};
});