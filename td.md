mobile
- to standardize images size (done)
- divider 1/3 the height (done)
- image size to follow first image (done)
- menu top and bottom margin (done)
- adding dropdown (done)
- drop shadow for menu (done)
- section spacing (done)
- line between


tablet/desktop
- image height to be the same as text
- flavour page no background color for flavours but on desserts - follow by wholesales & events 

ICE CREAM FLAVOURS

DAIRY:
Apple Pie
Banana Malt 
Black Sesame
Blueberry Yoghurt
Coconut 
Dark Chocolate
Donut
Hazelnut Cocoa
Honey Lavender
Honeycomb
Kinako
Lemon Meringue
London Fog
Maple Bacon
Maple Pecan
Matcha Vanilla 
Mint Cookies
Orange Chocolate 
Peanut Butter & Jam
Peanut Butter Crunch
Pistachio
Red Velvet
Roasted Almond Latte 
Salted Caramel
Salted Egg Yolk
Strawberry Cheesecake
Vanilla Bean
White Chocolate Ginger
Yuan Yang


SORBETS:
Lemon Poppyseed
Mango Passionfruit
Raspberry Sorbet 
White Peach Sorbet 


ALCOHOLIC:
Brandy Cherry 
Butter Beer
Rum & Raisin
Whiskey Hazelnut


SEASONAL:
Brandy Fruitcake
Champagne and Peach (Champagne & Peach)
Peppermint Candy Cane
Pineapple Tart
Pine Nut
Pistachio Cranberry
Red Wine Dark Chocolate

<div class="hidden-xs hidden-sm hidden-md">
	<?php   foreach ($b as $i => $block):
		   		$fileID = $block->getInstance()->getFileID();
		   		$title = $block->getInstance()->getTitle();
		   		$alttext = $block->getInstance()->getAltText();
		      	$image = $block->getInstance()->getImageObject($fileID); ?>

		      	<?php if($i==0): ?>
		      		<div class="each-row"><!-- star first row -->
		      	<?php elseif(($i % 6) == 0): ?>
		      		</div><!-- end each-row after reaching 6 -->
		      		<div class="each-row"><!-- start new row -->
		      	<?php endif; ?>
						<div class="<?= $i; ?> each-flavour">
							<img src="<?= $image->src; ?>" alt="">
							<h4><span><?= $title; ?></span><?php if($alttext): ?><i class="tag"></i><?php endif; ?></h4>
						</div>								
	<?php  	endforeach;	?>
	 	  			</div><!-- end each-row if i ended without reaching new row -->
</div>


<div id="seasonal" class="content-4">
	<div class="img-text-content">
		<div class="sub-heading">
			<?php
			    $a = new Area('Flavour 4 Title');							     	
			    $a->display($c);
			?>							
		</div>
		<?php
		    $a = new Area('Flavours 4 Content');
		    $a->setBlockWrapperStart('<div class="each-flavour">');
			$a->setBlockWrapperEnd('</div>');

		    if ($c->isEditMode()):
			   $a->display($c);								
			else:
			   	$b = $a->getAreaBlocksArray($c);
			   	foreach ($b as $i => $block):
			   		$fileID = $block->getInstance()->getFileID();
			   		$title = $block->getInstance()->getTitle();
			   		$alttext = $block->getInstance()->getAltText();
			      	$image = $block->getInstance()->getImageObject($fileID); ?>
			      	<?php if($i==0): ?>
			      		<div class="each-row"><!-- star first row -->
			      	<?php elseif(($i % 6) == 0): ?>
			      		</div><!-- end each-row after reaching 6 -->
			      		<div class="each-row"><!-- start new row -->
			      	<?php endif; ?>
							<div class="<?= $i; ?> each-flavour">
								<img src="<?= $image->src; ?>" alt="">
								<h4><span><?= $title; ?></span><?php if($alttext): ?><i class="tag"></i><?php endif; ?></h4>
							</div>
		<?php
			   	endforeach;
		?>
			 	  		</div><!-- end each-row if i ended without reaching new row -->
		<?php
			endif;
		?>									
	</div>
</div>