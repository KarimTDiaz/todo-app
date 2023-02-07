// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createTasks } from './tasks.js';
import { filterTask } from './filter.js';

const inputTaskElement = document.getElementById('create-todo');
const activeBtnElement = document.getElementById('active');
const completedBtnElement = document.getElementById('completed');
const clearBtnElement = document.getElementById('clear');

inputTaskElement.addEventListener('submit', ev => {
  ev.preventDefault();
  createTasks(ev.target.todo.value);
  ev.target.todo.value = '';
});

/* taskItemsElement.addEventListener('change', ev => {
  filterTask(ev.target);
}); */

activeBtnElement.addEventListener('click', ev => {
  filterTask();
});
