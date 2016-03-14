$(document).ready(function(){			
	$('#menu-logo-wrapper').addClass('white-version');

	var form = $('#contact-form');
	$.validator.addMethod("CheckDates", function(i,element) 
	{
	      // function with date logic to return whether this is actually a valid date - you'll need to create this to return a true/false result
	   	return IsValidDate(element);

	}, "Please enter a correct date");

	form.validate({
		'messages': {
			'event_date_day': {
				'CheckDates': "Invalid Date"
			}
		}
	});

 	$('.submit-contact-form').on('click', function(e){
        e.preventDefault();

        var submitBtn = $(this);
        var icon = $(this).children('i');

        if(form.valid()) {

	        icon.addClass('fa fa-spinner').removeClass('mail');	  

	        submitBtn.attr("disabled", true);    

	        $.ajax({
	        	type: form.attr('method'),
		        url: form.attr('action'),
		        data: form.serialize()
	      	}).done(function(data) {
		        // Optionally alert the user of success here...
		        $('.response-msg').html(data)
		        icon.removeClass('fa fa-spinner').addClass('mail');

		        submitBtn.attr("disabled", false);

	      	}).fail(function(data) {
		        // Optionally alert the user of an error here...
		        console.log(data);
	      	});

      	}

    });

    $('select[name="enquiry_type"]').on('change', function(e){
    	var enquiry_type = $(this).val();
    	if(enquiry_type=='events') {
    		$('#event_date_day').rules('add', {
		        required: true,
		        CheckDates: true
		    });
		    $('#event_date_month').rules('add', {
		        required: true
		    });
		    $('#event_date_year').rules('add', {
		        required: true
		    });
		    $('#event_location').rules('add', {
		        required: true
		    });
		    $('#postal_code').rules('add', {
		        required: true
		    });
		    $('#ice_cream_request').rules('add', {
		        required: true
		    });
    	}else {
    		$('#event_date_day').rules('add', {
		        required: false,
		        CheckDates: false
		    });
		    $('#event_date_month').rules('add', {
		        required: false
		    });
		    $('#event_date_year').rules('add', {
		        required: false
		    });
		    $('#event_location').rules('add', {
		        required: false
		    });
		    $('#postal_code').rules('add', {
		        required: false
		    });
		    $('#ice_cream_request').rules('add', {
		        required: false
		    });
    	}
    });

    // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
	function validateThis(dateString)
	{
	    // First check for the pattern
	    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
	        return false;

	    // Parse the date parts to integers
	    var parts = dateString.split("/");
	    var day = parseInt(parts[1], 10);
	    var month = parseInt(parts[0], 10);
	    var year = parseInt(parts[2], 10);

	    // Check the ranges of month and year
	    if(year < 1000 || year > 3000 || month == 0 || month > 12)
	        return false;

	    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	    // Adjust for leap years
	    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
	        monthLength[1] = 29;

	    // Check the range of the day
	    return day > 0 && day <= monthLength[month - 1];
	};

    function IsValidDate(_element)
	{
	    // just a hack function to take an element, get the drop down fields within it with a particular class name ending with day /month/ year and perform a basic date time test
	    // var $dateFields =  $("#" + _element.id).parent();

	    day = $("select[name='event_date_day']");
	    month = $("select[name='event_date_month']");
	    year = $("select[name='event_date_year']");

	    var newDate = month.val() + "/" + day.val() + "/" + year.val();

	    // var scratch = new Date( $newDate );

	    // if (scratch.toString() == "NaN" || scratch.toString() == "Invalid Date") 
	    // {
	    //     return false;
	    // } else {
	    //     return true;
	    // }

	    console.log(newDate)

	    return validateThis(newDate);
	}



});