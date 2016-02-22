<?php defined('C5_EXECUTE') or die("Access Denied.");
?>
<?php if (!empty($field_1_image)): ?>
	<div class="content-divider" style="<?php echo 'background-image:url(' . $field_1_image->src . ')!important;' ?>"></div>
	<!-- <img src="<?php echo $field_1_image->src; ?>" width="<?php echo $field_1_image->width; ?>" height="<?php echo $field_1_image->height; ?>" alt="" /> -->
<?php endif; ?>
