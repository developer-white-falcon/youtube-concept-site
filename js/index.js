const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  spaceBetween: 20,

  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel1-button-next',
    prevEl: '.channel1-button-prev',
  },
});

const swiper2 = new Swiper('.channel-slider2', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  spaceBetween: 20,

  breakpoints: { 
    1900: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel2-button-next',
    prevEl: '.channel2-button-prev',
  },
});

const swiper3 = new Swiper('.channel-slider3', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  spaceBetween: 20,

  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel3-button-next',
    prevEl: '.channel3-button-prev',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
const iconSearch = document.querySelector('.icon-search');
const userAvatar = document.querySelector('.user');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.add('is-open');
  iconSearch.style.display = 'none';
});

userAvatar.addEventListener('click', () => {
  mobileSearch.classList.remove('is-open');
})

if(document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();
}
