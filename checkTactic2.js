const it1 = document.querySelector('.it1');
const it2 = document.querySelector('.it2');
const it3 = document.querySelector('.it3');
const it4 = document.querySelector('.it4');
const it5 = document.querySelector('.it5');
const it6 = document.querySelector('.it6');
const it7 = document.querySelector('.it7');
const it8 = document.querySelector('.it8');
const it9 = document.querySelector('.it9');

function checkTactic2() {
  if (
    it1.classList.contains('marked-x') &&
    it6.classList.contains('marked-x') &&
    it7.classList[2] === undefined &&
    it3.classList[2] === undefined &&
    it2.classList[2] === undefined &&
    it8.classList[2] === undefined
  ) {
    return 1;
  }
  if (
    it3.classList.contains('marked-x') &&
    it4.classList.contains('marked-x') &&
    it9.classList[2] === undefined &&
    it1.classList[2] === undefined &&
    it2.classList[2] === undefined &&
    it8.classList[2] === undefined
  ) {
    return 2;
  }
  if (
    it6.classList.contains('marked-x') &&
    it7.classList.contains('marked-x') &&
    it1.classList[2] === undefined &&
    it2.classList[2] === undefined &&
    it8.classList[2] === undefined &&
    it9.classList[2] === undefined
  ) {
    return 3;
  }
  if (
    it4.classList.contains('marked-x') &&
    it9.classList.contains('marked-x') &&
    it3.classList[2] === undefined &&
    it2.classList[2] === undefined &&
    it7.classList[2] === undefined &&
    it8.classList[2] === undefined
  ) {
    return 4;
  }
}

export default checkTactic2;
