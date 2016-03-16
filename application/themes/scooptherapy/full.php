<?php $view->inc('elements/header.php'); ?>

		<?php $view->inc('elements/mobile-menu.php'); ?>

		<?php $view->inc('elements/slider.php'); ?>

		<div id="content-wrapper">
		
			<?php $view->inc('elements/menu.php'); ?>

			<div id="main-content" class="home">
				
				<div id="about" class="content-1">
					<div class="img-content">
						<?php
						    $a = new Area('About Image');
						    $a->display($c);
						?>						
					</div>
					<div class="text-content">
						<div class="each-text-content">
							<?php
							    $a = new Area('About Title');						    
							    $a->display($c);
							?>
						</div>				 						
						<div class="each-text-content">
							<?php
							    $a = new Area('About Content 1');						    
							    $a->display($c);
							?>							
						</div>

						<div class="each-text-content">
							<?php
							    $a = new Area('About Content 2');						    
							    $a->display($c);
							?>							
						</div>

						<div class="each-text-content">
							<?php
							    $a = new Area('About Content 3');						    
							    $a->display($c);
							?>
						</div>
					</div>
				</div>

				<div id="flavours" class="content-2">
					<div class="heading">
						<?php
						    $a = new Area('Flavours Title');						    
						    $a->display($c);
						?>
					</div>

					<div class="img-text-content">
						<div class="flavour-slick">
							<?php
							    $a = new Area('Flavours Content');
							    $a->setBlockWrapperStart('<div class="each-flavour">');
								$a->setBlockWrapperEnd('</div>');
							    $a->display($c);
							?>
						</div>
					</div>
				</div>

				<div id="wholesale" class="content-extra">

					<div class="img-text-content">
						<div class="img-content visible-xs visible-sm visible-md">
							<img src="<?= $view->getThemePath() ?>/images/content/contact-us-content.png" class="img-responsive">
						</div>
						<div class="text-content">
							<?php
							    $a = new Area('Contact Us');							    
							    $a->display($c);
							?>							
						</div>
						<div class="img-content hidden-xs hidden-sm hidden-md">
							<?php
							    $a = new Area('Contact Us Image');							    
							    $a->display($c);
							?>
						</div>
					</div>
					<div class="img-text-content-2">
						<div class="img-content">
							<?php
							    $a = new Area('Event Image');							    
							    $a->display($c);
							?>
						</div>
						<div class="text-content">
							<?php
							    $a = new Area('Event Title');							    
							    $a->display($c);
							?>
							<div class="each-col">
							<?php
							    $a = new Area('Event Content 1');	
							    $a->display($c);
							?>
							</div>
							<div class="each-col">
							<?php
							    $a = new Area('Event Content 2');							     	
							    $a->display($c);
							?>
							</div>
							<?php
							    $a = new Area('Event CTA');							     	
							    $a->display($c);
							?>							
						</div>
					</div>

				</div>

				<div id="news" class="content-3">

					<div class="heading">
						<?php
						    $a = new Area('News Title');							     	
						    $a->display($c);
						?>
					</div>

					<div class="img-text-content">
						<div class="instagram">
							<div class="instagram-header">
								<h4 class="pull-left">Instagram</h4>
								<a class="pull-right" href="https://www.instagram.com/explore/tags/scooptherapy/" target="_blank"><i class="fa fa-plus"></i> Follow</a>
								<div class="clear"></div>
							</div>
							
							<div class="instagram-content">
								<ul id="instafeed"></ul>
								<img src="<?= $view->getThemePath() ?>/images/content/instagram-1.png" alt="" id="insta_big">
							</div>
						</div>
						<div class="twitter">
							<div class="twitter-header">
								<h4 class="pull-left">Tweets</h4>
								<a class="pull-right" href="https://twitter.com/GTCoffee" target="_blank"><i class="fa fa-twitter"></i> Follow</a>
								<div class="clear"></div>
							</div>
							
							<div id="example1" class="twitter-content scrollbar-inner scrollbar-dynamic"></div>
																											
						</div>
					</div>

				</div>

				<?php
				    $a = new Area('Image Divider');						    
				    $a->display($c);
				?>

				<!-- <div class="content-4">				
				</div> -->

				<div id="locate" class="content-5">

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
									<!-- <h4>Scoop Therapy</h4>
									<p>11 East Coast Road, The Odeon Katong Singapore S428722</p>
									<ul class="contact">
										<li><a href="tel:65 6258 3688"><i class="phone"></i>+65 6258 3688</a></li>
										<li><a href="mailto:events@gtcoffee.com"><i class="mail"></i>events@gtcoffee.com</a></li>
									</ul> -->
								</div>
								<div class="info second-info">
									<?php
									    $a = new Area('Locate Us Content 2');
									    $a->display($c);
									?>		
									<!-- <h4>Opening Hours</h4>										
									<ul class="opening-hours">
										<li>
											<h6>scoop therapy:</h6>
											<p>Monday — Sunday: 4pm — 12am</p>
										</li>												
										<li>
											<h6>COFFEE & BAKE BAR:</h6>
											<p>Saturday — Sunday: 10am — 2pm</p>
										</li>
									</ul> -->
								</div>		
								
							</div>
							<div class="each-col ">
								<div class="info last-info">
									<?php
									    $a = new Area('Locate Us Content 3');
									    $a->display($c);
									?>	
									<!-- <h4>Get in touch</h4>
									<p>For general enquiries, careers, collaborations or anything at all regarding our ice cream!</p>										
									<p>Please feel free to email us and do be as detailed as you can with your enquiry. We’ll contact you within 48 hours to assist.</p>								 -->		
								</div>	
							</div>						
						</div>
					</div>

				</div>				
				
			</div><!-- end container -->

		</div><!-- end content-wrapper -->

		<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/home.js"></script>

<?php $view->inc('elements/footer.php'); ?>