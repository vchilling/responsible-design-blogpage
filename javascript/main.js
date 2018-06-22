window.onload = function(){ 
		//Get submit button
		var submitbutton = document.getElementById("tfq");
		//Add listener to submit button	
		if(submitbutton.addEventListener){
			submitbutton.addEventListener("click", function() {
				if (submitbutton.value == 'search'){
					submitbutton.value = ' ';
				}
			});
		}
	}	
  	$( document ).ready(function() {
    	$('.image-container').slick({
        prevArrow: $('#left-arrow'),
        nextArrow: $('#right-arrow'),
      });      
  }); 


