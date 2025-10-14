// function toggleMenu() {
//   const menuToggle = document.querySelector(".menuToggle");
//   const menu = document.querySelector(".headerMenu");

//   menuToggle.addEventListener("click", function () {
//     menu.classList.toggle("active");
//   });
// }
// toggleMenu()


function startFulterMenu() {
  const filterTitle = document.querySelectorAll('.filter-title');
  const filterList = document.querySelectorAll('.filter-list');

  filterTitle.forEach((title, index) => {
    title.addEventListener("click", function () {

      filterList[index].classList.toggle("openfilterList");
    });
  });
}
startFulterMenu()


function startSortQuantity() {
  //работает, осталось добавить взаимосвязь с карточками!
  const quantity = document.querySelector('.quantity');
  const sortListQuantity = document.querySelector('.sortListQuantity');
  const sortBtn = document.querySelector('.sortBtn');
  const sortListPrice = document.querySelector('.sortListPrice');
  const sortPrice = document.querySelector('.sortPrice')
  const sortPriceBtn = document.querySelector('.sortPriceBtn')


  sortBtn.addEventListener('click', function () {
    openChoose(sortListQuantity, quantity);
  });

  sortPriceBtn.addEventListener('click', function () {
    openChoose(sortListPrice, sortPrice);
  });

  function openChoose(btn, sortText) {
    btn.classList.toggle('hide')
    sortText.textContent = '';
    btn.addEventListener('click', function (e) {
      console.log(e.target);
      sortText.textContent = e.target.textContent;
      btn.classList.add('hide')
    })
  }
}

startSortQuantity();
