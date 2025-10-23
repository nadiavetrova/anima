// сортировка по колиеству показываемых карточек товара и по ыозростанию убыванию цены

function catalogSortInit() {
  const sortPriceBtn = document.querySelector('.sortPriceBtn');
  const sortPrice = document.querySelector('.sortPrice');
  const sortList = document.querySelector('.sortListPrice');
  const quantityBox = document.querySelector('.quantity');
  const sortListQuantity = document.querySelector('.sortListQuantity');
  const sortItems = document.querySelectorAll('.sortItemQuantity');
  const cardsContainer = document.querySelector('.catalogCards');
  const showMoreBtn = document.querySelector('.showMoreCardsBTN');
  let cards = Array.from(cardsContainer.querySelectorAll('.card'));
  const sortBtn = document.querySelector('.sortBtn');

  // === Получаем сохранённые настройки ===
  let savedSortType = localStorage.getItem('sortType') || 'По возрастанию цены';
  let savedQuantity = parseInt(localStorage.getItem('quantity') || quantityBox.textContent.trim(), 10);

  // === Устанавливаем начальные значения ===
  sortPrice.textContent = savedSortType;
  quantityBox.textContent = savedQuantity;
  let currentNum = savedQuantity;

  // === СОРТИРОВКА ПО ЦЕНЕ ===
  sortPriceBtn.addEventListener('click', () => {
    sortList.classList.toggle('hide');
  });

  sortList.addEventListener('click', e => {
    if (e.target.classList.contains('sortItem')) {
      const sortType = e.target.textContent.trim();
      sortPrice.textContent = sortType;
      sortList.classList.add('hide');

      // сохраняем в localStorage
      localStorage.setItem('sortType', sortType);

      sortCards(sortType);
      showCards(currentNum);
    }
  });

  // === СОРТИРОВКА ПО КОЛИЧЕСТВУ ===
  sortBtn.addEventListener('click', () => {
    sortListQuantity.classList.toggle('hide');
  });

  sortItems.forEach(item => {
    item.addEventListener('click', () => {
      currentNum = parseInt(item.textContent.trim(), 10);
      quantityBox.textContent = currentNum;
      sortListQuantity.classList.add('hide');

      // сохраняем в localStorage
      localStorage.setItem('quantity', currentNum);

      showCards(currentNum);
    });
  });

  // === КНОПКА "ПОКАЗАТЬ ЕЩЁ" ===
  showMoreBtn.addEventListener('click', () => {
    cards.forEach(card => (card.style.display = ''));
    quantityBox.textContent = cards.length;

    // обновляем localStorage
    localStorage.setItem('quantity', cards.length);
  });

  // === ФУНКЦИЯ СОРТИРОВКИ КАРТОЧЕК ===
  function sortCards(sortType) {
    cards.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('.newPrice').textContent.replace(/[^\d]/g, ''));
      const priceB = parseFloat(b.querySelector('.newPrice').textContent.replace(/[^\d]/g, ''));
      return sortType.includes('возрастанию') ? priceA - priceB : priceB - priceA;
    });
    cards.forEach(card => cardsContainer.appendChild(card));
  }

  // === ФУНКЦИЯ ПОКАЗА КАРТОЧЕК ===
  function showCards(num) {
    cards.forEach((card, i) => {
      card.style.display = i < num ? '' : 'none';
    });
  }

  // === ИНИЦИАЛИЗАЦИЯ ===
  sortCards(savedSortType);
  showCards(savedQuantity);
}

catalogSortInit();


// сортировка по виду камня, изделию, месторождения, цвету
