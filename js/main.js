(function() {
  'use strict';

  let boxes = document.getElementsByClassName('box');

  function init() {
    let i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        this.src = 'img/coin.png';
        this.className = 'box';
      });
    }
  }

  init();
})();
