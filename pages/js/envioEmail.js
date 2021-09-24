$(function(){
	var form = document.getElementById("form1");

	async function handleSubmit(event) {
		event.preventDefault();
		var status = document.getElementById("my-form-status");
		var data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				'Accept': 'application/json'
			}
		}).then(response => {
			status.innerHTML = "Muito obrigado pela sugestão!!!\nEm breve nossa equipe entrará em contato";
			form.reset()
		}).catch(error => {
			status.innerHTML = "Oops! Temos um problema!!!\nPor favor, tente novamente"
		});
	}
	form.addEventListener("submit", handleSubmit)

});

$(document).ready(function(){
	$('#textAreaCasosDeTestes').on('input', function(){
		$('#botaoEnviarFeature').prop('disabled', $(this).val().length < 100);
		$('#botaoEnviarFeature').css('display','block');
		$('#my-form-status').css('display','none');
	});
});

jQuery(function ($) {
	$("#botaoEnviarFeature").click(function() {
		$('#botaoEnviarFeature').css('display','none');
		$('#my-form-status').css('display','block');
	});
});

