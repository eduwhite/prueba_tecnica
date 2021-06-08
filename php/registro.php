<?php
	$msg = "";

	if(isset($_POST['nombre'])){

		$msg = "El servidor devuelve un codigo 200";

	}else{

		$msg = "El servidor devuelve un codigo distinto a 200";

	}

	echo $msg;
?>