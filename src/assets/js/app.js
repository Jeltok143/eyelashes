const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 25,
  autoplay: {
		delay: 2700,
	},

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  lazy: {
		loadPrevNext: true,
	},

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});