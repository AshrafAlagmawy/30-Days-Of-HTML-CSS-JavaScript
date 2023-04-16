const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  // console.log('Drag Start');
}

function dragEnd() {
  this.className = 'fill';
  // console.log('Drag End');
}

function dragOver(e) {
  e.preventDefault();
  // console.log('Drag Over');
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
  // console.log('Drag Enter');
}

function dragLeave() {
  this.className = 'empty';
  // console.log('Drag Leave');
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  // console.log('Drag Drop');
}
