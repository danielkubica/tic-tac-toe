import { it1, it2, it3, it4, it5, it6, it7, it8, it9 } from '../app2.js';

function checkWin() {
  const groups = [
    // Line groups
    [it1, it2, it3],
    [it4, it5, it6],
    [it7, it8, it9],

    // Column groups
    [it1, it4, it7],
    [it2, it5, it8],
    [it3, it6, it9],

    // Diagonals
    [it7, it5, it3],
    [it9, it5, it1],
  ];

  let win = false;

  for (let i = 0; i < groups.length; i++) {
    let everyX = groups[i].every((item) => {
      return item.classList.contains('marked-x');
    });
    if (everyX) {
      console.log('WIN-X');
      // need to add win conditions for both X and O sparate
      win = 'win-x';
      break;
    }

    let everyO = groups[i].every((item) => {
      return item.classList.contains('marked-o');
    });
    if (everyO) {
      console.log('WIN-O');
      win = 'win-o';
      break;
    }
  }

  return win;
}

export default checkWin;
