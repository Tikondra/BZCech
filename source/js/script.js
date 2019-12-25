function menu() {
  let menuToggle = document.querySelector('.navigation__btn');
  let menu = document.querySelector('.navigation__list');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('navigation__list--active');
  });
};

menu();
