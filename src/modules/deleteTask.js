export default function deleteTask(tasks) {
  tasks = document.querySelector(`.mini-list-container${tasks.index}`);
  const listContainer = document.querySelector('ul');
  listContainer.removeChild(tasks);
}