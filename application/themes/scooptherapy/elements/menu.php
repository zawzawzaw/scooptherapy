<div id="menu-logo-wrapper" class="white-version animated slideInDown">
	
	<div class="header-bar">		
		<div class="pull-left">
			<div class="toggle-menu-container">					
				<div class="toggle-menu">
					<a href="javascript:void(0)"> 
						<span class="nav-bar"></span> 
						<span class="nav-bar"></span> 
						<span class="nav-bar"></span> 
					</a> 
				</div>
			</div>
			<div class="main-nav-wrapper">
				<ul class="main-nav show-nav">
					<li><a href="<?php echo View::url('/'); ?>#_about">About</a></li>
					<li>
						<a href="<?php echo View::url('/'); ?>#_flavours">Flavours</a>
						<ul class="child-nav">
							<li><a href="<?php echo View::url('flavour#_dairy'); ?>">Dairy</a></li>
							<li><a href="<?php echo View::url('flavour#_sorbets'); ?>">Sorbets</a></li>
							<li><a href="<?php echo View::url('flavour#_alcoholic'); ?>">Alcoholic</a></li>
							<li><a href="<?php echo View::url('flavour#_seasonal'); ?>">Seasonal</a></li>
							<li><a href="<?php echo View::url('flavour#_desserts'); ?>">Desserts</a></li>
						</ul>						
					</li>
					<li><a href="<?php echo View::url('/'); ?>#_wholesale">Wholesale</a></li>
					<li><a href="<?php echo View::url('/'); ?>#_news">News</a></li>
					<li><a href="<?php echo View::url('/'); ?>#_locate">Locate</a></li>					
					<li><a href="<?php echo View::url('contact'); ?>">Contact</a></li>					
				</ul>				
			</div>
		</div>
		<a href="<?php echo View::url('/'); ?>" class="logo pull-right"><img src="<?= $view->getThemePath() ?>/images/logos/main-logo.png" alt=""></a>				
	</div>	

</div>