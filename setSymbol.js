const btnX = document.querySelector('.x');
const btnO = document.querySelector('.o');

export function setSymbolX(startingSymbol, e) {
  if (startingSymbol !== undefined) {
    console.log('you already picked a symbol');
  } else {
    e.currentTarget.classList.add('btn-activated');
    btnO.classList.remove('btn-activated');
    // console.log(startingSymbol);
    return 1;
  }
}

export function setSymbolO(startingSymbol, e) {
  if (startingSymbol !== undefined) {
    console.log('you already picked a symbol');
  } else {
    e.currentTarget.classList.add('btn-activated');
    btnX.classList.remove('btn-activated');
    // console.log(startingSymbol);
    return 0;
  }
}
