ccmValidateBlockForm = function() {
	
	if ($('#field_1_image_fID-fm-value').val() == '' || $('#field_1_image_fID-fm-value').val() == 0) {
		ccm_addError('Missing required image: Image');
	}

	if ($('#field_3_textbox_text').val() == '') {
		ccm_addError('Missing required text: Title');
	}

	if ($('#field_4_textarea_text').val() == '') {
		ccm_addError('Missing required text: Description');
	}


	return false;
}
