function menu() {
  var nav = document.querySelector('.navi');
  var menuToggle = nav.querySelector('.navi__btn');
  var menu = nav.querySelector('.navi__list');
  var HEADER__HEIGHT = 140;
  var onNavFix = function () {
    if (window.pageYOffset >= HEADER__HEIGHT) {
      nav.classList.add('navi--fix');
    } else {
      nav.classList.remove('navi--fix');
    }
  };

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('navi__list--active');
    menuToggle.classList.toggle('navi__btn--activ');
  });
  document.addEventListener('scroll', onNavFix);
}

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
  var templateSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  var postForm = function () {
    form.reset();
    creatSuccess();
  };
  var creatSuccess = function () {
    var success = templateSuccess.cloneNode(true);
    form.append(success);
    var check = form.querySelector('.success__svg');
    check.classList.add('animate');
      setTimeout(function(){
      success.remove();
    }, 2700);
  };
  var save = function (data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'call.php');
    xhr.send(data);
  };

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

  var onValidationForm = function () {
    var regExp = /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;
    var tel = tel1.value;
    var valid = regExp.test(tel);
    if (!valid) {
      tel1.setCustomValidity('Некоректный номер');
    } else {
      tel1.setCustomValidity('');
    }
  };
  tel1.addEventListener('blur', onValidationForm)
  form.addEventListener('submit', function (evt) {
    save(new FormData(form));
    postForm();
    evt.preventDefault();
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

function modal () {
  var player;
  function onYouTubeIframeAPIReady(url) {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: url,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
  }
  function stopVideo() {
    player.stopVideo();
  }

  var videoBtn = document.querySelectorAll('.video-portfolio__play');
  var modal = document.querySelector('.modal');
  var close = modal.querySelector('.modal__close');

  var createBox = function () {
    var box = document.createElement('div');
    box.id = 'player';
    modal.append(box);
  }

  videoBtn.forEach(function(item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
      onYouTubeIframeAPIReady(item.dataset.id);
    });
  });
  close.addEventListener('click', function () {
    modal.classList.remove('modal--show');
    modal.querySelector('#player').remove();
    createBox();
    stopVideo();
  });
};

if (document.querySelector('.modal')) {
  modal();
}

