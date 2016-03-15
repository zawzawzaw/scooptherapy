<div class="mobile-nav-wrapper">
	<ul class="mobile-nav">
		<li><a href="<?php echo View::url('/'); ?>#_about">About</a></li>
		<li>
			<a href="<?php echo View::url('/'); ?>#_flavours">Flavours</a>
			<ul class="child-nav">
				<li><a href="<?php echo View::url('flavour#_dairy'); ?>">Dairy</a></li>
				<li><a href="<?php echo View::url('flavour#_sorbet'); ?>">Sorbets</a></li>
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