<?php
	error_reporting(0);

	require_once 'Mailchimp.php';
	$api = new Mailchimp('924df8c82b4c04616857d0231fcd3154-us12');
	$email = $_POST['email'];

	if( filter_var( $email ,FILTER_VALIDATE_EMAIL ) ) {
		$retval = $api->lists->subscribe( 'ce0f2fb358', array('email'=>$email) );
		
		if ($api->errorCode){
			echo "<p class='msg error'>Please try again.</p>";
		} else {
			echo "<p class='msg'>Thanks, please check your email to confirm subscription.</p>";
		}   	    
	} else {
		echo "<p class='msg error'>Email is invalid</p>";
	    die();
	}
?>