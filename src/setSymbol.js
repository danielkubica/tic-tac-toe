const btnX = document.querySelector('.x');
const btnO = document.querySelector('.o');

export function setSymbolX(e) {
  e.currentTarget.classList.add('btn-activated');
  btnO.classList.remove('btn-activated');
  // console.log(startingSymbol);
  return 1;
}

export function setSymbolO(e) {
  e.currentTarget.classList.add('btn-activated');
  btnX.classList.remove('btn-activated');
  // console.log(startingSymbol);
  return 0;
}
