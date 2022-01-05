import { setX, setO } from './setX-setO.js';
import { setSymbolX, setSymbolO } from './setSymbol.js';
import checkSquare from './checkSquareImproved.js';
import checkWin from './checkWin.js';
import checkTactic2 from './checkTactic2.js';

// starting symbol and table values
let startingSymbol;

// selecting items
const btnX = document.querySelector('.x');
const btnO = document.querySelector('.o');
const items = document.querySelectorAll('.item');
const it1 = document.querySelector('.it1');
const it2 = document.querySelector('.it2');
const it3 = document.querySelector('.it3');
const it4 = document.querySelector('.it4');
const it5 = document.querySelector('.it5');
const it6 = document.querySelector('.it6');
const it7 = document.querySelector('.it7');
const it8 = document.querySelector('.it8');
const it9 = document.querySelector('.it9');

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
            return;
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
            return;
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
            return;
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

//=== Computer's AI ====//
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
      setO(div);
      i = true;
    }
  }
}

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

function AIwinMove() {
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

      if (group[i].classList.contains('marked-o')) {
        startingVariable++;
        // console.log(startingVariable);
      }
      if (startingVariable === 2) {
        unmarkedItem = group.filter((item) => {
          return !item.classList.contains('marked-o');
        });
        // console.log('O has won');
        break;
      }
    }
  });

  return unmarkedItem;
}
