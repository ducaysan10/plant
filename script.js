'use strict';

let didYouKnow = document.querySelector('.did-you-know');
let funFact = document.querySelector('.fun-fact');

const showFact = function () {
  didYouKnow.classList.add('hidden');
  funFact.classList.remove('hidden');
};

const hideFact = function () {
  didYouKnow.classList.remove('hidden');
  funFact.classList.add('hidden');
};
didYouKnow.addEventListener('mouseover', showFact);
funFact.addEventListener('mouseout', hideFact);
