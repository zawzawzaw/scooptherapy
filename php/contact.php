<?php 
session_start();
require 'PHPMailer/PHPMailerAutoload.php';

$form_validation_error_msg = array();
$form_validation_errors = false;

function filter_data($data) {
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$enquiry_type = filter_data($_POST['enquiry_type']);
	$name = filter_data($_POST['name']);
	$email = filter_data($_POST['email']);
	$contact_no = filter_data($_POST['contact_no']);
	$event_date_day = filter_data($_POST['event_date_day']);
	$event_date_month = filter_data($_POST['event_date_month']);
	$event_date_year = filter_data($_POST['event_date_year']);
	$event_location = filter_data($_POST['event_location']);
	$postal_code = filter_data($_POST['postal_code']);
	$event_budget = filter_data($_POST['event_budget']);
	$ice_cream_request = filter_data($_POST['ice_cream_request']);
	$message = filter_data($_POST['message']);	

	if(empty($enquiry_type)) {
		$form_validation_error_msg[] = "<p>Enquiry type is required</p>";
		$form_validation_errors = true;	
	}

	if(empty($name)) {
		$form_validation_error_msg[] = "<p>Name is required</p>";
		$form_validation_errors = true;	
	}

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$form_validation_error_msg[] = "<p>Email is not valid</p>";
		$form_validation_errors = true;
	}

	if(empty($contact_no)) {
		$form_validation_error_msg[] = "<p>Contact no is required</p>";
		$form_validation_errors = true;	
	}

	if(empty($message)) {
		$form_validation_error_msg[] = "<p>Message is required</p>";
		$form_validation_errors = true;	
	}

	if(empty($enquiry_type) && $enquiry_type=='events') {

		if(empty($event_date_day) || empty($event_date_month) || empty($event_date_year)) {
			$form_validation_error_msg[] = "<p>Event date is required</p>";
			$form_validation_errors = true;	
		}
		if(empty($event_location)) {
			$form_validation_error_msg[] = "<p>Event location is required</p>";
			$form_validation_errors = true;		
		}
		if(empty($postal_code)) {
			$form_validation_error_msg[] = "<p>Post code is required</p>";
			$form_validation_errors = true;		
		}
		if(empty($ice_cream_request)) {
			$form_validation_error_msg[] = "<p>Ice cream request is required</p>";
			$form_validation_errors = true;		
		}

	}

	if($form_validation_errors==false) {
		
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
		$mail->addAddress('zaw@manic.com.sg', 'Zaw');     // Add a recipient
		$mail->addReplyTo($email, $name);

		$mail->isHTML(true);                                  // Set email format to HTML

		$mail->Subject = 'Comment from Scoop Therapy website';
		$body    = 'Hi, <br><br> We just got a message on Scoop Therapy website and here is details of message: <p>Enquiry Type: '.$enquiry_type.' </p><p>Name: '.$name.' </p><p>Email: '.$email.' </p><p>Contact No: '.$contact_no.' </p><p>Message: '.$message;

		$body .= '<p>Event Date: '.$event_date_day.'-'.$event_date_month.'-'.$event_date_year.' (DD-MM-YYYY)</p><p>Postal Code: '.$postal_code.'</p><p>Ice Cream Request: '.$ice_cream_request.'</p>';

		$mail->Body    = $body;

		$mail->AltBody = '';

		if(!$mail->send()) {
		    echo 'Message could not be sent.';
		    echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
		    echo 'Thank you for getting in touch! Our team will be in contact within 48 hours to assist you. Good day!';
		}

	}else {
		foreach ($form_validation_error_msg as $key => $error_msg) {
			echo $error_msg;
		}
	}

}
?>