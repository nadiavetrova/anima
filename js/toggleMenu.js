function toggleMenu() {
  function openToggleMenu(menuToggle, menu) {
    if (menuToggle && menu) { // Проверяем, существуют ли элементы
      console.log(menuToggle);

      menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
      });
    }
  }

  openToggleMenu(
    document.querySelector(".menuToggleMain"),
    document.querySelector(".headerMenuMainPage")
  );

  openToggleMenu(
    document.querySelector(".menuToggleCatalog"),
    document.querySelector(".headerMenuCatalog")
  );

  openToggleMenu(
    document.querySelector(".menuToggleCard"),
    document.querySelector(".headerMenuCard")
  );

  openToggleMenu(
    document.querySelector(".menuToggleError"),
    document.querySelector(".headerMenuError")
  );
}

document.addEventListener("DOMContentLoaded", toggleMenu);
