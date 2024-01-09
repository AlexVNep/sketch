const container = document.querySelector('.container');

function makeGrid (size) {  
  for (let i = 0; i < size; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < size; j++) {
      let row = document.createElement('div');
      row.classList.add('row');
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

makeGrid(30);