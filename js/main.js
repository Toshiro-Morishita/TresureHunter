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
        let j;
        for (j = 0; j < boxes.length; j++) {
          boxes[j].src = 'img/' + contents[Math.floor(Math.random() * contents.length)];
          boxes[j].className = 'box disabled';
        }
        this.className = 'box';
      });
    }
  }

  init();
})();
