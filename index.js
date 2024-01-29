'use strict';

import { createBtn } from './btns_generator.js';

const btnsArray = createBtn(10);

const evenPromiseArrey = [];
const oddPromiseArrey = [];

btnsArray.forEach((btn) => {
  const isEven = +btn.textContent % 2 === 0;

  const promise = new Promise((resolve) => {
    btn.onclick = () => {
      btn.classList.add('active');
      resolve('btn clicked');
    };
  });
  if (isEven) {
    evenPromiseArrey.push(promise);
  } else {
    oddPromiseArrey.push(promise);
  }
});

const evenPromises = Promise.all(evenPromiseArrey).then(() =>
  setTimeout(() => {
    alert('ALL EVEN BTNS HAVE BEEN PUSHED');
  }, 100)
);
const oddPromises = Promise.all(oddPromiseArrey).then(() =>
  setTimeout(() => {
    alert('ALL ODD BTNS HAVE BEEN PUSHED');
  }, 100)
);

Promise.all([evenPromises, oddPromises]).then(() =>
  setTimeout(() => {
    alert('ALL BTNS HAVE BEEN PUSHED');
  }, 100)
);
