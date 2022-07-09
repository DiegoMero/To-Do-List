import getTasks from './getTask.js';
import saveTaskStorage from './saveTask.js';

export function editTask(e) {
  const taskDescription = e.target.parentNode.querySelector('.task-description');
  taskDescription.disabled = false;
}

export function editInput() {
  const tasksArray = getTasks();
  this.disabled = true;
  const index = parseInt(this.id, 36);
  tasksArray[index].description = this.value;
  saveTaskStorage(tasksArray, true);
  this.parentNode.querySelector('.testDot').classList.add('three-dots-icon');
  this.parentNode.querySelector('.testDot').classList.remove('trashcan');
}