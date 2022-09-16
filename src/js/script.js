$(document).ready(function() {
	const slider = tns({
		container: '.slider-tns__inner',
		items: 1,
		autoHeight: false,
		controls: false,
		navPosition: 'bottom',
		speed: 1500,
		autoplay: true,
		autoplayButtonOutput: false,
		autoplayTimeout: 3000,
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
});