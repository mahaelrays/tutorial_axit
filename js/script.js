$(function() {
	'use strict';
	$(window).scroll(function(){
		var navbar = $('.navbar');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled')){
				navbar.addClass('scrolled navbar-fixed-top');
			}			
		}else{
			navbar.removeClass('scrolled navbar-fixed-top');
		}
	});
	
	
	
	$('.tabs ul li').click(function(){
		// Add Class Active to clicked Tab
		$(this).addClass('active').siblings().removeClass('active');
		
		// Hide all Divs
		$('.tabs .tab-content > div').hide();
		
		// Show div connected to this Tab
		$($(this).data('class')).show();
	});
	// Make Smooth Scroll to Div
	$(".navbar ul li a").click(function(){
		console.log("click");
		console.log($(this).data("value"));
		$("html , body").animate({
			
			scrollTop : $($(this).data("value")).offset().top
		},2000);
	});
	
	//Trigger Nice Scroll
	 $("body").niceScroll({
		cursorcolor: "#FF8B38",
		cursorwidth: "8px", // cursor width in pixel (you can also write "5px") 
		cursorborder: "1px solid #FF8B38",
		cursorborderradius : 0
	 });
	
});