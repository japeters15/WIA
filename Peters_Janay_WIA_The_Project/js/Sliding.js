$(function() { 


	$("#slideup").click(function(){
		
			$("#theDiv2").slideUp("normal");
		
		});
		
		
	$("#slidedown").click(function(){
		
			$("#theDiv2").slideDown(1000);
		
		});	
	
	$("#toggle").click(function(){
		
			$("#theDiv2").slideToggle(1500);
		
		});		

});

