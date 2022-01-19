import { setX, setO } from './src/setX-setO.js';
import { setSymbolX, setSymbolO } from './src/setSymbol.js';
import checkSquare from './src/checkSquareImproved.js';
import checkWin from './src/checkWin.js';
import checkTactic2 from './src/checkTactic2.js';
import afterTactic2 from './src/afterCheckTactic2.js';
import AIwinMove from './src/AIwinMove.js';
import AImove from './src/AImove.js';
import checkCorner from './src/checkCorner.js';
import checkTwoCorneres from './src/checkTwoCorners.js';
import checkMiddleTactic from './src/checkMiddleTactic.js';
import displayWin from './src/display_win.js';

// === modules for if O selected === //
import checkMiddleTactic_O from './src/for_symbol_O/checkMiddle_O.js';
import checkTactic2_O from './src/for_symbol_O/checkTactic2_O.js';
import afterTactic2_O from './src/for_symbol_O/afterCheckTactic2_O.js';
import AIwinMove_O from './src/for_symbol_O/AIwinMove_O.js';
import checkCorner_O from './src/for_symbol_O/checkCorner_O.js';
import checkTwoCorneres_O from './src/for_symbol_O/checkTwoCorners_O.js';
import checkSquare_O from './src/for_symbol_O/checkSquare_O.js';
import AImove_O from './src/for_symbol_O/AImove_O.js';

// starting symbol and table values
let startingSymbol;

// selecting items
const btnX = document.querySelector('.x');
const btnO = document.querySelector('.o');
const resetBtn = document.querySelector('.reset-btn');
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

// === reset game === //
resetBtn.addEventListener('click', () => {
  location.reload();
});

// === setting value to the startingSymbol === //
btnX.addEventListener('click', (e) => {
  if (startingSymbol === 0) {
    console.log('you already picked a symbol');
    return;
  } else {
    startingSymbol = setSymbolX(e);
  }
});
btnO.addEventListener('click', (e) => {
  if (startingSymbol === 1) {
    console.log('you already picked a symbol');
    return;
  } else {
    startingSymbol = setSymbolO(e);
  }
});

let afterMiddleTactic = null;

