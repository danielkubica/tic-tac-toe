import { it1, it2, it3, it4, it5, it6, it7, it8, it9 } from '../app2.js';

function checkSquareImproved() {
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

  let startingVariable = 0;
  let unmarkedItem = null;

  groups.forEach((group) => {
    startingVariable = 0;
    for (let i = 0; i < group.length; i++) {
      let hasThree = group.every((item) => {
        return (
          item.classList[2] === 'marked-x' || item.classList[2] === 'marked-o'
        );
      });
      if (hasThree) {
        return;
      }

      if (group[i].classList.contains('marked-x')) {
        startingVariable++;
        // console.log(startingVariable);
      }
      if (startingVariable === 2) {
        unmarkedItem = group.filter((item) => {
          return !item.classList.contains('marked-x');
        });
        // console.log('TWO TOGETHER');
        break;
      }
    }
  });

  return unmarkedItem;
}

export default checkSquareImproved;
