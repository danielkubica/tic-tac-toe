const middle = document.querySelector('.win-center');
const top = document.querySelector('.top-win');
const bottom = document.querySelector('.bottom-win');
const left = document.querySelector('.left-win');
const right = document.querySelector('.right-win');

function displayWin(group) {
  console.log('this plays');
  console.log(group[0].classList[1], group[1].classList[1]);
  if (group[0].classList[1] === 'it1' && group[1].classList[1] === 'it2') {
    top.classList.add('win-top');
  } else if (
    group[0].classList[1] === 'it4' &&
    group[1].classList[1] === 'it5'
  ) {
    middle.classList.add('win-line-2');
  } else if (
    group[0].classList[1] === 'it7' &&
    group[1].classList[1] === 'it8'
  ) {
    bottom.classList.add('win-bottom');
  } else if (
    group[0].classList[1] === 'it1' &&
    group[1].classList[1] === 'it4'
  ) {
    left.classList.add('win-left');
  } else if (
    group[0].classList[1] === 'it2' &&
    group[1].classList[1] === 'it5'
  ) {
    middle.classList.add('win-line-4');
  } else if (
    group[0].classList[1] === 'it3' &&
    group[1].classList[1] === 'it6'
  ) {
    right.classList.add('win-right');
  } else if (
    group[0].classList[1] === 'it7' &&
    group[1].classList[1] === 'it5'
  ) {
    middle.classList.add('win-line-3');
  } else if (
    group[0].classList[1] === 'it9' &&
    group[1].classList[1] === 'it5'
  ) {
    middle.classList.add('win-line-1');
  }
}

export default displayWin;
