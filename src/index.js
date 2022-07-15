import './style.css';
import reload from './images/reload.png';
import enter from './images/enter.png';
import Tasks from './modules/tasks.js';
import addTask from './modules/addTask.js';
import saveTaskStorage from './modules/saveTask.js';
import displayList from './modules/display.js';
import clearAllSelected from './modules/clearAllSelected.js';

displayList();

const reloadIcon = document.querySelector('.reloadIcon');
const myReload = new Image();
myReload.className = 'reload-icon';
myReload.src = reload;
reloadIcon.appendChild(myReload);

const enterIcon = document.querySelector('.enterIcon');
const myEnter = new Image();
myEnter.className = 'enter-icon';
myEnter.src = enter;
enterIcon.appendChild(myEnter);

const description = document.querySelector('#task');
const enterButton = document.querySelector('.enterIcon');
const clearButton = document.getElementById('clear-btn');

description.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const tasks = new Tasks(description.value);
    saveTaskStorage(tasks);
    addTask(tasks);
    description.value = '';
  }
});

enterButton.addEventListener('click', (event) => {
  event.preventDefault();
  const tasks = new Tasks(description.value);
  saveTaskStorage(tasks);
  addTask(tasks);
  description.value = '';
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearAllSelected();
});
