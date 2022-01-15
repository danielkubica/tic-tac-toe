//==== Functions for setting X and O====//

export function setX(item) {
  item.classList.add('marked-x');
  const line1 = item.querySelector('.line1');
  const line2 = item.querySelector('.line2');
  line1.classList.add('line1-showed');
  line2.classList.add('line2-showed');
}

export function setO(item) {
  item.classList.add('marked-o');
  const circle = item.querySelector('.circle');
  const innerCircle = item.querySelector('.inner-circle');
  circle.classList.add('circle-showed');
  innerCircle.classList.add('inner-circle-showed');
}
