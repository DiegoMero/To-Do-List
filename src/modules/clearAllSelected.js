import getTasks from './getTask.js';
import saveTaskStorage from './saveTask.js';

export default function clearAllSelected() {
  let tasks1 = getTasks();
  tasks1 = tasks1.filter((task) => !task.completed);
  saveTaskStorage(tasks1, true);
  window.location.reload();
}
