<?php 
session_start();
// require_once "recaptchalib.php";
require 'PHPMailer/PHPMailerAutoload.php';

// $secret = "6LdQuxUTAAAAAE4GD5dqu3FCqbKH88NFBN-ggHdE";
// $response = null;
// $reCaptcha = new ReCaptcha($secret);

$responsed_code = $_SESSION['captcha']['code'];

$form_validation_error_msg = array();
$form_validation_errors = false;

function filter_data($data) {
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$name = filter_data($_POST['name']);
	$email = filter_data($_POST['email']);
	$recipient = filter_data($_POST['recipient']);
	$comments = filter_data($_POST['comments']);
	$company = filter_data($_POST['company']);
	$phone = filter_data($_POST['phone']);
	$country = filter_data($_POST['country']);
	// $g_recaptcha_response = filter_data($_POST['g-recaptcha-response']);
	// $captcha = filter_data($_POST['captcha']);

	if(empty($name)) {
		$form_validation_error_msg[] = "<p>Name is required</p>";
		$form_validation_errors = true;	
	}

	if(empty($recipient)) {
		$form_validation_error_msg[] = "<p>Recipient is required</p>";
		$form_validation_errors = true;	
	}

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$form_validation_error_msg[] = "<p>Email is not valid</p>";
		$form_validation_errors = true;
	}

	if(empty($comments)) {
		$form_validation_error_msg[] = "<p>Comments is required</p>";
		$form_validation_errors = true;	
	}

	if(empty($phone)) {
		$form_validation_error_msg[] = "<p>Phone no. is required</p>";
		$form_validation_errors = true;	
	}

	if($form_validation_errors==false) {
		// $response = $reCaptcha->verifyResponse($_SERVER["REMOTE_ADDR"], $g_recaptcha_response);

		// if ($captcha != null && $captcha == $responsed_code) {
			// echo 'submitting the form' . $name . '-' . $email . '-' . $recipient . '-' . $comments . '-' . $company . '-' . $phone . '-' . $country . '-' . $g_recaptcha_response;

			$mail = new PHPMailer;

			//$mail->SMTPDebug = 3;                               // Enable verbose debug output

			// $mail->isSMTP();                                      // Set mailer to use SMTP
			// $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
			// $mail->SMTPAuth = true;                               // Enable SMTP authentication
			// $mail->Username = 'user@example.com';                 // SMTP username
			// $mail->Password = 'secret';                           // SMTP password
			// $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			// $mail->Port = 587;                                    // TCP port to connect to

			$mail->setFrom($email, $name);
			$mail->addAddress($recipient, $recipient);     // Add a recipient
			$mail->addReplyTo($email, $name);
			$mail->addCC('zaw@manic.com.sg');

			$mail->isHTML(true);                                  // Set email format to HTML

			$mail->Subject = 'Comment from Blink DG website';
			$mail->Body    = 'Hi, <br><br> We just got a comment on Blink DG website and here are details of comment: <p>Name: '.$name.' </p><p>Email: '.$email.' </p><p>Comment: '.$comments.' </p><p>Company: '.$company.' </p><p>Phone: '.$phone.' </p><p>Country: '.$country.' </p>';
			$mail->AltBody = '';

			if(!$mail->send()) {
			    echo 'Message could not be sent.';
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			} else {
			    echo 'Message has been sent to the recipient.';
			}
		// }else {
		// 	echo 'Wrong captcha response!';
		// }
	}else {
		foreach ($form_validation_error_msg as $key => $error_msg) {
			echo $error_msg;
		}
	}

}
?>