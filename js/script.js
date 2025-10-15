

// вешаем обработчик событий на всю section
//ищем ближайший родительский .advantagesTextBox, потому что именно в нем лежит разворачивающийся текст .advantagesTextMore
//Внутри parentBox (где кликнули) находим скрытый .advantagesTextMore, который нужно показать/скрыть.
//Проверяем, был ли клик внутри .moreInfo
//Пользователь кликает по .moreInfo.
// Код ищет родительский блок.advantagesTextBox.
//Внутри этого блока находит.advantagesTextMore.
//Добавляет или убирает класс "active", который показывает или скрывает текст.


function startTabSwitch() {
  const buttonList = document.querySelector(".advantagesSection");

  buttonList.addEventListener('click', function (e) {
    let target = e.target;

    const parentBox = target.closest(".advantagesTextBox");

    if (!parentBox) return;

    const textMore = parentBox.querySelector(".advantagesTextMore");

    if (target.closest(".moreInfo")) {
      console.log('yes');
      textMore.classList.toggle("activeTabs");
    }
  });
}
startTabSwitch();

function showTextOnScroll() {
  // Проверяем ширину экрана
  if (window.innerWidth >= 770) return;

  const boxes = document.querySelectorAll('.advantagesTextBox');

  function checkVisibility() {
    boxes.forEach(box => {
      const textMore = box.querySelector('.advantagesTextMore');
      if (!textMore) return;

      const rect = box.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Если элемент появился в зоне видимости (нижняя часть экрана)
      if (rect.top < windowHeight - 600 && rect.bottom > 0) {
        textMore.classList.add('activeTabs');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Проверяем сразу при загрузке
}

showTextOnScroll();





function startFooterMenu() {
  const titleList = document.querySelectorAll(".footerTitleList"); // Заголовки
  const menuLists = document.querySelectorAll(".footerMenuList"); // Списки меню

  titleList.forEach((title, index) => {
    title.addEventListener("click", function () {
      console.log(777);

      menuLists[index].classList.toggle("open"); // Переключаем класс у соответствующего списка
    });
  });
}

startFooterMenu();



function startIdeaSlider() {
  const arrowLeft = document.querySelector('.ideasArrow_prev');
  const arrowRight = document.querySelector('.ideasArrow_next');
  const slides = document.querySelectorAll('.ideaSlide');
  const paginationLines = document.querySelector('.paginationLineBox');

  let currentSlideIndex = 0;

  function hideSlide() {
    slides[currentSlideIndex].classList.remove('block');
  }

  function nextSlide() {
    hideSlide()
    removeActiveClass()
    currentSlideIndex++;
    if (currentSlideIndex > slides.length - 1) {
      currentSlideIndex = 0;
    }
    addActiveClass()
    showSlide()
  }

  arrowRight.addEventListener('click', nextSlide);


  function previosSlide() {
    hideSlide()
    removeActiveClass()

    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }

    addActiveClass()
    showSlide()
  }

  arrowLeft.addEventListener('click', previosSlide);

  const paginationLineBox = [];

  function createPaginationLine() {
    const div = document.createElement('div');
    div.className = 'paginationLine';
    paginationLines.appendChild(div);
    paginationLineBox.push(div);
  }


  function addPagination() {
    slides.forEach(createPaginationLine);
    paginationLineBox[0].classList.add('active');
  }

  addPagination()

  function addActiveClass() {
    paginationLineBox[currentSlideIndex].classList.add('active');
  }

  function removeActiveClass() {
    paginationLineBox[currentSlideIndex].classList.remove('active');
  }


  function showSlide() {
    slides[currentSlideIndex].classList.add('block');
  }


}
startIdeaSlider();

