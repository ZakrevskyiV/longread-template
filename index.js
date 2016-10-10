$(document).ready(documentReady);
$(document).ready(setParameters);
$(window).resize(setParameters);
$(window).scroll(scroll);

function documentReady () {	
    setTimeout(function(){$("#loader-wrapper").addClass("loaded")}, 100);
	sections = $("section");    
	arrow_offset = $(sections[1]).offset().top - 65; // set offset from second (after intro) section
	$("body, .section-intro__title, .section-intro__author, .section-intro__border, .section-intro__arrow, .blockquote-left, .blockquote-border").addClass("in-view"); // add animations after DOM load	
	setTimeout(function() {
		$(".section-intro__arrow").addClass("bounce");	
	},2000); // set arrow bounce
	$(".section-intro__arrow").click(function() {
        $('html, body').stop().animate({
            scrollTop: arrow_offset
        }, 1300); // end of animate for scroll to first (index) section
    setTimeout(function(){
    	$("header").addClass("scrolled")}, 1000);
    }); // end of click on arrow    
    $(".back-to-top").click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500); // end of animate for scroll to the beginning
    }); //end of click
    footer_height = $("footer").outerHeight(true) + 75; // get footer height (with padding+margin);
    $(sections).last().css("margin-bottom", footer_height); // setting last section margin for footer scroll correctly
    $(".section__image-wrapper img").click(function(){
        ww = $(window).width();
        //console.log("Window width:", ww);
        wh = $(window).height();
        //console.log("Window height:", wh);
        var src = $(this).attr("src"); // get clicked src
        //console.log("Image src: ", src);
        $("#image-clicked img").attr("src", src); // set new src for an image
        setTimeout(function(){
            image_width = $("#image-clicked").width();
            console.log("Image width:", image_width);
            image_height = $("#image-clicked").height();
            console.log("Image height:", image_height);
            image_clicked_top = (wh - image_height) / 2;
            console.log("Image top:", image_clicked_top);
            image_clicked_left = (ww - image_width) / 2 ;
            console.log("Image left:", image_clicked_left);
            $("#image-clicked").css({"top": image_clicked_top, "left": image_clicked_left}); // set pop-up image to center
            $("#image-clicked").fadeIn(300);
        },300); // end of settimeout to invoke image change properly 	
    	$("#overlay").fadeIn(500);        
    }); // end of click on image
    $("#overlay, #image-clicked").click(function(){
    	$("#overlay").fadeOut(500);
        $("#image-clicked").fadeOut(500);
    }); // end of click on overlay
} // end of documentReady function

function scroll () {
	sections = $("section");
	arrow_offset = $(sections[1]).offset().top - 65; // get offset from first section
	if ($(window).scrollTop() < 1) {
        $("header").removeClass("scrolled"); // if close to top make header transparent
	} else if ($(window).scrollTop() > arrow_offset) {
		$("header").addClass("scrolled"); // add background-color to header
	} // end of else
	if ($(window).scrollTop() > 58) {
            $(".back-to-top").addClass("in-view"); // show back-to-top button
    } else {
            $(".back-to-top").removeClass("in-view"); // hide back-to-top button
    } // end of else
} // end of scroll function
	
function documentResized () {

} // end of documentResized function

function setParameters () {    
    blockquote_wrapper = $(".blockquote-wrapper");   
    for (i=0;i<blockquote_wrapper.length; i++) {
        blockquotes_width = $(blockquotes_left[i]).width();
        console.log(blockquotes_width);
        blockquotes_height = $(blockquotes_left[i]).height();
        console.log(blockquotes_height);
        $(blockquote_wrapper[i]).css({"width": $(blockquotes_left[i]).width(),"height": $(blockquotes_left[i]).height()});   
    }
/*  
	section_intro_w = $(".section-intro__wrapper").width();
	section_intro_h = $(".section-intro__wrapper").height();
	section_intro_top = (wh - section_intro_h)/2 - (section_intro_h/2);
	section_intro_left = (ww - section_intro_w)/2;
	$(".section-intro__wrapper").css({"left": section_intro_left, "top": section_intro_top});
*/
    }	
blockquotes_left = $(".blockquote-left");
blockquote_border = $('<div class="blockquote-border"></div>');
$(blockquotes_left).parent().prepend(blockquote_border);



    