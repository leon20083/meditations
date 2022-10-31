$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$(".top-menu a").click(function(){
		$(".top-menu a").removeClass('active');
		$(this).addClass("active");
	})

	$(".small-menu a").click(function(){
		$(".small-menu a").removeClass('active');
		$(this).addClass("active");
	})


	$(".toggle-mnu").click(function(e){
		$(this).toggleClass("on");
		$(".small-menu").slideToggle();
		e.preventDefault();
	});

	$(".section-1").waypoint(function(){
		$(".section-1 .meditation").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("meditation-off").addClass("meditation-on");
			}, 150*index);
		});
			
	}, {
		offset : "10%"
	});

	$(".s-title p").animated("zoomIn");
	$(".section-3 .s3-right").animated("zoomIn");
	$(".section-2 .s2-right").animated("zoomIn");
	$(".section-5 .s5-left").animated("zoomIn");
	$(".section-5 .s5-right").animated("fadeInRight");


	$(".section-2 .s-title").waypoint(function(){
		$(".s2-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("s2-item-off").addClass("s2-item-on");
			}, 250*index);
		});
			
	}, {
		offset : "10%"
	});

	$(".section-3").waypoint(function(){
		$(".s3-left .s3-left-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("s3-left-item-off").animated("fadeInLeft");
			}, 150*index);
		});
			
	}, {
		offset : "20%"
	});


	$(".section-4").waypoint(function(){
		$(".s4-right-items .s4r-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("s4r-item-off").animated("fadeInLeft");
			}, 150*index);
		});
			
	}, {
		offset : "20%"
	});

	$(".section-4").waypoint(function(){
		$(".s4-left-items .s4-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass(".s4-item-off").animated("fadeInLeft");
			}, 150*index);
		});
			
	}, {
		offset : "20%"
	});

	

});
