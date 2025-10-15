function startSlider(initSlideNumber) {
  const slider = document.querySelector('.slider');
  const sliderLine = document.querySelector('.slider-line');
  const slides = document.querySelectorAll('.slide');

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

  function handleClick(event) {
    const btn = event.target.closest('img');
    if (!btn) return;

    const isPrevBtn = btn.classList.contains('imgPrev');
    const isNextBtn = btn.classList.contains('imgNext');

    if (isPrevBtn && store.currentSlide > 1) {
      store.currentSlide--;
    }

    if (isNextBtn && store.currentSlide < store.maxSliderNumber) {
      store.currentSlide++;
    }

    moveSlide();
  }

  slider.addEventListener('click', handleClick);
  window.addEventListener('resize', sliderInit);
  sliderInit();
}

startSlider(3);
