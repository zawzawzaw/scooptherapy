<?php
	session_start();
	include("simple-php-captcha.php");
	$_SESSION['captcha'] = simple_php_captcha(array(
		'min_length' => 5,
		'max_length' => 5,
		'backgrounds' => array('white.png'),
		'shadow_offset_x' => -1,
		'shadow_offset_y' => 1
	));

	echo $_SESSION['captcha']['image_src'];
?>