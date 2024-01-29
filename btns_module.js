const btns = document.querySelector('.btns');

function createBtn(amount) {
  const btnsArray = [];
  for (let i = 1; i <= amount; i++) {
    const btn = document.createElement('button');
    btn.classList.add('btns__btn');
    btn.textContent = `${i}`;
    btnsArray.push(btn);
    btns.appendChild(btn);
  }
  return btnsArray;
}

export { createBtn };
