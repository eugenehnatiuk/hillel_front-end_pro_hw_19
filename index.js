'use strict';

import { createBtn } from './btns_module.js';

const btnsArray = createBtn(10);

const EVEN_PROMISE_ARRAY = [];
const ODD_PROMISE_ARRAY = [];

btnsArray.forEach((btn) => {
  const isEven = +btn.textContent % 2 === 0;

  const promise = new Promise((resolve) => {
    btn.onclick = () => {
      btn.classList.add('active');
      resolve('btn clicked');
    };
  });
  if (isEven) {
    EVEN_PROMISE_ARRAY.push(promise);
  } else {
    ODD_PROMISE_ARRAY.push(promise);
  }
});

const EVEN_PROMISES = Promise.all(EVEN_PROMISE_ARRAY).then(() =>
  setTimeout(() => {
    alert('ALL EVEN BTNS HAVE BEEN PUSHED');
  }, 100)
);
const ODD_PROMISES = Promise.all(ODD_PROMISE_ARRAY).then(() =>
  setTimeout(() => {
    alert('ALL ODD BTNS HAVE BEEN PUSHED');
  }, 100)
);

Promise.all([EVEN_PROMISES, ODD_PROMISES]).then(() =>
  setTimeout(() => {
    alert('ALL BTNS HAVE BEEN PUSHED');
  }, 100)
);
