$(document).ready(function() {
	// slider
	const slider = tns({
		container: '.slider-tns__inner',
		items: 1,
		autoHeight: false,
		controls: false,
		navPosition: 'bottom',
		speed: 1500,
		autoplay: true,
		autoplayButtonOutput: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			992: {
				nav: false
			},
			320: {
				nav: true
			}
		}
	});
	document.querySelector('.slider-tns__prev').addEventListener('click', function () {
		slider.goTo('prev');
	});
	document.querySelector('.slider-tns__next').addEventListener('click', function () {
		slider.goTo('next');
	});

	// tabs
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.cards-product').removeClass('cards-product_active').eq($(this).index()).addClass('cards-product_active');
	  });

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.card-product__front-side').eq(i).toggleClass('card-product__front-side_active');
				$('.card-product__flip-side').eq(i).toggleClass('card-product__flip-side_active');
			})
		});
	};

	toggleSlide('.card-product__link');
	toggleSlide('.card-product__link-back');

	// modals

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #modal-consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #modal-consultation, #modal-order, #modal-thanks').fadeOut('slow')
	});

	// $('.btn_catalog').on('click', function() {
	// 	$('.overlay, #modal-order').fadeIn('slow');
	// });

	$('.btn_catalog').each(function(i) {
		$(this).on('click', function() {
			$('#modal-order .modal__descr').text($('.card-product__subtitle').eq(i).text());
			$('.overlay, #modal-order').fadeIn('slow');
		})
	}); 
});