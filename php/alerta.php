<?php

if (isset($_POST["submit"])){

	$nome=$_POST["nome"];
	$email=$_POST["email"];
	$msg=$_POST["mensagem"];

	echo "<p>Olá, ".$nome."</p>"; echo "<p>Seu email é: ".$email."</p>";

	echo "<p>Sua mensagem é:<br/>".$msg."</p>";
}

?>