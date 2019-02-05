(function() {
  'use strict';

  let boxes = document.getElementsByClassName('box');

  let contents = [
    'coin.png',
    'empty.png',
    'cobra.png'
  ];

  function init() {
    let i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        this.src = 'img/' + contents[Math.floor(Math.random() * contents.length)];
        this.className = 'box';
      });
    }
  }

  init();
})();
