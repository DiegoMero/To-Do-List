import getTasks from './getTask.js';

export default function saveTaskStorage(tasks, edit = false) {
  let tasksArray = getTasks();
  if (!edit) {
    tasksArray.push(tasks);
  } else {
    tasksArray = tasks;
  }
  for (let i = 0; i < tasksArray.length; i += 1) {
    tasksArray[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}