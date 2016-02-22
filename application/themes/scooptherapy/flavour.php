<?php $view->inc('elements/header.php'); ?>

	<div id="content-wrapper">

		<?php $view->inc('elements/menu.php'); ?>

		<div id="main-content" class="flavour">

			<div id="dairy" class="content-1">
				<div class="heading">
					<?php
					    $a = new Area('Flavours Title');							     	
					    $a->display($c);
					?>
					<!-- <h4>Our Flavours</h4>
					<h2>Do yourself a flavour.</h2> -->
				</div>

				<div class="img-text-content">
					<div class="sub-heading">
						<?php
						    $a = new Area('Flavour 1 Title');							     	
						    $a->display($c);
						?>
					</div>
					
					<?php
					    $a = new Area('Flavours 1 Content 1');
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

			<div id="sorbet" class="content-2">
				<div class="img-text-content">
					<div class="sub-heading">
						<?php
						    $a = new Area('Flavour 2 Title');							     	
						    $a->display($c);
						?>
					</div>
					<?php
					    $a = new Area('Flavours 2 Content');
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

			<div id="alcoholic" class="content-3">
				<div class="img-text-content">
					<div class="sub-heading">
						<?php
						    $a = new Area('Flavour 3 Title');							     	
						    $a->display($c);
						?>
						<!-- <h2>Alcoholic</h2> -->
					</div>
					<?php
					    $a = new Area('Flavours 3 Content');
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

			<div id="desserts-menu" class="content-5">
				<div class="img-text-content">
					<div class="sub-heading">
						<?php
						    $a = new Area('Flavour 5 Title');							     	
						    $a->display($c);
						?>
						<!-- <h2>Desserts Menu</h2> -->
					</div>
					<div class="each-row">
					<?php
					    $a = new Area('Flavours 5 Content');
					    $a->setBlockWrapperStart('<div class="each-flavour">');
						$a->setBlockWrapperEnd('</div>');
						$a->display($c);	
					?>						    
					</div>
				</div>
			</div>
			
			<?php
			    $a = new Area('Image Divider');						    
			    $a->display($c);
			?>

			<div id="locate" class="content-7">
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

	<script type="text/javascript" src="<?= $view->getThemePath() ?>js/flavour.js"></script>

<?php $view->inc('elements/footer.php'); ?>