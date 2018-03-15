$(document).ready(function() {
	var placeholder =  
		$(".feedback-form__form-control_select").data("placeholder");

    $(".feedback-form__form-control_select").select2({
    	placeholder: placeholder,
    	allowClear: true,
    	minimumResultsForSearch: Infinity,
    	theme: "default"
    });
});