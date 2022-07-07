import './style.css';
import reload from './images/reload.png';
import enter from './images/enter.png';
import threedots from './images/threedots.png';

const tasks = [
  {
    description: 'take the dog for a walk',
    completed: true,
    index: 0,
  },
  {
    description: 'make the dinner',
    completed: false,
    index: 1,
  },
];

const listContainer = document.querySelector('ul');

const addTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const miniListContainer = document.createElement('li');
    miniListContainer.className = 'mini-list-container';
    listContainer.appendChild(miniListContainer);

    const taskCheck = document.createElement('input');
    taskCheck.className = 'task-checkbox';
    taskCheck.type = 'checkbox';
    taskCheck.checked = tasks[i].completed;
    miniListContainer.appendChild(taskCheck);

    const taskDescription = document.createElement('div');
    taskDescription.innerHTML = tasks[i].description;
    miniListContainer.appendChild(taskDescription);

    const myThreeDots = new Image();
    myThreeDots.src = threedots;
    myThreeDots.className = 'three-dots-icon';
    miniListContainer.appendChild(myThreeDots);
  }
};

addTask();

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