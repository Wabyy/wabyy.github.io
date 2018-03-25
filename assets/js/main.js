
(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);


// SLOGAN FADE IN ANIMATION
$(function () {
	$('.animate-text').textillate({
		loop: true,
		in: { effect: 'fadeInLeft', delay:30},
		out:{ effect: ''}
	});
});


// STATS UP ANIMATION
var scrolled = false;
	$('.major').waypoint(function() {
		if(!scrolled){
			var numAnim_1 = new CountUp("target_1", 0.0, 174, 0, 3);
			if (!numAnim_1.error) {
					numAnim_1.start();
					scrolled=true;
			}
			var numAnim_2 = new CountUp("target_2", 0.0, 100, 0, 4);
			if (!numAnim_2.error) {
					numAnim_2.start();
					scrolled=true;
			}
			var numAnim_3 = new CountUp("target_3", 0.0, 3, 0, 3);
			if (!numAnim_3.error) {
					numAnim_3.start();
					scrolled=true;
			}
			var numAnim_4 = new CountUp("target_4", 0.0, 100, 0, 3.5);
			if (!numAnim_4.error) {
					numAnim_4.start();
					scrolled=true;
			}
		}
	}, { offset: '65%' })

// ABOUT US CONTENT ANIMATION
$('.hidden-container-about').waypoint(function() {
  setTimeout(function(){$(".hidden-container-about").css("visibility","visible")},0);
  setTimeout(function(){$(".about-title").addClass("animated fadeInDown")},0);
  setTimeout(function(){$(".left-content").addClass("animated fadeInLeft")},0);
  setTimeout(function(){$(".right-content").addClass("animated fadeInRight")},0);
  setTimeout(function(){$(".center-content").addClass("animated fadeInUp")},0);
}, { offset: '65%' })

// INNOVATION CONTENT ANIMATION
$('.hidden-container-innovation').waypoint(function() {
  setTimeout(function(){$(".hidden-container-innovation").css("visibility","visible")},0);
	setTimeout(function(){$("#first-anim-text").addClass("animated bounceInLeft")},0);
	setTimeout(function(){$("#first-anim-img").addClass("animated bounceInRight")},0);
}, { offset: '45%' })

// RESPONSIVE CONTENT ANIMATION
$('.hidden-container-responsive').waypoint(function() {
  setTimeout(function(){$(".hidden-container-responsive").css("visibility","visible")},0);
	setTimeout(function(){$("#second-anim-text").addClass("animated bounceInRight")},0);
	setTimeout(function(){$("#second-anim-img").addClass("animated bounceInLeft")},0);
}, { offset: '45%' })

// EFFICIENCY CONTENT ANIMATION
$('.hidden-container-efficiency').waypoint(function() {
  setTimeout(function(){$(".hidden-container-efficiency").css("visibility","visible")},0);
	setTimeout(function(){$("#third-anim-text").addClass("animated bounceInLeft")},0);
	setTimeout(function(){$("#third-anim-img").addClass("animated bounceInRight")},0);
}, { offset: '45%' })

// FEATURED CONTENT ANIMATION
$('.hidden-feature-container').waypoint(function() {
  // setTimeout(function(){$(".hidden-feature-container").css("visibility","visible")},0);
	setTimeout(function(){$(".first_feature_anim").css("visibility","visible")},500);
	setTimeout(function(){$(".first_feature_anim").addClass("animated flipInX")},500);

	setTimeout(function(){$(".second_feature_anim").css("visibility","visible")},1000);
	setTimeout(function(){$(".second_feature_anim").addClass("animated flipInX")},1000);

	setTimeout(function(){$(".third_feature_anim").css("visibility","visible")},1500);
	setTimeout(function(){$(".third_feature_anim").addClass("animated flipInX")},1500);
}, { offset: '25%' })
