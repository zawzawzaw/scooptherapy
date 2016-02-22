<?php defined('C5_EXECUTE') or die("Access Denied.");
$al = Loader::helper('concrete/asset_library');
?>

<style type="text/css" media="screen">
	.ccm-block-field-group h2 { margin-bottom: 5px; }
	.ccm-block-field-group td { vertical-align: middle; }
</style>

<div class="ccm-block-field-group">
	<h2>Image</h2>
	<?php echo $al->image('field_1_image_fID', 'field_1_image_fID', 'Choose Image', $field_1_image); ?>
</div>

<div class="ccm-block-field-group">
	<h2>Tag</h2>
	<?php
	$options = array(
		'0' => '--Choose One--',
		'1' => 'yes',
		'2' => 'no',
	);
	echo $form->select('field_2_select_value', $options, $field_2_select_value);
	?>
</div>

<div class="ccm-block-field-group">
	<h2>Title</h2>
	<?php echo $form->text('field_3_textbox_text', $field_3_textbox_text, array('style' => 'width: 95%;')); ?>
</div>

<div class="ccm-block-field-group">
	<h2>Description</h2>
	<textarea id="field_4_textarea_text" name="field_4_textarea_text" rows="5" style="width: 95%;"><?php echo $field_4_textarea_text; ?></textarea>
</div>


