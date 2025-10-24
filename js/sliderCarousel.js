function startSlider(initSlideNumber) {
  const slider = document.querySelector('.slider');
  const sliderLine = document.querySelector('.slider-line');
  const slides = document.querySelectorAll('.slide');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');

  const store = {
    width: slider.offsetWidth,
    currentSlide: typeof initSlideNumber === 'number' ? initSlideNumber : 1,
    maxSliderNumber: slides.length
  };

  function moveSlide() {
    const offset = (store.currentSlide - 1) * store.width;
    sliderLine.style.transform = 'translateX(' + (-offset) + 'px)';
  }

  function sliderInit() {
    store.width = slider.offsetWidth;

    slides.forEach(slide => {
      slide.style.width = store.width + 'px';
    });

    moveSlide();
  }

  // обработка кнопок
  btnPrev.addEventListener('click', () => {
    if (store.currentSlide > 1) {
      store.currentSlide--;
      moveSlide();
    }
  });

  btnNext.addEventListener('click', () => {
    if (store.currentSlide < store.maxSliderNumber) {
      store.currentSlide++;
      moveSlide();
    }
  });

  window.addEventListener('resize', sliderInit);
  sliderInit();
}

startSlider(1);
