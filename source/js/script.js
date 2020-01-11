function menu() {
  var menuToggle = document.querySelector('.navigation__btn');
  var menu = document.querySelector('.navigation__list');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('navigation__list--active');
  });
};

menu();
