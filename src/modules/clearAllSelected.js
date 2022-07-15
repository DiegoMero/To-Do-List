import deleteTask from './deleteTask.js';
import getTasks from './getTask.js';
import removeTaskStorage from './removeTask.js';
import saveTaskStorage from './saveTask.js';

export default function clearAllSelected(tasks) {
  tasks = document.querySelectorAll('.task-checkbox');
  const tasksArray2 = Array.from(tasks);
  for (let i = 0; i < tasksArray2.length; i += 1) {
    tasksArray2[i].index = i;
    if (tasksArray2[i].checked) {
      deleteTask(tasksArray2[i]);
      removeTaskStorage(tasksArray2[i]);
    }
  }
}
