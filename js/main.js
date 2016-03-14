(function($) {
$(document).ready(function() {
    
    
    
var nav_container = $(".header-container");
var nav = $("#nav");
var navigation_links = $("#nav ul li a");
var sections = $("section");

var top_spacing = 0;
var waypoint_offset = -50;

nav_container.waypoint({
	handler: function(event, direction) {
		console.log(direction);
		if (direction == 'down') {
			nav_container.css({ 'height':nav.outerHeight(), 'position':'', 'bottom':''  });
			nav_container.stop()
                .addClass("sticky")
                .css("top",-nav.outerHeight())
                .animate({"top":top_spacing});
			
		} else {
			nav_container.css({ 'top':'', 'height':'' });
			nav_container.stop()
                .removeClass("sticky")
                .css({'position':'absolute', "bottom":nav.outerHeight()+waypoint_offset})
                .animate({"bottom":"20"});
		}
		
	},
	offset: function() {
		return -nav.outerHeight()-waypoint_offset;
	}
});

sections.waypoint({
	handler: function(event, direction) {
	
		var active_section;
		active_section = $(this);
		if (direction === "up") active_section = active_section.prev();

		var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
		navigation_links.removeClass("selected");
		active_link.addClass("selected");

	},
	offset: '50%'
})


navigation_links.click( function(event) {

	$.scrollTo(
		$(this).attr("href"),
		{
			duration: 1000,
			offset: { 'left':0, 'top':-0.08*$(window).height() }
		}
	);
		event.preventDefault();
});



$('#slides').superslides({
	play: 5000,
	animation_speed: 2000,
	animation: 'fade',
	pagination: false
});



var weddingDate = new Date("Oct 15, 2016 11:00:00")
$(".countdown").countdown({
	until: weddingDate,
	format: 'ODHMS'
});




});

})(jQuery);