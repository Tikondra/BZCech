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
  $('.form__input--js2').inputmask("+7 (999) 999-99-99");
});

function validationForm () {
  var form = document.querySelector('.form');
  var allRadio = form.querySelectorAll('.form__radio');
  var radioInputs = form.querySelectorAll('.form__inputs-item');
  var mailInput = form.querySelector('.form__inputs-item--mail');
  var telInput = form.querySelector('.form__inputs-item--tel');
  var telegramInput = form.querySelector('.form__inputs-item--telegram');
  var repeatInput = form.querySelector('.form__repeat-input');
  var tel1 = form.querySelector('.form__input--js');
  var tel2 = form.querySelector('.form__input--js2');

  allRadio.forEach (function (item) {
    var typeCall = item.value;
    item.addEventListener('change' , function () {
      radioInputs.forEach(function (item) {
        item.classList.add('form__inputs-item--hide');
        if (typeCall === 'mail') {
          mailInput.classList.remove('form__inputs-item--hide');
        } else if (typeCall === 'whatsapp' || typeCall === 'viber') {
          telInput.classList.remove('form__inputs-item--hide');
        } else if (typeCall === 'telegram') {
          telegramInput.classList.remove('form__inputs-item--hide');
        }
      });
    });
  });
  repeatInput.addEventListener('change', function () {
    if (repeatInput.checked === true) {
      tel2.value = tel1.value;
    } else {
      tel2.value = '';
    }
  });
}
if (document.querySelector('.form')) {
  validationForm();
}

$("a.scroll-to").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 80
  }, 800);
});
