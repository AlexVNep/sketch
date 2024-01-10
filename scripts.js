const container = document.querySelector('.container');
const gridButton = document.querySelector('button');
//const cell = document.querySelectorAll('.row');

let defaultSize = makeGrid(16);

function changeSize () {
  let newSize = prompt('What size grid would you like to choose?');
  let desiredValue = parseInt(newSize);
  if (desiredValue >= 4 && desiredValue <= 100) {
    defaultSize =makeGrid(newSize);
  } else {
    alert("Enter a digit from 1-100 range!");
  }
}

gridButton.addEventListener('click', changeSize);

function makeGrid (size) {  
  for (let i = 0; i < size; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < size; j++) {
      let row = document.createElement('div');
      row.addEventListener('mouseenter', hover);
      row.classList.add('row');
      column.appendChild(row);
    }
    container.appendChild(column);
  }  
}

function hover (e) {
  e.target.style.backgroundColor = 'red';
  }



