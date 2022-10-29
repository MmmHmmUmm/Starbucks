// SEARCH ELEMENT CLICK OPTIMAZATION

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

//badge appear/disappear w/t scroll

const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(
  function() {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'

      });
      gsap.to(toTopEl, .2, {
        x: 0
      });
    }
    else {
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });
      gsap.to(toTopEl, .2, {
        x: 100,
      });
    }
  }, 300));

toTopEl.addEventListener('click', function() {
  window.scrollTo(0,0);
});

//visual Images appearance

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7
  });
});

//swiper
const swiperNotice = new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 5000
  }
});

const swiperPromotion = new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

promotionEl = document.querySelector(".promotion");
promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');

  }
});

//FLOATING

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// AWARDS

new Swiper('.awards .swiper', {
  direction: 'horizontal',
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: document.querySelector('.awards .swiper-button-next'),
    prevEl: document.querySelector('.awards .swiper-button-prev'),
  },
  centeredSlide: true
});

const yearEl = document.querySelector('.this-year');

yearEl.textContent = new Date().getFullYear();