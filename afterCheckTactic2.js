import { it1, it2, it3, it4, it5, it6, it7, it8, it9 } from './app2.js';
import { setX, setO } from './setX-setO.js';

function afterTactic2(checkTactic2) {
  if (checkTactic2() === 1) {
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber) {
      case 1:
        setO(it3);
        break;
      case 2:
        setO(it2);
        break;
      case 3:
        setO(it8);
        break;
    }
    return true;
  }
  if (checkTactic2() === 2) {
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber) {
      case 1:
        setO(it1);
        break;
      case 2:
        setO(it2);
        break;
      case 3:
        setO(it8);
        break;
    }
    return true;
  }
  if (checkTactic2() === 3) {
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber) {
      case 1:
        setO(it2);
        break;
      case 2:
        setO(it8);
        break;
      case 3:
        setO(it9);
        break;
    }
    return true;
  }
  if (checkTactic2() === 4) {
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber) {
      case 1:
        setO(it2);
        break;
      case 2:
        setO(it7);
        break;
      case 3:
        setO(it8);
        break;
    }
    return true;
  }
}

export default afterTactic2;
