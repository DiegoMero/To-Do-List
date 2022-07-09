import getTasks from './getTask.js';
import addTask from './addTask.js';

export default function displayList() {
  const tasksArray = getTasks();
  tasksArray.forEach((tasks) => addTask(tasks));
}