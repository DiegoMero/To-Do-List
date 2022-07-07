import './style.css';

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
  }
};

addTask();
