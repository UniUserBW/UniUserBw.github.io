/*
	Robotic Modelling and Drone Skin Design - Example Website
	By Luke Emery | staffs.ac.uk
	Copyright (c) 2022 Luke Emery - All Rights Reserved
*/


/* JQuery shorthand for $(document).ready(function() { ... }); - i.e. invoke this function after DOM elements are ready */ 
$(function ()
{
	/* Local Consts */
	const blurTitle = "RMaDSD - Staffordshire University";
	const pageTitle = $("title").text();
	const scaleHeight = 0.35;
	const scaleWidth = 0.35;
	
	
	/* Utility Functions */
	function remove_current_nav_selection(buttonID)
	{
		$(buttonID).removeClass("nav-link-button-current-selection");
	}

	function set_current_nav_selection(buttonID)
	{
		$(buttonID).addClass("nav-link-button-current-selection");
	}

	function set_window_title(newTitle)
	{
		$("title").text(newTitle);
	}
	
	function tweak_viewer_dimensions()
	{
		/* Runtime tweaking of viewer dimensions */
		$("#demo-viewer-wrapper").find("iframe").attr("height", String(($(window).height() * scaleHeight)));
		$("#demo-viewer-wrapper").find("iframe").attr("width", String(($(window).width() * scaleWidth)));
	}
	
	
	/* Events - Anonymous functions invoking the desired behaviour*/ 
	$("#landing-wrapper").scrollex
	({
		enter: function() { set_current_nav_selection("#home-btn"); },
		leave: function() { remove_current_nav_selection("#home-btn"); }
	});

	$("#about-wrapper").scrollex
	({
		enter: function() { set_current_nav_selection("#about-btn"); },
		leave: function() { remove_current_nav_selection("#about-btn"); }
	});

	$("#demo-wrapper").scrollex
	({
		enter: function() { set_current_nav_selection("#demo-btn"); },
		leave: function() { remove_current_nav_selection("#demo-btn"); }
	});

	$("#contact-wrapper").scrollex
	({
		enter: function() { set_current_nav_selection("#contact-btn"); },
		leave: function() { remove_current_nav_selection("#contact-btn"); } 
	});
	
	$(window).blur(function ()
	{
		set_window_title(blurTitle);
	});

	$(window).focus(function ()
	{
		set_window_title(pageTitle);
	});
	
	$(window).resize(function ()
	{
		tweak_viewer_dimensions();
	});
	
	
	/* Run on load or refresh */
	tweak_viewer_dimensions();
});