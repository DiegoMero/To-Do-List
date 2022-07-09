export default function getTasks() {
  let tasksArray;
  if (localStorage.getItem('tasks') === null) {
    tasksArray = [];
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasksArray;
}