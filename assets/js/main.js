
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


$(function () {
	$('.animate-text').textillate({
		loop: true,
		in: { effect: 'fadeInLeft', delay:30},
		out:{ effect: ''}
	});
});

$('.about-container').waypoint(function() {
  setTimeout(function(){$(".about-container").css("visibility","visible")},0);
  setTimeout(function(){$(".about-title").addClass("animated fadeInDown")},0);
  setTimeout(function(){$(".left-content").addClass("animated fadeInLeft")},0);
  setTimeout(function(){$(".right-content").addClass("animated fadeInRight")},0);
  setTimeout(function(){$(".center-content").addClass("animated fadeInUp")},0);
}, { offset: '65%' })

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
