// starting symbol
let startingSymbol;

// selecting elements
const btnX = document.querySelector('.x');
const btnO = document.querySelector('.o');
const items = document.querySelectorAll('.item');

// selecting two buttons for X or O
btnX.addEventListener('click', (e) => {
  if (startingSymbol !== undefined) {
    console.log('you already picked a symbol');
  } else {
    startingSymbol = 1;
    e.currentTarget.classList.add('btn-activated');
    btnO.classList.remove('btn-activated');
    console.log(startingSymbol);
  }
});

btnO.addEventListener('click', (e) => {
  if (startingSymbol !== undefined) {
    console.log('you already picked a symbol');
  } else {
    startingSymbol = 0;
    e.currentTarget.classList.add('btn-activated');
    btnX.classList.remove('btn-activated');
    console.log(startingSymbol);
  }
});

// forEach method for selecting square with X or O
items.forEach((items) => {
  const it1 = document.querySelector('.it1');
  const it2 = document.querySelector('.it2');
  const it3 = document.querySelector('.it3');
  const it4 = document.querySelector('.it4');
  const it5 = document.querySelector('.it5');
  const it6 = document.querySelector('.it6');
  const it7 = document.querySelector('.it7');
  const it8 = document.querySelector('.it8');
  const it9 = document.querySelector('.it9');

  items.addEventListener('click', (e) => {
    if (startingSymbol === 1) {
      /* creating elements, adding classes to them and
        appending them to the parent element */
      createCross(e);

      //====== Bot Logic =======//
      switch (e.currentTarget.classList[1]) {
        case 'it1':
          if (it1.classList.contains('')) break;
      }
    } else if (startingSymbol === 0) {
      /* creating elements, adding classes to them and
        appending them to the parent element */
      createCircle(e);
    } else if (startingSymbol === undefined) {
      const alert = document.querySelector('.pickPoint');
      alert.classList.add('alert');
      setTimeout(() => {
        alert.classList.remove('alert');
      }, 2000);
    }
  });
});

// Functions for creating Cross or Circle

function createCross(e) {
  const line1 = document.createElement('div');
  line1.classList.add('line1');
  const line2 = document.createElement('div');
  line2.classList.add('line2');
  e.currentTarget.classList.add('marked-x');
  e.currentTarget.appendChild(line1);
  e.currentTarget.appendChild(line2);
}

function createCircle(e) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const innerCircle = document.createElement('div');
  innerCircle.classList.add('inner-circle');
  e.currentTarget.classList.add('marked-o');
  circle.appendChild(innerCircle);
  e.currentTarget.appendChild(circle);
}
