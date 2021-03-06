(function ($) {
	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			visibleClass: 'is-menu-visible',
			target: $body,
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
		});

	// Banner.
	var $banner = $('#banner'),
		$header = $('#header');

	if ($banner.length > 0) {
		// IE: Height fix.
		if (browser.name == 'ie') {
			breakpoints.on('>small', function () {
				$banner.css('height', '100vh');
			});

			breakpoints.on('<=small', function () {
				$banner.css('height', '');
			});
		}

		// More button.
		$banner.find('.more').addClass('scrolly');

		// Header.
		$header.addClass('with-banner').addClass('alt');

		$banner.scrollex({
			mode: 'top',
			top: '-100vh',
			bottom: 10,
			enter: function () {
				$header.addClass('alt');
			},
			leave: function () {
				$header.removeClass('alt');
			},
		});
	}

	// Banner.
	var $banner = $('#banner2'),
		$header = $('#header');

	if ($banner.length > 0) {
		// IE: Height fix.
		if (browser.name == 'ie') {
			breakpoints.on('>small', function () {
				$banner.css('height', '100vh');
			});

			breakpoints.on('<=small', function () {
				$banner.css('height', '');
			});
		}

		// More button.
		$banner.find('.more').addClass('scrolly');

		// Header.
		$header.addClass('with-banner').addClass('alt');

		$banner.scrollex({
			mode: 'top',
			top: '-100vh',
			bottom: 10,
			enter: function () {
				$header.addClass('alt');
			},
			leave: function () {
				$header.removeClass('alt');
			},
		});
	}

	// Spotlights.
	var $spotlight = $('.spotlight');

	if ($spotlight.length > 0 && browser.canUse('transition'))
		$spotlight.each(function () {
			var $this = $(this);

			$this.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function () {
					$this.addClass('inactive');
				},
				enter: function () {
					$this.removeClass('inactive');
				},
			});
		});

	// Features.
	var $features = $('.features');

	if ($features.length > 0 && browser.canUse('transition'))
		$features.each(function () {
			var $this = $(this);

			$this.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function () {
					$this.addClass('inactive');
				},
				enter: function () {
					$this.removeClass('inactive');
				},
			});
		});

	// Scrolly.
	$('.scrolly').scrolly();

	// Initial scroll.
	$window.on('load', function () {
		$window.trigger('scroll');
	});
})(jQuery);

// POST form data to zapier on submit
// $('#myForm').submit(function(e) {
//   e.preventDefault();
//   $.ajax({
//     url: 'https://hooks.zapier.com/hooks/catch/6752497/ombg3lr/',
//     type: 'post',
//     data: $('#myForm').serialize(),
//     success: function() {
//       // Redirect to another success page
//       window.location = 'https://apartinc.ca/';
//     }
//   });
// });

// Video Modal Lightbox

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-placeholder', {
		width: 640,
		height: 360,
		videoId: '-ze37NCz5oI',
		events: {
			onReady: initialize,
		},
	});
}
function initialize() {}

function deployVideo() {
	jQuery('.mm-product-video-modal-container').addClass('open');
	setTimeout(function () {
		jQuery('.mm-product-video-modal').addClass('open');
		player.playVideo();
	}, 250);
}

function destroyVideo() {
	jQuery('.mm-product-video-modal').removeClass('open');
	setTimeout(function () {
		jQuery('.mm-product-video-modal-container').removeClass('open');
		player.pauseVideo();
	}, 250);
}

jQuery('.mm-video-overlay').on('click', function () {
	destroyVideo();
});

jQuery('.mm-launch').on('click', function () {
	deployVideo();
});

$(function () {
	$.scrollify({
		section: 'section',
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.float').fadeIn();
	} else {
		$('.float').fadeOut();
	}
});

$(document).ready(function () {
	$('#modal').click();
});
