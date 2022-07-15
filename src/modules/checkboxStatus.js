import getTasks from './getTask.js';
import saveTaskStorage from './saveTask.js';

export default function checkboxStatus(checkStatus) {
  checkStatus = checkStatus.target.id;
  const isChecked = document.querySelector(`.task-checkbox${checkStatus}`);
  const tasksArray = getTasks();
  const index = parseInt(checkStatus, 10) - 1;
  if (isChecked.checked === true) {
    tasksArray[index].completed = true;
  } else {
    tasksArray[index].completed = false;
  }
  saveTaskStorage(tasksArray, true);
}