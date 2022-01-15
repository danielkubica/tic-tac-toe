import { it1, it2, it3, it4, it5, it6, it7, it8, it9 } from './app2.js';

function checkMiddleTactic() {
  if (
    it5.classList.contains('marked-x') &&
    it1.classList[2] === undefined &&
    it2.classList[2] === undefined &&
    it3.classList[2] === undefined &&
    it4.classList[2] === undefined &&
    it6.classList[2] === undefined &&
    it7.classList[2] === undefined &&
    it8.classList[2] === undefined &&
    it9.classList[2] === undefined
  ) {
    const random = Math.ceil(Math.random() * 4);
    return random;
  }
}

export default checkMiddleTactic;
