import { items } from '../../app2.js';
import { setX } from '../setX-setO.js';

function AImove() {
  let i = false;

  while (i === false) {
    const arrayItems = Array.from(items);
    const every = arrayItems.every((item) => {
      return (
        item.classList[2] === 'marked-x' || item.classList[2] === 'marked-o'
      );
    });
    if (every) {
      i = true;
      break;
    }

    i = false;
    const random = Math.ceil(Math.random() * 9);
    const div = document.querySelector(`.it${random}`);
    // console.log(div);
    if (
      !div.classList.contains('marked-x') &&
      !div.classList.contains('marked-o')
    ) {
      setX(div);
      i = true;
    }
  }
}

export default AImove;
