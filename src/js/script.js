const slider = tns({
    container: '.slider-tns__inner',
    items: 1,
	autoHeight: true,
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