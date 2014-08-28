//js
$(function(){
	var $backtoTop = $('.back-to-top');	
	var $header = $('#header');
	$(window).scroll(function(){
		if($(this).scrollTop() > 150){
			$backtoTop.css("bottom","50px");
			$header.addClass('header-fixed');
			//$backtoTop.fadeIn();
		} else{
			//$backtoTop.fadeOut();
			$backtoTop.css("bottom","-150px");
			$header.removeClass('header-fixed');
		}
		
	});
	$backtoTop.click(function(){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		return false;
	});


var lastId,
    topMenu = $(".top-navigation"),
    topMenuHeight = topMenu.outerHeight()+100,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
		  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 500);
	  e.preventDefault();
	});
//viewport checker
	$('.post').addClass('hidden').viewportChecker({
		classToAdd:'visible animated fadeInDown',
		offset:500
	});
});