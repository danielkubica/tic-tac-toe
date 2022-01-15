import { setX, setO } from './setX-setO.js';
import { setSymbolX, setSymbolO } from './setSymbol.js';
import checkSquare from './checkSquareImproved.js';
import checkWin from './checkWin.js';
import checkTactic2 from './checkTactic2.js';
import afterTactic2 from './afterCheckTactic2.js';
import AIwinMove from './AIwinMove.js';
import AImove from './AImove.js';
import checkCorner from './checkCorner.js';
import checkTwoCorneres from './checkTwoCorners.js';
import checkMiddleTactic from './checkMiddleTactic.js';

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

// === setting value to the startingSymbol === //
btnX.addEventListener('click', (e) => {
  startingSymbol = setSymbolX(startingSymbol, e);
});
btnO.addEventListener('click', (e) => {
  startingSymbol = setSymbolO(startingSymbol, e);
});

let afterMiddleTactic = null;

//==== moves ====//
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const item = e.currentTarget;

    // === player move + pc move when X selected as starting symbol === //
    if (
      startingSymbol === 1 &&
      !e.currentTarget.classList.contains('marked-x') &&
      !e.currentTarget.classList.contains('marked-o')
    ) {
      // === player move setting X === //
      setX(item);
      let winX = checkWin();
      if (winX === true) {
        return;
      } else {
        // === if Player didn't win then PC move plays === //
        setTimeout(() => {
          // === checking middle tactic === //
          let checkMiddle = checkMiddleTactic();

          // === if middle tactic false program continues === //
          if (!checkMiddle) {
            if (!afterMiddleTactic) {
              // === after tactic 2 === //
              if (afterTactic2(checkTactic2) === true) {
                return;
              }

              // === PC win move if two Os are togeher ===//
              let twoOtogether = AIwinMove();
              if (twoOtogether) {
                console.log(twoOtogether);
                let div = twoOtogether[0];
                setO(div);
                return;
              }

              // === check corner 1 === //
              if (checkCorner()) {
                setO(it5);
                return;
              }

              // === check corner 2 === //
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

              // === checking if two are together === //
              let twoTogether = checkSquare();
              if (twoTogether) {
                console.log(twoTogether);
                let div = twoTogether[0];
                setO(div);
              } else {
                // === random PC move if everything else not valid === //
                AImove();
              } // === checking win === //
              if (checkWin() === true) {
                return;
              }
            }
            // === this executes if middle tactic was played === //
            else {
              switch (afterMiddleTactic) {
                case 1:
                  if (it3.classList[2] === undefined) {
                    setO(it3);
                  } else {
                    setO(it7);
                  }
                  afterMiddleTactic = undefined;
                  break;
                case 2:
                  if (it1.classList[2] === undefined) {
                    setO(it1);
                  } else {
                    setO(it9);
                  }
                  afterMiddleTactic = undefined;
                  break;
                case 3:
                  if (it1.classList[2] === undefined) {
                    setO(it1);
                  } else {
                    setO(it9);
                  }
                  afterMiddleTactic = undefined;
                  break;
                case 4:
                  if (it3.classList[2] === undefined) {
                    setO(it3);
                  } else {
                    setO(it7);
                  }
                  afterMiddleTactic = undefined;
                  break;
              }
            }
          }
          // === middle tactic true then this execution === //
          else if (checkMiddle === 1) {
            setO(it1);
            afterMiddleTactic = 1;
          } else if (checkMiddle === 2) {
            setO(it3);
            afterMiddleTactic = 2;
          } else if (checkMiddle === 3) {
            setO(it7);
            afterMiddleTactic = 3;
          } else if (checkMiddle === 4) {
            setO(it9);
            afterMiddleTactic = 4;
          }
        }, 200);
      }
    }
    // === player move + pc move when O selected as starting symbol === //
    else if (startingSymbol === 0) {
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

    // === if now symbol has been selected === //
    if (startingSymbol === undefined) {
      const alert = document.querySelector('.pickPoint');
      alert.classList.add('alert');
      setTimeout(() => {
        alert.classList.remove('alert');
      }, 2000);
    }
  });
});
