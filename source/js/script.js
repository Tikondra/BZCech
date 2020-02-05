function menu() {
  var menuToggle = document.querySelector('.navi__btn');
  var menu = document.querySelector('.navi__list');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('navi__list--active');
  });
};

menu();

$(document).ready(function(){
  $('.form__input--js').inputmask("+7 (999) 999-99-99");
});

