// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  createTaskObj,
  taskItemsElement,
  removeTask,
  completedTask,
  filterTasks
} from './tasks.js';

const inputTaskElement = document.getElementById('create-todo');
const activeBtnElement = document.getElementById('active');
const completedBtnElement = document.getElementById('completed');
const clearBtnElement = document.getElementById('clear');

const filterElements = document.getElementById('task-filters');

inputTaskElement.addEventListener('submit', ev => {
  ev.preventDefault();
  createTaskObj(ev.target.todo.value);

  ev.target.todo.value = '';
});

taskItemsElement.addEventListener('click', ev => {
  if (ev.target.classList.contains('cross')) {
    removeTask(ev.target.previousElementSibling.id);
    return;
  }
  if (ev.target.tagName === 'LABEL') {
    completedTask(ev.target.htmlFor);
  }
});

filterElements.addEventListener('click', ev => {
  if (ev.target.classList.contains('button--active')) {
    filterTasks(ev.target);
  }
});
