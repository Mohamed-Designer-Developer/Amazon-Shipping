let btn = document.querySelector('button');
let show = document.querySelector('.text-show');
let input = document.querySelector('input');

const Calculate = () => {
  let cost = Number(input.value);

  if(cost <= 40) {
    cost += 10;
  } 

  show.innerHTML = 'SHIPPING: $' + cost;
//   show.innerHTML = `SHIPPING FREE:  $${cost}`
}

/*

LESSON OBJECTIVES
1- onclick button.
2- Function in javascript.
3- Simple If Statement.
4- Cocatenation vs Interpolation.
*/