// selections

const it1 = document.querySelector('.it1');
const it2 = document.querySelector('.it2');
const it3 = document.querySelector('.it3');
const it4 = document.querySelector('.it4');
const it5 = document.querySelector('.it5');
const it6 = document.querySelector('.it6');
const it7 = document.querySelector('.it7');
const it8 = document.querySelector('.it8');
const it9 = document.querySelector('.it9');

//=== Checking if two squares that are next to each other have the same value ====//

function checkSquare(square) {
  let classOfSquare = square.classList[1];
  let element = null;
  switch (classOfSquare) {
    case 'it1':
      const array = [it2, it4, it5];
      array.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it2':
      const array1 = [it1, it3, it5];
      array1.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it3':
      const array2 = [it2, it5, it6];
      array2.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it4':
      const array3 = [it1, it5, it7];
      array3.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it5':
      const array8 = [it1, it2, it3, it4, it6, it7, it8, it9];
      array8.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it6':
      const array4 = [it3, it5, it9];
      array4.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it7':
      const array5 = [it4, it5, it8];
      array5.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it8':
      const array6 = [it7, it5, it9];
      array6.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
    case 'it9':
      const array7 = [it8, it5, it6];
      array7.forEach((item) => {
        if (item.classList.contains('marked-x')) {
          console.log('TWO TOGETHER');
          element = square;
        }
      });
      break;
  }
  return element;
}

export default checkSquare;
