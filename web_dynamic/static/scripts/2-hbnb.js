//Manipulates DOM attributes for amenities.
$(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
	if (data['status'] === 'OK') {
	    $('DIV#api_status').addClass('available');
	} else {
	    $('DIV#api_status').removeClass('available');
	}
    });
    let list = [];
    $('input').change(function(){
	if (this.checked){
	    list.push($(this).attr('data-name'));
	}else {
	    list = list.filter(e => e !== $(this).attr('data-name'));
	}

	let checked_amenities = "";
	let delimeter = "";
	for (i = 0; i < list.length; i++){
	    checked_amenities += delimeter;
	    checked_amenities += list[i];
	    delimeter = ", ";
	}
	$('div.amenities h4').text(checked_amenities);
    });

});
