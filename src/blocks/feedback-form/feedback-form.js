$(document).ready(function() {
    $('.feedback-form__form-control_select').select2({
    	placeholder: 'Выберете салон',
    	allowClear: true,
    	minimumResultsForSearch: Infinity,
    	theme: "default"
    });
});