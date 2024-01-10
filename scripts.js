const container = document.querySelector('.container');
//const cell = document.querySelectorAll('.row');

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

makeGrid(16);