//==== moves ====//
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const item = e.currentTarget;

    // === X selected as starting symbol === //
    if (
      startingSymbol === 1 &&
      !e.currentTarget.classList.contains('marked-x') &&
      !e.currentTarget.classList.contains('marked-o')
    ) {
      // === player move setting X === //
      setX(item);
      let { win, winGroup } = checkWin();
      if (win === 'win-x') {
        displayWin(winGroup);
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
                console.log('after tactic 2');
                return;
              }

              // === PC win move if two Os are togeher ===//
              let twoOtogether = AIwinMove();
              if (twoOtogether) {
                console.log('ai win move');
                console.log(twoOtogether);
                let div = twoOtogether[0];
                setO(div);
                let { win, winGroup } = checkWin();
                if (win === 'win-o') {
                  displayWin(winGroup);
                }
                return;
              }

              // === check corner 1 === //
              if (checkCorner()) {
                let twoTogetherCorner = checkSquare();
                if (twoTogetherCorner) {
                  console.log('check corner but need block');
                  let div = twoTogetherCorner[0];
                  setO(div);
                  return;
                } else {
                  console.log('check corner');
                  setO(it5);
                  return;
                }
              }

              // === check corner 2 === //
              if (checkTwoCorneres()) {
                console.log('check two corners');
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

              // === checking if two Xs are together === //
              let twoTogether = checkSquare();
              if (twoTogether) {
                console.log('two together need block');
                let div = twoTogether[0];
                setO(div);
              } else {
                // === random PC move if everything else not valid === //
                AImove();
                console.log('random move');
              }
            }
            // === this executes if middle tactic was played === //
            else {
              let twoOtogether = AIwinMove();
              if (twoOtogether) {
                console.log('ai win move');
                console.log(twoOtogether);
                let div = twoOtogether[0];
                setO(div);
                let { win, winGroup } = checkWin();
                if (win === 'win-o') {
                  displayWin(winGroup);
                  return;
                }
                return;
              }
              let twoTogetherMiddle = checkSquare();
              if (twoTogetherMiddle) {
                console.log('tactic two but need block');
                let div = twoTogetherMiddle[0];
                setO(div);
                return;
              } else {
                console.log('tactic two executed');
                switch (afterMiddleTactic) {
                  case 1:
                    if (it3.classList[2] === undefined) {
                      setO(it3);
                    } else if (it7.classList[2] === undefined) {
                      setO(it7);
                    } else {
                      AImove();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                  case 2:
                    if (it1.classList[2] === undefined) {
                      setO(it1);
                    } else if (it9.classList[2] === undefined) {
                      setO(it9);
                    } else {
                      AImove();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                  case 3:
                    if (it1.classList[2] === undefined) {
                      setO(it1);
                    } else if (it9.classList[2] === undefined) {
                      setO(it9);
                    } else {
                      AImove();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                  case 4:
                    if (it3.classList[2] === undefined) {
                      setO(it3);
                    } else if (it7.classList[2] === undefined) {
                      setO(it7);
                    } else {
                      AImove();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                }
              }
            }
          }
          // === middle tactic true then this execution === //
          else if (checkMiddle === 1) {
            console.log('middle tactic first move');
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

    // ============================================================================================================================================ //

    // === O selected as starting symbol === //
    else if (startingSymbol === 0) {
      // === player move setting O === //
      setO(item);
      let { win, winGroup } = checkWin();
      if (win === 'win-o') {
        displayWin(winGroup);
        return;
      } else {
        // === if Player didn't win then PC move plays === //
        setTimeout(() => {
          // === checking middle tactic === //
          let checkMiddle = checkMiddleTactic_O();

          // === if middle tactic false program continues === //
          if (!checkMiddle) {
            if (!afterMiddleTactic) {
              // === after tactic 2 === //
              if (afterTactic2_O(checkTactic2_O) === true) {
                return;
              }

              // === PC win move if two Os are togeher ===//
              let twoOtogether = AIwinMove_O();
              if (twoOtogether) {
                console.log(twoOtogether);
                let div = twoOtogether[0];
                setX(div);
                let { win, winGroup } = checkWin();
                if (win === 'win-x') {
                  displayWin(winGroup);
                }
                return;
              }

              // === check corner 1 === //
              if (checkCorner_O()) {
                let twoTogetherCorner = checkSquare_O();
                if (twoTogetherCorner) {
                  console.log('check corner but need block');
                  let div = twoTogetherCorner[0];
                  setX(div);
                  return;
                } else {
                  setX(it5);
                  return;
                }
              }

              // === check corner 2 === //
              if (checkTwoCorneres_O()) {
                let randomNumber = Math.ceil(Math.random() * 4);
                switch (randomNumber) {
                  case 1:
                    setX(it2);
                    break;
                  case 2:
                    setX(it4);
                    break;
                  case 3:
                    setX(it6);
                    break;
                  case 4:
                    setX(it8);
                    break;
                }
                return;
              }

              // === checking if two Xs are together === //
              let twoTogether = checkSquare_O();
              if (twoTogether) {
                console.log(twoTogether);
                let div = twoTogether[0];
                setX(div);
              } else {
                // === random PC move if everything else not valid === //
                AImove_O();
              }
            }
            // === this executes if middle tactic was played === //
            else {
              let twoOtogether = AIwinMove_O();
              if (twoOtogether) {
                console.log('ai win move');
                console.log(twoOtogether);
                let div = twoOtogether[0];
                setX(div);
                let { win, winGroup } = checkWin();
                if (win === 'win-x') {
                  displayWin(winGroup);
                  return;
                }
                return;
              }
              let twoTogetherMiddle = checkSquare_O();
              if (twoTogetherMiddle) {
                console.log('tactic two but need block');
                let div = twoTogetherMiddle[0];
                setX(div);
                return;
              } else {
                switch (afterMiddleTactic) {
                  case 1:
                    if (it3.classList[2] === undefined) {
                      setX(it3);
                    } else if (it7.classList[2] === undefined) {
                      setX(it7);
                    } else {
                      AImove_O();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                  case 2:
                    if (it1.classList[2] === undefined) {
                      setX(it1);
                    } else if (it9.classList[2] === undefined) {
                      setX(it9);
                    } else {
                      AImove_O();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                  case 3:
                    if (it1.classList[2] === undefined) {
                      setX(it1);
                    } else if (it9.classList[2] === undefined) {
                      setX(it9);
                    } else {
                      AImove_O();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                  case 4:
                    if (it3.classList[2] === undefined) {
                      setX(it3);
                    } else if (it7.classList[2] === undefined) {
                      setX(it7);
                    } else {
                      AImove_O();
                      console.log('ai move in tactic two');
                    }
                    afterMiddleTactic = undefined;
                    break;
                }
              }
            }
          }
          // === middle tactic true then this execution === //
          else if (checkMiddle === 1) {
            setX(it1);
            afterMiddleTactic = 1;
          } else if (checkMiddle === 2) {
            setX(it3);
            afterMiddleTactic = 2;
          } else if (checkMiddle === 3) {
            setX(it7);
            afterMiddleTactic = 3;
          } else if (checkMiddle === 4) {
            setX(it9);
            afterMiddleTactic = 4;
          }
        }, 200);
      }
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
