import { it1, it2, it3, it4, it5, it6, it7, it8, it9 } from '../app2.js';

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
