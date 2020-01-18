function menu() {
  var menuToggle = document.querySelector('.navigation__btn');
  var menu = document.querySelector('.navigation__list');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('navigation__list--active');
  });
};

menu();

$(document).ready(function(){
  $('.callback__input').inputmask("+7 (999) - 999 9999");
});

