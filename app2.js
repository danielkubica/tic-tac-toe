import { setX, setO } from './setX-setO.js';
import { setSymbolX, setSymbolO } from './setSymbol.js';
import checkSquare from './checkSquareImproved.js';
import checkWin from './checkWin.js';
import checkTactic2 from './checkTactic2.js';
import afterTactic2 from './afterCheckTactic2.js';
import AIwinMove from './AIwinMove.js';
import AImove from './AImove.js';

// starting symbol and table values
let startingSymbol;

// selecting items
const btnX = document.querySelector('.x');
const btnO = document.querySelector('.o');
export const items = document.querySelectorAll('.item');
export const it1 = document.querySelector('.it1');
export const it2 = document.querySelector('.it2');
export const it3 = document.querySelector('.it3');
export const it4 = document.querySelector('.it4');
export const it5 = document.querySelector('.it5');
export const it6 = document.querySelector('.it6');
export const it7 = document.querySelector('.it7');
export const it8 = document.querySelector('.it8');
export const it9 = document.querySelector('.it9');

// setting value to the startingSymbol
btnX.addEventListener('click', (e) => {
  startingSymbol = setSymbolX(startingSymbol, e);
});
btnO.addEventListener('click', (e) => {
  startingSymbol = setSymbolO(startingSymbol, e);
});

//==== Moves ====//
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const item = e.currentTarget;
    if (
      startingSymbol === 1 &&
      !e.currentTarget.classList.contains('marked-x') &&
      !e.currentTarget.classList.contains('marked-o')
    ) {
      // player move
      setX(item);
      let winX = checkWin();
      if (winX === true) {
        return;
      } else {
        // PC move
        setTimeout(() => {
          if (afterTactic2(checkTactic2) === true) {
            return;
          }
          let twoOtogether = AIwinMove();
          if (twoOtogether) {
            console.log(twoOtogether);
            let div = twoOtogether[0];
            setO(div);
            return;
          }
          if (checkCorner()) {
            setO(it5);
            return;
          }
          if (checkTwoCorneres()) {
            let randomNumber = Math.ceil(Math.random() * 4);
            switch (randomNumber) {
              case 1:
                setO(it2);
                break;
              case 2:
                setO(it4);
                break;
              case 3:
                setO(it6);
                break;
              case 4:
                setO(it8);
                break;
            }
            return;
          }
          let twoTogether = checkSquare();
          if (twoTogether) {
            console.log(twoTogether);
            let div = twoTogether[0];
            setO(div);
          } else {
            AImove();
          }
          if (checkWin() === true) {
            return;
          }
        }, 200);
      }
    } else if (startingSymbol === 0) {
      // Player move
      setO(item);

      // PC move
      setTimeout(() => {
        let twoTogether = checkSquare();
        if (twoTogether) {
          console.log(twoTogether);
          let div = twoTogether[0];
          setO(div);
        } else {
          AImove();
        }
      }, 200);
    }

    if (startingSymbol === undefined) {
      const alert = document.querySelector('.pickPoint');
      alert.classList.add('alert');
      setTimeout(() => {
        alert.classList.remove('alert');
      }, 2000);
    }
  });
});

// //=== Computer's AI ====//
// function AImove() {
//   let i = false;

//   while (i === false) {
//     const arrayItems = Array.from(items);
//     const every = arrayItems.every((item) => {
//       return (
//         item.classList[2] === 'marked-x' || item.classList[2] === 'marked-o'
//       );
//     });
//     if (every) {
//       i = true;
//       break;
//     }

//     i = false;
//     const random = Math.ceil(Math.random() * 9);
//     const div = document.querySelector(`.it${random}`);
//     // console.log(div);
//     if (
//       !div.classList.contains('marked-x') &&
//       !div.classList.contains('marked-o')
//     ) {
//       setO(div);
//       i = true;
//     }
//   }
// }

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

function checkTwoCorneres() {
  if (
    (it1.classList.contains('marked-x') &&
      it9.classList.contains('marked-x') &&
      it2.classList[2] === undefined &&
      it4.classList[2] === undefined &&
      it6.classList[2] === undefined &&
      it8.classList[2] === undefined) ||
    (it3.classList.contains('marked-x') &&
      it7.classList.contains('marked-x') &&
      it2.classList[2] === undefined &&
      it4.classList[2] === undefined &&
      it6.classList[2] === undefined &&
      it8.classList[2] === undefined)
  ) {
    return true;
  }
}
