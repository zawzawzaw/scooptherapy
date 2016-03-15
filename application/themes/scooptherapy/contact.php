<?php $view->inc('elements/header.php'); ?>
	
	<?php $view->inc('elements/mobile-menu.php'); ?>

	<div id="content-wrapper">

		<?php $view->inc('elements/menu.php'); ?>

		<div id="main-content" class="contact">

			<div id="contact" class="content-1">
				<div class="heading">
					<h4>contact us</h4>
					<h2>Let’s get in touch!</h2>																
				</div>
				<div class="contact-form">
					<form id="contact-form" action="http://scooptherapy.com/php/contact.php" method="post">
						<div class="left-fields">
							<div class="field">
								<label for="enquiry_type">*Enquiry Type</label>
								<div class="dropdown">
									<select name="enquiry_type" id="" class="required">
										<option value="">Please select:</option>
										<option value="wholesale">Wholesale</option>
										<option value="events">Events</option>
										<option value="general">General</option>
										<option value="careers">Careers</option>
										<option value="collaborations">Collaborations</option>
									</select>
								</div>
							</div>
							<div class="field">
								<label for="enquiry_type">*Name</label>
								<input type="text" name="name" class="required">
							</div>
							<div class="field">
								<label for="email">*Email</label>
								<input type="text" name="email" class="required email">
							</div>
							<div class="field">
								<label for="contact_no">*Contact Number</label>
								<input type="text" name="contact_no" class="required">
							</div>
						</div>
						<div class="right-fields">
							<div class="field">
								<label for="event_date">Event Date</label>
								<div class="dropdown dropdown_short">
									<select id="event_date_day" name="event_date_day" class="dateRequired">
										<option value="">Day</option>										
										<option value="01">1</option>
										<option value="02">2</option>
										<option value="03">3</option>
										<option value="04">4</option>
										<option value="05">5</option>
										<option value="06">6</option>
										<option value="07">7</option>
										<option value="08">8</option>
										<option value="09">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</select>
								</div>
								<div class="dropdown dropdown_short">
									<select id="event_date_month" name="event_date_month" class="dateRequired">
										<option value="">Month</option>
										<option value="01">Jan</option>
										<option value="02">Feb</option>
										<option value="03">Mar</option>
										<option value="04">Apr</option>
										<option value="05">May</option>
										<option value="06">Jun</option>
										<option value="07">Jul</option>
										<option value="08">Aug</option>
										<option value="09">Sep</option>
										<option value="10">Oct</option>
										<option value="11">Nov</option>
										<option value="12">Dec</option>
									</select>
								</div>									
								<div class="dropdown dropdown_short">
									<select id="event_date_year" name="event_date_year" class="dateRequired">
										<option value="">Year</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select>
								</div>
							</div>
							<div class="field">
								<div class="child-field">
									<label for="event_location">Event Location</label>
									<input id="event_location" type="text" name="event_location">
								</div>
								<div class="child-field">
									<label for="postal_code">Postal Code</label>
									<input id="postal_code" type="text" name="postal_code">
								</div>
							</div>
							<div class="field">
								<label for="event_budget">Event Budget</label>
								<input type="text" id="event_budget" name="event_budget">
							</div>
							<div class="field">
								<label for="ice_cream_request">Ice Cream Request</label>
								<div class="dropdown">
									<select id="ice_cream_request" name="ice_cream_request" id="ice_cream_request">
										<option value="">Please Select The Product</option>
										<option value="Tubs - Mini">Tubs - Mini</option>
										<option value="Tubs - Pint">Tubs - Pint</option>
										<option value="Tubs - 2.5L">Tubs - 2.5L</option>
										<option value="Tubs - 5L">Tubs - 5L</option>
										<option value="Ice Cream Sandwiches">Ice Cream Sandwiches</option>
										<option value="Ice Cream Bar">Ice Cream Bar</option>
									</select>
								</div>
							</div>
						</div>
						<div class="common-fields">
							<div class="field">
								<label for="message">*Message</label>
								<textarea name="message" id="message" class="required" cols="30" rows="10"></textarea>											
							</div>
							<span class="response-msg msg"></span>
							<!-- <span class="notice">Please be as detailed as you can with your enquiry and our team will be in touch with you as soon as possible. Please call us at <a href="tel:6562583688">+65 6258 3688</a> if you do not hear from us within 48 hours.</span> -->

							<button class="cta submit submit-contact-form pull-right"><i class="mail"></i><span>Submit</span></button>
							<div class="clear"></div>
						</div>

					</form>
				</div>
			</div>

			<div id="locate" class="content-2">
				<div class="heading">
					<?php
					    $a = new Area('Locate Us Title');
					    $a->display($c);
					?>													
				</div>
				<div class="img-text-content">
					<div class="img-content">
						<div class="map-container">
							<div id="map" class="map"></div>
						</div>
					</div>
					<div class="text-content">
						<div class="each-col">
							<div class="info">
								<?php
								    $a = new Area('Locate Us Content 1');
								    $a->display($c);
								?>		
							</div>
							<div class="info second-info">
								<?php
								    $a = new Area('Locate Us Content 2');
								    $a->display($c);
								?>		
							</div>										
						</div>
						<div class="each-col ">
							<div class="info last-info">
								<?php
								    $a = new Area('Locate Us Content 3');
								    $a->display($c);
								?>										
							</div>	
						</div>						
					</div>
				</div>
			</div>
		</div>

	</div>

	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/jquery.validate.min.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/contact.js"></script>

<?php $view->inc('elements/footer.php'); ?>