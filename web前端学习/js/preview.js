$(function(){
	$(".zoom").hc_zoom();
	
	$.ajax({
	  type: "GET",
	  dataType: "json",
	  url: "js/books.json",
	  success: function(data){
	  	console.log(data.books[0].name)
	  }
	});

})
