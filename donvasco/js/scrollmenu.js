$(document).ready(function(){
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if (scroll > 100){
			// $(".logo").css({"color" : "black"});
			$(".menu-scroll").css({"background-color" : "white"}); //#800104    //#be0200
			$(".menu-scroll").css({"box-shadow" : "0 20px 20px 0 rgba(0, 0, 0, .2)"});
			// $(".menu-scroll").css({"padding" : "0 20px"});
			// $(".menu-principal .logo").css({"color" : "black"});
			$(".menu-scroll").addClass("active");
		}
		else {
				$(".menu-scroll").css({"background-color": "transparent"});
				$(".menu-scroll").css({"box-shadow" : "unset"});
				// $(".menu-principal .logo").css({"color" : "white"});
				$(".menu-scroll").removeClass("active");
				// $(".menu-scroll").css({"padding" : "unset"});
			}	



		
	})

	$(".menu-icon").click(function(){
			$("header nav").slideToggle();
})
	})