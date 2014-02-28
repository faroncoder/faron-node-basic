var divnum = 0;  $('<div>').attr('id','nest')
	.prependTo(document.body);
	

	function faronAjaxer(http, ajaxurl, dataquery, head, success){

var senddata = "";

	if (http === "p"){
		var http = 'POST';
		var senddata = dataquery;
	}
	if (http === "g"){
		var http = 'GET';
	}
	if ( !head ){
		var head='';
} else {
		var head = '<strong>'+head+'</strong>';
		}


	$.ajax({
	url: './jsc/sql/'+ajaxurl+'',
	//url: './'+ajaxurl+'',
	type: http,
	data: senddata,
	success: function(data){
			$('<div>')
			.attr('id','div'+divnum)
			.html(head)
			.append($('<div>').html(data))
			.append( $('<hr>') )
			.appendTo('#nest');
			divnum++;
		} //end of success
}); //end of ajax
	}


function formstrap(pHolder){

var num=0;
var namebox = '';

$('<form>')
	.attr('id','formstrap'+num )
	.append(
		$('<input type="input">')
			.attr('id','create')
			.attr('placeholder', pHolder )
		)
		.append(
			$('<button>')
			.attr('id','cohort')
			.text('submit')
			.attr('value','sql'+num)
		)
		.appendTo(document.body);

$('#formstrap'+num).submit(function(){
    var data = {};
    //Gathering the Data
    $.each(this.elements, function (i, v) {
        var input = $(v);
   if (input.is(':checkbox')) {
   if (input.is(':checked')) {
   data[input.attr("id")] = input.val();
 	}
} else {
  data[input.attr("id")] = input.val();
	}
}); // end of $.each

faronAjaxer('p','return.echoPost.php', data, 'Faron Ajaxer Test', '');

		$('input').val('');
		return false;
});

} 

