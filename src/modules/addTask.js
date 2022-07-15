import { editTask, editInput } from './editTask.js';
import deleteTask from './deleteTask.js';
import removeTaskStorage from './removeTask.js';
import checkboxStatus from './checkboxStatus.js';

export default function addTask(tasks) {
  const listContainer = document.querySelector('ul');
  const miniListContainer = document.createElement('li');
  miniListContainer.className = `mini-list-container mini-list-container${tasks.index}`;
  miniListContainer.id = tasks.index;
  listContainer.appendChild(miniListContainer);

  const taskCheck = document.createElement('input');
  taskCheck.className = `task-checkbox task-checkbox${tasks.index}`;
  taskCheck.type = 'checkbox';
  taskCheck.id = tasks.index;
  taskCheck.checked = tasks.completed;
  taskCheck.onchange = checkboxStatus;
  miniListContainer.appendChild(taskCheck);

  const taskDescription = document.createElement('input');
  taskDescription.value = tasks.description;
  taskDescription.className = 'task-description';
  taskDescription.disabled = true;
  taskDescription.id = tasks.index;
  taskDescription.onchange = editInput;
  miniListContainer.appendChild(taskDescription);

  const myThreeDots = document.createElement('img');
  myThreeDots.className = `three-dots-icon testDot testDot${tasks.index}`;
  myThreeDots.id = tasks.index;
  miniListContainer.appendChild(myThreeDots);

  myThreeDots.addEventListener('click', (e) => {
    if (myThreeDots.classList.value === (`three-dots-icon testDot testDot${tasks.index}`)) {
      editTask(e);
      myThreeDots.classList.add('trashcan');
      myThreeDots.classList.remove('three-dots-icon');
    } else if (myThreeDots.classList.value === (`testDot testDot${tasks.index} three-dots-icon`)) {
      editTask(e);
      myThreeDots.classList.add('trashcan');
      myThreeDots.classList.remove('three-dots-icon');
    } else {
      deleteTask(tasks);
      removeTaskStorage(e.target.id, tasks);
    }
  });
}