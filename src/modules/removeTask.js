import getTasks from './getTask.js';
import saveTaskStorage from './saveTask.js';

export default function removeTaskStorage(tasksIndex) {
  let tasksArray = getTasks();
  tasksIndex = parseInt(tasksIndex, 10);
  tasksArray = tasksArray.filter((tasks) => tasks.index !== tasksIndex);
  saveTaskStorage(tasksArray, true);
  window.location.reload();
}