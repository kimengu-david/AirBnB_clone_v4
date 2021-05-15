//Manipulates DOM attributes for amenities.
$(function () {
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
