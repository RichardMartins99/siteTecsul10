(function($) {
	var autoScrollId = null;
	var carouselDuration = 40; // ← Mude este número para ajustar a velocidade
	var pixelsPerInterval = 1;

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Carousels
				carousels: {
					speed: 4,
					fadeIn: true,
					fadeDelay: 250
				},

		};

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '961px',   '1280px' ],
			narrow:    [ '841px',   '960px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 350,
			noOpenerFade: true,
			alignment: 'center'
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Carousels.
		$('.carousel').each(function() {

			var	$t = $(this),
				$forward = $('<span class="forward"></span>'),
				$backward = $('<span class="backward"></span>'),
				$reel = $t.children('.reel'),
				$items = $reel.children('article');

			var	pos = 0,
				leftLimit,
				rightLimit,
				itemWidth,
				reelWidth,
				timerId;

			// Items.
				if (settings.carousels.fadeIn) {

					$items.addClass('loading');

					$t.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						enter: function() {

							var	timerId,
								limit = $items.length - Math.ceil($window.width() / itemWidth);

							timerId = window.setInterval(function() {
								var x = $items.filter('.loading'), xf = x.first();

								if (x.length <= limit) {

									window.clearInterval(timerId);
									$items.removeClass('loading');
									return;

								}

								xf.removeClass('loading');

							}, settings.carousels.fadeDelay);

						}
					});

				}

			// Main.
				$t._update = function() {
					pos = 0;
					rightLimit = (-1 * reelWidth) + $window.width();
					leftLimit = 0;
					$t._updatePos();
				};

				$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

			// Forward.
				$forward.remove();

				function iniciarAutoScroll() {
					if (autoScrollId) return;
				
					autoScrollId = window.setInterval(function() {
						pos -= pixelsPerInterval;
				
						if (Math.abs(pos) >= reelWidth / 2) {
							pos = 0;
						}
				
						$t._updatePos();
					}, 10);
				}
				
				
				function pararAutoScroll() {
					if (autoScrollId) {
						window.clearInterval(autoScrollId);
						autoScrollId = null;
					}
				}
				
				

			// Backward.
			$backward
			.appendTo($t)
			.hide()
			.mouseenter(function(e) {
				pararAutoScroll(); // <--- para o scroll automático
		
				timerId = window.setInterval(function() {
					pos += settings.carousels.speed;
		
					if (pos >= leftLimit) {
						window.clearInterval(timerId);
						pos = leftLimit;
					}
		
					$t._updatePos();
				}, 10);
			})
			.mouseleave(function(e) {
				window.clearInterval(timerId);
		
				// Opcional: retomar auto scroll depois que sair do botão
				iniciarAutoScroll();
			});
		
			$t.on('mouseover', function(e) {
				// Pausa se o mouse estiver em qualquer parte da carousel (inclusive .backward)
				if ($t.has(e.target).length > 0 || $t.is(e.target)) {
					pararAutoScroll();
				}
			});
			
			$t.on('mouseleave', function(e) {
				iniciarAutoScroll();
			});
			

			// Init.
				$window.on('load', function() {

					reelWidth = $reel[0].scrollWidth;

					// Cálculo da velocidade em px por intervalo de 10ms
					pixelsPerInterval = reelWidth / (carouselDuration * 100); // 100 * 10ms = 1s


					if (browser.mobile) {
						// Remove os elementos duplicados (segunda metade dos artigos)
						let totalArticles = $items.length;
						let metade = totalArticles / 2;
					
						$items.each(function(index) {
							if (index >= metade) {
								$(this).remove();
							}
						});
					
						// Atualiza a referência dos itens após remoção
						$items = $reel.children('article');
					
						$reel
							.css('overflow-y', 'hidden')
							.css('overflow-x', 'scroll')
							.scrollLeft(0);
						$backward.hide();
					}
					
					else {

						$reel
							.css('overflow', 'visible')
							.scrollLeft(0);
						$backward.show();
						setTimeout(iniciarAutoScroll, 3000);
					}

					$t._update();

					$window.on('resize', function() {
						reelWidth = $reel[0].scrollWidth;
						$t._update();
					}).trigger('resize');

				});

		});

})(jQuery);
