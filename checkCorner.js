import { it1, it2, it3, it4, it5, it6, it7, it8, it9 } from './app2.js';

function checkCorner() {
  if (
    (it1.classList.contains('marked-x') && it5.classList[2] === undefined) ||
    (it3.classList.contains('marked-x') && it5.classList[2] === undefined) ||
    (it7.classList.contains('marked-x') && it5.classList[2] === undefined) ||
    (it9.classList.contains('marked-x') && it5.classList[2] === undefined)
  ) {
    return true;
  }
}

export default checkCorner;
