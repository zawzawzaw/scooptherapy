<div id="carousel" class="slider-wrapper carousel carousel-fade slide" data-ride="carousel">

	<!-- Wrapper for slides -->
	<div class="home-carousel carousel-inner" role="listbox">
		<?php 
		$backgroundImage = $c->getAttribute('slider_image');
		if ($backgroundImage) {
		    $backgroundImageURL = $backgroundImage->getURL();		    
		}
		?>
		<div class="item bg bg1 active" style="<?php echo 'background-image:url(' . $backgroundImageURL . ')!important;' ?>" data-link-to="profile.html">				
			<div class="carousel-caption">
				<div class="caption">
					<div class="caption-text">
						<?php
						    $a = new Area('Slider Caption');
						    $a->display($c);
						?>
					</div>				
				</div>
			</div>				
		</div>		
	</div>

	<a href="#main-content" class="scroll-to-content">	
		<div class="arrow-big"></div>		
	</a>

</div>