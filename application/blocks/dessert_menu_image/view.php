<?php defined('C5_EXECUTE') or die("Access Denied.");
?>

<?php if (!empty($field_1_image)): ?>
	<img src="<?php echo $field_1_image->src; ?>" width="<?php echo $field_1_image->width; ?>" height="<?php echo $field_1_image->height; ?>" alt="" />
<?php endif; ?>

<?php if (!empty($field_3_textbox_text)): ?>
	<h4><span><?php echo htmlentities($field_3_textbox_text, ENT_QUOTES, APP_CHARSET); ?><?php if ($field_2_select_value == 1): ?><i class="tag"></i><?php endif; ?></span></h4>
<?php endif; ?>

<?php if (!empty($field_4_textarea_text)): ?>
	<p><?php echo nl2br(htmlentities($field_4_textarea_text, ENT_QUOTES, APP_CHARSET)); ?></p>
<?php endif; ?>


