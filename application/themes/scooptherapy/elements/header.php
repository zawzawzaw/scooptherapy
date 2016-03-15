<!doctype html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]>
<!--> 
<html class=""> 
<!--<![endif]-->
<head>
	<?php Loader::element('header_required') ?>

	<!-- Mobile Viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Force IE to render best possible view -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<!-- FAVICON -->
	<link rel="icon" href="<?= $view->getThemePath() ?>/images/icons/favicon.png" type="image/png" sizes="16x16">

	<!-- FONT -->
	<link rel="stylesheet" type="text/css" href="//cloud.typography.com/6413692/7252952/css/fonts.css" />

	<!-- CSS -->
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/css/vendors/bootstrap/bootstrap.min.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/css/vendors/bootstrap/bootstrap-theme.min.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/css/font-awesome.min.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/css/animate.min.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/css/style.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/css/mobile-style.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/js/plugins/jquery.scrollbar.css" />
	<link rel="stylesheet" href="<?= $view->getThemePath() ?>/js/plugins/slick.css" />

	<!-- JS -->
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/vendors/jquery/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/vendors/jquery/jquery.mobile.custom.min.js"></script>
	<?php if (!$c->isEditMode()): ?><?php endif; ?>	
	<!--<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/vendors/bootstrap/bootstrap.min.js"></script>-->	
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/jquery.disablescroll.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineMax.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/ScrollToPlugin.min.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/instafeed.min.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/twitterFetcher_v15.full.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/jquery.validate.min.js"></script>
	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/slick.min.js"></script>

	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/plugins/jquery.scrollbar.js"></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>	
	
	<script>
		var ThemePath = '<?= $view->getThemePath() ?>';
	</script>

	<script type="text/javascript" src="<?= $view->getThemePath() ?>/js/main.js"></script>
</head>
<body>
	
	<div id="page-wrapper" class="<?= $c->getPageWrapperClass() ?>">	